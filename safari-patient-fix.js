// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const PATIENT_ROUTE_PREFIX='#/patient/';
const BUNDLE_ROUTE_PREFIX='#/patient/bundle/';
const IV_ROUTE_PREFIX='#/patient/iron-iv/';
const IV_DATE_PREFIX='pc_iron_dates_';
const IS_IPHONE=/iPhone|iPod/.test(navigator.userAgent||'');
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
  '[data-iv-date-open]',
  '[data-iv-calendar-prev]',
  '[data-iv-calendar-next]',
  '[data-iv-calendar-day]',
  '[data-iv-calendar-close]'
].join(',');
const pendingTouches=new WeakMap();
const WEEKDAYS={
  en:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
  ar:['أحد','اثن','ثلا','أرب','خمي','جمع','سبت']
};
let calendarState=null;

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
function monthTitle(year,month){
  return new Intl.DateTimeFormat(isArabic()?'ar-EG-u-ca-gregory':'en-US',{year:'numeric',month:'long'}).format(new Date(year,month-1,1));
}
function toast(message){if(typeof window.showToast==='function')window.showToast(message)}

function removeInactiveOverlays(){
  if(!document.body.classList.contains('iron-expect-open'))document.getElementById('iron-expectations-modal')?.remove();
  if(!document.body.classList.contains('patient-bundle-modal-open'))document.getElementById('patient-bundle-chooser')?.remove();
  if(!document.body.classList.contains('bp-install-help-open'))document.getElementById('bp-install-help')?.remove();
  if(!document.body.classList.contains('pc-iv-calendar-open'))document.getElementById('pc-iv-calendar')?.remove();
}

function syncIvDates(dates,startIndex){
  for(let index=startIndex;index<dates.length;index+=1){
    const input=document.querySelector(`[data-pp-iv-date="${index}"]`);
    if(input){input.value=dates[index];input.removeAttribute('min')}
    const open=document.querySelector(`[data-iv-date-open="${index}"]`);
    if(open){
      open.dataset.value=dates[index];
      const label=open.querySelector('[data-iv-date-open-label]');
      if(label)label.textContent=prettyDate(dates[index]);
    }
    const visible=input?.closest('.iron-adjusted-dose-card')?.querySelector('.iron-adjusted-complete strong');
    if(visible)visible.textContent=prettyDate(dates[index]);
  }
}
function applyIvDate(index,newDate){
  const code=ivCode(),data=decode(code);
  if(!code||!data||data.kind!=='iv'||!Number.isInteger(index)||!/^\d{4}-\d{2}-\d{2}$/.test(newDate))return false;
  const dates=loadDates(code,data);
  if(index<0||index>=dates.length)return false;
  const shift=daysBetween(dates[index],newDate);
  if(!shift){syncIvDates(dates,index);return true}
  const adjusted=[...dates];
  for(let cursor=index;cursor<adjusted.length;cursor+=1)adjusted[cursor]=addDays(adjusted[cursor],shift);
  saveDates(code,adjusted);
  syncIvDates(adjusted,index);
  return true;
}

function iphoneDateButton(index,value){
  return `<button type="button" class="pc-iv-date-open" data-iv-date-open="${index}" data-value="${value}" aria-haspopup="dialog"><span data-iv-date-open-label>${prettyDate(value)}</span><span class="pc-iv-date-open-icon" aria-hidden="true">▾</span></button>`;
}
function enhanceIvDates(){
  if(!onIvRoute())return;
  document.querySelectorAll('[data-pp-iv-date]').forEach(input=>{
    input.removeAttribute('min');
    const wrapper=input.closest('.iron-adjusted-date');
    if(!wrapper)return;
    if(!IS_IPHONE){
      input.hidden=false;
      input.removeAttribute('aria-hidden');
      input.removeAttribute('tabindex');
      wrapper.classList.remove('pc-iphone-date-mode');
      wrapper.querySelector('[data-iv-date-open]')?.remove();
      return;
    }
    wrapper.classList.add('pc-iphone-date-mode');
    input.hidden=true;
    input.tabIndex=-1;
    input.setAttribute('aria-hidden','true');
    let open=wrapper.querySelector('[data-iv-date-open]');
    if(!open){
      input.insertAdjacentHTML('afterend',iphoneDateButton(input.dataset.ppIvDate,input.value));
      open=wrapper.querySelector('[data-iv-date-open]');
    }
    if(open){
      open.dataset.value=input.value;
      const label=open.querySelector('[data-iv-date-open-label]');
      if(label)label.textContent=prettyDate(input.value);
    }
  });
}
function scheduleEnhance(){window.setTimeout(enhanceIvDates,0)}

function calendarDaysHtml(year,month,selected){
  const firstDay=new Date(year,month-1,1).getDay();
  const total=new Date(year,month,0).getDate();
  const cells=[];
  for(let blank=0;blank<firstDay;blank+=1)cells.push('<span class="pc-iv-calendar-blank" aria-hidden="true"></span>');
  const today=iso(new Date());
  for(let day=1;day<=total;day+=1){
    const value=makeIso(year,month,day);
    const classes=['pc-iv-calendar-day'];
    if(value===selected)classes.push('selected');
    if(value===today)classes.push('today');
    cells.push(`<button type="button" class="${classes.join(' ')}" data-iv-calendar-day="${value}" aria-label="${prettyDate(value)}" aria-pressed="${value===selected}">${day}</button>`);
  }
  return cells.join('');
}
function renderCalendar(){
  if(!calendarState)return;
  const {viewYear,viewMonth,selected}=calendarState;
  let modal=document.getElementById('pc-iv-calendar');
  if(!modal){modal=document.createElement('div');modal.id='pc-iv-calendar';document.body.appendChild(modal)}
  modal.className='pc-iv-calendar-modal';
  modal.innerHTML=`<div class="pc-iv-calendar-backdrop" data-iv-calendar-close></div><section class="pc-iv-calendar" role="dialog" aria-modal="true" aria-labelledby="pc-iv-calendar-title" lang="${language()}" dir="${isArabic()?'rtl':'ltr'}"><header><button type="button" class="pc-iv-calendar-nav" data-iv-calendar-prev aria-label="${isArabic()?'الشهر السابق':'Previous month'}">‹</button><h2 id="pc-iv-calendar-title">${monthTitle(viewYear,viewMonth)}</h2><button type="button" class="pc-iv-calendar-nav" data-iv-calendar-next aria-label="${isArabic()?'الشهر التالي':'Next month'}">›</button></header><div class="pc-iv-calendar-weekdays">${WEEKDAYS[language()].map(day=>`<span>${day}</span>`).join('')}</div><div class="pc-iv-calendar-grid">${calendarDaysHtml(viewYear,viewMonth,selected)}</div><button type="button" class="pc-iv-calendar-cancel" data-iv-calendar-close>${isArabic()?'إلغاء':'Cancel'}</button></section>`;
  document.body.classList.add('pc-iv-calendar-open');
}
function openCalendar(control){
  if(!IS_IPHONE)return;
  const index=Number(control.dataset.ivDateOpen),value=control.dataset.value;
  const parts=parseIso(value);
  if(!Number.isInteger(index)||!parts)return;
  calendarState={index,selected:value,viewYear:parts.year,viewMonth:parts.month,opener:control};
  renderCalendar();
  document.querySelector('.pc-iv-calendar-day.selected')?.focus();
}
function closeCalendar(returnFocus=true){
  const opener=calendarState?.opener;
  calendarState=null;
  document.body.classList.remove('pc-iv-calendar-open');
  document.getElementById('pc-iv-calendar')?.remove();
  if(returnFocus)opener?.focus?.();
}
function moveCalendarMonth(delta){
  if(!calendarState)return;
  const cursor=new Date(calendarState.viewYear,calendarState.viewMonth-1+delta,1);
  calendarState.viewYear=cursor.getFullYear();
  calendarState.viewMonth=cursor.getMonth()+1;
  renderCalendar();
}
function chooseCalendarDate(value){
  if(!calendarState)return;
  const index=calendarState.index;
  if(applyIvDate(index,value)){
    toast(isArabic()?'تم تحديث التاريخ.':'Date updated.');
    closeCalendar(false);
    document.querySelector(`[data-iv-date-open="${index}"]`)?.focus();
  }
}

/* Remove the old minimum before a normal browser date picker opens. */
for(const eventName of ['pointerdown','touchstart','focusin']){
  document.addEventListener(eventName,event=>{
    const input=eventElement(event.target)?.closest('[data-pp-iv-date]');
    if(input)input.removeAttribute('min');
  },true);
}

/*
 * Normal browser date pickers stay native everywhere except iPhone. Capture
 * their change before the old restricted handler and save the chosen date.
 */
document.addEventListener('change',event=>{
  const target=eventElement(event.target);
  const dateInput=target?.closest('[data-pp-iv-date]');
  if(dateInput){
    event.stopImmediatePropagation();
    dateInput.removeAttribute('min');
    const index=Number(dateInput.dataset.ppIvDate);
    if(applyIvDate(index,dateInput.value))toast(isArabic()?'تم تحديث التاريخ.':'Date updated.');
    return;
  }
  if(target?.closest('[data-pp-iv-dose]'))scheduleEnhance();
},true);

/*
 * WebKit can report a text node as the target of a synthesized tap. Retarget
 * those taps to the actual control before bubbling listeners run.
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

/* iPhone can suppress a synthetic click after touch. Provide one fallback. */
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

document.addEventListener('click',event=>{
  const target=eventElement(event.target);
  if(!target)return;
  const open=target.closest('[data-iv-date-open]');
  if(open){event.preventDefault();openCalendar(open);return}
  if(target.closest('[data-iv-calendar-close]')){event.preventDefault();closeCalendar();return}
  if(target.closest('[data-iv-calendar-prev]')){event.preventDefault();moveCalendarMonth(-1);return}
  if(target.closest('[data-iv-calendar-next]')){event.preventDefault();moveCalendarMonth(1);return}
  const day=target.closest('[data-iv-calendar-day]');
  if(day){event.preventDefault();chooseCalendarDate(day.dataset.ivCalendarDay);return}
  if(target.closest('[data-patient-language-toggle],[data-pp-reset-iv-dates]'))scheduleEnhance();
});

document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&document.body.classList.contains('pc-iv-calendar-open')){
    event.preventDefault();
    closeCalendar();
  }
});

window.addEventListener('pageshow',()=>{removeInactiveOverlays();scheduleEnhance()});
window.addEventListener('hashchange',()=>{closeCalendar(false);window.setTimeout(removeInactiveOverlays,0);scheduleEnhance()});
document.addEventListener('visibilitychange',()=>{if(!document.hidden){removeInactiveOverlays();scheduleEnhance()}});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{removeInactiveOverlays();scheduleEnhance()},{once:true});else{removeInactiveOverlays();scheduleEnhance()}
})();
