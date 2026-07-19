# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
import json,pathlib,subprocess
R=pathlib.Path('.')
raw=subprocess.check_output(['node','-e',"global.window={};require('./data/content.js');process.stdout.write(JSON.stringify(window.PATIENT_CARE_CONTENT))"],text=True)
data=json.loads(raw)
data['search']['eyebrow']='Find'
data['guides']['iron']['eyebrow']='Guide'
(R/'data/content.js').write_text('/* IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE. */\nwindow.PATIENT_CARE_CONTENT = '+json.dumps(data,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')

p=R/'app.js';s=p.read_text(encoding='utf-8')
s=s.replace('<p class="eyebrow">FIND</p><h2>${esc(s.entryTitle)}</h2>','<p class="eyebrow">${esc(s.eyebrow)}</p><h2>${esc(s.entryTitle)}</h2>')
s=s.replace('<p class="eyebrow">FIND</p><h1>${esc(s.title)}</h1>','<p class="eyebrow">${esc(s.eyebrow)}</p><h1>${esc(s.title)}</h1>')
s=s.replace('<p class="eyebrow">GUIDE</p><h1>${esc(g.title)}</h1>','<p class="eyebrow">${esc(g.eyebrow)}</p><h1>${esc(g.title)}</h1>')
s=s.replace('data-add-task="1" data-item="${esc(rec.itemId)}"','data-add-task="1" data-origin="iron-guide" data-item="${esc(rec.itemId)}"')
s=s.replace("  if(origin==='sleep-wizard'&&document.getElementById('sleep-wizard-modal')){renderSleepWizardModal();return}","  if(origin==='sleep-wizard'&&document.getElementById('sleep-wizard-modal')){renderSleepWizardModal();return}\n  if(origin==='iron-guide'&&location.hash==='#/guide/iron'){renderIronGuide();return}")
needle="""    (search.aliases||[]).forEach(alias=>{\n      const term=normalizeAliasTerm(alias.term);"""
# Add semantic alias safety after the alias validation loop.
insert="""
    const broadSymptoms=new Set(['fatigue','tiredness','tired all the time','chest pain','breathlessness']);
    (search.aliases||[]).forEach(alias=>{
      const term=normalizeAliasTerm(alias.term);
      if(!broadSymptoms.has(term))return;
      const symptomTarget=(alias.targetIds||[]).every(id=>entities.find(x=>x.item.id===id)?.sectionId==='symptoms');
      const symptomPageExists=entities.some(x=>x.sectionId==='symptoms'&&(normalizeAliasTerm(x.item.title).includes(term)||normalizeAliasTerm(x.item.id).includes(term.replace(/ /g,'-'))));
      if(symptomPageExists&&!symptomTarget)errors.push('Broad symptom alias must target the existing symptom page: '+alias.term);
    });
"""
marker="""    });
  }
  const ironGuide=data.guides?.iron;"""
if insert.strip() not in s:
    s=s.replace(marker,"    });\n"+insert+"  }\n  const ironGuide=data.guides?.iron;",1)
p.write_text(s,encoding='utf-8')
subprocess.check_call(['node','--check','app.js'])
subprocess.check_call(['node','-e',"global.window={};require('./data/content.js');if(window.PATIENT_CARE_CONTENT.meta.contentVersion!=='v047')process.exit(1)"])
(R/'.github/v047_fix.py').unlink(missing_ok=True)
(R/'.github/workflows/v047-fix.yml').unlink(missing_ok=True)
