// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const FERRITIN_GAIN_PER_MG=0.21;
const FERRITIN_GAIN_LOW=0.15;
const FERRITIN_GAIN_HIGH=0.26;

const PRODUCTS={
  carboxymaltose:{
    label:'Ferric carboxymaltose',concentration:50,unitMg:500,type:'calculated',
    recommendedGap:7,minGap:7,maxGap:null,recommendStep:100,doseStep:100,
    note:'50 mg/mL. Maximum scheduled dose is the lower of 20 mg/kg or 1,000 mg. Additional doses must be at least 7 days apart; the clinician may choose a longer interval.'
  },
  derisomaltose:{
    label:'Ferric derisomaltose',concentration:100,unitMg:1000,type:'calculated',
    recommendedGap:7,minGap:7,maxGap:null,recommendStep:100,doseStep:100,
    note:'100 mg/mL. For 50 kg or more, the preset maximum is 1,000 mg in one infusion; below 50 kg, 20 mg/kg. Additional doses are scheduled at least 7 days apart.'
  },
  ferumoxytol:{
    label:'Ferumoxytol',concentration:30,unitMg:510,type:'ferumoxytol',
    recommendedGap:3,minGap:3,maxGap:8,recommendStep:510,doseStep:510,
    note:'510 mg per administration. When two administrations are prescribed, the second must be 3–8 days after the first.'
  },
  sucrose:{
    label:'Iron sucrose',concentration:20,unitMg:100,type:'calculated',maxDose:200,
    recommendedGap:2,minGap:2,maxGap:null,recommendStep:100,doseStep:50,
    note:'20 mg/mL. This general-adult local preset uses a clinician-confirmed maximum of 200 mg per visit and a minimum 2-day interval; it is not a CKD dosing preset.'
  },
  custom:{
    label:'Custom IV iron formulation',concentration:20,unitMg:100,type:'custom',maxDose:200,
    recommendedGap:7,minGap:1,maxGap:null,recommendStep:100,doseStep:50,
    note:'Enter the local concentration, iron per ampoule or vial, maximum per visit, dose increment, recommended interval, and minimum permitted interval.'
  }
};

function e(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function dt(v){return new Date(String(v)+'T12:00:00')}
function add(v,n){const x=dt(v);x.setDate(x.getDate()+n);return x.toISOString().slice(0,10)}
function nice(v){return dt(v).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'})}
function enc(v){return btoa(unescape(encodeURIComponent(JSON.stringify(v)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function patientUrl(v){return location.origin+location.pathname+location.search+'#/patient/iron-iv/'+enc(v)}
function branch(){return document.querySelector('input[name="iv-product-branch"]:checked')?.value||'ida'}
function productId(){return document.getElementById('iv-product-preset')?.value||'carboxymaltose'}
function product(){return PRODUCTS[productId()]||PRODUCTS.carboxymaltose}
function n(id){return Number(document.getElementById(id)?.value)}
function roundNearest(value,step){if(!Number.isFinite(value)||value<=0)return 0;return Math.max(step,Math.round(value/step)*step)}

function productSettings(){
  const p=product();
  if(p.type!=='custom')return {...p};
  return {
    ...p,
    concentration:n('ivp-concentration'),
    unitMg:n('ivp-vial'),
    maxDose:n('ivp-max'),
    doseStep:n('ivp-step'),
    recommendStep:n('ivp-step'),
    recommendedGap:n('ivp-custom-recommended-gap'),
    minGap:n('ivp-custom-min-gap'),
    maxGap:null
  };
}

function recommendation(){
  const p=productSettings();
  const weight=n('ivp-weight');
  if(branch()==='ida'){
    const hb=n('ivp-hb'),target=n('ivp-target'),stores=n('ivp-stores');
    if(!weight||!hb||!target||target<hb||stores<0)return null;
    const raw=Math.max(0,weight*(target-hb)*2.4+stores);
    return {raw,low:null,high:null,suggested:roundNearest(raw,p.recommendStep||100),weight,basis:`Ganzoni: ${weight} × (${target} − ${hb}) × 2.4 + ${stores}`};
  }
  const current=n('ivp-ferritin'),target=n('ivp-ferritin-goal');
  if(current<0||!target)return null;
  const delta=Math.max(0,target-current);
  const raw=delta/FERRITIN_GAIN_PER_MG;
  const low=delta/FERRITIN_GAIN_HIGH;
  const high=delta/FERRITIN_GAIN_LOW;
  return {raw,low,high,suggested:roundNearest(raw,p.recommendStep||100),weight,ferritin:current,targetFerritin:target,basis:`Ferritin gap ${delta} µg/L ÷ 0.21 µg/L per mg elemental iron`};
}

function maxDoseFor(p,weight){
  if(p.type==='custom'||productId()==='sucrose')return p.maxDose;
  if(productId()==='carboxymaltose')return Math.min(1000,20*weight);
  if(productId()==='derisomaltose')return weight>=50?1000:20*weight;
  if(productId()==='ferumoxytol')return 510;
  return p.maxDose||0;
}

function intervalInput(){return document.getElementById('ivp-clinician-gap')}
function syncInterval(force=false){
  const p=productSettings(),recommended=document.getElementById('ivp-recommended-gap'),input=intervalInput();
  if(!recommended||!input)return;
  recommended.value=Number.isFinite(p.recommendedGap)?String(p.recommendedGap):'';
  input.min=Number.isFinite(p.minGap)?String(p.minGap):'1';
  if(Number.isFinite(p.maxGap))input.max=String(p.maxGap);else input.removeAttribute('max');
  if(force||input.dataset.mode!=='manual'){
    input.value=String(p.recommendedGap||p.minGap||1);
    input.dataset.mode='auto';
  }
}

function selectedInterval(p){
  const gap=n('ivp-clinician-gap');
  if(!gap)return {error:'Enter the clinician interval between visits.'};
  if(gap<p.minGap)return {error:`The minimum interval for ${p.label} is ${p.minGap} day${p.minGap===1?'':'s'}.`};
  if(Number.isFinite(p.maxGap)&&gap>p.maxGap)return {error:`The permitted interval for ${p.label} is ${p.minGap}–${p.maxGap} days.`};
  return {gap};
}

function splitSchedule(total,p,weight,start,gap){
  if(!total||!p.concentration||!p.unitMg||!start)return {error:'Complete the formulation and prescribed-dose fields.'};
  if(productId()==='ferumoxytol'){
    if(total!==510&&total!==1020)return {error:'Ferumoxytol must be prescribed as 510 mg or 1,020 mg in this preset.'};
    const count=total===1020?2:1;
    return {doses:Array.from({length:count},()=>510),offsets:Array.from({length:count},(_,i)=>i*gap),maxDose:510};
  }
  const maxDose=maxDoseFor(p,weight);
  if(!maxDose||maxDose<p.doseStep)return {error:'The confirmed maximum dose is below the scheduling increment.'};
  if(total%p.doseStep!==0)return {error:`Clinician-prescribed iron must be entered in ${p.doseStep} mg increments for this formulation.`};
  const usableMax=Math.floor(maxDose/p.doseStep)*p.doseStep;
  const doses=[];const offsets=[];let left=total;let i=0;
  while(left>0){const dose=Math.min(left,usableMax);doses.push(dose);offsets.push(i*gap);left-=dose;i++}
  return {doses,offsets,maxDose:usableMax};
}

function prescriptionInput(){return document.getElementById('ivp-prescribed')}
function syncSuggested(force=false){
  const input=prescriptionInput(),rec=recommendation();
  if(!input||!rec)return;
  if(force||input.dataset.mode!=='manual'){
    input.value=String(rec.suggested);
    input.dataset.mode='auto';
  }
}

function schedule(){
  const p=productSettings(),rec=recommendation(),start=document.getElementById('ivp-start')?.value,repeat=document.getElementById('ivp-repeat')?.value,clinic=document.getElementById('ivp-clinic')?.value.trim().slice(0,80);
  if(!p||!rec||!start||!repeat)return null;
  const interval=selectedInterval(p);if(interval.error)return interval;
  const prescribed=n('ivp-prescribed');if(!prescribed)return null;
  const split=splitSchedule(prescribed,p,rec.weight,start,interval.gap);if(split.error)return split;
  const infusions=split.doses.map((mg,i)=>({date:add(start,split.offsets[i]),mg,ml:Number((mg/p.concentration).toFixed(2)),vials:Number((mg/p.unitMg).toFixed(2))}));
  return {
    v:1,kind:'iv',branch:branch(),p:p.label,t:prescribed,required:Number(rec.raw.toFixed(1)),
    suggested:rec.suggested,estimateLow:rec.low==null?null:Number(rec.low.toFixed(1)),estimateHigh:rec.high==null?null:Number(rec.high.toFixed(1)),
    amp:p.unitMg,concentration:p.concentration,ampoules:Number((prescribed/p.unitMg).toFixed(2)),
    dp:Math.max(...split.doses),mx:split.maxDose,g:interval.gap,recommendedGap:p.recommendedGap,minGap:p.minGap,maxGap:p.maxGap,
    s:start,r:repeat,i:infusions,c:clinic,summary:rec.basis,goal:branch()==='no-ida'?rec.targetFerritin:null,preset:productId(),productNote:p.note
  };
}

function render(){
  document.body.classList.add('physician-mode-active');document.body.classList.remove('iron-patient-active');setActive('summary');
  const today=new Date().toISOString().slice(0,10),repeat=add(today,56);
  app.innerHTML=`<div class="screen physician-screen"><section class="vitd-builder iron-builder"><a class="detail-back back-control dr" href="#/physician"><span class="back-control-icon">←</span><span>Physician Mode</span></a><header><p class="eyebrow">PHYSICIAN MODE / IV IRON</p><h1>IV iron formulation calculator</h1><p>Select the formulation, review the calculated or research-estimated elemental iron, then confirm the dose and interval used for scheduling.</p></header><form id="iv-product-form"><fieldset class="iv-mode-choice"><legend>Clinical branch</legend><label><input type="radio" name="iv-product-branch" value="ida" checked><span><strong>Iron-deficiency anemia</strong><small>Calculate need using Ganzoni.</small></span></label><label><input type="radio" name="iv-product-branch" value="no-ida"><span><strong>Iron deficiency without anemia</strong><small>Estimate from current and target ferritin, then require clinician prescription.</small></span></label></fieldset><label class="exercise-field">IV iron formulation<select id="iv-product-preset">${Object.entries(PRODUCTS).map(([id,p])=>`<option value="${id}">${e(p.label)}</option>`).join('')}</select></label><section id="ivp-ida"><div class="vitd-form-grid"><label>Weight (kg)<input id="ivp-weight" type="number" min="1" max="400" step="0.1" value="70" required></label><label>Actual Hb (g/dL)<input id="ivp-hb" type="number" min="1" max="25" step="0.1" value="9" required></label><label>Target Hb (g/dL)<input id="ivp-target" type="number" min="1" max="25" step="0.1" value="13" required></label><label>Iron stores (mg)<input id="ivp-stores" type="number" min="0" max="2000" step="50" value="500" required></label></div></section><section id="ivp-noida" hidden><div class="vitd-form-grid"><label>Weight (kg)<input id="ivp-weight-noida" type="number" min="1" max="400" step="0.1" value="70"></label><label>Current ferritin (µg/L)<input id="ivp-ferritin" type="number" min="0" max="5000" value="50"></label><label>Target ferritin (µg/L)<input id="ivp-ferritin-goal" type="number" min="1" max="5000" value="100"></label></div><aside class="vitd-export-note"><strong>Research estimate, not a universal conversion.</strong> The estimate uses an average ferritin increase of 0.21 µg/L per 1 mg elemental iron from healthy-adult ferric-carboxymaltose data. The displayed uncertainty range uses 0.15–0.26 µg/L per mg. The clinician-prescribed amount controls the schedule.</aside></section><section id="ivp-custom" hidden><div class="vitd-form-grid"><label>Concentration (mg/mL)<input id="ivp-concentration" type="number" min="0.1" max="1000" step="0.1" value="20"></label><label>Iron per ampoule/vial (mg)<input id="ivp-vial" type="number" min="1" max="5000" value="100"></label><label>Maximum per visit (mg)<input id="ivp-max" type="number" min="1" max="5000" value="200"></label><label>Dose increment (mg)<input id="ivp-step" type="number" min="1" max="1000" value="50"></label><label>Recommended interval (days)<input id="ivp-custom-recommended-gap" type="number" min="1" max="90" value="7"></label><label>Minimum interval (days)<input id="ivp-custom-min-gap" type="number" min="1" max="90" value="1"></label></div></section><div class="vitd-form-grid"><label>Recommended review amount (mg)<input id="ivp-recommended" readonly></label><label>Clinician-prescribed elemental iron (mg)<input id="ivp-prescribed" type="number" min="0" max="10000" step="10" data-mode="auto" required></label><label>Recommended interval (days)<input id="ivp-recommended-gap" readonly></label><label>Clinician interval between visits (days)<input id="ivp-clinician-gap" type="number" step="1" data-mode="auto" required></label><label>First infusion date<input id="ivp-start" type="date" value="${today}" required></label><label>Repeat CBC / ferritin / TSAT<input id="ivp-repeat" type="date" value="${repeat}" required></label><label class="vitd-clinic-field">Clinic or service (optional)<input id="ivp-clinic" maxlength="80"></label></div><button type="button" class="btn ghost" data-use-iv-recommendation>Use recommended amount and interval</button><div id="ivp-note" class="vitd-export-note"></div><div id="ivp-preview" class="vitd-protocol-preview"></div><fieldset class="vitd-safety"><legend>Required clinician confirmations</legend><label><input type="checkbox" required><span>I confirmed the selected formulation, concentration, presentation, dose limit, infusion requirements, and local formulary.</span></label><label><input type="checkbox" required><span>I reviewed the formulation-specific minimum and maximum interval, hypersensitivity precautions, observation, pregnancy, phosphate risk where relevant, and follow-up laboratories.</span></label><label><input type="checkbox" required><span>I independently approved the clinician-prescribed elemental iron and visit interval. The research estimate is not an autonomous prescription.</span></label></fieldset><button class="btn dr vitd-generate" type="submit">Confirm and generate IV iron schedule</button></form><section id="ivp-export" class="vitd-export" hidden></section></section></div>`;
  syncWeightFields('ida');syncSuggested(true);syncInterval(true);refresh();
}

function syncWeightFields(activeBranch){
  const ida=document.getElementById('ivp-weight'),noida=document.getElementById('ivp-weight-noida');
  if(!ida||!noida)return;
  if(activeBranch==='ida')noida.value=ida.value;else ida.value=noida.value;
}

function refresh(){
  const p=productSettings(),custom=productId()==='custom',rec=recommendation();
  document.getElementById('ivp-custom').hidden=!custom;
  const intervalText=Number.isFinite(p.maxGap)?`${p.minGap}–${p.maxGap} days permitted`:`minimum ${p.minGap} day${p.minGap===1?'':'s'}; longer intervals allowed`;
  document.getElementById('ivp-note').innerHTML=`<strong>${e(p.label)}</strong><p>${e(String(p.concentration||'—'))} mg/mL · ${e(String(p.unitMg||'—'))} mg per ampoule/vial. Recommended interval ${e(String(p.recommendedGap||'—'))} days; ${e(intervalText)}. ${e(p.note)}</p>`;
  if(rec)document.getElementById('ivp-recommended').value=String(rec.suggested);
  const x=schedule(),out=document.getElementById('ivp-preview');if(!out)return;
  if(!rec){out.innerHTML='<strong>Complete the clinical calculation fields.</strong>';return}
  const estimate=branch()==='ida'?`Calculated requirement: ${rec.raw.toFixed(1)} mg. Recommended review amount: ${rec.suggested} mg.`:`Research estimate: ${rec.raw.toFixed(1)} mg (approximate range ${rec.low.toFixed(1)}–${rec.high.toFixed(1)} mg). Recommended review amount: ${rec.suggested} mg.`;
  if(!x){out.innerHTML=`<strong>${estimate}</strong><span>Enter the clinician-prescribed elemental iron and visit interval to build the formulation schedule.</span>`;return}
  if(x.error){out.classList.add('out-of-range');out.innerHTML=`<strong>${e(x.error)}</strong><span>${estimate}</span>`;return}
  out.classList.remove('out-of-range');
  const interval=x.i.length>1?` Clinician interval: ${x.g} days.`:'';
  out.innerHTML=`<strong>${estimate}</strong><span>Clinician prescribed: ${x.t} mg.${interval} ${x.p}: ${x.i.length} visit${x.i.length===1?'':'s'} — ${x.i.map((a,i)=>`Visit ${i+1}: ${a.mg} mg (${a.ml} mL) on ${nice(a.date)}`).join(' · ')}</span>`;
}

function exportPlan(x){
  const target=document.getElementById('ivp-export'),patient=patientUrl(x);target.hidden=false;target.dataset.schedule=enc(x);
  const estimate=x.branch==='ida'?`${x.required.toLocaleString()} mg calculated by Ganzoni`:`${x.required.toLocaleString()} mg research estimate${x.estimateLow!=null?` (${x.estimateLow.toLocaleString()}–${x.estimateHigh.toLocaleString()} mg range)`:''}`;
  target.innerHTML=`<div class="vitd-export-head"><div><p class="eyebrow">PATIENT HANDOFF</p><h2>${e(x.p)} schedule</h2><p>The clinician-prescribed amount and interval—not the research estimate—control this schedule.</p></div><div id="ivp-qr" class="vitd-qr"></div></div><div class="vitd-export-summary"><article><small>Calculation</small><strong>${e(estimate)}</strong><span>Recommended review amount ${x.suggested} mg</span></article><article><small>Clinician prescribed</small><strong>${x.t.toLocaleString()} mg</strong><span>${e(x.p)} · ${x.concentration} mg/mL</span></article><article><small>Appointments</small><strong>${x.i.length}</strong><span>${x.i.length>1?`${x.g}-day interval · `:''}Repeat labs ${nice(x.r)}</span></article></div><div class="iv-appointment-list">${x.i.map((a,i)=>`<article><strong>Infusion ${i+1}</strong><span>${nice(a.date)} · ${a.mg} mg · ${a.ml} mL · ${a.vials} vial equivalent</span></article>`).join('')}</div><label class="vitd-link-label">Patient link<input id="ivp-link" readonly value="${e(patient)}"></label><div class="vitd-export-actions"><button class="btn dr" data-ivp-open>Open patient page</button><button class="btn ghost" data-ivp-copy>Copy link</button></div>`;
  try{const q=qrcode(0,'M');q.addData(patient);q.make();document.getElementById('ivp-qr').innerHTML=q.createSvgTag({cellSize:5,margin:4,scalable:true})}catch(err){document.getElementById('ivp-qr').textContent='Use the patient link.'}
  target.scrollIntoView({behavior:'smooth',block:'start'});
}

window.renderIvIronTool=render;
document.addEventListener('change',ev=>{
  if(ev.target.name==='iv-product-branch'){
    const ida=branch()==='ida';syncWeightFields(ida?'ida':'no-ida');document.getElementById('ivp-ida').hidden=!ida;document.getElementById('ivp-noida').hidden=ida;syncSuggested(true);
  }else if(ev.target.id==='iv-product-preset'){
    syncSuggested(true);syncInterval(true);
  }
  if(ev.target.closest?.('#iv-product-form'))refresh();
});
document.addEventListener('input',ev=>{
  if(!ev.target.closest?.('#iv-product-form'))return;
  if(ev.target.id==='ivp-prescribed')ev.target.dataset.mode='manual';
  if(ev.target.id==='ivp-clinician-gap')ev.target.dataset.mode='manual';
  if(ev.target.id==='ivp-weight')document.getElementById('ivp-weight-noida').value=ev.target.value;
  if(ev.target.id==='ivp-weight-noida')document.getElementById('ivp-weight').value=ev.target.value;
  if(ev.target.id!=='ivp-prescribed')syncSuggested(false);
  if(ev.target.id==='ivp-custom-recommended-gap'||ev.target.id==='ivp-custom-min-gap')syncInterval(false);
  refresh();
});
document.addEventListener('submit',ev=>{if(ev.target.id!=='iv-product-form')return;ev.preventDefault();const x=schedule();if(!x||x.error){alert(x?.error||'Complete the IV iron fields.');return}exportPlan(x)});
document.addEventListener('click',async ev=>{
  if(ev.target.closest('[data-use-iv-recommendation]')){syncSuggested(true);syncInterval(true);refresh();return}
  const encoded=document.getElementById('ivp-export')?.dataset.schedule;
  if(ev.target.closest('[data-ivp-open]')&&encoded){location.hash='#/patient/iron-iv/'+encoded;return}
  if(ev.target.closest('[data-ivp-copy]')){await navigator.clipboard?.writeText(document.getElementById('ivp-link')?.value||'');showToast('Patient link copied')}
});
if(location.hash==='#/physician/iron-iv')render();
})();
