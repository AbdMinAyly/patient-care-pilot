// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';
const LOCAL_MAINT={
  '600-daily':'600 IU once daily',
  '800-daily':'800 IU once daily',
  '1000-daily':'1,000 IU once daily',
  '50000-monthly':'50,000 IU once monthly'
};
function refPlan(level,age,weeklyDose,repeatMonths){
  const rda=age>70?800:600;
  if(level<12)return {label:'Below 12 ng/mL',weekly:8,weeklyDose,daily:800,repeatMonths,text:`${weeklyDose.toLocaleString()} IU once weekly for 8 weeks, then 800 IU once daily. Repeat 25(OH)D in ${repeatMonths} months.`};
  if(level<20)return {label:'12 to <20 ng/mL',weekly:0,weeklyDose:0,daily:1000,repeatMonths,text:`1,000 IU once daily. Repeat 25(OH)D in ${repeatMonths} months.`};
  if(level<=30)return {label:'20–30 ng/mL',weekly:0,weeklyDose:0,daily:800,repeatMonths:0,text:'800 IU once daily.'};
  return {label:'Above 30 ng/mL',weekly:0,weeklyDose:0,daily:rda,repeatMonths:0,text:`No additional screening in this pathway. RDA: ${rda} IU once daily.`};
}
function localPlan(level){
  if(level<20)return {id:'under20',label:'Below 20 ng/mL',weekly:8,monthly:2,wait:1};
  if(level<30)return {id:'20to29',label:'20 to under 30 ng/mL',weekly:4,monthly:1,wait:1};
  return null;
}
function mode(){return document.getElementById('vitd-builder-form-v2')?.dataset.mode||'reference'}
function levelNg(){const value=Number(document.getElementById('vitd-level-v2')?.value),unit=document.getElementById('vitd-unit-v2')?.value;return unit==='nmol'?value/2.5:value}
window.renderVitaminDTool=function(){
  document.body.classList.add('physician-mode-active');document.body.classList.remove('vitd-patient-active');setActive('summary');
  const today=new Date().toISOString().slice(0,10);
  app.innerHTML=`<div class="screen physician-screen"><section class="vitd-builder"><a class="detail-back back-control dr" href="#/physician"><span class="back-control-icon">←</span><span>Physician Mode</span></a><header><p class="eyebrow">PHYSICIAN MODE / VITAMIN D</p><h1>Choose a protocol</h1><p>Select the adult reference pathway or the local clinic protocol. Review every generated instruction before patient handoff.</p></header><div class="vitd-protocol-cards"><button type="button" class="vitd-protocol-card selected" data-v2-protocol="reference"><small>ADULT REFERENCE PATHWAY</small><h2>Risk-factor and level algorithm</h2><p>Branches at &lt;12, 12–&lt;20, 20–30, and &gt;30 ng/mL.</p></button><button type="button" class="vitd-protocol-card" data-v2-protocol="local"><small>LOCAL CLINIC</small><h2>Local clinic protocol</h2><p>Fixed weekly and monthly 50,000 IU phases, followed by repeat testing and clinician-selected maintenance.</p></button></div><form id="vitd-builder-form-v2" data-mode="reference"><section id="vitd-risk-v2"><fieldset class="vitd-safety compact"><legend>Risk factors for vitamin D deficiency</legend><label><input type="radio" name="vitd-risk-v2" value="yes" checked><span>Yes — limited sun exposure, osteoporosis, malabsorption or post-bariatric surgery, or medicine-related accelerated metabolism</span></label><label><input type="radio" name="vitd-risk-v2" value="no"><span>No listed risk factors</span></label></fieldset></section><div class="vitd-form-grid"><label>25-hydroxyvitamin D level<input id="vitd-level-v2" type="number" min="1" max="300" step="0.1" required></label><label>Unit<select id="vitd-unit-v2"><option value="ng">ng/mL</option><option value="nmol">nmol/L</option></select></label><label>Patient age<input id="vitd-age-v2" type="number" min="18" max="120" value="50" required></label><label>First dose date<input id="vitd-start-v2" type="date" value="${today}" required></label><label id="ref-weekly-v2">Weekly dose when below 12<select id="vitd-ref-weekly-v2"><option value="25000">25,000 IU</option><option value="50000" selected>50,000 IU</option></select></label><label id="ref-repeat-v2">Repeat interval<select id="vitd-ref-repeat-v2"><option value="3" selected>3 months</option><option value="4">4 months</option></select></label><label class="vitd-clinic-field">Clinic label (optional)<input id="vitd-clinic-v2" maxlength="80"></label></div><section id="local-fields-v2" hidden><div class="vitd-form-grid"><label>Maintenance after repeat-result review<select id="local-maint-v2"><option value="600-daily">600 IU daily</option><option value="800-daily" selected>800 IU daily</option><option value="1000-daily">1,000 IU daily</option><option value="50000-monthly">50,000 IU monthly</option></select></label></div><aside class="vitd-export-note"><strong>Local protocol defaults are fixed.</strong> Below 20 ng/mL uses 8 weekly doses and 2 monthly doses. From 20 to under 30 ng/mL uses 4 weekly doses and 1 monthly dose.</aside></section><div id="preview-v2" class="vitd-protocol-preview"><strong>Enter the vitamin D level.</strong><span>The selected pathway will appear here.</span></div><fieldset class="vitd-safety"><legend>Required clinician confirmations</legend><label><input type="checkbox" required><span>This is an adult patient and the result is 25-hydroxyvitamin D in the selected unit.</span></label><label><input type="checkbox" required><span>I reviewed pregnancy, calcium status, kidney disease or stones, granulomatous disease, malabsorption or bariatric history, and interacting medicines.</span></label><label><input type="checkbox" required><span>I independently reviewed and selected this protocol.</span></label></fieldset><button class="btn dr vitd-generate" type="submit">Confirm and generate patient schedule</button></form><section id="vitd-export" class="vitd-export" hidden></section></section></div>`;
  updatePreview();
};
function updatePreview(){
  const out=document.getElementById('preview-v2');if(!out)return;const ng=levelNg();if(!ng){out.innerHTML='<strong>Enter the vitamin D level.</strong><span>The selected pathway will appear here.</span>';return}
  if(mode()==='reference'){
    const age=Number(document.getElementById('vitd-age-v2').value),risk=document.querySelector('input[name="vitd-risk-v2"]:checked')?.value;
    if(risk==='no'){const rda=age>70?800:600;out.innerHTML=`<strong>No listed risk factors</strong><span>Additional screening is not necessary in the uploaded pathway. RDA: ${rda} IU daily; supplement only when dietary intake is insufficient.</span>`;return}
    const p=refPlan(ng,age,Number(document.getElementById('vitd-ref-weekly-v2').value),Number(document.getElementById('vitd-ref-repeat-v2').value));out.innerHTML=`<strong>${p.label}</strong><span>${p.text}</span>`;return;
  }
  const p=localPlan(ng);if(!p){out.innerHTML='<strong>Outside the local pathways.</strong><span>The local clinic protocol applies only below 30 ng/mL.</span>';return}
  const testing=p.id==='under20'?'wait 1 month, then repeat the level':'stop after the monthly dose, then repeat the level after the course';
  out.innerHTML=`<strong>${p.label} local pathway</strong><span>50,000 IU once weekly for ${p.weekly} weeks, then 50,000 IU once monthly for ${p.monthly} month${p.monthly===1?'':'s'}, ${testing}. Maintenance after repeat-result review: ${LOCAL_MAINT[document.getElementById('local-maint-v2').value]}.</span>`;
}
function build(){
  const ng=levelNg(),start=document.getElementById('vitd-start-v2').value,clinic=document.getElementById('vitd-clinic-v2').value.trim().slice(0,80),age=Number(document.getElementById('vitd-age-v2').value);
  if(mode()==='reference'){
    const risk=document.querySelector('input[name="vitd-risk-v2"]:checked')?.value,plan=risk==='no'?{label:'No listed risk factors',weekly:0,weeklyDose:0,daily:age>70?800:600,repeatMonths:0,text:`RDA ${age>70?800:600} IU daily; supplement only when diet is insufficient.`}:refPlan(ng,age,Number(document.getElementById('vitd-ref-weekly-v2').value),Number(document.getElementById('vitd-ref-repeat-v2').value));
    return {v:2,kind:'reference',pl:plan.label,s:start,w:plan.weekly,wd:plan.weeklyDose,d:plan.daily,r:plan.repeatMonths?vitdIso(vitdAddMonths(start,plan.repeatMonths)):'',summary:plan.text,c:clinic};
  }
  const p=localPlan(ng);if(!p)return null;
  const weekly=Array.from({length:p.weekly},(_,i)=>vitdIso(vitdAddDays(start,i*7)));
  const firstMonthly=vitdAddMonths(weekly.at(-1),1);
  const monthly=Array.from({length:p.monthly},(_,i)=>vitdIso(vitdAddMonths(firstMonthly,i)));
  const repeat=vitdIso(vitdAddMonths(monthly.at(-1),p.wait));
  return {v:2,kind:'local',p:p.id,s:start,w:p.weekly,m:p.monthly,r:repeat,mt:document.getElementById('local-maint-v2').value,c:clinic};
}
function dates(s){if(s.kind==='reference')return {weekly:Array.from({length:s.w||0},(_,i)=>vitdIso(vitdAddDays(s.s,i*7))),monthly:[],repeat:s.r};return vitdExpandSchedule(s)}
window.renderVitdExport=function(s){
  const target=document.getElementById('vitd-export'),d=dates(s),url=vitdPatientUrl(s);target.hidden=false;target.dataset.schedule=vitdEncode(s);
  const body=s.kind==='reference'?`<article><small>Reference branch</small><strong>${esc(s.pl)}</strong><span>${esc(s.summary)}</span></article><article><small>Daily plan</small><strong>${Number(s.d).toLocaleString()} IU daily</strong><span>${s.r?'Repeat '+vitdPretty(s.r):'No repeat date generated'}</span></article>`:`<article><small>Weekly phase</small><strong>${s.w} doses</strong></article><article><small>Monthly phase</small><strong>${s.m} dose${s.m===1?'':'s'}</strong></article><article><small>Repeat level</small><strong>${vitdPretty(s.r)}</strong><span>Maintenance after review: ${esc(LOCAL_MAINT[s.mt])}</span></article>`;
  target.innerHTML=`<div class="vitd-export-head"><div><p class="eyebrow">PATIENT HANDOFF</p><h2>Vitamin D Journey is ready</h2><p>Review every dose and date before handoff.</p></div><div id="vitd-qr" class="vitd-qr"></div></div><div class="vitd-export-summary">${body}</div><label class="vitd-link-label">Patient link<input id="vitd-patient-link" readonly value="${esc(url)}"></label><div class="vitd-export-actions"><button class="btn dr" data-vitd-open-patient="1">Open patient page</button><button class="btn ghost" data-vitd-copy-link="1">Copy link</button></div>`;
  try{const qr=qrcode(0,'M');qr.addData(url);qr.make();document.getElementById('vitd-qr').innerHTML=qr.createSvgTag({cellSize:5,margin:4,scalable:true})}catch(e){document.getElementById('vitd-qr').textContent='Use the patient link.'}
};
window.renderVitaminDPatient=function(code){
  const s=vitdDecode(code);if(!s||s.v!==2){app.innerHTML='<div class="screen"><section class="detail"><h1>This schedule link is invalid</h1></section></div>';return}
  document.body.classList.add('vitd-patient-active');document.body.classList.remove('physician-mode-active');const d=dates(s),done=new Set(vitdLoadProgress(code));
  app.innerHTML=`<div class="vitd-patient-page"><header class="vitd-journey-hero"><div class="vitd-sun"><span>☀</span></div><p class="eyebrow">YOUR VITAMIN D JOURNEY</p><h1>${s.kind==='reference'?'Adult reference pathway':'Local clinic protocol'}</h1><p>${s.c?esc(s.c)+' prepared this schedule. ':''}Follow only the dose and frequency shown.</p></header><main class="vitd-journey-main">${d.weekly.length?`<section class="vitd-phase"><div class="vitd-phase-head"><span>1</span><div><small>WEEKLY PHASE</small><h2>${Number(s.wd||50000).toLocaleString()} IU once weekly</h2></div></div><div class="vitd-dose-list">${d.weekly.map((x,i)=>`<label class="vitd-dose-card ${done.has('w'+i)?'done':''}"><input type="checkbox" data-vitd-dose="w${i}" ${done.has('w'+i)?'checked':''}><span class="vitd-dose-check">${done.has('w'+i)?'✓':''}</span><span><small>Weekly dose ${i+1}</small><strong>${vitdPretty(x)}</strong><em>${Number(s.wd||50000).toLocaleString()} IU · once weekly</em></span></label>`).join('')}</div></section>`:''}${s.kind==='local'&&d.monthly.length?`<section class="vitd-phase monthly"><div class="vitd-phase-head"><span>2</span><div><small>MONTHLY PHASE</small><h2>50,000 IU once monthly</h2></div></div><div class="vitd-dose-list">${d.monthly.map((x,i)=>`<div class="vitd-dose-card"><span class="vitd-dose-check">${i+1}</span><span><small>Monthly dose ${i+1}</small><strong>${vitdPretty(x)}</strong><em>50,000 IU · once monthly</em></span></div>`).join('')}</div></section>`:''}${s.r?`<section class="vitd-repeat"><span>🧪</span><div><small>REPEAT VITAMIN D LEVEL</small><h2>${vitdPretty(s.r)}</h2></div></section>`:''}<section class="vitd-maintenance"><small>${s.kind==='local'?'MAINTENANCE AFTER REPEAT-RESULT REVIEW':'DAILY PLAN'}</small><h2>${s.kind==='local'?esc(LOCAL_MAINT[s.mt]):Number(s.d).toLocaleString()+' IU once daily'}</h2><p>${s.kind==='reference'?esc(s.summary):'Start only after the repeat result is reviewed and the clinician confirms the plan.'}</p></section><section class="vitd-save-card"><h2>Save this journey</h2><div class="vitd-save-actions"><button class="btn dr" data-vitd-share-patient="1">Share or save link</button><button class="btn ghost" data-vitd-copy-patient="1">Copy link</button></div><details><summary>Add to your Home Screen</summary><div class="vitd-home-help"><p><strong>iPhone:</strong> Safari → Share → Add to Home Screen.</p><p><strong>Android:</strong> Chrome menu → Add to Home screen.</p></div></details></section></main></div>`;
  app.dataset.vitdCode=code;app.dataset.vitdSchedule=vitdEncode(s)
};
document.addEventListener('click',e=>{
  const card=e.target.closest('[data-v2-protocol]');if(!card)return;
  const form=document.getElementById('vitd-builder-form-v2');form.dataset.mode=card.dataset.v2Protocol;
  document.querySelectorAll('[data-v2-protocol]').forEach(x=>x.classList.toggle('selected',x===card));
  const ref=form.dataset.mode==='reference';document.getElementById('vitd-risk-v2').hidden=!ref;document.getElementById('ref-weekly-v2').hidden=!ref;document.getElementById('ref-repeat-v2').hidden=!ref;document.getElementById('local-fields-v2').hidden=ref;updatePreview();
});
for(const eventName of ['input','change'])document.addEventListener(eventName,e=>{if(e.target.closest('#vitd-builder-form-v2'))updatePreview()});
document.addEventListener('submit',e=>{if(e.target.id!=='vitd-builder-form-v2')return;e.preventDefault();const s=build();if(!s){alert('This level is outside the local clinic pathways. Choose the reference pathway or a custom plan.');return}renderVitdExport(s)});
if(location.hash==='#/physician/vitamin-d')route();
})();