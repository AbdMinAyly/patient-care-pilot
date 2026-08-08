// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const IV_ROUTE='#/patient/iron-iv/';
const DATE_PREFIX='pc_iron_dates_';
let observer=null;

function onIvPage(){return location.hash.startsWith(IV_ROUTE)}
function decode(value){
  try{
    const normalized=String(value).replace(/-/g,'+').replace(/_/g,'/');
    return JSON.parse(decodeURIComponent(escape(atob(normalized+'==='.slice((normalized.length+3)%4)))));
  }catch(error){return null}
}
function hash(value){
  let result=2166136261;
  for(let index=0;index<value.length;index+=1){
    result^=value.charCodeAt(index);
    result=Math.imul(result,16777619);
  }
  return (result>>>0).toString(36);
}
function date(value){return new Date(String(value)+'T12:00:00')}
function iso(value){return value.toISOString().slice(0,10)}
function addDays(value,days){const result=date(value);result.setDate(result.getDate()+days);return iso(result)}
function daysBetween(first,second){return Math.round((date(second)-date(first))/86400000)}
function originalDates(data){return Array.isArray(data?.i)?data.i.map(item=>item.date):[]}
function loadDates(code,data){
  const fallback=originalDates(data);
  try{
    const saved=JSON.parse(localStorage.getItem(DATE_PREFIX+hash(code)));
    return Array.isArray(saved)&&saved.length===fallback.length&&saved.every(item=>/^\d{4}-\d{2}-\d{2}$/.test(item))?saved:fallback;
  }catch(error){return fallback}
}
function saveDates(code,dates){localStorage.setItem(DATE_PREFIX+hash(code),JSON.stringify(dates))}
function currentCode(){return document.getElementById('app')?.dataset.ironCode||''}
function removeMinimums(root=document){
  if(!onIvPage())return;
  root.querySelectorAll?.('[data-pp-iv-date][min]').forEach(input=>input.removeAttribute('min'));
}
function rerender(){
  if(typeof window.handleIronRoute==='function')window.handleIronRoute();
  window.setTimeout(()=>removeMinimums(document),0);
}

/* Remove HTML date minimums as soon as IV visit cards are rendered. */
function startObserver(){
  const root=document.getElementById('app');
  if(!root||observer)return;
  observer=new MutationObserver(records=>{
    if(!onIvPage())return;
    for(const record of records){
      for(const node of record.addedNodes){
        if(!(node instanceof Element))continue;
        if(node.matches?.('[data-pp-iv-date]'))node.removeAttribute('min');
        removeMinimums(node);
      }
    }
  });
  observer.observe(root,{childList:true,subtree:true});
  removeMinimums(root);
}

/* Ensure the native picker never sees the old minimum before it opens. */
for(const eventName of ['pointerdown','touchstart','focusin']){
  document.addEventListener(eventName,event=>{
    const input=event.target instanceof Element?event.target.closest('[data-pp-iv-date]'):null;
    if(input)input.removeAttribute('min');
  },true);
}

/*
 * Replace the old restricted date-change handler. Any valid date is accepted.
 * Later visits keep their relative spacing by moving by the same number of days.
 */
document.addEventListener('change',event=>{
  const input=event.target instanceof Element?event.target.closest('[data-pp-iv-date]'):null;
  if(!input)return;
  event.stopImmediatePropagation();
  input.removeAttribute('min');

  const code=currentCode(),data=decode(code),index=Number(input.dataset.ppIvDate),newDate=input.value;
  if(!code||!data||data.kind!=='iv'||!Number.isInteger(index)||!/^\d{4}-\d{2}-\d{2}$/.test(newDate))return;

  const dates=loadDates(code,data);
  if(index<0||index>=dates.length)return;
  const shift=daysBetween(dates[index],newDate);
  if(!shift)return;

  const adjusted=[...dates];
  for(let i=index;i<adjusted.length;i+=1)adjusted[i]=addDays(adjusted[i],shift);
  saveDates(code,adjusted);
  rerender();
},true);

window.addEventListener('hashchange',()=>window.setTimeout(()=>{startObserver();removeMinimums(document)},0));
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',startObserver,{once:true});else startObserver();
})();
