(function () {
  "use strict";

  const DATA = window.PC_DATA || {};
  const PROFILE_KEY = "pc_pilot_profile_v1";
  const INTRO_KEY = "pc_pilot_seen_intro_v1";
  const LAST_ROUTE_KEY = "pc_pilot_last_route_v1";
  const MAX_RELATED_VISIBLE = 3;

  const app = document.getElementById("app");
  const toastEl = document.getElementById("toast");

  const state = {
    nodes: [],
    nodeMap: new Map(),
    searchIndex: [],
    profile: null,
    graph: null,
    route: null,
    warnings: []
  };

  class HealthGraphEngine {
    constructor(nodeMap, schema) {
      this.nodeMap = nodeMap;
      this.schema = schema;
      this.forward = new Map();
      this.reverse = new Map();
      this.warnings = [];
    }

    hydrate(edges) {
      const allowedTypes = new Set(this.schema?.enums?.relationshipType || []);

      (edges || []).forEach((edge) => {
        const sourceNode = this.nodeMap.get(edge.from);
        const targetNode = this.nodeMap.get(edge.to);

        if (!sourceNode || !targetNode) {
          this.warnings.push(`Skipped edge with missing node: ${edge.from} -> ${edge.to}`);
          return;
        }
        if (sourceNode.displayStatus !== "published" || targetNode.displayStatus !== "published") {
          this.warnings.push(`Skipped non-published edge: ${edge.from} -> ${edge.to}`);
          return;
        }
        if (!allowedTypes.has(edge.type)) {
          this.warnings.push(`Skipped edge with invalid type: ${edge.type}`);
          return;
        }

        const cleanEdge = {
          from: edge.from,
          to: edge.to,
          type: edge.type,
          label: edge.label || relationshipLabel(edge.type),
          section: edge.section || "next"
        };

        if (!this.forward.has(edge.from)) this.forward.set(edge.from, []);
        this.forward.get(edge.from).push(cleanEdge);

        if (!this.reverse.has(edge.to)) this.reverse.set(edge.to, []);
        this.reverse.get(edge.to).push(cleanEdge);
      });
    }

    getRelated(nodeId, options = {}) {
      const direction = options.direction || "outgoing";
      const types = new Set(options.types || []);
      const max = Number.isFinite(options.max) ? options.max : 10;
      const source = direction === "incoming" ? this.reverse : this.forward;
      const edges = source.get(nodeId) || [];

      return edges
        .filter((edge) => !types.size || types.has(edge.type))
        .slice(0, max)
        .map((edge) => {
          const relatedId = direction === "incoming" ? edge.from : edge.to;
          return {
            edge,
            node: summarizeNode(this.nodeMap.get(relatedId))
          };
        })
        .filter((item) => item.node);
    }
  }

  function init() {
    state.nodes = collectNodes();
    state.nodeMap = new Map(state.nodes.map((node) => [node.id, node]));
    state.graph = new HealthGraphEngine(state.nodeMap, DATA.schema || {});
    state.graph.hydrate(DATA.relationships || []);
    state.warnings = validateData();
    state.searchIndex = buildSearchIndex();
    state.profile = loadProfile();

    window.addEventListener("hashchange", renderRoute);
    app.addEventListener("click", handleClick);
    app.addEventListener("change", handleChange);
    renderRoute();
  }

  function collectNodes() {
    const groups = [
      DATA.shine,
      DATA.symptoms,
      DATA.conditions,
      DATA.medications,
      DATA.supplements,
      DATA.emergencies,
      DATA.contraindications,
      DATA.schedules,
      DATA.monitoring
    ];

    return groups
      .flatMap((group) => Array.isArray(group) ? group : [])
      .map((node) => ({
        mode: node.mode || "heal",
        type: node.type || "note",
        displayStatus: node.displayStatus || "draft",
        safetyLevel: node.safetyLevel || "locked",
        reviewLevel: node.reviewLevel || "clinical",
        keywords: node.keywords || [],
        ...node
      }))
      .filter((node) => node.id && node.displayStatus === "published");
  }

  function validateData() {
    const warnings = [];
    const schema = DATA.schema?.enums || {};
    const enumChecks = ["displayStatus", "safetyLevel", "reviewLevel"];

    state.nodes.forEach((node) => {
      enumChecks.forEach((key) => {
        if (schema[key] && !schema[key].includes(node[key])) {
          warnings.push(`${node.id}: invalid ${key}=${node[key]}`);
        }
      });

      if (["medication", "supplement"].includes(node.type)) {
        const dosingStatus = node.dosing?.status || "locked";
        if (!schema.dosingStatus?.includes(dosingStatus)) {
          warnings.push(`${node.id}: invalid dosing.status=${dosingStatus}`);
        }
        if (dosingStatus !== "approved" && node.dosing?.default) {
          warnings.push(`${node.id}: unapproved dosing default must not be present`);
        }
      }
    });

    return warnings.concat(state.graph?.warnings || []);
  }

  function buildSearchIndex() {
    return state.nodes
      .filter((node) => node.mode === "heal")
      .map((node) => ({
        id: node.id,
        type: node.type,
        text: [node.title, node.summary, node.hero, ...(node.keywords || [])]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
      }));
  }

  function loadProfile() {
    const fallback = createProfile();
    try {
      const raw = localStorage.getItem(PROFILE_KEY);
      if (!raw) return fallback;
      return migrateProfile(JSON.parse(raw));
    } catch (error) {
      console.warn("Profile could not be loaded. Starting fresh.", error);
      return fallback;
    }
  }

  function createProfile() {
    return {
      version: 1,
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      settings: { locale: "en" },
      shinePlan: { items: [] },
      healSummary: {
        symptoms: [],
        conditions: [],
        medications: [],
        supplements: [],
        sideEffects: [],
        emergency: [],
        notes: [],
        questions: []
      }
    };
  }

  function migrateProfile(profile) {
    const next = createProfile();
    if (!profile || typeof profile !== "object") return next;

    next.version = 1;
    next.createdAt = profile.createdAt || next.createdAt;
    next.lastUpdated = profile.lastUpdated || next.lastUpdated;
    next.settings = { ...next.settings, ...(profile.settings || {}) };
    next.shinePlan.items = safeArray(profile.shinePlan?.items).filter((item) => item.id);

    const oldHeal = profile.healSummary || {};
    next.healSummary.symptoms = safeArray(oldHeal.symptoms).filter((item) => item.id);
    next.healSummary.conditions = safeArray(oldHeal.conditions).filter((item) => item.id);
    next.healSummary.medications = safeArray(oldHeal.medications).filter((item) => item.id);
    next.healSummary.supplements = safeArray(oldHeal.supplements).filter((item) => item.id);
    next.healSummary.sideEffects = safeArray(oldHeal.sideEffects).filter((item) => item.id);
    next.healSummary.emergency = safeArray(oldHeal.emergency).filter((item) => item.id);
    next.healSummary.notes = safeArray(oldHeal.notes);
    next.healSummary.questions = safeArray(oldHeal.questions);
    return next;
  }

  function saveProfile() {
    state.profile.lastUpdated = new Date().toISOString();
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(state.profile));
    } catch (error) {
      showToast("Could not save on this device. Storage may be blocked.");
    }
  }

  function safeArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function renderRoute() {
    const hash = window.location.hash || "#/shine";
    const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    const mode = parts[0] || "shine";
    const view = parts[1] || "home";
    const param = parts[2] || null;
    const extra = parts[3] || null;
    state.route = { hash, mode, view, param, extra };

    if (mode !== "map") {
      try { localStorage.setItem(LAST_ROUTE_KEY, hash); } catch (_) { /* ignore */ }
    }

    document.body.classList.toggle("mode-shine", mode === "shine" || mode === "map");
    document.body.classList.toggle("mode-heal", mode === "heal");
    updateNav(mode);

    if (mode === "shine") {
      renderShell(renderShine(view, param));
    } else if (mode === "heal") {
      renderShell(renderHeal(view, param, extra));
    } else if (mode === "map") {
      renderShell(renderHealthMap());
    } else {
      window.location.hash = "#/shine";
      return;
    }

    bindDynamicElements();
    focusMain();
  }

  function updateNav(mode) {
    document.querySelectorAll("[data-nav]").forEach((link) => {
      link.classList.toggle("active", link.dataset.nav === mode || (mode === "map" && link.dataset.nav === "map"));
      if (link.dataset.nav === mode || (mode === "map" && link.dataset.nav === "map")) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function focusMain() {
    const main = document.getElementById("main");
    if (main && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      main.focus({ preventScroll: true });
    }
  }

  function renderShell(content) {
    app.innerHTML = content;
  }

  function renderShine(view, param) {
    if (view === "topic" && param) return renderShineTopic(param);
    return renderShineHome();
  }

  function renderShineHome() {
    const cards = (DATA.site?.shineCards || [])
      .map((id) => state.nodeMap.get(id))
      .filter(Boolean)
      .map((node) => shineCard(node))
      .join("");

    return `
      <section class="hero-panel shine-hero">
        <div>
          <p class="eyebrow">SHINE</p>
          <h1>Start with what helps life feel better.</h1>
          <p class="hero-text">${escapeHTML(DATA.site?.tagline || "")}</p>
          <p class="mode-explainer">SHINE is the warm, non-medical space for daily habits. Use HEAL when you need clinical guidance.</p>
        </div>
        ${renderIntroCard()}
      </section>
      ${renderReturningBanner()}
      <section class="section-block" aria-labelledby="shine-pillars-heading">
        <div class="section-title-row">
          <div>
            <p class="eyebrow">Five pillars</p>
            <h2 id="shine-pillars-heading">Choose one SHINE area</h2>
          </div>
          <a class="text-link" href="#/heal">I need health guidance</a>
        </div>
        <div class="card-grid shine-grid">
          ${cards}
        </div>
      </section>
    `;
  }

  function renderIntroCard() {
    let seen = false;
    try { seen = localStorage.getItem(INTRO_KEY) === "true"; } catch (_) { /* ignore */ }
    if (seen) return "";
    return `
      <aside class="intro-card" aria-label="What this app does">
        <strong>What this app does</strong>
        <p>SHINE builds daily habits. HEAL helps you prepare safer questions and summaries for care.</p>
        <div class="button-row">
          <button class="button primary" data-dismiss-intro data-route="#/shine/topic/sleep">Start with Sleep</button>
          <button class="button secondary" data-dismiss-intro data-route="#/heal">Open HEAL</button>
        </div>
      </aside>
    `;
  }

  function renderReturningBanner() {
    const counts = profileCounts();
    if (counts.total === 0) return "";
    let lastRoute = "#/map";
    try { lastRoute = localStorage.getItem(LAST_ROUTE_KEY) || "#/map"; } catch (_) { /* ignore */ }
    return `
      <aside class="continuity-banner">
        <div>
          <strong>Your saved map is active.</strong>
          <span>${counts.shine} SHINE action${plural(counts.shine)} and ${counts.heal} HEAL item${plural(counts.heal)} saved on this device.</span>
        </div>
        <div class="button-row compact">
          <a class="button secondary" href="${escapeAttr(lastRoute)}">Resume last area</a>
          <a class="button primary" href="#/map">View My Health Map</a>
        </div>
      </aside>
    `;
  }

  function shineCard(node) {
    return `
      <a class="topic-card shine-card" href="${routeForNode(node)}">
        <span class="topic-icon" aria-hidden="true">${iconFor(node.icon || node.type)}</span>
        <span class="card-title">${escapeHTML(node.title)}</span>
        <span class="card-summary">${escapeHTML(node.summary)}</span>
        <span class="card-cta">Open ${escapeHTML(node.shortTitle || node.title)} →</span>
      </a>
    `;
  }

  function renderShineTopic(id) {
    const node = state.nodeMap.get(id);
    if (!node || node.mode !== "shine") return notFound("SHINE topic not found.");

    const benefits = state.graph.getRelated(id, { types: ["benefit", "related_shine"], max: MAX_RELATED_VISIBLE });
    const watch = state.graph.getRelated(id, { types: ["poor_outcome"], max: MAX_RELATED_VISIBLE });

    return `
      <article class="topic-page shine-topic">
        ${breadcrumb("SHINE", "#/shine", node.title)}
        <header class="topic-hero">
          <p class="eyebrow">SHINE topic</p>
          <h1>${escapeHTML(node.title)}</h1>
          <p>${escapeHTML(node.hero || node.summary)}</p>
          <button class="button primary" data-add-node="${escapeAttr(node.id)}">${isInShinePlan(node.id) ? "Added to SHINE Plan" : escapeHTML(node.primaryAction || "Add to SHINE Plan")}</button>
        </header>

        <section class="content-card">
          <h2>Why this matters</h2>
          ${listHTML(node.why)}
        </section>

        <section class="content-card">
          <h2>Practical advice</h2>
          <div class="advice-list">
            ${(node.advice || []).map((tip) => `
              <div class="advice-item">
                <div>
                  <strong>${escapeHTML(tip.title)}</strong>
                  <p>${escapeHTML(tip.text)}</p>
                </div>
                <button class="button small secondary" data-add-action="${escapeAttr(tip.id)}" data-action-title="${escapeAttr(tip.title)}" data-action-source="${escapeAttr(node.id)}">
                  Add
                </button>
              </div>
            `).join("")}
          </div>
        </section>

        ${relatedSection("Good outcomes", "SHINE connections that support daily life.", benefits, "benefit")}
        ${relatedSection("When to watch closer", "If this becomes persistent or concerning, HEAL can help you prepare safer questions.", watch, "watch")}
      </article>
    `;
  }

  function renderHeal(view, param, extra) {
    if (view === "home") return renderHealHome();
    if (view === "list") return renderHealList(param || "all");
    if (view && param) return renderHealNode(param);
    if (view && !param && state.nodeMap.has(view)) return renderHealNode(view);
    return renderHealHome();
  }

  function renderHealHome() {
    return `
      <section class="hero-panel heal-hero">
        <div>
          <p class="eyebrow">HEAL · Clinical Guidance</p>
          <h1>Search health guidance without losing the next step.</h1>
          <p class="hero-text">HEAL is for symptoms, conditions, medicines, supplements, side effects, emergency red flags, and doctor-ready summaries.</p>
        </div>
        <aside class="safety-note" role="note">
          <strong>Safety first</strong>
          <p>This app does not diagnose, prescribe, or replace a clinician. Dosing is locked unless explicitly reviewed.</p>
        </aside>
      </section>
      ${emergencyStrip()}
      <section class="section-block" aria-labelledby="heal-search-heading">
        <div class="section-title-row">
          <div>
            <p class="eyebrow">Find guidance</p>
            <h2 id="heal-search-heading">HEAL search</h2>
          </div>
        </div>
        <label class="search-box">
          <span class="sr-only">Search symptoms, conditions, medications, supplements, and emergencies</span>
          <input id="heal-search" type="search" placeholder="Search fatigue, iron, constipation..." autocomplete="off">
        </label>
        <div id="search-results" class="search-results" aria-live="polite"></div>
      </section>
      <section class="section-block" aria-labelledby="heal-categories-heading">
        <div class="section-title-row">
          <div>
            <p class="eyebrow">Categories</p>
            <h2 id="heal-categories-heading">Choose a HEAL area</h2>
          </div>
        </div>
        <div class="card-grid heal-grid">
          ${categoryCard("Symptoms", "Track symptoms and possible causes.", "#/heal/list/symptom", "pulse")}
          ${categoryCard("Conditions", "Understand possible conditions and what to ask.", "#/heal/list/condition", "clipboard")}
          ${categoryCard("Medications & Supplements", "Save safety questions and side effects.", "#/heal/list/treatment", "pill")}
          ${categoryCard("Emergency Guidance", "Know red flags and urgent next steps.", "#/heal/emergency/emergency-guidance", "alert")}
          ${categoryCard("My Doctor Summary", "Print HEAL items and questions.", "#/map", "print")}
        </div>
      </section>
    `;
  }

  function renderHealList(kind) {
    const titleMap = {
      symptom: "Symptoms",
      condition: "Conditions",
      treatment: "Medications & Supplements",
      emergency: "Emergency Guidance",
      all: "HEAL Topics"
    };
    const nodes = state.nodes.filter((node) => {
      if (node.mode !== "heal") return false;
      if (kind === "treatment") return ["medication", "supplement"].includes(node.type);
      if (kind === "all") return ["symptom", "condition", "medication", "supplement", "emergency", "side_effect"].includes(node.type);
      return node.type === kind || (kind === "symptom" && node.type === "side_effect");
    });

    return `
      <section class="section-block">
        ${breadcrumb("HEAL", "#/heal", titleMap[kind] || "HEAL Topics")}
        <div class="section-title-row">
          <div>
            <p class="eyebrow">HEAL list</p>
            <h1>${escapeHTML(titleMap[kind] || "HEAL Topics")}</h1>
          </div>
        </div>
        <div class="result-list">
          ${nodes.map(resultCard).join("") || emptyState("No published topics in this category yet.")}
        </div>
      </section>
    `;
  }

  function renderHealNode(id) {
    const node = state.nodeMap.get(id);
    if (!node || node.mode !== "heal") return notFound("HEAL topic not found.");

    const related = prioritizeRelated(node.id);
    const isSaved = isInHealSummary(node.id, node.type);

    return `
      <article class="topic-page heal-topic">
        ${breadcrumb("HEAL", "#/heal", node.title)}
        ${node.type !== "emergency" ? emergencyMiniButton() : ""}
        <header class="topic-hero heal-topic-hero">
          <div class="badge-row">${safetyBadges(node)}</div>
          <p class="eyebrow">${escapeHTML(typeLabel(node.type))}</p>
          <h1>${escapeHTML(node.title)}</h1>
          <p>${escapeHTML(node.hero || node.summary)}</p>
          <div class="button-row">
            <button class="button primary" data-add-node="${escapeAttr(node.id)}">${isSaved ? "Added to HEAL Summary" : "Add to HEAL Summary"}</button>
            <a class="button secondary" href="#/map">Open Doctor Summary</a>
          </div>
        </header>

        ${node.type === "emergency" ? emergencyFullBanner() : ""}
        ${renderDosingGate(node)}

        <section class="content-card">
          <h2>Why this matters</h2>
          <p>${escapeHTML(node.summary || node.hero || "")}</p>
          ${listHTML(node.keyFacts)}
        </section>

        <section class="content-card">
          <h2>What to do next</h2>
          ${listHTML(node.whatToDo)}
        </section>

        ${renderDoctorQuestions(node)}
        ${relatedSection("Next step suggestions", "Curated from the hidden health graph. One hop only.", related, "heal-next")}
      </article>
    `;
  }

  function renderDosingGate(node) {
    if (!["medication", "supplement"].includes(node.type)) return "";
    const status = node.dosing?.status || "locked";
    if (status !== "approved") {
      return `
        <section class="locked-card" role="alert">
          <strong>Dosing locked</strong>
          <p>${escapeHTML(node.dosing?.publicText || "Dosing not provided — clinician review required.")}</p>
          <button class="button secondary" data-question-template="Is dosing appropriate for me?" data-question-target="${escapeAttr(node.id)}">Save dosing question</button>
        </section>
      `;
    }
    return `
      <section class="content-card clinical-approved">
        <h2>Reviewed dosing information</h2>
        <p>${escapeHTML(node.dosing.publicText || "Reviewed dosing information available.")}</p>
      </section>
    `;
  }

  function renderDoctorQuestions(node) {
    const templates = (node.questions || []).slice(0, 5).map((question) => `
      <button class="chip" data-question-template="${escapeAttr(question)}" data-question-target="${escapeAttr(node.id)}">${escapeHTML(question)}</button>
    `).join("");

    return `
      <section class="content-card doctor-question-card">
        <h2>Questions for my doctor</h2>
        <p>Add a question to your Doctor Summary. Avoid names, phone numbers, ID numbers, or private identifying details.</p>
        <div class="chip-row">${templates}</div>
        <label class="question-input">
          <span>Your question</span>
          <textarea id="question-${escapeAttr(node.id)}" rows="3" placeholder="Example: Could this be related to my fatigue?"></textarea>
        </label>
        <div class="button-row">
          <button class="button primary" data-save-question="${escapeAttr(node.id)}">Save question for doctor</button>
        </div>
        <p id="question-warning-${escapeAttr(node.id)}" class="field-warning" hidden></p>
      </section>
    `;
  }

  function prioritizeRelated(nodeId) {
    const outgoing = state.graph.getRelated(nodeId, { direction: "outgoing", max: 10 });
    const priority = {
      emergency_if: 0,
      possible_cause: 1,
      treated_by: 2,
      side_effect: 3,
      lifestyle_support: 4,
      benefit: 5,
      related_shine: 6,
      needs_monitoring: 7
    };
    return outgoing
      .sort((a, b) => (priority[a.edge.type] ?? 99) - (priority[b.edge.type] ?? 99))
      .slice(0, MAX_RELATED_VISIBLE);
  }

  function relatedSection(title, subtitle, items, flavor) {
    if (!items || !items.length) return "";
    return `
      <section class="content-card related-section ${escapeAttr(flavor)}">
        <div class="section-title-row compact-title">
          <div>
            <h2>${escapeHTML(title)}</h2>
            <p>${escapeHTML(subtitle)}</p>
          </div>
        </div>
        <div class="next-step-list">
          ${items.slice(0, MAX_RELATED_VISIBLE).map((item) => relatedCard(item)).join("")}
        </div>
      </section>
    `;
  }

  function relatedCard(item) {
    const node = state.nodeMap.get(item.node.id);
    if (!node) return "";
    const bridge = bridgeLabel(item.edge, node);
    const cta = node.mode === "shine" ? "Add to SHINE Plan" : "Add to HEAL Summary";
    const route = routeForNode(node);

    return `
      <article class="next-card ${node.mode === "shine" ? "bridge-card" : ""}">
        <div>
          <span class="relation-label">${escapeHTML(bridge.heading)}</span>
          <h3>${escapeHTML(node.title)}</h3>
          <p>${escapeHTML(bridge.text || item.edge.label || node.summary)}</p>
          ${node.mode === "heal" ? `<div class="badge-row small-badges">${safetyBadges(node)}</div>` : ""}
        </div>
        <div class="next-actions">
          <a class="button secondary small" href="${route}">Learn more</a>
          <button class="button primary small" data-add-node="${escapeAttr(node.id)}">${cta}</button>
        </div>
      </article>
    `;
  }

  function bridgeLabel(edge, node) {
    if (node.mode === "shine" && ["lifestyle_support", "related_shine"].includes(edge.type)) {
      return {
        heading: "The SHINE Connection",
        text: edge.label || `Add ${node.title} to support your daily plan.`
      };
    }
    if (node.mode === "shine") {
      return { heading: "Support Your Recovery", text: edge.label };
    }
    if (edge.type === "poor_outcome" || edge.type === "emergency_if") {
      return { heading: "When to Watch Closer", text: edge.label };
    }
    if (edge.type === "possible_cause") {
      return { heading: "Possible Cause", text: edge.label };
    }
    if (edge.type === "treated_by") {
      return { heading: "Discuss With Clinician", text: edge.label };
    }
    if (edge.type === "side_effect") {
      return { heading: "Possible Side Effect", text: edge.label };
    }
    return { heading: relationshipLabel(edge.type), text: edge.label };
  }

  function categoryCard(title, summary, route, icon) {
    return `
      <a class="topic-card heal-card" href="${escapeAttr(route)}">
        <span class="topic-icon" aria-hidden="true">${iconFor(icon)}</span>
        <span class="card-title">${escapeHTML(title)}</span>
        <span class="card-summary">${escapeHTML(summary)}</span>
        <span class="card-cta">Open →</span>
      </a>
    `;
  }

  function resultCard(node) {
    return `
      <article class="result-card">
        <div>
          <div class="badge-row small-badges">${safetyBadges(node)}</div>
          <h3><a href="${routeForNode(node)}">${escapeHTML(node.title)}</a></h3>
          <p>${escapeHTML(node.summary)}</p>
        </div>
        <div class="result-actions">
          <button class="button secondary small" data-add-node="${escapeAttr(node.id)}">${node.mode === "shine" ? "Add to SHINE" : "Add to HEAL"}</button>
          <a class="button primary small" href="${routeForNode(node)}">View</a>
        </div>
      </article>
    `;
  }

  function renderHealthMap() {
    const profile = state.profile;
    const counts = profileCounts();
    const shineItems = profile.shinePlan.items;
    const heal = profile.healSummary;

    return `
      <section class="section-block map-page">
        <div class="section-title-row">
          <div>
            <p class="eyebrow">Saved locally</p>
            <h1>My Health Map</h1>
            <p class="lede">Your saved SHINE actions and HEAL summary. This is a personal collection, not a diagnosis or medical record.</p>
          </div>
          <div class="button-row map-actions">
            <button class="button primary" data-print-shine>Print SHINE Plan</button>
            <button class="button secondary" data-print-doctor>Print Doctor Summary</button>
            <button class="button secondary" data-export-json>Download JSON</button>
          </div>
        </div>

        <aside class="privacy-banner" role="note">
          <strong>Privacy reminder:</strong> ${escapeHTML(DATA.site?.privacyNotice || "Saved locally on this device only.")}
        </aside>

        <div class="map-summary-row">
          <div><strong>${counts.shine}</strong><span>SHINE action${plural(counts.shine)}</span></div>
          <div><strong>${counts.heal}</strong><span>HEAL item${plural(counts.heal)}</span></div>
          <div><strong>${heal.questions.length}</strong><span>doctor question${plural(heal.questions.length)}</span></div>
        </div>

        <div class="two-panel-map">
          <section class="map-panel shine-panel" aria-labelledby="shine-plan-heading">
            <div class="panel-header">
              <div>
                <p class="eyebrow">Patient-facing</p>
                <h2 id="shine-plan-heading">SHINE Plan</h2>
              </div>
              <a class="text-link" href="#/shine">Add more</a>
            </div>
            ${shineItems.length ? shineItems.map(shinePlanItem).join("") : emptyState("No SHINE actions yet. Start with Sleep, Nutrition, or Exercise.")}
          </section>

          <section class="map-panel heal-panel" aria-labelledby="heal-summary-heading">
            <div class="panel-header">
              <div>
                <p class="eyebrow">Doctor-facing</p>
                <h2 id="heal-summary-heading">HEAL Summary</h2>
              </div>
              <a class="text-link" href="#/heal">Add more</a>
            </div>
            ${healBucket("Symptoms", heal.symptoms, "symptoms")}
            ${healBucket("Conditions viewed", heal.conditions, "conditions")}
            ${healBucket("Medications", heal.medications, "medications")}
            ${healBucket("Supplements", heal.supplements, "supplements")}
            ${healBucket("Side effects noticed", heal.sideEffects, "sideEffects")}
            ${healBucket("Emergency red flags viewed", heal.emergency, "emergency")}
            ${questionsBlock(heal.questions)}
          </section>
        </div>

        <div class="button-row danger-row">
          <button class="button danger" data-clear-profile>Clear My Health Map</button>
        </div>
      </section>
    `;
  }

  function shinePlanItem(item) {
    const checked = item.done ? "checked" : "";
    const node = state.nodeMap.get(item.id);
    const route = node ? routeForNode(node) : "#/shine";
    return `
      <article class="map-item">
        <label class="checkbox-row">
          <input type="checkbox" data-toggle-shine="${escapeAttr(item.id)}" ${checked}>
          <span>
            <strong>${escapeHTML(item.title || node?.title || item.id)}</strong>
            <small>Added ${formatDate(item.addedAt)}</small>
          </span>
        </label>
        <div class="item-actions">
          <a href="${route}" class="text-link">Open</a>
          <button class="link-button" data-remove-shine="${escapeAttr(item.id)}">Remove</button>
        </div>
      </article>
    `;
  }

  function healBucket(title, items, bucket) {
    if (!items.length) return "";
    return `
      <div class="heal-bucket">
        <h3>${escapeHTML(title)}</h3>
        ${items.map((item) => {
          const node = state.nodeMap.get(item.id);
          const route = node ? routeForNode(node) : "#/heal";
          return `
            <article class="map-item compact-map-item">
              <div>
                <strong>${escapeHTML(item.title || node?.title || item.id)}</strong>
                <small>${escapeHTML(typeLabel(node?.type || item.type || bucket))} · Added ${formatDate(item.addedAt)}</small>
                ${node && ["medication", "supplement"].includes(node.type) ? `<p class="mini-warning">Dosing not provided — clinician review required.</p>` : ""}
              </div>
              <div class="item-actions">
                <a href="${route}" class="text-link">Open</a>
                <button class="link-button" data-remove-heal="${escapeAttr(bucket)}" data-remove-id="${escapeAttr(item.id)}">Remove</button>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `;
  }

  function questionsBlock(questions) {
    return `
      <div class="heal-bucket">
        <h3>Questions for doctor</h3>
        ${questions.length ? questions.map((q) => `
          <article class="map-item compact-map-item">
            <div>
              <strong>${escapeHTML(q.text)}</strong>
              <small>${escapeHTML(q.nodeTitle || "General question")} · Added ${formatDate(q.createdAt)}</small>
            </div>
            <button class="link-button" data-remove-question="${escapeAttr(q.id)}">Remove</button>
          </article>
        `).join("") : `<p class="empty-state small-empty">No doctor questions saved yet.</p>`}
      </div>
    `;
  }

  function emergencyStrip() {
    return `
      <aside class="emergency-strip" role="note">
        <strong>Emergency Help</strong>
        <span>If symptoms are severe, sudden, or dangerous, do not wait.</span>
        <a class="button danger small" href="#/heal/emergency/emergency-guidance">Open red flags</a>
      </aside>
    `;
  }

  function emergencyMiniButton() {
    return `<a class="emergency-float" href="#/heal/emergency/emergency-guidance">Emergency Help</a>`;
  }

  function emergencyFullBanner() {
    return `
      <section class="emergency-full" role="alert">
        <strong>Call local emergency services now if you believe immediate help is needed.</strong>
        <p>${escapeHTML(DATA.site?.emergencyNotice || "Do not delay urgent care to use this app.")}</p>
      </section>
    `;
  }

  function safetyBadges(node) {
    if (!node) return "";
    return `
      <span class="safety-badge safety-${escapeAttr(node.safetyLevel)}">${escapeHTML(DATA.schema?.safetyCopy?.[node.safetyLevel] || node.safetyLevel)}</span>
      <span class="safety-badge review-${escapeAttr(node.reviewLevel)}">${escapeHTML(DATA.schema?.reviewCopy?.[node.reviewLevel] || node.reviewLevel)}</span>
    `;
  }

  function bindDynamicElements() {
    const search = document.getElementById("heal-search");
    if (search) {
      search.addEventListener("input", function () {
        renderSearchResults(search.value);
      });
    }
  }

  function renderSearchResults(query) {
    const resultsEl = document.getElementById("search-results");
    if (!resultsEl) return;
    const clean = String(query || "").trim().toLowerCase();
    if (!clean) {
      resultsEl.innerHTML = `<p class="empty-state small-empty">Try: fatigue, iron, constipation.</p>`;
      return;
    }
    const terms = clean.split(/\s+/).filter(Boolean);
    const matches = state.searchIndex
      .map((entry) => {
        const score = terms.reduce((sum, term) => sum + (entry.text.includes(term) ? 1 : 0), 0);
        return { entry, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map((item) => state.nodeMap.get(item.entry.id))
      .filter(Boolean);

    resultsEl.innerHTML = matches.length
      ? `<div class="result-list">${matches.map(resultCard).join("")}</div>`
      : `<p class="empty-state small-empty">No HEAL results found. Try a simpler word.</p>`;
  }

  function handleClick(event) {
    const routeTarget = event.target.closest("[data-route]");
    if (routeTarget) {
      if (routeTarget.hasAttribute("data-dismiss-intro")) markIntroSeen();
      window.location.hash = routeTarget.dataset.route;
    }

    const dismiss = event.target.closest("[data-dismiss-intro]");
    if (dismiss && !routeTarget) {
      markIntroSeen();
      renderRoute();
    }

    const addNodeButton = event.target.closest("[data-add-node]");
    if (addNodeButton) addNodeToProfile(addNodeButton.dataset.addNode);

    const addActionButton = event.target.closest("[data-add-action]");
    if (addActionButton) {
      addActionToShinePlan({
        id: addActionButton.dataset.addAction,
        title: addActionButton.dataset.actionTitle,
        sourceId: addActionButton.dataset.actionSource
      });
    }

    const removeShine = event.target.closest("[data-remove-shine]");
    if (removeShine) removeShineItem(removeShine.dataset.removeShine);

    const removeHeal = event.target.closest("[data-remove-heal]");
    if (removeHeal) removeHealItem(removeHeal.dataset.removeHeal, removeHeal.dataset.removeId);

    const removeQuestion = event.target.closest("[data-remove-question]");
    if (removeQuestion) removeDoctorQuestion(removeQuestion.dataset.removeQuestion);

    const questionTemplate = event.target.closest("[data-question-template]");
    if (questionTemplate) fillQuestionTemplate(questionTemplate.dataset.questionTarget, questionTemplate.dataset.questionTemplate);

    const saveQuestion = event.target.closest("[data-save-question]");
    if (saveQuestion) saveDoctorQuestion(saveQuestion.dataset.saveQuestion);

    if (event.target.closest("[data-print-shine]")) printShinePlan();
    if (event.target.closest("[data-print-doctor]")) printDoctorSummary();
    if (event.target.closest("[data-export-json]")) exportProfileJson();
    if (event.target.closest("[data-clear-profile]")) clearProfile();
  }

  function handleChange(event) {
    const toggle = event.target.closest("[data-toggle-shine]");
    if (toggle) {
      const item = state.profile.shinePlan.items.find((entry) => entry.id === toggle.dataset.toggleShine);
      if (item) {
        item.done = toggle.checked;
        saveProfile();
      }
    }
  }

  function markIntroSeen() {
    try { localStorage.setItem(INTRO_KEY, "true"); } catch (_) { /* ignore */ }
  }

  function addNodeToProfile(nodeId) {
    const node = state.nodeMap.get(nodeId);
    if (!node) return;

    if (node.mode === "shine") {
      addActionToShinePlan({ id: node.id, title: node.title, sourceId: node.id });
      return;
    }

    const bucket = healBucketForType(node.type);
    const list = state.profile.healSummary[bucket];
    if (!list.some((item) => item.id === node.id)) {
      list.push({ id: node.id, title: node.title, type: node.type, addedAt: new Date().toISOString() });
      saveProfile();
      showToast(`${node.title} added to HEAL Summary.`);
      maybeExportReminder();
    } else {
      showToast(`${node.title} is already in HEAL Summary.`);
    }
    renderRoute();
  }

  function addActionToShinePlan(action) {
    if (!action.id) return;
    const list = state.profile.shinePlan.items;
    if (!list.some((item) => item.id === action.id)) {
      list.push({
        id: action.id,
        title: action.title || state.nodeMap.get(action.id)?.title || action.id,
        sourceId: action.sourceId || action.id,
        addedAt: new Date().toISOString(),
        done: false
      });
      saveProfile();
      showToast(`${action.title || "Action"} added to SHINE Plan.`);
      maybeExportReminder();
    } else {
      showToast(`${action.title || "Action"} is already in SHINE Plan.`);
    }
    renderRoute();
  }

  function removeShineItem(id) {
    state.profile.shinePlan.items = state.profile.shinePlan.items.filter((item) => item.id !== id);
    saveProfile();
    renderRoute();
  }

  function removeHealItem(bucket, id) {
    if (!state.profile.healSummary[bucket]) return;
    state.profile.healSummary[bucket] = state.profile.healSummary[bucket].filter((item) => item.id !== id);
    saveProfile();
    renderRoute();
  }

  function fillQuestionTemplate(nodeId, text) {
    const textarea = document.getElementById(`question-${nodeId}`);
    if (textarea) {
      textarea.value = text;
      textarea.focus();
    }
  }

  function saveDoctorQuestion(nodeId) {
    const node = state.nodeMap.get(nodeId);
    const textarea = document.getElementById(`question-${nodeId}`);
    const warning = document.getElementById(`question-warning-${nodeId}`);
    if (!textarea) return;

    const text = textarea.value.trim();
    if (!text) {
      showFieldWarning(warning, "Write a question first.");
      return;
    }

    if (detectPII(text)) {
      showFieldWarning(warning, "This may include personal identifying information. Remove names, phone numbers, emails, or ID numbers before saving.");
      return;
    }

    state.profile.healSummary.questions.push({
      id: `q-${Date.now()}`,
      nodeId,
      nodeTitle: node?.title || "General",
      text,
      createdAt: new Date().toISOString()
    });
    saveProfile();
    textarea.value = "";
    if (warning) warning.hidden = true;
    showToast("Question saved to Doctor Summary.");
    maybeExportReminder();
  }

  function removeDoctorQuestion(id) {
    state.profile.healSummary.questions = state.profile.healSummary.questions.filter((q) => q.id !== id);
    saveProfile();
    renderRoute();
  }

  function detectPII(text) {
    const patterns = [
      /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
      /(?:\+?\d[\d\s().-]{7,}\d)/,
      /\b\d{8,}\b/
    ];
    return patterns.some((pattern) => pattern.test(text));
  }

  function showFieldWarning(el, text) {
    if (!el) return;
    el.textContent = text;
    el.hidden = false;
  }

  function maybeExportReminder() {
    const counts = profileCounts();
    if (counts.total >= 3) {
      showToast("You can print your plan or download a backup from My Health Map.");
    }
  }

  function clearProfile() {
    const ok = window.confirm("Clear all saved SHINE and HEAL items from this device?");
    if (!ok) return;
    state.profile = createProfile();
    saveProfile();
    showToast("My Health Map cleared.");
    renderRoute();
  }

  function printShinePlan() {
    const items = state.profile.shinePlan.items;
    const html = `
      ${printHeader("SHINE Plan", "Patient-facing lifestyle actions")}
      <section>
        <h2>Saved actions</h2>
        ${items.length ? `<ul>${items.map((item) => `<li><strong>${escapeHTML(item.title)}</strong>${item.done ? " — checked" : ""}</li>`).join("")}</ul>` : "<p>No SHINE actions saved yet.</p>"}
      </section>
      ${printFooter("This plan is educational and personal. It does not replace clinician advice.")}
    `;
    openPrintWindow("SHINE Plan", html);
  }

  function printDoctorSummary() {
    const heal = state.profile.healSummary;
    const bucket = (title, items) => items.length ? `
      <section>
        <h2>${escapeHTML(title)}</h2>
        <ul>
          ${items.map((item) => {
            const node = state.nodeMap.get(item.id);
            const dosing = node && ["medication", "supplement"].includes(node.type) ? " <em>Dosing not provided — clinician review required.</em>" : "";
            return `<li><strong>${escapeHTML(item.title || node?.title || item.id)}</strong>${dosing}</li>`;
          }).join("")}
        </ul>
      </section>` : "";

    const html = `
      ${printHeader("Doctor Summary", "Patient-curated HEAL summary")}
      <p class="print-warning"><strong>Important:</strong> This is patient-curated educational information from a local device. It is not a diagnosis, prescription, or clinical record.</p>
      ${bucket("Symptoms", heal.symptoms)}
      ${bucket("Conditions viewed", heal.conditions)}
      ${bucket("Medications", heal.medications)}
      ${bucket("Supplements", heal.supplements)}
      ${bucket("Side effects noticed", heal.sideEffects)}
      ${bucket("Emergency red flags viewed", heal.emergency)}
      <section>
        <h2>Questions for clinician</h2>
        ${heal.questions.length ? `<ol>${heal.questions.map((q) => `<li>${escapeHTML(q.text)} <small>(${escapeHTML(q.nodeTitle || "General")})</small></li>`).join("")}</ol>` : "<p>No questions saved yet.</p>"}
      </section>
      ${printFooter("Review symptoms, medications, supplements, allergies, pregnancy status, kidney/liver conditions, and red flags with a qualified clinician.")}
    `;
    openPrintWindow("Doctor Summary", html);
  }

  function printHeader(title, subtitle) {
    return `
      <header class="print-header">
        <h1>${escapeHTML(title)}</h1>
        <p>${escapeHTML(subtitle)}</p>
        <p>Generated: ${escapeHTML(new Date().toLocaleString())}</p>
      </header>
    `;
  }

  function printFooter(text) {
    return `<footer class="print-footer"><p>${escapeHTML(text)}</p></footer>`;
  }

  function openPrintWindow(title, bodyHtml) {
    const printWindow = window.open("", "_blank", "noopener,noreferrer");
    if (!printWindow) {
      showToast("Print window was blocked. Allow pop-ups for this local file, then try again.");
      return;
    }
    printWindow.document.write(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>${escapeHTML(title)}</title>
          <style>
            body { font-family: Arial, sans-serif; color: #111 !important; background: #fff !important; margin: 32px; line-height: 1.5; }
            h1, h2 { color: #111 !important; }
            h1 { margin-bottom: 0; }
            section { border-top: 1px solid #ccc; padding-top: 14px; margin-top: 18px; }
            li { margin: 7px 0; }
            .print-warning { border: 2px solid #111; padding: 12px; }
            .print-footer { margin-top: 32px; font-size: 12px; color: #333 !important; }
            @media print { body { margin: 18mm; } button { display: none; } }
          </style>
        </head>
        <body>${bodyHtml}<script>window.onload = function(){ window.print(); }<\/script></body>
      </html>
    `);
    printWindow.document.close();
  }

  function exportProfileJson() {
    const savedIds = new Set();
    state.profile.shinePlan.items.forEach((item) => savedIds.add(item.id));
    Object.values(state.profile.healSummary).forEach((value) => {
      if (Array.isArray(value)) value.forEach((item) => item.id && savedIds.add(item.id));
    });

    const manifest = Array.from(savedIds)
      .map((id) => state.nodeMap.get(id))
      .filter(Boolean)
      .map((node) => summarizeNode(node));

    const payload = {
      exportedAt: new Date().toISOString(),
      app: "Patient Care Pilot",
      version: DATA.site?.versionLabel || "v005",
      privacy: "This file may contain user-entered notes/questions. Review before sharing.",
      profile: state.profile,
      manifest
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `patient-care-health-map-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("Health Map JSON downloaded.");
  }

  function healBucketForType(type) {
    if (type === "symptom") return "symptoms";
    if (type === "condition") return "conditions";
    if (type === "medication") return "medications";
    if (type === "supplement") return "supplements";
    if (type === "side_effect") return "sideEffects";
    if (type === "emergency") return "emergency";
    return "notes";
  }

  function isInShinePlan(id) {
    return state.profile.shinePlan.items.some((item) => item.id === id);
  }

  function isInHealSummary(id, type) {
    const bucket = healBucketForType(type);
    return state.profile.healSummary[bucket]?.some((item) => item.id === id);
  }

  function profileCounts() {
    const shine = state.profile?.shinePlan?.items?.length || 0;
    const heal = state.profile ? [
      "symptoms", "conditions", "medications", "supplements", "sideEffects", "emergency", "notes"
    ].reduce((sum, bucket) => sum + (state.profile.healSummary[bucket]?.length || 0), 0) : 0;
    return { shine, heal, total: shine + heal + (state.profile?.healSummary?.questions?.length || 0) };
  }

  function routeForNode(node) {
    if (!node) return "#/shine";
    if (node.mode === "shine") return `#/shine/topic/${node.id}`;
    const routeType = node.type === "side_effect" ? "side-effect" : node.type;
    return `#/heal/${routeType}/${node.id}`;
  }

  function summarizeNode(node) {
    if (!node) return null;
    return {
      id: node.id,
      title: node.title,
      shortTitle: node.shortTitle || node.title,
      mode: node.mode,
      type: node.type,
      summary: node.summary,
      safetyLevel: node.safetyLevel,
      reviewLevel: node.reviewLevel
    };
  }

  function listHTML(items) {
    if (!items || !items.length) return "";
    return `<ul class="clean-list">${items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
  }

  function breadcrumb(root, rootRoute, label) {
    return `<nav class="breadcrumb" aria-label="Breadcrumb"><a href="${escapeAttr(rootRoute)}">${escapeHTML(root)}</a><span aria-hidden="true">/</span><span>${escapeHTML(label)}</span></nav>`;
  }

  function notFound(message) {
    return `
      <section class="section-block">
        <h1>Not found</h1>
        <p>${escapeHTML(message)}</p>
        <a class="button primary" href="#/shine">Go to SHINE</a>
      </section>
    `;
  }

  function emptyState(text) {
    return `<p class="empty-state">${escapeHTML(text)}</p>`;
  }

  function relationshipLabel(type) {
    const labels = {
      benefit: "Good outcome",
      poor_outcome: "When to watch closer",
      possible_cause: "Possible cause",
      symptom_of: "Symptom of",
      treated_by: "Discuss with clinician",
      side_effect: "Possible side effect",
      lifestyle_support: "Support your recovery",
      related_shine: "SHINE connection",
      emergency_if: "Emergency red flag",
      needs_monitoring: "Monitoring question",
      doctor_question: "Doctor question"
    };
    return labels[type] || "Next step";
  }

  function typeLabel(type) {
    const labels = {
      shine_topic: "SHINE topic",
      shine_action: "SHINE action",
      symptom: "Symptom",
      condition: "Condition",
      medication: "Medication",
      supplement: "Supplement",
      side_effect: "Side effect / symptom",
      emergency: "Emergency guidance",
      note: "Clinical note",
      symptoms: "Symptom",
      conditions: "Condition",
      medications: "Medication",
      supplements: "Supplement",
      sideEffects: "Side effect",
      emergency: "Emergency guidance"
    };
    return labels[type] || "Topic";
  }

  function iconFor(name) {
    const icons = {
      moon: "☾",
      sun: "☀",
      shield: "◇",
      leaf: "♧",
      walk: "↗",
      drop: "◌",
      grain: "⋯",
      pulse: "⌁",
      clipboard: "▣",
      pill: "□",
      alert: "!",
      print: "▤"
    };
    return icons[name] || "•";
  }

  function formatDate(value) {
    if (!value) return "today";
    try { return new Date(value).toLocaleDateString(); } catch (_) { return "today"; }
  }

  function plural(count) {
    return count === 1 ? "" : "s";
  }

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.hidden = false;
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => { toastEl.hidden = true; }, 3300);
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttr(value) {
    return escapeHTML(value).replace(/`/g, "&#096;");
  }

  init();
}());
