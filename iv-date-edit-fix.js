// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const IV_ROUTE='#/patient/iron-iv/';
const DATE_PREFIX='pc_iron_dates_';

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
function locale(){return localStorage.getItem('pc_patient_language')==='ar'?'ar-EG-u-ca-gregory':'en-US'}
function pretty(value){return new Intl.DateTimeFormat(locale(),{year:'numeric',month:'long',day:'numeric'}).format(date(value))}
function removeMinimums(){
  if(!onIvPage())return;
  document.querySelectorAll('[data-pp-iv-date][min]').forEach(input=>input.removeAttribute('min'));
}
function syncVisibleDates(dates,startIndex){
  for(let index=startIndex;index<dates.length;index+=1){
    const input=document.querySelector(`[data-pp-iv-date="${index}"]`);
    if(input){input.value=dates[index];input.removeAttribute('min')}
    const card=input?.closest('.iron-adjusted-dose-card');
    const visible=card?.querySelector('.iron-adjusted-complete strong');
    if(visible)visible.textContent=pretty(dates[index]);
  }
}

/* The old renderer adds a minimum. Strip it before Safari opens the picker. */
for(const eventName of ['pointerdown','touchstart','focusin']){
  document.addEventListener(eventName,event=>{
    const input=event.target instanceof Element?event.target.closest('[data-pp-iv-date]'):null;
    if(input)input.removeAttribute('min');
  },true);
}

/* Accept any valid date and update the current DOM without rerouting the page. */
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
  for(let cursor=index;cursor<adjusted.length;cursor+=1)adjusted[cursor]=addDays(adjusted[cursor],shift);
  saveDates(code,adjusted);
  syncVisibleDates(adjusted,index);
},true);

window.addEventListener('hashchange',()=>window.setTimeout(removeMinimums,0));
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>window.setTimeout(removeMinimums,0),{once:true});else window.setTimeout(removeMinimums,0);
})();
