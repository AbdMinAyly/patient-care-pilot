const DATA = window.SHINE_APP_DATA;

const app = document.getElementById("app");
const root = document.documentElement;
const navButtons = Array.from(document.querySelectorAll(".nav-button"));
const modeToggle = document.getElementById("modeToggle");
const modeEyebrow = document.getElementById("modeEyebrow");
const modeTitle = document.getElementById("modeTitle");
const modeIntro = document.getElementById("modeIntro");
const safetyNote = document.getElementById("safetyNote");
const homeButton = document.getElementById("homeButton");

let currentView = "shine";
let activeDetail = null;

function setActiveNav(view) {
  navButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.view === view);
  });
}

function setModeTheme(view) {
  const isPatient = view === "patient";
  root.dataset.mode = isPatient ? "patient" : "shine";
  safetyNote.hidden = !isPatient;
  modeToggle.textContent = isPatient ? "Switch to SHINE Mode" : "Switch to Patient Mode";

  if (isPatient) {
    modeEyebrow.textContent = "Mode 2";
    modeTitle.textContent = DATA.patientMode.title;
    modeIntro.textContent = DATA.patientMode.intro;
  } else {
    modeEyebrow.textContent = "Mode 1";
    modeTitle.textContent = DATA.shine.title + ": " + DATA.shine.subtitle;
    modeIntro.textContent = DATA.shine.intro;
  }
}

function navigate(view, detailId = null) {
  currentView = view;
  activeDetail = detailId;
  setActiveNav(view);
  setModeTheme(view);

  if (view === "shine") renderShine(detailId);
  if (view === "diet") renderGuide("diet");
  if (view === "exercise") renderGuide("exercise");
  if (view === "mental") renderGuide("mental");
  if (view === "patient") renderPatientMode(detailId);

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function button(label, className, onClick) {
  const element = document.createElement("button");
  element.type = "button";
  element.className = className;
  element.textContent = label;
  element.addEventListener("click", onClick);
  return element;
}

function renderShine(detailId = null) {
  const pillars = DATA.shine.pillars;
  const active = detailId ? pillars.find(p => p.id === detailId) : null;

  app.innerHTML = `
    <section class="shine-landing">
      <div class="shine-title-card">
        <p class="eyebrow">First screen</p>
        <h2>SHINE</h2>
        <p>The patient starts here before symptoms, medications, or disease pages.</p>
      </div>
      <div class="shine-list" id="shineList"></div>
    </section>
    <section class="detail-zone" id="detailZone"></section>
  `;

  const list = document.getElementById("shineList");
  pillars.forEach(pillar => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "shine-pillar-card";
    card.innerHTML = `
      <span class="checkmark">✓</span>
      <span class="pillar-letter">${pillar.letter}</span>
      <span>
        <strong>${pillar.title}</strong>
        <small>${pillar.short}</small>
      </span>
    `;
    card.addEventListener("click", () => navigate("shine", pillar.id));
    list.appendChild(card);
  });

  if (active) {
    renderPillarDetail(active);
  } else {
    renderShineMap();
  }
}

function renderShineMap() {
  const zone = document.getElementById("detailZone");
  zone.innerHTML = `
    <article class="panel">
      <p class="eyebrow">Combined system</p>
      <h3>Each SHINE pillar leads to the others.</h3>
      <p>This pilot is not five separate pages. It is a loop: sleep supports nutrition, nutrition supports exercise, exercise supports mood, mood protects sleep, and immunity depends on the whole system.</p>
      <div class="connection-flow">
        <span>Sleep</span><b>→</b><span>Nutrition</span><b>→</b><span>Exercise</span><b>→</b><span>Happiness</span><b>→</b><span>Sleep</span>
      </div>
      <button class="primary-action" type="button" onclick="window.__goPatient()">Open Patient Mode</button>
    </article>
  `;
}

function renderPillarDetail(pillar) {
  const zone = document.getElementById("detailZone");
  const connects = pillar.connectsTo.map(link => {
    const target = DATA.shine.pillars.find(p => p.id === link.target);
    return `<button type="button" class="link-card" data-target="${link.target}">
      <strong>${target ? target.title : link.target}</strong>
      <span>${link.text}</span>
    </button>`;
  }).join("");

  zone.innerHTML = `
    <article class="panel pillar-detail">
      <div class="detail-heading">
        <span class="detail-letter">${pillar.letter}</span>
        <div>
          <p class="eyebrow">SHINE pillar</p>
          <h3>${pillar.title}</h3>
          <p>${pillar.summary}</p>
        </div>
      </div>

      <div class="two-column">
        <section>
          <h4>Do today</h4>
          <ul>${pillar.doToday.map(item => `<li>${item}</li>`).join("")}</ul>
        </section>
        <section>
          <h4>This requires the other pillars</h4>
          <div class="link-grid">${connects}</div>
        </section>
      </div>

      <section class="bridge-box">
        <h4>When this leaves SHINE mode</h4>
        <p>${pillar.patientBridge}</p>
        <button class="secondary-action" type="button" onclick="window.__goPatient()">Go to Patient Mode</button>
      </section>
    </article>
  `;

  document.querySelectorAll(".link-card").forEach(card => {
    card.addEventListener("click", () => navigate("shine", card.dataset.target));
  });
}

function renderGuide(kind) {
  const guide = DATA.guides[kind];
  app.innerHTML = `
    <section class="guide-header">
      <p class="eyebrow">${kind === "diet" ? "Food" : kind === "exercise" ? "Movement" : "Mind + movement"}</p>
      <h2>${guide.title}</h2>
      <p>${guide.subtitle}</p>
    </section>
    <section class="guide-grid"></section>
  `;

  const grid = app.querySelector(".guide-grid");
  guide.cards.forEach(card => {
    const article = document.createElement("article");
    article.className = "guide-card";
    article.innerHTML = `
      <h3>${card.title}</h3>
      <p>${card.summary}</p>
      <h4>Simple advice</h4>
      <ul>${card.bullets.map(item => `<li>${item}</li>`).join("")}</ul>
      <h4>Connects to</h4>
      <ul class="muted-list">${card.connects.map(item => `<li>${item}</li>`).join("")}</ul>
    `;
    grid.appendChild(article);
  });

  const back = document.createElement("div");
  back.className = "panel compact-panel";
  back.innerHTML = `
    <h3>Back to SHINE</h3>
    <p>These guide pages are still part of SHINE mode. They avoid medication and illness content unless the user switches to Patient Mode.</p>
  `;
  back.appendChild(button("Return to SHINE", "primary-action", () => navigate("shine")));
  app.appendChild(back);
}

function renderPatientMode(sectionId = null) {
  const sections = DATA.patientMode.sections;
  const active = sectionId ? sections.find(section => section.id === sectionId) : null;

  app.innerHTML = `
    <section class="patient-home">
      <div class="patient-intro">
        <p class="eyebrow">Secondary mode</p>
        <h2>Patient Mode</h2>
        <p>${DATA.patientMode.subtitle}</p>
      </div>
      <div class="patient-grid"></div>
    </section>
    <section class="detail-zone" id="patientDetail"></section>
  `;

  const grid = app.querySelector(".patient-grid");
  sections.forEach(section => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `patient-card patient-${section.theme}`;
    card.innerHTML = `
      <strong>${section.title}</strong>
      <span>${section.summary}</span>
    `;
    card.addEventListener("click", () => navigate("patient", section.id));
    grid.appendChild(card);
  });

  if (active) {
    const detail = document.getElementById("patientDetail");
    detail.innerHTML = `
      <article class="panel patient-detail-panel">
        <p class="eyebrow">Patient Mode section</p>
        <h3>${active.title}</h3>
        <p>${active.summary}</p>
        <h4>Prototype content blocks</h4>
        <ul>${active.bullets.map(item => `<li>${item}</li>`).join("")}</ul>
        <div class="bridge-box patient-warning">
          <h4>Clinical safety rule</h4>
          <p>This section should be clinically reviewed before public use. Medication doses, emergency thresholds, and disease-specific instructions should not be guessed.</p>
        </div>
      </article>
    `;
  } else {
    document.getElementById("patientDetail").innerHTML = `
      <article class="panel compact-panel">
        <h3>This is the second app inside the app.</h3>
        <p>The color changes, the language changes, and the user is now in medical-support mode instead of SHINE lifestyle mode.</p>
        <button class="secondary-action" type="button" onclick="window.__goShine()">Back to SHINE</button>
      </article>
    `;
  }
}

navButtons.forEach(button => {
  button.addEventListener("click", () => navigate(button.dataset.view));
});

modeToggle.addEventListener("click", () => {
  navigate(currentView === "patient" ? "shine" : "patient");
});

homeButton.addEventListener("click", () => navigate("shine"));

window.__goPatient = () => navigate("patient");
window.__goShine = () => navigate("shine");

navigate("shine");
