// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';
const ROUTE='#/physician/blood-pressure';
let observer=null;
function updateCard(){
  if(location.hash!=='#/physician')return;
  const current=document.querySelector('[data-bp-physician-card]');
  if(!current||current.tagName==='A')return;
  const link=document.createElement('a');
  link.className=current.className;
  link.dataset.bpPhysicianCard='1';
  link.href=ROUTE;
  link.innerHTML=current.innerHTML;
  current.replaceWith(link);
}
function start(){
  const root=document.getElementById('app');
  if(root&&!observer){observer=new MutationObserver(()=>requestAnimationFrame(updateCard));observer.observe(root,{childList:true,subtree:true})}
  updateCard();
}
window.addEventListener('hashchange',()=>setTimeout(updateCard,0));
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
