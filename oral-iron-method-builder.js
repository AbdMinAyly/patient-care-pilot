// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const MARKER_PREFIX='[[pc-oral-method:';
const MARKER_SUFFIX=']]';
let observer=null;

function store(){return window.ORAL_IRON_METHOD_CONTENT||null}
function copy(){const data=store();return data?data.en:null}
function esc(value){return String(value==null?'':value).replace(/[&<>"']/g,function(char){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot',"'":'&#39;'}[char]})}
function unpackClinic(value){
  const text=String(value||'');
  if(text.indexOf(MARKER_PREFIX)!==0)return {method:'',clinic:text};
  const end=text.indexOf(MARKER_SUFFIX,MARKER_PREFIX.length);
  if(end<0)return {method:'',clinic:text};
  return {method:text.slice(MARKER_PREFIX.length,end),clinic:text.slice(end+MARKER_SUFFIX.length)};
}
function packClinic(method,value){return MARKER_PREFIX+method+MARKER_SUFFIX+unpackClinic(value).clinic}

function methodFieldHtml(){
  const text=copy();
  if(!text)return '';
  const options=Object.keys(text.methods).map(function(id){
    return '<option value="'+esc(id)+'">'+esc(text.methods[id].title)+'</option>';
  }).join('');
  return '<label class="vitd-clinic-field oral-method-field">How should the patient take the iron?'+
    '<select id="oral-taking-method" required><option value="">Choose one</option>'+options+'</select>'+
    '<small>The patient guide will show only the selected method.</small></label>';
}
function injectField(){
  const form=document.getElementById('oral-iron-form');
  if(!form||document.getElementById('oral-taking-method'))return;
  const grid=form.querySelector('.vitd-form-grid'),clinic=document.getElementById('oral-label')?.closest('label');
  if(!grid)return;
  if(clinic)clinic.insertAdjacentHTML('beforebegin',methodFieldHtml());
  else grid.insertAdjacentHTML('beforeend',methodFieldHtml());
}
function patchSummary(method){
  const text=copy(),summary=document.querySelector('#oral-export .vitd-export-summary');
  if(!text||!summary||!text.methods[method]||summary.querySelector('[data-oral-method-summary]'))return;
  const item=text.methods[method],card=document.createElement('article');
  card.dataset.oralMethodSummary='1';
  card.innerHTML='<small>Taking method</small><strong>'+esc(item.short)+'</strong><span>'+esc(item.instruction)+'</span>';
  summary.appendChild(card);
}

/* Attach the selected method before iron-tools.js creates the link and QR. */
document.addEventListener('submit',function(event){
  if(!event.target||event.target.id!=='oral-iron-form')return;
  const method=document.getElementById('oral-taking-method')?.value||'';
  const clinicInput=document.getElementById('oral-label');
  if(!method||!clinicInput)return;
  const original=unpackClinic(clinicInput.value).clinic;
  clinicInput.value=packClinic(method,original);
  window.setTimeout(function(){
    if(clinicInput.isConnected)clinicInput.value=original;
    patchSummary(method);
  },0);
},true);

function start(){
  const root=document.getElementById('app');
  if(root&&!observer){
    observer=new MutationObserver(injectField);
    observer.observe(root,{childList:true,subtree:true});
  }
  injectField();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
