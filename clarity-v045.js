/* Patient Care v045 — Clarity Pass
   Presentation-only overrides. Researched content and saved profile schema remain unchanged. */

function isPlaceholder(item){
  return item?.contentStatus === 'placeholder';
}

function visibleItems(items){
  return (items || []).filter(item => !isPlaceholder(item));
}

function allHealItems(){
  return DATA.healSections.flatMap(section => visibleItems(section.items).map(item => ({...item,section:section.title,sectionId:section.id,area:'heal'})));
}

function allDrItems(){
  return DATA.drSections.flatMap(section => visibleItems(section.items).map(item => ({...item,section:section.title,sectionId:section.id,area:'dr'})));
}

function linkifyShine(text,current){
  let out=esc(text);
  DATA.shine.forEach(topic=>{
    if(topic.id===current || isPlaceholder(topic))return;
    const title=escapeRegExp(topic.title);
    out=out.replace(new RegExp(`\\b(${title})\\b`,'gi'),`<a class="inline-shine" href="#/shine/${topic.id}">$1</a>`);
  });
  return out;
}

function renderDetailNavigation(area,item){
  if(area==='shine')return '<a class="detail-back" href="#/shine">← Back to SHINE</a>';
  const sectionId=item?.sectionId||'';
  const label=item?.section||area.toUpperCase();
  return `<a class="detail-back" href="#/${area}/${esc(sectionId)}">← Back to ${esc(label)}</a>`;
}

function warningTeachingPoints(item){
  const pattern=/(seek urgent|seek emergency|red flags|call emergency|serious warning|urgent help|emergency symptoms|emergency help|emergency care|emergency services)/i;
  return (item?.body||[]).filter(point=>pattern.test(point));
}

function renderAtAGlance(item){
  const points=(item?.body||[]).slice(0,2);
  if(!points.length)return '';
  return `<section class="at-a-glance"><h3>At a glance</h3><ul class="bullets">${points.map(point=>`<li>${esc(point)}</li>`).join('')}</ul></section>`;
}

function renderImportantTeaching(item){
  const warnings=warningTeachingPoints(item);
  if(!warnings.length)return '';
  return `<aside class="important-teaching" role="note"><h3>Important</h3><ul>${warnings.map(point=>`<li>${esc(point)}</li>`).join('')}</ul></aside>`;
}

function renderTeachingDetails(item){
  const emergency=item?.sectionId==='er';
  return `<details class="teaching-details" ${emergency?'open':''}><summary><span>Read full teaching details</span><strong>${(item?.body||[]).length}</strong></summary><div class="teaching-details-body"><ul class="bullets">${(item?.body||[]).map(point=>`<li>${esc(point)}</li>`).join('')}</ul></div></details>`;
}

function renderShine(){
  setActive('shine');
  app.innerHTML=`<div class="screen">${hero('shine','SHINE',DATA.ui.modeDescriptions.shine)}
    <section class="grid">${DATA.shine.map(topic=>isPlaceholder(topic)
      ? `<article class="card mode-card shine placeholder-card" aria-disabled="true"><div class="big-letter">${esc(topic.letter)}</div><h3>${esc(topic.title)}</h3><p>${esc(topic.subtitle)}</p><span class="coming-soon">Coming soon</span></article>`
      : `<a class="card mode-card shine" href="#/shine/${topic.id}"><div class="big-letter">${esc(topic.letter)}</div><h3>${esc(topic.title)}</h3><p>${esc(topic.subtitle)}</p></a>`).join('')}</section>
  </div>`;
  focusPageHeading();
}

function renderList(area,id){
  if(area==='heal' && id==='diet') return renderDietBuilder();
  setActive(area);
  const sections=area==='heal'?DATA.healSections:DATA.drSections;
  const sec=sections.find(section=>section.id===id)||sections[0];
  const items=visibleItems(sec.items);
  app.innerHTML=`<div class="screen"><section class="detail ${area}">
    <a class="detail-back" href="#/${area}">← Back to ${area.toUpperCase()}</a>
    <p class="eyebrow">${area.toUpperCase()}</p>
    <h2 tabindex="-1">${esc(sec.title)}</h2>
    <p class="lead">${esc(sec.subtitle)}</p>
    <div class="grid">${items.map(item=>`<a class="card" href="#/${area}/item/${item.id}"><h3>${esc(item.title)}</h3><p>${esc(item.subtitle)}</p></a>`).join('')}</div>
  </section></div>`;
  focusPageHeading();
}

function setupSearch(area){
  const input=document.getElementById('search'),results=document.getElementById('results');
  if(!input)return;
  const items=area==='heal'?allHealItems():allDrItems();
  input.addEventListener('input',()=>{
    const q=input.value.trim().toLowerCase();
    if(!q){results.innerHTML='<div class="empty">Type to search '+area.toUpperCase()+' content.</div>';return}
    const hits=items.filter(item=>(item.title+' '+item.subtitle+' '+(item.body||[]).join(' ')+' '+item.section).toLowerCase().includes(q)).slice(0,8);
    results.innerHTML=hits.length?hits.map(item=>`<a class="result" href="#/${area}/item/${item.id}"><strong>${esc(item.title)}</strong><span>${esc(item.section)} — ${esc(item.subtitle)}</span></a>`).join(''):'<div class="empty">No results yet.</div>';
  });
}

function renderActionPath(item){
  const groups=actionPathGroups(item);
  if(!groups.length)return '';
  const labels=DATA.ui.actionPath||{};
  const emergency=item.sectionId==='er';
  return `<section class="action-path compact-action-path">
    <div class="action-path-head"><p class="eyebrow">ACTION PATH</p><h3>${esc(labels.title||'Your next-step tasks')}</h3><p>${esc(labels.intro||'Choose the tasks that fit your situation.')}</p></div>
    <div class="action-groups">${groups.map(([key,icon,label])=>{
      const open=key==='helpfulTasks'||(emergency&&key==='questions');
      const tasks=item.actionPath[key];
      return `<details class="action-group ${key}" ${open?'open':''}><summary><span><b aria-hidden="true">${icon}</b>${esc(label)}</span><strong>${tasks.length}</strong></summary><div class="action-group-body">${tasks.map(task=>{
        const saved=taskIsSaved(item.id,key,task.id);
        return `<article class="action-task"><div><strong>${esc(task.title)}</strong>${task.detail?`<p>${esc(task.detail)}</p>`:''}</div><button class="task-add ${saved?'saved':''} no-print" data-add-task="1" data-item="${esc(item.id)}" data-group="${esc(key)}" data-task="${esc(task.id)}">${saved?(labels.added||'Added')+' ✓':labels.add||'Add task'}</button></article>`;
      }).join('')}</div></details>`;
    }).join('')}</div>
  </section>`;
}

function renderItem(area,id){
  setActive(area);
  const item=area==='heal'?findHeal(id):findDr(id);
  if(!item||isPlaceholder(item)){area==='heal'?renderHeal():renderDr();return}
  const locked=isLockedItem(item);
  app.innerHTML=`<div class="screen"><section class="detail ${area} readable-detail">
    ${renderDetailNavigation(area,item)}
    <p class="eyebrow">${area.toUpperCase()} / ${esc(item.section)}</p>
    <h2 tabindex="-1">${esc(item.title)}</h2>
    <p class="lead">${esc(item.subtitle)}</p>
    ${locked?'<div class="notice">Medication or supplement dosing is not shown here. Bring this topic to a clinician or pharmacist before starting, stopping, or changing treatment.</div>':''}
    ${renderImportantTeaching(item)}
    ${renderAtAGlance(item)}
    ${renderTeachingDetails(item)}
    ${renderActionPath(item)}
    <div class="savebar no-print"><button class="btn ${area}" data-add="${area}" data-id="${item.id}">Save this topic</button></div>
  </section></div>`;
  focusPageHeading();
}

function renderShineTopic(id){
  setActive('shine');
  const topic=shineById[id]||DATA.shine[0];
  if(isPlaceholder(topic)){renderShine();return}
  const headings=topic.headings||{};
  app.innerHTML=`<div class="screen"><section class="detail shine readable-detail">
    ${renderDetailNavigation('shine',topic)}
    <p class="eyebrow">SHINE / ${esc(topic.title)}</p>
    <h2 tabindex="-1">${esc(topic.title)}</h2>
    <p class="lead">${esc(topic.subtitle)}</p>
    <div class="info-card primary"><h3>${esc(headings.why||('1. Why '+topic.title+' matters'))}</h3><ul class="bullets">${(topic.why||[]).map(point=>`<li>${linkifyShine(point,topic.id)}</li>`).join('')}</ul><div class="savebar no-print"><button class="btn shine" data-add="shine" data-id="${topic.id}">Save this topic</button></div></div>
    <div class="info-card"><h3>${esc(headings.positive||('2. How '+topic.title+' helps SHINE'))}</h3>${connectionRows(topic.good||[],topic.id)}</div>
    <div class="info-card"><h3>${esc(headings.negative||('3. How weak '+topic.title+' affects SHINE'))}</h3>${connectionRows(topic.bad||[],topic.id)}</div>
    ${healHabitRows(topic.healLinks,headings.habits,topic.habitIntro)}
    ${conditionRows((topic.drLinks||[]).filter(link=>!isPlaceholder(findDr(link.id))),headings.conditions)}
    ${topic.id==='sleep'?renderSleepWizardLaunch(topic):renderActionPath({...topic,section:'SHINE',sectionId:'shine'})}
  </section></div>`;
  focusPageHeading();
}

function taskCountForCore(profileData,core){
  return (profileData.planTasks||[]).filter(task=>taskStage(task)===core).length;
}

function countCore(profileData,core){
  const heal=(profileData.heal||[]).map(findHeal).filter(Boolean);
  const dr=(profileData.dr||[]).map(findDr).filter(Boolean);
  const tasks=taskCountForCore(profileData,core);
  if(core==='daily')return (profileData.shine||[]).length+heal.filter(item=>item.sectionId==='lifestyle').length+tasks;
  if(core==='food')return (profileData.dietItems||[]).length+heal.filter(item=>item.sectionId==='diet').length+tasks;
  if(core==='treatment')return heal.filter(item=>item.sectionId==='supplements').length+dr.filter(item=>item.sectionId==='medications').length+tasks;
  if(core==='doctor')return dr.filter(item=>item.sectionId!=='medications').length+(profileData.questions||[]).length+tasks;
  return 0;
}

function coreBreakdown(profileData,core){
  const heal=(profileData.heal||[]).map(findHeal).filter(Boolean);
  const dr=(profileData.dr||[]).map(findDr).filter(Boolean);
  const tasks=taskCountForCore(profileData,core);
  if(core==='daily')return [['SHINE lessons',(profileData.shine||[]).length],['Lifestyle habits',heal.filter(item=>item.sectionId==='lifestyle').length],['Next actions',tasks]];
  if(core==='food')return [['Food items',(profileData.dietItems||[]).length],['Diet guidance',heal.filter(item=>item.sectionId==='diet').length],['Next actions',tasks]];
  if(core==='treatment')return [['Supplements',heal.filter(item=>item.sectionId==='supplements').length],['Medications',dr.filter(item=>item.sectionId==='medications').length],['Next actions',tasks]];
  if(core==='doctor')return [['Health topics',dr.filter(item=>item.sectionId!=='medications').length],['Questions',(profileData.questions||[]).length],['Next actions',tasks]];
  return [];
}

function renderNextActions(profileData){
  const tasks=(profileData.planTasks||[]).slice(0,3);
  if(!tasks.length)return '';
  return `<section class="plan-next-actions"><div><p class="eyebrow">NEXT ACTIONS</p><h2>What you saved to do or discuss</h2></div>${tasks.map(task=>`<article><strong>${esc(task.title)}</strong><span>${esc(task.itemTitle)} • ${esc(task.groupLabel)}</span></article>`).join('')}</section>`;
}

function renderPlanOverview(){
  setActive('summary');
  const p=profile();
  const labels=DATA.plan.overview||{};
  const total=totalPlanItems(p);
  app.innerHTML=`<div class="screen">${hero('summary',DATA.plan.title,DATA.plan.subtitle)}
    <div class="plan-privacy">${esc(DATA.plan.privacy)}</div>
    ${printSafetyNotice()}
    <section class="plan-overview">
      <div class="plan-overview-summary"><h2 tabindex="-1">${esc(labels.title||'Your plan at a glance')}</h2><p>${esc(labels.intro||'See everything you have saved before opening a core.')}</p><div class="plan-overview-total"><strong>${total}</strong><span>${esc(labels.totalLabel||'Total saved items')}</span></div></div>
      ${renderNextActions(p)}
      ${total===0?`<div class="plan-empty">${esc(labels.empty||'Your plan is empty.')}</div>`:''}
      ${planOverviewCards(p)}
      <div class="plan-overview-actions no-print"><a class="btn dark button-link" href="#/plan/details">Review all saved items</a><a class="btn shine-path-button button-link" href="#/plan/shine-path">Visualize Your SHINE Path</a><button class="btn ghost" onclick="window.print()">Print Your Plan</button></div>
      <details class="plan-more-options no-print"><summary>More options</summary><button class="btn ghost" data-download="1">Download JSON backup</button></details>
    </section>
  </div>`;
  focusPageHeading();
}

const renderShinePathV044=renderShinePath;
renderShinePath=function(){
  renderShinePathV044();
  document.querySelectorAll('.shine-path-actions [data-download]').forEach(button=>button.remove());
  focusPageHeading();
};

const renderPlanDetailsV044=renderPlanDetails;
renderPlanDetails=function(coreId=null){
  renderPlanDetailsV044(coreId);
  document.querySelectorAll('.plan-actions [data-download]').forEach(button=>button.remove());
  focusPageHeading();
};

function download(){
  const blob=new Blob([JSON.stringify(profile(),null,2)],{type:'application/json'});
  const anchor=document.createElement('a');
  anchor.href=URL.createObjectURL(blob);
  anchor.download='patient-care-v045-your-plan.json';
  anchor.click();
  URL.revokeObjectURL(anchor.href);
}

function focusPageHeading(){
  requestAnimationFrame(()=>{
    const heading=document.querySelector('h1[tabindex="-1"],h2[tabindex="-1"],main h1,main h2');
    if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
  });
}

function route(){
  const hash=location.hash||'#/shine';
  const parts=hash.replace('#/','').split('/');
  const [mode,a,b]=parts;
  if(mode==='shine'&&a)return renderShineTopic(a);
  if(mode==='shine')return renderShine();
  if(mode==='heal'&&a==='item')return renderItem('heal',b);
  if(mode==='heal'&&a)return renderList('heal',a);
  if(mode==='heal')return renderHeal();
  if(mode==='dr'&&a==='item')return renderItem('dr',b);
  if(mode==='dr'&&a)return renderList('dr',a);
  if(mode==='dr')return renderDr();
  if(mode==='plan'&&a==='details')return renderPlanDetails();
  if(mode==='plan'&&a==='shine-path')return renderShinePath();
  if(mode==='plan'&&a==='core')return renderPlanDetails(b);
  if(mode==='plan'||mode==='summary')return renderPlanOverview();
  renderShine();
}

const urgentSection=DATA.drSections.find(section=>section.id==='er');
if(urgentSection)urgentSection.title='Urgent help';
const drNav=document.querySelector('#nav-dr span');
if(drNav)drNav.textContent='health';

route();
