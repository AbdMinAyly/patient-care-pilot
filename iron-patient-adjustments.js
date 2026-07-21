// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';
// Patient education is summarized from current official IV-iron product labels and 2026 NHS patient leaflets.
const IV_ROUTE='#/patient/iron-iv/';
const PROGRESS_PREFIX='pc_iron_progress_';
const DATE_PREFIX='pc_iron_dates_';
const EXPECTATIONS=[
  {
    id:'during',
    tab:'During',
    title:'During the infusion',
    intro:'Many people feel nothing unusual. Staff will monitor you while the iron is being given.',
    expected:[
      'A temporary metallic taste, warmth or flushing',
      'Mild nausea, headache, dizziness or light-headedness',
      'Temporary changes in blood pressure or pulse'
    ],
    actionTitle:'Tell the nurse immediately',
    action:[
      'Burning, pain, pressure, swelling or colour change around the cannula',
      'Chest or throat tightness, wheezing or trouble breathing',
      'Facial, lip or tongue swelling, widespread hives, severe dizziness or fainting'
    ],
    note:'The infusion can be slowed or stopped while staff assess you. Do not wait to see whether symptoms pass.'
  },
  {
    id:'after',
    tab:'Right after',
    title:'Right after the infusion',
    intro:'You will usually be observed for at least 30 minutes and until the clinical team considers you stable.',
    expected:[
      'A mild headache, nausea, flushing, dizziness or tiredness may continue briefly',
      'The IV site may feel tender or look bruised',
      'Follow the clinic’s instructions before leaving and only drive if they say it is appropriate and you feel well'
    ],
    actionTitle:'Get urgent help after leaving',
    action:[
      'Trouble breathing, wheezing or rapidly worsening chest tightness',
      'Swelling of the mouth, tongue, face or throat',
      'Fainting, collapse, severe chest pain or a rapidly worsening reaction'
    ],
    note:'Serious reactions are uncommon, but they need immediate assessment. Use your local emergency service for severe symptoms.'
  },
  {
    id:'days',
    tab:'Next days',
    title:'Over the next few days',
    intro:'Delayed symptoms can start several hours after treatment or up to about four days later.',
    expected:[
      'Muscle or joint aches, headache, chills or a feverish flu-like feeling',
      'Temporary tiredness or feeling generally unwell',
      'Mild symptoms often settle over two to four days'
    ],
    actionTitle:'Contact the clinic',
    action:[
      'Symptoms are severe, worsening, persistent or interfere with normal activities',
      'Pain, swelling or brown staining develops around the infusion site',
      'You are unsure whether a symptom is expected or safe to manage at home'
    ],
    note:'Use only symptom relief that your clinician has said is safe for you. Improvement in iron-deficiency symptoms is not always immediate.'
  }
];

let expectationTab=0;
let expectationReturnFocus=null;

function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function decode(v){try{const s=String(v).replace(/-/g,'+').replace(/_/g,'/');return JSON.parse(decodeURIComponent(escape(atob(s+'==='.slice((s.length+3)%4)))))}catch(e){return null}}
function hash(code){let h=2166136261;for(let i=0;i<code.length;i++){h^=code.charCodeAt(i);h=Math.imul(h,16777619)}return (h>>>0).toString(36)}
function date(v){return new Date(String(v)+'T12:00:00')}
function iso(v){return v.toISOString().slice(0,10)}
function addDays(v,n){const x=date(v);x.setDate(x.getDate()+n);return iso(x)}
function daysBetween(a,b){return Math.round((date(b)-date(a))/86400000)}
function pretty(v){return date(v).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'})}
function progressKey(code){return PROGRESS_PREFIX+hash(code)}
function dateKey(code){return DATE_PREFIX+hash(code)}
function loadDone(code){try{return new Set(JSON.parse(localStorage.getItem(progressKey(code)))||[])}catch(e){return new Set()}}
function saveDone(code,set){localStorage.setItem(progressKey(code),JSON.stringify([...set]))}
function originalDates(data){return data.i.map(x=>x.date)}
function loadDates(code,data){
  const fallback=originalDates(data);
  try{
    const saved=JSON.parse(localStorage.getItem(dateKey(code)));
    return Array.isArray(saved)&&saved.length===fallback.length&&saved.every(x=>/^\d{4}-\d{2}-\d{2}$/.test(x))?saved:fallback;
  }catch(e){return fallback}
}
function saveDates(code,dates){localStorage.setItem(dateKey(code),JSON.stringify(dates))}
function minDateFor(index,data,dates){
  if(index===0)return data.i[0].date;
  const originalGap=Math.max(0,daysBetween(data.i[index-1].date,data.i[index].date));
  return addDays(dates[index-1],originalGap);
}
function toast(message){if(typeof window.showToast==='function')window.showToast(message)}
function shiftDates(data,dates,index,newValue){
  const minimum=minDateFor(index,data,dates);
  if(newValue<minimum)return {error:'That date is earlier than the permitted adjusted schedule.'};
  const shift=daysBetween(dates[index],newValue);
  if(!shift)return {dates:[...dates],shift:0};
  const adjusted=[...dates];
  for(let i=index;i<adjusted.length;i++)adjusted[i]=addDays(adjusted[i],shift);
  return {dates:adjusted,shift};
}

function productExpectation(data){
  if(data?.preset==='carboxymaltose'||/carboxymaltose/i.test(data?.p||'')){
    return '<aside class="iron-expect-product"><strong>Ferric carboxymaltose note</strong><p>New or worsening tiredness, muscle weakness or bone pain after treatment can be a sign of low phosphate. Contact the clinic, especially after repeated or high-dose treatment.</p></aside>';
  }
  return '';
}

function expectationList(items){return `<ul>${items.map(item=>`<li>${esc(item)}</li>`).join('')}</ul>`}
function renderExpectationDialog(data){
  const tab=EXPECTATIONS[expectationTab];
  let modal=document.getElementById('iron-expectations-modal');
  if(!modal){modal=document.createElement('div');modal.id='iron-expectations-modal';document.body.appendChild(modal)}
  modal.className='iron-expect-modal';
  modal.innerHTML=`<div class="iron-expect-backdrop" data-close-iron-expect></div><section class="iron-expect-dialog" role="dialog" aria-modal="true" aria-labelledby="iron-expect-title"><header><div><p class="eyebrow">IV IRON GUIDE</p><h2 id="iron-expect-title">What to expect</h2><p>${esc(data.p||'IV iron')}</p></div><button type="button" class="iron-expect-close" data-close-iron-expect aria-label="Close what to expect">×</button></header><div class="iron-expect-tabs" role="tablist" aria-label="What to expect stages">${EXPECTATIONS.map((item,index)=>`<button type="button" role="tab" id="iron-expect-tab-${item.id}" aria-controls="iron-expect-panel" aria-selected="${index===expectationTab}" tabindex="${index===expectationTab?'0':'-1'}" data-iron-expect-tab="${index}">${esc(item.tab)}</button>`).join('')}</div><div id="iron-expect-panel" class="iron-expect-panel" role="tabpanel" aria-labelledby="iron-expect-tab-${tab.id}" tabindex="0"><p class="iron-expect-step">${expectationTab+1} of ${EXPECTATIONS.length}</p><h3>${esc(tab.title)}</h3><p>${esc(tab.intro)}</p><section class="iron-expect-common"><h4>What you may notice</h4>${expectationList(tab.expected)}</section><section class="iron-expect-action"><h4>${esc(tab.actionTitle)}</h4>${expectationList(tab.action)}</section>${expectationTab===2?productExpectation(data):''}<p class="iron-expect-note">${esc(tab.note)}</p></div><footer><button type="button" class="btn ghost" data-iron-expect-prev>Previous</button><button type="button" class="btn dr" data-iron-expect-next>Next</button></footer></section>`;
  document.body.classList.add('iron-expect-open');
}
function setExpectationTab(index,data,focusTab=true){
  expectationTab=(index+EXPECTATIONS.length)%EXPECTATIONS.length;
  renderExpectationDialog(data);
  if(focusTab)document.querySelector(`[data-iron-expect-tab="${expectationTab}"]`)?.focus();
}
function openExpectations(data,opener){
  expectationReturnFocus=opener||document.activeElement;
  expectationTab=0;
  renderExpectationDialog(data);
  document.querySelector('[data-close-iron-expect]')?.focus();
}
function closeExpectations(){
  document.getElementById('iron-expectations-modal')?.remove();
  document.body.classList.remove('iron-expect-open');
  expectationReturnFocus?.focus?.();
  expectationReturnFocus=null;
}

function renderIvPatient(code){
  closeExpectations();
  const data=decode(code),root=document.getElementById('app');
  document.body.classList.add('iron-patient-active');
  document.body.classList.remove('physician-mode-active','vitd-patient-active');
  if(!root)return;
  if(!data||data.v!==1||data.kind!=='iv'||!Array.isArray(data.i)){
    root.innerHTML='<div class="screen"><section class="detail"><h1>This iron schedule link is invalid</h1><p>Ask the clinic to generate a new link.</p></section></div>';
    return;
  }
  const dates=loadDates(code,data),done=loadDone(code);
  const cards=data.i.map((dose,index)=>{
    const completed=done.has(String(index));
    const minimum=minDateFor(index,data,dates);
    return `<article class="vitd-dose-card iron-adjusted-dose-card ${completed?'done':''}"><label class="iron-adjusted-complete"><input type="checkbox" data-adjusted-iron-dose="${index}" ${completed?'checked':''}><span class="vitd-dose-check">${completed?'✓':''}</span><span><small>Infusion ${index+1}</small><strong>${pretty(dates[index])}</strong><em>${dose.mg} mg IV iron${dose.ml!=null?` · ${dose.ml} mL`:''}</em></span></label><label class="iron-adjusted-date"><span>${completed?'Actual appointment date':'Planned appointment date'}</span><input type="date" data-adjusted-iron-date="${index}" value="${dates[index]}" min="${minimum}"></label></article>`;
  }).join('');
  root.innerHTML=`<div class="vitd-patient-page iron-patient-page"><header class="vitd-journey-hero iron-journey"><div class="iron-orbit" aria-hidden="true">Fe</div><p class="eyebrow">YOUR IRON JOURNEY</p><h1>IV iron appointments</h1><p>${data.c?esc(data.c)+' prepared this schedule. ':''}Mark each completed infusion and correct the appointment date if it occurred later than planned.</p></header><main class="vitd-journey-main"><section class="iron-summary-card"><small>TOTAL PLANNED IV IRON</small><h2>${data.t} mg</h2><p>${esc(data.p)} · ${data.i.length} infusion${data.i.length===1?'':'s'}${data.i.length>1&&data.g?` · ${data.g}-day planned interval`:''}</p></section><section class="iron-expect-launch"><div><p class="eyebrow">BE PREPARED</p><h2>Know what to expect</h2><p>Review common temporary effects and the symptoms that need immediate help.</p></div><button type="button" class="btn dr" data-open-iron-expect>What to expect</button></section><section class="vitd-phase"><div class="vitd-phase-head"><span>Fe</span><div><small>INFUSION SCHEDULE</small><h2>Confirm completion and appointment dates</h2></div></div><p class="iron-date-help">Changing an appointment to a later date shifts that appointment and every later infusion by the same number of days. Adjustments are saved only on this device.</p><div class="vitd-dose-list">${cards}</div></section><section class="vitd-repeat"><span>🧪</span><div><small>REPEAT LABORATORY REVIEW</small><h2>${pretty(data.r)}</h2><p>Confirm the laboratory date with the clinic when infusion dates change. Do not continue, stop, or change treatment unless instructed.</p></div></section><section class="vitd-save-card"><h2>Save this schedule</h2><div class="vitd-save-actions"><button class="btn dr" data-share-adjusted-iron>Share or save link</button><button class="btn ghost" data-copy-adjusted-iron>Copy link</button><button class="btn ghost" data-reset-adjusted-iron>Reset adjusted dates</button></div><details><summary>Add to your Home Screen</summary><div class="vitd-home-help"><p><strong>iPhone:</strong> Safari → Share → Add to Home Screen.</p><p><strong>Android:</strong> Chrome menu → Add to Home screen.</p></div></details></section><aside class="vitd-patient-safety"><strong>Use only the confirmed schedule.</strong><p>IV iron must be administered by the designated clinical service. Seek urgent help for breathing difficulty, facial swelling, fainting, or a severe reaction.</p></aside></main></div>`;
  root.dataset.ironCode=code;
}

function handlePatientRoute(){
  const h=location.hash||'';
  if(!h.startsWith(IV_ROUTE))return false;
  renderIvPatient(h.slice(IV_ROUTE.length));
  return true;
}

const previousRoute=window.handleIronRoute;
window.handleIronRoute=function(){
  if(handlePatientRoute())return true;
  return typeof previousRoute==='function'?previousRoute():false;
};

document.addEventListener('change',event=>{
  const checkbox=event.target.closest?.('[data-adjusted-iron-dose]');
  if(checkbox){
    const code=document.getElementById('app')?.dataset.ironCode;if(!code)return;
    const done=loadDone(code),id=checkbox.dataset.adjustedIronDose;
    checkbox.checked?done.add(id):done.delete(id);saveDone(code,done);renderIvPatient(code);return;
  }
  const input=event.target.closest?.('[data-adjusted-iron-date]');
  if(input){
    const code=document.getElementById('app')?.dataset.ironCode,data=decode(code),index=Number(input.dataset.adjustedIronDate);
    if(!code||!data||!Number.isInteger(index)||!input.value)return;
    const dates=loadDates(code,data),result=shiftDates(data,dates,index,input.value);
    if(result.error){input.value=dates[index];toast(result.error);return}
    if(!result.shift)return;
    saveDates(code,result.dates);renderIvPatient(code);toast('This and all later infusion dates were adjusted.');
  }
});

document.addEventListener('click',async event=>{
  const code=document.getElementById('app')?.dataset.ironCode;
  if(event.target.closest('[data-open-iron-expect]')&&code){const data=decode(code);if(data)openExpectations(data,event.target.closest('[data-open-iron-expect]'));return}
  if(event.target.closest('[data-close-iron-expect]')){closeExpectations();return}
  const tabButton=event.target.closest('[data-iron-expect-tab]');
  if(tabButton&&code){const data=decode(code);if(data)setExpectationTab(Number(tabButton.dataset.ironExpectTab),data,false);return}
  if(event.target.closest('[data-iron-expect-prev]')&&code){const data=decode(code);if(data)setExpectationTab(expectationTab-1,data);return}
  if(event.target.closest('[data-iron-expect-next]')&&code){const data=decode(code);if(data)setExpectationTab(expectationTab+1,data);return}
  if(event.target.closest('[data-reset-adjusted-iron]')&&code){localStorage.removeItem(dateKey(code));renderIvPatient(code);toast('Appointment dates reset.');return}
  if(event.target.closest('[data-copy-adjusted-iron]')){await navigator.clipboard?.writeText(location.href);toast('Schedule link copied');return}
  if(event.target.closest('[data-share-adjusted-iron]')){
    if(navigator.share)await navigator.share({title:'Iron Journey',text:'Open the clinician-confirmed IV iron schedule',url:location.href});
    else{await navigator.clipboard?.writeText(location.href);toast('Schedule link copied')}
  }
});

document.addEventListener('keydown',event=>{
  const modal=document.getElementById('iron-expectations-modal');
  if(!modal)return;
  const code=document.getElementById('app')?.dataset.ironCode,data=decode(code);
  if(event.key==='Escape'){event.preventDefault();closeExpectations();return}
  if((event.key==='ArrowRight'||event.key==='ArrowLeft')&&event.target.matches?.('[role="tab"]')&&data){
    event.preventDefault();setExpectationTab(expectationTab+(event.key==='ArrowRight'?1:-1),data);return;
  }
  if(event.key==='Tab'){
    const focusable=[...modal.querySelectorAll('button,[href],input,[tabindex]:not([tabindex="-1"])')].filter(el=>!el.disabled);
    if(!focusable.length)return;
    const first=focusable[0],last=focusable[focusable.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
  }
});

window.addEventListener('hashchange',()=>setTimeout(handlePatientRoute,0));
handlePatientRoute();
})();