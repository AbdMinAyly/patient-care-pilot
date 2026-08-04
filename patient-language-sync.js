// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const LANGUAGE_KEY='pc_patient_language';
const BUNDLE_ROUTE='#/patient/bundle/';
const PHYSICIAN_ROUTE='#/physician';
const PHYSICIAN_TOOL_NAMES={D:'Vitamin D',Fe:'Iron tablets',IV:'IV iron',BP:'BP readings'};
let observer=null;
let refreshTimer=0;

function eventElement(target){
  if(target instanceof Element)return target;
  return target&&target.parentElement instanceof Element?target.parentElement:null;
}
function isBundleRoute(){return location.hash.startsWith(BUNDLE_ROUTE)}
function patientLanguage(){return localStorage.getItem(LANGUAGE_KEY)==='ar'?'ar':'en'}
function togglePatientLanguage(){localStorage.setItem(LANGUAGE_KEY,patientLanguage()==='ar'?'en':'ar')}

function normalizePhysicianBundleLabels(){
  if(location.hash!==PHYSICIAN_ROUTE)return;
  const items=[...document.querySelectorAll('#patient-bundle-builder .patient-bundle-item')];
  if(!items.length)return;
  const totals={};
  for(const item of items){
    const key=item.children[0]?.textContent?.trim()||'';
    if(PHYSICIAN_TOOL_NAMES[key])totals[key]=(totals[key]||0)+1;
  }
  const seen={};
  for(const item of items){
    const key=item.children[0]?.textContent?.trim()||'',label=item.querySelector('strong');
    if(!label||!PHYSICIAN_TOOL_NAMES[key])continue;
    seen[key]=(seen[key]||0)+1;
    const english=PHYSICIAN_TOOL_NAMES[key]+(totals[key]>1?` ${seen[key]}`:'');
    if(label.textContent!==english)label.textContent=english;
  }
}

function syncBundleNavigationDirection(){
  const nav=document.getElementById('patient-bundle-nav');
  if(!nav)return;
  const arabic=patientLanguage()==='ar';
  nav.dir=arabic?'rtl':'ltr';
  nav.setAttribute('aria-label',arabic?'أدوات المريض':'Patient tools');
}

function rerenderActiveBundle(){
  refreshTimer=0;
  if(!isBundleRoute())return;

  /*
   * The active child route is encoded inside the bundle and is not visible in
   * location.hash. Trigger the active bundle tab itself, which is the same
   * reliable path used when the patient manually switches tools.
   */
  const active=document.querySelector('#patient-bundle-nav [aria-current="page"],#patient-bundle-nav .active');
  if(active instanceof HTMLElement){active.click();return}
  if(typeof window.route==='function')window.route();
}
function scheduleBundleLanguageRefresh(){
  if(refreshTimer)window.clearTimeout(refreshTimer);
  refreshTimer=window.setTimeout(rerenderActiveBundle,0);
}
function syncVisibleUi(){
  normalizePhysicianBundleLabels();
  syncBundleNavigationDirection();
}

/*
 * Handle bundle language changes before standalone patient renderers try to
 * decode the bundle hash. Then rerender the currently active child tool.
 */
document.addEventListener('click',event=>{
  if(!isBundleRoute())return;
  const target=eventElement(event.target);
  if(!target?.closest('[data-patient-language-toggle],[data-bpc-language]'))return;
  event.preventDefault();
  event.stopImmediatePropagation();
  togglePatientLanguage();
  scheduleBundleLanguageRefresh();
},true);

window.addEventListener('hashchange',()=>window.setTimeout(syncVisibleUi,0));
function start(){
  const root=document.getElementById('app');
  if(root&&!observer){
    observer=new MutationObserver(()=>requestAnimationFrame(syncVisibleUi));
    observer.observe(root,{childList:true,subtree:true});
  }
  syncVisibleUi();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();