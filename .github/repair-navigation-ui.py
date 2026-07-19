# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
import re, json, subprocess

root=Path('.')
app_path=root/'app.js'; css_path=root/'styles.css'; content_path=root/'data/content.js'; history_path=root/'docs/HISTORY.md'
app=app_path.read_text(encoding='utf-8')
css=css_path.read_text(encoding='utf-8')
content=content_path.read_text(encoding='utf-8')
history=history_path.read_text(encoding='utf-8')

# Replace only the navigation helper; reuse the existing detail-back class everywhere.
pattern=r"function renderDetailNavigation\(area,item\)\{[\s\S]*?\n\}\nfunction warningTeachingPoints"
replacement="""function renderDetailNavigation(area,item){
  const labels=DATA.ui.clarity||{};
  if(area==='shine')return `<a class=\"detail-back\" href=\"#/shine\">${esc(labels.backToShine||'Back to SHINE')}</a>`;
  if(area==='heal')return `<a class=\"detail-back heal-back\" href=\"#/heal\">${esc(labels.backToHeal||'Back to HEAL home')}</a>`;
  const sectionId=item?.sectionId||'';
  const sectionTitle=item?.section||area.toUpperCase();
  const prefix=labels.backToSectionPrefix||'Back to';
  return `<a class=\"detail-back ${esc(area)}-back\" href=\"#/${area}/${esc(sectionId)}\">${esc(prefix+' '+sectionTitle)}</a>`;
}
function warningTeachingPoints"""
app,n=re.subn(pattern,replacement,app,count=1)
if n!=1:
    raise SystemExit('Could not replace renderDetailNavigation')

# Remove arrow glyphs from data labels because the UI supplies a styled icon.
content=content.replace('''      "backToShine": "← Back to SHINE",
      "backToSectionPrefix": "← Back to",''','''      "backToShine": "Back to SHINE",
      "backToHeal": "Back to HEAL home",
      "backToDr": "Back to DR home",
      "backToSectionPrefix": "Back to",''',1)

css_block='''

/* Shared back-navigation UI and programmatic heading focus cleanup */
h1[tabindex="-1"]:focus,h2[tabindex="-1"]:focus{outline:none}
.detail-back{display:inline-flex;align-items:center;gap:9px;width:max-content;max-width:100%;min-height:44px;margin:0 0 14px;padding:7px 14px 7px 8px;border:1px solid #dfe3e9;border-radius:999px;background:#fff;color:#344054;text-decoration:none;font-weight:900;box-shadow:0 5px 14px rgba(17,24,39,.055);transition:transform .16s ease,border-color .16s ease,background .16s ease}
.detail-back:before{content:'‹';display:grid;place-items:center;flex:none;width:30px;height:30px;padding-bottom:3px;border-radius:999px;background:#eef1f5;color:#344054;font-size:1.7rem;line-height:1;font-weight:650}
.detail-back:hover,.detail-back:focus-visible{border-color:#b8c0cc;background:#f8fafc;transform:translateX(-2px)}
.detail-back:focus-visible{outline:3px solid #344054;outline-offset:3px}
.detail-back.heal-back:hover,.detail-back.heal-back:focus-visible{border-color:rgba(188,133,0,.38);background:var(--heal-soft);color:#765000}
.detail-back.heal-back:hover:before,.detail-back.heal-back:focus-visible:before{background:#fff;color:#765000}
.detail-back.dr-back:hover,.detail-back.dr-back:focus-visible{border-color:rgba(23,103,194,.3);background:var(--dr-soft);color:var(--dr)}
.detail-back.dr-back:hover:before,.detail-back.dr-back:focus-visible:before{background:#fff;color:var(--dr)}
@media(prefers-reduced-motion:reduce){.detail-back{transition:none}.detail-back:hover{transform:none}}
@media(max-width:430px){.detail-back{margin-bottom:12px;padding-right:12px;font-size:.9rem}}
@media print{.detail-back{display:none!important}}
'''
if '/* Shared back-navigation UI and programmatic heading focus cleanup */' not in css:
    css += css_block

note='''
### Navigation UI cleanup

- Removed the unintended visible outline around programmatically focused page headings while retaining route-change focus for accessibility.
- Reused and restyled the existing `detail-back` pattern instead of adding another navigation component.
- HEAL detail pages now return directly to the main HEAL page.
- No new permanent files, routes, dependencies, clinical content, or saved-data fields were added.
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
assert "const KEY = 'pc_pilot_v022_profile'" in app and 'p.version=22' in app
assert 'href=\"#/heal\"' in app and 'heal-back' in app
assert 'h1[tabindex="-1"]:focus' in css
subprocess.run(['git','diff','--check'],check=True)

for rel in [
 '.github/fix-navigation-ui.py','.github/workflows/fix-navigation-ui.yml',
 '.github/repair-navigation-ui.py','.github/workflows/repair-navigation-ui.yml']:
    p=root/rel
    if p.exists(): p.unlink()
subprocess.run(['git','config','user.name','github-actions[bot]'],check=True)
subprocess.run(['git','config','user.email','41898282+github-actions[bot]@users.noreply.github.com'],check=True)
subprocess.run(['git','add','-A'],check=True)
subprocess.run(['git','commit','-m','Fix heading focus and back navigation'],check=True)
subprocess.run(['git','push','origin','main'],check=True)
