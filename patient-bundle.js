// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const BUNDLE_ROUTE='#/patient/bundle/';
const DRAFT_KEY='pc_patient_bundle_draft_v1';
const QUEUE_KEY='pc_patient_bundle_setup_queue_v2';
const REOPEN_KEY='pc_patient_bundle_reopen_chooser_v1';
const LANG_KEY='pc_patient_language';
const MAX_TOOLS=6;
const TOOLS={
  v:{en:'Vitamin D',ar:'فيتامين د',short:'D',builder:'#/physician/vitamin-d'},
  o:{en:'Iron tablets',ar:'حبوب الحديد',short:'Fe',builder:'#/physician/iron-oral'},
  i:{en:'IV iron',ar:'الحديد الوريدي',short:'IV',builder:'#/physician/iron-iv'},
  b:{en:'BP readings',ar:'قراءات الضغط',short:'BP',builder:'#/physician/blood-pressure'}
};
const EXPORTS=[
  {kind:'v',box:'vitd-export',input:'vitd-patient-link'},
  {kind:'o',box:'oral-export',input:'oral-link'},
  {kind:'i',box:'ivp-export',input:'ivp-link'},
  {kind:'b',box:'bp-config-export',input:'bp-patient-link'}
];

let activeIndex=0;
let observer=null;
let enhancing=false;
let advancing=false;
let selection=new Set();

function eventElement(target){
  if(target instanceof Element)return target;
  return target&&target.parentElement instanceof Element?target.parentElement:null;
}
function esc(value){return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}
function encode(value){return btoa(unescape(encodeURIComponent(JSON.stringify(value)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function decode(value){try{const normalized=String(value).replace(/-/g,'+').replace(/_/g,'/');return JSON.parse(decodeURIComponent(escape(atob(normalized+'==='.slice((normalized.length+3)%4)))))}catch(error){return null}}
function date(value){return new Date(String(value)+'T12:00:00')}
function iso(value){return value.toISOString().slice(0,10)}
function addDays(value,days){const result=date(value);result.setDate(result.getDate()+days);return iso(result)}
function isArabic(){return localStorage.getItem(LANG_KEY)==='ar'}
function toggleLanguage(){localStorage.setItem(LANG_KEY,isArabic()?'en':'ar')}
function toast(message){if(typeof window.showToast==='function')window.showToast(message)}
function routeIsBundle(){return location.hash.startsWith(BUNDLE_ROUTE)}
function currentBundleCode(){return routeIsBundle()?location.hash.slice(BUNDLE_ROUTE.length):''}

function loadDraft(){
  try{
    const value=JSON.parse(sessionStorage.getItem(DRAFT_KEY));
    return value&&value.v===1&&Array.isArray(value.t)?value:{v:1,t:[]};
  }catch(error){return {v:1,t:[]}}
}
function saveDraft(draft){sessionStorage.setItem(DRAFT_KEY,JSON.stringify({v:1,t:(draft.t||[]).slice(0,MAX_TOOLS)}))}
function loadQueue(){
  try{
    const value=JSON.parse(sessionStorage.getItem(QUEUE_KEY));
    return Array.isArray(value)?value.filter(kind=>TOOLS[kind]):[];
  }catch(error){return []}
}
function saveQueue(queue){
  const clean=queue.filter(kind=>TOOLS[kind]);
  if(clean.length)sessionStorage.setItem(QUEUE_KEY,JSON.stringify(clean));
  else sessionStorage.removeItem(QUEUE_KEY);
  syncSetupClass();
}
function clearDraft(){
  sessionStorage.removeItem(DRAFT_KEY);
  sessionStorage.removeItem(QUEUE_KEY);
  sessionStorage.removeItem(REOPEN_KEY);
  syncSetupClass();
}
function syncSetupClass(){document.body.classList.toggle('patient-bundle-setup-active',loadQueue().length>0)}
function itemKey(item){return JSON.stringify(item)}
function addItem(item){
  const draft=loadDraft();
  if(!item||!TOOLS[item.k])return {error:'This patient tool could not be added.'};
  if(draft.t.some(existing=>itemKey(existing)===itemKey(item)))return {duplicate:true,draft};
  if(draft.t.length>=MAX_TOOLS)return {error:`A patient bundle can contain up to ${MAX_TOOLS} tools.`};
  draft.t.push(item);
  saveDraft(draft);
  return {draft};
}
function removeItem(index){const draft=loadDraft();draft.t.splice(index,1);saveDraft(draft)}

function compact(kind,data){
  if(kind==='v')return {k:'v',p:data};
  if(kind==='o')return {k:'o',p:{v:1,kind:'oral',f:data.f,u:data.u,ed:data.ed,g:data.g,w:data.w,s:data.s,r:data.r,c:data.c||''}};
  if(kind==='i')return {k:'i',p:{v:1,kind:'iv',p:data.p,t:data.t,g:data.g,r:data.r,c:data.c||'',preset:data.preset||'',i:(data.i||[]).map(item=>({date:item.date,mg:item.mg,ml:item.ml}))}};
  if(kind==='b')return {k:'b',p:data};
  return null;
}
function expand(item){
  if(item.k==='b')return '#/patient/blood-pressure/'+encode(item.p||{});
  const data={...(item.p||{})};
  if(item.k==='o'&&!Array.isArray(data.d)){
    const gap=Number(data.g)||1,weeks=Number(data.w)||0,count=Math.floor((weeks*7-1)/gap)+1;
    data.d=Array.from({length:Math.max(0,count)},(_,index)=>addDays(data.s,index*gap));
  }
  const code=encode(data);
  if(item.k==='v')return '#/patient/vitamin-d/'+code;
  if(item.k==='o')return '#/patient/iron-oral/'+code;
  if(item.k==='i')return '#/patient/iron-iv/'+code;
  return '';
}
function parsePatientLink(value){
  try{
    const route=new URL(value,location.href).hash;
    for(const [prefix,kind] of [['#/patient/blood-pressure/','b'],['#/patient/vitamin-d/','v'],['#/patient/iron-oral/','o'],['#/patient/iron-iv/','i']]){
      if(!route.startsWith(prefix))continue;
      const data=decode(route.slice(prefix.length));
      return data?compact(kind,data):null;
    }
  }catch(error){}
  return null;
}
function bundleCode(draft){return encode({v:1,t:draft.t})}
function bundleUrl(draft){return location.origin+location.pathname+location.search+BUNDLE_ROUTE+bundleCode(draft)}
function labels(items,forceEnglish=false){
  const totals={},seen={};
  for(const item of items)totals[item.k]=(totals[item.k]||0)+1;
  return items.map(item=>{
    seen[item.k]=(seen[item.k]||0)+1;
    const name=forceEnglish?TOOLS[item.k].en:(isArabic()?TOOLS[item.k].ar:TOOLS[item.k].en);
    return name+(totals[item.k]>1?` ${seen[item.k]}`:'');
  });
}

function closeChooser(){
  document.getElementById('patient-bundle-chooser')?.remove();
  document.body.classList.remove('patient-bundle-modal-open');
  selection.clear();
}
function chooserHtml(){
  const draft=loadDraft(),remaining=MAX_TOOLS-draft.t.length;
  return `<div class="patient-bundle-backdrop" data-close-bundle-chooser></div><section class="patient-bundle-dialog" role="dialog" aria-modal="true" aria-labelledby="bundle-title"><button type="button" class="patient-bundle-close" data-close-bundle-chooser aria-label="Close">×</button><p class="eyebrow">PATIENT BUNDLE</p><h2 id="bundle-title">Choose patient tools</h2><p>Select all the tools you want. Each tool will open for setup, and the combined QR will appear only after the last one is complete.</p><div class="patient-bundle-tool-grid">${Object.entries(TOOLS).map(([kind,tool])=>`<button type="button" data-bundle-toggle-tool="${kind}" aria-pressed="${selection.has(kind)}" class="${selection.has(kind)?'selected':''}"><span>${tool.short}</span><strong>${tool.en}</strong><small>${selection.has(kind)?'Selected':'Tap to select'}</small></button>`).join('')}</div><p class="patient-bundle-size-note"><strong>${selection.size}</strong> selected · ${remaining} space${remaining===1?'':'s'} available</p><div class="patient-bundle-actions"><button type="button" class="btn ghost" data-close-bundle-chooser>Cancel</button><button type="button" class="btn dr" data-bundle-continue ${selection.size?'':'disabled'}>Continue</button></div></section>`;
}
function openChooser(){
  closeChooser();
  selection=new Set();
  const modal=document.createElement('div');
  modal.id='patient-bundle-chooser';
  modal.className='patient-bundle-modal';
  modal.innerHTML=chooserHtml();
  document.body.appendChild(modal);
  document.body.classList.add('patient-bundle-modal-open');
  modal.querySelector('[data-bundle-toggle-tool]')?.focus();
}
function refreshChooser(){const modal=document.getElementById('patient-bundle-chooser');if(modal)modal.innerHTML=chooserHtml()}
function toggleTool(kind){
  const limit=MAX_TOOLS-loadDraft().t.length;
  if(selection.has(kind))selection.delete(kind);
  else if(selection.size<limit)selection.add(kind);
  else{toast(`A patient bundle can contain up to ${MAX_TOOLS} tools.`);return}
  refreshChooser();
}
function nextSetup(){
  const queue=loadQueue();
  if(!queue.length){location.hash='#/physician';return}
  const route=TOOLS[queue[0]].builder;
  if(location.hash===route){if(typeof window.route==='function')window.route();return}
  location.hash=route;
}
function continueSelection(){
  const queue=[...selection];
  if(!queue.length)return;
  saveQueue(queue);
  closeChooser();
  nextSetup();
}

function generateQr(container,url){
  try{
    const code=qrcode(0,'L');
    code.addData(url);
    code.make();
    container.innerHTML=code.createSvgTag({cellSize:4,margin:4,scalable:true});
  }catch(error){container.textContent='Use the patient link.'}
}
function maybeOpenChooser(){
  if(sessionStorage.getItem(REOPEN_KEY)!=='1'||location.hash!=='#/physician')return;
  sessionStorage.removeItem(REOPEN_KEY);
  window.setTimeout(openChooser,0);
}
function renderBuilder(){
  if(location.hash!=='#/physician')return;
  const screen=document.querySelector('.physician-screen'),grid=screen?.querySelector('.physician-tool-grid');
  if(!screen||!grid)return;

  const draft=loadDraft(),queue=loadQueue(),signature=JSON.stringify({draft,queue}),existing=document.getElementById('patient-bundle-builder');
  if(existing?.dataset.signature===signature){maybeOpenChooser();return}

  const section=existing||document.createElement('section');
  section.id='patient-bundle-builder';
  section.className='patient-bundle-builder';
  section.dataset.signature=signature;

  if(queue.length){
    section.innerHTML=`<div><p class="eyebrow">PATIENT BUNDLE SETUP</p><h2>${draft.t.length} complete · ${queue.length} remaining</h2><p>The combined QR is withheld until every selected tool has been configured.</p></div><button type="button" class="btn dr" data-bundle-resume>Continue setup</button>`;
  }else if(!draft.t.length){
    section.innerHTML=`<div><p class="eyebrow">ONE LINK FOR THE PATIENT</p><h2>Patient tool bundle</h2><p>Choose several tools, configure each one, then create one patient link.</p></div><button type="button" class="btn dr" data-bundle-start>Start a patient bundle</button>`;
  }else{
    const names=labels(draft.t,true),url=bundleUrl(draft);
    section.innerHTML=`<div class="patient-bundle-title"><div><p class="eyebrow">PATIENT BUNDLE</p><h2>${draft.t.length} tool${draft.t.length===1?'':'s'} in one link</h2><p>All selected tools are complete. Share this combined patient link.</p></div><button type="button" class="btn ghost danger" data-bundle-clear>Clear bundle</button></div><div class="patient-bundle-items">${draft.t.map((item,index)=>`<article class="patient-bundle-item"><span>${TOOLS[item.k].short}</span><strong>${esc(names[index])}</strong><button type="button" data-bundle-remove="${index}" aria-label="Remove ${esc(names[index])}">×</button></article>`).join('')}</div><div class="patient-bundle-handoff"><div id="patient-bundle-qr" class="vitd-qr"></div><div><label class="vitd-link-label">Combined patient link<input id="patient-bundle-link" readonly value="${esc(url)}"></label><div class="patient-bundle-actions"><button type="button" class="btn dr" data-bundle-open>Open combined patient page</button><button type="button" class="btn ghost" data-bundle-copy>Copy combined link</button><button type="button" class="btn ghost" data-bundle-add>Add more tools</button></div></div></div>`;
    requestAnimationFrame(()=>{const target=document.getElementById('patient-bundle-qr');if(target)generateQr(target,url)});
  }

  if(!existing)screen.insertBefore(section,grid);
  maybeOpenChooser();
}

function currentExport(){
  for(const item of EXPORTS){
    const box=document.getElementById(item.box),input=document.getElementById(item.input);
    if(!box||box.hidden||!input?.value)continue;
    const parsed=parsePatientLink(input.value);
    if(parsed)return {box,item:parsed};
  }
  return null;
}
function processQueueExport(){
  if(advancing)return;
  const queue=loadQueue();
  if(!queue.length)return;
  const current=currentExport();
  if(!current||current.item.k!==queue[0])return;

  advancing=true;
  current.box.hidden=true;
  const result=addItem(current.item);
  if(result.error){advancing=false;alert(result.error);return}

  queue.shift();
  saveQueue(queue);
  toast(result.duplicate?'This plan is already in the bundle.':'Plan added to the patient bundle.');

  if(queue.length)location.hash=TOOLS[queue[0]].builder;
  else location.hash='#/physician';
}
function enhanceExports(){
  const queue=loadQueue();
  if(queue.length){
    processQueueExport();
    return;
  }
  for(const item of EXPORTS){
    const box=document.getElementById(item.box);
    if(!box||box.hidden)continue;
    const actions=box.querySelector('.vitd-export-actions');
    if(!actions||actions.querySelector('[data-bundle-add-current]'))continue;
    const button=document.createElement('button');
    button.type='button';
    button.className='btn ghost';
    button.dataset.bundleAddCurrent='1';
    button.textContent='Add this and more tools';
    actions.appendChild(button);
  }
}
function addStandaloneCurrent(button){
  const box=button.closest('.vitd-export');
  const input=box?.querySelector('#vitd-patient-link,#oral-link,#ivp-link,#bp-patient-link');
  const item=parsePatientLink(input?.value||'');
  if(!item){alert('Generate the patient plan first.');return}
  const result=addItem(item);
  if(result.error){alert(result.error);return}
  toast(result.duplicate?'This plan is already in the bundle.':'Plan added to the patient bundle.');
  sessionStorage.setItem(REOPEN_KEY,'1');
  if(location.hash==='#/physician'){renderBuilder();maybeOpenChooser()}
  else location.hash='#/physician';
}
function enhance(){
  if(enhancing)return;
  enhancing=true;
  try{
    syncSetupClass();
    renderBuilder();
    enhanceExports();
  }finally{enhancing=false}
}

function removeNav(){document.getElementById('patient-bundle-nav')?.remove();document.body.classList.remove('patient-bundle-active')}
function validBundle(bundle){return bundle&&bundle.v===1&&Array.isArray(bundle.t)&&bundle.t.length&&bundle.t.length<=MAX_TOOLS&&bundle.t.every(item=>item&&TOOLS[item.k]&&expand(item))}
function renderChild(route,bundleHash){
  history.replaceState(null,'',location.pathname+location.search+route);
  try{
    if(route.startsWith('#/patient/vitamin-d/')&&typeof window.renderVitaminDPatient==='function')window.renderVitaminDPatient(route.slice('#/patient/vitamin-d/'.length));
    else if(route.startsWith('#/patient/blood-pressure/')&&typeof window.renderConfiguredBpPatient==='function')window.renderConfiguredBpPatient(route.slice('#/patient/blood-pressure/'.length));
    else if(route.startsWith('#/patient/iron-')&&typeof window.handleIronRoute==='function')window.handleIronRoute();
    else previousRoute();
  }finally{history.replaceState(null,'',location.pathname+location.search+bundleHash)}
}
function invalidBundle(){
  removeNav();
  document.body.classList.add('patient-bundle-active');
  const root=document.getElementById('app');
  if(root)root.innerHTML='<div class="screen patient-bundle-invalid"><section class="detail"><h1>This patient bundle link is invalid</h1><p>Ask the clinic for a new link.</p></section></div>';
}
function renderBundle(code,index){
  const bundle=decode(code);
  if(!validBundle(bundle)){invalidBundle();return false}

  activeIndex=Math.max(0,Math.min(Number.isInteger(index)?index:activeIndex,bundle.t.length-1));
  document.documentElement.lang=isArabic()?'ar':'en';
  document.documentElement.dir=isArabic()?'rtl':'ltr';
  renderChild(expand(bundle.t[activeIndex]),BUNDLE_ROUTE+code);
  removeNav();
  document.body.classList.add('patient-bundle-active');

  const names=labels(bundle.t),nav=document.createElement('nav');
  nav.id='patient-bundle-nav';
  nav.className='patient-bundle-nav';
  nav.dir=isArabic()?'rtl':'ltr';
  nav.setAttribute('aria-label',isArabic()?'أدوات المريض':'Patient tools');
  nav.innerHTML=bundle.t.map((item,itemIndex)=>`<button type="button" data-bundle-tool-index="${itemIndex}" class="${itemIndex===activeIndex?'active':''}" aria-current="${itemIndex===activeIndex?'page':'false'}"><span>${TOOLS[item.k].short}</span><strong>${esc(names[itemIndex])}</strong></button>`).join('');
  document.body.appendChild(nav);
  return true;
}

const previousRoute=window.route;
window.route=function(){
  if(routeIsBundle())return renderBundle(currentBundleCode(),activeIndex);
  removeNav();
  const result=previousRoute.apply(this,arguments);
  requestAnimationFrame(enhance);
  return result;
};
window.renderPatientBundleActive=function(){if(routeIsBundle())return renderBundle(currentBundleCode(),activeIndex);return false};

async function copyBundleLink(){
  const input=document.getElementById('patient-bundle-link');
  if(!input)return;
  try{await navigator.clipboard.writeText(input.value);toast('Combined patient link copied')}
  catch(error){input.select();document.execCommand?.('copy');toast('Combined patient link copied')}
}

/* Bundle language changes are handled here because the active child route is encoded inside the bundle URL. */
document.addEventListener('click',event=>{
  if(!routeIsBundle())return;
  const target=eventElement(event.target);
  if(!target?.closest('[data-patient-language-toggle],[data-bpc-language]'))return;
  event.preventDefault();
  event.stopImmediatePropagation();
  toggleLanguage();
  renderBundle(currentBundleCode(),activeIndex);
},true);

document.addEventListener('submit',()=>{
  if(loadQueue().length)window.setTimeout(processQueueExport,0);
});

document.addEventListener('click',async event=>{
  const target=eventElement(event.target);
  if(!target)return;
  if(target.closest('[data-bundle-start],[data-bundle-add]')){openChooser();return}
  if(target.closest('[data-close-bundle-chooser]')){closeChooser();return}
  const toggle=target.closest('[data-bundle-toggle-tool]');
  if(toggle){toggleTool(toggle.dataset.bundleToggleTool);return}
  if(target.closest('[data-bundle-continue]')){continueSelection();return}
  if(target.closest('[data-bundle-resume]')){nextSetup();return}
  const remove=target.closest('[data-bundle-remove]');
  if(remove){removeItem(Number(remove.dataset.bundleRemove));renderBuilder();return}
  if(target.closest('[data-bundle-clear]')){if(confirm('Clear this patient bundle?')){clearDraft();renderBuilder()}return}
  if(target.closest('[data-bundle-open]')){const draft=loadDraft();if(draft.t.length)location.hash=BUNDLE_ROUTE+bundleCode(draft);return}
  if(target.closest('[data-bundle-copy]')){await copyBundleLink();return}
  const current=target.closest('[data-bundle-add-current]');
  if(current){addStandaloneCurrent(current);return}
  const tool=target.closest('[data-bundle-tool-index]');
  if(tool&&routeIsBundle()){
    renderBundle(currentBundleCode(),Number(tool.dataset.bundleToolIndex));
    window.scrollTo({top:0,behavior:'smooth'});
  }
});

document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.getElementById('patient-bundle-chooser'))closeChooser()});
window.addEventListener('hashchange',()=>window.setTimeout(()=>{
  advancing=false;
  if(routeIsBundle())renderBundle(currentBundleCode(),activeIndex);
  else enhance();
},0));
function start(){
  const root=document.getElementById('app');
  if(root&&!observer){
    observer=new MutationObserver(()=>requestAnimationFrame(()=>{
      if(routeIsBundle()){
        const bundle=decode(currentBundleCode());
        if(validBundle(bundle)&&!document.getElementById('patient-bundle-nav'))renderBundle(currentBundleCode(),activeIndex);
      }else enhance();
    }));
    observer.observe(root,{childList:true,subtree:true});
  }
  enhance();
  if(routeIsBundle())renderBundle(currentBundleCode(),activeIndex);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
