# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
import re

app_path=Path('app.js'); css_path=Path('styles.css'); rules_path=Path('PATIENT_CARE_RULES.md'); history_path=Path('docs/HISTORY.md')
app=app_path.read_text(encoding='utf-8'); css=css_path.read_text(encoding='utf-8'); rules=rules_path.read_text(encoding='utf-8'); history=history_path.read_text(encoding='utf-8')

app=app.replace("function vitdProtocol(levelNg){if(levelNg<20)return {id:'under20',label:'Below 20 ng/mL',weekly:8,monthly:4};if(levelNg<=30)return {id:'20to30',label:'20–30 ng/mL',weekly:4,monthly:4};return null}","function vitdProtocol(levelNg,custom={}){const weeklyDefault=levelNg<20?8:levelNg<=30?4:0;if(!weeklyDefault)return null;return {id:levelNg<20?'under20':'20to30',label:levelNg<20?'Below 20 ng/mL':'20–30 ng/mL',weekly:Number(custom.weekly)||weeklyDefault,monthly:Number(custom.monthly)||4,wait:Number(custom.wait)||1};}")

app=re.sub(r"function vitdScheduleFromInput\(data\)\{.*?\n\}","""function vitdScheduleFromInput(data){
  const levelNg=data.unit==='nmol'?Number(data.level)/2.5:Number(data.level);
  const protocol=vitdProtocol(levelNg,{weekly:data.weekly,monthly:data.monthly,wait:data.wait});
  if(!protocol||data.protocol!=='local')return null;
  const weekly=Array.from({length:protocol.weekly},(_,i)=>vitdIso(vitdAddDays(data.startDate,i*7)));
  const firstMonthly=vitdAddMonths(weekly[weekly.length-1],1);
  const monthly=Array.from({length:protocol.monthly},(_,i)=>vitdIso(vitdAddMonths(firstMonthly,i)));
  const repeat=vitdIso(vitdAddMonths(monthly[monthly.length-1],protocol.wait));
  return {v:2,mode:'local',p:protocol.id,s:data.startDate,w:protocol.weekly,m:protocol.monthly,wait:protocol.wait,r:repeat,mt:data.maintenance||'custom',c:String(data.clinic||'').trim().slice(0,80)};
}""",app,count=1,flags=re.S)

new_render="""function renderVitaminDTool(){
  document.body.classList.add('physician-mode-active');
  document.body.classList.remove('vitd-patient-active');
  setActive('summary');
  const today=new Date().toISOString().slice(0,10);
  app.innerHTML=`<div class="screen physician-screen"><section class="vitd-builder"><a class="detail-back back-control dr" href="#/physician"><span class="back-control-icon" aria-hidden="true">←</span><span>Physician Mode</span></a><header><p class="eyebrow">PHYSICIAN MODE / VITAMIN D</p><h1>Choose the protocol first</h1><p>Two clearly separated options are shown below. The Endocrine Society card is current guidance context; the local clinic protocol is the customizable schedule generator.</p></header><div class="vitd-protocol-choice" role="radiogroup" aria-label="Vitamin D protocol"><label class="vitd-protocol-card guidance"><input type="radio" name="vitd-protocol" value="guideline"><span><small>REFERENCE GUIDANCE</small><strong>Endocrine Society 2024</strong><em>Prevention-focused guidance. For adults 50 years and older who have an indication for treatment, it favors daily lower-dose vitamin D over intermittent higher doses. It does not define this app's level-based replacement schedule.</em><b>View guidance</b></span></label><label class="vitd-protocol-card local"><input type="radio" name="vitd-protocol" value="local" checked><span><small>CUSTOMIZABLE</small><strong>Local clinic protocol</strong><em>Uses the approved below-20 and 20–30 ng/mL pathways, with editable durations before clinician confirmation.</em><b>Build schedule</b></span></label></div><aside id="vitd-guideline-note" class="vitd-guideline-note" hidden><strong>Endocrine Society 2024 guidance</strong><p>This guideline addresses prevention and generally healthy populations. It does not supply a replacement schedule based on the two serum-level thresholds used by the local protocol. No patient schedule is generated from this card.</p><p>Use the local protocol only when the clinician independently chooses that clinic pathway.</p></aside><form id="vitd-builder-form"><div id="vitd-local-controls"><div class="vitd-form-grid"><label>25-hydroxyvitamin D level<input id="vitd-level" type="number" min="1" max="300" step="0.1" required></label><label>Unit<select id="vitd-unit"><option value="ng">ng/mL</option><option value="nmol">nmol/L</option></select></label><label>First dose date<input id="vitd-start" type="date" value="${today}" required></label><label>Maintenance after repeat test<select id="vitd-maintenance"><option value="1000-daily">1,000 IU daily</option><option value="1500-daily">1,500 IU daily</option><option value="2000-daily" selected>2,000 IU daily</option><option value="50000-monthly">50,000 IU monthly</option><option value="custom">Custom clinician plan</option></select></label><label>Weekly phase duration<input id="vitd-weekly" type="number" min="1" max="12" value="4" required><span>weeks of 50,000 IU once weekly</span></label><label>Monthly phase duration<input id="vitd-monthly" type="number" min="0" max="12" value="4" required><span>months of 50,000 IU once monthly</span></label><label>Wait before repeat level<input id="vitd-wait" type="number" min="1" max="6" value="1" required><span>month(s) after final monthly dose</span></label><label class="vitd-clinic-field">Clinic label (optional)<input id="vitd-clinic" maxlength="80" placeholder="Clinic or service name"></label></div><div id="vitd-protocol-preview" class="vitd-protocol-preview"><strong>Enter the vitamin D level.</strong><span>The default local pathway will be selected, then you can adjust its durations.</span></div><fieldset class="vitd-safety"><legend>Required clinician confirmations</legend><label><input type="checkbox" data-vitd-confirm required><span>This is an adult patient and the result is 25-hydroxyvitamin D in the selected unit.</span></label><label><input type="checkbox" data-vitd-confirm required><span>I reviewed pregnancy, calcium status, kidney disease or stones, granulomatous disease, malabsorption or bariatric history, and interacting medicines.</span></label><label><input type="checkbox" data-vitd-confirm required><span>I independently reviewed and selected this local clinic protocol. The app is generating dates, not prescribing autonomously.</span></label></fieldset><button class="btn dr vitd-generate" type="submit">Confirm and generate patient schedule</button></div></form><section id="vitd-export" class="vitd-export" hidden></section></section></div>`;
  updateVitdProtocolMode();
  updateVitdProtocolPreview();
}
function selectedVitdProtocol(){return document.querySelector('input[name="vitd-protocol"]:checked')?.value||'local'}
function updateVitdProtocolMode(){const local=selectedVitdProtocol()==='local',controls=document.getElementById('vitd-local-controls'),note=document.getElementById('vitd-guideline-note');if(controls)controls.hidden=!local;if(note)note.hidden=local;document.querySelectorAll('.vitd-protocol-card').forEach(card=>card.classList.toggle('selected',card.querySelector('input')?.checked));}
function updateVitdProtocolPreview(){
  const target=document.getElementById('vitd-protocol-preview');if(!target||selectedVitdProtocol()!=='local')return;
  const level=Number(document.getElementById('vitd-level')?.value),unit=document.getElementById('vitd-unit')?.value||'ng';
  if(!level){target.innerHTML='<strong>Enter the vitamin D level.</strong><span>The default local pathway will be selected, then you can adjust its durations.</span>';return}
  const ng=unit==='nmol'?level/2.5:level,p=vitdProtocol(ng);
  if(!p){target.classList.add('out-of-range');target.innerHTML=`<strong>Outside the local pathways.</strong><span>${ng.toFixed(1)} ng/mL does not match below 20 or 20–30 ng/mL.</span>`;return}
  const weekly=document.getElementById('vitd-weekly');if(weekly&&!weekly.dataset.edited)weekly.value=p.weekly;
  const monthly=document.getElementById('vitd-monthly');if(monthly&&!monthly.dataset.edited)monthly.value=p.monthly;
  const wait=document.getElementById('vitd-wait');if(wait&&!wait.dataset.edited)wait.value=p.wait;
  target.classList.remove('out-of-range');target.innerHTML=`<strong>${p.label} local pathway</strong><span>Default: 50,000 IU once weekly for ${p.weekly} weeks, then once monthly for ${p.monthly} months, then wait ${p.wait} month and repeat the level. The duration fields remain editable.</span>`;
}"""
app=re.sub(r"function renderVitaminDTool\(\)\{.*?\n\}\nfunction updateVitdProtocolPreview\(\)\{.*?\n\}",new_render,app,count=1,flags=re.S)

old="for(const eventName of ['input','change'])document.addEventListener(eventName,e=>{if(e.target?.id==='vitd-level'||e.target?.id==='vitd-unit')updateVitdProtocolPreview()});"
new="for(const eventName of ['input','change'])document.addEventListener(eventName,e=>{if(e.target?.name==='vitd-protocol'){updateVitdProtocolMode();updateVitdProtocolPreview();return}if(['vitd-level','vitd-unit','vitd-weekly','vitd-monthly','vitd-wait'].includes(e.target?.id)){if(['vitd-weekly','vitd-monthly','vitd-wait'].includes(e.target.id)&&eventName==='input')e.target.dataset.edited='1';updateVitdProtocolPreview()}});"
app=app.replace(old,new)
app=re.sub(r"document.addEventListener\('submit',e=>\{\n  if\(e.target\?\.id!=='vitd-builder-form'\)return;.*?\n\}\);","""document.addEventListener('submit',e=>{
  if(e.target?.id!=='vitd-builder-form')return;
  e.preventDefault();
  if(selectedVitdProtocol()!=='local'){alert('The Endocrine Society 2024 card is guidance context, not a level-based replacement schedule. Select the local clinic protocol to generate a patient schedule.');return}
  const data={protocol:'local',level:document.getElementById('vitd-level').value,unit:document.getElementById('vitd-unit').value,startDate:document.getElementById('vitd-start').value,weekly:document.getElementById('vitd-weekly').value,monthly:document.getElementById('vitd-monthly').value,wait:document.getElementById('vitd-wait').value,maintenance:document.getElementById('vitd-maintenance').value,clinic:document.getElementById('vitd-clinic').value};
  const schedule=vitdScheduleFromInput(data);
  if(!schedule){alert('This vitamin D level is outside the two local clinic pathways. Use a custom clinician plan.');return}
  renderVitdExport(schedule);
});""",app,count=1,flags=re.S)

css_add="""
/* Dual vitamin D protocol selector */
.vitd-protocol-choice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin:22px 0}
.vitd-protocol-card{display:block;cursor:pointer;min-height:190px}
.vitd-protocol-card input{position:absolute;opacity:0;pointer-events:none}
.vitd-protocol-card>span{height:100%;display:flex;flex-direction:column;gap:8px;padding:20px;border:2px solid #d9e1eb;border-radius:20px;background:#fff;transition:border-color .18s,transform .18s,box-shadow .18s}
.vitd-protocol-card strong{font-size:1.22rem}.vitd-protocol-card em{font-style:normal;line-height:1.45;color:#4b5563;flex:1}.vitd-protocol-card b{font-size:.86rem}.vitd-protocol-card.selected>span{border-color:#2457a6;box-shadow:0 8px 24px rgba(36,87,166,.14);transform:translateY(-2px)}
.vitd-protocol-card.guidance.selected>span{border-color:#6c5aa7}.vitd-guideline-note{padding:18px;border-radius:16px;background:#f5f2ff;border:1px solid #d9d0f5;margin-bottom:20px}.vitd-guideline-note p{margin:.5rem 0 0}.vitd-form-grid label span{display:block;font-size:.78rem;color:#667085;margin-top:5px}
@media(max-width:680px){.vitd-protocol-choice{grid-template-columns:1fr}.vitd-protocol-card{min-height:0}}
"""
if '/* Dual vitamin D protocol selector */' not in css: css += css_add
rules=rules.replace('The user has explicitly approved one clinician-only dosing exception: Physician Mode may generate the dated vitamin D schedule defined by the approved local clinic pathways below 20 ng/mL and 20–30 ng/mL.','The user has explicitly approved one clinician-only dosing exception: Physician Mode may display Endocrine Society 2024 guidance context and may generate the dated vitamin D schedule defined by the approved local clinic pathways below 20 ng/mL and 20–30 ng/mL. The local pathway durations may be adjusted by the physician before confirmation.')
entry='\n## Dual vitamin D protocol selector\n\n- Added visible Endocrine Society 2024 guidance and Local clinic protocol cards.\n- Kept the current guideline card informational because it does not define the app’s level-based replacement schedule.\n- Made local weekly, monthly, and repeat-test intervals editable before clinician confirmation.\n- Preserved QR, mobile patient page, calendar, image export, privacy limits, and existing dosing locks outside Physician Mode.\n'
if '## Dual vitamin D protocol selector' not in history: history += entry
app_path.write_text(app,encoding='utf-8');css_path.write_text(css,encoding='utf-8');rules_path.write_text(rules,encoding='utf-8');history_path.write_text(history,encoding='utf-8')
