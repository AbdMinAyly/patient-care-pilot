// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';
let observer=null;
let applying=false;

function language(){return localStorage.getItem('pc_patient_language')==='ar'?'ar':'en'}
function copy(){const store=window.ORAL_IRON_AVOIDANCE_CONTENT;return store?store[language()]:null}
function esc(value){return String(value==null?'':value).replace(/[&<>"']/g,function(char){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]})}
function list(items){return '<ul class="oral-avoid-list">'+items.map(function(item){return '<li>'+esc(item)+'</li>'}).join('')+'</ul>'}
function sectionHtml(text){
  return '<section class="oral-guide-section oral-avoid-section" data-oral-avoidance>'+ 
    '<div class="oral-section-heading"><span aria-hidden="true">!</span><div><h2>'+esc(text.title)+'</h2><p>'+esc(text.intro)+'</p></div></div>'+ 
    '<div class="oral-avoid-grid">'+ 
      '<article class="oral-avoid-card medicine"><header><span aria-hidden="true">Rx</span><h3>'+esc(text.medicineTitle)+'</h3></header>'+list(text.medicines)+'</article>'+ 
      '<article class="oral-avoid-card food"><header><span aria-hidden="true">Food</span><h3>'+esc(text.foodTitle)+'</h3></header>'+list(text.foods)+'</article>'+ 
    '</div></section>';
}
function apply(){
  if(applying)return;
  const page=document.querySelector('.oral-guide-page'),text=copy();
  if(!page||!text)return;
  applying=true;
  try{
    page.querySelector('.oral-timeline-section')?.remove();
    page.querySelector('.oral-guide-tip-grid')?.closest('.oral-guide-section')?.remove();
    if(page.querySelector('[data-oral-avoidance]'))return;
    const anchor=page.querySelector('.oral-method-section')||page.querySelector('.oral-plan-section');
    if(anchor)anchor.insertAdjacentHTML('afterend',sectionHtml(text));
  }finally{applying=false}
}
function start(){
  const root=document.getElementById('app');
  if(root&&!observer){observer=new MutationObserver(function(){requestAnimationFrame(apply)});observer.observe(root,{childList:true,subtree:true})}
  apply();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
