// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const BUNDLE_ROUTE='#/patient/bundle/';
const DRAFT_KEY='pc_patient_bundle_draft_v1';
const LANGUAGE_KEY='pc_patient_language';
const MAX_TOOLS=6;
const TOOLS={
  v:{en:'Vitamin D',ar:'فيتامين د',short:'D',builder:'#/physician/vitamin-d'},
  o:{en:'Iron tablets',ar:'حبوب الحديد',short:'Fe',builder:'#/physician/iron-oral'},
  i:{en:'IV iron',ar:'الحديد الوريدي',short:'IV',builder:'#/physician/iron-iv'},
  b:{en:'BP readings',ar:'قراءات الضغط',short:'BP',builder:null}
};
let activeIndex=0;
let observer=null;
let enhancing=false;

function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function encode(v){return btoa(unescape(encodeURIComponent(JSON.stringify(v)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function decode(v){try{const s=String(v).replace(/-/g,'+').replace(/_/g,'/');return JSON.parse(decodeURIComponent(escape(atob(s+'==='.slice((s.length+3)%4)))))}catch(e){return null}}
function date(v){return new Date(String(v)+'T12:00:00')}
function iso(v){return v.toISOString().slice(0,10)}
function addDays(v,n){const d=date(v);d.setDate(d.getDate()+n);return iso(d)}
function isArabic(){return localStorage.getItem(LANGUAGE_KEY)==='ar'}
function text(en,ar){return isArabic()?ar:en}
function toast(message){if(typeof window.showToast==='function')window.showToast(message)}
function loadDraft(){try{const v=JSON.parse(sessionStorage.getItem(DRAFT_KEY));return v&&v.v===1&&Array.isArray(v.t)?v:{v:1,t:[]}}catch(e){return {v:1,t:[]}}}
function saveDraft(draft){sessionStorage.setItem(DRAFT_KEY,JSON.stringify({v:1,t:(draft.t||[]).slice(0,MAX_TOOLS)}))}
function clearDraft(){sessionStorage.removeItem(DRAFT_KEY)}
function itemKey(item){return JSON.stringify(item)}
function addItem(item){
  const draft=loadDraft();
  if(!item||!TOOLS[item.k])return {error:'This patient tool could not be added.'};
  if(draft.t.some(x=>itemKey(x)===itemKey(item))||item.k==='b'&&draft.t.some(x=>x.k==='b'))return {draft,duplicate:true};
  if(draft.t.length>=MAX_TOOLS)return {error:`A patient bundle can contain up to ${MAX_TOOLS} tools.`};
  draft.t.push(item);saveDraft(draft);return {draft};
}
function removeItem(index){const draft=loadDraft();draft.t.splice(index,1);saveDraft(draft)}
function compactTool(kind,data){
  if(kind==='v')return {k:'v',p:data};
  if(kind==='o')return {k:'o',p:{v:1,kind:'oral',f:data.f,u:data.u,ed:data.ed,g:data.g,w:data.w,s:data.s,r:data.r,c:data.c||''}};
  if(kind==='i')return {k:'i',p:{v:1,kind:'iv',p:data.p,t:data.t,g:data.g,r:data.r,c:data.c||'',preset:data.preset||'',i:(data.i||[]).map(x=>({date:x.date,mg:x.mg,ml:x.ml}))}};
  if(kind==='b')return {k:'b'};
  return null;
}
function expandItem(item){
  if(item.k==='b')return '#/patient/blood-pressure';
  const data={...(item.p||{})};
  if(item.k==='o'&&!Array.isArray(data.d)){
    const gap=Number(data.g)||1,weeks=Number(data.w)||0,count=Math.floor((weeks*7-1)/gap)+1;
    data.d=Array.from({length:Math.max(0,count)},(_,i)=>addDays(data.s,i*gap));
  }
  const code=encode(data);
  return item.k==='v'?'#/patient/vitamin-d/'+code:item.k==='o'?'#/patient/iron-oral/'+code:item.k==='i'?'#/patient/iron-iv/'+code:'';
}
function parsePatientLink(value){
  try{
    const route=new URL(value,location.href).hash;
    if(route==='#/patient/blood-pressure')return {k:'b'};
    for(const [prefix,kind] of [['#/patient/vitamin-d/','v'],['#/patient/iron-oral/','o'],['#/patient/iron-iv/','i']]){
      if(route.startsWith(prefix)){const data=decode(route.slice(prefix.length));return data?compactTool(kind,data):null}
    }
  }catch(e){}
  return null;
}
function bundleCode(draft){return encode({v:1,t:draft.t})}
function bundleUrl(draft){return location.origin+location.pathname+location.search+BUNDLE_ROUTE+bundleCode(draft)}
function labels(items){const total={},seen={};items.forEach(x=>total[x.k]=(total[x.k]||0)+1);return items.map(x=>{seen[x.k]=(seen[x.k]||0)+1;const name=isArabic()?TOOLS[x.k].ar:TOOLS[x.k].en;return name+(total[x.k]>1?` ${seen[x.k]}`:'')})}

function closeChooser(){document.getElementById('patient-bundle-chooser')?.remove();document.body.classList.remove('patient-bundle-modal-open')}
function openChooser(){
  closeChooser();
  const draft=loadDraft(),modal=document.createElement('div');
  modal.id='patient-bundle-chooser';modal.className='patient-bundle-modal';
  modal.innerHTML=`<div class="patient-bundle-backdrop" data-close-bundle-chooser></div><section class="patient-bundle-dialog" role="dialog" aria-modal="true" aria-labelledby="bundle-title"><button type="button" class="patient-bundle-close" data-close-bundle-chooser aria-label="Close">×</button><p class="eyebrow">PATIENT BUNDLE</p><h2 id="bundle-title">Choose a patient tool</h2><p>Schedule tools open their clinician builder first. Blood pressure can be added immediately.</p><div class="patient-bundle-tool-grid">${Object.entries(TOOLS).map(([kind,tool])=>`<button type="button" data-bundle-choose-tool="${kind}" ${kind==='b'&&draft.t.some(x=>x.k==='b')?'disabled':''}><span>${esc(tool.short)}</span><strong>${esc(tool.en)}</strong><small>${kind==='b'?'Add immediately':'Build and confirm first'}</small></button>`).join('')}</div></section>`;
  document.body.appendChild(modal);document.body.classList.add('patient-bundle-modal-open');
  modal.querySelector('[data-bundle-choose-tool]:not(:disabled)')?.focus();
}
function chooseTool(kind){
  const tool=TOOLS[kind];if(!tool)return;
  closeChooser();
  if(kind==='b'){
    const result=addItem({k:'b'});if(result.error)alert(result.error);else renderBuilder();return;
  }
  location.hash=tool.builder;
}
function qr(container,url){try{const code=qrcode(0,'L');code.addData(url);code.make();container.innerHTML=code.createSvgTag({cellSize:4,margin:4,scalable:true})}catch(e){container.textContent='Use the patient link.'}}
function renderBuilder(){
  if(location.hash!=='#/physician')return;
  const screen=document.querySelector('.physician-screen'),grid=screen?.querySelector('.physician-tool-grid');if(!screen||!grid)return;
  const draft=loadDraft(),signature=JSON.stringify(draft),existing=document.getElementById('patient-bundle-builder');
  if(existing?.dataset.signature===signature)return;
  const section=existing||document.createElement('section');section.id='patient-bundle-builder';section.className='patient-bundle-builder';section.dataset.signature=signature;
  if(!draft.t.length){
    section.innerHTML=`<div><p class="eyebrow">ONE LINK FOR THE PATIENT</p><h2>Patient tool bundle</h2><p>Combine several confirmed tools into one QR code and one patient link.</p></div><button type="button" class="btn dr" data-bundle-start>Start a patient bundle</button>`;
  }else{
    const names=labels(draft.t),url=bundleUrl(draft);
    section.innerHTML=`<div class="patient-bundle-title"><div><p class="eyebrow">PATIENT BUNDLE</p><h2>${draft.t.length} tool${draft.t.length===1?'':'s'} in one link</h2><p>The patient can switch between the selected tools.</p></div><button type="button" class="btn ghost danger" data-bundle-clear>Clear bundle</button></div><div class="patient-bundle-items">${draft.t.map((item,i)=>`<article class="patient-bundle-item"><span>${esc(TOOLS[item.k].short)}</span><strong>${esc(names[i])}</strong><button type="button" data-bundle-remove="${i}" aria-label="Remove ${esc(names[i])}">×</button></article>`).join('')}</div><div class="patient-bundle-handoff"><div id="patient-bundle-qr" class="vitd-qr"></div><div><label class="vitd-link-label">Combined patient link<input id="patient-bundle-link" readonly value="${esc(url)}"></label><div class="patient-bundle-actions"><button type="button" class="btn dr" data-bundle-open>Open combined patient page</button><button type="button" class="btn ghost" data-bundle-copy>Copy combined link</button><button type="button" class="btn ghost" data-bundle-add>Add another tool</button></div></div></div>`;
    requestAnimationFrame(()=>{const target=document.getElementById('patient-bundle-qr');if(target)qr(target,url)});
  }
  if(!existing)screen.insertBefore(section,grid);
}
function enhanceBp(){
  if(location.hash!=='#/physician')return;
  const actions=document.querySelector('[data-bp-physician-card] .bp-physician-actions');if(!actions||actions.querySelector('[data-bundle-add-bp]'))return;
  const button=document.createElement('button');button.type='button';button.className='btn ghost';button.dataset.bundleAddBp='1';button.textContent='Add to patient bundle';actions.appendChild(button);
}
function enhanceExports(){
  for(const box of [document.getElementById('vitd-export'),document.getElementById('oral-export'),document.getElementById('ivp-export')].filter(Boolean)){
    if(box.hidden)continue;const actions=box.querySelector('.vitd-export-actions');if(!actions||actions.querySelector('[data-bundle-add-current]'))continue;
    const button=document.createElement('button');button.type='button';button.className='btn ghost';button.dataset.bundleAddCurrent='1';button.textContent='Add to patient bundle';actions.appendChild(button);
  }
}
function enhance(){if(enhancing)return;enhancing=true;try{renderBuilder();enhanceBp();enhanceExports()}finally{enhancing=false}}

function removeNav(){document.getElementById('patient-bundle-nav')?.remove();document.body.classList.remove('patient-bundle-active')}
function validBundle(bundle){return bundle&&bundle.v===1&&Array.isArray(bundle.t)&&bundle.t.length&&bundle.t.length<=MAX_TOOLS&&bundle.t.every(x=>x&&TOOLS[x.k]&&expandItem(x))}
function renderChild(route,bundleHash){
  history.replaceState(null,'',location.pathname+location.search+route);
  try{if(route.startsWith('#/patient/iron-')&&typeof window.handleIronRoute==='function')window.handleIronRoute();else previousRoute()}finally{history.replaceState(null,'',location.pathname+location.search+bundleHash)}
}
function renderBundle(code,index){
  const bundle=decode(code);if(!validBundle(bundle))return false;
  activeIndex=Math.max(0,Math.min(Number.isInteger(index)?index:activeIndex,bundle.t.length-1));
  const route=expandItem(bundle.t[activeIndex]);renderChild(route,BUNDLE_ROUTE+code);
  removeNav();document.body.classList.add('patient-bundle-active');
  const nav=document.createElement('nav'),names=labels(bundle.t);nav.id='patient-bundle-nav';nav.className='patient-bundle-nav';
  nav.innerHTML=bundle.t.map((item,i)=>`<button type="button" data-bundle-tool-index="${i}" class="${i===activeIndex?'active':''}" aria-current="${i===activeIndex?'page':'false'}"><span>${esc(TOOLS[item.k].short)}</span><strong>${esc(names[i])}</strong></button>`).join('');
  document.body.appendChild(nav);return true;
}
function routeIsBundle(){return location.hash.startsWith(BUNDLE_ROUTE)}
const previousRoute=window.route;
window.route=function(){if(routeIsBundle())return renderBundle(location.hash.slice(BUNDLE_ROUTE.length),activeIndex);removeNav();const result=previousRoute.apply(this,arguments);requestAnimationFrame(enhance);return result};

async function copyLink(){const input=document.getElementById('patient-bundle-link');if(!input)return;try{await navigator.clipboard.writeText(input.value);toast('Combined patient link copied')}catch(e){input.select();document.execCommand?.('copy');toast('Combined patient link copied')}}
function addCurrent(button){const box=button.closest('.vitd-export'),value=box?.querySelector('#vitd-patient-link,#oral-link,#ivp-link')?.value||'',item=parsePatientLink(value);if(!item){alert('Generate the patient schedule first.');return}const result=addItem(item);if(result.error)alert(result.error);else location.hash='#/physician'}

document.addEventListener('click',async event=>{
  if(event.target.closest('[data-bundle-start],[data-bundle-add]')){openChooser();return}
  if(event.target.closest('[data-close-bundle-chooser]')){closeChooser();return}
  const choice=event.target.closest('[data-bundle-choose-tool]');if(choice){chooseTool(choice.dataset.bundleChooseTool);return}
  const remove=event.target.closest('[data-bundle-remove]');if(remove){removeItem(Number(remove.dataset.bundleRemove));renderBuilder();return}
  if(event.target.closest('[data-bundle-clear]')){if(confirm('Clear this patient bundle?')){clearDraft();renderBuilder()}return}
  if(event.target.closest('[data-bundle-open]')){const draft=loadDraft();if(draft.t.length)location.hash=BUNDLE_ROUTE+bundleCode(draft);return}
  if(event.target.closest('[data-bundle-copy]')){await copyLink();return}
  if(event.target.closest('[data-bundle-add-bp]')){const result=addItem({k:'b'});if(result.error)alert(result.error);else{toast(result.duplicate?'BP readings are already in the bundle.':'BP readings added to the patient bundle.');renderBuilder()}return}
  const current=event.target.closest('[data-bundle-add-current]');if(current){addCurrent(current);return}
  const tool=event.target.closest('[data-bundle-tool-index]');if(tool&&routeIsBundle()){renderBundle(location.hash.slice(BUNDLE_ROUTE.length),Number(tool.dataset.bundleToolIndex));window.scrollTo({top:0,behavior:'smooth'});return}
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.getElementById('patient-bundle-chooser'))closeChooser()});
window.addEventListener('hashchange',()=>setTimeout(()=>{if(routeIsBundle())renderBundle(location.hash.slice(BUNDLE_ROUTE.length),activeIndex);else enhance()},0));
function start(){const root=document.getElementById('app');if(root&&!observer){observer=new MutationObserver(()=>requestAnimationFrame(enhance));observer.observe(root,{childList:true,subtree:true})}enhance();if(routeIsBundle())renderBundle(location.hash.slice(BUNDLE_ROUTE.length),activeIndex)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();