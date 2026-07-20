// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';
function escIron(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function d(v){return new Date(String(v)+'T12:00:00')}
function iso(v){return v.toISOString().slice(0,10)}
function addDays(v,n){const x=typeof v==='string'?d(v):new Date(v);x.setDate(x.getDate()+n);return x}
function pretty(v){return d(v).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'})}
function encode(v){return btoa(unescape(encodeURIComponent(JSON.stringify(v)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function patientUrl(data){return location.origin+location.pathname+location.search+'#/patient/iron-iv/'+encode(data)}
function mode(){return document.querySelector('input[name="iv-calc-mode"]:checked')?.value||'ida'}
function render(){
  document.body.classList.add('physician-mode-active');document.body.classList.remove('iron-patient-active');setActive('summary');
  const today=new Date().toISOString().slice(0,10),repeat=iso(addDays(today,56));
  app.innerHTML=`<div class="screen physician-screen"><section class="vitd-builder iron-builder"><a class="detail-back back-control dr" href="#/physician"><span class="back-control-icon">←</span><span>Physician Mode</span></a><header><p class="eyebrow">PHYSICIAN MODE / IV IRON</p><h1>IV iron calculator & scheduler</h1><p>Choose whether iron-deficiency anemia is present. The app calculates the iron requirement only for the IDA branch and always requires product-specific clinician confirmation.</p></header><form id="iv-iron-smart-form"><fieldset class="iv-mode-choice"><legend>Clinical branch</legend><label><input type="radio" name="iv-calc-mode" value="ida" checked><span><strong>Iron-deficiency anemia</strong><small>Use the Ganzoni calculation.</small></span></label><label><input type="radio" name="iv-calc-mode" value="no-ida"><span><strong>Iron deficiency without anemia</strong><small>Track ferritin goal 100; clinician enters prescribed iron.</small></span></label></fieldset><section id="iv-ida-fields"><div class="vitd-form-grid"><label>Weight (kg)<input id="iv-weight-smart" type="number" min="1" max="400" step="0.1" value="70" required></label><label>Actual hemoglobin (g/dL)<input id="iv-hb-smart" type="number" min="1" max="25" step="0.1" value="9" required></label><label>Target hemoglobin (g/dL)<input id="iv-target-hb-smart" type="number" min="1" max="25" step="0.1" value="13" required></label><label>Iron-store allowance (mg)<input id="iv-stores-smart" type="number" min="0" max="2000" step="50" value="500" required></label></div></section><section id="iv-no-ida-fields" hidden><div class="vitd-form-grid"><label>Current ferritin (µg/L)<input id="iv-ferritin-smart" type="number" min="0" max="5000" step="1" value="20"></label><label>Ferritin goal (µg/L)<input id="iv-ferritin-goal-smart" type="number" min="1" max="5000" step="1" value="100" readonly></label><label>Clinician-prescribed total iron (mg)<input id="iv-prescribed-smart" type="number" min="1" max="10000" step="1" value="1000"></label></div><aside class="vitd-export-note"><strong>No ferritin-to-milligram conversion is used.</strong> Ferritin is a monitoring target only. The clinician must independently prescribe the total elemental iron.</aside></section><div class="vitd-form-grid"><label>IV formulation<input id="iv-product-smart" value="Iron sucrose" maxlength="80" required></label><label>Elemental iron per ampoule/vial (mg)<input id="iv-ampoule-smart" type="number" min="1" max="5000" step="1" value="100" required></label><label>Maximum per infusion (mg)<input id="iv-max-smart" type="number" min="1" max="5000" step="1" value="200" required></label><label>Days between infusions<input id="iv-gap-smart" type="number" min="1" max="90" step="1" value="2" required></label><label>First infusion date<input id="iv-start-smart" type="date" value="${today}" required></label><label>Repeat CBC / ferritin / TSAT date<input id="iv-repeat-smart" type="date" value="${repeat}" required></label><label class="vitd-clinic-field">Clinic or infusion service (optional)<input id="iv-clinic-smart" maxlength="80"></label></div><div id="iv-smart-preview" class="vitd-protocol-preview"></div><fieldset class="vitd-safety"><legend>Required clinician confirmations</legend><label><input type="checkbox" required><span>I confirmed the exact IV product, elemental iron per ampoule or vial, maximum administration dose, dilution, infusion rate, and observation requirements.</span></label><label><input type="checkbox" required><span>I reviewed hypersensitivity risk, prior reactions, pregnancy status, infection considerations, laboratory data, and institutional emergency procedures.</span></label><label><input type="checkbox" required><span>I independently selected the target hemoglobin, iron-store allowance or prescribed total iron, and follow-up plan.</span></label></fieldset><button class="btn dr vitd-generate" type="submit">Confirm and generate IV iron schedule</button></form><section id="iv-smart-export" class="vitd-export" hidden></section></section></div>`;
  update();
}
function calc(){
  const branch=mode(),product=document.getElementById('iv-product-smart')?.value.trim(),amp=Number(document.getElementById('iv-ampoule-smart')?.value),max=Number(document.getElementById('iv-max-smart')?.value),gap=Number(document.getElementById('iv-gap-smart')?.value),start=document.getElementById('iv-start-smart')?.value,repeat=document.getElementById('iv-repeat-smart')?.value,clinic=document.getElementById('iv-clinic-smart')?.value.trim().slice(0,80);
  if(!product||!amp||!max||!gap||!start||!repeat)return null;
  let required=0,summary='',ferritin=null,goal=null;
  if(branch==='ida'){
    const weight=Number(document.getElementById('iv-weight-smart')?.value),hb=Number(document.getElementById('iv-hb-smart')?.value),target=Number(document.getElementById('iv-target-hb-smart')?.value),stores=Number(document.getElementById('iv-stores-smart')?.value);
    if(!weight||!hb||!target||target<hb||stores<0)return null;
    required=Math.max(0,weight*(target-hb)*2.4+stores);
    summary=`Ganzoni: ${weight} × (${target} − ${hb}) × 2.4 + ${stores}`;
  }else{
    ferritin=Number(document.getElementById('iv-ferritin-smart')?.value);goal=100;required=Number(document.getElementById('iv-prescribed-smart')?.value);
    if(required<=0||ferritin<0)return null;
    summary=`Ferritin ${ferritin} µg/L; monitoring goal ${goal} µg/L; total iron independently prescribed by clinician.`;
  }
  const ampoules=Math.ceil(required/amp),planned=ampoules*amp,perInfusion=Math.floor(max/amp)*amp;
  if(perInfusion<amp)return {error:'The confirmed maximum per infusion is lower than one ampoule or vial.'};
  const count=Math.ceil(planned/perInfusion),infusions=[];let remaining=planned;
  for(let i=0;i<count;i++){const mg=Math.min(perInfusion,remaining);infusions.push({date:iso(addDays(start,i*gap)),mg,ampoules:mg/amp});remaining-=mg}
  return {v:1,kind:'iv',branch,p:product,t:planned,required:Number(required.toFixed(1)),amp,ampoules,dp:perInfusion,mx:max,g:gap,s:start,r:repeat,i:infusions,c:clinic,summary,ferritin,goal};
}
function update(){
  const out=document.getElementById('iv-smart-preview');if(!out)return;const x=calc();
  if(!x){out.innerHTML='<strong>Complete the calculation and product fields.</strong>';return}
  if(x.error){out.classList.add('out-of-range');out.innerHTML=`<strong>${escIron(x.error)}</strong>`;return}
  out.classList.remove('out-of-range');out.innerHTML=`<strong>${x.required.toLocaleString()} mg calculated/prescribed iron</strong><span>${x.ampoules} ampoule${x.ampoules===1?'':'s'} or vial${x.ampoules===1?'':'s'} (${x.amp} mg each), ${x.t.toLocaleString()} mg planned after rounding, over ${x.i.length} infusion${x.i.length===1?'':'s'}. ${escIron(x.summary)}</span>`;
}
function exportPlan(x){
  const target=document.getElementById('iv-smart-export'),url=patientUrl(x);target.hidden=false;target.dataset.schedule=encode(x);
  target.innerHTML=`<div class="vitd-export-head"><div><p class="eyebrow">PATIENT HANDOFF</p><h2>IV iron schedule is ready</h2><p>Review the product, ampoule strength, calculated requirement, rounded total, and every appointment.</p></div><div id="iv-smart-qr" class="vitd-qr"></div></div><div class="vitd-export-summary"><article><small>Branch</small><strong>${x.branch==='ida'?'Iron-deficiency anemia':'Iron deficiency without anemia'}</strong><span>${escIron(x.summary)}</span></article><article><small>Iron requirement</small><strong>${x.required.toLocaleString()} mg</strong><span>${x.ampoules} ampoules/vials · ${x.t.toLocaleString()} mg planned</span></article><article><small>Infusions</small><strong>${x.i.length}</strong><span>Repeat labs ${pretty(x.r)}</span></article></div><div class="iv-appointment-list">${x.i.map((a,i)=>`<article><strong>Infusion ${i+1}</strong><span>${pretty(a.date)} · ${a.mg} mg · ${a.ampoules} ampoule${a.ampoules===1?'':'s'}</span></article>`).join('')}</div><label class="vitd-link-label">Patient link<input id="iv-smart-link" readonly value="${escIron(url)}"></label><div class="vitd-export-actions"><button class="btn dr" data-open-iv-smart>Open patient page</button><button class="btn ghost" data-copy-iv-smart>Copy link</button></div>`;
  try{const qr=qrcode(0,'M');qr.addData(url);qr.make();document.getElementById('iv-smart-qr').innerHTML=qr.createSvgTag({cellSize:5,margin:4,scalable:true})}catch(e){document.getElementById('iv-smart-qr').textContent='Use the patient link.'}
  target.scrollIntoView({behavior:'smooth',block:'start'});
}
window.renderIvIronTool=render;
document.addEventListener('change',e=>{if(e.target.name==='iv-calc-mode'){const ida=mode()==='ida';document.getElementById('iv-ida-fields').hidden=!ida;document.getElementById('iv-no-ida-fields').hidden=ida;update();return}if(e.target.closest?.('#iv-iron-smart-form'))update()});
document.addEventListener('input',e=>{if(e.target.closest?.('#iv-iron-smart-form'))update()});
document.addEventListener('submit',e=>{if(e.target.id!=='iv-iron-smart-form')return;e.preventDefault();const x=calc();if(!x||x.error){alert(x?.error||'Complete the IV iron calculation fields.');return}exportPlan(x)});
document.addEventListener('click',async e=>{const encoded=document.getElementById('iv-smart-export')?.dataset.schedule;if(e.target.closest('[data-open-iv-smart]')&&encoded){location.hash='#/patient/iron-iv/'+encoded;return}if(e.target.closest('[data-copy-iv-smart]')){await navigator.clipboard?.writeText(document.getElementById('iv-smart-link')?.value||'');showToast('Patient link copied')}});
if(location.hash==='#/physician/iron-iv')render();
})();
