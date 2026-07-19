# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
import re, json, subprocess

root=Path('.')
app_path=root/'app.js'; css_path=root/'styles.css'; content_path=root/'data/content.js'; history_path=root/'docs/HISTORY.md'
app=app_path.read_text(encoding='utf-8')
css=css_path.read_text(encoding='utf-8')
content=content_path.read_text(encoding='utf-8')
history=history_path.read_text(encoding='utf-8')

# One reusable back control replaces duplicated text-only back links.
pattern=r"function renderDetailNavigation\(area,item\)\{.*?\n\}"
replacement="""function renderBackControl(href,label,area=''){
  return `<a class=\"back-control ${esc(area)} no-print\" href=\"${esc(href)}\"><span class=\"back-control-icon\" aria-hidden=\"true\">‹</span><span>${esc(String(label||'Back').replace(/^←\\s*/,''))}</span></a>`;
}
function renderDetailNavigation(area,item){
  const labels=DATA.ui.clarity||{};
  if(area==='shine')return renderBackControl('#/shine',labels.backToShine||'Back to SHINE','shine');
  if(area==='heal')return renderBackControl('#/heal',labels.backToHeal||'Back to HEAL','heal');
  const sectionId=item?.sectionId||'';
  const sectionTitle=item?.section||'DR';
  return renderBackControl(`#/${area}/${sectionId}`,`${labels.backToSectionPrefix||'Back to'} ${sectionTitle}`,area);
}"""
app,n=re.subn(pattern,replacement,app,count=1,flags=re.S)
assert n==1,'renderDetailNavigation patch failed'

old="""<a class=\"detail-back\" href=\"#/${area}\">← ${esc((DATA.ui.clarity.backToSectionPrefix||'← Back to')+' '+area.toUpperCase())}</a>"""
new="""${renderBackControl(`#/${area}`,area==='heal'?(DATA.ui.clarity.backToHeal||'Back to HEAL'):(DATA.ui.clarity.backToDr||'Back to DR'),area)}"""
assert old in app,'section back link not found'
app=app.replace(old,new,1)

old_find='''<a class="detail-back no-print" href="${esc(findOrigin)}" data-find-back="1">← ${esc(String(s.backTo).replace('{page}',utilityBackLabel(findOrigin)))}</a>'''
new_find='''${renderBackControl(findOrigin,String(s.backTo).replace('{page}',utilityBackLabel(findOrigin)),utilityModeFromHash(findOrigin))}'''
assert old_find in app,'Find back link not found'
app=app.replace(old_find,new_find,1)

old_guide='''<a class="detail-back no-print" href="${esc(guideOrigin)}" data-guide-back="1">← ${esc(String(g.labels.backTo).replace('{page}',guideOrigin==='#/find'?DATA.search.title:utilityBackLabel(guideOrigin)))}</a>'''
new_guide='''${renderBackControl(guideOrigin,String(g.labels.backTo).replace('{page}',guideOrigin==='#/find'?DATA.search.title:utilityBackLabel(guideOrigin)),utilityModeFromHash(guideOrigin))}'''
assert old_guide in app,'Guide back link not found'
app=app.replace(old_guide,new_guide,1)

# The route focus remains for accessibility; only programmatically focused headings lose the decorative browser outline.
css_add='''

/* Navigation and programmatic heading focus cleanup */
h1[tabindex="-1"]:focus,h2[tabindex="-1"]:focus{outline:none}
.back-control{display:inline-flex;align-items:center;gap:9px;width:max-content;max-width:100%;min-height:44px;margin:0 0 14px;padding:7px 13px 7px 7px;border:1px solid #dfe3e9;border-radius:999px;background:#fff;color:#344054;text-decoration:none;font-weight:900;box-shadow:0 5px 14px rgba(17,24,39,.055);transition:transform .16s ease,border-color .16s ease,background .16s ease}
.back-control-icon{display:grid;place-items:center;flex:none;width:30px;height:30px;border-radius:999px;background:#eef1f5;color:#344054;font-size:1.7rem;line-height:1;font-weight:650;padding-bottom:3px}
.back-control.shine:hover,.back-control.shine:focus-visible{border-color:rgba(193,18,50,.32);background:var(--shine-soft);color:var(--shine)}
.back-control.shine:hover .back-control-icon,.back-control.shine:focus-visible .back-control-icon{background:#fff;color:var(--shine)}
.back-control.heal:hover,.back-control.heal:focus-visible{border-color:rgba(188,133,0,.38);background:var(--heal-soft);color:#765000}
.back-control.heal:hover .back-control-icon,.back-control.heal:focus-visible .back-control-icon{background:#fff;color:#765000}
.back-control.dr:hover,.back-control.dr:focus-visible{border-color:rgba(23,103,194,.3);background:var(--dr-soft);color:var(--dr)}
.back-control.dr:hover .back-control-icon,.back-control.dr:focus-visible .back-control-icon{background:#fff;color:var(--dr)}
.back-control:focus-visible{outline:3px solid currentColor;outline-offset:3px}
@media(prefers-reduced-motion:no-preference){.back-control:hover{transform:translateX(-2px)}}
@media(max-width:430px){.back-control{margin-bottom:12px;padding-right:12px;font-size:.9rem}}
@media print{.back-control{display:none!important}}
'''
if '/* Navigation and programmatic heading focus cleanup */' not in css:
    css += css_add

# Keep all patient-facing labels in data/content.js.
needle='''      "backToShine": "← Back to SHINE",'''
labels='''      "backToShine": "Back to SHINE",
      "backToHeal": "Back to HEAL home",
      "backToDr": "Back to DR home",'''
assert needle in content,'clarity labels insertion point not found'
content=content.replace(needle,labels,1)

note='''
### Navigation UI cleanup

- Removed the unintended browser outline around the programmatically focused page heading while preserving route-change focus for assistive technology.
- Replaced duplicated text-only back links with one reusable styled back control.
- HEAL detail pages now return directly to the main HEAL page; DR section navigation remains contextual.
- No new permanent files, routes, clinical content, dependencies, or saved-data fields were added.
'''
if '### Navigation UI cleanup' not in history:
    history += note

app_path.write_text(app,encoding='utf-8')
css_path.write_text(css,encoding='utf-8')
content_path.write_text(content,encoding='utf-8')
history_path.write_text(history,encoding='utf-8')

subprocess.run(['node','--check','app.js'],check=True)
subprocess.run(['node','-e',"global.window={};require('./data/content.js');if(window.PATIENT_CARE_CONTENT.meta.contentVersion!=='v047')process.exit(1)"],check=True)
json.loads((root/'data/schema.json').read_text(encoding='utf-8'))
assert "const KEY = 'pc_pilot_v022_profile'" in app
assert 'p.version=22' in app
assert 'renderBackControl' in app and 'backToHeal' in content
assert 'h1[tabindex="-1"]:focus' in css
subprocess.run(['git','diff','--check'],check=True)

# Remove temporary helpers, then commit the validated change.
for p in [root/'.github/fix-navigation-ui.py',root/'.github/workflows/fix-navigation-ui.yml']:
    if p.exists(): p.unlink()
subprocess.run(['git','config','user.name','github-actions[bot]'],check=True)
subprocess.run(['git','config','user.email','41898282+github-actions[bot]@users.noreply.github.com'],check=True)
subprocess.run(['git','add','-A'],check=True)
subprocess.run(['git','commit','-m','Polish back navigation and heading focus'],check=True)
subprocess.run(['git','push','origin','main'],check=True)
