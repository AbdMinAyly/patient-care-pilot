const data = window.PATIENT_CARE_DATA;
const state = { filter: "all", query: "", showArabicPlaceholders: false };

const els = {
  status: document.getElementById("status"),
  cards: document.getElementById("cards"),
  detail: document.getElementById("detail"),
  searchInput: document.getElementById("searchInput"),
  groupFilter: document.getElementById("groupFilter"),
  languageToggle: document.getElementById("languageToggle")
};

function groupLabel(key) {
  return data.groups.find(group => group.key === key)?.label || key;
}
function pageTitle(page) { return state.showArabicPlaceholders ? page.titleAr : page.title; }
function blockHeading(block) { return state.showArabicPlaceholders ? block.headingAr : block.heading; }
function blockBody(block) { return state.showArabicPlaceholders ? block.bodyAr : block.body; }
function normalize(value) { return String(value || "").toLowerCase().trim(); }

function matchesSearch(page) {
  if (!state.query) return true;
  const haystack = [page.title, page.titleAr, page.summary, page.keywords, groupLabel(page.group), page.type].join(" ").toLowerCase();
  return haystack.includes(state.query);
}

function getVisiblePages() {
  return [...data.pages]
    .sort((a, b) => Number(a.order) - Number(b.order))
    .filter(page => state.filter === "all" || page.group === state.filter)
    .filter(matchesSearch);
}

function renderFilters() {
  const groups = [{ key: "all", label: "All" }, ...data.groups];
  els.groupFilter.innerHTML = groups.map(group => `
    <button type="button" class="${state.filter === group.key ? "active" : ""}" data-group="${group.key}">
      ${group.label}
    </button>
  `).join("");

  els.groupFilter.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.group;
      render();
    });
  });
}

function renderCards() {
  const pages = getVisiblePages();

  if (!pages.length) {
    els.status.textContent = "No matching pilot topics.";
    els.cards.innerHTML = "";
    return;
  }

  els.status.textContent = `${pages.length} pilot topic${pages.length === 1 ? "" : "s"} shown.`;
  els.cards.innerHTML = pages.map(page => `
    <button class="topic-card ${page.color}" type="button" data-page-id="${page.id}">
      <div class="card-meta">
        <span class="badge">${groupLabel(page.group)}</span>
        <span class="safety">${page.safety}</span>
      </div>
      <h3>${pageTitle(page)}</h3>
      <p>${page.summary}</p>
      <span class="badge">${page.icon}</span>
    </button>
  `).join("");

  els.cards.querySelectorAll(".topic-card").forEach(card => {
    card.addEventListener("click", () => showDetail(card.dataset.pageId));
  });
}

function showDetail(pageId) {
  const page = data.pages.find(item => item.id === pageId);
  if (!page) return;

  const blocks = data.blocks.filter(block => block.pageId === page.id).sort((a, b) => Number(a.order) - Number(b.order));
  const redFlags = data.redFlags.filter(flag => flag.pageId === page.id).sort((a, b) => Number(a.order) - Number(b.order));
  const related = (page.related || []).map(id => data.pages.find(item => item.id === id)).filter(Boolean);

  els.detail.hidden = false;
  els.detail.innerHTML = `
    <div class="detail-header">
      <button class="back-button" type="button" id="closeDetail">Back to topics</button>
      <p class="eyebrow">${groupLabel(page.group)}</p>
      <h2>${pageTitle(page)}</h2>
      <p>${page.summary}</p>
      <span class="badge">Safety: ${page.safety}</span>
    </div>
    <div class="detail-body">
      ${blocks.map(block => `
        <article class="content-block ${block.safety}">
          <p class="eyebrow">${block.type}</p>
          <h3>${blockHeading(block)}</h3>
          <p>${blockBody(block)}</p>
        </article>
      `).join("")}
      ${redFlags.length ? `
        <article class="red-flag-block">
          <p class="eyebrow">Red flags</p>
          <h3>Seek urgent help for these signs</h3>
          ${redFlags.map(flag => `<p><strong>${flag.trigger}</strong><br>${flag.action}</p>`).join("")}
        </article>
      ` : ""}
      ${related.length ? `
        <article class="content-block">
          <p class="eyebrow">Related</p>
          <h3>Next useful pages</h3>
          <div class="related-links">
            ${related.map(item => `<button type="button" data-page-id="${item.id}">${item.title}</button>`).join("")}
          </div>
        </article>
      ` : ""}
    </div>
  `;

  document.getElementById("closeDetail").addEventListener("click", () => {
    els.detail.hidden = true;
    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  els.detail.querySelectorAll(".related-links button").forEach(button => {
    button.addEventListener("click", () => showDetail(button.dataset.pageId));
  });

  window.location.hash = page.id;
  els.detail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function render() {
  document.body.classList.toggle("rtl", state.showArabicPlaceholders);
  renderFilters();
  renderCards();
}

els.searchInput.addEventListener("input", event => {
  state.query = normalize(event.target.value);
  renderCards();
});

els.languageToggle.addEventListener("click", () => {
  state.showArabicPlaceholders = !state.showArabicPlaceholders;
  els.languageToggle.classList.toggle("active", state.showArabicPlaceholders);
  els.languageToggle.textContent = state.showArabicPlaceholders ? "English" : "Arabic placeholders";
  render();
});

render();
if (window.location.hash) {
  const id = window.location.hash.replace("#", "");
  setTimeout(() => showDetail(id), 100);
}
