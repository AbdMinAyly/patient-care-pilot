const DATA = window.PATIENT_CARE_CONTENT;
const KEY = 'pc_pilot_v022_profile';
const app = document.getElementById('app');

function esc(s){
  return String(s ?? '').replace(/[&<>"']/g, m => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[m]));
}
function escapeRegExp(s){return String(s).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}

function printSafetyNotice(){
  const notice=DATA.plan?.printSafety;
  if(!notice)return '';
  return `<aside class="print-safety-notice" role="note"><strong>${esc(notice.title)}</strong><p>${esc(notice.text)}</p><p>${esc(notice.followUp)}</p></aside>`;
}

function validateContent(data){
  const errors=[];
  const allowedStatuses=new Set(Object.keys(data?.meta?.contentStatusDefinitions||{}));
  if(!data || !Array.isArray(data.shine) || !Array.isArray(data.healSections) || !Array.isArray(data.drSections)){
    errors.push('Content store is missing required collections.');
  }
  if(data?.meta?.offlineOnly!==true)errors.push('Content must remain marked offline-only.');
  if(data?.meta?.referencesVisible!==false)errors.push('Editorial references must remain hidden from the patient interface.');
  if(!data.dietBuilder || !Array.isArray(data.dietBuilder.items) || !Array.isArray(data.dietBuilder.focusOptions)){
    errors.push('Diet Builder content is missing.');
  }

  const ids=new Set();
  const entities=[];
  const addId=(id,label)=>{
    if(!id) errors.push(label+' is missing an id.');
    else if(ids.has(id)) errors.push('Duplicate id: '+id);
    else ids.add(id);
  };
  (data.shine||[]).forEach(item=>{addId(item.id,'SHINE topic');entities.push({item,area:'shine',sectionId:'shine'})});
  (data.healSections||[]).forEach(sec=>(sec.items||[]).forEach(item=>{addId(item.id,'HEAL item');entities.push({item,area:'heal',sectionId:sec.id})}));
  (data.drSections||[]).forEach(sec=>(sec.items||[]).forEach(item=>{addId(item.id,'DR item');entities.push({item,area:'dr',sectionId:sec.id})}));
  (data.dietBuilder?.items||[]).forEach(item=>addId(item.id,'Diet item'));

  const actionGroups=['foodIdeas','helpfulTasks','supplements','questions','labs'];
  entities.forEach(({item,area,sectionId})=>{
    ['id','title','subtitle','contentStatus','contentTemplate'].forEach(key=>{
      if(!String(item[key]??'').trim())errors.push(item.id+' is missing '+key+'.');
    });
    if(!allowedStatuses.has(item.contentStatus))errors.push(item.id+' has an invalid content status: '+item.contentStatus);
    if(area==='shine'){
      ['why','good','bad'].forEach(key=>{if(!Array.isArray(item[key])||!item[key].length)errors.push(item.id+' is missing SHINE '+key+' content.')});
    }else if(!Array.isArray(item.body)||!item.body.length){
      errors.push(item.id+' is missing teaching points.');
    }
    if(!item.actionPath || typeof item.actionPath!=='object')errors.push(item.id+' is missing an Action Path.');
    actionGroups.forEach(group=>{
      const tasks=item.actionPath?.[group];
      if(tasks===undefined)return;
      if(!Array.isArray(tasks)){errors.push(item.id+' '+group+' must be an array.');return;}
      const taskIds=new Set();
      tasks.forEach(task=>{
        if(!task.id||!String(task.title||'').trim())errors.push(item.id+' has an incomplete '+group+' task.');
        else if(taskIds.has(task.id))errors.push(item.id+' has a duplicate '+group+' task id: '+task.id);
        else taskIds.add(task.id);
      });
    });
    if(!Array.isArray(item.editorialSourceIds))errors.push(item.id+' is missing editorialSourceIds.');
    else if(new Set(item.editorialSourceIds).size!==item.editorialSourceIds.length)errors.push(item.id+' repeats an editorial source id.');
    if(item.contentStatus==='researched' && (!item.researchBatch || !item.editorialSourceIds?.length)){
      errors.push(item.id+' is researched but lacks a research batch or source IDs.');
    }
    if(item.contentStatus==='placeholder' && item.researchBatch){
      errors.push(item.id+' is a placeholder but has a completed research batch.');
    }
    if(!Array.isArray(item.relatedIds))errors.push(item.id+' is missing relatedIds.');
    if(!item.clinicalReview || item.clinicalReview.status!=='clinical-review-required' || !Array.isArray(item.clinicalReview.fields) || !item.clinicalReview.fields.length){
      errors.push(item.id+' is missing a clinical-review queue.');
    }
    if(sectionId==='supplements'||sectionId==='medications'){
      if(!item.lockedDosing || item.lockedDosing.status!=='clinical-review-required' || item.lockedDosing.display!==false){
        errors.push(item.id+' must keep dosing locked.');
      }
    }
  });

  entities.forEach(({item})=>(item.relatedIds||[]).forEach(id=>{if(!ids.has(id))errors.push('Missing related target '+id+' from '+item.id)}));

  const focusIds=new Set((data.dietBuilder?.focusOptions||[]).map(x=>x.id));
  const mealIds=new Set((data.dietBuilder?.mealOptions||[]).map(x=>x.id));
  (data.dietBuilder?.focusOptions||[]).forEach(f=>{
    if(!f.id||!f.label||!f.description)errors.push('Diet focus is incomplete: '+(f.id||'unknown'));
    if(!allowedStatuses.has(f.contentStatus)||!f.researchBatch||!Array.isArray(f.editorialSourceIds)||!f.editorialSourceIds.length){
      errors.push('Diet focus metadata is incomplete: '+f.id);
    }
  });
  (data.dietBuilder?.items||[]).forEach(item=>{
    (item.focus||[]).forEach(f=>{if(!focusIds.has(f))errors.push('Unknown diet focus '+f+' on '+item.id)});
    (item.meals||[]).forEach(m=>{if(!mealIds.has(m))errors.push('Unknown meal slot '+m+' on '+item.id)});
    if(!allowedStatuses.has(item.contentStatus)||!item.researchBatch||!Array.isArray(item.editorialSourceIds)||!item.editorialSourceIds.length){
      errors.push('Diet item metadata is incomplete: '+item.id);
    }
  });

  (data.shine||[]).forEach(s=>{
    (s.good||[]).concat(s.bad||[]).forEach(r=>{if(!ids.has(r.to))errors.push('Missing SHINE target '+r.to+' from '+s.id)});
    (s.healLinks||[]).forEach(r=>{if(!ids.has(r.id))errors.push('Missing HEAL target '+r.id+' from '+s.id)});
    (s.drLinks||[]).forEach(r=>{if(!ids.has(r.id))errors.push('Missing DR target '+r.id+' from '+s.id)});
  });

  const sleepWizard=(data.shine||[]).find(x=>x.id==='sleep')?.wizard;
  if(sleepWizard){
    if(!Array.isArray(sleepWizard.steps)||sleepWizard.steps.length!==4)errors.push('Sleep Wizard must contain four selection steps.');
    if(!Array.isArray(sleepWizard.categories)||!sleepWizard.categories.length)errors.push('Sleep Wizard categories are missing.');
    if(!Array.isArray(sleepWizard.recommendations)||!sleepWizard.recommendations.length)errors.push('Sleep Wizard recommendations are missing.');
    const wizardStepIds=new Set((sleepWizard.steps||[]).map(step=>step.id));
    const wizardOptionIds={};
    (sleepWizard.steps||[]).forEach(step=>{
      if(!step.id||!step.title||!Array.isArray(step.options)||!step.options.length)errors.push('Sleep Wizard has an incomplete step.');
      const optionIds=new Set();
      (step.options||[]).forEach(option=>{
        if(!option.id||!option.label)errors.push('Sleep Wizard has an incomplete option in '+step.id+'.');
        else if(optionIds.has(option.id))errors.push('Sleep Wizard repeats option '+option.id+' in '+step.id+'.');
        else optionIds.add(option.id);
      });
      wizardOptionIds[step.id]=optionIds;
    });
    const categoryIds=new Set((sleepWizard.categories||[]).map(category=>category.id));
    const recommendationIds=new Set();
    (sleepWizard.recommendations||[]).forEach(rec=>{
      if(!rec.id||recommendationIds.has(rec.id))errors.push('Sleep Wizard has an invalid or duplicate recommendation id: '+rec.id);
      else recommendationIds.add(rec.id);
      if(!categoryIds.has(rec.category))errors.push('Sleep Wizard recommendation '+rec.id+' has an unknown category.');
      const ref=rec.taskRef||{};
      const entity=entities.find(x=>x.item.id===ref.itemId)?.item;
      const task=entity?.actionPath?.[ref.group]?.find(task=>task.id===ref.taskId);
      if(!task)errors.push('Sleep Wizard recommendation '+rec.id+' has a broken task reference.');
      Object.entries(rec.when||{}).forEach(([stepId,optionIds])=>{
        if(!wizardStepIds.has(stepId))errors.push('Sleep Wizard recommendation '+rec.id+' uses unknown step '+stepId+'.');
        (optionIds||[]).forEach(optionId=>{if(!wizardOptionIds[stepId]?.has(optionId))errors.push('Sleep Wizard recommendation '+rec.id+' uses unknown option '+optionId+'.')});
      });
    });
  }

  const scanForUrls=(value,path)=>{
    if(typeof value==='string' && /https?:\/\//i.test(value))errors.push('Patient content contains an online URL at '+path+'.');
    else if(Array.isArray(value))value.forEach((v,i)=>scanForUrls(v,path+'['+i+']'));
    else if(value&&typeof value==='object')Object.entries(value).forEach(([k,v])=>scanForUrls(v,path+'.'+k));
  };
  ['ui','shine','healSections','drSections','plan','dietBuilder'].forEach(key=>scanForUrls(data[key],key));

  const printSafety=data.plan?.printSafety;
  if(!printSafety || !['title','text','followUp'].every(key=>String(printSafety[key]||'').trim())){
    errors.push('Print safety notice is missing required wording.');
  }

  const shinePath=data.plan?.shinePath;
  const requiredPathLabels=['title','subtitle','eyebrow','summaryTitle','connectedLabel','ariaLabel','infographicEyebrow','infographicTitle','infographicIntro','hubLabel','hubCountLabel','savedLabel','coreListEyebrow','coreListTitle','coreListIntro','finishTitle','finishText','empty','backButton','printButton','openCoreButton','moreLabel'];
  if(!shinePath || !Array.isArray(shinePath.stages)){
    errors.push('Your SHINE Path configuration is missing.');
  }else{
    requiredPathLabels.forEach(key=>{if(!String(shinePath[key]||'').trim())errors.push('Your SHINE Path label is missing: '+key)});
    if(shinePath.stages.length!==4)errors.push('Your SHINE Path must contain exactly four stages.');
    const coreIds=new Set((data.plan?.cores||[]).map(core=>core.id));
    const stageIds=new Set();
    shinePath.stages.forEach(stage=>{
      if(!stage.id || stageIds.has(stage.id))errors.push('Invalid or duplicate SHINE Path stage id: '+stage.id);
      else stageIds.add(stage.id);
      if(!coreIds.has(stage.id))errors.push('SHINE Path stage has no matching Plan Core: '+stage.id);
      ['step','verb','title','coreTitle','icon','color','description','sentenceLead'].forEach(key=>{
        if(!String(stage[key]||'').trim())errors.push('SHINE Path stage '+stage.id+' is missing '+key);
      });
    });
  }
  if(errors.length){
    console.error('Patient Care content validation errors:',errors);
    document.body.innerHTML='<main style="padding:24px;font-family:system-ui"><h1>Content file error</h1><p>The local content file could not be loaded safely.</p><pre style="white-space:pre-wrap">'+errors.map(esc).join('\n')+'</pre></main>';
    throw new Error(errors.join('; '));
  }
}
validateContent(DATA);

const shineById=Object.fromEntries(DATA.shine.map(x=>[x.id,x]));
function isPlaceholder(item){
  return item?.contentStatus === 'placeholder';
}
function visibleItems(items){
  return (items||[]).filter(item=>!isPlaceholder(item));
}
function rawHealItems(){
  return DATA.healSections.flatMap(section=>(section.items||[]).map(item=>({...item,section:section.title,sectionId:section.id,area:'heal'})));
}
function rawDrItems(){
  return DATA.drSections.flatMap(section=>(section.items||[]).map(item=>({...item,section:section.title,sectionId:section.id,area:'dr'})));
}
function renderDetailNavigation(area,item){
  const labels=DATA.ui.clarity||{};
  if(area==='shine')return `<a class="detail-back" href="#/shine">${esc(labels.backToShine||'← Back to SHINE')}</a>`;
  const sectionId=item?.sectionId||'';
  const sectionTitle=item?.section||area.toUpperCase();
  const prefix=labels.backToSectionPrefix||'← Back to';
  return `<a class="detail-back" href="#/${area}/${esc(sectionId)}">${esc(prefix)} ${esc(sectionTitle)}</a>`;
}
function warningTeachingPoints(item){
  const pattern=/(seek\s+(?:urgent|emergency|prompt)|call\s+(?:local\s+)?emergency|red\s+flags?|serious\s+(?:warning|risks?)|emergency\s+symptoms?|urgent\s+symptoms?|immediate\s+(?:danger|emergency)|requires?\s+(?:urgent|emergency)|urgent\s+help|emergency\s+(?:help|care|services?))/i;
  return [...new Set((item?.body||[]).filter(point=>pattern.test(point)))];
}
function renderAtAGlance(item){
  if(item?.sectionId==='er')return '';
  const points=(item?.body||[]).slice(0,2);
  if(!points.length)return '';
  const label=DATA.ui.clarity?.atAGlance||'At a glance';
  return `<section class="at-a-glance"><h3>${esc(label)}</h3><ul class="bullets">${points.map(point=>`<li>${esc(point)}</li>`).join('')}</ul></section>`;
}
function renderImportantTeaching(item){
  const warnings=warningTeachingPoints(item);
  if(!warnings.length)return '';
  const label=DATA.ui.clarity?.important||'Important';
  return `<aside class="important-teaching" role="note"><h3>${esc(label)}</h3><ul>${warnings.map(point=>`<li>${esc(point)}</li>`).join('')}</ul></aside>`;
}
function renderTeachingDetails(item){
  const emergency=item?.sectionId==='er';
  const label=DATA.ui.clarity?.readFullTeachingDetails||'Read full teaching details';
  return `<details class="teaching-details" ${emergency?'open':''}><summary><span>${esc(label)}</span><strong>${(item?.body||[]).length}</strong></summary><div class="teaching-details-body"><ul class="bullets">${(item?.body||[]).map(point=>`<li>${esc(point)}</li>`).join('')}</ul></div></details>`;
}
function taskCountForCore(profileData,core){return (profileData.planTasks||[]).filter(task=>taskStage(task)===core).length}
function planTasksForCore(profileData,coreId){return (profileData.planTasks||[]).filter(task=>taskStage(task)===coreId)}
function renderPlanTaskRows(tasks){
  if(!tasks.length)return '<div class="plan-empty">No next-step tasks saved yet.</div>';
  return tasks.map(task=>`<div class="plan-row task-plan-row"><div><strong>${esc(task.title)}</strong><span>${esc(task.itemTitle)} • ${esc(task.groupLabel)}</span></div><button class="mini-remove no-print" data-remove-task-key="${esc(task.key)}">Remove</button></div>`).join('');
}
function renderNextActions(profileData){
  const tasks=(profileData.planTasks||[]).slice(0,3);
  if(!tasks.length)return '';
  const labels=DATA.ui.clarity||{};
  return `<section class="plan-next-actions"><div><p class="eyebrow">${esc(labels.nextActionsEyebrow||'NEXT ACTIONS')}</p><h2>${esc(labels.nextActionsTitle||'What you saved to do or discuss')}</h2></div>${tasks.map(task=>`<article><strong>${esc(task.title)}</strong><span>${esc(task.itemTitle)} • ${esc(task.groupLabel)}</span></article>`).join('')}</section>`;
}
function focusPageHeading(){
  requestAnimationFrame(()=>{
    const heading=document.querySelector('main h1, main h2, #app h1, #app h2');
    if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true})}
  });
}
function allHealItems(){return visibleItems(rawHealItems())}
function allDrItems(){return visibleItems(rawDrItems())}
function findHeal(id){return rawHealItems().find(item=>item.id===id)}
function findDr(id){return rawDrItems().find(item=>item.id===id)}
function findDietItem(id){return DATA.dietBuilder.items.find(x=>x.id===id)}
function focusById(id){return DATA.dietBuilder.focusOptions.find(x=>x.id===id)}
function mealById(id){return DATA.dietBuilder.mealOptions.find(x=>x.id===id)}
function visibleShineTopics(){return DATA.shine.filter(topic=>!isPlaceholder(topic))}
function normalizeShineFocus(ids){
  const valid=new Set(visibleShineTopics().map(topic=>topic.id));
  const seen=new Set();
  return (Array.isArray(ids)?ids:[]).filter(id=>valid.has(id)&&!seen.has(id)&&seen.add(id)).slice(0,2);
}
function rawStoredProfile(){
  try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}
}
function legacyShineFocusNeedsReview(){
  const raw=rawStoredProfile();
  return !Array.isArray(raw.shineFocus)&&Array.isArray(raw.shine)&&raw.shine.length>2;
}

function defaultProfile(){
  return {
    version:22,
    shine:[],
    shineFocus:[],
    heal:[],
    dr:[],
    dietItems:[],
    questions:[],
    planTasks:[],
    sleepWizard:{conditions:[],schedule:[],patterns:[],factors:[]},
    planNotes:{daily:'',food:'',treatment:'',doctor:''},
    createdAt:new Date().toISOString()
  };
}
function profile(){
  try{
    const parsed=rawStoredProfile();
    const base=defaultProfile();
    const legacyShine=Array.isArray(parsed.shine)?parsed.shine:[];
    const hasExplicitFocus=Array.isArray(parsed.shineFocus);
    const explicitFocus=hasExplicitFocus?parsed.shineFocus:[];
    const shineFocus=normalizeShineFocus(hasExplicitFocus?explicitFocus:legacyShine);
    return {
      ...base,
      ...parsed,
      shine:legacyShine,
      shineFocus,
      heal:Array.isArray(parsed.heal)?parsed.heal:[],
      dr:Array.isArray(parsed.dr)?parsed.dr:[],
      dietItems:Array.isArray(parsed.dietItems)?parsed.dietItems:[],
      questions:Array.isArray(parsed.questions)?parsed.questions:[],
      planTasks:Array.isArray(parsed.planTasks)?parsed.planTasks:[],
      sleepWizard:{
        ...base.sleepWizard,
        ...(parsed.sleepWizard||{}),
        conditions:Array.isArray(parsed.sleepWizard?.conditions)?parsed.sleepWizard.conditions:[],
        schedule:Array.isArray(parsed.sleepWizard?.schedule)?parsed.sleepWizard.schedule:[],
        patterns:Array.isArray(parsed.sleepWizard?.patterns)?parsed.sleepWizard.patterns:[],
        factors:Array.isArray(parsed.sleepWizard?.factors)?parsed.sleepWizard.factors:[]
      },
      planNotes:{...base.planNotes,...(parsed.planNotes||{})}
    };
  }catch(e){
    return defaultProfile();
  }
}
function saveProfile(p){
  p.version=22;
  p.shineFocus=normalizeShineFocus(p.shineFocus);
  p.updatedAt=new Date().toISOString();
  localStorage.setItem(KEY,JSON.stringify(p));
}

let pendingShineFocusId=null;
function shineFocusLabels(){return DATA.ui.shineFocus}
function selectedShineFocus(p=profile()){return normalizeShineFocus(p.shineFocus)}
function selectedShineFocusTopics(p=profile()){return selectedShineFocus(p).map(id=>shineById[id]).filter(Boolean)}
function primaryShineFocus(p=profile()){return selectedShineFocusTopics(p)[0]||null}
function secondaryShineFocus(p=profile()){return selectedShineFocusTopics(p)[1]||null}
function formatFocusLabel(template,value){return String(template||'').replace('{focus}',value).replace('{topic}',value)}
function buildShineFocusIndex(){
  const index=new Map();
  const add=(itemId,shineId,relation)=>{
    const list=index.get(itemId)||[];
    if(!list.some(entry=>entry.shineId===shineId&&entry.relation===relation))list.push({shineId,relation});
    index.set(itemId,list);
  };
  visibleShineTopics().forEach(topic=>{
    (topic.healLinks||[]).forEach(link=>{const target=findHeal(link.id);if(target&&!isPlaceholder(target))add(link.id,topic.id,'supports')});
    (topic.drLinks||[]).forEach(link=>{const target=findDr(link.id);if(target&&!isPlaceholder(target))add(link.id,topic.id,'affects')});
  });
  return index;
}
const shineFocusIndex=buildShineFocusIndex();
function focusRelationsForItem(itemId,focusIds=selectedShineFocus()){
  const chosen=new Set(focusIds);
  return (shineFocusIndex.get(itemId)||[]).filter(entry=>chosen.has(entry.shineId));
}
function focusBadgeForItem(itemId,focusIds=selectedShineFocus()){
  const relations=focusRelationsForItem(itemId,focusIds);
  if(!relations.length)return null;
  const topics=focusIds.map(id=>shineById[id]).filter(topic=>topic&&relations.some(entry=>entry.shineId===topic.id));
  const names=topics.map(topic=>topic.title).join(' + ');
  const relationTypes=new Set(relations.map(entry=>entry.relation));
  const labels=shineFocusLabels();
  const relation=relationTypes.size===1?[...relationTypes][0]:'relevant';
  const template=relation==='supports'?labels.supports:relation==='affects'?labels.affects:labels.relevant;
  return {relation,text:formatFocusLabel(template,names)};
}
function focusMatchClass(itemId){return focusBadgeForItem(itemId)?' focus-match':''}
function renderFocusBadge(itemId){
  const badge=focusBadgeForItem(itemId);
  return badge?`<span class="focus-relevance-badge ${esc(badge.relation)}">${esc(badge.text)}</span>`:'';
}
function renderShineFocusBar(){
  const labels=shineFocusLabels();
  const topics=selectedShineFocusTopics();
  if(!topics.length)return `<section class="shine-focus-bar no-print" aria-label="${esc(labels.focusBarAria)}"><div><small>${esc(labels.eyebrow)}</small><strong>${esc(labels.noFocus)}</strong><span>${esc(labels.chooseFocusPrompt)}</span></div><a href="#/shine">${esc(labels.chooseFocus)}</a></section>`;
  return `<section class="shine-focus-bar no-print" aria-label="${esc(labels.focusBarAria)}"><div><small>${esc(labels.eyebrow)}</small><strong>${esc(labels.currentFocus)}: ${esc(topics[0].title)}</strong>${topics[1]?`<span>${esc(labels.alsoFocus)}: ${esc(topics[1].title)}</span>`:''}</div><a href="#/shine">${esc(labels.changeFocus)}</a></section>`;
}
function renderPlanShineFocusSummary(p=profile()){
  const labels=shineFocusLabels();
  const topics=selectedShineFocusTopics(p);
  return `<section class="plan-shine-focus"><div><p class="eyebrow">${esc(labels.planTitle)}</p>${topics.length?`<h2>${esc(topics[0].title)}</h2>${topics[1]?`<p><strong>${esc(labels.alsoFocus)}:</strong> ${esc(topics[1].title)}</p>`:''}`:`<h2>${esc(labels.noFocus)}</h2><p>${esc(labels.chooseFocusPrompt)}</p>`}<p>${esc(labels.planText)}</p><small>${esc(labels.focusNotPlan)}</small></div><a class="btn ghost button-link no-print" href="#/shine">${esc(labels.changeFocus)}</a></section>`;
}
function renderShineFocusControls(topic,compact=false){
  const labels=shineFocusLabels();
  const ids=selectedShineFocus();
  const position=ids.indexOf(topic.id);
  if(position===0)return `<div class="shine-focus-actions ${compact?'compact':''}"><span class="shine-focus-status primary">${esc(labels.primaryFocus)}</span><button type="button" class="shine-focus-button remove" data-toggle-shine-focus="${esc(topic.id)}">${esc(labels.removeFocus)}</button></div>`;
  if(position===1)return `<div class="shine-focus-actions ${compact?'compact':''}"><span class="shine-focus-status secondary">${esc(labels.secondaryFocus)}</span><button type="button" class="shine-focus-button" data-promote-shine-focus="${esc(topic.id)}">${esc(labels.makePrimary)}</button><button type="button" class="shine-focus-button remove" data-toggle-shine-focus="${esc(topic.id)}">${esc(labels.removeFocus)}</button></div>`;
  const text=ids.length===0?formatFocusLabel(labels.makeTopicPrimary,topic.title):ids.length===1?labels.addSecond:labels.chooseFocus;
  return `<div class="shine-focus-actions ${compact?'compact':''}"><button type="button" class="shine-focus-button choose" data-toggle-shine-focus="${esc(topic.id)}" aria-pressed="false">${esc(text)}</button></div>`;
}
function renderShineFocusHomeCard(topic){
  const labels=shineFocusLabels();
  if(isPlaceholder(topic))return `<article class="card mode-card shine placeholder-card" aria-disabled="true"><div class="big-letter">${esc(topic.letter)}</div><h3>${esc(topic.title)}</h3><p>${esc(topic.subtitle)}</p><span class="coming-soon">${esc(DATA.ui.clarity.comingSoon)}</span></article>`;
  const selected=selectedShineFocus().includes(topic.id);
  return `<article class="card mode-card shine shine-focus-card ${selected?'focus-selected':''}"><a class="shine-card-link" href="#/shine/${esc(topic.id)}"><div class="big-letter">${esc(topic.letter)}</div><h3>${esc(topic.title)}</h3><p>${esc(topic.subtitle)}</p></a>${renderShineFocusControls(topic,true)}</article>`;
}
function renderShineFocusIntro(){
  const labels=shineFocusLabels();
  const topics=selectedShineFocusTopics();
  const migration=legacyShineFocusNeedsReview()?`<aside class="shine-focus-migration"><strong>${esc(labels.migrationTitle)}</strong><span>${esc(labels.migrationText)}</span></aside>`:'';
  return `<section class="shine-focus-intro"><p class="eyebrow">${esc(labels.eyebrow)}</p><h2>${esc(labels.title)}</h2><p>${esc(labels.intro)}</p><small>${esc(labels.oneRecommended)}</small>${topics.length?`<div class="shine-focus-current"><strong>${esc(labels.currentFocus)}: ${esc(topics[0].title)}</strong>${topics[1]?`<span>${esc(labels.alsoFocus)}: ${esc(topics[1].title)}</span>`:''}</div>`:''}${migration}</section>`;
}
function openShineFocusReplace(topicId){
  const topic=shineById[topicId];
  if(!topic||isPlaceholder(topic))return;
  pendingShineFocusId=topicId;
  const labels=shineFocusLabels();
  const topics=selectedShineFocusTopics();
  const modal=document.createElement('div');
  modal.id='shine-focus-modal';
  modal.className='shine-focus-modal';
  modal.innerHTML=`<div class="shine-focus-backdrop" data-close-shine-focus="1"></div><section class="shine-focus-dialog" role="dialog" aria-modal="true" aria-labelledby="shine-focus-dialog-title"><button class="shine-focus-close" data-close-shine-focus="1" aria-label="${esc(labels.close)}">×</button><p class="eyebrow">${esc(labels.eyebrow)}</p><h2 id="shine-focus-dialog-title">${esc(labels.maxTitle)}</h2><p>${esc(formatFocusLabel(labels.maxText,topic.title))}</p><div class="shine-focus-replace-actions">${topics.map(existing=>`<button type="button" class="btn ghost" data-replace-shine-focus="${esc(existing.id)}">${esc(formatFocusLabel(labels.replaceFocus,existing.title))}</button>`).join('')}<button type="button" class="btn ghost" data-close-shine-focus="1">${esc(labels.cancel)}</button></div></section>`;
  document.body.appendChild(modal);
  document.body.classList.add('focus-modal-open');
  modal.querySelector('[data-replace-shine-focus]')?.focus();
}
function closeShineFocusReplace(){
  document.getElementById('shine-focus-modal')?.remove();
  document.body.classList.remove('focus-modal-open');
  pendingShineFocusId=null;
}
function toggleShineFocus(topicId){
  const topic=shineById[topicId];
  if(!topic||isPlaceholder(topic))return;
  const p=profile();
  const ids=selectedShineFocus(p);
  if(ids.includes(topicId))p.shineFocus=ids.filter(id=>id!==topicId);
  else if(ids.length<2)p.shineFocus=[...ids,topicId];
  else{openShineFocusReplace(topicId);return}
  saveProfile(p);
  route();
}
function promoteShineFocus(topicId){
  const p=profile();
  const ids=selectedShineFocus(p);
  if(!ids.includes(topicId))return;
  p.shineFocus=[topicId,...ids.filter(id=>id!==topicId)];
  saveProfile(p);
  route();
}
function replaceShineFocus(existingId){
  if(!pendingShineFocusId)return;
  const p=profile();
  const ids=selectedShineFocus(p);
  const index=ids.indexOf(existingId);
  if(index<0)return;
  ids[index]=pendingShineFocusId;
  p.shineFocus=normalizeShineFocus(ids);
  saveProfile(p);
  closeShineFocusReplace();
  route();
}
function clearPlanItems(){
  const p=profile();
  p.heal=[];
  p.dr=[];
  p.dietItems=[];
  p.questions=[];
  p.planTasks=[];
  p.planNotes={...defaultProfile().planNotes};
  saveProfile(p);
  route();
}

function setActive(mode){
  ['shine','heal','dr','summary'].forEach(m=>{
    const el=document.getElementById('nav-'+m);
    if(!el)return;
    el.className='navbtn'+(m===mode?' active-'+m:'');
  });
}
function hero(mode,title,text){
  return `<section class="hero ${mode}"><small>${esc(mode==='summary'?'plan':mode)}</small><h1>${esc(title)}</h1><p>${esc(text)}</p></section>`;
}
function linkifyShine(text,current){
  let out=esc(text);
  DATA.shine.forEach(topic=>{
    if(topic.id===current||isPlaceholder(topic))return;
    out=out.replace(new RegExp(`\\b(${escapeRegExp(topic.title)})\\b`,'gi'),`<a class="inline-shine" href="#/shine/${topic.id}">$1</a>`);
  });
  return out;
}
function connectionRows(rows,current){
  return `<div class="connection-list">${(rows||[]).map(r=>`
    <div class="connection-row with-icon">
      <span class="connection-icon" aria-hidden="true">${esc(r.icon)}</span>
      <p class="connection-copy">${linkifyShine(r.text,current)}</p>
    </div>`).join('')}</div>`;
}
function conditionRows(rows,heading){
  const visible=(rows||[]).filter(row=>{const target=findDr(row.id);return target&&!isPlaceholder(target)});
  if(!visible.length)return '';
  return `<div class="info-card dr-bridge"><h3>${esc(heading||'Common conditions')}</h3><div class="condition-grid">${visible.map(row=>`<a class="condition-card${focusMatchClass(row.id)}" href="#/dr/item/${esc(row.id)}">${renderFocusBadge(row.id)}<strong>${esc(row.title)}</strong><span>${esc(row.text)}</span></a>`).join('')}</div></div>`;
}
function healHabitRows(rows,heading,intro){
  const visible=(rows||[]).filter(row=>{const target=findHeal(row.id);return target&&!isPlaceholder(target)});
  if(!visible.length)return '';
  return `<div class="info-card heal-bridge"><h3>${esc(heading||'Good habits')}</h3>${intro?`<p class="mini">${esc(intro)}</p>`:''}<div class="habit-grid">${visible.map(row=>`<a class="habit-card${focusMatchClass(row.id)}" href="#/heal/item/${esc(row.id)}">${renderFocusBadge(row.id)}<strong>${esc(row.title)}</strong><span>${esc(row.text)}</span></a>`).join('')}</div></div>`;
}
function sectionCards(sections,area){
  return sections.map(section=>{
    const items=visibleItems(section.items);
    if(!items.length)return '';
    return `<a class="card mode-card ${area}" href="#/${area}/${section.id}"><div class="big-letter">${esc(section.icon)}</div><h3>${esc(section.title)}</h3><p>${esc(section.subtitle)}</p></a>`;
  }).join('');
}

function renderShine(){
  setActive('shine');
  app.innerHTML=`<div class="screen">${hero('shine','SHINE',DATA.ui.modeDescriptions.shine)}${renderShineFocusIntro()}<section class="grid shine-focus-grid">${DATA.shine.map(renderShineFocusHomeCard).join('')}</section></div>`;
}
function sleepWizardConfig(){return shineById.sleep?.wizard||null}
function sleepWizardSelectionCount(state=profile().sleepWizard){
  return ['conditions','schedule','patterns','factors'].reduce((sum,key)=>sum+(state?.[key]?.length||0),0);
}
function renderSleepWizardLaunch(item){
  const wizard=item.id==='sleep'?item.wizard:null;
  if(!wizard)return '';
  const count=sleepWizardSelectionCount();
  return `<section class="sleep-wizard-launch no-print">
    <div class="sleep-wizard-launch-glow" aria-hidden="true"></div>
    <div class="sleep-wizard-launch-copy">
      <p class="eyebrow">PERSONAL SLEEP BUILDER</p>
      <h3>${esc(wizard.title)}</h3>
      <p>${esc(wizard.subtitle)}</p>
      <div class="sleep-wizard-launch-meta"><span>Conditions</span><span>Schedule</span><span>Sleep pattern</span><span>Daily life</span></div>
    </div>
    <div class="sleep-wizard-launch-action">
      ${count?`<strong>${count}</strong><span>choice${count===1?'':'s'} saved</span>`:'<strong>4</strong><span>guided steps</span>'}
      <button class="btn sleep-wizard-button" data-open-sleep-wizard="1">${esc(count?(wizard.resumeLabel||wizard.launchLabel):wizard.launchLabel)}</button>
    </div>
  </section>`;
}
function cloneWizardSelections(value){
  const base={conditions:[],schedule:[],patterns:[],factors:[]};
  return Object.fromEntries(Object.keys(base).map(key=>[key,Array.isArray(value?.[key])?[...value[key]]:[]]));
}
function openSleepWizard(){
  const wizard=sleepWizardConfig();
  if(!wizard)return;
  sleepWizardState=cloneWizardSelections(profile().sleepWizard);
  sleepWizardStep=0;
  document.body.classList.add('wizard-open');
  renderSleepWizardModal();
}
function closeSleepWizard(refreshPage=true){
  document.getElementById('sleep-wizard-modal')?.remove();
  document.body.classList.remove('wizard-open');
  sleepWizardState=null;
  if(refreshPage&&location.hash==='#/shine/sleep')renderShineTopic('sleep');
}
function saveSleepWizardSelections(){
  if(!sleepWizardState)return;
  const p=profile();
  p.sleepWizard=cloneWizardSelections(sleepWizardState);
  saveProfile(p);
}
function wizardOptionLabel(stepId,optionId){
  const step=sleepWizardConfig()?.steps.find(x=>x.id===stepId);
  return step?.options.find(x=>x.id===optionId)?.label||optionId;
}
function matchingSleepWizardRecommendations(){
  const wizard=sleepWizardConfig();
  if(!wizard||!sleepWizardState)return [];
  const matches=[];
  wizard.recommendations.forEach(rec=>{
    let score=rec.always?1:0;
    Object.entries(rec.when||{}).forEach(([stepId,optionIds])=>{
      score+=(optionIds||[]).filter(id=>(sleepWizardState[stepId]||[]).includes(id)).length;
    });
    if(!rec.always&&score===0)return;
    const task=findActionTask(rec.taskRef.itemId,rec.taskRef.group,rec.taskRef.taskId);
    if(!task)return;
    matches.push({...rec,task,score});
  });
  const bestByTask=new Map();
  matches.forEach(rec=>{
    const current=bestByTask.get(rec.task.key);
    if(!current||rec.score*100+(rec.priority||0)>current.score*100+(current.priority||0))bestByTask.set(rec.task.key,rec);
  });
  const categoryOrder=new Map(wizard.categories.map((category,index)=>[category.id,index]));
  const grouped={};
  [...bestByTask.values()].sort((a,b)=>(categoryOrder.get(a.category)-categoryOrder.get(b.category))||(b.score-a.score)||((b.priority||0)-(a.priority||0))).forEach(rec=>{
    grouped[rec.category]=grouped[rec.category]||[];
    if(grouped[rec.category].length<(wizard.maxPerCategory||4))grouped[rec.category].push(rec);
  });
  return wizard.categories.flatMap(category=>(grouped[category.id]||[]).map(rec=>({...rec,categoryData:category})));
}
function sleepWizardChoiceSummary(){
  if(!sleepWizardState)return '';
  const chips=[];
  Object.entries(sleepWizardState).forEach(([stepId,ids])=>(ids||[]).forEach(id=>chips.push(`<span>${esc(wizardOptionLabel(stepId,id))}</span>`)));
  return chips.length?`<div class="sleep-wizard-choice-summary">${chips.join('')}</div>`:`<p class="sleep-wizard-empty-choice">${esc(sleepWizardConfig()?.emptySelection||'')}</p>`;
}
function renderSleepWizardResults(){
  const wizard=sleepWizardConfig();
  const recommendations=matchingSleepWizardRecommendations();
  const grouped=wizard.categories.map(category=>({category,items:recommendations.filter(rec=>rec.category===category.id)})).filter(group=>group.items.length);
  const unsaved=recommendations.filter(rec=>!taskIsSaved(rec.task.itemId,rec.task.group,rec.task.taskId));
  return `<div class="sleep-wizard-results">
    <div class="sleep-wizard-results-head"><p class="eyebrow">YOUR MATCHED HEAL ACTIONS</p><h3>${esc(wizard.resultsTitle)}</h3><p>${esc(wizard.resultsIntro)}</p></div>
    ${sleepWizardChoiceSummary()}
    <div class="sleep-wizard-result-groups">${grouped.map(({category,items})=>`<section class="sleep-wizard-result-group">
      <h4><span>${esc(category.icon)}</span>${esc(category.title)}</h4>
      ${items.map(rec=>{
        const saved=taskIsSaved(rec.task.itemId,rec.task.group,rec.task.taskId);
        return `<article class="sleep-wizard-result-card"><div><strong>${esc(rec.task.title)}</strong><p>${esc(rec.reason)}</p><small>From ${esc(rec.task.itemTitle)}</small></div><button class="task-add ${saved?'saved':''}" data-add-task="1" data-origin="sleep-wizard" data-item="${esc(rec.task.itemId)}" data-group="${esc(rec.task.group)}" data-task="${esc(rec.task.taskId)}">${saved?'Added ✓':'Add to plan'}</button></article>`;
      }).join('')}
    </section>`).join('')}</div>
    <button class="btn sleep-wizard-add-all" data-wizard-add-all="1" ${unsaved.length?'':'disabled'}>${esc(unsaved.length?(wizard.addAllLabel||'Add all shown actions'):(wizard.addedAllLabel||'All shown actions added'))}</button>
  </div>`;
}
function renderSleepWizardModal(){
  const wizard=sleepWizardConfig();
  if(!wizard||!sleepWizardState)return;
  const isResults=sleepWizardStep>=wizard.steps.length;
  const step=wizard.steps[sleepWizardStep];
  const existing=document.getElementById('sleep-wizard-modal');
  const modal=existing||document.createElement('div');
  modal.id='sleep-wizard-modal';
  modal.className='sleep-wizard-modal';
  const progress=Math.round(((isResults?wizard.steps.length:sleepWizardStep+1)/wizard.steps.length)*100);
  modal.innerHTML=`<div class="sleep-wizard-backdrop" data-close-sleep-wizard="1"></div>
    <section class="sleep-wizard-dialog" role="dialog" aria-modal="true" aria-labelledby="sleep-wizard-title">
      <header class="sleep-wizard-dialog-head">
        <div><p class="eyebrow">SHINE / SLEEP</p><h2 id="sleep-wizard-title">${esc(wizard.title)}</h2></div>
        <button class="sleep-wizard-close" data-close-sleep-wizard="1" aria-label="${esc(wizard.closeLabel)}">×</button>
      </header>
      <div class="sleep-wizard-progress"><span style="width:${progress}%"></span></div>
      <div class="sleep-wizard-dialog-body">${isResults?renderSleepWizardResults():`<div class="sleep-wizard-step-head"><p class="eyebrow">${esc(step.eyebrow)}</p><h3>${esc(step.title)}</h3><p>${esc(step.intro)}</p></div>
        <div class="sleep-wizard-option-grid">${step.options.map(option=>{
          const selected=(sleepWizardState[step.id]||[]).includes(option.id);
          return `<button type="button" class="sleep-wizard-option ${selected?'selected':''}" data-wizard-step="${esc(step.id)}" data-wizard-option="${esc(option.id)}" aria-pressed="${selected}"><span class="sleep-wizard-option-icon">${esc(option.icon)}</span><span><strong>${esc(option.label)}</strong><small>${esc(option.detail)}</small></span><b>${selected?'✓':'+'}</b></button>`;
        }).join('')}</div>`}</div>
      <footer class="sleep-wizard-dialog-foot">
        <button class="btn ghost" data-wizard-back="1" ${sleepWizardStep===0?'disabled':''}>${esc(wizard.backLabel)}</button>
        <span>${isResults?'Results':`Step ${sleepWizardStep+1} of ${wizard.steps.length}`}</span>
        ${isResults?`<button class="btn dark" data-close-sleep-wizard="1">Done</button>`:`<button class="btn sleep-wizard-next" data-wizard-next="1">${esc(sleepWizardStep===wizard.steps.length-1?wizard.resultsLabel:wizard.nextLabel)}</button>`}
      </footer>
    </section>`;
  if(!existing){document.body.appendChild(modal);modal.querySelector('.sleep-wizard-close')?.focus()}
}
function toggleSleepWizardOption(stepId,optionId){
  if(!sleepWizardState?.[stepId])return;
  const current=sleepWizardState[stepId];
  sleepWizardState[stepId]=current.includes(optionId)?current.filter(id=>id!==optionId):[...current,optionId];
  saveSleepWizardSelections();
  renderSleepWizardModal();
}
function addAllSleepWizardRecommendations(){
  const recs=matchingSleepWizardRecommendations();
  const p=profile();
  p.planTasks=p.planTasks||[];
  let added=0;
  recs.forEach(rec=>{
    if(!p.planTasks.some(task=>task.key===rec.task.key)){
      p.planTasks.push({...rec.task,origin:'sleep-wizard'});
      added++;
    }
  });
  saveProfile(p);
  showToast(added?`${added} Sleep action${added===1?'':'s'} added`:'All shown actions are already in Your Plan');
  renderSleepWizardModal();
}

function renderShineTopic(id){
  setActive('shine');
  const topic=shineById[id];
  if(!topic||isPlaceholder(topic)){
    history.replaceState(null,'',location.pathname+location.search+'#/shine');
    renderShine();
    return;
  }
  const headings=topic.headings||{};
  app.innerHTML=`<div class="screen">${renderShineFocusBar()}<section class="detail shine readable-detail">
    ${renderDetailNavigation('shine',topic)}
    <p class="eyebrow">SHINE / ${esc(topic.title)}</p>
    <h2>${esc(topic.title)}</h2>
    <p class="lead">${esc(topic.subtitle)}</p>
    <div class="info-card primary">
      <h3>${esc(headings.why||('1. Why '+topic.title+' matters'))}</h3>
      <ul class="bullets">${(topic.why||[]).map(point=>`<li>${linkifyShine(point,topic.id)}</li>`).join('')}</ul>
      <div class="savebar no-print">${renderShineFocusControls(topic)}</div>
    </div>
    <div class="info-card"><h3>${esc(headings.positive||('2. How '+topic.title+' helps SHINE'))}</h3>${connectionRows(topic.good||[],topic.id)}</div>
    <div class="info-card"><h3>${esc(headings.negative||('3. How weak '+topic.title+' affects SHINE'))}</h3>${connectionRows(topic.bad||[],topic.id)}</div>
    ${healHabitRows(topic.healLinks,headings.habits,topic.habitIntro)}
    ${conditionRows(topic.drLinks,headings.conditions)}
    ${topic.id==='sleep'?renderSleepWizardLaunch(topic):renderActionPath({...topic,section:'SHINE',sectionId:'shine'})}
  </section></div>`;
}
function renderHeal(){
  setActive('heal');
  app.innerHTML=`<div class="screen">${hero('heal','HEAL',DATA.ui.modeDescriptions.heal)}${renderShineFocusBar()}<section class="search"><input id="search" placeholder="${esc(DATA.ui.searchPlaceholders.heal)}"><div class="results" id="results"><div class="empty">${esc(DATA.ui.clarity.searchPromptHeal)}</div></div></section><section class="grid">${sectionCards(DATA.healSections,'heal')}</section></div>`;
  setupSearch('heal');
}
function renderDr(){
  setActive('dr');
  app.innerHTML=`<div class="screen">${hero('dr','DR',DATA.ui.modeDescriptions.dr)}${renderShineFocusBar()}<section class="search"><input id="search" placeholder="${esc(DATA.ui.searchPlaceholders.dr)}"><div class="results" id="results"><div class="empty">${esc(DATA.ui.clarity.searchPromptDr)}</div></div></section><section class="grid">${sectionCards(DATA.drSections,'dr')}</section></div>`;
  setupSearch('dr');
}
function renderList(area,id){
  if(area==='heal'&&id==='diet')return renderDietBuilder();
  setActive(area);
  const sections=area==='heal'?DATA.healSections:DATA.drSections;
  const sec=sections.find(section=>section.id===id)||sections[0];
  const items=visibleItems(sec.items);
  app.innerHTML=`<div class="screen">${renderShineFocusBar()}<section class="detail ${area}"><a class="detail-back" href="#/${area}">← ${esc((DATA.ui.clarity.backToSectionPrefix||'← Back to')+' '+area.toUpperCase())}</a><p class="eyebrow">${area.toUpperCase()}</p><h2>${esc(sec.title)}</h2><p class="lead">${esc(sec.subtitle)}</p><div class="grid">${items.map(item=>`<a class="card${focusMatchClass(item.id)}" href="#/${area}/item/${esc(item.id)}">${renderFocusBadge(item.id)}<h3>${esc(item.title)}</h3><p>${esc(item.subtitle)}</p></a>`).join('')}</div></section></div>`;
}
function isLockedItem(item){
  return item && (
    item.sectionId==='supplements' ||
    item.sectionId==='medications' ||
    ['insulin','bp-meds','statin','metformin'].includes(item.id)
  );
}

function actionPathGroups(item){
  const labels=DATA.ui.actionPath||{};
  const defs=[
    ['foodIdeas','🍽️',labels.foodIdeas||'Food ideas that may help'],
    ['helpfulTasks','✅',labels.helpfulTasks||'Helpful tasks'],
    ['supplements','💊',labels.supplements||'Supplements to discuss'],
    ['questions','💬',labels.questions||'Questions to ask your doctor'],
    ['labs','🧪',labels.labs||'Labs or tests to discuss']
  ];
  return defs.filter(([key])=>Array.isArray(item.actionPath?.[key])&&item.actionPath[key].length);
}
function taskKey(itemId,group,taskId){return itemId+'::'+group+'::'+taskId}
function taskIsSaved(itemId,group,taskId){return (profile().planTasks||[]).some(x=>x.key===taskKey(itemId,group,taskId))}
function renderActionPath(item){
  const groups=actionPathGroups(item);
  if(!groups.length)return '';
  const labels=DATA.ui.actionPath||{};
  const emergency=item.sectionId==='er';
  return `<section class="action-path compact-action-path">
    <div class="action-path-head"><p class="eyebrow">ACTION PATH</p><h3>${esc(labels.title||'Your next-step tasks')}</h3><p>${esc(labels.intro||'Choose the tasks that fit your situation.')}</p></div>
    <div class="action-groups">${groups.map(([key,icon,label])=>{
      const open=key==='helpfulTasks'||(emergency&&(key==='questions'||key==='helpfulTasks'));
      const tasks=item.actionPath[key];
      return `<details class="action-group ${key}" ${open?'open':''}><summary><span><b aria-hidden="true">${icon}</b>${esc(label)}</span><strong>${tasks.length}</strong></summary><div class="action-group-body">${tasks.map(task=>{
        const saved=taskIsSaved(item.id,key,task.id);
        return `<article class="action-task"><div><strong>${esc(task.title)}</strong>${task.detail?`<p>${esc(task.detail)}</p>`:''}</div><button class="task-add ${saved?'saved':''} no-print" data-add-task="1" data-item="${esc(item.id)}" data-group="${esc(key)}" data-task="${esc(task.id)}">${saved?(labels.added||'Added')+' ✓':labels.add||'Add task'}</button></article>`;
      }).join('')}</div></details>`;
    }).join('')}</div>
  </section>`;
}
function findAnyEntity(itemId){
  const shine=shineById[itemId];
  if(shine)return {...shine,section:'SHINE',sectionId:'shine',area:'shine'};
  const heal=findHeal(itemId);
  if(heal)return {...heal,area:'heal'};
  const dr=findDr(itemId);
  if(dr)return {...dr,area:'dr'};
  return null;
}
function findActionTask(itemId,group,taskId){
  const item=findAnyEntity(itemId);
  const task=item?.actionPath?.[group]?.find(x=>x.id===taskId);
  if(!item||!task)return null;
  const labels=DATA.ui.actionPath||{};
  const groupLabel={foodIdeas:labels.foodIdeas,helpfulTasks:labels.helpfulTasks,supplements:labels.supplements,questions:labels.questions,labs:labels.labs}[group]||group;
  return {key:taskKey(itemId,group,taskId),itemId,itemTitle:item.title,group,groupLabel,taskId,title:task.title,detail:task.detail||'',addedAt:new Date().toISOString()};
}

function renderItem(area,id){
  setActive(area);
  const item=area==='heal'?findHeal(id):findDr(id);
  if(!item||isPlaceholder(item)){
    history.replaceState(null,'',location.pathname+location.search+`#/${area}`);
    area==='heal'?renderHeal():renderDr();
    return;
  }
  const locked=isLockedItem(item);
  app.innerHTML=`<div class="screen">${renderShineFocusBar()}<section class="detail ${area} readable-detail${focusMatchClass(item.id)}">
    ${renderDetailNavigation(area,item)}
    ${renderFocusBadge(item.id)}
    <p class="eyebrow">${area.toUpperCase()} / ${esc(item.section)}</p>
    <h2>${esc(item.title)}</h2>
    <p class="lead">${esc(item.subtitle)}</p>
    ${locked?`<div class="notice">${esc(DATA.ui.clarity.dosingNotice)}</div>`:''}
    ${renderImportantTeaching(item)}
    ${renderAtAGlance(item)}
    ${renderTeachingDetails(item)}
    ${renderActionPath(item)}
    <div class="savebar no-print"><button class="btn ${area}" data-add="${area}" data-id="${esc(item.id)}">${esc(DATA.ui.clarity.saveTopic)}</button></div>
  </section></div>`;
}
function setupSearch(area){
  const input=document.getElementById('search'),results=document.getElementById('results');
  if(!input)return;
  const items=area==='heal'?allHealItems():allDrItems();
  input.addEventListener('input',()=>{
    const q=input.value.trim().toLowerCase();
    if(!q){results.innerHTML=`<div class="empty">${esc(area==='heal'?DATA.ui.clarity.searchPromptHeal:DATA.ui.clarity.searchPromptDr)}</div>`;return}
    const hits=items.filter(item=>(item.title+' '+item.subtitle+' '+(item.body||[]).join(' ')+' '+item.section).toLowerCase().includes(q)).slice(0,8);
    results.innerHTML=hits.length?hits.map(item=>`<a class="result${focusMatchClass(item.id)}" href="#/${area}/item/${esc(item.id)}">${renderFocusBadge(item.id)}<strong>${esc(item.title)}</strong><span>${esc(item.section)} — ${esc(item.subtitle)}</span></a>`).join(''):`<div class="empty">${esc(DATA.ui.clarity.noSearchResults)}</div>`;
  });
}
const dietState={focus:[],meal:'all',match:'all',query:''};

function dietFocusChip(option){
  const active=dietState.focus.includes(option.id);
  return `<button type="button" class="filter-chip ${active?'active':''}" data-diet-focus="${option.id}" aria-pressed="${active}">
    <span>${esc(option.icon)}</span>${esc(option.label)}
  </button>`;
}
function mealChip(option){
  const active=dietState.meal===option.id;
  return `<button type="button" class="filter-chip meal ${active?'active':''}" data-diet-meal="${option.id}" aria-pressed="${active}">${esc(option.label)}</button>`;
}
function selectedDietIds(){return profile().dietItems||[]}
function dietMatches(item){
  const focusOk = dietState.focus.length===0 ? true :
    dietState.match==='all'
      ? dietState.focus.every(f=>(item.focus||[]).includes(f))
      : dietState.focus.some(f=>(item.focus||[]).includes(f));
  const mealOk = dietState.meal==='all' || (item.meals||[]).includes(dietState.meal);
  const q=dietState.query.trim().toLowerCase();
  const queryOk=!q || [
    item.title,item.subtitle,item.why,item.caution,
    ...(item.focus||[]).map(id=>focusById(id)?.label||id),
    ...(item.roles||[])
  ].join(' ').toLowerCase().includes(q);
  return focusOk && mealOk && queryOk;
}
function renderDietResults(){
  const target=document.getElementById('diet-results');
  if(!target)return;
  const items=DATA.dietBuilder.items.filter(dietMatches);
  const selected=new Set(selectedDietIds());
  const focusLabels=dietState.focus.map(id=>focusById(id)?.label).filter(Boolean);
  document.getElementById('diet-result-count').textContent=`${items.length} item${items.length===1?'':'s'} found`;
  target.innerHTML=items.length?items.map(item=>{
    const matched=dietState.focus.filter(f=>(item.focus||[]).includes(f)).map(f=>focusById(f)?.label).filter(Boolean);
    const saved=selected.has(item.id);
    return `<article class="diet-item-card">
      <div class="diet-item-top">
        <div><p class="diet-kicker">${esc((item.meals||[]).map(m=>mealById(m)?.label).filter(Boolean).join(' • '))}</p><h3>${esc(item.title)}</h3></div>
        <button class="diet-add ${saved?'saved':''}" data-add-diet="${item.id}">${saved?'Added ✓':'Add +'}</button>
      </div>
      <p>${esc(item.subtitle)}</p>
      <div class="tag-row">${(item.focus||[]).slice(0,5).map(f=>`<span class="diet-tag">${esc(focusById(f)?.label||f)}</span>`).join('')}</div>
      ${matched.length?`<div class="match-line"><strong>Matches your filter:</strong> ${esc(matched.join(', '))}</div>`:''}
      <details><summary>Why it fits</summary><p>${esc(item.why)}</p><p class="caution"><strong>Consider:</strong> ${esc(item.caution)}</p></details>
      ${item.learnId?`<a class="learn-link" href="#/heal/item/${item.learnId}">Open related diet guidance →</a>`:''}
    </article>`;
  }).join(''):`<div class="empty-state"><strong>No items match all current choices.</strong><p>Remove one focus, switch to “match any,” or clear the meal filter.</p></div>`;

  const savedCount=selected.size;
  const tray=document.getElementById('diet-selection-tray');
  if(tray){
    tray.innerHTML=`<div><strong>${savedCount}</strong><span>food item${savedCount===1?'':'s'} in Your Plan</span></div><a href="#/plan">Open Your Plan</a>`;
  }
}
function renderDietBuilder(){
  setActive('heal');
  const d=DATA.dietBuilder;
  app.innerHTML=`<div class="screen">${renderShineFocusBar()}<section class="detail heal diet-builder">
    <p class="eyebrow">HEAL / DIET</p>
    <h2>${esc(d.title)}</h2>
    <p class="lead">${esc(d.subtitle)}</p>
    <div class="notice diet-notice">${esc(d.notice)}</div>

    <section class="filter-panel">
      <div class="filter-heading"><div><span class="step">1</span><h3>${esc(d.focusTitle.replace(/^1\.\s*/,''))}</h3></div><button class="text-button" data-diet-clear="1">Clear filters</button></div>
      <div class="filter-chip-grid">${d.focusOptions.map(dietFocusChip).join('')}</div>
      <div class="match-toggle" role="group" aria-label="Diet match mode">
        ${d.matchModes.map(m=>`<button class="${dietState.match===m.id?'active':''}" data-diet-match="${m.id}">${esc(m.label)}</button>`).join('')}
      </div>
    </section>

    <section class="filter-panel">
      <div class="filter-heading"><div><span class="step">2</span><h3>${esc(d.mealTitle.replace(/^2\.\s*/,''))}</h3></div></div>
      <div class="filter-chip-grid meals">${d.mealOptions.map(mealChip).join('')}</div>
      <label class="diet-search-label">Search inside the local food library
        <input id="diet-query" class="diet-search" value="${esc(dietState.query)}" placeholder="Try oats, lentils, protein, vegetables...">
      </label>
    </section>

    <section class="diet-results-section">
      <div class="filter-heading"><div><span class="step">3</span><h3>${esc(d.resultTitle.replace(/^3\.\s*/,''))}</h3></div><strong id="diet-result-count"></strong></div>
      <div id="diet-results" class="diet-results-grid"></div>
    </section>
  </section>
  <aside class="diet-selection-tray no-print" id="diet-selection-tray"></aside>
  </div>`;
  renderDietResults();
  document.getElementById('diet-query')?.addEventListener('input',e=>{dietState.query=e.target.value;renderDietResults()});
}

/* ---------------- Your Plan ---------------- */
function itemTitle(area,id){
  if(area==='shine')return shineById[id]?.title||id;
  if(area==='heal')return findHeal(id)?.title||id;
  if(area==='dr')return findDr(id)?.title||id;
  if(area==='diet')return findDietItem(id)?.title||id;
  return id;
}
function countCore(p,core){
  const heal=(p.heal||[]).map(findHeal).filter(Boolean);
  const dr=(p.dr||[]).map(findDr).filter(Boolean);
  const tasks=taskCountForCore(p,core);
  if(core==='daily')return heal.filter(x=>x.sectionId==='lifestyle').length+tasks;
  if(core==='food')return (p.dietItems||[]).length+heal.filter(x=>x.sectionId==='diet').length+tasks;
  if(core==='treatment')return heal.filter(x=>x.sectionId==='supplements').length+dr.filter(x=>x.sectionId==='medications').length+tasks;
  if(core==='doctor')return dr.filter(x=>x.sectionId!=='medications').length+(p.questions||[]).length+tasks;
  return 0;
}
function planCoreCards(p){
  return `<section class="plan-core-grid">${DATA.plan.cores.map(c=>`
    <button type="button" class="plan-core ${c.color}" data-scroll-core="${c.id}">
      <span class="plan-core-icon">${esc(c.icon)}</span>
      <div><small>Plan core</small><h3>${esc(c.title)}</h3><p>${esc(c.description)}</p></div>
      <strong>${countCore(p,c.id)}</strong>
    </button>`).join('')}</section>`;
}
function removeButton(area,id){return `<button class="mini-remove no-print" data-remove="${area}" data-id="${id}" aria-label="Remove ${esc(itemTitle(area,id))}">Remove</button>`}
function simpleSavedRows(ids,area,emptyText){
  return ids.length?ids.map(id=>`<div class="plan-row"><div><strong>${esc(itemTitle(area,id))}</strong><span>${area==='shine'?'SHINE lesson':area.toUpperCase()}</span></div>${removeButton(area,id)}</div>`).join(''):`<div class="plan-empty">${esc(emptyText)}</div>`;
}
function coreNote(core,p){
  const placeholder=DATA.plan.coreNotes?.[core]||'Add a note.';
  return `<div class="core-note no-print"><label for="note-${core}">Plan note</label><textarea id="note-${core}" rows="2" placeholder="${esc(placeholder)}">${esc(p.planNotes?.[core]||'')}</textarea><button class="btn ghost" data-save-note="${core}">Save note</button></div>`;
}
function renderDietPlanRows(ids){
  const items=ids.map(findDietItem).filter(Boolean);
  if(!items.length)return '<div class="plan-empty">No individual food items selected yet. Open HEAL → Diet to build this core.</div>';
  const groups=[
    {id:'breakfast',label:'Breakfast ideas'},
    {id:'main',label:'Main-meal ideas'},
    {id:'snack',label:'Snack ideas'}
  ];
  return groups.map(g=>{
    const groupItems=items.filter(i=>(i.meals||[])[0]===g.id);
    if(!groupItems.length)return '';
    return `<div class="meal-group"><h4>${esc(g.label)}</h4>${groupItems.map(i=>`
      <div class="plan-row diet-plan-row"><div><strong>${esc(i.title)}</strong><span>${esc((i.focus||[]).slice(0,3).map(f=>focusById(f)?.label).filter(Boolean).join(' • '))}</span></div>${removeButton('diet',i.id)}</div>`).join('')}</div>`;
  }).join('');
}
function focusSummary(ids){
  const counts={};
  ids.map(findDietItem).filter(Boolean).forEach(i=>(i.focus||[]).forEach(f=>counts[f]=(counts[f]||0)+1));
  const top=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,5);
  if(!top.length)return '';
  return `<div class="plan-focus"><span>Your food focus</span>${top.map(([id,count])=>`<strong>${esc(focusById(id)?.label||id)} <em>${count}</em></strong>`).join('')}</div>`;
}

function totalPlanItems(p){
  return countCore(p,'daily')+countCore(p,'food')+countCore(p,'treatment')+countCore(p,'doctor');
}
function coreBreakdown(p,core){
  const heal=(p.heal||[]).map(findHeal).filter(Boolean);
  const dr=(p.dr||[]).map(findDr).filter(Boolean);
  const tasks=taskCountForCore(p,core);
  if(core==='daily')return [['Lifestyle habits',heal.filter(x=>x.sectionId==='lifestyle').length],[DATA.ui.clarity.nextActionsEyebrow,tasks]];
  if(core==='food')return [['Food items',(p.dietItems||[]).length],['Diet guidance',heal.filter(x=>x.sectionId==='diet').length],[DATA.ui.clarity.nextActionsEyebrow,tasks]];
  if(core==='treatment')return [['Supplements',heal.filter(x=>x.sectionId==='supplements').length],['Medications',dr.filter(x=>x.sectionId==='medications').length],[DATA.ui.clarity.nextActionsEyebrow,tasks]];
  if(core==='doctor')return [['Health topics',dr.filter(x=>x.sectionId!=='medications').length],['Questions',(p.questions||[]).length],[DATA.ui.clarity.nextActionsEyebrow,tasks]];
  return [];
}
function planOverviewCards(p){
  const labels=DATA.plan.overview||{};
  return `<section class="plan-core-overview-grid">${DATA.plan.cores.map(c=>`
    <article class="plan-core-overview ${c.color}">
      <div class="plan-core-overview-head">
        <span>${esc(c.icon)}</span>
        <div><h3>${esc(c.title)}</h3><p>${esc(c.description)}</p></div>
      </div>
      <div class="plan-core-count"><strong>${countCore(p,c.id)}</strong><span>saved</span></div>
      <div class="plan-core-preview">
        ${coreBreakdown(p,c.id).map(([label,count])=>`<div><span>${esc(label)}</span><strong>${count}</strong></div>`).join('')}
      </div>
      <a class="btn ghost button-link" href="#/plan/core/${c.id}">${esc(labels.coreButton||'Open core')}</a>
    </article>`).join('')}</section>`;
}
function renderPlanOverview(){
  setActive('summary');
  const p=profile();
  const labels=DATA.plan.overview||{};
  const clarity=DATA.ui.clarity;
  const total=totalPlanItems(p);
  app.innerHTML=`<div class="screen">${hero('summary',DATA.plan.title,DATA.plan.subtitle)}<div class="plan-privacy">${esc(DATA.plan.privacy)}</div>${renderPlanShineFocusSummary(p)}${printSafetyNotice()}<section class="plan-overview"><div class="plan-overview-summary"><h2>${esc(labels.title)}</h2><p>${esc(labels.intro)}</p><div class="plan-overview-total"><strong>${total}</strong><span>${esc(labels.totalLabel)}</span></div></div>${renderNextActions(p)}${total===0?`<div class="plan-empty">${esc(labels.empty)}</div>`:''}${planOverviewCards(p)}<div class="plan-overview-actions no-print"><a class="btn dark button-link" href="#/plan/details">${esc(clarity.reviewAllSavedItems)}</a><a class="btn shine-path-button button-link" href="#/plan/shine-path">${esc(clarity.visualizeShinePath)}</a><button class="btn ghost" onclick="window.print()">${esc(clarity.printPlan)}</button></div><details class="plan-more-options no-print"><summary>${esc(clarity.moreOptions)}</summary><button class="btn ghost" data-download="1">${esc(clarity.downloadJsonBackup)}</button><button class="btn ghost danger" data-clear="1">${esc(shineFocusLabels().clearPlan)}</button></details></section></div>`;
}
function uniquePathItems(items){
  const seen=new Set();
  return items.filter(item=>{
    const key=(item.type||'item')+'::'+item.title;
    if(seen.has(key))return false;
    seen.add(key);
    return true;
  });
}
function taskStage(task){
  const entity=findAnyEntity(task.itemId);
  if(task.group==='foodIdeas')return 'food';
  if(task.group==='supplements')return 'treatment';
  if(task.group==='questions'||task.group==='labs')return 'doctor';
  if(entity?.area==='shine')return 'daily';
  if(entity?.area==='heal'){
    if(entity.sectionId==='diet')return 'food';
    if(entity.sectionId==='supplements')return 'treatment';
    if(entity.sectionId==='lifestyle')return 'daily';
    if(entity.sectionId==='vitals')return 'doctor';
  }
  if(entity?.area==='dr'){
    return entity.sectionId==='medications'?'treatment':'doctor';
  }
  return 'doctor';
}
function pathStageItems(p,stageId){
  const heal=(p.heal||[]).map(findHeal).filter(Boolean);
  const dr=(p.dr||[]).map(findDr).filter(Boolean);
  const tasks=(p.planTasks||[]).filter(t=>taskStage(t)===stageId).map(t=>({title:t.title,meta:t.groupLabel||'Saved task',type:'task'}));
  if(stageId==='daily')return uniquePathItems([...heal.filter(x=>x.sectionId==='lifestyle').map(x=>({title:x.title,meta:'Lifestyle habit',type:'heal'})),...tasks]);
  if(stageId==='food')return uniquePathItems([...(p.dietItems||[]).map(id=>({title:itemTitle('diet',id),meta:'Food choice',type:'diet'})),...heal.filter(x=>x.sectionId==='diet').map(x=>({title:x.title,meta:'Diet guidance',type:'heal'})),...tasks]);
  if(stageId==='treatment')return uniquePathItems([...heal.filter(x=>x.sectionId==='supplements').map(x=>({title:x.title,meta:'Supplement',type:'heal'})),...dr.filter(x=>x.sectionId==='medications').map(x=>({title:x.title,meta:'Medication',type:'dr'})),...tasks]);
  return uniquePathItems([...dr.filter(x=>x.sectionId!=='medications').map(x=>({title:x.title,meta:x.section||'Health topic',type:'dr'})),...tasks,...(p.questions||[]).map(q=>({title:q,meta:'Question for doctor',type:'question'}))]);
}
function pathTitleList(items,max=2){
  const titles=items.slice(0,max).map(x=>x.title);
  if(!titles.length)return '';
  if(titles.length===1)return titles[0];
  return titles.slice(0,-1).join(', ')+' and '+titles[titles.length-1];
}
function shinePathSentence(stageData){
  const active=stageData.filter(x=>x.items.length);
  if(!active.length)return DATA.plan.shinePath.empty;
  const phrases=active.map(x=>`${x.config.sentenceLead} ${pathTitleList(x.items)}`);
  const summary=phrases.length===1?phrases[0]:`${phrases.slice(0,-1).join('; ')}, and ${phrases[phrases.length-1]}`;
  return shineFocusLabels().pathSavedSentence.replace('{summary}',summary);
}
function renderPathItems(items,moreLabel){
  if(!items.length)return '<div class="shine-path-empty-stage">Nothing saved in this stage yet.</div>';
  const visible=items.slice(0,5);
  const remaining=items.length-visible.length;
  return `<div class="shine-path-items">${visible.map(item=>`
    <div class="shine-path-item">
      <strong>${esc(item.title)}</strong>
      <span>${esc(item.meta)}</span>
    </div>`).join('')}
    ${remaining?`<div class="shine-path-more">+${remaining} ${esc(moreLabel||'more')}</div>`:''}
  </div>`;
}
function renderShinePath(){
  setActive('summary');
  const p=profile();
  const config=DATA.plan.shinePath;
  const stageData=config.stages.map(stage=>({
    config:stage,
    items:pathStageItems(p,stage.id)
  }));
  const total=stageData.reduce((sum,stage)=>sum+stage.items.length,0);
  const sentence=shinePathSentence(stageData);
  const focusTopics=selectedShineFocusTopics(p);
  const primaryFocus=focusTopics[0]||null;
  const secondaryFocus=focusTopics[1]||null;

  app.innerHTML=`<div class="screen shine-path-screen">
    <section class="shine-path-hero">
      <div class="shine-path-ray" aria-hidden="true"></div>
      <div class="shine-path-hero-copy">
        <p class="eyebrow">${esc(config.eyebrow)}</p>
        <h1>${esc(config.title)}</h1>
        <p>${esc(config.subtitle)}</p>
      </div>
      <div class="shine-path-total"><strong>${total}</strong><span>${esc(config.connectedLabel)}</span></div>
    </section>

    ${printSafetyNotice()}
    ${renderPlanShineFocusSummary(p)}

    <section class="shine-path-infographic" aria-label="${esc(config.ariaLabel)}">
      <header class="shine-path-infographic-head">
        <small>${esc(config.infographicEyebrow)}</small>
        <h2>${esc(config.infographicTitle)}</h2>
        <p>${esc(config.infographicIntro)}</p>
      </header>

      <div class="shine-path-orbit">
        <div class="shine-path-orbit-glow" aria-hidden="true"></div>
        <svg class="shine-path-flow-map" viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="shineFlowRed" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d73855"/><stop offset="1" stop-color="#f8a8b7"/></linearGradient>
            <linearGradient id="shineFlowGold" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e6ad26"/><stop offset="1" stop-color="#ffe08a"/></linearGradient>
            <linearGradient id="shineFlowViolet" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#9b6df4"/><stop offset="1" stop-color="#d7c3ff"/></linearGradient>
            <linearGradient id="shineFlowBlue" x1="1" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#55a6e8"/><stop offset="1" stop-color="#b9e0ff"/></linearGradient>
            <filter id="shineFlowGlow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="8" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          <g class="shine-path-flow-halo" filter="url(#shineFlowGlow)">
            <path d="M 205 128 C 340 135 390 236 500 310" stroke="url(#shineFlowRed)"/>
            <path d="M 795 128 C 660 135 610 236 500 310" stroke="url(#shineFlowGold)"/>
            <path d="M 205 492 C 340 485 390 384 500 310" stroke="url(#shineFlowViolet)"/>
            <path d="M 795 492 C 660 485 610 384 500 310" stroke="url(#shineFlowBlue)"/>
          </g>
          <g class="shine-path-flow-lines">
            <path d="M 205 128 C 340 135 390 236 500 310" stroke="url(#shineFlowRed)"/>
            <path d="M 795 128 C 660 135 610 236 500 310" stroke="url(#shineFlowGold)"/>
            <path d="M 205 492 C 340 485 390 384 500 310" stroke="url(#shineFlowViolet)"/>
            <path d="M 795 492 C 660 485 610 384 500 310" stroke="url(#shineFlowBlue)"/>
          </g>
          <circle class="shine-path-merge-ring" cx="500" cy="310" r="112"/>
          <circle class="shine-path-merge-ring inner" cx="500" cy="310" r="92"/>
        </svg>
        <div class="shine-path-route">
          ${stageData.map(({config:stage,items},index)=>`
            <a class="shine-path-node ${esc(stage.color)} node-${index+1}" href="#/plan/core/${esc(stage.id)}">
              <span class="shine-path-node-step" aria-hidden="true">${esc(stage.step)}</span>
              <span class="shine-path-node-icon">${esc(stage.icon)}</span>
              <span class="shine-path-node-copy">
                <small>${esc(stage.verb)}</small>
                <strong>${esc(stage.coreTitle)}</strong>
                <em>${items.length} ${esc(config.savedLabel)}</em>
              </span>
            </a>`).join('')}
          <div class="shine-path-hub">
            <div class="shine-path-hub-inner">
              <small>${esc(primaryFocus?shineFocusLabels().pathPrimary:config.hubLabel)}</small>
              <strong>${esc(primaryFocus?.title||'SHINE')}</strong>
              ${secondaryFocus?`<em>${esc(shineFocusLabels().pathSecondary)}: ${esc(secondaryFocus.title)}</em>`:''}
              <span><b>${total}</b> ${esc(config.hubCountLabel)}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="shine-path-summary-ribbon">
        <span class="shine-path-summary-spark" aria-hidden="true">✦</span>
        <div>
          <small>${esc(config.summaryTitle)}</small>
          <p>${esc(sentence)}</p>
        </div>
      </div>
    </section>

    <section class="shine-path-core-list">
      <header class="shine-path-core-list-head">
        <small>${esc(config.coreListEyebrow)}</small>
        <h2>${esc(config.coreListTitle)}</h2>
        <p>${esc(config.coreListIntro)}</p>
      </header>
      ${stageData.map(({config:stage,items})=>`
        <article class="shine-path-core-card ${esc(stage.color)}">
          <div class="shine-path-core-band">
            <span>${esc(stage.step)}</span>
            <strong>${esc(stage.verb)}</strong>
          </div>
          <div class="shine-path-stage-top">
            <div class="shine-path-stage-icon">${esc(stage.icon)}</div>
            <div>
              <small>${esc(stage.coreTitle)}</small>
              <h2>${esc(stage.title)}</h2>
              <p>${esc(stage.description)}</p>
            </div>
            <strong class="shine-path-count">${items.length}</strong>
          </div>
          ${renderPathItems(items,config.moreLabel)}
          <a class="shine-path-core-link no-print" href="#/plan/core/${esc(stage.id)}">${esc(config.openCoreButton)} →</a>
        </article>`).join('')}
    </section>

    <section class="shine-path-finish">
      <div class="shine-path-glow" aria-hidden="true">✦</div>
      <h2>${esc(config.finishTitle)}</h2>
      <p>${esc(config.finishText)}</p>
    </section>

    <section class="shine-path-actions no-print">
      <a class="btn ghost button-link" href="#/plan">${esc(config.backButton)}</a>
      <button class="btn shine-path-button" onclick="window.print()">${esc(config.printButton)}</button>
    </section>
  </div>`;
}

function renderPlanDetails(coreId=null){
  setActive('summary');
  const p=profile();
  const labels=DATA.plan.overview||{};
  const heal=(p.heal||[]).map(findHeal).filter(Boolean);
  const dr=(p.dr||[]).map(findDr).filter(Boolean);
  const lifestyleIds=heal.filter(x=>x.sectionId==='lifestyle').map(x=>x.id);
  const dietGuidanceIds=heal.filter(x=>x.sectionId==='diet').map(x=>x.id);
  const supplementIds=heal.filter(x=>x.sectionId==='supplements').map(x=>x.id);
  const medicationIds=dr.filter(x=>x.sectionId==='medications').map(x=>x.id);
  const doctorIds=dr.filter(x=>x.sectionId!=='medications').map(x=>x.id);

  const daily=`<section class="plan-section red" id="plan-daily">
      <div class="plan-section-head"><span>☀️</span><div><small>Core 1</small><h2>Daily Foundation</h2><p>Teaching and routines you want to keep visible.</p></div></div>
      <div class="plan-two-col">
        <div class="plan-subsection"><h3>Lifestyle habits</h3>${simpleSavedRows(lifestyleIds,'heal','No lifestyle habits added yet.')}</div>
      </div>
      <div class="plan-subsection"><h3>Saved next-step tasks</h3>${renderPlanTaskRows(planTasksForCore(p,'daily'))}</div>
      ${coreNote('daily',p)}
    </section>`;

  const food=`<section class="plan-section gold" id="plan-food">
      <div class="plan-section-head"><span>🍽️</span><div><small>Core 2</small><h2>Food & Diet</h2><p>Guidance plus the individual food items you selected.</p></div></div>
      <div class="plan-two-col">
        <div class="plan-subsection"><h3>Selected food items</h3>${renderDietPlanRows(p.dietItems||[])}</div>
        <div class="plan-subsection"><h3>Saved diet guidance</h3>${simpleSavedRows(dietGuidanceIds,'heal','No diet-guidance pages added yet.')}</div>
      </div>
      <div class="plan-subsection"><h3>Saved next-step tasks</h3>${renderPlanTaskRows(planTasksForCore(p,'food'))}</div>
      <div class="savebar no-print"><a class="btn heal button-link" href="#/heal/diet">Open Diet Builder</a></div>
      ${coreNote('food',p)}
    </section>`;

  const treatment=`<section class="plan-section violet" id="plan-treatment">
      <div class="plan-section-head"><span>💊</span><div><small>Core 3</small><h2>Medications & Supplements</h2><p>Items to remember and discuss—not a prescribing list.</p></div></div>
      <div class="notice">Doses are not shown unless clinically reviewed. Do not start, stop, or change treatment from this plan alone.</div>
      <div class="plan-two-col">
        <div class="plan-subsection"><h3>Supplements</h3>${simpleSavedRows(supplementIds,'heal','No supplements added yet.')}</div>
        <div class="plan-subsection"><h3>Medications</h3>${simpleSavedRows(medicationIds,'dr','No medications added yet.')}</div>
      </div>
      <div class="plan-subsection"><h3>Saved next-step tasks</h3>${renderPlanTaskRows(planTasksForCore(p,'treatment'))}</div>
      ${coreNote('treatment',p)}
    </section>`;

  const doctor=`<section class="plan-section blue" id="plan-doctor">
      <div class="plan-section-head"><span>🩺</span><div><small>Core 4</small><h2>Doctor & Health</h2><p>Symptoms, conditions, emergency topics, and questions for an appointment.</p></div></div>
      <div class="plan-two-col">
        <div class="plan-subsection"><h3>Health topics</h3>${simpleSavedRows(doctorIds,'dr','No symptoms or conditions added yet.')}</div>
        <div class="plan-subsection"><h3>Saved next-step tasks</h3>${renderPlanTaskRows(planTasksForCore(p,'doctor'))}</div>
        <div class="plan-subsection"><h3>Questions for doctor</h3>
          ${(p.questions||[]).length?(p.questions||[]).map((q,i)=>`<div class="plan-row"><div><strong>${esc(q)}</strong><span>Question</span></div><button class="mini-remove no-print" data-remove-q="${i}">Remove</button></div>`).join(''):'<div class="plan-empty">No questions saved yet.</div>'}
          <div class="core-note no-print"><label for="customQ">Add a question</label><textarea id="customQ" rows="2" placeholder="What do you want to ask the doctor?"></textarea><button class="btn dr" data-custom-q="1">Save question</button></div>
        </div>
      </div>
      ${coreNote('doctor',p)}
    </section>`;

  const coreMap={daily,food,treatment,doctor};
  const sections=coreId&&coreMap[coreId]?coreMap[coreId]:Object.values(coreMap).join('');
  const title=coreId?DATA.plan.cores.find(c=>c.id===coreId)?.title||'Core details':'All core details';

  app.innerHTML=`<div class="screen">${hero('summary',DATA.plan.title,'Detailed view of your saved plan cores.')}
    ${renderPlanShineFocusSummary(p)}
    ${printSafetyNotice()}
    <div class="plan-detail-nav no-print">
      <div><small>YOUR PLAN DETAILS</small><h2>${esc(title)}</h2></div>
      <a class="btn ghost button-link" href="#/plan">${esc(labels.backButton||'Back to plan overview')}</a>
    </div>
    <div class="plan-details-stack">${sections}</div>
    <section class="plan-actions no-print">
      <button class="btn dark" onclick="window.print()">Print Your Plan</button>
    </section>
  </div>`;
}

function renderPlan(){
  renderPlanOverview();
}

function add(area,id){
  if(area==='shine')return;
  const p=profile();
  p[area]=p[area]||[];
  if(!p[area].includes(id))p[area].push(id);
  saveProfile(p);
  showToast('Added to Your Plan');
}
function remove(area,id){
  const p=profile();
  const key=area==='diet'?'dietItems':area;
  p[key]=(p[key]||[]).filter(x=>x!==id);
  saveProfile(p);
  if(location.hash.startsWith('#/heal/diet'))renderDietResults();else renderPlan();
}
function toggleDiet(id){
  const p=profile();
  p.dietItems=p.dietItems||[];
  if(p.dietItems.includes(id)){
    p.dietItems=p.dietItems.filter(x=>x!==id);
    showToast('Removed from Your Plan');
  }else{
    p.dietItems.push(id);
    showToast('Added to Food & Diet');
  }
  saveProfile(p);
  renderDietResults();
}

function togglePlanTask(itemId,group,taskId,origin='manual'){
  const task=findActionTask(itemId,group,taskId);
  if(!task)return;
  const p=profile();p.planTasks=p.planTasks||[];
  const idx=p.planTasks.findIndex(x=>x.key===task.key);
  if(idx>=0){p.planTasks.splice(idx,1);showToast('Task removed from Your Plan')}else{p.planTasks.push({...task,origin});showToast('Task added to Your Plan')}
  saveProfile(p);
  if(origin==='sleep-wizard'&&document.getElementById('sleep-wizard-modal')){renderSleepWizardModal();return}
  if(location.hash===`#/dr/item/${itemId}`)renderItem('dr',itemId);
  else if(location.hash===`#/heal/item/${itemId}`)renderItem('heal',itemId);
  else if(location.hash===`#/shine/${itemId}`)renderShineTopic(itemId);
}

function addQuestion(q){
  q=String(q||'').trim();
  if(!q)return;
  const p=profile();
  p.questions=p.questions||[];
  p.questions.push(q);
  saveProfile(p);
  showToast('Question saved');
}
function saveCoreNote(core){
  const el=document.getElementById('note-'+core);
  if(!el)return;
  const p=profile();
  p.planNotes=p.planNotes||{};
  p.planNotes[core]=el.value.trim();
  saveProfile(p);
  showToast('Plan note saved');
}
function download(){
  const blob=new Blob([JSON.stringify(profile(),null,2)],{type:'application/json'});
  const anchor=document.createElement('a');
  anchor.href=URL.createObjectURL(blob);
  anchor.download='patient-care-v046-your-plan.json';
  anchor.click();
  URL.revokeObjectURL(anchor.href);
}
function showToast(text){
  let t=document.getElementById('toast');
  if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t)}
  t.textContent=text;
  t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer=setTimeout(()=>t.classList.remove('show'),1500);
}

document.addEventListener('click',e=>{
  const core=e.target.closest('[data-scroll-core]');
  if(core){
    location.hash='#/plan/core/'+core.dataset.scrollCore;
    return;
  }

  const focusToggle=e.target.closest('[data-toggle-shine-focus]');
  if(focusToggle){toggleShineFocus(focusToggle.dataset.toggleShineFocus);return}
  const focusPromote=e.target.closest('[data-promote-shine-focus]');
  if(focusPromote){promoteShineFocus(focusPromote.dataset.promoteShineFocus);return}
  const focusReplace=e.target.closest('[data-replace-shine-focus]');
  if(focusReplace){replaceShineFocus(focusReplace.dataset.replaceShineFocus);return}
  if(e.target.closest('[data-close-shine-focus]')){closeShineFocusReplace();return}

  if(e.target.closest('[data-open-sleep-wizard]')){openSleepWizard();return}
  if(e.target.closest('[data-close-sleep-wizard]')){closeSleepWizard();return}
  const wizardOption=e.target.closest('[data-wizard-option]');
  if(wizardOption){toggleSleepWizardOption(wizardOption.dataset.wizardStep,wizardOption.dataset.wizardOption);return}
  if(e.target.closest('[data-wizard-next]')){sleepWizardStep=Math.min(sleepWizardStep+1,sleepWizardConfig()?.steps.length||0);renderSleepWizardModal();return}
  if(e.target.closest('[data-wizard-back]')){sleepWizardStep=Math.max(0,sleepWizardStep-1);renderSleepWizardModal();return}
  if(e.target.closest('[data-wizard-add-all]')){addAllSleepWizardRecommendations();return}

  const addBtn=e.target.closest('[data-add]');
  if(addBtn){add(addBtn.dataset.add,addBtn.dataset.id);return}

  const removeBtn=e.target.closest('[data-remove]');
  if(removeBtn){remove(removeBtn.dataset.remove,removeBtn.dataset.id);return}

  const addDiet=e.target.closest('[data-add-diet]');
  if(addDiet){toggleDiet(addDiet.dataset.addDiet);return}

  const focus=e.target.closest('[data-diet-focus]');
  if(focus){
    const id=focus.dataset.dietFocus;
    dietState.focus=dietState.focus.includes(id)?dietState.focus.filter(x=>x!==id):[...dietState.focus,id];
    renderDietBuilder();
    return;
  }
  const meal=e.target.closest('[data-diet-meal]');
  if(meal){dietState.meal=meal.dataset.dietMeal;renderDietBuilder();return}

  const match=e.target.closest('[data-diet-match]');
  if(match){dietState.match=match.dataset.dietMatch;renderDietBuilder();return}

  if(e.target.closest('[data-diet-clear]')){
    dietState.focus=[];dietState.meal='all';dietState.match='all';dietState.query='';
    renderDietBuilder();return;
  }

  const taskBtn=e.target.closest('[data-add-task]');
  if(taskBtn){togglePlanTask(taskBtn.dataset.item,taskBtn.dataset.group,taskBtn.dataset.task,taskBtn.dataset.origin||'manual');return}

  const removeTask=e.target.closest('[data-remove-task-key]');
  if(removeTask){const p=profile();p.planTasks=(p.planTasks||[]).filter(task=>task.key!==removeTask.dataset.removeTaskKey);saveProfile(p);route();return}

  const question=e.target.closest('[data-question]');
  if(question){addQuestion(question.dataset.question);return}

  if(e.target.closest('[data-custom-q]')){
    addQuestion(document.getElementById('customQ')?.value);
    route();return;
  }

  const removeQ=e.target.closest('[data-remove-q]');
  if(removeQ){
    const p=profile();p.questions.splice(+removeQ.dataset.removeQ,1);saveProfile(p);renderPlan();return;
  }

  const saveNote=e.target.closest('[data-save-note]');
  if(saveNote){saveCoreNote(saveNote.dataset.saveNote);return}

  if(e.target.closest('[data-download]')){download();return}

  if(e.target.closest('[data-clear]')){
    if(confirm(shineFocusLabels().clearPlanPrompt))clearPlanItems();
  }
});

function route(){
  const hash=location.hash||'#/shine';
  const [mode,a,b]=hash.replace('#/','').split('/');
  let result;
  if(mode==='shine'&&a)result=renderShineTopic(a);
  else if(mode==='shine')result=renderShine();
  else if(mode==='heal'&&a==='item')result=renderItem('heal',b);
  else if(mode==='heal'&&a)result=renderList('heal',a);
  else if(mode==='heal')result=renderHeal();
  else if(mode==='dr'&&a==='item')result=renderItem('dr',b);
  else if(mode==='dr'&&a)result=renderList('dr',a);
  else if(mode==='dr')result=renderDr();
  else if(mode==='plan'&&a==='details')result=renderPlanDetails();
  else if(mode==='plan'&&a==='shine-path')result=renderShinePath();
  else if(mode==='plan'&&a==='core')result=renderPlanDetails(b);
  else if(mode==='plan'||mode==='summary')result=renderPlanOverview();
  else result=renderShine();
  focusPageHeading();
  return result;
}
let printDisclosureDetails=[];
window.addEventListener('beforeprint',()=>{
  printDisclosureDetails=[...document.querySelectorAll('details:not([open])')];
  printDisclosureDetails.forEach(detail=>{detail.open=true});
});
window.addEventListener('afterprint',()=>{
  printDisclosureDetails.forEach(detail=>{detail.open=false});
  printDisclosureDetails=[];
});
window.addEventListener('hashchange',()=>{closeSleepWizard(false);closeShineFocusReplace();route()});
document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;if(document.getElementById('shine-focus-modal'))closeShineFocusReplace();else if(document.getElementById('sleep-wizard-modal'))closeSleepWizard()});
route();
