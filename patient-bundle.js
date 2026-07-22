// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const BUNDLE_ROUTE='#/patient/bundle/';
const DRAFT_KEY='pc_patient_bundle_draft_v1';
const CHOOSER_KEY='pc_patient_bundle_open_chooser_v1';
const LANGUAGE_KEY='pc_patient_language';
const MAX_TOOLS=6;
const TOOLS={
  v:{en:'Vitamin D',ar:'فيتامين د',short:'D',builder:'#/physician/vitamin-d'},
  o:{en:'Iron tablets',ar:'حبوب الحديد',short:'Fe',builder:'#/physician/iron-oral'},
  i:{en:'IV iron',ar:'الحديد الوريدي',short:'IV',builder:'#/physician/iron-iv'},
  b:{en:'BP readings',ar:'قراءات الضغط',short:'BP',builder:null}
};
let activeIndex=0;
let appObserver=null;
let chooserReturnFocus=null;

function esc(value){return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}
function encode(value){return btoa(unescape(encodeURIComponent(JSON.stringify(value)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function decode(value){try{const normalized=String(value).replace(/-/g,'+').replace(/_/g,'/');return JSON.parse(decodeURIComponent(escape(atob(normalized+'==='.slice((normalized.length+3)%4)))))}catch(error){return null}}
function date(value){return new Date(String(value)+'T12:00:00')}
function iso(value){return value.toISOString().slice(0,10)}
function addDays(value,days){const result=date(value);result.setDate(result.getDate()+days);return iso(result)}
function isArabic(){return localStorage.getItem(LANGUAGE_KEY)==='ar'}
function text(en,ar){return isArabic()?ar:en}
function toolName(kind){const tool=TOOLS[kind]||TOOLS.b;return isArabic()?tool.ar:tool.en}
function routeIsBundle(){return location.hash.startsWith(BUNDLE_ROUTE)}
function currentBundleCode(){return routeIsBundle()?location.hash.slice(BUNDLE_ROUTE.length):''}
function currentBundleUrl(code){return location.origin+location.pathname+location.search+BUNDLE_ROUTE+code}
function toast(message){if(typeof window.showToast==='function')window.showToast(message)}
function hash(value){let result=2166136261;for(let i=0;i<value.length;i++){result^=value.charCodeAt(i);result=Math.imul(result,16777619)}return (result>>>0).toString(36)}
function activeKey(code){return 'pc_patient_bundle_active_'+hash(code)}

function loadDraft(){
  try{
    const value=JSON.parse(sessionStorage.getItem(DRAFT_KEY));
    return value&&value.v===1&&Array.isArray(value.t)?value:{v:1,t:[]};
  }catch(error){return {v:1,t:[]}}
}
function saveDraft(draft){sessionStorage.setItem(DRAFT_KEY,JSON.stringify({v:1,t:(draft.t||[]).slice(0,MAX_TOOLS)}))}
function clearDraft(){sessionStorage.removeItem(DRAFT_KEY)}
function itemKey(item){return JSON.stringify(item)}
function addItem(item){
  if(!item||!TOOLS[item.k])return {error:'This patient tool could not be added.'};
  const draft=loadDraft();
  if(draft.t.some(existing=>itemKey(existing)===itemKey(item)))return {draft,duplicate:true};
  if(draft.t.length>=MAX_TOOLS)return {error:`A patient bundle can contain up to ${MAX_TOOLS} tools.`};
  if(item.k==='b'&&draft.t.some(existing=>existing.k==='b'))return {draft,duplicate:true};
  draft.t.push(item);saveDraft(draft);return {draft};
}
function removeItem(index){const draft=loadDraft();draft.t.splice(index,1);saveDraft(draft);return draft}

function compactTool(kind,data){
  if(kind==='v')return {k:'v',p:data};
  if(kind==='o')return {k:'o',p:{v:1,kind:'oral',f:data.f,u:data.u,ed:data.ed,g:data.g,w:data.w,s:data.s,r:data.r,c:data.c||''}};
  if(kind==='i')return {k:'i',p:{v:1,kind:'iv',p:data.p,t:data.t,g:data.g,r:data.r,c:data.c||'',preset:data.preset||'',i:(data.i||[]).map(item=>({date:item.date,mg:item.mg,ml:item.ml}))}};
  if(kind==='b')return {k:'b'};
  return null;
}
function expandItem(item){
  if(item.k==='b')return '#/patient/blood-pressure';
  const data={...(item.p||{})};
  if(item.k==='o'&&!Array.isArray(data.d)){
    const gap=Number(data.g)||1,weeks=Number(data.w)||0;
    const count=Math.floor((weeks*7-1)/gap)+1;
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
    if(route==='#/patient/blood-pressure')return {k:'b'};
    const options=[['#/patient/vitamin-d/','v'],['#/patient/iron-oral/','o'],['#/patient/iron-iv/','i']];
    for(const [prefix,kind] of options){
      if(!route.startsWith(prefix))continue;
      const data=decode(route.slice(prefix.length));
      if(!data)return null;
      return compactTool(kind,data);
    }
  }catch(error){}
  return null;
}
function validateBundle(value){return value&&value.v===1&&Array.isArray(value.t)&&value.t.length>0&&value.t.length<=MAX_TOOLS&&value.t.every(item=>item&&TOOLS[item.k]&&expandItem(item))}
function bundleCode(draft){return encode({v:1,t:draft.t})}
function bundleLabels(items){
  const totals={},seen={};
  for(const item of items)totals[item.k]=(totals[item.k]||0)+1;
  return items.map(item=>{seen[item.k]=(seen[item.k]||0)+1;return toolName(item.k)+(totals[item.k]>1?` ${seen[item.k]}`:'')});
}

function removeChooser(){
  document.getElementById('patient-bundle-chooser')?.remove();
  document.body.classList.remove('patient-bundle-modal-open');
  chooserReturnFocus?.focus?.();chooserReturnFocus=null;
}
function openChooser(opener){
  removeChooser();chooserReturnFocus=opener||document.activeElement;
  const draft=loadDraft(),modal=document.createElement('div');
  modal.id='patient-bundle-chooser';modal.className='patient-bundle-modal';
  modal.innerHTML=`<div class="patient-bundle-backdrop" data-close-bundle-chooser></div><section class="patient-bundle-dialog" role="dialog" aria-modal="true" aria-labelledby="patient-bundle-chooser-title"><button type="button" class="patient-bundle-close" data-close-bundle-chooser aria-label="Close">×</button><p class="eyebrow">PATIENT BUNDLE</p><h2 id="patient-bundle-chooser-title">Add another tool</h2><p>Choose the next tool. Schedule tools open their clinician builder first.</p><div class="patient-bundle-tool-grid">${Object.entries(TOOLS).map(([kind,tool])=>`<button type="button" data-bundle-choose-tool="${kind}" ${kind==='b'&&draft.t.some(item=>item.k==='b')?'disabled':''}><span>${esc(tool.short)}</span><strong>${esc(tool.en)}</strong><small>${kind==='b'?'Add immediately':'Build and confirm first'}</small></button>`).join('')}</div></section>`;
  document.body.appendChild(modal);document.body.classList.add('patient-bundle-modal-open');
  modal.querySelector('[data-bundle-choose-tool]:not(:disabled)')?.focus();
}
function chooseTool(kind){
  const tool=TOOLS[kind];if(!tool)return;
  removeChooser();
  if(kind==='b'){
    const result=addItem({k:'b'});if(result.error){alert(result.error);return}renderBundleBuilder();return;
  }
  location.hash=tool.builder;
}

function generateQr(container,url){
  if(!container)return false;
  try{const qr=qrcode(0,'L');qr.addData(url);qr.make();container.innerHTML=qr.createSvgTag({cellSize:4,margin:4,scalable:true});return true}
  catch(error){container.innerHTML='<p>Use the patient link.</p>';return false}
}
function draftToolRows(draft){
  const labels=bundleLabels(draft.t);
  return draft.t.map((item,index)=>`<article class="patient-bundle-item"><span>${esc(TOOLS[item.k].short)}</span><strong>${esc(labels[index])}</strong><button type="button" data-bundle-remove="${index}" aria-label="Remove ${esc(labels[index])}">×</button></article>`).join('');
}
function renderBundleBuilder(){
  if(location.hash!=='#/physician')return;
  const screen=document.querySelector('.physician-screen'),grid=screen?.querySelector('.physician-tool-grid');
  if(!screen||!grid)return;
  document.getElementById('patient-bundle-builder')?.remove();
  const draft=loadDraft(),section=document.createElement('section');section.id='patient-bundle-builder';section.className='patient-bundle-builder';
  if(!draft.t.length){
    section.innerHTML=`<div><p class="eyebrow">ONE LINK FOR THE PATIENT</p><h2>Patient tool bundle</h2><p>Combine several confirmed tools into one QR code and one patient link.</p></div><button type="button" class="btn dr" data-bundle-start>Start a patient bundle</button>`;
  }else{
    const code=bundleCode(draft),url=currentBundleUrl(code),long=url.length>2600;
    section.innerHTML=`<div class="patient-bundle-title"><div><p class="eyebrow">PATIENT BUNDLE</p><h2>${draft.t.length} tool${draft.t.length===1?'':'s'} in one link</h2><p>The patient can switch tools using the floating navigation at the bottom.</p></div><button type="button" class="btn ghost danger" data-bundle-clear>Clear bundle</button></div><div class="patient-bundle-items">${draftToolRows(draft)}</div><div class="patient-bundle-handoff"><div id="patient-bundle-qr" class="vitd-qr"></div><div><label class="vitd-link-label">Combined patient link<input id="patient-bundle-link" readonly value="${esc(url)}"></label><div class="patient-bundle-actions"><button type="button" class="btn dr" data-bundle-open>Open combined patient page</button><button type="button" class="btn ghost" data-bundle-copy>Copy combined link</button><button type="button" class="btn ghost" data-bundle-add>Add another tool</button></div>${long?'<p class="patient-bundle-size-note">This bundle contains a lot of schedule data. The link still works, but the QR code may be dense.</p>':''}</div></div>`;
    requestAnimationFrame(()=>generateQr(document.getElementById('patient-bundle-qr'),url));
  }
  screen.insertBefore(section,grid);
  if(sessionStorage.getItem(CHOOSER_KEY)==='1'){sessionStorage.removeItem(CHOOSER_KEY);setTimeout(()=>openChooser(section.querySelector('[data-bundle-add],[data-bundle-start]')),0)}
}
function enhanceBpCard(){
  if(location.hash!=='#/physician')return;
  const actions=document.querySelector('[data-bp-physician-card] .bp-physician-actions');
  if(!actions||actions.querySelector('[data-bundle-add-bp]'))return;
  const button=document.createElement('button');button.type='button';button.className='btn ghost';button.dataset.bundleAddBp='1';button.textContent='Add to patient bundle';actions.appendChild(button);
}
function currentExportLink(button){
  const exportBox=button.closest('.vitd-export');
  return exportBox?.querySelector('#vitd-patient-link,#oral-link,#ivp-link')?.value||'';
}
function enhanceExports(){
  const exports=[document.getElementById('vitd-export'),document.getElementById('oral-export'),document.getElementById('ivp-export')].filter(Boolean);
  const hasDraft=loadDraft().t.length>0;
  for(const box of exports){
    if(box.hidden)continue;
    const actions=box.querySelector('.vitd-export-actions');
    if(!actions||actions.querySelector('[data-bundle-add-current]'))continue;
    const button=document.createElement('button');button.type='button';button.className='btn ghost';button.dataset.bundleAddCurrent='1';button.textContent=hasDraft?'Add to patient bundle':'Add another tool';actions.appendChild(button);
  }
}
function enhanceBuilderBanner(){
  if(!['#/physician/vitamin-d','#/physician/iron-oral','#/physician/iron-iv'].includes(location.hash))return;
  const draft=loadDraft();if(!draft.t.length||document.querySelector('[data-bundle-builder-banner]'))return;
  const builder=document.querySelector('.vitd-builder');if(!builder)return;
  const banner=document.createElement('aside');banner.className='patient-bundle-builder-banner';banner.dataset.bundleBuilderBanner='1';banner.innerHTML=`<div><strong>Adding to a patient bundle</strong><span>${draft.t.length} tool${draft.t.length===1?'':'s'} already selected</span></div><a class="btn ghost button-link" href="#/physician">Back to bundle</a>`;
  builder.insertBefore(banner,builder.children[1]||builder.firstChild);
}
function enhancePhysician(){renderBundleBuilder();enhanceBpCard();enhanceBuilderBanner();enhanceExports()}

function removeBundleNav(){document.getElementById('patient-bundle-nav')?.remove();document.body.classList.remove('patient-bundle-active')}
function bundleNav(bundle,code){
  removeBundleNav();document.body.classList.add('patient-bundle-active');
  const labels=bundleLabels(bundle.t),nav=document.createElement('nav');
  nav.id='patient-bundle-nav';nav.className='patient-bundle-nav';nav.setAttribute('aria-label',text('Patient tools','أدوات المريض'));nav.dir=isArabic()?'rtl':'ltr';
  nav.innerHTML=bundle.t.map((item,index)=>`<button type="button" data-bundle-tool-index="${index}" class="${index===activeIndex?'active':''}" aria-current="${index===activeIndex?'page':'false'}"><span>${esc(TOOLS[item.k].short)}</span><strong>${esc(labels[index])}</strong></button>`).join('');
  document.body.appendChild(nav);sessionStorage.setItem(activeKey(code),String(activeIndex));
}
function invalidBundle(){
  removeBundleNav();document.body.classList.add('patient-bundle-active');
  const root=document.getElementById('app');if(!root)return;
  root.innerHTML=`<div class="screen patient-bundle-invalid" lang="${isArabic()?'ar':'en'}" dir="${isArabic()?'rtl':'ltr'}"><button type="button" class="patient-language-toggle" data-patient-language-toggle>${isArabic()?'English':'العربية'}</button><section class="detail"><h1>${text('This patient link is invalid','رابط المريض غير صالح')}</h1><p>${text('Ask the clinic to send a new link.','اطلب من العيادة إرسال رابط جديد.')}</p></section></div>`;
}
function renderChildRoute(route,bundleHash){
  history.replaceState(null,'',location.pathname+location.search+route);
  try{
    if(route.startsWith('#/patient/iron-')&&typeof window.handleIronRoute==='function')window.handleIronRoute();
    else previousRoute();
  }finally{
    history.replaceState(null,'',location.pathname+location.search+bundleHash);
  }
}
function renderBundle(code,index){
  const bundle=decode(code);if(!validateBundle(bundle)){invalidBundle();return false}
  const stored=Number(sessionStorage.getItem(activeKey(code)));
  activeIndex=Math.max(0,Math.min(Number.isInteger(index)?index:Number.isInteger(stored)?stored:0,bundle.t.length-1));
  const route=expandItem(bundle.t[activeIndex]);if(!route){invalidBundle();return false}
  document.body.classList.remove('physician-mode-active','vitd-patient-active','iron-patient-active','bp-patient-active');
  renderChildRoute(route,BUNDLE_ROUTE+code);
  document.body.classList.remove('physician-mode-active');bundleNav(bundle,code);return true;
}
function handleBundleRoute(){const code=currentBundleCode();if(!code){removeBundleNav();return false}return renderBundle(code,activeIndex)}

const previousRoute=window.route;
window.route=function(){if(routeIsBundle())return handleBundleRoute();removeBundleNav();return previousRoute.apply(this,arguments)};

function addCurrentTool(button){
  const link=currentExportLink(button),item=parsePatientLink(link);if(!item){alert('Generate the patient schedule first.');return}
  const wasEmpty=loadDraft().t.length===0,result=addItem(item);if(result.error){alert(result.error);return}
  if(result.duplicate)toast('This tool is already in the patient bundle.');
  if(wasEmpty)sessionStorage.setItem(CHOOSER_KEY,'1');
  location.hash='#/physician';
}
function switchBundleTool(index){
  const code=currentBundleCode(),bundle=decode(code);if(!validateBundle(bundle)||index<0||index>=bundle.t.length)return;
  activeIndex=index;renderBundle(code,index);window.scrollTo({top:0,behavior:'smooth'});
}
async function copyBundleLink(){
  const value=document.getElementById('patient-bundle-link')?.value||'';if(!value)return;
  try{await navigator.clipboard?.writeText(value);toast('Combined patient link copied')}
  catch(error){const input=document.getElementById('patient-bundle-link');input?.select();document.execCommand?.('copy');toast('Combined patient link copied')}
}

function observe(){
  const root=document.getElementById('app');
  if(root&&!appObserver){appObserver=new MutationObserver(()=>{if(routeIsBundle()){const code=currentBundleCode(),bundle=decode(code);if(validateBundle(bundle))setTimeout(()=>bundleNav(bundle,code),0)}else setTimeout(enhancePhysician,0)});appObserver.observe(root,{childList:true,subtree:true})}
  enhancePhysician();if(routeIsBundle())handleBundleRoute();
}

document.addEventListener('click',async event=>{
  const start=event.target.closest('[data-bundle-start]');if(start){saveDraft({v:1,t:[]});openChooser(start);return}
  const add=event.target.closest('[data-bundle-add]');if(add){openChooser(add);return}
  if(event.target.closest('[data-close-bundle-chooser]')){removeChooser();return}
  const choice=event.target.closest('[data-bundle-choose-tool]');if(choice){chooseTool(choice.dataset.bundleChooseTool);return}
  const remove=event.target.closest('[data-bundle-remove]');if(remove){removeItem(Number(remove.dataset.bundleRemove));renderBundleBuilder();return}
  if(event.target.closest('[data-bundle-clear]')){if(confirm('Clear this patient bundle?')){clearDraft();renderBundleBuilder()}return}
  if(event.target.closest('[data-bundle-open]')){const draft=loadDraft();if(draft.t.length)location.hash=BUNDLE_ROUTE+bundleCode(draft);return}
  if(event.target.closest('[data-bundle-copy]')){await copyBundleLink();return}
  if(event.target.closest('[data-bundle-add-bp]')){const result=addItem({k:'b'});if(result.error)alert(result.error);else{toast(result.duplicate?'BP readings are already in the bundle.':'BP readings added to the patient bundle.');renderBundleBuilder()}return}
  const current=event.target.closest('[data-bundle-add-current]');if(current){addCurrentTool(current);return}
  const toolButton=event.target.closest('[data-bundle-tool-index]');if(toolButton&&routeIsBundle()){switchBundleTool(Number(toolButton.dataset.bundleToolIndex));return}
});

document.addEventListener('click',event=>{
  if(!routeIsBundle())return;
  const languageButton=event.target.closest('[data-patient-language-toggle],[data-bp-language]');if(!languageButton)return;
  event.preventDefault();event.stopImmediatePropagation();
  localStorage.setItem(LANGUAGE_KEY,isArabic()?'en':'ar');renderBundle(currentBundleCode(),activeIndex);
},true);

document.addEventListener('keydown',event=>{
  const modal=document.getElementById('patient-bundle-chooser');if(!modal)return;
  if(event.key==='Escape'){event.preventDefault();removeChooser();return}
  if(event.key==='Tab'){
    const focusable=[...modal.querySelectorAll('button:not(:disabled),[href],input,[tabindex]:not([tabindex="-1"])')];if(!focusable.length)return;
    const first=focusable[0],last=focusable[focusable.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
  }
});
window.addEventListener('hashchange',()=>setTimeout(()=>{if(routeIsBundle())handleBundleRoute();else{removeBundleNav();enhancePhysician()}},0));
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',observe,{once:true});else observe();
})();
