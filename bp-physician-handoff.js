// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';
const PATIENT_ROUTE='#/patient/blood-pressure';
const LEGACY_ROUTE='#/dr/blood-pressure';
function patientUrl(){return location.origin+location.pathname+location.search+PATIENT_ROUTE}
function removeDrLauncher(){if(location.hash==='#/dr')document.querySelector('[data-bp-launch]')?.remove()}
function decoratePatient(){
  document.body.classList.add('bp-patient-active');
  document.body.classList.remove('physician-mode-active');
  document.querySelector('.bp-head .detail-back')?.remove();
  const head=document.querySelector('.bp-head');
  if(head)head.classList.add('bp-patient-head');
  document.querySelectorAll('.bp-tool a[href]').forEach(link=>link.remove());
}
function clearPatientMode(){if(location.hash!==PATIENT_ROUTE)document.body.classList.remove('bp-patient-active')}
function renderPatientRoute(){
  if(location.hash!==PATIENT_ROUTE)return false;
  const clean=location.pathname+location.search+PATIENT_ROUTE;
  history.replaceState(null,'',location.pathname+location.search+LEGACY_ROUTE);
  window.route();
  history.replaceState(null,'',clean);
  decoratePatient();
  return true;
}
function addPhysicianCard(){
  if(location.hash!=='#/physician')return;
  const grid=document.querySelector('.physician-tool-grid');
  if(!grid||grid.querySelector('[data-bp-physician-card]'))return;
  const card=document.createElement('article');
  card.className='physician-tool-card bp-physician-card';
  card.dataset.bpPhysicianCard='1';
  card.innerHTML='<span aria-hidden="true">BP</span><div><small>PATIENT TOOL</small><h2>Home blood pressure chart</h2><p>Give the patient a standalone 7-day chart with measurement instructions.</p></div><div class="bp-physician-actions"><button type="button" class="btn dr" data-open-bp-patient>Open patient chart</button><button type="button" class="btn ghost" data-copy-bp-patient>Copy patient link</button></div>';
  grid.appendChild(card);
}
const previousRoute=window.route;
window.route=function(){
  if(renderPatientRoute())return;
  clearPatientMode();
  const result=previousRoute.apply(this,arguments);
  requestAnimationFrame(()=>{removeDrLauncher();addPhysicianCard()});
  return result;
};
document.addEventListener('click',async event=>{
  if(event.target.closest('[data-open-bp-patient]')){location.hash=PATIENT_ROUTE;return}
  if(event.target.closest('[data-copy-bp-patient]')){await navigator.clipboard?.writeText(patientUrl());if(typeof window.showToast==='function')window.showToast('Patient link copied')}
});
window.addEventListener('hashchange',()=>setTimeout(()=>{if(!renderPatientRoute()){clearPatientMode();removeDrLauncher();addPhysicianCard()}},0));
if(!renderPatientRoute()){removeDrLauncher();addPhysicianCard()}
})();