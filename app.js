const CONFIG = window.PATIENT_CARE_CONFIG || {};
const GROUP_LABELS = {
  "01_healthy_living": "Healthy Living",
  "02_diet_guides": "Diet Guides",
  "03_monitoring": "Body Numbers & Monitoring",
  "04_symptoms": "Symptoms",
  "05_conditions": "Conditions",
  "06_chronic_care": "Chronic Care",
  "07_emergency_now": "Emergency Now",
  "08_medication_safety": "Medication Safety",
  "09_special_circumstances": "Special Circumstances"
};

const state = { pages: [], blocks: [], redFlags: [], showArabicPlaceholders: false };
const urls = {
  pages: CONFIG.USE_LIVE_GOOGLE_SHEET && CONFIG.PAGES_CSV_URL ? CONFIG.PAGES_CSV_URL : "data/pages.csv",
  blocks: CONFIG.USE_LIVE_GOOGLE_SHEET && CONFIG.CONTENT_BLOCKS_CSV_URL ? CONFIG.CONTENT_BLOCKS_CSV_URL : "data/content_blocks.csv",
  redFlags: CONFIG.USE_LIVE_GOOGLE_SHEET && CONFIG.RED_FLAGS_CSV_URL ? CONFIG.RED_FLAGS_CSV_URL : "data/red_flags.csv"
};

function parseCsv(text) {
  const rows = [];
  let row = [], cell = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i], n = text[i + 1];
    if (c === '"' && quoted && n === '"') { cell += '"'; i++; continue; }
    if (c === '"') { quoted = !quoted; continue; }
    if (c === ',' && !quoted) { row.push(cell); cell = ''; continue; }
    if ((c === '\n' || c === '\r') && !quoted) {
      if (c === '\r' && n === '\n') i++;
      row.push(cell); rows.push(row); row = []; cell = '';
      continue;
    }
    cell += c;
  }
  if (cell.length || row.length) { row.push(cell); rows.push(row); }
  const headers = rows.shift() || [];
  return rows.filter(r => r.some(v => v !== '')).map(r => Object.fromEntries(headers.map((h, i) => [h, (r[i] || '').trim()])));
}

async function loadCsv(url) {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Could not load ${url}`);
  return parseCsv(await response.text());
}

function isVisible(row) { return String(row.visible).toLowerCase() === 'true' && row.status === 'published'; }
function groupLabel(groupKey) { return GROUP_LABELS[groupKey] || groupKey || 'Other'; }
function pageTitle(page) { return state.showArabicPlaceholders && page.title_ar ? page.title_ar : page.title_en; }
function blockHeading(block) { return state.showArabicPlaceholders && block.heading_ar ? block.heading_ar : block.heading_en; }
function blockBody(block) { return state.showArabicPlaceholders && block.body_ar ? block.body_ar : block.body_en; }
function colorClass(row) { return row.card_color || row.safety_level || 'blue'; }

function setupFilters() {
  const groupFilter = document.getElementById('groupFilter');
  const groups = [...new Set(state.pages.map(p => p.group_key))].sort();
  for (const group of groups) {
    const option = document.createElement('option');
    option.value = group;
    option.textContent = groupLabel(group);
    groupFilter.appendChild(option);
  }
  document.getElementById('searchInput').addEventListener('input', renderCards);
  groupFilter.addEventListener('change', renderCards);
  document.getElementById('languageToggle').addEventListener('click', () => {
    state.showArabicPlaceholders = !state.showArabicPlaceholders;
    document.documentElement.dir = state.showArabicPlaceholders ? 'rtl' : 'ltr';
    document.getElementById('languageToggle').textContent = state.showArabicPlaceholders ? 'English' : 'Arabic placeholders';
    renderCards();
    const slug = currentSlug(); if (slug) renderDetail(slug);
  });
}

function currentSlug() {
  const hash = location.hash.replace(/^#/, '');
  const params = new URLSearchParams(hash);
  return params.get('page');
}

function renderCards() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const group = document.getElementById('groupFilter').value;
  const cards = document.getElementById('cards');
  const detail = document.getElementById('detail');
  detail.hidden = true;
  cards.hidden = false;
  cards.innerHTML = '';

  const filtered = state.pages.filter(p => {
    const haystack = `${p.title_en} ${p.summary_en} ${p.search_keywords} ${p.topic_type}`.toLowerCase();
    return (group === 'all' || p.group_key === group) && (!q || haystack.includes(q));
  }).sort((a, b) => Number(a.display_order) - Number(b.display_order));

  if (!filtered.length) {
    cards.innerHTML = '<p class="muted">No matching topics.</p>';
    return;
  }

  for (const page of filtered) {
    const el = document.createElement('article');
    el.className = `card ${colorClass(page)}`;
    el.tabIndex = 0;
    el.innerHTML = `
      <span class="tag">${groupLabel(page.group_key)}</span>
      <h2>${escapeHtml(pageTitle(page))}</h2>
      <p>${escapeHtml(page.summary_en)}</p>
      <div class="pills">
        <span class="pill ${page.safety_level}">${escapeHtml(page.safety_level)}</span>
        <span class="pill">${escapeHtml(page.topic_type)}</span>
      </div>`;
    el.addEventListener('click', () => { location.hash = `page=${page.route_slug}`; renderDetail(page.route_slug); });
    el.addEventListener('keydown', e => { if (e.key === 'Enter') { location.hash = `page=${page.route_slug}`; renderDetail(page.route_slug); } });
    cards.appendChild(el);
  }
}

function renderDetail(slug) {
  const page = state.pages.find(p => p.route_slug === slug);
  if (!page) return renderCards();
  const cards = document.getElementById('cards');
  const detail = document.getElementById('detail');
  cards.hidden = true;
  detail.hidden = false;

  const blocks = state.blocks.filter(b => b.page_id === page.page_id && isVisible(b)).sort((a,b) => Number(a.display_order)-Number(b.display_order));
  const flags = state.redFlags.filter(r => r.page_id === page.page_id && isVisible(r)).sort((a,b) => Number(a.display_order)-Number(b.display_order));
  detail.innerHTML = `
    <div class="detail-top">
      <div>
        <p class="eyebrow muted">${groupLabel(page.group_key)}</p>
        <h2>${escapeHtml(pageTitle(page))}</h2>
        <p>${escapeHtml(page.summary_en)}</p>
        <div class="pills"><span class="pill ${page.safety_level}">${escapeHtml(page.safety_level)}</span><span class="pill">${escapeHtml(page.review_required_level)}</span></div>
      </div>
      <button class="back-btn" type="button" id="backBtn">Back</button>
    </div>
    <hr>
    ${blocks.map(b => `<section class="block ${b.safety_level}"><h3>${escapeHtml(blockHeading(b))}</h3><p>${escapeHtml(blockBody(b))}</p></section>`).join('')}
    ${flags.length ? `<h3>Red flags</h3>${flags.map(f => `<div class="redflag"><strong>${escapeHtml(f.trigger_en)}</strong><br>${escapeHtml(f.action_en)}</div>`).join('')}` : ''}
  `;
  document.getElementById('backBtn').addEventListener('click', () => { history.pushState('', document.title, location.pathname + location.search); renderCards(); });
}

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]));
}

async function init() {
  try {
    const [pages, blocks, redFlags] = await Promise.all([loadCsv(urls.pages), loadCsv(urls.blocks), loadCsv(urls.redFlags)]);
    state.pages = pages.filter(isVisible);
    state.blocks = blocks;
    state.redFlags = redFlags;
    document.getElementById('appStatus').hidden = true;
    setupFilters();
    currentSlug() ? renderDetail(currentSlug()) : renderCards();
  } catch (error) {
    document.getElementById('appStatus').innerHTML = `<strong>Could not load pilot data.</strong><br>${escapeHtml(error.message)}<br><span class="muted">If opening locally, use a local server or GitHub Pages. Do not double-click index.html.</span>`;
  }
}
window.addEventListener('hashchange', () => currentSlug() ? renderDetail(currentSlug()) : renderCards());
init();
