# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
import pathlib,re,subprocess
R=pathlib.Path('.');p=R/'app.js';s=p.read_text(encoding='utf-8')
s=s.replace('<p class="eyebrow">FIND</p><h2>${esc(s.entryTitle)}</h2>','<p class="eyebrow">${esc(s.eyebrow)}</p><h2>${esc(s.entryTitle)}</h2>')
s=s.replace('<p class="eyebrow">FIND</p><h1>${esc(s.title)}</h1>','<p class="eyebrow">${esc(s.eyebrow)}</p><h1>${esc(s.title)}</h1>')
s=s.replace('<p class="eyebrow">GUIDE</p><h1>${esc(g.title)}</h1>','<p class="eyebrow">${esc(g.eyebrow)}</p><h1>${esc(g.title)}</h1>')
old='data-add-task="1" data-item="${esc(rec.itemId)}" data-group="${esc(rec.group)}" data-task="${esc(rec.taskId)}"'
new='data-add-task="1" data-origin="iron-guide" data-item="${esc(rec.itemId)}" data-group="${esc(rec.group)}" data-task="${esc(rec.taskId)}"'
s=s.replace(old,new)
old2="  if(origin==='sleep-wizard'&&document.getElementById('sleep-wizard-modal')){renderSleepWizardModal();return}"
new2=old2+"\n  if(origin==='iron-guide'&&location.hash==='#/guide/iron'){renderIronGuide();return}"
if "origin==='iron-guide'" not in s:s=s.replace(old2,new2)
marker="  const ironGuide=data.guides?.iron;"
block="""  const broadSymptoms=new Set(['fatigue','tiredness','tired all the time','chest pain','breathlessness']);
  (search?.aliases||[]).forEach(alias=>{
    const term=normalizeAliasTerm(alias.term);
    if(!broadSymptoms.has(term))return;
    const symptomPageExists=entities.some(x=>x.sectionId==='symptoms'&&(normalizeAliasTerm(x.item.title).includes(term)||normalizeAliasTerm(x.item.id)===term.replace(/ /g,'-')));
    const targetsOnlySymptoms=(alias.targetIds||[]).every(id=>entities.find(x=>x.item.id===id)?.sectionId==='symptoms');
    if(symptomPageExists&&!targetsOnlySymptoms)errors.push('Broad symptom alias must target the existing symptom page: '+alias.term);
  });
"""
if 'const broadSymptoms=new Set' not in s:s=s.replace(marker,block+marker)
required=['${esc(s.eyebrow)}','${esc(g.eyebrow)}','data-origin="iron-guide"',"origin==='iron-guide'",'const broadSymptoms=new Set']
for item in required:
    if item not in s:raise SystemExit('missing patch: '+item)
p.write_text(s,encoding='utf-8')
subprocess.check_call(['node','--check','app.js'])
(R/'.github/v047_app_fix.py').unlink(missing_ok=True)
(R/'.github/workflows/v047-app-fix.yml').unlink(missing_ok=True)
