// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const PATIENT_ROUTE_PREFIX='#/patient/';
const BUNDLE_ROUTE_PREFIX='#/patient/bundle/';
const IV_ROUTE_PREFIX='#/patient/iron-iv/';
const IV_DATE_PREFIX='pc_iron_dates_';
const SAFARI_ACTION_SELECTOR=[
  '[data-open-iron-expect]',
  '[data-close-iron-expect]',
  '[data-iron-expect-tab]',
  '[data-iron-expect-prev]',
  '[data-iron-expect-next]',
  '[data-patient-language-toggle]',
  '[data-patient-share]',
  '[data-patient-copy]',
  '[data-pp-reset-iv-dates]',
  '[data-iv-date-apply]'
].join(',');
const pendingTouches=new WeakMap();
const MONTHS={
  en:['January','February','March','April','May','June','July','August','September','October','November','December'],
  ar:['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']
};

function onPatientRoute(){return location.hash.startsWith(PATIENT_ROUTE_PREFIX)}
function onBundleRoute(){return location.hash.startsWith(BUNDLE_ROUTE_PREFIX)}
function onIvRoute(){return location.hash.startsWith(IV_ROUTE_PREFIX)}
function language(){return localStorage.getItem('pc_patient_language')==='ar'?'ar':'en'}
function isArabic(){return language()==='ar'}
function eventElement(target){
  if(target instanceof Element)return target;
  return target&&target.parentElement instanceof Element?target.parentElement:null;
}
function patientAction(target){return eventElement(target)?.closest(SAFARI_ACTION_SELECTOR)||null}
function bundleOwnsLanguage(control){return onBundleRoute()&&control.matches('[data-patient-language-toggle]')}
function removeInactiveOverlays(){
  if(!document.body.classList.contains('iron-expect-open'))document.getElementById('iron-expectations-modal')?.remove();
  if(!document.body.classList.contains('patient-bundle-modal-open'))document.getElementById('patient-bundle-chooser')?.remove();
  if(!document.body.classList.contains('bp-install-help-open'))document.getElementById('bp-install-help')?.remove();
}
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
function parseIso(value){
  const match=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value||''));
  if(!match)return null;
  return {year:Number(match[1]),month:Number(match[2]),day:Number(match[3])};
}
function pad(value){return String(value).padStart(2,'0')}
function makeIso(year,month,day){return `${year}-${pad(month)}-${pad(day)}`}
function daysInMonth(year,month){return new Date(year,month,0).getDate()}
function ivCode(){return document.getElementById('app')?.dataset.ironCode||location.hash.slice(IV_ROUTE_PREFIX.length)}
function originalDates(data){return Array.isArray(data?.i)?data.i.map(item=>item.date):[]}
function loadDates(code,data){
  const fallback=originalDates(data);
  try{
    const saved=JSON.parse(localStorage.getItem(IV_DATE_PREFIX+hash(code)));
    return Array.isArray(saved)&&saved.length===fallback.length&&saved.every(item=>/^\d{4}-\d{2}-\d{2}$/.test(item))?saved:fallback;
  }catch(error){return fallback}
}
function saveDates(code,dates){localStorage.setItem(IV_DATE_PREFIX+hash(code),JSON.stringify(dates))}
function prettyDate(value){
  return new Intl.DateTimeFormat(isArabic()?'ar-EG-u-ca-gregory':'en-US',{year:'numeric',month:'long',day:'numeric'}).format(date(value));
}
function toast(message){if(typeof window.showToast==='function')window.showToast(message)}
function option(value,label,selected){return `<option value="${value}" ${Number(value)===Number(selected)?'selected':''}>${label}</option>`}
function yearOptions(selected){
  const current=new Date().getFullYear();
  const first=Math.min(current-5,Number(selected)-5);
  const last=Math.max(current+10,Number(selected)+10);
  let html='';
  for(let year=first;year<=last;year+=1)html+=option(year,year,selected);
  return html;
}
function monthOptions(selected){return MONTHS[language()].map((name,index)=>option(index+1,name,selected)).join('')}
function dayOptions(year,month,selected){
  const maximum=daysInMonth(year,month);
  const day=Math.min(Math.max(1,Number(selected)||1),maximum);
  let html='';
  for(let value=1;value<=maximum;value+=1)html+=option(value,value,day);
  return html;
}
function editorHtml(index,value){
  const parts=parseIso(value);
  if(!parts)return '';
  return `<div class="pc-iv-date-editor" data-iv-date-editor="${index}">
    <label class="pc-iv-date-field"><span>${isArabic()?'اليوم':'Day'}</span><select data-iv-date-day>${dayOptions(parts.year,parts.month,parts.day)}</select></label>
    <label class="pc-iv-date-field"><span>${isArabic()?'الشهر':'Month'}</span><select data-iv-date-month>${monthOptions(parts.month)}</select></label>
    <label class="pc-iv-date-field"><span>${isArabic()?'السنة':'Year'}</span><select data-iv-date-year>${yearOptions(parts.year)}</select></label>
    <button type="button" class="btn ghost pc-iv-date-apply" data-iv-date-apply>${isArabic()?'تحديث التاريخ':'Update date'}</button>
  </div>`;
}
function enhanceIvDateEditors(){
  if(!onIvRoute())return;
  document.querySelectorAll('[data-pp-iv-date]').forEach(input=>{
    const wrapper=input.closest('.iron-adjusted-date');
    if(!wrapper||wrapper.querySelector('[data-iv-date-editor]'))return;
    input.removeAttribute('min');
    input.hidden=true;
    input.tabIndex=-1;
    input.setAttribute('aria-hidden','true');
    input.insertAdjacentHTML('afterend',editorHtml(input.dataset.ppIvDate,input.value));
  });
}
function refreshDaySelect(editor){
  const day=editor.querySelector('[data-iv-date-day]');
  const month=editor.querySelector('[data-iv-date-month]');
  const year=editor.querySelector('[data-iv-date-year]');
  if(!day||!month||!year)return;
  const selected=Math.min(Number(day.value)||1,daysInMonth(Number(year.value),Number(month.value)));
  day.innerHTML=dayOptions(Number(year.value),Number(month.value),selected);
}
function setEditorDate(editor,value){
  const parts=parseIso(value);
  if(!parts||!editor)return;
  const day=editor.querySelector('[data-iv-date-day]');
  const month=editor.querySelector('[data-iv-date-month]');
  const year=editor.querySelector('[data-iv-date-year]');
  if(!day||!month||!year)return;
  year.innerHTML=yearOptions(parts.year);
  month.innerHTML=monthOptions(parts.month);
  day.innerHTML=dayOptions(parts.year,parts.month,parts.day);
}
function syncIvDates(dates,startIndex){
  for(let index=startIndex;index<dates.length;index+=1){
    const input=document.querySelector(`[data-pp-iv-date="${index}"]`);
    if(input)input.value=dates[index];
    const editor=document.querySelector(`[data-iv-date-editor="${index}"]`);
    setEditorDate(editor,dates[index]);
    const visible=input?.closest('.iron-adjusted-dose-card')?.querySelector('.iron-adjusted-complete strong');
    if(visible)visible.textContent=prettyDate(dates[index]);
  }
}
function applyIvDate(control){
  const editor=control.closest('[data-iv-date-editor]');
  if(!editor)return;
  const code=ivCode(),data=decode(code),index=Number(editor.dataset.ivDateEditor);
  if(!code||!data||data.kind!=='iv'||!Number.isInteger(index))return;
  const day=Number(editor.querySelector('[data-iv-date-day]')?.value);
  const month=Number(editor.querySelector('[data-iv-date-month]')?.value);
  const year=Number(editor.querySelector('[data-iv-date-year]')?.value);
  if(!day||!month||!year)return;
  const selectedDay=Math.min(day,daysInMonth(year,month));
  const newDate=makeIso(year,month,selectedDay);
  const dates=loadDates(code,data);
  if(index<0||index>=dates.length)return;
  const shift=daysBetween(dates[index],newDate);
  if(!shift){setEditorDate(editor,newDate);return}
  const adjusted=[...dates];
  for(let cursor=index;cursor<adjusted.length;cursor+=1)adjusted[cursor]=addDays(adjusted[cursor],shift);
  saveDates(code,adjusted);
  syncIvDates(adjusted,index);
  toast(isArabic()?'تم تحديث التاريخ.':'Date updated.');
}
function scheduleEnhance(){window.setTimeout(enhanceIvDateEditors,0)}

/*
 * WebKit can report a text node as the target of a synthesized tap. The
 * patient-page delegate expects Element.closest(), so retarget those taps to
 * the actual button before the bubbling listener runs.
 */
document.addEventListener('click',event=>{
  if(!onPatientRoute())return;
  const control=patientAction(event.target);
  if(!control)return;
  pendingTouches.delete(control);
  if(bundleOwnsLanguage(control))return;
  if(event.__pcSafariRetargeted||event.target===control||event.target instanceof Element)return;
  event.preventDefault();
  event.stopImmediatePropagation();
  const replacement=new MouseEvent('click',{bubbles:true,cancelable:true,view:window});
  Object.defineProperty(replacement,'__pcSafariRetargeted',{value:true});
  control.dispatchEvent(replacement);
},true);

/*
 * iOS can suppress the synthetic click after a touch sequence. Only create a
 * fallback click when no click arrived for the same control. Bundle language
 * is excluded because patient-bundle.js handles it synchronously and exactly
 * once; a fallback click would toggle the language back.
 */
document.addEventListener('touchend',event=>{
  if(!onPatientRoute())return;
  const control=patientAction(event.target);
  if(!control||bundleOwnsLanguage(control))return;
  const token={};
  pendingTouches.set(control,token);
  window.setTimeout(()=>{
    if(pendingTouches.get(control)!==token||!control.isConnected)return;
    pendingTouches.delete(control);
    control.click();
  },320);
},{capture:true,passive:true});

/* Keep day choices valid when month or year changes. */
document.addEventListener('change',event=>{
  const target=eventElement(event.target);
  const datePart=target?.closest('[data-iv-date-month],[data-iv-date-year]');
  if(datePart)refreshDaySelect(datePart.closest('[data-iv-date-editor]'));
  if(target?.closest('[data-pp-iv-dose]'))scheduleEnhance();
});

/* Apply dates without invoking Safari's native date viewer. */
document.addEventListener('click',event=>{
  const target=eventElement(event.target);
  const apply=target?.closest('[data-iv-date-apply]');
  if(apply){event.preventDefault();applyIvDate(apply);return}
  if(target?.closest('[data-patient-language-toggle],[data-pp-reset-iv-dates]'))scheduleEnhance();
});

window.addEventListener('pageshow',()=>{removeInactiveOverlays();scheduleEnhance()});
window.addEventListener('hashchange',()=>{window.setTimeout(removeInactiveOverlays,0);scheduleEnhance()});
document.addEventListener('visibilitychange',()=>{if(!document.hidden){removeInactiveOverlays();scheduleEnhance()}});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{removeInactiveOverlays();scheduleEnhance()},{once:true});else{removeInactiveOverlays();scheduleEnhance()}
})();
