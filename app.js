const DATA = window.PATIENT_CARE_CONTENT;
const KEY='pc_pilot_v015_profile';

function validateContent(data){
  const errors=[];
  if(!data||!Array.isArray(data.shine)||!Array.isArray(data.healSections)||!Array.isArray(data.drSections)){
    errors.push('Content store is missing required collections.');
  }
  const ids=new Set();
  const addId=(id,label)=>{if(!id)errors.push(label+' is missing an id.'); else if(ids.has(id))errors.push('Duplicate id: '+id); else ids.add(id)};
  (data.shine||[]).forEach(s=>addId(s.id,'SHINE topic'));
  (data.healSections||[]).forEach(sec=>(sec.items||[]).forEach(i=>addId(i.id,'HEAL item')));
  (data.drSections||[]).forEach(sec=>(sec.items||[]).forEach(i=>addId(i.id,'DR item')));
  (data.shine||[]).forEach(s=>{
    (s.good||[]).concat(s.bad||[]).forEach(r=>{if(!ids.has(r.to))errors.push('Missing SHINE target '+r.to+' from '+s.id)});
    (s.healLinks||[]).forEach(r=>{if(!ids.has(r.id))errors.push('Missing HEAL target '+r.id+' from '+s.id)});
    (s.drLinks||[]).forEach(r=>{if(!ids.has(r.id))errors.push('Missing DR target '+r.id+' from '+s.id)});
  });
  if(errors.length){
    console.error('Patient Care content validation errors:',errors);
    document.body.innerHTML='<main style="padding:24px;font-family:system-ui"><h1>Content file error</h1><p>The local content file could not be loaded safely.</p><pre style="white-space:pre-wrap">'+errors.map(esc).join('\n')+'</pre></main>';
    throw new Error(errors.join('; '));
  }
}
validateContent(DATA);

const app=document.getElementById('app');
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
const shineById=Object.fromEntries(DATA.shine.map(x=>[x.id,x]));
function allHealItems(){return DATA.healSections.flatMap(s=>s.items.map(i=>({...i,section:s.title,sectionId:s.id,area:'heal'})))}
function allDrItems(){return DATA.drSections.flatMap(s=>s.items.map(i=>({...i,section:s.title,sectionId:s.id,area:'dr'})))}
function findHeal(id){return allHealItems().find(x=>x.id===id)}
function findDr(id){return allDrItems().find(x=>x.id===id)}
function profile(){try{return JSON.parse(localStorage.getItem(KEY))||{version:14,shine:[],heal:[],dr:[],questions:[]}}catch(e){return {version:14,shine:[],heal:[],dr:[],questions:[]}}}
function saveProfile(p){p.version=15;p.updatedAt=new Date().toISOString();localStorage.setItem(KEY,JSON.stringify(p))}
function setActive(mode){['shine','heal','dr','summary'].forEach(m=>{const el=document.getElementById('nav-'+m); el.className='navbtn'+(m===mode?' active-'+m:'')})}
function hero(mode,title,text){return `<section class="hero ${mode}"><small>${esc(mode)}</small><h1>${esc(title)}</h1><p>${esc(text)}</p></section>`}
function escapeRegExp(s){return String(s).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
function linkifyShine(text,current){
  let out=esc(text);
  DATA.shine.forEach(s=>{
    if(s.id===current)return;
    const title=escapeRegExp(s.title);
    const re=new RegExp('\\b'+title+'\\b','gi');
    out=out.replace(re,(match)=>`<a class="inline-shine" href="#/shine/${s.id}">${match}</a>`);
  });
  return out;
}
function uniqueTargets(rows){const ids=[];(rows||[]).forEach(r=>{if(r.to&&!ids.includes(r.to))ids.push(r.to)});return ids.map(id=>shineById[id]).filter(Boolean)}
function connectionRows(rows,current){return `<div class="connection-list">${(rows||[]).map(r=>r.icon?`<div class="connection-row with-icon"><span class="connection-icon" aria-hidden="true">${esc(r.icon)}</span><p class="connection-copy">${linkifyShine(r.text,current)}</p></div>`:`<div class="connection-row"><p>${linkifyShine(r.text,current)}</p></div>`).join('')}</div>`}
function renderShine(){setActive('shine'); app.innerHTML=`<div class="screen">${hero('shine','SHINE',DATA.ui.modeDescriptions.shine)}<section class="grid">${DATA.shine.map(s=>`<a class="card mode-card shine" href="#/shine/${s.id}"><div class="big-letter">${s.letter}</div><h3>${esc(s.title)}</h3><p>${esc(s.subtitle)}</p></a>`).join('')}</section></div>`}
function conditionRows(rows,heading){if(!rows||!rows.length)return ''; return `<div class="info-card dr-bridge"><h3>${esc(heading||'Common conditions')}</h3><div class="condition-grid">${rows.map(r=>`<a class="condition-card" href="#/dr/item/${r.id}"><strong>${esc(r.title)}</strong><span>${esc(r.text)}</span></a>`).join('')}</div></div>`}
function healHabitRows(rows,heading,intro){if(!rows||!rows.length)return ''; return `<div class="info-card heal-bridge"><h3>${esc(heading||'Good habits')}</h3>${intro?`<p class="mini">${esc(intro)}</p>`:''}<div class="habit-grid">${rows.map(r=>`<a class="habit-card" href="#/heal/item/${r.id}"><strong>${esc(r.title)}</strong><span>${esc(r.text)}</span></a>`).join('')}</div></div>`}
function renderShineTopic(id){setActive('shine'); const s=shineById[id]||DATA.shine[0]; const headings=s.headings||{}; app.innerHTML=`<div class="screen"><section class="detail shine"><p class="eyebrow">SHINE / ${esc(s.title)}</p><h2>${esc(s.title)}</h2><p class="lead">${esc(s.subtitle)}</p><div class="info-card primary"><h3>${esc(headings.why||('1. Why '+s.title+' matters'))}</h3><ul class="bullets">${(s.why||[]).map(x=>`<li>${linkifyShine(x,s.id)}</li>`).join('')}</ul><div class="savebar no-print"><button class="btn shine" data-add="shine" data-id="${s.id}">Save this SHINE lesson</button></div></div><div class="info-card"><h3>${esc(headings.positive||('2. How '+s.title+' helps SHINE'))}</h3>${connectionRows(s.good||[],s.id)}</div><div class="info-card"><h3>${esc(headings.negative||('3. How weak '+s.title+' affects SHINE'))}</h3>${connectionRows(s.bad||[],s.id)}</div>${healHabitRows(s.healLinks,headings.habits,s.habitIntro)}${conditionRows(s.drLinks,headings.conditions)}</section></div>`}
function sectionCards(sections,area){return sections.map(sec=>`<a class="card mode-card ${area}" href="#/${area}/${sec.id}"><div class="big-letter">${esc(sec.icon)}</div><h3>${esc(sec.title)}</h3><p>${esc(sec.subtitle)}</p></a>`).join('')}
function renderHeal(){setActive('heal'); app.innerHTML=`<div class="screen">${hero('heal','HEAL',DATA.ui.modeDescriptions.heal)}<section class="search"><input id="search" placeholder="${esc(DATA.ui.searchPlaceholders.heal)}"><div class="results" id="results"><div class="empty">Type to search HEAL content.</div></div></section><section class="grid">${sectionCards(DATA.healSections,'heal')}</section></div>`; setupSearch('heal')}
function renderDr(){setActive('dr'); app.innerHTML=`<div class="screen">${hero('dr','DR',DATA.ui.modeDescriptions.dr)}<section class="search"><input id="search" placeholder="${esc(DATA.ui.searchPlaceholders.dr)}"><div class="results" id="results"><div class="empty">Type to search DR content.</div></div></section><section class="grid">${sectionCards(DATA.drSections,'dr')}</section></div>`; setupSearch('dr')}
function renderList(area,id){setActive(area); const sections=area==='heal'?DATA.healSections:DATA.drSections; const sec=sections.find(x=>x.id===id)||sections[0]; app.innerHTML=`<div class="screen"><section class="detail ${area}"><p class="eyebrow">${area.toUpperCase()}</p><h2>${esc(sec.title)}</h2><p class="lead">${esc(sec.subtitle)}</p><div class="grid">${sec.items.map(i=>`<a class="card" href="#/${area}/item/${i.id}"><h3>${esc(i.title)}</h3><p>${esc(i.subtitle)}</p></a>`).join('')}</div></section></div>`}
function renderItem(area,id){setActive(area); const item=area==='heal'?findHeal(id):findDr(id); if(!item){area==='heal'?renderHeal():renderDr();return} const locked=(item.id.includes('supplement')||item.id==='insulin'||item.id==='bp-meds'||item.id==='statin'||item.id==='metformin'); app.innerHTML=`<div class="screen"><section class="detail ${area}"><p class="eyebrow">${area.toUpperCase()} / ${esc(item.section)}</p><h2>${esc(item.title)}</h2><p class="lead">${esc(item.subtitle)}</p>${locked?'<div class="notice">Medication/supplement dosing is not shown here. Bring this topic to a clinician before starting, stopping, or changing treatment.</div>':''}<div class="info-card"><h3>Teaching points</h3><ul class="bullets">${(item.body||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="savebar no-print"><button class="btn ${area}" data-add="${area}" data-id="${item.id}">Save to Summary</button>${area==='dr'?'<button class="btn ghost" data-question="What should I ask my doctor about '+esc(item.title)+'?">Save question for doctor</button>':''}</div></section></div>`}
function setupSearch(area){const input=document.getElementById('search'), results=document.getElementById('results'); if(!input)return; const items=area==='heal'?allHealItems():allDrItems(); input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase(); if(!q){results.innerHTML='<div class="empty">Type to search '+area.toUpperCase()+' content.</div>';return} const hits=items.filter(i=>(i.title+' '+i.subtitle+' '+(i.body||[]).join(' ')+' '+i.section).toLowerCase().includes(q)).slice(0,8); results.innerHTML=hits.length?hits.map(i=>`<a class="result" href="#/${area}/item/${i.id}"><strong>${esc(i.title)}</strong><span>${esc(i.section)} — ${esc(i.subtitle)}</span></a>`).join(''):'<div class="empty">No results yet.</div>'; })}
function itemTitle(area,id){if(area==='shine')return shineById[id]?.title||id; if(area==='heal')return findHeal(id)?.title||id; if(area==='dr')return findDr(id)?.title||id; return id}
function renderSavedList(title,items,area){return `<section class="card"><h3>${esc(title)}</h3>${items.length?items.map(id=>`<div class="item-row"><div><strong>${esc(itemTitle(area,id))}</strong><span>${area.toUpperCase()}</span></div><button class="btn ghost no-print" data-remove="${area}" data-id="${id}">Remove</button></div>`).join(''):'<p>Nothing saved yet.</p>'}</section>`}
function renderSummary(){setActive('summary'); const p=profile(); app.innerHTML=`<div class="screen">${hero('summary','Summary',DATA.ui.modeDescriptions.summary)}<section class="summary-grid">${renderSavedList('SHINE saved lessons',p.shine||[],'shine')}${renderSavedList('HEAL saved items',p.heal||[],'heal')}${renderSavedList('DR saved items',p.dr||[],'dr')}</section><section class="card"><h3>Questions for doctor</h3>${(p.questions||[]).length?(p.questions||[]).map((q,i)=>`<div class="item-row"><strong>${esc(q)}</strong><button class="btn ghost no-print" data-remove-q="${i}">Remove</button></div>`).join(''):'<p>No questions saved yet.</p>'}<div class="savebar no-print"><textarea id="customQ" rows="2" style="width:100%;border:1px solid var(--line);border-radius:16px;padding:12px" placeholder="Write a question for the doctor..."></textarea><button class="btn dark" data-custom-q="1">Save question</button></div></section><section class="card"><h3>Actions</h3><p>Use print for an appointment summary. Download JSON as a local backup.</p><div class="savebar no-print"><button class="btn dark" onclick="window.print()">Print Summary</button><button class="btn ghost" data-download="1">Download JSON</button><button class="btn ghost" data-clear="1">Clear saved data</button></div></section></div>`}
function add(area,id){const p=profile(); p[area]=p[area]||[]; if(!p[area].includes(id))p[area].push(id); saveProfile(p); alert('Saved to Summary')}
function remove(area,id){const p=profile(); p[area]=(p[area]||[]).filter(x=>x!==id); saveProfile(p); renderSummary()}
function addQuestion(q){q=String(q||'').trim(); if(!q)return; const p=profile(); p.questions=p.questions||[]; p.questions.push(q); saveProfile(p); alert('Question saved')}
function download(){const blob=new Blob([JSON.stringify(profile(),null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='patient-care-v020-summary.json'; a.click(); URL.revokeObjectURL(a.href)}
document.addEventListener('click',e=>{const a=e.target.closest('[data-add]'); if(a){add(a.dataset.add,a.dataset.id);return} const r=e.target.closest('[data-remove]'); if(r){remove(r.dataset.remove,r.dataset.id);return} const q=e.target.closest('[data-question]'); if(q){addQuestion(q.dataset.question);return} const cq=e.target.closest('[data-custom-q]'); if(cq){addQuestion(document.getElementById('customQ')?.value);renderSummary();return} const rq=e.target.closest('[data-remove-q]'); if(rq){const p=profile(); p.questions.splice(+rq.dataset.removeQ,1); saveProfile(p); renderSummary();return} if(e.target.closest('[data-download]')){download();return} if(e.target.closest('[data-clear]')){if(confirm('Clear saved data on this device?')){localStorage.removeItem(KEY);renderSummary()}} });
function route(){const h=location.hash||'#/shine'; const parts=h.replace('#/','').split('/'); const [mode,a,b]=parts; if(mode==='shine'&&a)return renderShineTopic(a); if(mode==='shine')return renderShine(); if(mode==='heal'&&a==='item')return renderItem('heal',b); if(mode==='heal'&&a)return renderList('heal',a); if(mode==='heal')return renderHeal(); if(mode==='dr'&&a==='item')return renderItem('dr',b); if(mode==='dr'&&a)return renderList('dr',a); if(mode==='dr')return renderDr(); if(mode==='summary')return renderSummary(); renderShine()}
window.addEventListener('hashchange',route); route();
