from pathlib import Path

p = Path('/tmp/build_v046.py')
s = p.read_text()
s = s.replace('''      "scope": "Presentation and navigation only",
      "implementationRecord": "docs/product/V045_CLARITY_PASS.md",
      "note": "Retains all researched content while using progressive disclosure, visible safety wording, compact Action Paths, and corrected Plan routing. No clinical approval, source registration, QR, or scheduling change is introduced."''','''      "scope": "Presentation and navigation",
      "note": "Progressive disclosure retains complete researched content, keeps safety and dosing-lock information visible, hides placeholders from normal discovery, and corrects Plan routing and task counts. No new sources, clinical claims, QR codes, or scheduling features are introduced."''',1)
s = s.replace("anchor='''      \"clearPlan\": \"Clear Your Plan\"", "anchor='''      \"downloadJsonBackup\": \"Download JSON backup\"",1)
s = s.replace("shine_focus='''      \"clearPlan\": \"Clear Your Plan\"", "shine_focus='''      \"downloadJsonBackup\": \"Download JSON backup\"",1)
s = s.replace('''        <div class="plan-subsection"><h3>${esc(clarity.nextActionsEyebrow)}</h3>${renderPlanTaskRows(planTasksForCore(p,'daily'))}</div>
      </div>''','''      </div>
      <div class="plan-subsection"><h3>Saved next-step tasks</h3>${renderPlanTaskRows(planTasksForCore(p,'daily'))}</div>''',2)
s += r'''

# v046 post-build corrections aligned to the verified v045 source.
app_path = root / 'app.js'
app = app_path.read_text()

def replace_once(text, old, new, label):
    if old not in text:
        raise SystemExit(f'v046 post-build anchor missing: {label}')
    return text.replace(old, new, 1)

app = replace_once(
    app,
    "    const explicitFocus=Array.isArray(parsed.shineFocus)?parsed.shineFocus:[];\n    const shineFocus=normalizeShineFocus(explicitFocus.length?explicitFocus:legacyShine);",
    "    const hasExplicitFocus=Array.isArray(parsed.shineFocus);\n    const explicitFocus=hasExplicitFocus?parsed.shineFocus:[];\n    const shineFocus=normalizeShineFocus(hasExplicitFocus?explicitFocus:legacyShine);",
    'explicit empty focus migration',
)
app = replace_once(
    app,
    "${esc(DATA.ui.clarity.backToMode.replace('{mode}',area.toUpperCase()))}",
    "${esc((DATA.ui.clarity.backToSectionPrefix||'← Back to')+' '+area.toUpperCase())}",
    'mode back label',
)
app = replace_once(
    app,
    "function dietFocusChip(option){",
    "const dietState={focus:[],meal:'all',match:'all',query:''};\n\nfunction dietFocusChip(option){",
    'Diet Builder state',
)
app = app.replace(
    "history.replaceState(null,'','#/shine');",
    "history.replaceState(null,'',location.pathname+location.search+'#/shine');",
    1,
)
app = app.replace(
    "history.replaceState(null,'',`#/${area}`);",
    "history.replaceState(null,'',location.pathname+location.search+`#/${area}`);",
    1,
)
app = replace_once(
    app,
    '<button class="btn ghost" data-download="1">${esc(clarity.downloadJsonBackup)}</button></details>',
    '<button class="btn ghost" data-download="1">${esc(clarity.downloadJsonBackup)}</button><button class="btn ghost danger" data-clear="1">${esc(shineFocusLabels().clearPlan)}</button></details>',
    'Plan clear action',
)
app = app.replace("anchor.download='patient-care-v045-your-plan.json';", "anchor.download='patient-care-v046-your-plan.json';", 1)
app = replace_once(
    app,
    "window.addEventListener('hashchange'",
    "let printDisclosureDetails=[];\nwindow.addEventListener('beforeprint',()=>{\n  printDisclosureDetails=[...document.querySelectorAll('details:not([open])')];\n  printDisclosureDetails.forEach(detail=>{detail.open=true});\n});\nwindow.addEventListener('afterprint',()=>{\n  printDisclosureDetails.forEach(detail=>{detail.open=false});\n  printDisclosureDetails=[];\n});\nwindow.addEventListener('hashchange'",
    'print disclosure listeners',
)
app_path.write_text(app)

data_path = root / 'data/content.js'
data = data_path.read_text()
data = replace_once(
    data,
    '      "clearPlanPrompt": "Clear saved Plan items? Your SHINE focus will remain selected.",',
    '      "clearPlanPrompt": "Clear saved Plan items? Your SHINE focus will remain selected.",\n      "clearPlan": "Clear saved Plan items",',
    'clear Plan label',
)
data_path.write_text(data)

# Normalize generated text files to one terminal newline.
for rel in [
    'PATIENT_CARE_CORE.md',
    'docs/PATIENT_CARE_CORE.md',
    'README.md',
    'VERSION.txt',
    'app.js',
    'data/content.js',
    'data/schema.json',
    'index.html',
    'styles.css',
]:
    target = root / rel
    target.write_text(target.read_text().rstrip() + '\n')
'''
p.write_text(s)
