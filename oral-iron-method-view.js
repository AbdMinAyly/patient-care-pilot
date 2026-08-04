// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const MARKER_PREFIX='[[pc-oral-method:';
const MARKER_SUFFIX=']]';
let observer=null;
let enhancing=false;

function store(){return window.ORAL_IRON_METHOD_CONTENT||null}
function language(){return localStorage.getItem('pc_patient_language')==='ar'?'ar':'en'}
function copy(){const data=store();return data?data[language()]:null}
function esc(value){return String(value==null?'':value).replace(/[&<>"']/g,function(char){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]})}
function decode(value){try{const normalized=String(value).replace(/-/g,'+').replace(/_/g,'/');return JSON.parse(decodeURIComponent(escape(atob(normalized+'==='.slice((normalized.length+3)%4)))))}catch(error){return null}}
function unpackClinic(value){
  const raw=String(value||'');
  if(raw.indexOf(MARKER_PREFIX)!==0)return {method:'',clinic:raw};
  const end=raw.indexOf(MARKER_SUFFIX,MARKER_PREFIX.length);
  if(end<0)return {method:'',clinic:raw};
  return {method:raw.slice(MARKER_PREFIX.length,end),clinic:raw.slice(end+MARKER_SUFFIX.length)};
}
function methodId(data){return data.m||unpackClinic(data.c).method||''}
function methodSection(data,text){
  const selected=text.methods[methodId(data)];
  const body=selected?'<article class="oral-method-selected"><header class="oral-method-selected-head"><span aria-hidden="true">Fe</span><div><small>'+esc(text.selectedLabel)+'</small><h3>'+esc(selected.title)+'</h3></div></header><div class="oral-method-selected-body"><p class="oral-method-instruction">'+esc(selected.instruction)+'</p><p class="oral-method-detail">'+esc(selected.detail)+'</p><div class="oral-method-common"><strong>'+esc(text.commonTitle)+'</strong><span>'+esc(text.commonText)+'</span></div><p class="oral-method-fixed">'+esc(text.fixedPlan)+'</p></div></article>':'<div class="oral-method-missing">'+esc(text.missing)+'</div>';
  return '<section class="oral-guide-section oral-method-section" data-oral-method-view><div class="oral-section-heading"><span aria-hidden="true">1</span><div><h2>'+esc(text.sectionTitle)+'</h2><p>'+esc(text.sectionIntro)+'</p></div></div>'+body+'</section>';
}
function enhance(){
  if(enhancing)return;
  const page=document.querySelector('.oral-guide-page'),root=document.getElementById('app');
  if(!page||!root||page.querySelector('[data-oral-method-view]'))return;
  const text=copy(),data=decode(root.dataset.ironCode||'');
  if(!text||!data||data.kind!=='oral')return;
  enhancing=true;
  try{
    const plan=page.querySelector('.oral-plan-section');
    if(!plan)return;
    const selected=text.methods[methodId(data)],grid=plan.querySelector('.oral-plan-grid');
    if(selected&&grid){
      const card=document.createElement('article');
      card.dataset.oralMethodPlan='1';
      card.innerHTML='<small>'+esc(text.sectionTitle)+'</small><strong>'+esc(selected.short)+'</strong>';
      grid.insertBefore(card,grid.children[3]||null);
    }
    plan.insertAdjacentHTML('afterend',methodSection(data,text));
    const genericTips=page.querySelectorAll('.oral-guide-tip');
    if(genericTips[1])genericTips[1].remove();
  }finally{enhancing=false}
}
function start(){
  const root=document.getElementById('app');
  if(root&&!observer){observer=new MutationObserver(function(){requestAnimationFrame(enhance)});observer.observe(root,{childList:true,subtree:true})}
  enhance();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
