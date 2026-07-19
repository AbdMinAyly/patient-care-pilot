# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
app_path=Path('app.js')
history_path=Path('docs/HISTORY.md')
app=app_path.read_text(encoding='utf-8')
history=history_path.read_text(encoding='utf-8')

app=app.replace("if(e.target.closest('[data-save-medical-profile]')){const p=profile();p.guided.medicalProfile=[...document.querySelectorAll('[data-medical-profile]:checked')].map(x=>x.dataset.medicalProfile);saveProfile(p);renderDr();return}", "if(e.target.closest('[data-save-medical-profile]')){const p=profile();p.guided.medicalProfile=[...document.querySelectorAll('[data-medical-profile]:checked')].map(x=>x.dataset.medicalProfile);saveProfile(p);location.hash='#/dr';return}")

old="function renderPedia(filter=''){\n  setActive('pedia');const c=guidedConfig().pedia,cards=filter?c.cards.filter(x=>x.id===filter||filter==='heal'&&['diet','supplements'].includes(x.id)):c.cards;\n  app.innerHTML=`<div class=\"screen\">${hero('summary',c.title,c.intro)}<section class=\"pedia-grid\">${cards.map(card=>`<a class=\"pedia-card\" href=\"${esc(card.route)}\"><span>${esc(card.title)}</span><p>${esc(card.text)}</p></a>`).join('')}</section></div>`;\n}"
new="function renderPedia(filter=''){\n  setActive('pedia');const c=guidedConfig().pedia,cards=filter?c.cards.filter(x=>x.id===filter||filter==='heal'&&['diet','supplements'].includes(x.id)):c.cards;\n  app.innerHTML=`<div class=\"screen\">${filter?renderBackControl('#/pedia','Shinopedia','neutral'):''}${hero('summary',c.title,c.intro)}<section class=\"pedia-grid\">${cards.map(card=>`<a class=\"pedia-card\" href=\"${esc(card.route)}\"><span>${esc(card.title)}</span><p>${esc(card.text)}</p></a>`).join('')}</section></div>`;\n}"
if old not in app: raise SystemExit('renderPedia pattern missing')
app=app.replace(old,new)
app=app.replace("return ['shine','heal','dr','plan','summary'].includes(mode)?(mode==='plan'?'summary':mode):''", "return ['shine','heal','dr','pedia','plan','summary'].includes(mode)?(mode==='plan'?'summary':mode):''")
app=app.replace("return mode==='shine'?'SHINE':mode==='heal'?'HEAL':mode==='dr'?'DR':mode==='summary'?'Your Plan':'previous page'", "return mode==='shine'?'SHINE':mode==='heal'?'HEAL':mode==='dr'?'DR':mode==='pedia'?'Shinopedia':mode==='summary'?'Your Plan':'previous page'")

note='''\n- Verification fixes ensure Medical Profile saves return to DR, filtered Shinopedia views return one level to Shinopedia, and Shinopedia remains the active navigation context for utility pages.\n'''
if note.strip() not in history: history += note
app_path.write_text(app,encoding='utf-8')
history_path.write_text(history,encoding='utf-8')
