// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const MARKER_PREFIX='[[pc-oral-method:';
const MARKER_SUFFIX=']]';
let observer=null;
let pendingMethod='';
let currentForm=null;

function store(){return window.ORAL_IRON_METHOD_CONTENT||null}
function methodCopy(){const data=store();return data?data.en:null}
function esc(value){return String(value==null?'':value).replace(/[&<>"']/g,function(char){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]})}
function unpackClinic(value){
  const text=String(value||'');
  if(text.indexOf(MARKER_PREFIX)!==0)return {method:'',clinic:text};
  const end=text.indexOf(MARKER_SUFFIX,MARKER_PREFIX.length);
  if(end<0)return {method:'',clinic:text};
  return {method:text.slice(MARKER_PREFIX.length,end),clinic:text.slice(end+MARKER_SUFFIX.length)};
}
function packClinic(method,value){return MARKER_PREFIX+method+MARKER_SUFFIX+unpackClinic(value).clinic}
function selectedMethod(){
  const checked=document.querySelector('input[name="oral-taking-method"]:checked');
  return checked?checked.value:pendingMethod;
}

function selectorHtml(){
  const copy=methodCopy();
  if(!copy)return '';
  return '<fieldset class="oral-method-builder" id="oral-method-builder"><legend>'+esc(copy.builderLegend)+'</legend><p>'+esc(copy.builderIntro)+'</p><div class="oral-method-builder-grid">'+Object.keys(copy.methods).map(function(id,index){
    const item=copy.methods[id];
    return '<label class="oral-method-choice"><input type="radio" name="oral-taking-method" value="'+esc(id)+'" '+(index===0?'required':'')+'><span><strong>'+esc(item.title)+'</strong><small>'+esc(item.builder)+'</small></span></label>';
  }).join('')+'</div></fieldset>';
}
function injectSelector(){
  const form=document.getElementById('oral-iron-form');
  if(!form)return;
  if(form!==currentForm){currentForm=form;pendingMethod=''}
  if(document.getElementById('oral-method-builder'))return;
  const preview=document.getElementById('oral-preview');
  if(preview)preview.insertAdjacentHTML('beforebegin',selectorHtml());
}
function refreshChoiceState(){
  document.querySelectorAll('.oral-method-choice').forEach(function(label){
    const input=label.querySelector('input');
    label.classList.toggle('selected',Boolean(input&&input.checked));
  });
}
function patchSummary(method){
  const copy=methodCopy(),summary=document.querySelector('#oral-export .vitd-export-summary');
  if(!copy||!summary||!copy.methods[method])return;
  const item=copy.methods[method];
  let card=summary.querySelector('[data-oral-method-summary]');
  if(!card){
    card=document.createElement('article');
    card.dataset.oralMethodSummary='1';
    summary.appendChild(card);
  }
  if(card.dataset.method===method)return;
  card.dataset.method=method;
  card.innerHTML='<small>Taking method</small><strong>'+esc(item.short)+'</strong><span>'+esc(item.instruction)+'</span>';
}
function enhance(){
  injectSelector();
  refreshChoiceState();
  const exportBox=document.getElementById('oral-export'),method=selectedMethod();
  if(exportBox&&!exportBox.hidden&&method)patchSummary(method);
}

document.addEventListener('change',function(event){
  if(!event.target||!event.target.matches('input[name="oral-taking-method"]'))return;
  pendingMethod=event.target.value;
  refreshChoiceState();
});

/*
 * Embed the method before iron-tools.js handles the form submission. This
 * makes the first generated link and QR correct and avoids rewriting the QR
 * from a MutationObserver, which previously caused an infinite update loop.
 */
document.addEventListener('submit',function(event){
  if(!event.target||event.target.id!=='oral-iron-form')return;
  const method=selectedMethod(),clinicInput=document.getElementById('oral-label');
  if(!method||!clinicInput)return;
  pendingMethod=method;
  const original=unpackClinic(clinicInput.value).clinic;
  const packed=packClinic(method,original);
  clinicInput.value=packed;
  queueMicrotask(function(){
    if(clinicInput.isConnected&&clinicInput.value===packed)clinicInput.value=original;
    patchSummary(method);
  });
},true);

function start(){
  const root=document.getElementById('app');
  if(root&&!observer){
    observer=new MutationObserver(function(){requestAnimationFrame(enhance)});
    observer.observe(root,{childList:true,subtree:true});
  }
  enhance();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
