# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
import re

app_path=Path('app.js')
css_path=Path('styles.css')
history_path=Path('docs/HISTORY.md')
app=app_path.read_text(encoding='utf-8')
css=css_path.read_text(encoding='utf-8')
history=history_path.read_text(encoding='utf-8')

helper=r'''
function dietProfileMatches(){
  const intake=doctorIntakeData();
  const first=progressiveConfig().diet.steps[0];
  const options=first?.options||[];
  const rules={
    diabetes:/diabet|glucose|blood sugar/i,
    hypertension:/blood pressure|hypertension/i,
    dyslipidemia:/cholesterol|heart/i,
    asthma:/asthma/i,
    b12:/\bb12\b|vitamin b/i,
    d3:/vitamin d|\bd3\b/i,
    iron:/iron/i
  };
  const selected=[...(intake.conditions||[]),...(intake.deficiencies||[])];
  return options.filter(option=>selected.some(id=>rules[id]?.test(option.label||'')));
}
function renderDietProfileStart(){
  const matches=dietProfileMatches();
  const intake=doctorIntakeData();
  const hasProfile=intake.completed===true;
  return `<div class="guided-backdrop" data-close-diet-start="1"></div><section class="guided-dialog diet-profile-dialog" role="dialog" aria-modal="true" aria-labelledby="diet-profile-title"><button class="guided-close" data-close-diet-start="1" aria-label="Close">×</button><p class="eyebrow">HEAL / YOUR PROFILE</p><h2 id="diet-profile-title">${hasProfile?'Based on your medical profile, which of these would you like to work on?':'Build your medical profile first'}</h2>${hasProfile?`<p>Choose any areas you want your food ideas to support. These are planning filters, not treatment recommendations.</p>${matches.length?`<div class="guided-options diet-profile-options">${matches.map(option=>`<button type="button" class="guided-option ${(dietWizardAnswers.conditions||[]).includes(option.id)?'selected':''}" data-diet-profile-option="${esc(option.id)}" aria-pressed="${(dietWizardAnswers.conditions||[]).includes(option.id)}">${esc(option.label)}</button>`).join('')}</div>`:`<div class="diet-profile-empty"><strong>No direct nutrition matches were found.</strong><p>You can still continue and choose a general goal.</p></div>`}<div class="guided-actions"><button class="btn ghost" data-close-diet-start="1">Not now</button><button class="btn heal" data-diet-profile-continue="1">Continue</button></div>`:`<p>Complete the DR health profile so HEAL can show relevant nutrition focus choices without asking you to repeat the same medical history.</p><div class="guided-actions"><button class="btn ghost" data-close-diet-start="1">Not now</button><a class="btn dr button-link" href="#/dr">Open DR profile</a></div>`}</section>`;
}
'''
anchor='function renderDietWizard(){'
if 'function dietProfileMatches()' not in app:
    app=app.replace(anchor,helper+anchor,1)

old="function openDietWizard(){const saved=profile().guided.dietSetup?.answers||{};dietWizardAnswers={conditions:[...(saved.conditions||[])],goal:saved.goal||'',preference:saved.preference||''};dietWizardStep=0;renderDietWizard()}"
new="function openDietWizard(){const saved=profile().guided.dietSetup?.answers||{};dietWizardAnswers={conditions:[...(saved.conditions||[])],goal:saved.goal||'',preference:saved.preference||''};dietWizardStep=-1;const modal=document.getElementById('diet-start-wizard')||document.createElement('div');modal.id='diet-start-wizard';modal.className='guided-modal';modal.innerHTML=renderDietProfileStart();if(!modal.isConnected)document.body.appendChild(modal)}"
if old not in app:
    raise SystemExit('openDietWizard target not found')
app=app.replace(old,new,1)

click_anchor="  if(e.target.closest('[data-close-diet-start]')){closeDietWizard();return}\n"
click_block="""  if(e.target.closest('[data-close-diet-start]')){closeDietWizard();return}\n  const dietProfileChoice=e.target.closest('[data-diet-profile-option]');if(dietProfileChoice){dietWizardAnswers.conditions=toggleArrayValue(dietWizardAnswers.conditions||[],dietProfileChoice.dataset.dietProfileOption);const modal=document.getElementById('diet-start-wizard');if(modal)modal.innerHTML=renderDietProfileStart();return}\n  if(e.target.closest('[data-diet-profile-continue]')){dietWizardStep=1;renderDietWizard();return}\n"""
if click_anchor not in app:
    raise SystemExit('diet click anchor not found')
app=app.replace(click_anchor,click_block,1)

css_marker='/* HEAL medical-profile diet handoff */'
if css_marker not in css:
    css += r'''

/* HEAL medical-profile diet handoff */
.diet-profile-dialog{background:linear-gradient(160deg,#fffdf2,#fff7cf);border-color:#f0d271}
.diet-profile-dialog .eyebrow{color:#8a6500}
.diet-profile-dialog h2{max-width:620px}
.diet-profile-options{grid-template-columns:repeat(2,minmax(0,1fr))}
.diet-profile-empty{padding:16px;border:1px dashed #d9b744;border-radius:16px;background:rgba(255,255,255,.64)}
.diet-profile-empty p{margin:.35rem 0 0}
@media(max-width:560px){.diet-profile-options{grid-template-columns:1fr}}
'''

note='''\n\n### HEAL medical-profile diet handoff\n\n- HEAL now reads the saved DR health profile before starting Diet setup.\n- The first Diet prompt asks which medically relevant nutrition areas the user wants to work on, using existing Diet Wizard options only.\n- The flow avoids repeating medical-history questions and continues into the existing goal and preference steps.\n- The handoff remains educational and does not interpret BMI, diagnose, prescribe, or select treatment.\n'''
if '### HEAL medical-profile diet handoff' not in history:
    history += note

app_path.write_text(app,encoding='utf-8')
css_path.write_text(css,encoding='utf-8')
history_path.write_text(history,encoding='utf-8')
