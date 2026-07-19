# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
import re

app_path=Path('app.js')
css_path=Path('styles.css')
index_path=Path('index.html')
content_path=Path('data/content.js')
history_path=Path('docs/HISTORY.md')
app=app_path.read_text(encoding='utf-8')
css=css_path.read_text(encoding='utf-8')
index=index_path.read_text(encoding='utf-8')
content=content_path.read_text(encoding='utf-8')
history=history_path.read_text(encoding='utf-8')

# Navigation shell: add Shinopedia as a fifth stable tab.
index=index.replace('<a class="navbtn" id="nav-summary" href="#/plan"><strong>Your Plan</strong><span>build</span></a>', '<a class="navbtn" id="nav-pedia" href="#/pedia"><strong>Shinopedia</strong><span>library</span></a>\n  <a class="navbtn" id="nav-summary" href="#/plan"><strong>Your Plan</strong><span>build</span></a>')
index=index.replace('Patient Care v047 — Find and Guide','Patient Care v047 — Guided Homes')

# Add configuration once, keeping patient-facing labels in content.js.
config='''\n  ,"guidedExperience": {\n    "shine": {\n      "title": "Choose Your Priority",\n      "intro": "Answer three short questions. Patient Care will suggest one primary and one secondary SHINE focus. You can still change either choice.",\n      "start": "Choose Your Priority",\n      "questions": [\n        {"id":"day","title":"What is affecting your day most?","options":[{"id":"tired","label":"Low energy or poor sleep","scores":{"sleep":3,"nutrition":1}},{"id":"stress","label":"Stress, mood, or motivation","scores":{"happiness":3,"sleep":1}},{"id":"illness","label":"Frequent illness or recovery","scores":{"immunity":3,"sleep":1}},{"id":"food","label":"Eating patterns or food choices","scores":{"nutrition":3,"immunity":1}}]},\n        {"id":"goal","title":"What would you most like to improve first?","options":[{"id":"rest","label":"Rest and daytime alertness","scores":{"sleep":3}},{"id":"cope","label":"Coping and emotional balance","scores":{"happiness":3}},{"id":"defense","label":"Healthy recovery and prevention habits","scores":{"immunity":3}},{"id":"meals","label":"Regular, balanced eating","scores":{"nutrition":3}}]},\n        {"id":"change","title":"Which change feels most realistic this week?","options":[{"id":"bedtime","label":"Adjust my sleep routine","scores":{"sleep":2}},{"id":"pause","label":"Add a calming or enjoyable activity","scores":{"happiness":2}},{"id":"protect","label":"Improve prevention and recovery habits","scores":{"immunity":2}},{"id":"plate","label":"Improve one meal or food habit","scores":{"nutrition":2}}]}\n      ],\n      "resultTitle": "Recommended focus",\n      "primary": "Primary priority",\n      "secondary": "Secondary priority",\n      "apply": "Use these focuses",\n      "retake": "Retake questions"\n    },\n    "heal": {\n      "title": "Build Your Daily Support",\n      "intro": "Start with one builder. Completed builders stay available to view or update.",\n      "builders": [\n        {"id":"diet","title":"Build Your Diet","text":"Choose food goals, meal types, preferences, and practical limits.","route":"#/heal/diet","icon":"🍽️"},\n        {"id":"routine","title":"Build Your Routine","text":"Create a small morning, daytime, evening, and sleep routine from existing HEAL actions.","route":"#/heal/routine","icon":"🗓️"},\n        {"id":"exercise","title":"Build Your Exercise Plan","text":"Exercise guidance will open after the research batch is completed.","route":"","icon":"🏃","disabled":true}\n      ]\n    },\n    "routine": {\n      "title":"Build Your Routine",\n      "intro":"Choose the areas that need the most structure. The result links to existing HEAL education; it does not create treatment instructions.",\n      "choices":[\n        {"id":"morning","label":"Morning start","targets":["sleep-schedule","hydration-support"]},\n        {"id":"daytime","label":"Daytime energy and consistency","targets":["sleep-daylight-activity","meal-planning"]},\n        {"id":"evening","label":"Evening wind-down","targets":["sleep-wind-down","sleep-food-caffeine"]},\n        {"id":"sleep","label":"Sleep environment","targets":["sleep-environment"]},\n        {"id":"stress","label":"Stress and recovery","targets":["stress-management"]}\n      ],\n      "save":"Save Routine",\n      "saved":"Your Routine",\n      "empty":"Choose at least one routine area."\n    },\n    "dr": {\n      "title":"Build Your Medical Profile",\n      "intro":"Select only areas you already know you are managing or want education about. This does not diagnose a condition.",\n      "start":"Build Your Medical Profile",\n      "update":"Update Medical Profile",\n      "options":[\n        {"id":"deficiency","label":"Supplement or nutrient deficiency"},\n        {"id":"chronic","label":"Chronic condition"},\n        {"id":"treatment","label":"Medication or treatment support"},\n        {"id":"weight","label":"Weight support"},\n        {"id":"tracking","label":"Symptoms or measurements to track"},\n        {"id":"appointment","label":"Preparing for an appointment"},\n        {"id":"tests","label":"Laboratory or test follow-up"},\n        {"id":"other","label":"Other health concern"}\n      ],\n      "save":"Save Medical Profile",\n      "builders": {\n        "deficiency":{"title":"Build Supplement Support","text":"Organize existing deficiency, supplement, food, side-effect, and follow-up education.","route":"#/pedia/supplements"},\n        "chronic":{"title":"Build Condition Support","text":"Browse chronic-condition education and save relevant actions or questions.","route":"#/pedia/chronic"},\n        "treatment":{"title":"Build Treatment Support","text":"Organize existing medication education, safety topics, and follow-up questions.","route":"#/pedia/medications"},\n        "weight":{"title":"Build Weight Support","text":"Connect Diet, Routine, tracking, and clinician-question tools without promising weight loss.","route":"#/heal/diet"},\n        "tracking":{"title":"Build Your Tracking Plan","text":"Choose existing symptom and measurement topics to follow without interpreting results.","route":"#/pedia/tracking"},\n        "appointment":{"title":"Build Your Questions","text":"Open saved questions and doctor-discussion actions for appointment preparation.","route":"#/plan/details"},\n        "tests":{"title":"Prepare for Test Follow-up","text":"Browse existing laboratory and follow-up education without interpreting results.","route":"#/pedia/tracking"},\n        "other":{"title":"Browse Medical Topics","text":"Use Shinopedia to find the relevant topic area.","route":"#/pedia"}\n      }\n    },\n    "pedia": {\n      "title":"Shinopedia",\n      "intro":"Browse the complete Patient Care library by category. Guided home screens stay simple; the full library lives here.",\n      "cards":[\n        {"id":"shine","title":"SHINE Topics","text":"Sleep, happiness, immunity, nutrition, and exercise.","route":"#/shine"},\n        {"id":"diet","title":"Diet and Habits","text":"Food guidance, daily habits, routines, and practical support.","route":"#/pedia/heal"},\n        {"id":"symptoms","title":"Symptoms","text":"Existing symptom education and warning signs.","route":"#/dr/symptoms"},\n        {"id":"acute","title":"Acute Conditions","text":"Short-term illnesses and acute health information.","route":"#/dr/acute"},\n        {"id":"chronic","title":"Chronic Conditions","text":"Long-term condition education and support topics.","route":"#/dr/chronic"},\n        {"id":"medications","title":"Medications","text":"Medication education with dosing kept hidden.","route":"#/dr/medications"},\n        {"id":"supplements","title":"Vitamins, Minerals, and Deficiencies","text":"Supplement and nutrient-deficiency education.","route":"#/heal/supplements"},\n        {"id":"tracking","title":"Tests and Tracking","text":"Normal-range, measurement, laboratory, and follow-up topics.","route":"#/heal/vitals"},\n        {"id":"urgent","title":"Urgent Help","text":"Emergency and urgent warning information.","route":"#/dr/er"},\n        {"id":"plan","title":"Tasks and Questions","text":"Review saved actions, tasks, notes, and questions.","route":"#/plan/details"}\n      ]\n    }\n  }\n'''
if '"guidedExperience"' not in content:
    content=content.rstrip()
    if not content.endswith('};'):
        raise SystemExit('content ending not found')
    content=content[:-2] + config + '\n};\n'

# Extend saved profile without changing version/key.
app=app.replace("sleepWizard:{conditions:[],schedule:[],patterns:[],factors:[]},\n    planNotes", "sleepWizard:{conditions:[],schedule:[],patterns:[],factors:[]},\n    guided:{shineAnswers:{},routineChoices:[],medicalProfile:[]},\n    planNotes")
app=app.replace("planNotes:{...base.planNotes,...(parsed.planNotes||{})}", "guided:{...base.guided,...(parsed.guided||{}),shineAnswers:{...(parsed.guided?.shineAnswers||{})},routineChoices:Array.isArray(parsed.guided?.routineChoices)?parsed.guided.routineChoices:[],medicalProfile:Array.isArray(parsed.guided?.medicalProfile)?parsed.guided.medicalProfile:[]},\n      planNotes:{...base.planNotes,...(parsed.planNotes||{})}")

# Active nav includes Shinopedia.
app=app.replace("['shine','heal','dr','summary'].forEach", "['shine','heal','dr','pedia','summary'].forEach")

# Remove the separate Sleep Wizard launch from the visible Sleep page.
app=app.replace("${topic.id==='sleep'?renderSleepWizardLaunch(topic):renderActionPath({...topic,section:'SHINE',sectionId:'shine'})}", "${renderActionPath({...topic,section:'SHINE',sectionId:'shine'})}")

# Guided experience block before renderShine.
marker='function renderShine(){'
block=r'''// BEGIN GUIDED HOMES AND SHINOPEDIA
let shinePriorityStep=0;
let shinePriorityAnswers={};
function guidedConfig(){return DATA.guidedExperience||{}}
function scoreShinePriority(){
  const scores={};
  Object.entries(shinePriorityAnswers).forEach(([questionId,optionId])=>{
    const question=guidedConfig().shine.questions.find(q=>q.id===questionId);
    const option=question?.options.find(o=>o.id===optionId);
    Object.entries(option?.scores||{}).forEach(([id,value])=>scores[id]=(scores[id]||0)+value);
  });
  return visibleShineTopics().map((topic,index)=>({topic,score:scores[topic.id]||0,index})).sort((a,b)=>(b.score-a.score)||(a.index-b.index)).slice(0,2).map(x=>x.topic);
}
function renderPriorityWizard(){
  const c=guidedConfig().shine;
  const question=c.questions[shinePriorityStep];
  const results=shinePriorityStep>=c.questions.length?scoreShinePriority():[];
  const modal=document.getElementById('priority-wizard')||document.createElement('div');
  modal.id='priority-wizard';modal.className='guided-modal';
  modal.innerHTML=`<div class="guided-backdrop" data-close-priority="1"></div><section class="guided-dialog" role="dialog" aria-modal="true" aria-labelledby="priority-title"><button class="guided-close" data-close-priority="1" aria-label="Close">×</button><p class="eyebrow">SHINE PRIORITY</p><h2 id="priority-title">${esc(c.title)}</h2>${question?`<div class="guided-progress"><span style="width:${((shinePriorityStep+1)/c.questions.length)*100}%"></span></div><h3>${esc(question.title)}</h3><div class="guided-options">${question.options.map(option=>`<button type="button" class="guided-option ${shinePriorityAnswers[question.id]===option.id?'selected':''}" data-priority-question="${esc(question.id)}" data-priority-option="${esc(option.id)}">${esc(option.label)}</button>`).join('')}</div><div class="guided-actions"><button class="btn ghost" data-priority-back="1" ${shinePriorityStep===0?'disabled':''}>Previous</button><button class="btn shine" data-priority-next="1" ${shinePriorityAnswers[question.id]?'':'disabled'}>${shinePriorityStep===c.questions.length-1?'See recommendation':'Continue'}</button></div>`:`<div class="priority-result"><h3>${esc(c.resultTitle)}</h3>${results.map((topic,index)=>`<article class="priority-result-card ${index===0?'primary':'secondary'}"><small>${esc(index===0?c.primary:c.secondary)}</small><strong>${esc(topic.title)}</strong><p>${esc(topic.subtitle)}</p></article>`).join('')}<div class="guided-actions"><button class="btn ghost" data-priority-retake="1">${esc(c.retake)}</button><button class="btn shine" data-priority-apply="1">${esc(c.apply)}</button></div></div>`}</section>`;
  if(!modal.isConnected)document.body.appendChild(modal);
}
function closePriorityWizard(){document.getElementById('priority-wizard')?.remove()}
function renderPriorityLauncher(){
  const c=guidedConfig().shine,topics=selectedShineFocusTopics();
  return `<section class="guided-launch priority-launch"><div><p class="eyebrow">START HERE</p><h2>${esc(c.title)}</h2><p>${esc(c.intro)}</p>${topics.length?`<div class="priority-current"><span><b>${esc(c.primary)}:</b> ${esc(topics[0].title)}</span>${topics[1]?`<span><b>${esc(c.secondary)}:</b> ${esc(topics[1].title)}</span>`:''}</div>`:''}</div><button class="btn shine" data-open-priority="1">${esc(c.start)}</button></section>`;
}
function shinePriorityRank(topic){const ids=selectedShineFocus();return ids.indexOf(topic.id)}
function renderGuidedShineCard(topic){
  if(isPlaceholder(topic))return renderShineFocusHomeCard(topic);
  const rank=shinePriorityRank(topic),label=rank===0?guidedConfig().shine.primary:rank===1?guidedConfig().shine.secondary:'';
  return `<article class="card mode-card shine shine-focus-card guided-shine-card ${rank===0?'priority-primary':rank===1?'priority-secondary':''}">${label?`<span class="priority-tab">${esc(label)}</span>`:''}<a class="shine-card-link" href="#/shine/${esc(topic.id)}"><div class="big-letter">${esc(topic.letter)}</div><h3>${esc(topic.title)}</h3><p>${esc(topic.subtitle)}</p></a></article>`;
}
function renderBuilderCard(builder){
  const disabled=builder.disabled;
  return `<article class="guided-builder-card ${disabled?'disabled':''}"><span class="builder-icon">${esc(builder.icon)}</span><div><h3>${esc(builder.title)}</h3><p>${esc(builder.text)}</p></div>${disabled?`<span class="coming-soon">${esc(DATA.ui.clarity.comingSoon)}</span>`:`<a class="btn ghost button-link" href="${esc(builder.route)}">Open builder</a>`}</article>`;
}
function renderRoutineBuilder(){
  setActive('heal');const c=guidedConfig().routine,p=profile(),selected=new Set(p.guided.routineChoices||[]);
  app.innerHTML=`<div class="screen">${renderShineFocusBar()}<section class="detail heal guided-page">${renderBackControl('#/heal','HEAL','heal')}<p class="eyebrow">HEAL BUILDER</p><h1>${esc(c.title)}</h1><p class="lead">${esc(c.intro)}</p><div class="guided-check-grid">${c.choices.map(choice=>`<label class="guided-check"><input type="checkbox" data-routine-choice="${esc(choice.id)}" ${selected.has(choice.id)?'checked':''}><span><strong>${esc(choice.label)}</strong></span></label>`).join('')}</div><button class="btn heal" data-save-routine="1">${esc(c.save)}</button>${selected.size?renderRoutineResults([...selected]):''}</section></div>`;
}
function renderRoutineResults(ids){
  const c=guidedConfig().routine,targets=[...new Set(c.choices.filter(x=>ids.includes(x.id)).flatMap(x=>x.targets||[]))].map(findHeal).filter(x=>x&&!isPlaceholder(x));
  return `<section class="guided-results"><h2>${esc(c.saved)}</h2>${targets.length?targets.map(item=>`<a class="guided-result-link" href="#/heal/item/${esc(item.id)}"><strong>${esc(item.title)}</strong><span>${esc(item.section)}</span></a>`).join(''):`<p>${esc(c.empty)}</p>`}</section>`;
}
function renderMedicalProfile(){
  setActive('dr');const c=guidedConfig().dr,p=profile(),selected=new Set(p.guided.medicalProfile||[]);
  app.innerHTML=`<div class="screen">${renderShineFocusBar()}<section class="detail dr guided-page">${renderBackControl('#/dr','DR','dr')}<p class="eyebrow">DR PROFILE</p><h1>${esc(c.title)}</h1><p class="lead">${esc(c.intro)}</p><div class="guided-check-grid">${c.options.map(option=>`<label class="guided-check"><input type="checkbox" data-medical-profile="${esc(option.id)}" ${selected.has(option.id)?'checked':''}><span><strong>${esc(option.label)}</strong></span></label>`).join('')}</div><button class="btn dr" data-save-medical-profile="1">${esc(c.save)}</button></section></div>`;
}
function medicalBuilderCards(){
  const c=guidedConfig().dr,p=profile();
  return (p.guided.medicalProfile||[]).map(id=>c.builders[id]).filter(Boolean).map(builder=>`<article class="guided-builder-card medical"><div><h3>${esc(builder.title)}</h3><p>${esc(builder.text)}</p></div><a class="btn ghost button-link" href="${esc(builder.route)}">Open</a></article>`).join('');
}
function renderPedia(filter=''){
  setActive('pedia');const c=guidedConfig().pedia,cards=filter?c.cards.filter(x=>x.id===filter||filter==='heal'&&['diet','supplements'].includes(x.id)):c.cards;
  app.innerHTML=`<div class="screen">${hero('summary',c.title,c.intro)}<section class="pedia-grid">${cards.map(card=>`<a class="pedia-card" href="${esc(card.route)}"><span>${esc(card.title)}</span><p>${esc(card.text)}</p></a>`).join('')}</section></div>`;
}
// END GUIDED HOMES AND SHINOPEDIA
'''
if '// BEGIN GUIDED HOMES AND SHINOPEDIA' not in app:
    app=app.replace(marker,block+marker)

# Replace SHINE home renderer.
app=re.sub(r"function renderShine\(\)\{.*?\n\}", """function renderShine(){
  setActive('shine');
  app.innerHTML=`<div class=\"screen\">${hero('shine','SHINE',DATA.ui.modeDescriptions.shine)}${renderPriorityLauncher()}<section class=\"grid shine-focus-grid\">${DATA.shine.map(renderGuidedShineCard).join('')}</section></div>`;
}""", app, count=1, flags=re.S)

# Replace HEAL and DR homes.
app=re.sub(r"function renderHeal\(\)\{.*?\n\}", """function renderHeal(){
  setActive('heal');const c=guidedConfig().heal;
  app.innerHTML=`<div class=\"screen\">${hero('heal','HEAL',DATA.ui.modeDescriptions.heal)}${renderShineFocusBar()}<section class=\"guided-home-head\"><p class=\"eyebrow\">GUIDED BUILDERS</p><h2>${esc(c.title)}</h2><p>${esc(c.intro)}</p></section><section class=\"guided-builder-grid\">${c.builders.map(renderBuilderCard).join('')}</section><a class=\"library-link-card\" href=\"#/pedia/heal\"><strong>Browse all HEAL topics</strong><span>Open Shinopedia</span></a></div>`;
}""", app, count=1, flags=re.S)
app=re.sub(r"function renderDr\(\)\{.*?\n\}", """function renderDr(){
  setActive('dr');const c=guidedConfig().dr,p=profile(),hasProfile=(p.guided.medicalProfile||[]).length>0;
  app.innerHTML=`<div class=\"screen\">${hero('dr','DR',DATA.ui.modeDescriptions.dr)}${renderShineFocusBar()}<section class=\"guided-launch medical-launch\"><div><p class=\"eyebrow\">START HERE</p><h2>${esc(c.title)}</h2><p>${esc(c.intro)}</p></div><a class=\"btn dr button-link\" href=\"#/dr/profile\">${esc(hasProfile?c.update:c.start)}</a></section>${hasProfile?`<section class=\"guided-builder-grid\">${medicalBuilderCards()}</section>`:''}<a class=\"library-link-card\" href=\"#/pedia\"><strong>Browse all medical topics</strong><span>Open Shinopedia</span></a></div>`;
}""", app, count=1, flags=re.S)

# Event handlers.
click_anchor="document.addEventListener('click',e=>{"
handlers=r'''
  if(e.target.closest('[data-open-priority]')){shinePriorityStep=0;shinePriorityAnswers={...profile().guided.shineAnswers};renderPriorityWizard();return}
  if(e.target.closest('[data-close-priority]')){closePriorityWizard();return}
  const priorityOption=e.target.closest('[data-priority-option]');if(priorityOption){shinePriorityAnswers[priorityOption.dataset.priorityQuestion]=priorityOption.dataset.priorityOption;renderPriorityWizard();return}
  if(e.target.closest('[data-priority-next]')){shinePriorityStep++;renderPriorityWizard();return}
  if(e.target.closest('[data-priority-back]')){shinePriorityStep=Math.max(0,shinePriorityStep-1);renderPriorityWizard();return}
  if(e.target.closest('[data-priority-retake]')){shinePriorityStep=0;shinePriorityAnswers={};renderPriorityWizard();return}
  if(e.target.closest('[data-priority-apply]')){const p=profile();p.shineFocus=scoreShinePriority().map(x=>x.id);p.guided.shineAnswers={...shinePriorityAnswers};saveProfile(p);closePriorityWizard();renderShine();return}
  if(e.target.closest('[data-save-routine]')){const p=profile();p.guided.routineChoices=[...document.querySelectorAll('[data-routine-choice]:checked')].map(x=>x.dataset.routineChoice);saveProfile(p);renderRoutineBuilder();return}
  if(e.target.closest('[data-save-medical-profile]')){const p=profile();p.guided.medicalProfile=[...document.querySelectorAll('[data-medical-profile]:checked')].map(x=>x.dataset.medicalProfile);saveProfile(p);renderDr();return}
'''
if '[data-open-priority]' not in app:
    app=app.replace(click_anchor,click_anchor+handlers)

# Routes.
app=app.replace("if(mode==='find')result=renderFind();", "if(mode==='pedia')result=renderPedia(a||'');\n  else if(mode==='find')result=renderFind();")
app=app.replace("else if(mode==='heal'&&a==='item')", "else if(mode==='heal'&&a==='routine')result=renderRoutineBuilder();\n  else if(mode==='heal'&&a==='item')")
app=app.replace("else if(mode==='dr'&&a==='item')", "else if(mode==='dr'&&a==='profile')result=renderMedicalProfile();\n  else if(mode==='dr'&&a==='item')")

# CSS.
css_block='''\n\n/* Guided homes and Shinopedia */\n.bottom-nav{grid-template-columns:repeat(5,1fr)}\n.navbtn.active-pedia{background:#f3efff;border-color:#cab8f5;color:#5b36a2}\n.guided-launch,.guided-home-head{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:18px;border:1px solid var(--line);border-radius:24px;background:#fff}\n.guided-launch h2,.guided-home-head h2{margin:.1rem 0 .4rem}.guided-launch p,.guided-home-head p{margin:0;color:var(--muted);line-height:1.5}\n.priority-current{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}.priority-current span{padding:7px 10px;border-radius:999px;background:var(--shine-soft);color:var(--shine2);font-size:.8rem}\n.guided-shine-card{position:relative}.priority-tab{position:absolute;z-index:3;right:12px;top:12px;padding:6px 9px;border-radius:999px;background:#fff;color:var(--shine);font-size:.7rem;font-weight:950}.priority-primary{box-shadow:0 0 0 4px rgba(193,18,50,.3),0 14px 34px rgba(68,13,27,.2)!important}.priority-secondary{box-shadow:0 0 0 3px rgba(155,109,244,.32),0 12px 28px rgba(68,13,27,.14)!important}\n.guided-builder-grid,.pedia-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.guided-builder-card{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;padding:17px;border:1px solid var(--line);border-radius:22px;background:#fff}.guided-builder-card .btn,.guided-builder-card .coming-soon{grid-column:1/-1}.guided-builder-card h3{margin:0 0 5px}.guided-builder-card p{margin:0;color:var(--muted);line-height:1.45}.guided-builder-card.disabled{opacity:.68}.builder-icon{font-size:1.7rem}.library-link-card{display:flex;justify-content:space-between;gap:12px;padding:15px 17px;border:1px dashed #c9ced8;border-radius:18px;background:#fff;text-decoration:none}.library-link-card span{color:var(--muted)}\n.guided-modal{position:fixed;inset:0;z-index:160;display:grid;place-items:center;padding:16px}.guided-backdrop{position:absolute;inset:0;background:rgba(15,23,42,.72);backdrop-filter:blur(6px)}.guided-dialog{position:relative;width:min(620px,100%);max-height:90vh;overflow:auto;padding:22px;border-radius:28px;background:#fff}.guided-close{position:absolute;right:12px;top:12px;width:44px;height:44px;border:1px solid var(--line);border-radius:14px;background:#fff;font-size:1.4rem}.guided-progress{height:8px;margin:14px 0 20px;border-radius:999px;background:#eef0f4;overflow:hidden}.guided-progress span{display:block;height:100%;background:var(--shine)}.guided-options,.guided-check-grid{display:grid;gap:10px}.guided-option,.guided-check{min-height:48px;padding:12px 14px;border:1px solid var(--line);border-radius:15px;background:#fff;text-align:left}.guided-option.selected{border-color:var(--shine);background:var(--shine-soft)}.guided-actions{display:flex;justify-content:space-between;gap:10px;margin-top:18px}.priority-result{display:grid;gap:12px}.priority-result-card{padding:15px;border:2px solid var(--line);border-radius:18px}.priority-result-card.primary{border-color:var(--shine);background:var(--shine-soft)}.priority-result-card.secondary{border-color:#9b6df4;background:#f7f3ff}.priority-result-card small,.priority-result-card strong{display:block}.priority-result-card strong{font-size:1.2rem;margin:4px 0}.priority-result-card p{margin:0;color:var(--muted)}\n.guided-page h1{font-size:clamp(2rem,6vw,3.2rem);margin:.15rem 0 .5rem}.guided-check{display:flex;align-items:center;gap:10px;cursor:pointer}.guided-check input{width:20px;height:20px}.guided-results{display:grid;gap:9px;margin-top:18px;padding-top:18px;border-top:1px solid var(--line)}.guided-result-link{display:flex;justify-content:space-between;gap:10px;padding:12px 14px;border:1px solid var(--line);border-radius:14px;text-decoration:none}.guided-result-link span{color:var(--muted)}\n.pedia-card{display:block;padding:18px;border:1px solid var(--line);border-radius:22px;background:#fff;text-decoration:none}.pedia-card span{display:block;font-weight:1000;font-size:1.08rem}.pedia-card p{margin:6px 0 0;color:var(--muted);line-height:1.45}\n@media(max-width:700px){.guided-launch,.guided-home-head{align-items:stretch;flex-direction:column}.guided-launch .btn{width:100%}.guided-builder-grid,.pedia-grid{grid-template-columns:1fr}}\n@media(max-width:430px){.bottom-nav{gap:4px}.navbtn{padding:8px 2px}.navbtn strong{font-size:.77rem}.navbtn span{font-size:.62rem}.guided-actions{flex-direction:column}.guided-actions .btn{width:100%}}\n@media print{.guided-launch,.guided-modal,.library-link-card{display:none!important}}\n'''
if '/* Guided homes and Shinopedia */' not in css:
    css += css_block

note='''\n\n### Guided homes and Shinopedia\n\n- SHINE now begins with a three-question priority wizard that suggests one primary and one secondary visible researched focus.\n- HEAL now presents Diet, Routine, and deferred Exercise builders instead of the full section library.\n- DR now begins with an optional medical-profile selector and reveals only relevant support builders.\n- Shinopedia is the dedicated full-library tab for SHINE, HEAL, DR, urgent, medication, supplement, tracking, task, and question destinations.\n- Existing content, IDs, routes, profile version 22, storage key, dosing locks, placeholder exclusion, and offline behavior remain unchanged.\n- The standalone Sleep Wizard is no longer shown; sleep support is reached through SHINE priority and the HEAL Routine builder.\n'''
if '### Guided homes and Shinopedia' not in history:
    history += note

app_path.write_text(app,encoding='utf-8')
css_path.write_text(css,encoding='utf-8')
index_path.write_text(index,encoding='utf-8')
content_path.write_text(content,encoding='utf-8')
history_path.write_text(history,encoding='utf-8')
