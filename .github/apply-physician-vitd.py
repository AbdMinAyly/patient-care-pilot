# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
import re

app_path=Path('app.js')
css_path=Path('styles.css')
index_path=Path('index.html')
rules_path=Path('PATIENT_CARE_RULES.md')
history_path=Path('docs/HISTORY.md')

app=app_path.read_text(encoding='utf-8')
css=css_path.read_text(encoding='utf-8')
index=index_path.read_text(encoding='utf-8')
rules=rules_path.read_text(encoding='utf-8')
history=history_path.read_text(encoding='utf-8')

if '<script src="qr.js"></script>' not in index:
    index=index.replace('<script src="app.js"></script>','<script src="qr.js"></script>\n<script src="app.js"></script>')

marker='// BEGIN PHYSICIAN VITAMIN D TOOL'
block=r'''// BEGIN PHYSICIAN VITAMIN D TOOL
const VITD_PROGRESS_PREFIX='pc_vitd_progress_';
const VITD_MAINTENANCE={
  '1000-daily':'1,000 IU once daily',
  '1500-daily':'1,500 IU once daily',
  '2000-daily':'2,000 IU once daily',
  '50000-monthly':'50,000 IU once monthly',
  'custom':'Custom clinician plan'
};
function vitdDate(value){return new Date(String(value)+'T12:00:00')}
function vitdIso(date){return date.toISOString().slice(0,10)}
function vitdAddDays(value,days){const d=typeof value==='string'?vitdDate(value):new Date(value);d.setDate(d.getDate()+days);return d}
function vitdAddMonths(value,months){const d=typeof value==='string'?vitdDate(value):new Date(value);const day=d.getDate();d.setDate(1);d.setMonth(d.getMonth()+months);const last=new Date(d.getFullYear(),d.getMonth()+1,0).getDate();d.setDate(Math.min(day,last));return d}
function vitdPretty(value){return vitdDate(value).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'})}
function vitdProtocol(levelNg){if(levelNg<20)return {id:'under20',label:'Below 20 ng/mL',weekly:8,monthly:4};if(levelNg<=30)return {id:'20to30',label:'20–30 ng/mL',weekly:4,monthly:4};return null}
function vitdScheduleFromInput(data){
  const levelNg=data.unit==='nmol'?Number(data.level)/2.5:Number(data.level);
  const protocol=vitdProtocol(levelNg);
  if(!protocol)return null;
  const weekly=Array.from({length:protocol.weekly},(_,i)=>vitdIso(vitdAddDays(data.startDate,i*7)));
  const firstMonthly=vitdAddMonths(weekly[weekly.length-1],1);
  const monthly=Array.from({length:protocol.monthly},(_,i)=>vitdIso(vitdAddMonths(firstMonthly,i)));
  const repeat=vitdIso(vitdAddMonths(monthly[monthly.length-1],1));
  return {v:1,p:protocol.id,s:data.startDate,w:protocol.weekly,m:protocol.monthly,r:repeat,mt:data.maintenance||'custom',c:String(data.clinic||'').trim().slice(0,80)};
}
function vitdExpandSchedule(schedule){
  const weekly=Array.from({length:Number(schedule.w)||0},(_,i)=>vitdIso(vitdAddDays(schedule.s,i*7)));
  const firstMonthly=vitdAddMonths(weekly[weekly.length-1],1);
  const monthly=Array.from({length:Number(schedule.m)||0},(_,i)=>vitdIso(vitdAddMonths(firstMonthly,i)));
  return {weekly,monthly,repeat:schedule.r||vitdIso(vitdAddMonths(monthly[monthly.length-1],1))};
}
function vitdEncode(value){return btoa(unescape(encodeURIComponent(JSON.stringify(value)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function vitdDecode(value){try{const s=String(value).replace(/-/g,'+').replace(/_/g,'/');return JSON.parse(decodeURIComponent(escape(atob(s+'==='.slice((s.length+3)%4))))) }catch(e){return null}}
function vitdPatientUrl(schedule){return location.origin+location.pathname+location.search+'#/patient/vitamin-d/'+vitdEncode(schedule)}
function renderPhysicianMode(){
  document.body.classList.add('physician-mode-active');
  document.body.classList.remove('vitd-patient-active');
  setActive('summary');
  app.innerHTML=`<div class="screen physician-screen"><section class="physician-hero"><div class="physician-mark" aria-hidden="true">✚</div><div><p class="eyebrow">CLINICIAN TOOLS</p><h1>Physician Mode</h1><p>Clinician-confirmed tools that create clear patient handouts without storing identifying information.</p></div></section><section class="physician-tool-grid"><a class="physician-tool-card" href="#/physician/vitamin-d"><span aria-hidden="true">☀</span><div><small>AVAILABLE TOOL</small><h2>Export vitamin D schedule</h2><p>Generate dated weekly and monthly doses, a patient QR link, calendar file, and interactive mobile schedule.</p></div><b>Open →</b></a></section><aside class="physician-warning"><strong>Clinician use only.</strong> This mode does not diagnose, select treatment independently, or replace review of contraindications, comorbidities, medicines, pregnancy, kidney function, calcium status, or local policy.</aside><a class="btn ghost button-link" href="#/plan">Return to Your Plan</a></div>`;
}
function renderVitaminDTool(){
  document.body.classList.add('physician-mode-active');
  document.body.classList.remove('vitd-patient-active');
  setActive('summary');
  const today=new Date().toISOString().slice(0,10);
  app.innerHTML=`<div class="screen physician-screen"><section class="vitd-builder"><a class="detail-back back-control dr" href="#/physician"><span class="back-control-icon" aria-hidden="true">←</span><span>Physician Mode</span></a><header><p class="eyebrow">PHYSICIAN MODE / VITAMIN D</p><h1>Generate a patient schedule</h1><p>Uses the selected clinic protocol only after clinician confirmation. The patient link contains schedule details but no name, date of birth, record number, or medical history.</p></header><form id="vitd-builder-form"><div class="vitd-form-grid"><label>25-hydroxyvitamin D level<input id="vitd-level" type="number" min="1" max="300" step="0.1" required></label><label>Unit<select id="vitd-unit"><option value="ng">ng/mL</option><option value="nmol">nmol/L</option></select></label><label>First dose date<input id="vitd-start" type="date" value="${today}" required></label><label>Maintenance after repeat test<select id="vitd-maintenance"><option value="1000-daily">1,000 IU daily</option><option value="1500-daily">1,500 IU daily</option><option value="2000-daily" selected>2,000 IU daily</option><option value="50000-monthly">50,000 IU monthly</option><option value="custom">Custom clinician plan</option></select></label><label class="vitd-clinic-field">Clinic label (optional)<input id="vitd-clinic" maxlength="80" placeholder="Clinic or service name"></label></div><div id="vitd-protocol-preview" class="vitd-protocol-preview"><strong>Enter the vitamin D level.</strong><span>The tool supports the approved clinic pathways below 20 ng/mL and 20–30 ng/mL.</span></div><fieldset class="vitd-safety"><legend>Required clinician confirmations</legend><label><input type="checkbox" data-vitd-confirm required><span>This is an adult patient and the result is 25-hydroxyvitamin D in the selected unit.</span></label><label><input type="checkbox" data-vitd-confirm required><span>I reviewed pregnancy, calcium status, kidney disease or stones, granulomatous disease, malabsorption or bariatric history, and interacting medicines.</span></label><label><input type="checkbox" data-vitd-confirm required><span>I independently reviewed and selected this clinic protocol. The app is generating dates, not prescribing autonomously.</span></label></fieldset><button class="btn dr vitd-generate" type="submit">Confirm and generate patient schedule</button></form><section id="vitd-export" class="vitd-export" hidden></section></section></div>`;
  updateVitdProtocolPreview();
}
function updateVitdProtocolPreview(){
  const target=document.getElementById('vitd-protocol-preview');if(!target)return;
  const level=Number(document.getElementById('vitd-level')?.value),unit=document.getElementById('vitd-unit')?.value||'ng';
  if(!level){target.innerHTML='<strong>Enter the vitamin D level.</strong><span>The tool supports the approved clinic pathways below 20 ng/mL and 20–30 ng/mL.</span>';return}
  const ng=unit==='nmol'?level/2.5:level,p=vitdProtocol(ng);
  if(!p){target.classList.add('out-of-range');target.innerHTML=`<strong>Outside this clinic tool.</strong><span>${ng.toFixed(1)} ng/mL does not match either built-in pathway. Use a custom clinician plan.</span>`;return}
  target.classList.remove('out-of-range');target.innerHTML=`<strong>${p.label} pathway</strong><span>50,000 IU once weekly for ${p.weekly} weeks, then 50,000 IU once monthly for 4 months, then wait 1 month and repeat the vitamin D level.</span>`;
}
function renderVitdExport(schedule){
  const target=document.getElementById('vitd-export');if(!target)return;
  const dates=vitdExpandSchedule(schedule),url=vitdPatientUrl(schedule);
  target.hidden=false;
  target.innerHTML=`<div class="vitd-export-head"><div><p class="eyebrow">PATIENT HANDOFF</p><h2>Vitamin D Journey is ready</h2><p>Have the patient scan the QR code or share the link. Review every date before handoff.</p></div><div id="vitd-qr" class="vitd-qr" aria-label="QR code for patient schedule"></div></div><div class="vitd-export-summary"><article><small>Weekly phase</small><strong>${schedule.w} doses</strong><span>${vitdPretty(dates.weekly[0])} – ${vitdPretty(dates.weekly.at(-1))}</span></article><article><small>Monthly phase</small><strong>${schedule.m} doses</strong><span>${vitdPretty(dates.monthly[0])} – ${vitdPretty(dates.monthly.at(-1))}</span></article><article><small>Repeat level</small><strong>${vitdPretty(dates.repeat)}</strong><span>Maintenance or another course requires clinician review.</span></article></div><label class="vitd-link-label">Patient link<input id="vitd-patient-link" readonly value="${esc(url)}"></label><div class="vitd-export-actions"><button class="btn dr" data-vitd-open-patient="1">Open patient page</button><button class="btn ghost" data-vitd-copy-link="1">Copy link</button><button class="btn ghost" data-vitd-share-link="1">Share</button></div><aside class="vitd-export-note">The QR/link is equivalent to a paper handout. Anyone who has it can open the schedule. Do not add patient-identifying information.</aside>`;
  target.dataset.schedule=vitdEncode(schedule);
  try{const qr=qrcode(0,'M');qr.addData(url);qr.make();document.getElementById('vitd-qr').innerHTML=qr.createSvgTag({cellSize:5,margin:4,scalable:true})}catch(e){document.getElementById('vitd-qr').innerHTML='<p>QR generation failed. Use the patient link.</p>'}
  target.scrollIntoView({behavior:'smooth',block:'start'});
}
function vitdProgressKey(code){let h=2166136261;for(let i=0;i<code.length;i++){h^=code.charCodeAt(i);h=Math.imul(h,16777619)}return VITD_PROGRESS_PREFIX+(h>>>0).toString(36)}
function vitdLoadProgress(code){try{return JSON.parse(localStorage.getItem(vitdProgressKey(code)))||[]}catch(e){return []}}
function vitdSaveProgress(code,done){localStorage.setItem(vitdProgressKey(code),JSON.stringify([...done]))}
function renderVitaminDPatient(code){
  const schedule=vitdDecode(code);
  document.body.classList.add('vitd-patient-active');document.body.classList.remove('physician-mode-active','shine-intro-active','heal-intro-active','dr-intro-active');
  if(!schedule||schedule.v!==1){app.innerHTML='<div class="screen"><section class="detail"><h1>This schedule link is invalid</h1><p>Ask the clinic to generate a new link.</p></section></div>';return}
  const dates=vitdExpandSchedule(schedule),doses=[...dates.weekly.map((date,i)=>({id:'w'+i,date,phase:'Weekly',label:`Weekly dose ${i+1} of ${dates.weekly.length}`})),...dates.monthly.map((date,i)=>({id:'m'+i,date,phase:'Monthly',label:`Monthly dose ${i+1} of ${dates.monthly.length}`}))];
  const done=new Set(vitdLoadProgress(code)),completed=doses.filter(x=>done.has(x.id)).length,next=doses.find(x=>!done.has(x.id));
  app.innerHTML=`<div class="vitd-patient-page"><header class="vitd-journey-hero"><div class="vitd-sun" aria-hidden="true"><span style="--progress:${Math.round(completed/Math.max(doses.length,1)*100)}%">☀</span></div><p class="eyebrow">YOUR VITAMIN D JOURNEY</p><h1>One dose at a time</h1><p>${schedule.c?esc(schedule.c)+' prepared this schedule. ':''}Mark each dose when completed and keep the repeat-test date visible.</p><div class="vitd-progress"><div><span style="width:${Math.round(completed/Math.max(doses.length,1)*100)}%"></span></div><strong>${completed} of ${doses.length} doses completed</strong></div>${next?`<aside class="vitd-next"><small>NEXT DOSE</small><strong>${esc(next.label)}</strong><span>${vitdPretty(next.date)} · 50,000 IU</span></aside>`:`<aside class="vitd-next complete"><strong>Replacement schedule completed</strong><span>Follow the repeat-test and clinician review plan below.</span></aside>`}</header><main class="vitd-journey-main"><section class="vitd-phase"><div class="vitd-phase-head"><span>1</span><div><small>WEEKLY PHASE</small><h2>Build the foundation</h2></div></div><div class="vitd-dose-list">${dates.weekly.map((date,i)=>vitdDoseCard('w'+i,`Weekly dose ${i+1}`,date,done)).join('')}</div></section><section class="vitd-phase monthly"><div class="vitd-phase-head"><span>2</span><div><small>MONTHLY PHASE</small><h2>Keep the momentum</h2></div></div><div class="vitd-dose-list">${dates.monthly.map((date,i)=>vitdDoseCard('m'+i,`Monthly dose ${i+1}`,date,done)).join('')}</div></section><section class="vitd-repeat"><span aria-hidden="true">🧪</span><div><small>REPEAT VITAMIN D LEVEL</small><h2>${vitdPretty(dates.repeat)}</h2><p>Wait one month after the final monthly dose, then repeat the level as directed. Maintenance or another replacement course requires clinician review.</p></div></section><section class="vitd-maintenance"><small>PLANNED MAINTENANCE AFTER REVIEW</small><h2>${esc(VITD_MAINTENANCE[schedule.mt]||'Custom clinician plan')}</h2><p>Start only after the clinician reviews the repeat result and confirms the plan.</p></section><section class="vitd-save-card"><h2>Save this journey to your phone</h2><div class="vitd-save-actions"><button class="btn dr" data-vitd-share-patient="1">Share or save link</button><button class="btn ghost" data-vitd-calendar="1">Add dates to calendar</button><button class="btn ghost" data-vitd-image="1">Save as image</button><button class="btn ghost" data-vitd-copy-patient="1">Copy link</button></div><details><summary>Add to your Home Screen</summary><div class="vitd-home-help"><p><strong>iPhone:</strong> open in Safari, tap Share, then Add to Home Screen.</p><p><strong>Android:</strong> open in Chrome, tap the menu, then Add to Home screen or Install app.</p></div></details></section><aside class="vitd-patient-safety"><strong>Use only this confirmed schedule.</strong><p>Do not take 50,000 IU more often than shown. Contact the clinic if the product strength is different, a dose was taken incorrectly, pregnancy or a new medical condition occurs, or new medicines are started.</p></aside></main></div>`;
  app.dataset.vitdCode=code;app.dataset.vitdSchedule=vitdEncode(schedule);
}
function vitdDoseCard(id,label,date,done){const checked=done.has(id);return `<label class="vitd-dose-card ${checked?'done':''}"><input type="checkbox" data-vitd-dose="${id}" ${checked?'checked':''}><span class="vitd-dose-check">${checked?'✓':''}</span><span><small>${esc(label)}</small><strong>${vitdPretty(date)}</strong><em>50,000 IU · ${id.startsWith('w')?'once weekly':'once monthly'}</em></span></label>`}
function refreshVitdPatientProgress(){const code=app.dataset.vitdCode;if(code)renderVitaminDPatient(code)}
function vitdDownload(filename,type,content){const blob=new Blob([content],{type}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)}
function vitdIcs(schedule){const dates=vitdExpandSchedule(schedule),all=[...dates.weekly.map((d,i)=>({d,t:`Vitamin D weekly dose ${i+1}`})),...dates.monthly.map((d,i)=>({d,t:`Vitamin D monthly dose ${i+1}`})),{d:dates.repeat,t:'Repeat vitamin D level'}];const stamp=new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');return ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Patient Care//Vitamin D Journey//EN',...all.flatMap((x,i)=>['BEGIN:VEVENT',`UID:vitd-${i}-${x.d}@patient-care`,`DTSTAMP:${stamp}`,`DTSTART;VALUE=DATE:${x.d.replace(/-/g,'')}`,`SUMMARY:${x.t}`,'DESCRIPTION:Follow the clinician-confirmed Vitamin D Journey schedule.','END:VEVENT']),'END:VCALENDAR'].join('\r\n')}
function vitdSaveImage(schedule){const dates=vitdExpandSchedule(schedule),canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');canvas.width=1080;canvas.height=1500;ctx.fillStyle='#fff8dd';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#8b5e00';ctx.textAlign='center';ctx.font='bold 76px system-ui';ctx.fillText('Vitamin D Journey',540,115);ctx.font='34px system-ui';ctx.fillText('Clinician-confirmed schedule',540,170);ctx.fillStyle='#c68a00';ctx.beginPath();ctx.arc(540,270,64,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.font='64px system-ui';ctx.fillText('☀',540,292);ctx.textAlign='left';ctx.fillStyle='#4b3a08';ctx.font='bold 36px system-ui';ctx.fillText('Weekly phase',90,400);ctx.font='28px system-ui';dates.weekly.forEach((d,i)=>ctx.fillText(`${i+1}. ${vitdPretty(d)} — 50,000 IU`,110,455+i*52));let y=500+dates.weekly.length*52;ctx.font='bold 36px system-ui';ctx.fillText('Monthly phase',90,y);ctx.font='28px system-ui';dates.monthly.forEach((d,i)=>ctx.fillText(`${i+1}. ${vitdPretty(d)} — 50,000 IU`,110,y+55+i*52));y+=110+dates.monthly.length*52;ctx.font='bold 36px system-ui';ctx.fillText('Repeat vitamin D level',90,y);ctx.font='30px system-ui';ctx.fillText(vitdPretty(dates.repeat),110,y+52);ctx.font='bold 34px system-ui';ctx.fillText('Maintenance after clinician review',90,y+135);ctx.font='28px system-ui';ctx.fillText(VITD_MAINTENANCE[schedule.mt]||'Custom clinician plan',110,y+185);ctx.font='24px system-ui';ctx.fillStyle='#6b5a29';wrapCanvasText(ctx,'Do not take 50,000 IU more often than shown. Contact the clinic if the strength differs or the plan changes.',90,1360,900,34);canvas.toBlob(blob=>{if(!blob)return;const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='vitamin-d-journey.png';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)},'image/png')}
function wrapCanvasText(ctx,text,x,y,maxWidth,lineHeight){const words=text.split(' ');let line='';for(const word of words){const test=line+word+' ';if(ctx.measureText(test).width>maxWidth&&line){ctx.fillText(line,x,y);line=word+' ';y+=lineHeight}else line=test}ctx.fillText(line,x,y)}
// END PHYSICIAN VITAMIN D TOOL
'''
if marker not in app:
    route_pos=app.find('function route(){')
    if route_pos<0: raise SystemExit('route function not found')
    app=app[:route_pos]+block+'\n'+app[route_pos:]

route_injection="""function route(){\n  const specialHash=location.hash||'#/shine';\n  if(specialHash==='#/physician'){renderPhysicianMode();focusPageHeading();return}\n  if(specialHash==='#/physician/vitamin-d'){renderVitaminDTool();focusPageHeading();return}\n  if(specialHash.startsWith('#/patient/vitamin-d/')){renderVitaminDPatient(specialHash.slice('#/patient/vitamin-d/'.length));return}\n  document.body.classList.remove('physician-mode-active','vitd-patient-active');"""
if "specialHash.startsWith('#/patient/vitamin-d/')" not in app:
    app=app.replace('function route(){',route_injection,1)

if 'data-open-physician-mode' not in app:
    pattern=r'(<button[^>]*data-clear-all[^>]*>.*?</button>)'
    repl=r'''\1<a class="btn ghost button-link" href="#/physician" data-open-physician-mode="1">Physician Mode</a>'''
    app,count=re.subn(pattern,repl,app,count=1,flags=re.S)
    if count!=1: raise SystemExit('Could not add Physician Mode link near Clear All Data')

handlers=r'''

// Physician Mode and patient schedule interactions
for(const eventName of ['input','change'])document.addEventListener(eventName,e=>{if(e.target?.id==='vitd-level'||e.target?.id==='vitd-unit')updateVitdProtocolPreview()});
document.addEventListener('submit',e=>{
  if(e.target?.id!=='vitd-builder-form')return;
  e.preventDefault();
  const data={level:document.getElementById('vitd-level').value,unit:document.getElementById('vitd-unit').value,startDate:document.getElementById('vitd-start').value,maintenance:document.getElementById('vitd-maintenance').value,clinic:document.getElementById('vitd-clinic').value};
  const schedule=vitdScheduleFromInput(data);
  if(!schedule){alert('This vitamin D level is outside the two built-in clinic pathways. Use a custom clinician plan.');return}
  renderVitdExport(schedule);
});
document.addEventListener('change',e=>{
  const dose=e.target.closest?.('[data-vitd-dose]');if(!dose)return;
  const code=app.dataset.vitdCode;if(!code)return;
  const done=new Set(vitdLoadProgress(code));dose.checked?done.add(dose.dataset.vitdDose):done.delete(dose.dataset.vitdDose);vitdSaveProgress(code,done);refreshVitdPatientProgress();
});
document.addEventListener('click',async e=>{
  const exportBox=document.getElementById('vitd-export'),encoded=exportBox?.dataset.schedule,schedule=encoded?vitdDecode(encoded):null;
  if(e.target.closest('[data-vitd-open-patient]')&&schedule){location.hash='#/patient/vitamin-d/'+vitdEncode(schedule);return}
  if(e.target.closest('[data-vitd-copy-link]')){const value=document.getElementById('vitd-patient-link')?.value;if(value){await navigator.clipboard?.writeText(value);showToast('Patient link copied')}return}
  if(e.target.closest('[data-vitd-share-link]')&&schedule){const url=vitdPatientUrl(schedule);if(navigator.share)await navigator.share({title:'Vitamin D Journey',text:'Open your vitamin D schedule',url});else{await navigator.clipboard?.writeText(url);showToast('Patient link copied')}return}
  const patientSchedule=app.dataset.vitdSchedule?vitdDecode(app.dataset.vitdSchedule):null;
  if(e.target.closest('[data-vitd-share-patient]')&&patientSchedule){if(navigator.share)await navigator.share({title:'Vitamin D Journey',text:'My vitamin D schedule',url:location.href});else{await navigator.clipboard?.writeText(location.href);showToast('Schedule link copied')}return}
  if(e.target.closest('[data-vitd-copy-patient]')){await navigator.clipboard?.writeText(location.href);showToast('Schedule link copied');return}
  if(e.target.closest('[data-vitd-calendar]')&&patientSchedule){vitdDownload('vitamin-d-journey.ics','text/calendar;charset=utf-8',vitdIcs(patientSchedule));return}
  if(e.target.closest('[data-vitd-image]')&&patientSchedule){vitdSaveImage(patientSchedule);return}
});
'''
if '// Physician Mode and patient schedule interactions' not in app:
    app += handlers

css_marker='/* Physician Mode vitamin D Journey */'
css_block=r'''

/* Physician Mode vitamin D Journey */
body.physician-mode-active .bottom-nav,body.vitd-patient-active .bottom-nav{display:none}
body.physician-mode-active,body.vitd-patient-active{padding-bottom:0}
.physician-screen{max-width:920px;margin:auto}.physician-hero{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:22px;padding:30px;border-radius:30px;color:#fff;background:linear-gradient(135deg,#0f3f78,#1767c2 60%,#4da2ee);box-shadow:0 20px 50px rgba(15,63,120,.2)}.physician-mark{display:grid;place-items:center;width:86px;height:86px;border-radius:26px;background:rgba(255,255,255,.15);font-size:3rem}.physician-hero h1{margin:.15rem 0 .45rem;font-size:clamp(2.3rem,7vw,4.5rem)}.physician-hero p{margin:0;max-width:650px;line-height:1.55}.physician-tool-grid{display:grid;margin:18px 0}.physician-tool-card{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:18px;padding:24px;border:1px solid #cfe0f2;border-radius:26px;background:#fff;text-decoration:none;box-shadow:0 12px 30px rgba(15,63,120,.08)}.physician-tool-card>span{display:grid;place-items:center;width:68px;height:68px;border-radius:22px;background:#edf5ff;color:#1767c2;font-size:2.2rem}.physician-tool-card small{color:#1767c2;font-weight:900;letter-spacing:.08em}.physician-tool-card h2{margin:.2rem 0 .35rem}.physician-tool-card p{margin:0;color:#667085}.physician-warning{margin:16px 0;padding:16px;border:1px solid #f0c66a;border-radius:18px;background:#fff8e8;color:#5c4308}.vitd-builder{padding:22px;border:1px solid #dce5ef;border-radius:30px;background:#fff;box-shadow:0 14px 38px rgba(17,24,39,.07)}.vitd-builder header{margin:22px 0}.vitd-builder h1{font-size:clamp(2rem,6vw,3.7rem);margin:.2rem 0}.vitd-builder header>p:not(.eyebrow){max-width:760px;color:#667085;line-height:1.55}.vitd-form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.vitd-form-grid label{display:grid;gap:7px;font-weight:850}.vitd-form-grid input,.vitd-form-grid select,.vitd-link-label input{min-height:50px;padding:11px 13px;border:1px solid #cfd9e5;border-radius:14px;background:#fff;font:inherit}.vitd-clinic-field{grid-column:1/-1}.vitd-protocol-preview{display:grid;gap:5px;margin:16px 0;padding:16px;border-left:5px solid #d69b12;border-radius:16px;background:#fff8dd}.vitd-protocol-preview.out-of-range{border-color:#b42318;background:#fff1f0}.vitd-protocol-preview span{color:#667085;line-height:1.5}.vitd-safety{display:grid;gap:10px;margin:16px 0;padding:16px;border:1px solid #dce3eb;border-radius:18px}.vitd-safety legend{padding:0 8px;font-weight:950}.vitd-safety label{display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:start}.vitd-safety input{width:20px;height:20px}.vitd-generate{width:100%;justify-content:center}.vitd-export{display:grid;gap:18px;margin-top:24px;padding-top:24px;border-top:1px solid #e3e7ed}.vitd-export-head{display:grid;grid-template-columns:1fr minmax(210px,280px);gap:20px;align-items:center}.vitd-export-head h2{font-size:2rem;margin:.2rem 0}.vitd-qr{padding:12px;border-radius:20px;background:#fff;border:1px solid #dce3eb}.vitd-qr svg{display:block;width:100%;height:auto}.vitd-export-summary{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.vitd-export-summary article{display:grid;gap:5px;padding:15px;border-radius:18px;background:#f5f8fc}.vitd-export-summary small{color:#1767c2;font-weight:900}.vitd-export-summary span{color:#667085;font-size:.82rem}.vitd-link-label{display:grid;gap:7px;font-weight:850}.vitd-export-actions,.vitd-save-actions{display:flex;flex-wrap:wrap;gap:9px}.vitd-export-note{padding:13px;border-radius:14px;background:#f8fafc;color:#667085;font-size:.86rem}.vitd-patient-page{min-height:100svh;background:linear-gradient(180deg,#fff4b7 0,#fffaf0 38%,#f7f8fb 100%);color:#3d3108}.vitd-journey-hero{padding:calc(28px + env(safe-area-inset-top)) 20px 28px;text-align:center;background:radial-gradient(circle at 50% 22%,#fffbdc,transparent 33%),linear-gradient(180deg,#f5c84c,#fff1a7);border-radius:0 0 34px 34px}.vitd-sun span{display:grid;place-items:center;width:100px;height:100px;margin:auto;border-radius:50%;background:conic-gradient(#d28b00 var(--progress),rgba(255,255,255,.48) 0);font-size:3.8rem;box-shadow:0 12px 34px rgba(176,112,0,.18)}.vitd-journey-hero h1{font-size:clamp(2.5rem,12vw,5rem);margin:.3rem 0}.vitd-journey-hero>p:not(.eyebrow){max-width:600px;margin:0 auto;line-height:1.5}.vitd-progress{max-width:520px;margin:20px auto 0}.vitd-progress>div{height:12px;border-radius:999px;background:rgba(255,255,255,.58);overflow:hidden}.vitd-progress>div span{display:block;height:100%;border-radius:inherit;background:#9a6600}.vitd-progress strong{display:block;margin-top:7px}.vitd-next{display:grid;gap:4px;max-width:520px;margin:18px auto 0;padding:15px;border-radius:20px;background:rgba(255,255,255,.72);box-shadow:0 10px 28px rgba(122,77,0,.1)}.vitd-next small{color:#9a6600;font-weight:950}.vitd-next.complete{background:#edf9ee;color:#1f6b2e}.vitd-journey-main{display:grid;gap:18px;max-width:720px;margin:auto;padding:20px 14px 40px}.vitd-phase,.vitd-repeat,.vitd-maintenance,.vitd-save-card,.vitd-patient-safety{padding:18px;border:1px solid #eadcaa;border-radius:24px;background:#fff;box-shadow:0 10px 28px rgba(80,62,10,.06)}.vitd-phase-head{display:flex;gap:12px;align-items:center;margin-bottom:14px}.vitd-phase-head>span{display:grid;place-items:center;width:46px;height:46px;border-radius:16px;background:#f4bd35;color:#4c3500;font-size:1.4rem;font-weight:950}.vitd-phase-head small,.vitd-repeat small,.vitd-maintenance small{color:#a16a00;font-weight:950;letter-spacing:.08em}.vitd-phase-head h2,.vitd-repeat h2,.vitd-maintenance h2,.vitd-save-card h2{margin:.2rem 0}.vitd-dose-list{display:grid;gap:9px}.vitd-dose-card{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;padding:13px;border:1px solid #e7e0c8;border-radius:17px;background:#fffdf6;cursor:pointer}.vitd-dose-card input{position:absolute;opacity:0;pointer-events:none}.vitd-dose-check{display:grid;place-items:center;width:42px;height:42px;border:2px solid #d3b85e;border-radius:14px;color:#fff;background:#fff}.vitd-dose-card>span:last-child{display:grid;gap:2px}.vitd-dose-card small{color:#9a6600;font-weight:900}.vitd-dose-card em{color:#756b4e;font-size:.78rem;font-style:normal}.vitd-dose-card.done{opacity:.74;background:#f0f8e9;border-color:#9ac578}.vitd-dose-card.done .vitd-dose-check{border-color:#5b9b36;background:#5b9b36}.vitd-repeat{display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:start}.vitd-repeat>span{font-size:2rem}.vitd-maintenance{border-color:#b9d6ef;background:#f3f9ff}.vitd-save-card details{margin-top:14px}.vitd-save-card summary{min-height:44px;display:flex;align-items:center;font-weight:900;cursor:pointer}.vitd-home-help{padding:12px;border-radius:14px;background:#f7f8fa}.vitd-patient-safety{border-color:#efb4ae;background:#fff3f2;color:#6b1f18}.vitd-patient-safety p{margin:.35rem 0 0;line-height:1.5}@media(max-width:650px){.physician-hero{grid-template-columns:1fr}.physician-mark{width:68px;height:68px}.physician-tool-card{grid-template-columns:auto 1fr}.physician-tool-card>b{grid-column:2}.vitd-form-grid,.vitd-export-summary,.vitd-export-head{grid-template-columns:1fr}.vitd-export-head{align-items:start}.vitd-qr{max-width:280px;margin:auto}.vitd-export-actions .btn,.vitd-save-actions .btn{width:100%;justify-content:center}}@media(prefers-reduced-motion:reduce){.vitd-sun span{transition:none}}@media print{body.vitd-patient-active{background:#fff}.vitd-save-card,.vitd-patient-safety button,.bottom-nav{display:none!important}.vitd-patient-page{background:#fff}.vitd-journey-hero,.vitd-phase,.vitd-repeat,.vitd-maintenance{box-shadow:none;break-inside:avoid}}
'''
if css_marker not in css: css += css_block

rules_note='''\n\n## 14. Narrow Physician Mode exception — vitamin D schedules\n\nThe user has explicitly approved one clinician-only dosing exception: Physician Mode may generate the dated vitamin D schedule defined by the approved local clinic pathways below 20 ng/mL and 20–30 ng/mL. The clinician must confirm the protocol and safety review before export. The patient link must contain no identifying information. This exception does not unlock or alter any existing medication or supplement dosing field, does not authorize autonomous prescribing, and does not apply to any other treatment or schedule.\n'''
if '## 14. Narrow Physician Mode exception' not in rules: rules += rules_note

history_note='''\n\n### Physician Mode — Vitamin D Journey\n\n- Added one clinician-only tool that generates the explicitly approved local vitamin D clinic pathways.\n- Added dated weekly and monthly phases, repeat-test timing, clinician-selected maintenance text, a local QR code, and a non-identifying patient link.\n- Added an interactive mobile patient page with local completion tracking, Home Screen instructions, native sharing, calendar export, and PNG backup.\n- Kept the tool static and backend-free; the URL contains schedule data only and no patient name, date of birth, record number, or medical history.\n- Preserved all existing dosing locks outside this narrowly approved Physician Mode tool.\n'''
if '### Physician Mode — Vitamin D Journey' not in history: history += history_note

app_path.write_text(app,encoding='utf-8')
css_path.write_text(css,encoding='utf-8')
index_path.write_text(index,encoding='utf-8')
rules_path.write_text(rules,encoding='utf-8')
history_path.write_text(history,encoding='utf-8')
