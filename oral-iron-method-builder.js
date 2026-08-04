// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const MARKER_PREFIX='[[pc-oral-method:';
const MARKER_SUFFIX=']]';
let observer=null;

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
function packClinic(method,value){const clean=unpackClinic(value).clinic;return MARKER_PREFIX+method+MARKER_SUFFIX+clean}
function selectedMethod(){return document.querySelector('input[name="oral-taking-method"]:checked')?.value||''}

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
  if(!preview)return;
  preview.insertAdjacentHTML('beforebegin',selectorHtml());
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
  if(!copy||!summary||summary.querySelector('[data-oral-method-summary]'))return;
  const item=copy.methods[method];
  if(!item)return;
  const card=document.createElement('article');
  card.dataset.oralMethodSummary='1';
  card.innerHTML='<small>Taking method</small><strong>'+esc(item.short)+'</strong><span>'+esc(item.instruction)+'</span>';
  summary.appendChild(card);
}
function patchGeneratedLink(method){
  const input=document.getElementById('oral-link'),exportBox=document.getElementById('oral-export');
  if(!input||!exportBox||!method)return;
  let parsed;
  try{parsed=new URL(input.value,location.href)}catch(error){return}
  const prefix='#/patient/iron-oral/';
  if(parsed.hash.indexOf(prefix)!==0)return;
  const data=decode(parsed.hash.slice(prefix.length));
  if(!data)return;
  data.m=method;
  data.c=packClinic(method,data.c||'');
  const code=encode(data),url=parsed.origin+parsed.pathname+parsed.search+prefix+code;
  input.value=url;
  exportBox.dataset.schedule=code;
  patchSummary(method);
  regenerateQr(url);
}
function enhance(){injectSelector();refreshChoiceState()}

document.addEventListener('change',function(event){
  if(event.target&&event.target.matches('input[name="oral-taking-method"]'))refreshChoiceState();
});
document.addEventListener('submit',function(event){
  if(event.target?.id!=='oral-iron-form')return;
  const method=selectedMethod();
  if(!method)return;
  queueMicrotask(function(){patchGeneratedLink(method)});
},true);

function start(){
  const root=document.getElementById('app');
  if(root&&!observer){observer=new MutationObserver(function(){requestAnimationFrame(enhance)});observer.observe(root,{childList:true,subtree:true})}
  enhance();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
