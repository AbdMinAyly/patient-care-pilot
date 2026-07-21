// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';
const IV_ROUTE='#/patient/iron-iv/';
const PROGRESS_PREFIX='pc_iron_progress_';
const DATE_PREFIX='pc_iron_dates_';

function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function decode(v){try{const s=String(v).replace(/-/g,'+').replace(/_/g,'/');return JSON.parse(decodeURIComponent(escape(atob(s+'==='.slice((s.length+3)%4)))))}catch(e){return null}}
function hash(code){let h=2166136261;for(let i=0;i<code.length;i++){h^=code.charCodeAt(i);h=Math.imul(h,16777619)}return (h>>>0).toString(36)}
function date(v){return new Date(String(v)+'T12:00:00')}
function iso(v){return v.toISOString().slice(0,10)}
function addDays(v,n){const x=date(v);x.setDate(x.getDate()+n);return iso(x)}
function daysBetween(a,b){return Math.round((date(b)-date(a))/86400000)}
function pretty(v){return date(v).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'})}
function progressKey(code){return PROGRESS_PREFIX+hash(code)}
function dateKey(code){return DATE_PREFIX+hash(code)}
function loadDone(code){try{return new Set(JSON.parse(localStorage.getItem(progressKey(code)))||[])}catch(e){return new Set()}}
function saveDone(code,set){localStorage.setItem(progressKey(code),JSON.stringify([...set]))}
function originalDates(data){return data.i.map(x=>x.date)}
function loadDates(code,data){
  const fallback=originalDates(data);
  try{
    const saved=JSON.parse(localStorage.getItem(dateKey(code)));
    return Array.isArray(saved)&&saved.length===fallback.length&&saved.every(x=>/^\d{4}-\d{2}-\d{2}$/.test(x))?saved:fallback;
  }catch(e){return fallback}
}
function saveDates(code,dates){localStorage.setItem(dateKey(code),JSON.stringify(dates))}
function minDateFor(index,data,dates){
  if(index===0)return data.i[0].date;
  const originalGap=Math.max(0,daysBetween(data.i[index-1].date,data.i[index].date));
  return addDays(dates[index-1],originalGap);
}
function toast(message){if(typeof window.showToast==='function')window.showToast(message)}
function shiftDates(data,dates,index,newValue){
  const minimum=minDateFor(index,data,dates);
  if(newValue<minimum)return {error:'That date is earlier than the permitted adjusted schedule.'};
  const shift=daysBetween(dates[index],newValue);
  if(!shift)return {dates:[...dates],shift:0};
  const adjusted=[...dates];
  for(let i=index;i<adjusted.length;i++)adjusted[i]=addDays(adjusted[i],shift);
  return {dates:adjusted,shift};
}

function renderIvPatient(code){
  const data=decode(code),root=document.getElementById('app');
  document.body.classList.add('iron-patient-active');
  document.body.classList.remove('physician-mode-active','vitd-patient-active');
  if(!root)return;
  if(!data||data.v!==1||data.kind!=='iv'||!Array.isArray(data.i)){
    root.innerHTML='<div class="screen"><section class="detail"><h1>This iron schedule link is invalid</h1><p>Ask the clinic to generate a new link.</p></section></div>';
    return;
  }
  const dates=loadDates(code,data),done=loadDone(code);
  const cards=data.i.map((dose,index)=>{
    const completed=done.has(String(index));
    const minimum=minDateFor(index,data,dates);
    return `<article class="vitd-dose-card iron-adjusted-dose-card ${completed?'done':''}"><label class="iron-adjusted-complete"><input type="checkbox" data-adjusted-iron-dose="${index}" ${completed?'checked':''}><span class="vitd-dose-check">${completed?'✓':''}</span><span><small>Infusion ${index+1}</small><strong>${pretty(dates[index])}</strong><em>${dose.mg} mg IV iron${dose.ml!=null?` · ${dose.ml} mL`:''}</em></span></label><label class="iron-adjusted-date"><span>${completed?'Actual appointment date':'Planned appointment date'}</span><input type="date" data-adjusted-iron-date="${index}" value="${dates[index]}" min="${minimum}"></label></article>`;
  }).join('');
  root.innerHTML=`<div class="vitd-patient-page iron-patient-page"><header class="vitd-journey-hero iron-journey"><div class="iron-orbit" aria-hidden="true">Fe</div><p class="eyebrow">YOUR IRON JOURNEY</p><h1>IV iron appointments</h1><p>${data.c?esc(data.c)+' prepared this schedule. ':''}Mark each completed infusion and correct the appointment date if it occurred later than planned.</p></header><main class="vitd-journey-main"><section class="iron-summary-card"><small>TOTAL PLANNED IV IRON</small><h2>${data.t} mg</h2><p>${esc(data.p)} · ${data.i.length} infusion${data.i.length===1?'':'s'}${data.i.length>1&&data.g?` · ${data.g}-day planned interval`:''}</p></section><section class="vitd-phase"><div class="vitd-phase-head"><span>Fe</span><div><small>INFUSION SCHEDULE</small><h2>Confirm completion and appointment dates</h2></div></div><p class="iron-date-help">Changing an appointment to a later date shifts that appointment and every later infusion by the same number of days. Adjustments are saved only on this device.</p><div class="vitd-dose-list">${cards}</div></section><section class="vitd-repeat"><span>🧪</span><div><small>REPEAT LABORATORY REVIEW</small><h2>${pretty(data.r)}</h2><p>Confirm the laboratory date with the clinic when infusion dates change. Do not continue, stop, or change treatment unless instructed.</p></div></section><section class="vitd-save-card"><h2>Save this schedule</h2><div class="vitd-save-actions"><button class="btn dr" data-share-adjusted-iron>Share or save link</button><button class="btn ghost" data-copy-adjusted-iron>Copy link</button><button class="btn ghost" data-reset-adjusted-iron>Reset adjusted dates</button></div><details><summary>Add to your Home Screen</summary><div class="vitd-home-help"><p><strong>iPhone:</strong> Safari → Share → Add to Home Screen.</p><p><strong>Android:</strong> Chrome menu → Add to Home screen.</p></div></details></section><aside class="vitd-patient-safety"><strong>Use only the confirmed schedule.</strong><p>IV iron must be administered by the designated clinical service. Seek urgent help for breathing difficulty, facial swelling, fainting, or a severe reaction.</p></aside></main></div>`;
  root.dataset.ironCode=code;
}

function handlePatientRoute(){
  const h=location.hash||'';
  if(!h.startsWith(IV_ROUTE))return false;
  renderIvPatient(h.slice(IV_ROUTE.length));
  return true;
}

const previousRoute=window.handleIronRoute;
window.handleIronRoute=function(){
  if(handlePatientRoute())return true;
  return typeof previousRoute==='function'?previousRoute():false;
};

document.addEventListener('change',event=>{
  const checkbox=event.target.closest?.('[data-adjusted-iron-dose]');
  if(checkbox){
    const code=document.getElementById('app')?.dataset.ironCode;if(!code)return;
    const done=loadDone(code),id=checkbox.dataset.adjustedIronDose;
    checkbox.checked?done.add(id):done.delete(id);saveDone(code,done);renderIvPatient(code);return;
  }
  const input=event.target.closest?.('[data-adjusted-iron-date]');
  if(input){
    const code=document.getElementById('app')?.dataset.ironCode,data=decode(code),index=Number(input.dataset.adjustedIronDate);
    if(!code||!data||!Number.isInteger(index)||!input.value)return;
    const dates=loadDates(code,data),result=shiftDates(data,dates,index,input.value);
    if(result.error){input.value=dates[index];toast(result.error);return}
    if(!result.shift)return;
    saveDates(code,result.dates);renderIvPatient(code);toast('This and all later infusion dates were adjusted.');
  }
});

document.addEventListener('click',async event=>{
  const code=document.getElementById('app')?.dataset.ironCode;
  if(event.target.closest('[data-reset-adjusted-iron]')&&code){localStorage.removeItem(dateKey(code));renderIvPatient(code);toast('Appointment dates reset.');return}
  if(event.target.closest('[data-copy-adjusted-iron]')){await navigator.clipboard?.writeText(location.href);toast('Schedule link copied');return}
  if(event.target.closest('[data-share-adjusted-iron]')){
    if(navigator.share)await navigator.share({title:'Iron Journey',text:'Open the clinician-confirmed IV iron schedule',url:location.href});
    else{await navigator.clipboard?.writeText(location.href);toast('Schedule link copied')}
  }
});

window.addEventListener('hashchange',()=>setTimeout(handlePatientRoute,0));
handlePatientRoute();
})();
