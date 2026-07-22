// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const LANGUAGE_KEY='pc_patient_language';
let deferredInstallPrompt=null;
let appObserver=null;
let helpReturnFocus=null;
let serviceWorkerStarted=false;
let manifestUrl='';

function isPatientRoute(){return location.hash.startsWith('#/patient/')}
function isBpRoute(){return location.hash==='#/patient/blood-pressure'}
function isArabic(){return localStorage.getItem(LANGUAGE_KEY)==='ar'}
function isIOS(){return /iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)}
function isAndroid(){return /android/i.test(navigator.userAgent)}
function isStandalone(){return window.matchMedia?.('(display-mode: standalone)')?.matches||navigator.standalone===true}
function text(en,ar){return isArabic()?ar:en}
function appName(){if(location.hash.startsWith('#/patient/vitamin-d/'))return 'Vitamin D Schedule';if(location.hash.startsWith('#/patient/iron-oral/'))return 'Oral Iron Schedule';if(location.hash.startsWith('#/patient/iron-iv/'))return 'IV Iron Schedule';return 'Blood Pressure Chart'}
function shortName(){if(location.hash.startsWith('#/patient/vitamin-d/'))return 'Vitamin D';if(location.hash.startsWith('#/patient/iron-oral/'))return 'Oral Iron';if(location.hash.startsWith('#/patient/iron-iv/'))return 'IV Iron';return 'BP Chart'}
function ensureMeta(name,content){let meta=document.head.querySelector(`meta[name="${name}"]`);if(!meta){meta=document.createElement('meta');meta.name=name;document.head.appendChild(meta)}meta.content=content}
function installManifest(){if(!isPatientRoute())return;const current=location.pathname+location.search+location.hash,manifest={name:appName(),short_name:shortName(),description:'Patient schedule and tracking tool.',id:current,start_url:current,scope:'./',display:'standalone',orientation:'any',background_color:'#f7fbff',theme_color:'#1767c2',lang:isArabic()?'ar':'en',dir:isArabic()?'rtl':'ltr',icons:[{src:'bp-icon-192.png',sizes:'192x192',type:'image/png',purpose:'any'},{src:'bp-icon-512.png',sizes:'512x512',type:'image/png',purpose:'any maskable'}]};if(manifestUrl)URL.revokeObjectURL(manifestUrl);manifestUrl=URL.createObjectURL(new Blob([JSON.stringify(manifest)],{type:'application/manifest+json'}));let link=document.head.querySelector('link[data-patient-manifest]');if(!link){link=document.createElement('link');link.rel='manifest';link.dataset.patientManifest='1';document.head.appendChild(link)}link.href=manifestUrl}
function ensureInstallMetadata(){if(!isPatientRoute())return;installManifest();let icon=document.head.querySelector('link[data-patient-touch-icon]');if(!icon){icon=document.createElement('link');icon.rel='apple-touch-icon';icon.dataset.patientTouchIcon='1';document.head.appendChild(icon)}icon.href='bp-icon-180.png?v=20260722-1';ensureMeta('theme-color','#1767c2');ensureMeta('apple-mobile-web-app-capable','yes');ensureMeta('apple-mobile-web-app-status-bar-style','default');ensureMeta('apple-mobile-web-app-title',shortName())}
async function registerServiceWorker(){if(serviceWorkerStarted||!isPatientRoute()||!('serviceWorker' in navigator)||location.protocol!=='https:')return;serviceWorkerStarted=true;try{await navigator.serviceWorker.register('bp-sw.js?v=20260722-1',{scope:'./',updateViaCache:'none'})}catch(error){serviceWorkerStarted=false}}
function removeHelp(){document.getElementById('bp-install-help')?.remove();document.body.classList.remove('bp-install-help-open');helpReturnFocus?.focus?.();helpReturnFocus=null}
function stepIcon(type){if(type==='share')return '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 20V4m0 0-6 6m6-6 6 6M8 15H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2"/></svg>';if(type==='plus')return '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="3" width="26" height="26" rx="6"/><path d="M16 9v14M9 16h14"/></svg>';return '<span aria-hidden="true">⋮</span>'}
function showInstallHelp(platform,opener){removeHelp();helpReturnFocus=opener||document.activeElement;const ios=platform==='ios',title=text('Add this tool to your Home Screen','أضف هذه الأداة إلى الشاشة الرئيسية'),first=ios?text('Tap the Share button','اضغط زر المشاركة'):text('Open the browser menu','افتح قائمة المتصفح'),second=ios?text('Tap Add to Home Screen','اختر إضافة إلى الشاشة الرئيسية'):text('Tap Install app or Add to Home screen','اختر تثبيت التطبيق أو الإضافة إلى الشاشة الرئيسية');const modal=document.createElement('div');modal.id='bp-install-help';modal.className='bp-install-help';modal.innerHTML=`<div class="bp-install-help-backdrop" data-close-patient-install></div><section class="bp-install-help-dialog" role="dialog" aria-modal="true" aria-labelledby="patient-install-title" dir="${isArabic()?'rtl':'ltr'}"><button type="button" class="bp-install-help-close" data-close-patient-install aria-label="${text('Close','إغلاق')}">×</button><h2 id="patient-install-title">${title}</h2><div class="bp-install-steps"><div><b>1</b>${stepIcon(ios?'share':'menu')}<span>${first}</span></div><div><b>2</b>${stepIcon('plus')}<span>${second}</span></div></div><button type="button" class="btn dr" data-close-patient-install>${text('Done','تم')}</button></section>`;document.body.appendChild(modal);document.body.classList.add('bp-install-help-open');modal.querySelector('.bp-install-help-close')?.focus()}
function buttonLabel(){return `<span aria-hidden="true">⌂</span>${text('Save to Home Screen','إضافة إلى الشاشة الرئيسية')}`}
function installButton(){const button=document.createElement('button');button.type='button';button.className='btn dr bp-install-button';button.dataset.patientInstallHome='1';button.innerHTML=buttonLabel();return button}
function targetActions(){return isBpRoute()?document.querySelector('.bp-tool .bp-controls'):document.querySelector('.vitd-save-actions')}
function enhancePatientPage(){if(!isPatientRoute()){removeHelp();document.body.classList.remove('bp-patient-active');return}ensureInstallMetadata();registerServiceWorker();if(isBpRoute()){document.body.classList.add('bp-patient-active');document.querySelector('.bp-head .detail-back')?.remove();document.querySelectorAll('.bp-tool a[href]').forEach(link=>link.remove())}else document.body.classList.remove('bp-patient-active');document.querySelectorAll('.vitd-save-card details').forEach(detail=>detail.remove());const controls=targetActions();if(!controls)return;const existing=controls.querySelector('[data-patient-install-home]');if(isStandalone()){existing?.remove();return}if(existing)existing.innerHTML=buttonLabel();else controls.prepend(installButton())}
function scheduleEnhance(){setTimeout(enhancePatientPage,0);setTimeout(enhancePatientPage,150)}
function startObserver(){const root=document.getElementById('app');if(root&&!appObserver){appObserver=new MutationObserver(scheduleEnhance);appObserver.observe(root,{childList:true,subtree:true})}scheduleEnhance()}
async function runInstall(button){if(isStandalone()){button.remove();return}if(deferredInstallPrompt){const prompt=deferredInstallPrompt;deferredInstallPrompt=null;try{const result=await prompt.prompt();const choice=result?.outcome?result:await prompt.userChoice;if(choice?.outcome==='accepted'){button.remove();return}}catch(error){}}showInstallHelp(isIOS()?'ios':isAndroid()?'android':'other',button)}

ensureInstallMetadata();registerServiceWorker();
window.addEventListener('beforeinstallprompt',event=>{if(!isPatientRoute())return;event.preventDefault();deferredInstallPrompt=event;scheduleEnhance()});
window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;document.querySelector('[data-patient-install-home]')?.remove();removeHelp()});
window.addEventListener('hashchange',()=>{deferredInstallPrompt=null;ensureInstallMetadata();registerServiceWorker();scheduleEnhance()});
window.matchMedia?.('(display-mode: standalone)')?.addEventListener?.('change',scheduleEnhance);
document.addEventListener('click',event=>{const install=event.target.closest?.('[data-patient-install-home]');if(install){runInstall(install);return}if(event.target.closest?.('[data-close-patient-install]'))removeHelp()});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.getElementById('bp-install-help'))removeHelp()});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',startObserver,{once:true});else startObserver();
})();
