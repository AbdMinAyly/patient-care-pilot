# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
import json, pathlib, re, subprocess, copy

ROOT=pathlib.Path('.')
NOTICE_JS='// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.\n'
NOTICE_CSS='/* IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE. */\n'
NOTICE_HTML='<!-- IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE. -->\n'


def load_content():
    raw=subprocess.check_output(['node','-e',"global.window={};require('./data/content.js');process.stdout.write(JSON.stringify(window.PATIENT_CARE_CONTENT))"],text=True)
    return json.loads(raw)


def all_entities(data):
    out=[]
    for item in data.get('shine',[]): out.append((item,'shine','SHINE'))
    for sec in data.get('healSections',[]):
        for item in sec.get('items',[]): out.append((item,'heal',sec.get('title','HEAL')))
    for sec in data.get('drSections',[]):
        for item in sec.get('items',[]): out.append((item,'dr',sec.get('title','DR')))
    return out


def first_task(entity, groups):
    for group in groups:
        tasks=(entity.get('actionPath') or {}).get(group) or []
        if tasks:
            return {'itemId':entity['id'],'group':group,'taskId':tasks[0]['id']}
    return None


data=load_content()
before=copy.deepcopy(data)
entities=all_entities(data)
by_id={item['id']:item for item,_,_ in entities}
visible={item['id'] for item,_,_ in entities if item.get('contentStatus')!='placeholder'}
food_by_id={item['id']:item for item in data.get('dietBuilder',{}).get('items',[]) if item.get('contentStatus')!='placeholder'}
all_ids=set(by_id)|set(food_by_id)

aliases=[
 ('tired all the time',['fatigue']),('tiredness',['fatigue']),('low ferritin',['iron-deficiency']),('low iron',['iron-deficiency']),
 ('iron infusion',['supplement-routes','iron-supplement']),('IV iron',['supplement-routes','iron-supplement']),('iron tablets',['iron-supplement']),
 ('low sugar',['low-sugar-symptoms']),('high sugar',['high-sugar-symptoms']),('A1c',['hba1c']),('high BP',['hypertension','bp-range']),
 ('blood pressure reading',['bp-range','bp-home-monitoring']),('snoring',['sleep-apnea']),('breathing stops in sleep',['sleep-apnea']),
 ('cannot sleep',['insomnia']),('restless legs',['restless-legs']),('constipated',['constipation']),('throwing up',['gastroenteritis']),
 ('diarrhea',['gastroenteritis']),('dehydrated',['hydration-support'])
]
search_aliases=[]
for term,targets in aliases:
    valid=[target for target in targets if target in visible]
    if valid: search_aliases.append({'term':term,'targetIds':valid})

data['search']={
 'title':'Find a topic','subtitle':'Search the full Patient Care library without needing to choose SHINE, HEAL, or DR first.',
 'placeholder':'Search topics, symptoms, tests, habits, or food ideas…',
 'safetyNotice':'Find helps locate education. It does not diagnose symptoms or select treatment.',
 'emptyState':'Type a word or phrase to search Patient Care.','noResults':'No matching education was found. Try a shorter or different phrase.',
 'showAll':'Show all results','resultLimit':8,
 'resultTypes':{'shine':'SHINE','heal':'HEAL','dr':'DR','food':'Food idea'},
 'modeLabels':{'shine':'Teaching','heal':'Practical support','dr':'Health information','food':'Food idea'},
 'aliases':search_aliases,
 'entryTitle':'Find a topic','entryText':'Search all teaching, health information, practical support, and food ideas in one place.','entryAction':'Open Find',
 'urgentLabel':'Urgent help','focusRelevant':'Relevant to {focus}','ironGuideLink':'Open Iron Learning Guide'
}

choices=[
 ('understand','Understand low iron or anemia'),('food','Find food guidance'),('oral','Review oral iron information'),
 ('infusion','Understand injection or infusion information'),('side-effects','Review side effects or constipation'),('follow-up','Prepare for tests or follow-up')
]
intent_candidates={
 'understand':['iron-deficiency','anemia'],
 'food':['iron-deficiency'],
 'oral':['iron-supplement','supplement-routes'],
 'infusion':['supplement-routes','iron-supplement'],
 'side-effects':['constipation','iron-supplement'],
 'follow-up':['iron-deficiency','anemia']
}
recommendations={}
for intent,_ in choices:
    recs=[]
    for entity_id in intent_candidates[intent]:
        if entity_id in visible: recs.append({'entityId':entity_id})
    if intent=='food':
        for food_id,item in food_by_id.items():
            text=' '.join(str(item.get(k,'')) for k in ('title','subtitle','why')).lower()
            if 'iron' in text:
                recs.append({'foodId':food_id})
                if len(recs)>=4: break
    task_entity=next((by_id[x] for x in intent_candidates[intent] if x in visible),None)
    groups=['foodIdeas','helpfulTasks'] if intent=='food' else ['questions','labs','helpfulTasks'] if intent=='follow-up' else ['helpfulTasks','questions','labs']
    task=first_task(task_entity,groups) if task_entity else None
    if task: recs.append(task)
    recommendations[intent]=recs

data['guides']={'iron':{
 'title':'Iron Learning Guide','subtitle':'Choose what you want to understand, then open existing Patient Care education or add an existing Action Path item.',
 'safetyNotice':'This guide organizes existing education. It does not diagnose iron deficiency, interpret laboratory results, or choose oral versus injection or infusion treatment.',
 'choices':[{'id':i,'label':label} for i,label in choices],
 'recommendations':recommendations,'primaryLimit':3,
 'labels':{'moreOptions':'More options','openTopic':'Open topic','addAction':'Add action','added':'Added','chooseIntent':'What would you like help finding?','back':'Back to Find','selectedIntent':'Selected purpose','foodIdea':'Food idea','noOptions':'No existing destination is available for this choice.'},
 'entryIds':[x for x in ['iron-deficiency','anemia','iron-supplement','supplement-routes'] if x in visible]
}}

sleep=next((x for x in data.get('shine',[]) if x.get('id')=='sleep'),None)
if sleep and sleep.get('wizard'):
    sleep['wizard']['presentation']={'primaryLimit':3,'moreMatchedActions':'More matched actions','hiddenCountLabel':'{count} additional matched action{suffix}','addShownActions':'Add shown actions'}

data['meta']['contentVersion']='v047'
data['meta']['contentBatch']='FEATURE_FIND_AND_GUIDE'
data['meta']['featureRelease']={
 'id':'FEATURE_FIND_AND_GUIDE','title':'Find and Guide','status':'implemented','baseline':'v046',
 'scope':'Unified deterministic offline search, capped Sleep Wizard results, and a non-diagnostic Iron Learning Guide',
 'implementationRecord':'docs/HISTORY.md',
 'note':'Find locates existing education without diagnosing symptoms or selecting treatment. SHINE Focus is secondary context only. The Iron Learning Guide organizes existing pages and Action Path tasks. No clinical claims, editorial sources, dosing rules, QR codes, schedules, backend, authentication, or prescribing logic are added.'
}
data['meta']['qualityReview']['report']='docs/HISTORY.md'
data['meta']['qualityReview']['sourceIndex']='docs/HISTORY.md'

# Ensure researched patient-facing fields were not rewritten.
protected=('title','subtitle','why','good','bad','body','editorialSourceIds','researchBatch','additionalResearchBatches','clinicalReview','lockedDosing','contentStatus','relatedIds')
before_map={item['id']:item for item,_,_ in all_entities(before)}
for item,_,_ in all_entities(data):
    old=before_map[item['id']]
    for key in protected:
        if old.get(key)!=item.get(key): raise SystemExit(f'Protected content changed: {item["id"]}.{key}')

content_text=NOTICE_CSS+'window.PATIENT_CARE_CONTENT = '+json.dumps(data,ensure_ascii=False,indent=2)+';\n'
(ROOT/'data/content.js').write_text(content_text,encoding='utf-8')

# Schema metadata now points to the consolidated history file.
schema=json.loads((ROOT/'data/schema.json').read_text(encoding='utf-8'))
schema['contentVersion']='v047'
schema['batch']={
 'id':'FEATURE_FIND_AND_GUIDE','title':'Find and Guide','deliveryStatus':'implemented','baseline':'v046',
 'sequenceNote':'Unified deterministic offline search uses SHINE Focus only as secondary context. Sleep Wizard results are capped at three primary actions. The Iron Learning Guide organizes existing researched pages and tasks without diagnosis, test interpretation, treatment selection, or dosing.',
 'implementationRecord':'docs/HISTORY.md'
}
for batch in schema.get('completedBatches',[]):
    if 'researchRegister' in batch: batch['researchRegister']='docs/HISTORY.md'
    if 'qualityReport' in batch: batch['qualityReport']='docs/HISTORY.md'
schema['findAndGuide']={'searchConfig':'search','guideConfig':'guides.iron','resultLimit':8,'offlineOnly':True,'diagnostic':False}
(ROOT/'data/schema.json').write_text(json.dumps(schema,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
(ROOT/'VERSION.txt').write_text('v047\n',encoding='utf-8')

app_path=ROOT/'app.js'
app=app_path.read_text(encoding='utf-8')
if not app.startswith('// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md'):
    app=NOTICE_JS+app
app=app.replace("patient-care-v046-your-plan.json","patient-care-v047-your-plan.json")
app=app.replace("['ui','shine','healSections','drSections','plan','dietBuilder']","['ui','shine','healSections','drSections','plan','dietBuilder','search','guides']")

validation=r'''
  const normalizeAliasTerm=value=>String(value||'').toLowerCase().replace(/[’‘]/g,"'").replace(/[-‐‑–—]/g,' ').replace(/[^a-z0-9' ]+/g,' ').replace(/\s+/g,' ').trim();
  const search=data.search;
  if(!search||!Number.isInteger(search.resultLimit)||search.resultLimit<1)errors.push('Search configuration or result limit is invalid.');
  else{
    const aliasTerms=new Set();
    (search.aliases||[]).forEach(alias=>{
      const term=normalizeAliasTerm(alias.term);
      if(!term||aliasTerms.has(term))errors.push('Duplicate or invalid search alias: '+alias.term);
      aliasTerms.add(term);
      (alias.targetIds||[]).forEach(id=>{
        const target=entities.find(x=>x.item.id===id)?.item;
        if(!target)errors.push('Search alias has a missing target: '+id);
        else if(isPlaceholder(target))errors.push('Search alias targets a placeholder: '+id);
      });
    });
  }
  const ironGuide=data.guides?.iron;
  if(!ironGuide||!Number.isInteger(ironGuide.primaryLimit)||ironGuide.primaryLimit<1)errors.push('Iron Learning Guide configuration is invalid.');
  else Object.values(ironGuide.recommendations||{}).flat().forEach(rec=>{
    if(rec.entityId){const target=entities.find(x=>x.item.id===rec.entityId)?.item;if(!target||isPlaceholder(target))errors.push('Iron Guide has an invalid entity target: '+rec.entityId)}
    else if(rec.foodId){const target=(data.dietBuilder?.items||[]).find(x=>x.id===rec.foodId);if(!target||isPlaceholder(target))errors.push('Iron Guide has an invalid food target: '+rec.foodId)}
    else {const entity=entities.find(x=>x.item.id===rec.itemId)?.item;const task=entity?.actionPath?.[rec.group]?.find(x=>x.id===rec.taskId);if(!task)errors.push('Iron Guide has a broken task reference.');}
  });
  if(sleepWizard&&!Number.isInteger(sleepWizard.presentation?.primaryLimit))errors.push('Sleep Wizard primary result limit is invalid.');
'''
app=app.replace("  const scanForUrls=(value,path)=>{",validation+"\n  const scanForUrls=(value,path)=>{")

# Add compact Find entry points to the three mode homes.
app=app.replace("${renderShineFocusIntro()}<section class=\"grid shine-focus-grid\">","${renderShineFocusIntro()}${renderFindEntry()}<section class=\"grid shine-focus-grid\">")
app=app.replace("${renderShineFocusBar()}<section class=\"search\"><input id=\"search\"", "${renderShineFocusBar()}${renderFindEntry()}<section class=\"search\"><input id=\"search\"",2)

# Add the guide entry only on configured iron-related pages.
start=app.index('function renderItem(area,id){')
end=app.index('function setupSearch(area){',start)
segment=app[start:end]
segment=segment.replace('<p class="lead">${esc(item.subtitle)}</p>','<p class="lead">${esc(item.subtitle)}</p>${renderIronGuideEntry(item.id)}',1)
app=app[:start]+segment+app[end:]

new_results=r'''function renderSleepWizardResults(){
  const wizard=sleepWizardConfig();
  const recommendations=matchingSleepWizardRecommendations();
  const presentation=wizard.presentation||{};
  const limit=presentation.primaryLimit||3;
  const primary=recommendations.slice(0,limit);
  const hidden=recommendations.slice(limit);
  const renderCard=rec=>{
    const saved=taskIsSaved(rec.task.itemId,rec.task.group,rec.task.taskId);
    return `<article class="sleep-wizard-result-card"><div><strong>${esc(rec.task.title)}</strong><p>${esc(rec.reason)}</p><small>From ${esc(rec.task.itemTitle)}</small></div><button class="task-add ${saved?'saved':''}" data-add-task="1" data-origin="sleep-wizard" data-item="${esc(rec.task.itemId)}" data-group="${esc(rec.task.group)}" data-task="${esc(rec.task.taskId)}">${saved?'Added ✓':'Add to plan'}</button></article>`;
  };
  const unsaved=primary.filter(rec=>!taskIsSaved(rec.task.itemId,rec.task.group,rec.task.taskId));
  const hiddenLabel=String(presentation.hiddenCountLabel||'{count} additional matched actions').replace('{count}',hidden.length).replace('{suffix}',hidden.length===1?'':'s');
  return `<div class="sleep-wizard-results">
    <div class="sleep-wizard-results-head"><p class="eyebrow">YOUR MATCHED HEAL ACTIONS</p><h3>${esc(wizard.resultsTitle)}</h3><p>${esc(wizard.resultsIntro)}</p></div>
    ${sleepWizardChoiceSummary()}
    <div class="sleep-wizard-result-groups">${primary.map(renderCard).join('')}</div>
    ${hidden.length?`<details class="wizard-more-actions"><summary>${esc(presentation.moreMatchedActions||'More matched actions')} <span>${esc(hiddenLabel)}</span></summary><div>${hidden.map(renderCard).join('')}</div></details>`:''}
    <button class="btn sleep-wizard-add-all" data-wizard-add-all="1" ${unsaved.length?'':'disabled'}>${esc(unsaved.length?(presentation.addShownActions||'Add shown actions'):(wizard.addedAllLabel||'All shown actions added'))}</button>
  </div>`;
}
'''
a=app.index('function renderSleepWizardResults(){')
b=app.index('function renderSleepWizardModal(){',a)
app=app[:a]+new_results+app[b:]

new_add=r'''function addAllSleepWizardRecommendations(){
  const limit=sleepWizardConfig()?.presentation?.primaryLimit||3;
  const recs=matchingSleepWizardRecommendations().slice(0,limit);
  const p=profile();p.planTasks=p.planTasks||[];let added=0;
  recs.forEach(rec=>{if(!p.planTasks.some(task=>task.key===rec.task.key)){p.planTasks.push({...rec.task,origin:'sleep-wizard'});added++;}});
  saveProfile(p);
  showToast(added?`${added} Sleep action${added===1?'':'s'} added`:'All shown actions are already in Your Plan');
  renderSleepWizardModal();
}

'''
a=app.index('function addAllSleepWizardRecommendations(){')
b=app.index('function renderShineTopic(id){',a)
app=app[:a]+new_add+app[b:]

module=r'''
// BEGIN V047 FIND AND GUIDE
let findShowAll=false;
let ironGuideIntent=null;
function normalizeSearchText(value){return String(value||'').toLowerCase().replace(/[’‘]/g,"'").replace(/[-‐‑–—]/g,' ').replace(/[^a-z0-9' ]+/g,' ').replace(/\s+/g,' ').trim()}
function searchWords(value){return normalizeSearchText(value).split(' ').filter(Boolean)}
function visibleResearched(item){return item&&item.contentStatus==='researched'&&!isPlaceholder(item)}
function buildSearchIndex(){
  const list=[];let order=0;
  visibleShineTopics().filter(visibleResearched).forEach(item=>list.push({id:item.id,area:'shine',title:item.title,subtitle:item.subtitle,section:'SHINE',body:(item.why||[]).join(' '),route:`#/shine/${item.id}`,order:order++}));
  rawHealItems().filter(visibleResearched).forEach(item=>list.push({...item,body:(item.body||[]).join(' '),route:`#/heal/item/${item.id}`,order:order++}));
  rawDrItems().filter(visibleResearched).forEach(item=>list.push({...item,body:(item.body||[]).join(' '),route:`#/dr/item/${item.id}`,order:order++}));
  (DATA.dietBuilder?.items||[]).filter(visibleResearched).forEach(item=>list.push({id:item.id,area:'food',title:item.title,subtitle:item.subtitle,section:DATA.search.resultTypes.food,body:[item.why,item.caution,...(item.roles||[])].join(' '),route:'#/heal/diet',food:item,order:order++}));
  return list;
}
function aliasMatchesFor(query){const q=normalizeSearchText(query);return (DATA.search.aliases||[]).filter(alias=>normalizeSearchText(alias.term).includes(q)||q.includes(normalizeSearchText(alias.term)))}
function scoreSearchResult(entity,query,aliasMatches){
  const q=normalizeSearchText(query),title=normalizeSearchText(entity.title),subtitle=normalizeSearchText(entity.subtitle),section=normalizeSearchText(entity.section),body=normalizeSearchText(entity.body);
  const exactAlias=aliasMatches.some(alias=>normalizeSearchText(alias.term)===q&&(alias.targetIds||[]).includes(entity.id));
  const partialAlias=aliasMatches.some(alias=>(alias.targetIds||[]).includes(entity.id));
  let score=title===q?700:exactAlias?650:title.startsWith(q)?600:searchWords(q).every(word=>searchWords(title).includes(word))?500:partialAlias?400:(subtitle+' '+section).includes(q)?300:body.includes(q)?100:0;
  if(score&&entity.sectionId!=='er'&&focusBadgeForSearchEntity(entity))score+=1;
  return score;
}
function dedupeSearchResults(results){const seen=new Set();return results.filter(result=>!seen.has(result.id)&&(seen.add(result.id),true))}
function searchEntities(query){const q=normalizeSearchText(query);if(!q)return [];const aliases=aliasMatchesFor(q);return dedupeSearchResults(buildSearchIndex().map(entity=>({...entity,score:scoreSearchResult(entity,q,aliases)})).filter(x=>x.score>0).sort((a,b)=>(b.score-a.score)||(a.order-b.order)))}
function focusBadgeForSearchEntity(entity){
  if(entity.area!=='food')return focusBadgeForItem(entity.id);
  const focusIds=selectedShineFocus();const matched=focusIds.filter(id=>(entity.food?.focus||[]).includes(id));
  if(!matched.length)return null;const names=matched.map(id=>shineById[id]?.title).filter(Boolean).join(' + ');
  return {relation:'relevant',text:String(DATA.search.focusRelevant||'Relevant to {focus}').replace('{focus}',names)};
}
function renderSearchFocusBadge(entity){const badge=focusBadgeForSearchEntity(entity);return badge?`<span class="focus-relevance-badge relevant">${esc(badge.text)}</span>`:''}
function isIronGuideEntity(id){return (DATA.guides?.iron?.entryIds||[]).includes(id)}
function renderIronGuideEntry(id){return isIronGuideEntity(id)?`<aside class="iron-guide-entry no-print"><a class="btn ghost button-link" href="#/guide/iron">${esc(DATA.search.ironGuideLink)}</a></aside>`:''}
function renderFindEntry(){const s=DATA.search;return `<section class="find-entry no-print"><div><p class="eyebrow">FIND</p><h2>${esc(s.entryTitle)}</h2><p>${esc(s.entryText)}</p></div><a class="btn ghost button-link" href="#/find">${esc(s.entryAction)}</a></section>`}
function renderFindResults(results){
  const s=DATA.search,shown=findShowAll?results:results.slice(0,s.resultLimit);
  if(!results.length)return `<div class="empty-state">${esc(s.noResults)}</div>`;
  return `<div class="find-result-list">${shown.map(entity=>`<article class="find-result-row"><a href="${esc(entity.route)}">${renderSearchFocusBadge(entity)}<span class="find-result-type">${esc(s.resultTypes[entity.area])}${entity.sectionId==='er'?' · '+esc(s.urgentLabel):''}</span><strong>${esc(entity.title)}</strong><small>${esc(entity.section)} · ${esc(s.modeLabels[entity.area])}</small><p>${esc(entity.subtitle)}</p></a>${isIronGuideEntity(entity.id)?`<a class="iron-result-guide" href="#/guide/iron">${esc(s.ironGuideLink)}</a>`:''}</article>`).join('')}</div>${!findShowAll&&results.length>s.resultLimit?`<button class="btn ghost find-show-all" data-find-show-all="1">${esc(s.showAll)} (${results.length})</button>`:''}`;
}
function updateFindResults(){const input=document.getElementById('find-query'),target=document.getElementById('find-results');if(!input||!target)return;const q=input.value;findShowAll=false;target.innerHTML=q.trim()?renderFindResults(searchEntities(q)):`<div class="empty-state">${esc(DATA.search.emptyState)}</div>`}
function renderFind(){setActive('');const s=DATA.search;app.innerHTML=`<div class="screen">${renderShineFocusBar()}<section class="detail find-screen"><p class="eyebrow">FIND</p><h1>${esc(s.title)}</h1><p class="lead">${esc(s.subtitle)}</p><div class="notice">${esc(s.safetyNotice)}</div><label class="find-label" for="find-query">${esc(s.title)}</label><input id="find-query" class="find-input" type="search" placeholder="${esc(s.placeholder)}" autocomplete="off"><div id="find-results"><div class="empty-state">${esc(s.emptyState)}</div></div></section></div>`;document.getElementById('find-query')?.addEventListener('input',updateFindResults)}
function guideEntity(id){return findAnyEntity(id)}
function guideRecommendationCard(rec){
  if(rec.entityId){const item=guideEntity(rec.entityId);if(!item)return '';const route=item.area==='shine'?`#/shine/${item.id}`:`#/${item.area}/item/${item.id}`;return `<article class="guide-recommendation"><div><span>${esc(item.section||item.area.toUpperCase())}</span><strong>${esc(item.title)}</strong><p>${esc(item.subtitle)}</p></div><a class="btn ghost button-link" href="${route}">${esc(DATA.guides.iron.labels.openTopic)}</a></article>`;}
  if(rec.foodId){const item=(DATA.dietBuilder.items||[]).find(x=>x.id===rec.foodId);if(!item)return '';return `<article class="guide-recommendation"><div><span>${esc(DATA.guides.iron.labels.foodIdea)}</span><strong>${esc(item.title)}</strong><p>${esc(item.subtitle)}</p></div><a class="btn ghost button-link" href="#/heal/diet">${esc(DATA.guides.iron.labels.openTopic)}</a></article>`;}
  const task=findActionTask(rec.itemId,rec.group,rec.taskId);if(!task)return '';const saved=taskIsSaved(rec.itemId,rec.group,rec.taskId);return `<article class="guide-recommendation"><div><span>${esc(task.groupLabel)}</span><strong>${esc(task.title)}</strong><p>${esc(task.detail)}</p></div><button class="task-add ${saved?'saved':''} no-print" data-add-task="1" data-item="${esc(rec.itemId)}" data-group="${esc(rec.group)}" data-task="${esc(rec.taskId)}">${esc(saved?DATA.guides.iron.labels.added:DATA.guides.iron.labels.addAction)}</button></article>`;
}
function renderIronGuide(){setActive('');const g=DATA.guides.iron,choice=g.choices.find(x=>x.id===ironGuideIntent),recs=choice?(g.recommendations[choice.id]||[]):[],primary=recs.slice(0,g.primaryLimit),more=recs.slice(g.primaryLimit);app.innerHTML=`<div class="screen"><section class="detail iron-guide-screen"><a class="detail-back no-print" href="#/find">← ${esc(g.labels.back)}</a><p class="eyebrow">GUIDE</p><h1>${esc(g.title)}</h1><p class="lead">${esc(g.subtitle)}</p><div class="notice">${esc(g.safetyNotice)}</div><section class="guide-intents"><h2>${esc(g.labels.chooseIntent)}</h2><div>${g.choices.map(item=>`<button type="button" class="guide-intent ${ironGuideIntent===item.id?'selected':''}" data-guide-intent="${esc(item.id)}" aria-pressed="${ironGuideIntent===item.id}">${esc(item.label)}</button>`).join('')}</div></section>${choice?`<section class="guide-results"><p class="print-only"><strong>${esc(g.labels.selectedIntent)}:</strong> ${esc(choice.label)}</p>${primary.map(guideRecommendationCard).join('')||`<div class="empty-state">${esc(g.labels.noOptions)}</div>`}${more.length?`<details class="guide-more-options"><summary>${esc(g.labels.moreOptions)}</summary>${more.map(guideRecommendationCard).join('')}</details>`:''}</section>`:''}</section></div>`}
// END V047 FIND AND GUIDE

'''
if '// BEGIN V047 FIND AND GUIDE' not in app:
    app=app.replace('function route(){',module+'function route(){')

click_insert=r'''
  if(e.target.closest('[data-find-show-all]')){findShowAll=true;const input=document.getElementById('find-query'),target=document.getElementById('find-results');if(input&&target)target.innerHTML=renderFindResults(searchEntities(input.value));return}
  const guideIntent=e.target.closest('[data-guide-intent]');
  if(guideIntent){ironGuideIntent=guideIntent.dataset.guideIntent;renderIronGuide();return}
'''
app=app.replace("  const addBtn=e.target.closest('[data-add]');",click_insert+"\n  const addBtn=e.target.closest('[data-add]');")
app=app.replace("  if(mode==='shine'&&a)result=renderShineTopic(a);","  if(mode==='find')result=renderFind();\n  else if(mode==='guide'&&a==='iron')result=renderIronGuide();\n  else if(mode==='shine'&&a)result=renderShineTopic(a);")
app_path.write_text(app,encoding='utf-8')

# Styles
css_path=ROOT/'styles.css';css=css_path.read_text(encoding='utf-8')
if not css.startswith('/* IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md'):
    css=NOTICE_CSS+css
css_add=r'''

/* v047 Find and Guide */
.find-entry{display:flex;align-items:center;justify-content:space-between;gap:20px;margin:18px auto;padding:18px 20px;max-width:840px;border:1px solid var(--line,#d9dde5);border-radius:18px;background:var(--card,#fff)}
.find-entry h2,.find-entry p{margin:3px 0}.find-screen,.iron-guide-screen{max-width:840px;margin:0 auto}.find-label{display:block;font-weight:800;margin:20px 0 8px}.find-input{width:100%;min-height:48px;padding:12px 14px;border:2px solid var(--line,#cfd5df);border-radius:12px;font:inherit}.find-input:focus,.guide-intent:focus,.find-result-row a:focus,.iron-result-guide:focus{outline:3px solid currentColor;outline-offset:3px}.find-result-list{display:grid;gap:12px;margin-top:18px}.find-result-row{border:1px solid var(--line,#d9dde5);border-radius:16px;background:#fff;overflow:hidden}.find-result-row>a:first-child{display:grid;gap:5px;padding:16px;color:inherit;text-decoration:none}.find-result-row strong{font-size:1.05rem}.find-result-row p{margin:2px 0}.find-result-type{font-size:.75rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase}.iron-result-guide{display:block;padding:10px 16px;border-top:1px solid var(--line,#e3e6eb);font-weight:800}.find-show-all{margin-top:16px}.iron-guide-entry{margin:12px 0}.guide-intents>div{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.guide-intent{min-height:48px;padding:12px;text-align:left;border:1px solid var(--line,#d7dce5);border-radius:12px;background:#fff;font:inherit;font-weight:750}.guide-intent.selected{border-width:2px}.guide-results{display:grid;gap:12px;margin-top:20px}.guide-recommendation{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px;border:1px solid var(--line,#d9dde5);border-radius:16px;background:#fff}.guide-recommendation div{display:grid;gap:4px}.guide-recommendation p{margin:0}.guide-more-options{margin-top:8px}.guide-more-options summary,.wizard-more-actions summary{min-height:44px;display:flex;align-items:center;justify-content:space-between;font-weight:850;cursor:pointer}.wizard-more-actions>div{display:grid;gap:10px;margin-top:10px}.print-only{display:none}
@media(max-width:560px){.find-entry,.guide-recommendation{align-items:stretch;flex-direction:column}.guide-intents>div{grid-template-columns:1fr}.find-entry .btn,.guide-recommendation .btn{width:100%}}
@media print{.iron-guide-screen .print-only{display:block}.iron-guide-screen details{display:block}.iron-guide-screen details>summary{display:none}.iron-guide-screen .task-add{display:none}}
'''
if '/* v047 Find and Guide */' not in css: css+=css_add
css_path.write_text(css,encoding='utf-8')

# Shell title and notice.
index_path=ROOT/'index.html';index=index_path.read_text(encoding='utf-8')
if NOTICE_HTML.strip() not in index: index=index.replace('<!doctype html>','<!doctype html>\n'+NOTICE_HTML.strip())
index=re.sub(r'<title>.*?</title>','<title>Patient Care v047 — Find and Guide</title>',index,count=1)
index_path.write_text(index,encoding='utf-8')

# README and consolidated history/rules.
readme=(ROOT/'README.md').read_text(encoding='utf-8')
readme=readme.replace('Patient Care is an offline, dependency-free SHINE + HEAL + DR teaching and planning application.','Patient Care v047 is an offline, dependency-free SHINE + HEAL + DR teaching and planning application with unified Find and a non-diagnostic Iron Learning Guide.')
(ROOT/'README.md').write_text(readme,encoding='utf-8')

history_path=ROOT/'docs/HISTORY.md';history=history_path.read_text(encoding='utf-8')
if '### v047 — Find and Guide' not in history:
    section='''\n## Current release\n\n### v047 — Find and Guide\n\n- Added `#/find`, a deterministic offline search across visible researched SHINE, HEAL, DR, and Diet Builder food content.\n- Added practical aliases with fail-closed validation and stable local scoring.\n- Kept SHINE Focus as a secondary tie-breaker only; exact matches and urgent-help visibility remain primary.\n- Capped Sleep Wizard results at three primary actions, with additional matches under More matched actions.\n- Added `#/guide/iron`, a non-diagnostic navigation guide that reuses existing pages and Action Path tasks.\n- Added no clinical claims, editorial sources, dosing, QR codes, schedule builder, backend, authentication, or prescribing logic.\n- Preserved localStorage key `pc_pilot_v022_profile`, profile version 22, and existing saved-data compatibility.\n\n'''
    history=history.replace('## Current release\n',section+'## Previous current release\n',1)
history_path.write_text(history,encoding='utf-8')

rules_path=ROOT/'PATIENT_CARE_RULES.md';rules=rules_path.read_text(encoding='utf-8')
if 'Find and Guide Pattern — v047' not in rules:
    rules+='''\n\n## Find and Guide Pattern — v047\n\nFind uses deterministic local search over visible researched content. It helps users locate education but does not diagnose symptoms, interpret tests, or select treatment. Guides may organize existing researched pages and Action Path tasks, but must not create new clinical instructions. SHINE Focus may provide secondary context but must never override safety, exact search matches, or urgent-help visibility.\n'''
rules_path.write_text(rules,encoding='utf-8')

# Static checks.
subprocess.check_call(['node','--check','app.js'])
version=subprocess.check_output(['node','-e',"global.window={};require('./data/content.js');process.stdout.write(window.PATIENT_CARE_CONTENT.meta.contentVersion)"],text=True)
if version!='v047': raise SystemExit('content version check failed')
json.loads((ROOT/'data/schema.json').read_text(encoding='utf-8'))
if re.search(r'<(?:script|link)[^>]+(?:https?:)?//',index,re.I): raise SystemExit('external runtime asset found')
if 'pc_pilot_v022_profile' not in app or 'p.version=22' not in app: raise SystemExit('saved-data contract changed')

# Self-remove temporary implementation files.
(ROOT/'.github/v047_apply.py').unlink(missing_ok=True)
(ROOT/'.github/workflows/apply-v047.yml').unlink(missing_ok=True)
print('v047 transformation and checks completed')
