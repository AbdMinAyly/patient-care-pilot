// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const PATIENT_ROUTE_PREFIX='#/patient/';
const SAFARI_ACTION_SELECTOR=[
  '[data-open-iron-expect]',
  '[data-close-iron-expect]',
  '[data-iron-expect-tab]',
  '[data-iron-expect-prev]',
  '[data-iron-expect-next]',
  '[data-patient-language-toggle]',
  '[data-patient-share]',
  '[data-patient-copy]',
  '[data-pp-reset-iv-dates]'
].join(',');
const pendingTouches=new WeakMap();

function onPatientRoute(){return location.hash.startsWith(PATIENT_ROUTE_PREFIX)}
function eventElement(target){
  if(target instanceof Element)return target;
  return target&&target.parentElement instanceof Element?target.parentElement:null;
}
function patientAction(target){return eventElement(target)?.closest(SAFARI_ACTION_SELECTOR)||null}
function removeInactiveOverlays(){
  if(!document.body.classList.contains('iron-expect-open'))document.getElementById('iron-expectations-modal')?.remove();
  if(!document.body.classList.contains('patient-bundle-modal-open'))document.getElementById('patient-bundle-chooser')?.remove();
  if(!document.body.classList.contains('bp-install-help-open'))document.getElementById('bp-install-help')?.remove();
}

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
  if(event.__pcSafariRetargeted||event.target===control||event.target instanceof Element)return;
  event.preventDefault();
  event.stopImmediatePropagation();
  const replacement=new MouseEvent('click',{bubbles:true,cancelable:true,view:window});
  Object.defineProperty(replacement,'__pcSafariRetargeted',{value:true});
  control.dispatchEvent(replacement);
},true);

/*
 * iOS can suppress the synthetic click after a touch sequence. Only create a
 * fallback click when no click arrived for the same control.
 */
document.addEventListener('touchend',event=>{
  if(!onPatientRoute())return;
  const control=patientAction(event.target);
  if(!control)return;
  const token={};
  pendingTouches.set(control,token);
  window.setTimeout(()=>{
    if(pendingTouches.get(control)!==token||!control.isConnected)return;
    pendingTouches.delete(control);
    control.click();
  },320);
},{capture:true,passive:true});

window.addEventListener('pageshow',removeInactiveOverlays);
window.addEventListener('hashchange',()=>window.setTimeout(removeInactiveOverlays,0));
document.addEventListener('visibilitychange',()=>{if(!document.hidden)removeInactiveOverlays()});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',removeInactiveOverlays,{once:true});else removeInactiveOverlays();
})();
