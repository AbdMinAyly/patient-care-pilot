// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const MARKER_PREFIX='[[pc-oral-method:';
const MARKER_SUFFIX=']]';
let observer=null;
let pendingMethod='';
let patchTimer=0;

function store(){return window.ORAL_IRON_METHOD_CONTENT||null}
function methodCopy(){const data=store();return data?data.en:null}
function encode(value){return btoa(unescape(encodeURIComponent(JSON.stringify(value)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function decode(value){try{const normalized=String(value).replace(/-/g,'+').replace(/_/g,'/');return JSON.parse(decodeURIComponent(escape(atob(normalized+'==='.slice((normalized.length+3)%4)))))}catch(error){return null}}
function esc(value){return String(value==null?'':value).replace(/[&<>"']/g,function(char){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]})}
function unpackClinic(value){
  const text=String(value||'');
  if(text.indexOf(MARKER_PREFIX)!==0)return {method:'',clinic:text};
  const end=text.indexOf(MARKER_SUFFIX,MARKER_PREFIX.length);
  if(end<0)return {method:'',clinic:text};
  return {method:text.slice(MARKER_PREFIX.length,end),clinic:text.slice(end+MARKER_SUFFIX.length)};
}
function packClinic(method,value){return MARKER_PREFIX+method+MARKER_SUFFIX+unpackClinic(value).clinic}
function selectedMethod(){return document.querySelector('input[name="oral-taking-method"]:checked')?.value||pendingMethod||''}

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
  if(!form||document.getElementById('oral-method-builder'))return;
  const preview=document.getElementById('oral-preview');
  if(preview)preview.insertAdjacentHTML('beforebegin',selectorHtml());
}
function refreshChoiceState(){
  document.querySelectorAll('.oral-method-choice').forEach(function(label){
    const input=label.querySelector('input');
    label.classList.toggle('selected',Boolean(input&&input.checked));
  });
}
function regenerateQr(url){
  const target=document.getElementById('oral-qr');
  if(!target||typeof qrcode!=='function')return;
  try{const code=qrcode(0,'M');code.addData(url);code.make();target.innerHTML=code.createSvgTag({cellSize:5,margin:4,scalable:true})}catch(error){target.textContent='Use the patient link.'}
}
function patchSummary(method){
  const copy=methodCopy(),summary=document.querySelector('#oral-export .vitd-export-summary');
  if(!copy||!summary)return;
  const item=copy.methods[method];
  if(!item)return;
  let card=summary.querySelector('[data-oral-method-summary]');
  if(!card){card=document.createElement('article');card.dataset.oralMethodSummary='1';summary.appendChild(card)}
  card.innerHTML='<small>Taking method</small><strong>'+esc(item.short)+'</strong><span>'+esc(item.instruction)+'</span>';
}
function patchGeneratedLink(method){
  const input=document.getElementById('oral-link'),exportBox=document.getElementById('oral-export');
  if(!input||!exportBox||exportBox.hidden||!method)return false;
  let parsed;
  try{parsed=new URL(input.value,location.href)}catch(error){return false}
  const prefix='#/patient/iron-oral/';
  if(parsed.hash.indexOf(prefix)!==0)return false;
  const data=decode(parsed.hash.slice(prefix.length));
  if(!data)return false;
  data.m=method;
  data.c=packClinic(method,data.c||'');
  const code=encode(data),url=parsed.origin+parsed.pathname+parsed.search+prefix+code;
  input.value=url;
  exportBox.dataset.schedule=code;
  exportBox.dataset.oralMethod=method;
  patchSummary(method);
  regenerateQr(url);
  return true;
}
function patchWhenReady(method,attempt){
  const selected=method||selectedMethod();
  if(!selected)return;
  if(patchGeneratedLink(selected))return;
  if((attempt||0)>=20)return;
  window.clearTimeout(patchTimer);
  patchTimer=window.setTimeout(function(){patchWhenReady(selected,(attempt||0)+1)},25);
}
function enhance(){
  injectSelector();
  refreshChoiceState();
  const method=selectedMethod();
  if(method)patchGeneratedLink(method);
}

document.addEventListener('change',function(event){
  if(!event.target||!event.target.matches('input[name="oral-taking-method"]'))return;
  pendingMethod=event.target.value;
  refreshChoiceState();
  patchGeneratedLink(pendingMethod);
});
document.addEventListener('submit',function(event){
  if(event.target?.id!=='oral-iron-form')return;
  pendingMethod=selectedMethod();
  if(!pendingMethod)return;
  patchWhenReady(pendingMethod,0);
},true);

/* The selected method must be written before another handler opens, copies, or bundles the link. */
document.addEventListener('click',function(event){
  const target=event.target instanceof Element?event.target:event.target&&event.target.parentElement;
  if(!target||!target.closest('[data-open-oral-patient],[data-copy-oral-link],[data-bundle-add-current]'))return;
  const method=selectedMethod();
  if(method)patchGeneratedLink(method);
},true);

function start(){
  const root=document.getElementById('app');
  if(root&&!observer){observer=new MutationObserver(function(){requestAnimationFrame(enhance)});observer.observe(root,{childList:true,subtree:true})}
  enhance();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
