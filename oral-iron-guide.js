// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const ORAL_ROUTE='#/patient/iron-oral/';
const LANGUAGE_KEY='pc_patient_language';
const IMPROVEMENT_PREFIX='pc_oral_iron_improvements_';

function contentStore(){return window.ORAL_IRON_GUIDE_CONTENT||null}
function language(){return localStorage.getItem(LANGUAGE_KEY)==='ar'?'ar':'en'}
function isArabic(){return language()==='ar'}
function text(){const store=contentStore();return store?store[language()]:null}
function esc(value){return String(value==null?'':value).replace(/[&<>"']/g,function(char){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]})}
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
function prettyDate(value){
  if(!value)return '—';
  const parsed=date(value);
  if(Number.isNaN(parsed.getTime()))return '—';
  return new Intl.DateTimeFormat(isArabic()?'ar-EG-u-ca-gregory':'en-US',{year:'numeric',month:'long',day:'numeric'}).format(parsed);
}
function number(value){return Number(value).toLocaleString(isArabic()?'ar-EG':'en-US',{maximumFractionDigits:2})}
function replaceTokens(value,tokens){
  return Object.keys(tokens).reduce(function(result,key){return result.replace('{'+key+'}',tokens[key])},String(value));
}
function formulation(value){
  const store=contentStore();
  if(!isArabic()||!store||!store.formulationsAr)return value;
  return store.formulationsAr[value]||value;
}
function loadImprovements(code){
  try{
    const saved=JSON.parse(localStorage.getItem(IMPROVEMENT_PREFIX+hash(code)));
    return new Set(Array.isArray(saved)?saved:[]);
  }catch(error){return new Set()}
}
function saveImprovements(code,values){
  localStorage.setItem(IMPROVEMENT_PREFIX+hash(code),JSON.stringify(Array.from(values)));
}
function frequencyLine(data,copy){
  const gap=Math.max(1,Number(data.g)||1);
  const frequency=gap===1?copy.onceDaily:replaceTokens(copy.everyDays,{days:number(gap)});
  const weeks=Number(data.w)>0?' · '+replaceTokens(copy.weeks,{weeks:number(data.w)}):'';
  return frequency+weeks;
}
function languageButton(){
  return '<button type="button" class="patient-language-toggle" data-patient-language-toggle aria-label="'+(isArabic()?'Show in English':'عرض الصفحة بالعربية')+'">'+(isArabic()?'English':'العربية')+'</button>';
}
function list(items,className){
  return '<ul class="'+className+'">'+items.map(function(item){return '<li>'+esc(item)+'</li>'}).join('')+'</ul>';
}
function invalidPage(){
  return '<div class="screen oral-guide-invalid" lang="'+language()+'" dir="'+(isArabic()?'rtl':'ltr')+'">'+languageButton()+'<section class="detail"><h1>'+(isArabic()?'رابط خطة الحديد غير صالح':'This iron-plan link is invalid')+'</h1><p>'+(isArabic()?'اطلب من العيادة إرسال رابط جديد.':'Ask the clinic to send a new link.')+'</p></section></div>';
}
function renderPlanCards(data,copy){
  const cards=[
    {label:copy.dose,value:number(data.ed)+' '+(isArabic()?'ملغ حديد':'mg iron')},
    {label:copy.product,value:formulation(data.f||'Oral iron')},
    {label:copy.frequency,value:frequencyLine(data,copy)},
    {label:copy.start,value:prettyDate(data.s)},
    {label:copy.bloodTest,value:prettyDate(data.r)}
  ];
  return cards.map(function(card){
    return '<article><small>'+esc(card.label)+'</small><strong>'+esc(card.value)+'</strong></article>';
  }).join('');
}
function renderTakeCards(copy){
  return copy.takeCards.map(function(card){
    return '<article class="oral-guide-tip"><span aria-hidden="true">'+esc(card.icon)+'</span><div><h3>'+esc(card.title)+'</h3><p>'+esc(card.body)+'</p></div></article>';
  }).join('');
}
function renderImprovements(code,copy){
  const done=loadImprovements(code);
  const total=copy.improvements.length;
  const count=copy.improvements.filter(function(item){return done.has(item.id)}).length;
  const label=count?replaceTokens(copy.improvementCount,{done:number(count),total:number(total)}):copy.improvementNone;
  return '<div class="oral-improvement-progress" style="--oral-progress:'+(count/Math.max(total,1)*100)+'%"><div><span></span></div><strong>'+esc(label)+'</strong></div>'+ 
    '<div class="oral-improvement-grid">'+copy.improvements.map(function(item){
      const checked=done.has(item.id);
      return '<label class="oral-improvement-card '+(checked?'done':'')+'"><input type="checkbox" data-oral-improvement="'+esc(item.id)+'" '+(checked?'checked':'')+'><span class="oral-improvement-check" aria-hidden="true">'+(checked?'✓':'')+'</span><span><strong>'+esc(item.title)+'</strong><small>'+esc(item.body)+'</small></span></label>';
    }).join('')+'</div>'+ 
    (count?'<button type="button" class="oral-guide-reset" data-oral-guide-reset>'+esc(copy.resetImprovements)+'</button>':'');
}
function renderTimeline(copy){
  return '<div class="oral-timeline">'+copy.timeline.map(function(item,index){
    return '<article><span aria-hidden="true">'+number(index+1)+'</span><div><small>'+esc(item.when)+'</small><h3>'+esc(item.title)+'</h3><p>'+esc(item.body)+'</p></div></article>';
  }).join('')+'</div>';
}
function renderSideEffects(copy){
  return '<div class="oral-side-effect-list">'+copy.sideEffects.map(function(item){
    return '<article class="oral-side-effect-card"><div class="oral-side-effect-symptom"><small>'+(isArabic()?'العرض':'SIDE EFFECT')+'</small><strong>'+esc(item.symptom)+'</strong></div><div class="oral-side-effect-help"><small>'+(isArabic()?'ما قد يساعد':'WHAT MAY HELP')+'</small><p>'+esc(item.solution)+'</p></div></article>';
  }).join('')+'</div>';
}
function render(code){
  const store=contentStore(),copy=text(),data=decode(code),root=document.getElementById('app');
  if(!root)return false;

  document.body.classList.add('iron-patient-active','oral-guide-active');
  document.body.classList.remove('physician-mode-active','vitd-patient-active');
  document.documentElement.lang=language();
  document.documentElement.dir=isArabic()?'rtl':'ltr';

  if(!store||!copy||!data||data.v!==1||data.kind!=='oral'){
    root.innerHTML=invalidPage();
    return false;
  }

  root.innerHTML='<div class="oral-guide-page patient-language-page" lang="'+language()+'" dir="'+(isArabic()?'rtl':'ltr')+'">'+
    '<header class="oral-guide-hero">'+languageButton()+
      '<div class="oral-guide-mark" aria-hidden="true">Fe</div>'+
      '<p class="eyebrow">'+esc(copy.eyebrow)+'</p>'+
      '<h1>'+esc(copy.title)+'</h1>'+
      '<p>'+esc(copy.intro)+'</p>'+
    '</header>'+
    '<main class="oral-guide-main">'+
      '<section class="oral-guide-section oral-plan-section">'+
        '<div class="oral-section-heading"><span aria-hidden="true">Rx</span><div><p class="eyebrow">'+esc(copy.prescribed)+'</p><h2>'+esc(copy.prescribed)+'</h2></div></div>'+
        '<div class="oral-plan-grid">'+renderPlanCards(data,copy)+'</div>'+
        '<p class="oral-plan-note">'+esc(copy.prescribedNote)+'</p>'+
      '</section>'+
      '<section class="oral-guide-section">'+
        '<div class="oral-section-heading"><span aria-hidden="true">1</span><div><h2>'+esc(copy.takeTitle)+'</h2><p>'+esc(copy.takeIntro)+'</p></div></div>'+
        '<div class="oral-guide-tip-grid">'+renderTakeCards(copy)+'</div>'+
      '</section>'+
      '<section class="oral-guide-section oral-improvement-section">'+
        '<div class="oral-section-heading"><span aria-hidden="true">✓</span><div><h2>'+esc(copy.improvementTitle)+'</h2><p>'+esc(copy.improvementIntro)+'</p></div></div>'+
        renderImprovements(code,copy)+
      '</section>'+
      '<section class="oral-guide-section oral-timeline-section">'+
        '<div class="oral-section-heading"><span aria-hidden="true">↗</span><div><h2>'+esc(copy.timelineTitle)+'</h2><p>'+esc(copy.timelineIntro)+'</p></div></div>'+
        renderTimeline(copy)+
        '<aside class="oral-guide-note">'+esc(copy.noSymptomsNote)+'</aside>'+
      '</section>'+
      '<section class="oral-guide-section oral-side-effects-section">'+
        '<div class="oral-section-heading"><span aria-hidden="true">?</span><div><h2>'+esc(copy.sideEffectsTitle)+'</h2><p>'+esc(copy.sideEffectsIntro)+'</p></div></div>'+
        renderSideEffects(copy)+
      '</section>'+
      '<section class="oral-guide-contact-grid">'+
        '<article class="oral-guide-contact"><h2>'+esc(copy.contactTitle)+'</h2>'+list(copy.contactItems,'oral-contact-list')+'</article>'+
        '<article class="oral-guide-urgent"><h2>'+esc(copy.urgentTitle)+'</h2><p>'+esc(copy.urgentText)+'</p><strong>'+esc(copy.childSafety)+'</strong></article>'+
      '</section>'+
      '<section class="vitd-save-card oral-guide-save"><h2>'+esc(copy.saveTitle)+'</h2><div class="vitd-save-actions"><button type="button" class="btn dr" data-patient-share>'+esc(copy.share)+'</button><button type="button" class="btn ghost" data-patient-copy>'+esc(copy.copy)+'</button></div><details><summary>'+esc(copy.home)+'</summary><div class="vitd-home-help"><p><strong>'+esc(copy.iphone)+'</strong> '+esc(copy.iphoneHelp)+'</p><p><strong>'+esc(copy.android)+'</strong> '+esc(copy.androidHelp)+'</p></div></details></section>'+
    '</main>'+
  '</div>';

  root.dataset.ironCode=code;
  delete root.dataset.vitdCode;
  return true;
}

function directCode(){
  const route=location.hash||'';
  return route.indexOf(ORAL_ROUTE)===0?route.slice(ORAL_ROUTE.length):'';
}
function renderDirect(){
  const code=directCode();
  return code?render(code):false;
}

const previousIronRoute=window.handleIronRoute;
window.handleIronRoute=function(){
  const code=directCode();
  if(code)return render(code);
  return typeof previousIronRoute==='function'?previousIronRoute.apply(this,arguments):false;
};
window.renderOralIronGuide=render;

document.addEventListener('change',function(event){
  const target=event.target instanceof Element?event.target.closest('[data-oral-improvement]'):null;
  if(!target)return;
  const root=document.getElementById('app'),code=root&&root.dataset.ironCode;
  if(!code)return;
  const done=loadImprovements(code),id=target.dataset.oralImprovement;
  if(target.checked)done.add(id);else done.delete(id);
  saveImprovements(code,done);
  render(code);
});

document.addEventListener('click',function(event){
  const target=event.target instanceof Element?event.target:null;
  if(!target)return;

  if(directCode()&&target.closest('[data-patient-language-toggle]')){
    event.preventDefault();
    event.stopImmediatePropagation();
    localStorage.setItem(LANGUAGE_KEY,isArabic()?'en':'ar');
    renderDirect();
    return;
  }

  const reset=target.closest('[data-oral-guide-reset]');
  if(reset){
    const root=document.getElementById('app'),code=root&&root.dataset.ironCode;
    if(!code)return;
    localStorage.removeItem(IMPROVEMENT_PREFIX+hash(code));
    render(code);
  }
},true);

window.addEventListener('hashchange',function(){window.setTimeout(renderDirect,0)});
renderDirect();
})();