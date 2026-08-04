// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const DRAFT_KEY='pc_patient_bundle_draft_v1';
const QUEUE_KEY='pc_patient_bundle_setup_queue_v2';
const REOPEN_KEY='pc_patient_bundle_reopen_chooser_v1';
const MAX_TOOLS=6;
const BUILDERS={v:'#/physician/vitamin-d',o:'#/physician/iron-oral',i:'#/physician/iron-iv',b:'#/physician/blood-pressure'};

function decode(value){
  try{
    const normalized=String(value).replace(/-/g,'+').replace(/_/g,'/');
    return JSON.parse(decodeURIComponent(escape(atob(normalized+'==='.slice((normalized.length+3)%4)))));
  }catch(error){return null}
}
function loadDraft(){
  try{
    const value=JSON.parse(sessionStorage.getItem(DRAFT_KEY));
    return value&&value.v===1&&Array.isArray(value.t)?value:{v:1,t:[]};
  }catch(error){return {v:1,t:[]}}
}
function saveDraft(draft){sessionStorage.setItem(DRAFT_KEY,JSON.stringify({v:1,t:(draft.t||[]).slice(0,MAX_TOOLS)}))}
function loadQueue(){
  try{
    const queue=JSON.parse(sessionStorage.getItem(QUEUE_KEY));
    return Array.isArray(queue)?queue.filter(kind=>BUILDERS[kind]):[];
  }catch(error){return []}
}
function saveQueue(queue){sessionStorage.setItem(QUEUE_KEY,JSON.stringify(queue.filter(kind=>BUILDERS[kind])))}
function compact(kind,data){
  if(kind==='v')return {k:'v',p:data};
  if(kind==='o')return {k:'o',p:{v:1,kind:'oral',f:data.f,u:data.u,ed:data.ed,g:data.g,w:data.w,s:data.s,r:data.r,c:data.c||''}};
  if(kind==='i')return {k:'i',p:{v:1,kind:'iv',p:data.p,t:data.t,g:data.g,r:data.r,c:data.c||'',preset:data.preset||'',i:(data.i||[]).map(item=>({date:item.date,mg:item.mg,ml:item.ml}))}};
  if(kind==='b')return {k:'b',p:data};
  return null;
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
function currentItem(button){
  const box=button.closest('.vitd-export');
  const value=box?.querySelector('#vitd-patient-link,#oral-link,#ivp-link,#bp-patient-link')?.value||'';
  return parsePatientLink(value);
}
function addItem(item){
  const draft=loadDraft();
  if(!item||!BUILDERS[item.k])return {error:'Generate the patient plan first.'};
  const key=JSON.stringify(item);
  if(draft.t.some(existing=>JSON.stringify(existing)===key))return {duplicate:true,draft};
  if(draft.t.length>=MAX_TOOLS)return {error:`A patient bundle can contain up to ${MAX_TOOLS} tools.`};
  draft.t.push(item);saveDraft(draft);return {draft};
}
function goToBuilder(kind){
  const next=BUILDERS[kind];
  if(!next){location.hash='#/physician';return}
  if(location.hash===next){if(typeof window.route==='function')window.route();return}
  location.hash=next;
}
function openChooserWhenReady(attempt=0){
  if(sessionStorage.getItem(REOPEN_KEY)!=='1'||location.hash!=='#/physician')return;
  const trigger=document.querySelector('[data-bundle-add],[data-bundle-start]');
  if(trigger){sessionStorage.removeItem(REOPEN_KEY);trigger.click();return}
  if(attempt<30)window.setTimeout(()=>openChooserWhenReady(attempt+1),50);
}

/*
 * Own the add-to-bundle action before the older delegated handler runs.
 * An active queue always advances directly to the next selected builder.
 * A standalone generated tool returns to Physician Mode and opens the chooser.
 */
document.addEventListener('click',event=>{
  const button=event.target instanceof Element?event.target.closest('[data-bundle-add-current]'):null;
  if(!button)return;
  event.preventDefault();
  event.stopImmediatePropagation();

  const item=currentItem(button);
  if(!item){alert('Generate the patient plan first.');return}
  const result=addItem(item);
  if(result.error){alert(result.error);return}

  const queue=loadQueue();
  const wasBundleFlow=queue.length>0;
  const index=queue.indexOf(item.k);
  if(index>=0)queue.splice(index,1);
  saveQueue(queue);

  if(typeof window.showToast==='function')window.showToast(result.duplicate?'This plan is already in the bundle.':'Plan added to the patient bundle.');

  if(wasBundleFlow){
    if(queue.length)goToBuilder(queue[0]);
    else location.hash='#/physician';
    return;
  }

  sessionStorage.setItem(REOPEN_KEY,'1');
  if(location.hash==='#/physician')openChooserWhenReady();
  else location.hash='#/physician';
},true);

window.addEventListener('hashchange',()=>window.setTimeout(()=>openChooserWhenReady(),0));
window.addEventListener('pageshow',()=>openChooserWhenReady());
})();