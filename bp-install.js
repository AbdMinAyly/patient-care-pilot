// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const PATIENT_ROUTE='#/patient/blood-pressure';
const LANGUAGE_KEY='pc_patient_language';
let deferredInstallPrompt=null;
let appObserver=null;
let helpReturnFocus=null;
let serviceWorkerStarted=false;

function onPatientRoute(){return location.hash===PATIENT_ROUTE}
function isArabic(){return localStorage.getItem(LANGUAGE_KEY)==='ar'}
function isIOS(){return /iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)}
function isAndroid(){return /android/i.test(navigator.userAgent)}
function isStandalone(){return window.matchMedia?.('(display-mode: standalone)').matches||navigator.standalone===true}
function text(en,ar){return isArabic()?ar:en}

function ensureMeta(name,content){
  let meta=document.head.querySelector(`meta[name="${name}"]`);
  if(!meta){meta=document.createElement('meta');meta.name=name;document.head.appendChild(meta)}
  meta.content=content;
}
function ensureInstallMetadata(){
  if(!onPatientRoute())return;
  if(!document.head.querySelector('link[data-bp-manifest]')){
    const manifest=document.createElement('link');
    manifest.rel='manifest';manifest.href='bp.webmanifest?v=20260722-1';manifest.dataset.bpManifest='1';
    document.head.appendChild(manifest);
  }
  if(!document.head.querySelector('link[data-bp-touch-icon]')){
    const icon=document.createElement('link');
    icon.rel='apple-touch-icon';icon.href='bp-icon-192.svg?v=20260722-1';icon.dataset.bpTouchIcon='1';
    document.head.appendChild(icon);
  }
  ensureMeta('theme-color','#1767c2');
  ensureMeta('apple-mobile-web-app-capable','yes');
  ensureMeta('apple-mobile-web-app-status-bar-style','default');
  ensureMeta('apple-mobile-web-app-title','BP Chart');
}
async function registerServiceWorker(){
  if(serviceWorkerStarted||!onPatientRoute()||!('serviceWorker' in navigator)||location.protocol!=='https:')return;
  serviceWorkerStarted=true;
  try{await navigator.serviceWorker.register('bp-sw.js?v=20260722-1',{scope:'./',updateViaCache:'none'})}
  catch(error){serviceWorkerStarted=false}
}
function removeHelp(){
  document.getElementById('bp-install-help')?.remove();
  document.body.classList.remove('bp-install-help-open');
  helpReturnFocus?.focus?.();
  helpReturnFocus=null;
}
function stepIcon(type){
  if(type==='share')return '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 20V4m0 0-6 6m6-6 6 6M8 15H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2"/></svg>';
  if(type==='plus')return '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="3" width="26" height="26" rx="6"/><path d="M16 9v14M9 16h14"/></svg>';
  return '<span aria-hidden="true">⋮</span>';
}
function showInstallHelp(platform,opener){
  removeHelp();helpReturnFocus=opener||document.activeElement;
  const ios=platform==='ios';
  const title=text('Add this chart to your Home Screen','أضف الجدول إلى الشاشة الرئيسية');
  const first=ios?text('Tap the Share button','اضغط زر المشاركة'):text('Open the browser menu','افتح قائمة المتصفح');
  const second=ios?text('Tap Add to Home Screen','اختر إضافة إلى الشاشة الرئيسية'):text('Tap Install app or Add to Home screen','اختر تثبيت التطبيق أو الإضافة إلى الشاشة الرئيسية');
  const modal=document.createElement('div');modal.id='bp-install-help';modal.className='bp-install-help';
  modal.innerHTML=`<div class="bp-install-help-backdrop" data-close-bp-install></div><section class="bp-install-help-dialog" role="dialog" aria-modal="true" aria-labelledby="bp-install-help-title" dir="${isArabic()?'rtl':'ltr'}"><button type="button" class="bp-install-help-close" data-close-bp-install aria-label="${text('Close','إغلاق')}">×</button><h2 id="bp-install-help-title">${title}</h2><div class="bp-install-steps"><div><b>1</b>${stepIcon(ios?'share':'menu')}<span>${first}</span></div><div><b>2</b>${stepIcon('plus')}<span>${second}</span></div></div><button type="button" class="btn dr" data-close-bp-install>${text('Done','تم')}</button></section>`;
  document.body.appendChild(modal);document.body.classList.add('bp-install-help-open');
  modal.querySelector('.bp-install-help-close')?.focus();
}
function buttonLabel(){return `<span aria-hidden="true">⌂</span>${text('Save to Home Screen','إضافة إلى الشاشة الرئيسية')}`}
function installButton(){
  const button=document.createElement('button');
  button.type='button';button.className='btn dr bp-install-button';button.dataset.bpInstallHome='1';button.innerHTML=buttonLabel();
  return button;
}
function enhancePatientPage(){
  if(!onPatientRoute()){
    removeHelp();document.body.classList.remove('bp-patient-active');return;
  }
  ensureInstallMetadata();registerServiceWorker();
  document.body.classList.add('bp-patient-active');
  document.querySelector('.bp-head .detail-back')?.remove();
  document.querySelectorAll('.bp-tool a[href]').forEach(link=>link.remove());
  const controls=document.querySelector('.bp-tool .bp-controls');
  if(!controls)return;
  const existing=controls.querySelector('[data-bp-install-home]');
  if(isStandalone()){existing?.remove();return}
  if(existing)existing.innerHTML=buttonLabel();else controls.prepend(installButton());
}
function scheduleEnhance(){setTimeout(enhancePatientPage,0);setTimeout(enhancePatientPage,120)}
function startObserver(){
  const root=document.getElementById('app');
  if(root&&!appObserver){appObserver=new MutationObserver(scheduleEnhance);appObserver.observe(root,{childList:true,subtree:true})}
  scheduleEnhance();
}
async function runInstall(button){
  if(isStandalone()){button.remove();return}
  if(deferredInstallPrompt){
    const prompt=deferredInstallPrompt;deferredInstallPrompt=null;
    try{
      await prompt.prompt();
      const choice=await prompt.userChoice;
      if(choice?.outcome==='accepted'){button.remove();return}
    }catch(error){}
  }
  showInstallHelp(isIOS()?'ios':isAndroid()?'android':'other',button);
}

ensureInstallMetadata();registerServiceWorker();
window.addEventListener('beforeinstallprompt',event=>{
  if(!onPatientRoute())return;
  event.preventDefault();deferredInstallPrompt=event;scheduleEnhance();
});
window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;document.querySelector('[data-bp-install-home]')?.remove();removeHelp()});
window.addEventListener('hashchange',()=>{ensureInstallMetadata();registerServiceWorker();scheduleEnhance()});
window.matchMedia?.('(display-mode: standalone)')?.addEventListener?.('change',scheduleEnhance);
document.addEventListener('click',event=>{
  const install=event.target.closest?.('[data-bp-install-home]');
  if(install){runInstall(install);return}
  if(event.target.closest?.('[data-close-bp-install]'))removeHelp();
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.getElementById('bp-install-help'))removeHelp()});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',startObserver,{once:true});else startObserver();
})();
