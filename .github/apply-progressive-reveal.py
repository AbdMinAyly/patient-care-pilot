# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
import re

app_path=Path('app.js')
content_path=Path('data/content.js')
css_path=Path('styles.css')
history_path=Path('docs/HISTORY.md')
app=app_path.read_text(encoding='utf-8')
content=content_path.read_text(encoding='utf-8')
css=css_path.read_text(encoding='utf-8')
history=history_path.read_text(encoding='utf-8')

# Extend guided state without changing the profile version or storage key.
app=app.replace("guided:{shineAnswers:{},routineChoices:[],medicalProfile:[]},", "guided:{shineAnswers:{},routineChoices:[],medicalProfile:[],dietSetup:{completed:false,answers:{}},pendingMedical:[],confirmedMedical:[]},")
old="guided:{...base.guided,...(parsed.guided||{}),shineAnswers:{...(parsed.guided?.shineAnswers||{})},routineChoices:Array.isArray(parsed.guided?.routineChoices)?parsed.guided.routineChoices:[],medicalProfile:Array.isArray(parsed.guided?.medicalProfile)?parsed.guided.medicalProfile:[]},"
new="guided:{...base.guided,...(parsed.guided||{}),shineAnswers:{...(parsed.guided?.shineAnswers||{})},routineChoices:Array.isArray(parsed.guided?.routineChoices)?parsed.guided.routineChoices:[],medicalProfile:Array.isArray(parsed.guided?.medicalProfile)?parsed.guided.medicalProfile:[],dietSetup:{...base.guided.dietSetup,...(parsed.guided?.dietSetup||{}),answers:{...(parsed.guided?.dietSetup?.answers||{})}},pendingMedical:Array.isArray(parsed.guided?.pendingMedical)?parsed.guided.pendingMedical:[],confirmedMedical:Array.isArray(parsed.guided?.confirmedMedical)?parsed.guided.confirmedMedical:[]},"
if old not in app: raise SystemExit('guided profile normalization anchor missing')
app=app.replace(old,new)

# Add progressive reveal helpers before guided homes end marker.
anchor='// END GUIDED HOMES AND SHINOPEDIA'
block=r'''
let dietWizardStep=0;
let dietWizardAnswers={conditions:[],goal:'',preference:''};
function progressiveConfig(){return guidedConfig().progressiveReveal}
function dietSetupComplete(p=profile()){return p.guided.dietSetup?.completed===true}
function toggleArrayValue(list,value){return list.includes(value)?list.filter(x=>x!==value):[...list,value]}
function renderSingleStart(mode,title,text,buttonLabel,buttonAttr){
  return `<div class="screen progressive-entry ${esc(mode)}"><section class="progressive-start"><div><p class="eyebrow">START HERE</p><h1>${esc(title)}</h1><p>${esc(text)}</p></div><button type="button" class="btn ${esc(mode)} progressive-start-button" ${buttonAttr}>${esc(buttonLabel)}</button></section></div>`;
}
function renderDietWizard(){
  const c=progressiveConfig().diet,step=c.steps[dietWizardStep],modal=document.getElementById('diet-start-wizard')||document.createElement('div');
  modal.id='diet-start-wizard';modal.className='guided-modal';
  const selected=step?.multiple?(dietWizardAnswers[step.id]||[]):dietWizardAnswers[step?.id];
  modal.innerHTML=`<div class="guided-backdrop" data-close-diet-start="1"></div><section class="guided-dialog" role="dialog" aria-modal="true" aria-labelledby="diet-start-title"><button class="guided-close" data-close-diet-start="1" aria-label="${esc(c.close)}">×</button><p class="eyebrow">HEAL / DIET</p><h2 id="diet-start-title">${esc(c.title)}</h2>${step?`<div class="guided-progress"><span style="width:${((dietWizardStep+1)/c.steps.length)*100}%"></span></div><h3>${esc(step.title)}</h3><p>${esc(step.help)}</p><div class="guided-options">${step.options.map(option=>{const active=step.multiple?selected.includes(option.id):selected===option.id;return `<button type="button" class="guided-option ${active?'selected':''}" data-diet-step="${esc(step.id)}" data-diet-option="${esc(option.id)}" data-diet-multiple="${step.multiple?'1':'0'}">${esc(option.label)}</button>`}).join('')}</div><div class="guided-actions"><button class="btn ghost" data-diet-start-back="1" ${dietWizardStep===0?'disabled':''}>${esc(c.back)}</button><button class="btn heal" data-diet-start-next="1" ${(step.multiple?selected.length:!!selected)?'':'disabled'}>${esc(dietWizardStep===c.steps.length-1?c.finish:c.next)}</button></div>`:''}</section>`;
  if(!modal.isConnected)document.body.appendChild(modal);
}
function openDietWizard(){const saved=profile().guided.dietSetup?.answers||{};dietWizardAnswers={conditions:[...(saved.conditions||[])],goal:saved.goal||'',preference:saved.preference||''};dietWizardStep=0;renderDietWizard()}
function closeDietWizard(){document.getElementById('diet-start-wizard')?.remove()}
function dietMedicalFindings(answers){
  const map=progressiveConfig().diet.medicalMap||{};
  return [...new Set((answers.conditions||[]).map(id=>map[id]).filter(Boolean))];
}
function saveDietSetup(){
  const p=profile(),findings=dietMedicalFindings(dietWizardAnswers);
  p.guided.dietSetup={completed:true,answers:{conditions:[...dietWizardAnswers.conditions],goal:dietWizardAnswers.goal,preference:dietWizardAnswers.preference}};
  p.guided.pendingMedical=[...new Set([...(p.guided.pendingMedical||[]),...findings.filter(id=>!(p.guided.confirmedMedical||[]).includes(id))])];
  saveProfile(p);closeDietWizard();renderHeal();
}
function applyDietSetupToBuilder(){
  const a=profile().guided.dietSetup?.answers||{},map=progressiveConfig().diet.focusMap||{};
  dietState.focus=[...new Set([...(map[a.goal]||[]),...(map[a.preference]||[])])].filter(id=>focusById(id));
  dietState.meal='all';dietState.match='any';dietState.query='';location.hash='#/heal/diet';
}
function renderDietReady(){
  const c=progressiveConfig().diet,p=profile(),a=p.guided.dietSetup.answers;
  const labels=[...(a.conditions||[]),a.goal,a.preference].map(id=>c.optionLabels[id]).filter(Boolean);
  return `<div class="screen progressive-entry heal"><section class="progressive-ready"><p class="eyebrow">YOUR DIET</p><h1>${esc(c.readyTitle)}</h1><p>${esc(c.readyText)}</p><div class="progressive-tags">${labels.map(x=>`<span>${esc(x)}</span>`).join('')}</div><div class="progressive-ready-actions"><button class="btn heal" data-open-diet-results="1">${esc(c.view)}</button><button class="btn ghost" data-open-diet-start="1">${esc(c.update)}</button></div></section></div>`;
}
function medicalLabel(id){const c=progressiveConfig().medical;return c.items[id]?.label||id}
function renderMedicalSuggestion(id){
  const c=progressiveConfig().medical,item=c.items[id];if(!item)return '';
  return `<article class="medical-suggestion"><div><small>${esc(c.suggested)}</small><h2>${esc(item.label)}</h2><p>${esc(item.confirmText)}</p></div><div><button class="btn dr" data-confirm-medical="${esc(id)}">${esc(c.confirm)}</button><button class="btn ghost" data-dismiss-medical="${esc(id)}">${esc(c.dismiss)}</button></div></article>`;
}
function renderConfirmedSupport(id){
  const c=progressiveConfig().medical,item=c.items[id];if(!item)return '';
  const route=id==='iron-deficiency'?'#/guide/iron':(item.route||'#/dr/profile');
  return `<article class="guided-builder-card medical revealed-support"><div><small>${esc(c.added)}</small><h2>${esc(item.cardTitle)}</h2><p>${esc(item.cardText)}</p></div><a class="btn dr button-link" href="${esc(route)}" ${id==='iron-deficiency'?'data-open-iron-guide="1"':''}>${esc(item.open)}</a></article>`;
}
function renderProgressiveDr(){
  const c=progressiveConfig().medical,p=profile(),pending=p.guided.pendingMedical||[],confirmed=p.guided.confirmedMedical||[];
  if(pending.length)return `<div class="screen progressive-entry dr">${renderMedicalSuggestion(pending[0])}</div>`;
  if(confirmed.length)return `<div class="screen progressive-entry dr"><section class="progressive-support-list">${confirmed.map(renderConfirmedSupport).join('')}<a class="quiet-profile-link" href="#/dr/profile">${esc(c.updateProfile)}</a></section></div>`;
  return renderSingleStart('dr',c.title,c.intro,c.start,'data-open-medical-profile="1"');
}
'''
if 'function progressiveConfig()' not in app:
    app=app.replace(anchor,block+'\n'+anchor)

# SHINE reveals cards only after wizard completion.
app=re.sub(r"function renderShine\(\)\{.*?\n\}", """function renderShine(){
  setActive('shine');
  const c=guidedConfig().shine;
  if(!selectedShineFocus().length){app.innerHTML=renderSingleStart('shine',c.title,c.intro,c.start,'data-open-priority=\"1\"');return;}
  app.innerHTML=`<div class=\"screen\">${hero('shine','SHINE',DATA.ui.modeDescriptions.shine)}${renderPriorityLauncher()}<section class=\"grid shine-focus-grid\">${DATA.shine.map(renderGuidedShineCard).join('')}</section></div>`;
}""",app,count=1,flags=re.S)

# HEAL reveals only the Diet start/result.
app=re.sub(r"function renderHeal\(\)\{.*?\n\}", """function renderHeal(){
  setActive('heal');
  const c=progressiveConfig().diet;
  app.innerHTML=dietSetupComplete()?renderDietReady():renderSingleStart('heal',c.title,c.intro,c.start,'data-open-diet-start=\"1\"');
}""",app,count=1,flags=re.S)

# DR uses shared-profile suggestions and confirmed support cards.
app=re.sub(r"function renderDr\(\)\{.*?\n\}", """function renderDr(){
  setActive('dr');
  app.innerHTML=renderProgressiveDr();
}""",app,count=1,flags=re.S)

# Add event handlers before existing guided handlers.
event_anchor="document.addEventListener('click',e=>{"
events="""document.addEventListener('click',e=>{
  if(e.target.closest('[data-open-diet-start]')){openDietWizard();return}
  if(e.target.closest('[data-close-diet-start]')){closeDietWizard();return}
  const dietChoice=e.target.closest('[data-diet-option]');if(dietChoice){const key=dietChoice.dataset.dietStep,id=dietChoice.dataset.dietOption;if(dietChoice.dataset.dietMultiple==='1'){dietWizardAnswers[key]=toggleArrayValue(dietWizardAnswers[key]||[],id)}else dietWizardAnswers[key]=id;renderDietWizard();return}
  if(e.target.closest('[data-diet-start-back]')){dietWizardStep=Math.max(0,dietWizardStep-1);renderDietWizard();return}
  if(e.target.closest('[data-diet-start-next]')){if(dietWizardStep<progressiveConfig().diet.steps.length-1){dietWizardStep++;renderDietWizard()}else saveDietSetup();return}
  if(e.target.closest('[data-open-diet-results]')){applyDietSetupToBuilder();return}
  if(e.target.closest('[data-open-medical-profile]')){location.hash='#/dr/profile';return}
  const confirmMedical=e.target.closest('[data-confirm-medical]');if(confirmMedical){const id=confirmMedical.dataset.confirmMedical,p=profile();p.guided.pendingMedical=(p.guided.pendingMedical||[]).filter(x=>x!==id);p.guided.confirmedMedical=[...new Set([...(p.guided.confirmedMedical||[]),id])];saveProfile(p);renderDr();return}
  const dismissMedical=e.target.closest('[data-dismiss-medical]');if(dismissMedical){const id=dismissMedical.dataset.dismissMedical,p=profile();p.guided.pendingMedical=(p.guided.pendingMedical||[]).filter(x=>x!==id);saveProfile(p);renderDr();return}
"""
if events not in app:
    app=app.replace(event_anchor,events,1)

# Add data labels/config without duplicating the main object.
config=r'''

window.PATIENT_CARE_CONTENT.guidedExperience.progressiveReveal = {
  "diet": {
    "title": "Start Your Diet",
    "intro": "Answer a few questions. Only your diet setup will appear after you finish.",
    "start": "Start Your Diet",
    "readyTitle": "Your diet setup is ready",
    "readyText": "Open the food library with your saved setup, or update your answers.",
    "view": "View Your Diet",
    "update": "Update Diet Setup",
    "close": "Close diet setup",
    "back": "Previous",
    "next": "Continue",
    "finish": "Save My Diet Setup",
    "steps": [
      {"id":"conditions","title":"Which known health areas should your diet setup consider?","help":"Choose only conditions or deficiencies already known to you. This does not diagnose anything.","multiple":true,"options":[{"id":"iron-deficiency","label":"Iron deficiency or low iron"},{"id":"diabetes","label":"Diabetes or blood-sugar support"},{"id":"high-blood-pressure","label":"High blood pressure"},{"id":"kidney","label":"Kidney-related food restrictions"},{"id":"none","label":"None of these"}]},
      {"id":"goal","title":"What is your main food goal?","help":"Choose the one that matters most right now.","multiple":false,"options":[{"id":"balanced","label":"Build balanced meals"},{"id":"weight-support","label":"Weight support"},{"id":"heart-support","label":"Heart-supportive choices"},{"id":"energy-support","label":"Energy and protein support"}]},
      {"id":"preference","title":"What should make the plan easier to use?","help":"Choose the closest fit.","multiple":false,"options":[{"id":"no-preference","label":"No special preference"},{"id":"vegetarian","label":"Vegetarian choices"},{"id":"quick","label":"Quick and practical meals"}]}
    ],
    "medicalMap":{"iron-deficiency":"iron-deficiency","diabetes":"diabetes","high-blood-pressure":"hypertension","kidney":"kidney-support"},
    "focusMap":{"balanced":["balanced"],"weight-support":["balanced","fiber"],"heart-support":["heart"],"energy-support":["protein"],"vegetarian":["vegetarian"],"quick":[]},
    "optionLabels":{"iron-deficiency":"Iron deficiency","diabetes":"Blood-sugar support","high-blood-pressure":"Blood-pressure support","kidney":"Kidney considerations","none":"No listed condition","balanced":"Balanced meals","weight-support":"Weight support","heart-support":"Heart support","energy-support":"Energy and protein","no-preference":"No special preference","vegetarian":"Vegetarian","quick":"Quick meals"}
  },
  "medical": {
    "title":"Build Your Medical Profile",
    "intro":"Start with one short setup. Relevant support appears only after you add or confirm it.",
    "start":"Start Medical Profile",
    "suggested":"Suggested from your Diet setup",
    "confirm":"Add to Medical Profile",
    "dismiss":"Not now",
    "added":"Medical Profile support",
    "updateProfile":"Update Medical Profile",
    "items": {
      "iron-deficiency":{"label":"Iron deficiency","confirmText":"Your Diet setup included iron deficiency. Add it to your Medical Profile to reveal supplement support?","cardTitle":"Supplement Support","cardText":"Open existing iron education, food guidance, side-effect support, questions, and follow-up topics. Treatment doses and schedules remain locked.","open":"Open Iron Support","route":"#/guide/iron"},
      "diabetes":{"label":"Diabetes","confirmText":"Your Diet setup included diabetes or blood-sugar support. Add it to your Medical Profile?","cardTitle":"Condition Support","cardText":"Open existing diabetes education, tracking topics, and questions.","open":"Open Diabetes Topics","route":"#/dr/chronic"},
      "hypertension":{"label":"High blood pressure","confirmText":"Your Diet setup included blood-pressure support. Add it to your Medical Profile?","cardTitle":"Condition Support","cardText":"Open existing blood-pressure education, home monitoring, and questions.","open":"Open Blood Pressure Topics","route":"#/dr/chronic"},
      "kidney-support":{"label":"Kidney considerations","confirmText":"Your Diet setup included kidney-related food restrictions. Add this consideration to your Medical Profile?","cardTitle":"Care Support","cardText":"Review existing medical topics and prepare questions for your clinician.","open":"Open Medical Topics","route":"#/pedia"}
    }
  }
};
'''
if 'guidedExperience.progressiveReveal' not in content:
    content += config

style=r'''

/* Progressive reveal — one starting action at a time */
.progressive-entry{min-height:calc(100vh - 150px);place-items:center;align-content:center}
.progressive-start,.progressive-ready,.medical-suggestion,.progressive-support-list{width:min(680px,100%);padding:28px;border:1px solid var(--line);border-radius:28px;background:#fff}
.progressive-start{display:grid;gap:24px;text-align:center}
.progressive-start h1,.progressive-ready h1{margin:.15rem 0 .55rem;font-size:clamp(2rem,8vw,3.4rem);letter-spacing:-.055em}
.progressive-start p,.progressive-ready p,.medical-suggestion p{margin:0;color:var(--muted);line-height:1.55}
.progressive-start-button{width:100%;min-height:58px;font-size:1.05rem}
.progressive-ready{display:grid;gap:18px}
.progressive-tags{display:flex;flex-wrap:wrap;gap:8px}.progressive-tags span{padding:8px 10px;border-radius:999px;background:#f3f4f6;font-size:.82rem;font-weight:850}
.progressive-ready-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.medical-suggestion{display:grid;gap:20px}.medical-suggestion>div:last-child{display:grid;grid-template-columns:1fr 1fr;gap:10px}.medical-suggestion small,.revealed-support small{font-weight:900;color:var(--dr)}
.progressive-support-list{display:grid;gap:14px}.quiet-profile-link{justify-self:start;color:var(--dr);font-weight:850}
@media(max-width:520px){.progressive-start,.progressive-ready,.medical-suggestion,.progressive-support-list{padding:20px}.progressive-ready-actions,.medical-suggestion>div:last-child{grid-template-columns:1fr}}
@media print{.progressive-start-button,.progressive-ready-actions,.medical-suggestion button,.quiet-profile-link{display:none!important}}
'''
if '/* Progressive reveal — one starting action at a time */' not in css:
    css += style

note='''

### Progressive reveal entry flow

- SHINE shows only the priority setup until a primary focus is saved.
- HEAL shows only Start Your Diet until the Diet setup is completed.
- Diet answers are stored once inside the existing guided profile and may create DR suggestions.
- Medical findings are never migrated silently; DR requires explicit confirmation before revealing support cards.
- Confirmed iron deficiency reveals existing Iron Support while dosing and schedule generation remain locked.
- Shinopedia remains the deliberate full-library view.
'''
if '### Progressive reveal entry flow' not in history:
    history += note

app_path.write_text(app,encoding='utf-8')
content_path.write_text(content,encoding='utf-8')
css_path.write_text(css,encoding='utf-8')
history_path.write_text(history,encoding='utf-8')
