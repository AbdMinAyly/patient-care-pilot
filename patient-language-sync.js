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
  if(typeof window.route==='function')window.route();
  syncBundleNavigationDirection();
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
 * Patient tool renderers update the stored language themselves. On a bundle
 * route they cannot infer the active child from location.hash, so rerender the
 * active bundle immediately after the existing language handler has run.
 */
document.addEventListener('click',event=>{
  const target=eventElement(event.target);
  if(!target?.closest('[data-patient-language-toggle],[data-bpc-language]'))return;
  if(isBundleRoute())scheduleBundleLanguageRefresh();
});

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
