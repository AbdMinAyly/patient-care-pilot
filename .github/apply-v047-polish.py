# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
import re, json

root=Path('.')
app_path=root/'app.js'; css_path=root/'styles.css'; content_path=root/'data/content.js'; history_path=root/'docs/HISTORY.md'
app=app_path.read_text(encoding='utf-8')
css=css_path.read_text(encoding='utf-8')
content=content_path.read_text(encoding='utf-8')
history=history_path.read_text(encoding='utf-8')

NOTICE='PATIENT_CARE_RULES.md'
for text,name in [(app,'app.js'),(css,'styles.css'),(content,'data/content.js'),(history,'docs/HISTORY.md')]:
    assert NOTICE in text, f'missing rules notice: {name}'

# Utility state and helpers.
app=app.replace("let findShowAll=false;\nlet ironGuideIntent=null;", """let findShowAll=false;
let findQuery='';
let findScrollY=0;
let findOrigin='#/shine';
let guideOrigin='#/find';
let ironGuideIntent=null;
let pendingDietFoodId=null;
function utilityModeFromHash(hash){const mode=String(hash||'').replace('#/','').split('/')[0];return ['shine','heal','dr','plan','summary'].includes(mode)?(mode==='plan'?'summary':mode):''}
function utilityBackLabel(hash){const mode=utilityModeFromHash(hash);return mode==='shine'?'SHINE':mode==='heal'?'HEAL':mode==='dr'?'DR':mode==='summary'?'Your Plan':'previous page'}
function rememberUtilityOrigin(kind){const current=location.hash||'#/shine';if(kind==='find')findOrigin=current;else guideOrigin=current}
function openUtilityRoute(kind){rememberUtilityOrigin(kind);location.hash=kind==='find'?'#/find':'#/guide/iron'}""")

# More precise alias matching and match reasons.
app=app.replace("function aliasMatchesFor(query){const q=normalizeSearchText(query);return (DATA.search.aliases||[]).filter(alias=>normalizeSearchText(alias.term).includes(q)||q.includes(normalizeSearchText(alias.term)))}", """function aliasMatchesFor(query){
  const q=normalizeSearchText(query),words=searchWords(q);
  return (DATA.search.aliases||[]).filter(alias=>{
    const term=normalizeSearchText(alias.term),termWords=searchWords(term);
    if(term===q)return true;
    if(words.length<2||termWords.length<2)return false;
    return words.every(word=>termWords.includes(word))||termWords.every(word=>words.includes(word));
  });
}""")

app=app.replace("function dedupeSearchResults(results){const seen=new Set();return results.filter(result=>!seen.has(result.id)&&(seen.add(result.id),true))}\nfunction searchEntities(query){const q=normalizeSearchText(query);if(!q)return [];const aliases=aliasMatchesFor(q);return dedupeSearchResults(buildSearchIndex().map(entity=>({...entity,score:scoreSearchResult(entity,q,aliases)})).filter(x=>x.score>0).sort((a,b)=>(b.score-a.score)||(a.order-b.order)))}", """function searchMatchReason(entity,query,aliasMatches){
  const q=normalizeSearchText(query),title=normalizeSearchText(entity.title),subtitle=normalizeSearchText(entity.subtitle),section=normalizeSearchText(entity.section),body=normalizeSearchText(entity.body);
  if(title===q)return DATA.search.matchLabels.title;
  if(aliasMatches.some(alias=>normalizeSearchText(alias.term)===q&&(alias.targetIds||[]).includes(entity.id)))return DATA.search.matchLabels.alias;
  if(title.startsWith(q)||searchWords(q).every(word=>searchWords(title).includes(word)))return DATA.search.matchLabels.title;
  if(aliasMatches.some(alias=>(alias.targetIds||[]).includes(entity.id)))return DATA.search.matchLabels.alias;
  if((subtitle+' '+section).includes(q))return DATA.search.matchLabels.section;
  if(body.includes(q))return DATA.search.matchLabels.teaching;
  return '';
}
function dedupeSearchResults(results){const seen=new Set();return results.filter(result=>!seen.has(result.id)&&(seen.add(result.id),true))}
function searchEntities(query){const q=normalizeSearchText(query);if(!q)return [];const aliases=aliasMatchesFor(q);return dedupeSearchResults(buildSearchIndex().map(entity=>({...entity,score:scoreSearchResult(entity,q,aliases),matchReason:searchMatchReason(entity,q,aliases)})).filter(x=>x.score>0).sort((a,b)=>(b.score-a.score)||(a.order-b.order)))}""")

# Replace Find/Guide rendering as one cohesive block.
start=app.index('function renderIronGuideEntry(id)')
end=app.index('// END V047 FIND AND GUIDE')
new_block=r'''function renderIronGuideEntry(id){return isIronGuideEntity(id)?`<aside class="iron-guide-entry no-print"><a class="btn ghost button-link" href="#/guide/iron" data-open-iron-guide="1">${esc(DATA.search.ironGuideLink)}</a></aside>`:''}
function renderFindEntry(){const s=DATA.search;return `<section class="find-entry no-print"><div><p class="eyebrow">${esc(s.eyebrow)}</p><h2>${esc(s.entryTitle)}</h2><p>${esc(s.entryText)}</p></div><a class="btn ghost button-link" href="#/find" data-open-find="1">${esc(s.entryAction)}</a></section>`}
function renderIronGuideContext(results){if(!results.some(entity=>isIronGuideEntity(entity.id)))return '';const s=DATA.search;return `<aside class="find-guide-context no-print"><div><strong>${esc(s.guideContextTitle)}</strong><p>${esc(s.guideContextText)}</p></div><a class="btn ghost button-link" href="#/guide/iron" data-open-iron-guide="1">${esc(s.guideContextAction)}</a></aside>`}
function renderFindResults(results){
  const s=DATA.search,shown=findShowAll?results:results.slice(0,s.resultLimit),countText=String(s.resultCount).replace('{count}',results.length),showingText=String(s.showingCount).replace('{shown}',shown.length).replace('{count}',results.length);
  if(!results.length)return `<div class="empty-state">${esc(s.noResults)}</div>`;
  return `${renderIronGuideContext(results)}<div class="find-result-summary"><strong>${esc(countText)}</strong><span>${esc(showingText)}</span></div><div class="find-result-list">${shown.map(entity=>`<article class="find-result-row${entity.area==='food'&&pendingDietFoodId===entity.id?' highlighted':''}"><a href="${esc(entity.route)}" data-find-result="1" ${entity.area==='food'?`data-find-food="${esc(entity.id)}" data-find-food-title="${esc(entity.title)}"`:''}>${renderSearchFocusBadge(entity)}<span class="find-result-type">${esc(s.resultTypes[entity.area])}${entity.sectionId==='er'?' · '+esc(s.urgentLabel):''}</span><strong>${esc(entity.title)}</strong><small>${esc(entity.area==='food'?s.modeLabels.food:`${entity.section} · ${s.modeLabels[entity.area]}`)}</small><p>${esc(entity.subtitle)}</p><em>${esc(entity.matchReason)}</em></a></article>`).join('')}</div>${!findShowAll&&results.length>s.resultLimit?`<button class="btn ghost find-show-all" data-find-show-all="1">${esc(s.showAll)} (${results.length})</button>`:''}`;
}
function updateFindResults(){const input=document.getElementById('find-query'),target=document.getElementById('find-results');if(!input||!target)return;findQuery=input.value;findShowAll=false;target.innerHTML=findQuery.trim()?renderFindResults(searchEntities(findQuery)):`<div class="empty-state">${esc(DATA.search.emptyState)}</div>`}
function renderFind(){
  setActive(utilityModeFromHash(findOrigin));const s=DATA.search,results=findQuery.trim()?searchEntities(findQuery):[];
  app.innerHTML=`<div class="screen">${renderShineFocusBar()}<section class="detail find-screen"><a class="detail-back no-print" href="${esc(findOrigin)}" data-find-back="1">← ${esc(String(s.backTo).replace('{page}',utilityBackLabel(findOrigin)))}</a><p class="eyebrow">${esc(s.eyebrow)}</p><h1>${esc(s.title)}</h1><p class="lead">${esc(s.subtitle)}</p><div class="notice info-notice">${esc(s.safetyNotice)}</div><label class="find-label" for="find-query">${esc(s.title)}</label><div class="find-input-wrap"><input id="find-query" class="find-input" type="search" value="${esc(findQuery)}" placeholder="${esc(s.placeholder)}" autocomplete="off"><button type="button" class="find-clear no-print" data-find-clear="1" aria-label="${esc(s.clearSearch)}">×</button></div><div id="find-results">${findQuery.trim()?renderFindResults(results):`<div class="empty-state">${esc(s.emptyState)}</div>`}</div></section></div>`;
  const input=document.getElementById('find-query');input?.addEventListener('input',updateFindResults);requestAnimationFrame(()=>{window.scrollTo(0,findScrollY);if(!findQuery)input?.focus()});
}
function guideEntity(id){return findAnyEntity(id)}
function guideRecommendationCard(rec){
  const g=DATA.guides.iron;
  if(rec.entityId){const item=guideEntity(rec.entityId);if(!item)return '';const route=item.area==='shine'?`#/shine/${item.id}`:`#/${item.area}/item/${item.id}`,label=String(g.labels.openTopicTemplate).replace('{topic}',item.title);return `<article class="guide-recommendation read"><div><span>${esc(g.labels.readLabel)} · ${esc(item.section||item.area.toUpperCase())}</span><strong>${esc(item.title)}</strong><p>${esc(item.subtitle)}</p></div><a class="btn ghost button-link" href="${route}">${esc(label)}</a></article>`;}
  if(rec.foodId){const item=(DATA.dietBuilder.items||[]).find(x=>x.id===rec.foodId);if(!item)return '';const label=String(g.labels.openTopicTemplate).replace('{topic}',item.title);return `<article class="guide-recommendation food"><div><span>${esc(g.labels.foodIdea)}</span><strong>${esc(item.title)}</strong><p>${esc(item.subtitle)}</p></div><a class="btn ghost button-link" href="#/heal/diet" data-find-food="${esc(item.id)}" data-find-food-title="${esc(item.title)}">${esc(label)}</a></article>`;}
  const task=findActionTask(rec.itemId,rec.group,rec.taskId);if(!task)return '';const saved=taskIsSaved(rec.itemId,rec.group,rec.taskId);return `<article class="guide-recommendation action"><div><span>${esc(g.labels.actionLabel)} · ${esc(task.groupLabel)}</span><strong>${esc(task.title)}</strong><p>${esc(task.detail)}</p></div><button class="task-add ${saved?'saved':''} no-print" data-add-task="1" data-origin="iron-guide" data-item="${esc(rec.itemId)}" data-group="${esc(rec.group)}" data-task="${esc(rec.taskId)}">${esc(saved?g.labels.added:g.labels.addAction)}</button></article>`;
}
function renderIronGuide(){
  setActive(utilityModeFromHash(guideOrigin));const g=DATA.guides.iron,choice=g.choices.find(x=>x.id===ironGuideIntent),recs=choice?(g.recommendations[choice.id]||[]):[],primary=recs.slice(0,g.primaryLimit),more=recs.slice(g.primaryLimit);
  app.innerHTML=`<div class="screen"><section class="detail iron-guide-screen"><a class="detail-back no-print" href="${esc(guideOrigin)}" data-guide-back="1">← ${esc(String(g.labels.backTo).replace('{page}',guideOrigin==='#/find'?DATA.search.title:utilityBackLabel(guideOrigin)))}</a><p class="eyebrow">${esc(g.eyebrow)}</p><h1>${esc(g.title)}</h1><p class="lead">${esc(g.subtitle)}</p><div class="notice info-notice">${esc(g.safetyNotice)}</div><section class="guide-intents"><h2>${esc(g.labels.chooseIntent)}</h2><div>${g.choices.map(item=>`<button type="button" class="guide-intent ${ironGuideIntent===item.id?'selected':''}" data-guide-intent="${esc(item.id)}" aria-pressed="${ironGuideIntent===item.id}">${esc(item.label)}</button>`).join('')}</div></section>${choice?`<section class="guide-results"><div class="guide-selected-intent"><small>${esc(g.labels.selectedIntent)}</small><strong>${esc(choice.label)}</strong></div><p class="print-only"><strong>${esc(g.labels.selectedIntent)}:</strong> ${esc(choice.label)}</p>${primary.map(guideRecommendationCard).join('')||`<div class="empty-state">${esc(g.labels.noOptions)}</div>`}${more.length?`<details class="guide-more-options"><summary>${esc(g.labels.moreOptions)}</summary>${more.map(guideRecommendationCard).join('')}</details>`:''}</section>`:`<div class="guide-empty-state">${esc(g.labels.choosePrompt)}</div>`}</section></div>`;
}
'''
app=app[:start]+new_block+app[end:]

# Click handlers for continuity, clear, and specific food targeting.
needle="  if(e.target.closest('[data-find-show-all]')){findShowAll=true;const input=document.getElementById('find-query'),target=document.getElementById('find-results');if(input&&target)target.innerHTML=renderFindResults(searchEntities(input.value));return}\n"
replacement=needle+"""  const openFind=e.target.closest('[data-open-find]');if(openFind){e.preventDefault();openUtilityRoute('find');return}
  const openGuide=e.target.closest('[data-open-iron-guide]');if(openGuide){e.preventDefault();openUtilityRoute('guide');return}
  const findBack=e.target.closest('[data-find-back]');if(findBack){e.preventDefault();location.hash=findOrigin;return}
  const guideBack=e.target.closest('[data-guide-back]');if(guideBack){e.preventDefault();location.hash=guideOrigin;return}
  if(e.target.closest('[data-find-clear]')){findQuery='';findShowAll=false;findScrollY=0;renderFind();return}
  const findResult=e.target.closest('[data-find-result]');if(findResult){findScrollY=window.scrollY}
  const foodTarget=e.target.closest('[data-find-food]');if(foodTarget){e.preventDefault();pendingDietFoodId=foodTarget.dataset.findFood;dietState.focus=[];dietState.meal='all';dietState.match='all';dietState.query=foodTarget.dataset.findFoodTitle||'';location.hash='#/heal/diet';return}
"""
assert needle in app
app=app.replace(needle,replacement)

# Diet result highlighting and scroll target.
app=app.replace('return `<article class="diet-item-card">', 'return `<article id="diet-item-${esc(item.id)}" class="diet-item-card${pendingDietFoodId===item.id?\' find-target\':\'\'}">')
app=app.replace("  renderDietResults();\n  document.getElementById('diet-query')?.addEventListener('input',e=>{dietState.query=e.target.value;renderDietResults()});", """  renderDietResults();
  document.getElementById('diet-query')?.addEventListener('input',e=>{dietState.query=e.target.value;pendingDietFoodId=null;renderDietResults()});
  if(pendingDietFoodId)requestAnimationFrame(()=>document.getElementById('diet-item-'+pendingDietFoodId)?.scrollIntoView({block:'center'}));""")

# Sleep Wizard: category labels and explicit three-action button before disclosure.
pattern=r"function renderSleepWizardResults\(\)\{.*?\n\}\nfunction renderSleepWizardModal"
match=re.search(pattern,app,re.S);assert match
new_sleep=r'''function renderSleepWizardResults(){
  const wizard=sleepWizardConfig();
  const recommendations=matchingSleepWizardRecommendations();
  const presentation=wizard.presentation||{};
  const limit=presentation.primaryLimit||3;
  const primary=recommendations.slice(0,limit);
  const hidden=recommendations.slice(limit);
  const renderCard=rec=>{
    const saved=taskIsSaved(rec.task.itemId,rec.task.group,rec.task.taskId);
    return `<article class="sleep-wizard-result-card"><div><span class="wizard-result-category">${esc(rec.categoryData?.title||rec.category)}</span><strong>${esc(rec.task.title)}</strong><p>${esc(rec.reason)}</p><small>From ${esc(rec.task.itemTitle)}</small></div><button class="task-add ${saved?'saved':''}" data-add-task="1" data-origin="sleep-wizard" data-item="${esc(rec.task.itemId)}" data-group="${esc(rec.task.group)}" data-task="${esc(rec.task.taskId)}">${saved?'Added ✓':'Add to plan'}</button></article>`;
  };
  const unsaved=primary.filter(rec=>!taskIsSaved(rec.task.itemId,rec.task.group,rec.task.taskId));
  const hiddenLabel=String(presentation.hiddenCountLabel||'{count} additional matched actions').replace('{count}',hidden.length).replace('{suffix}',hidden.length===1?'':'s');
  const addLabel=String(presentation.addShownActions||'Add these {count} actions').replace('{count}',primary.length);
  return `<div class="sleep-wizard-results">
    <div class="sleep-wizard-results-head"><p class="eyebrow">YOUR MATCHED HEAL ACTIONS</p><h3>${esc(wizard.resultsTitle)}</h3><p>${esc(wizard.resultsIntro)}</p></div>
    ${sleepWizardChoiceSummary()}
    <div class="sleep-wizard-result-groups">${primary.map(renderCard).join('')}</div>
    <button class="btn sleep-wizard-add-all" data-wizard-add-all="1" ${unsaved.length?'':'disabled'}>${esc(unsaved.length?addLabel:(wizard.addedAllLabel||'All shown actions added'))}</button>
    ${hidden.length?`<details class="wizard-more-actions"><summary>${esc(presentation.moreMatchedActions||'More matched actions')} <span>${esc(hiddenLabel)}</span></summary><div>${hidden.map(renderCard).join('')}</div></details>`:''}
  </div>`;
}
function renderSleepWizardModal'''
app=app[:match.start()]+new_sleep+app[match.end():]

# Keep utility state when returning through hash history.
app=app.replace("window.addEventListener('hashchange',()=>{closeSleepWizard(false);closeShineFocusReplace();route()});", "window.addEventListener('hashchange',()=>{if(location.hash!=='#/find')findScrollY=window.scrollY;closeSleepWizard(false);closeShineFocusReplace();route()});")

# Data-controlled labels.
content=content.replace('"eyebrow": "Find"\n  },', '"eyebrow": "Find",\n    "backTo": "Back to {page}",\n    "clearSearch": "Clear search",\n    "resultCount": "{count} results",\n    "showingCount": "Showing {shown} of {count}",\n    "guideContextTitle": "Not sure which iron topic to open?",\n    "guideContextText": "Use the Iron Learning Guide to choose among existing education and actions.",\n    "guideContextAction": "Open Iron Learning Guide",\n    "matchLabels": {"title": "Title match", "alias": "Related search term", "section": "Found in topic details", "teaching": "Found in teaching"}\n  },')
content=content.replace('"back": "Find a topic",', '"back": "Find a topic",\n          "backTo": "Back to {page}",\n          "choosePrompt": "Choose one option above to see existing Patient Care topics, food ideas, and actions.",\n          "readLabel": "Read",\n          "actionLabel": "Plan action",\n          "openTopicTemplate": "Open {topic}",')
content=content.replace('"addShownActions": "Add shown actions"', '"addShownActions": "Add these {count} actions"')

# CSS polish.
polish_css=r'''

/* v047 Find and Guide polish */
.info-notice{background:#f5f7fa;border-color:#d9dee8;color:#344054;font-weight:700}
.find-entry{padding:14px 16px;box-shadow:none}
.find-entry h2{font-size:1.25rem}
.find-input-wrap{position:relative}
.find-input{padding-right:52px}
.find-clear{position:absolute;right:5px;top:5px;width:44px;height:44px;border:0;border-radius:14px;background:#eef1f5;color:#475467;font-size:1.4rem;cursor:pointer}
.find-result-summary{display:flex;justify-content:space-between;gap:12px;align-items:center;margin:14px 0 8px;color:var(--muted);font-size:.88rem}
.find-result-summary strong{color:var(--ink);font-size:1rem}
.find-result-row>a:first-child{display:grid;gap:4px}
.find-result-row strong{font-size:1.04rem;line-height:1.25}
.find-result-row p{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin:.2rem 0 0}
.find-result-row em{font-style:normal;color:#667085;font-size:.78rem;font-weight:800;margin-top:3px}
.find-result-type{justify-self:start}
.find-guide-context{display:flex;align-items:center;justify-content:space-between;gap:14px;border:1px solid #d8e2ef;background:#f7faff;border-radius:18px;padding:14px;margin:12px 0}
.find-guide-context p{margin:3px 0 0;color:var(--muted);line-height:1.4}
.guide-empty-state{padding:18px;border:1px dashed #cfd5df;border-radius:18px;color:var(--muted);text-align:center;margin-top:14px}
.guide-selected-intent{position:sticky;top:8px;z-index:3;display:flex;flex-direction:column;gap:2px;background:#fff;border:1px solid var(--line);border-radius:16px;padding:10px 12px;margin-bottom:10px;box-shadow:0 6px 18px rgba(17,24,39,.06)}
.guide-selected-intent small{color:var(--muted);font-weight:800}
.guide-recommendation>div>span{display:block;margin-bottom:4px;font-size:.76rem;font-weight:900;text-transform:uppercase;letter-spacing:.05em;color:#667085}
.guide-recommendation.read{border-left:4px solid var(--dr)}
.guide-recommendation.food{border-left:4px solid var(--heal)}
.guide-recommendation.action{border-left:4px solid var(--shine)}
.wizard-result-category{display:inline-flex;margin-bottom:5px;padding:4px 7px;border-radius:999px;background:#f2f4f7;color:#475467;font-size:.72rem;font-weight:900}
.diet-item-card.find-target{outline:3px solid rgba(23,103,194,.35);outline-offset:3px;animation:findTargetPulse 1.4s ease-out 1}
@keyframes findTargetPulse{0%{transform:scale(.985);background:#edf5ff}100%{transform:scale(1);background:#fff}}
@media(prefers-reduced-motion:reduce){.diet-item-card.find-target{animation:none}}
@media(max-width:520px){
  .find-guide-context{align-items:stretch;flex-direction:column}
  .find-guide-context .btn,.guide-recommendation .btn,.guide-recommendation .task-add{width:100%;min-height:44px;text-align:center}
  .find-result-summary{align-items:flex-start;flex-direction:column;gap:2px}
  .focus-relevance-badge{white-space:normal;line-height:1.25}
  .guide-selected-intent{top:4px}
}
'''
if '/* v047 Find and Guide polish */' not in css: css += polish_css

# History entry.
entry='''\n### v047 polish pass\n\n- Preserved Find queries, result expansion, and return position while opening topics.\n- Added origin-aware Back behavior for Find and the Iron Learning Guide.\n- Simplified result density, added result counts, clear search, and neutral match explanations.\n- Replaced repeated Iron Guide links with one contextual guide card.\n- Made food-result destinations open and highlight the selected Diet Builder item.\n- Clarified Read, Food idea, and Plan action recommendation types.\n- Added an Iron Guide empty state and persistent selected-intent context.\n- Restored Sleep Wizard category context and moved the explicit three-action add control before additional matches.\n- Refined neutral safety notices, narrow-screen actions, badges, and spacing.\n'''
if '### v047 polish pass' not in history: history += entry

# Required assertions.
for required in ['data-open-find','findQuery','guide-selected-intent','data-find-food','wizard-result-category','Add these {count} actions']:
    assert required in app or required in content, required
assert "const KEY = 'pc_pilot_v022_profile';" in app
assert 'p.version=22' in app
assert 'https://' not in css

app_path.write_text(app,encoding='utf-8')
css_path.write_text(css,encoding='utf-8')
content_path.write_text(content,encoding='utf-8')
history_path.write_text(history,encoding='utf-8')
print('v047 polish applied')
