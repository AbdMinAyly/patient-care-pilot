// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';
const PRODUCTS={
  ferric_carboxymaltose:{label:'Ferric carboxymaltose',strength:'50 mg/mL',vial:500,type:'calculated',gap:7,note:'Maximum single dose is the lower of 20 mg/kg or 1,000 mg. Additional doses are scheduled at least 7 days apart.'},
  ferric_derisomaltose:{label:'Ferric derisomaltose',strength:'100 mg/mL',vial:1000,type:'calculated',gap:7,note:'Maximum single dose is 20 mg/kg. Larger requirements are split into doses at least 7 days apart.'},
  ferumoxytol:{label:'Ferumoxytol',strength:'510 mg/17 mL vial',vial:510,type:'fixed',doses:[510,510],offsets:[0,3],note:'Two 510 mg infusions. The second dose is scheduled 3 days later; the labeled interval is 3–8 days.'},
  iron_sucrose:{label:'Iron sucrose',strength:'20 mg/mL; common vial contains 100 mg/5 mL',vial:100,type:'local',gap:2,note:'No CKD preset is used. Confirm the local non-CKD dose, maximum per infusion, and interval before generating.'},
  custom:{label:'Custom IV iron formulation',strength:'Clinician confirmed',vial:100,type:'custom',gap:7,note:'Enter the institutional vial strength, maximum administration dose, and interval.'}
};
function e(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function dt(v){return new Date(String(v)+'T12:00:00')}
function add(v,n){const x=dt(v);x.setDate(x.getDate()+n);return x.toISOString().slice(0,10)}
function nice(v){return dt(v).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'})}
function enc(v){return btoa(unescape(encodeURIComponent(JSON.stringify(v)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function url(v){return location.origin+location.pathname+location.search+'#/patient/iron-iv/'+enc(v)}
function branch(){return document.querySelector('input[name="iv-product-branch"]:checked')?.value||'ida'}
function productId(){return document.getElementById('iv-product-preset')?.value||'ferric_carboxymaltose'}
function product(){return PRODUCTS[productId()]||PRODUCTS.ferric_carboxymaltose}
function requiredIron(){
  const weight=Number(document.getElementById('ivp-weight')?.value);
  if(!weight)return null;
  if(branch()==='ida'){
    const hb=Number(document.getElementById('ivp-hb')?.value),target=Number(document.getElementById('ivp-target')?.value),stores=Number(document.getElementById('ivp-stores')?.value);
    if(!hb||!target||target<hb||stores<0)return null;
    return {mg:Math.max(0,weight*(target-hb)*2.4+stores),weight,summary:`Ganzoni: ${weight} × (${target} − ${hb}) × 2.4 + ${stores}`};
  }
  const ferritin=Number(document.getElementById('ivp-ferritin')?.value),mg=Number(document.getElementById('ivp-prescribed')?.value);
  if(ferritin<0||!mg)return null;
  return {mg,weight,ferritin,summary:`Ferritin ${ferritin} µg/L; monitoring goal 100 µg/L; total iron independently prescribed by clinician.`};
}
function schedule(){
  const p=product(),need=requiredIron(),start=document.getElementById('ivp-start')?.value,repeat=document.getElementById('ivp-repeat')?.value,clinic=document.getElementById('ivp-clinic')?.value.trim().slice(0,80);
  if(!need||!start||!repeat)return null;
  let doses=[],offsets=[],vial=p.vial,max=0;
  if(p.type==='fixed'){
    doses=[...p.doses];offsets=[...p.offsets];
  }else{
    const local=p.type==='local'||p.type==='custom';
    vial=local?Number(document.getElementById('ivp-vial')?.value):p.vial;
    if(!vial)return null;
    if(local)max=Number(document.getElementById('ivp-max')?.value);
    else if(productId()==='ferric_carboxymaltose')max=Math.min(1000,20*need.weight);
    else max=20*need.weight;
    if(!max)return null;
    const gap=local?Number(document.getElementById('ivp-gap')?.value):p.gap;
    if(!gap)return null;
    const increment=local?vial:100;
    const rounded=Math.ceil(need.mg/increment)*increment;
    let left=rounded,i=0;
    while(left>0){
      const dose=Math.min(left,Math.floor(max/increment)*increment);
      if(dose<=0)return {error:'The confirmed maximum is lower than one vial or scheduling increment.'};
      doses.push(Number(dose.toFixed(2)));offsets.push(i*gap);left=Number((left-dose).toFixed(2));i++;
    }
  }
  const infusions=doses.map((mg,i)=>({date:add(start,offsets[i]),mg,vials:Number((mg/vial).toFixed(2))}));
  return {v:1,kind:'iv',branch:branch(),p:p.label,t:doses.reduce((a,b)=>a+b,0),required:Number(need.mg.toFixed(1)),amp:vial,ampoules:Math.ceil(doses.reduce((a,b)=>a+b,0)/vial),dp:Math.max(...doses),mx:max||Math.max(...doses),g:p.gap||0,s:start,r:repeat,i:infusions,c:clinic,summary:need.summary,goal:branch()==='no-ida'?100:null,preset:productId(),productNote:p.note};
}
function render(){
  document.body.classList.add('physician-mode-active');document.body.classList.remove('iron-patient-active');setActive('summary');
  const today=new Date().toISOString().slice(0,10),repeat=add(today,56);
  app.innerHTML=`<div class="screen physician-screen"><section class="vitd-builder iron-builder"><a class="detail-back back-control dr" href="#/physician"><span class="back-control-icon">←</span><span>Physician Mode</span></a><header><p class="eyebrow">PHYSICIAN MODE / IV IRON</p><h1>IV iron formulation calculator</h1><p>Select the formulation. Its formulation-specific limits and scheduling pattern are applied automatically where an adult non-CKD preset is available.</p></header><form id="iv-product-form"><fieldset class="iv-mode-choice"><legend>Clinical branch</legend><label><input type="radio" name="iv-product-branch" value="ida" checked><span><strong>Iron-deficiency anemia</strong><small>Calculate need using Ganzoni.</small></span></label><label><input type="radio" name="iv-product-branch" value="no-ida"><span><strong>Iron deficiency without anemia</strong><small>Ferritin goal 100; clinician enters total iron.</small></span></label></fieldset><label class="exercise-field">IV iron formulation<select id="iv-product-preset">${Object.entries(PRODUCTS).map(([id,p])=>`<option value="${id}">${e(p.label)}</option>`).join('')}</select></label><div class="vitd-form-grid"><label>Weight (kg)<input id="ivp-weight" type="number" min="1" max="400" step="0.1" value="70" required></label></div><section id="ivp-ida"><div class="vitd-form-grid"><label>Actual Hb (g/dL)<input id="ivp-hb" type="number" min="1" max="25" step="0.1" value="9" required></label><label>Target Hb (g/dL)<input id="ivp-target" type="number" min="1" max="25" step="0.1" value="13" required></label><label>Iron stores (mg)<input id="ivp-stores" type="number" min="0" max="2000" step="50" value="500" required></label></div></section><section id="ivp-noida" hidden><div class="vitd-form-grid"><label>Current ferritin (µg/L)<input id="ivp-ferritin" type="number" min="0" max="5000" value="20"></label><label>Ferritin monitoring goal<input value="100 µg/L" readonly></label><label>Clinician-prescribed total iron (mg)<input id="ivp-prescribed" type="number" min="1" max="10000" value="1000"></label></div><aside class="vitd-export-note"><strong>No ferritin-to-milligram conversion.</strong> Ferritin 100 is a monitoring goal only.</aside></section><section id="ivp-local" hidden><div class="vitd-form-grid"><label>Iron per vial (mg)<input id="ivp-vial" type="number" min="1" max="5000" value="100"></label><label>Maximum per infusion (mg)<input id="ivp-max" type="number" min="1" max="5000" value="200"></label><label>Days between infusions<input id="ivp-gap" type="number" min="1" max="90" value="2"></label></div></section><div class="vitd-form-grid"><label>First infusion date<input id="ivp-start" type="date" value="${today}" required></label><label>Repeat CBC / ferritin / TSAT<input id="ivp-repeat" type="date" value="${repeat}" required></label><label class="vitd-clinic-field">Clinic or service (optional)<input id="ivp-clinic" maxlength="80"></label></div><div id="ivp-note" class="vitd-export-note"></div><div id="ivp-preview" class="vitd-protocol-preview"></div><fieldset class="vitd-safety"><legend>Required clinician confirmations</legend><label><input type="checkbox" required><span>I confirmed that the selected formulation and indication match current local product information and institutional policy.</span></label><label><input type="checkbox" required><span>I reviewed maximum dose, dilution, infusion time, hypersensitivity precautions, observation, pregnancy, phosphate risk where relevant, and follow-up laboratories.</span></label><label><input type="checkbox" required><span>I independently approved this calculated requirement and formulation-specific schedule.</span></label></fieldset><button class="btn dr vitd-generate" type="submit">Confirm and generate IV iron schedule</button></form><section id="ivp-export" class="vitd-export" hidden></section></section></div>`;
  refresh();
}
function refresh(){
  const p=product(),local=p.type==='local'||p.type==='custom';
  document.getElementById('ivp-local').hidden=!local;
  if(local){document.getElementById('ivp-vial').value=p.vial||100;document.getElementById('ivp-gap').value=p.gap||7;}
  document.getElementById('ivp-note').innerHTML=`<strong>${e(p.label)}</strong><p>${e(p.strength)}. ${e(p.note)}</p>`;
  const x=schedule(),out=document.getElementById('ivp-preview');if(!out)return;
  if(!x){out.innerHTML='<strong>Complete the clinical and scheduling fields.</strong>';return}
  if(x.error){out.innerHTML=`<strong>${e(x.error)}</strong>`;return}
  out.innerHTML=`<strong>${x.p}: ${x.i.length} infusion${x.i.length===1?'':'s'}</strong><span>${x.required.toLocaleString()} mg calculated/prescribed; ${x.t.toLocaleString()} mg scheduled. ${x.i.map((a,i)=>`Dose ${i+1}: ${a.mg} mg on ${nice(a.date)}`).join(' · ')}</span>`;
}
function exportPlan(x){
  const target=document.getElementById('ivp-export'),patient=url(x);target.hidden=false;target.dataset.schedule=enc(x);
  target.innerHTML=`<div class="vitd-export-head"><div><p class="eyebrow">PATIENT HANDOFF</p><h2>${e(x.p)} schedule</h2><p>Review every formulation-specific dose and appointment before handoff.</p></div><div id="ivp-qr" class="vitd-qr"></div></div><div class="vitd-export-summary"><article><small>Formulation</small><strong>${e(x.p)}</strong><span>${e(x.productNote)}</span></article><article><small>Iron need</small><strong>${x.required.toLocaleString()} mg</strong><span>${x.t.toLocaleString()} mg scheduled</span></article><article><small>Appointments</small><strong>${x.i.length}</strong><span>Repeat labs ${nice(x.r)}</span></article></div><div class="iv-appointment-list">${x.i.map((a,i)=>`<article><strong>Infusion ${i+1}</strong><span>${nice(a.date)} · ${a.mg} mg · ${a.vials} vial equivalent</span></article>`).join('')}</div><label class="vitd-link-label">Patient link<input id="ivp-link" readonly value="${e(patient)}"></label><div class="vitd-export-actions"><button class="btn dr" data-ivp-open>Open patient page</button><button class="btn ghost" data-ivp-copy>Copy link</button></div>`;
  try{const q=qrcode(0,'M');q.addData(patient);q.make();document.getElementById('ivp-qr').innerHTML=q.createSvgTag({cellSize:5,margin:4,scalable:true})}catch(err){document.getElementById('ivp-qr').textContent='Use the patient link.'}
}
window.renderIvIronTool=render;
document.addEventListener('change',ev=>{if(ev.target.name==='iv-product-branch'){const ida=branch()==='ida';document.getElementById('ivp-ida').hidden=!ida;document.getElementById('ivp-noida').hidden=ida}if(ev.target.closest?.('#iv-product-form'))refresh()});
document.addEventListener('input',ev=>{if(ev.target.closest?.('#iv-product-form'))refresh()});
document.addEventListener('submit',ev=>{if(ev.target.id!=='iv-product-form')return;ev.preventDefault();const x=schedule();if(!x||x.error){alert(x?.error||'Complete the IV iron fields.');return}exportPlan(x)});
document.addEventListener('click',async ev=>{const encoded=document.getElementById('ivp-export')?.dataset.schedule;if(ev.target.closest('[data-ivp-open]')&&encoded){location.hash='#/patient/iron-iv/'+encoded;return}if(ev.target.closest('[data-ivp-copy]')){await navigator.clipboard?.writeText(document.getElementById('ivp-link')?.value||'');showToast('Patient link copied')}});
if(location.hash==='#/physician/iron-iv')render();
})();