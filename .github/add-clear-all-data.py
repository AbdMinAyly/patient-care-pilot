# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
import re

app_path=Path('app.js')
css_path=Path('styles.css')
history_path=Path('docs/HISTORY.md')
app=app_path.read_text(encoding='utf-8')
css=css_path.read_text(encoding='utf-8')
history=history_path.read_text(encoding='utf-8')

# Replace the existing limited Clear Plan button with one full-reset control.
app,new_count=re.subn(
    r'<button([^>]*?)data-clear="1"([^>]*)>.*?</button>',
    r'<button\1data-clear-all="1"\2>Clear All Data</button>',
    app,
    count=1,
    flags=re.S,
)
if new_count!=1:
    raise SystemExit('Could not locate the existing Clear Plan button')

# Add one full local reset function near the existing clear-plan helper.
anchor='function clearPlanItems(){'
helper="""function clearAllSavedData(){
  localStorage.removeItem(KEY);
  closePriorityWizard();
  closeDietWizard();
  document.getElementById('shine-focus-modal')?.remove();
  document.getElementById('sleep-wizard-modal')?.remove();
  document.body.classList.remove('wizard-open','focus-modal-open');
  history.replaceState(null,'',location.pathname+location.search+'#/shine');
  location.reload();
}

"""
if helper not in app:
    if anchor not in app:
        raise SystemExit('Could not locate clearPlanItems helper')
    app=app.replace(anchor,helper+anchor,1)

# Replace the old limited clear-plan click action while keeping all other handlers intact.
old="""  if(e.target.closest('[data-clear]')){
    if(confirm(shineFocusLabels().clearPlanPrompt))clearPlanItems();
  }
"""
new="""  if(e.target.closest('[data-clear-all]')){
    const confirmed=confirm('Clear all saved information and return the app to its first-use state? This cannot be undone.');
    if(confirmed)clearAllSavedData();
    return;
  }
"""
if old not in app:
    raise SystemExit('Could not locate existing clear handler')
app=app.replace(old,new,1)

style="""

/* Full local-data reset */
[data-clear-all]{
  border-color:#b42318!important;
  background:#fff5f4!important;
  color:#b42318!important;
}
[data-clear-all]:hover{background:#fee4e2!important}
[data-clear-all]:focus-visible{outline:3px solid rgba(180,35,24,.28);outline-offset:3px}
"""
if '/* Full local-data reset */' not in css:
    css+=style

note="""

### Full local-data reset

- Replaced the limited Clear Plan action with one Clear All Data control in Your Plan.
- The reset removes the entire `pc_pilot_v022_profile` record, including wizard completion, guided profile answers, priorities, Diet setup, DR confirmations, saved topics, tasks, questions, notes, and food selections.
- A destructive confirmation is required before deletion.
- After confirmation, the app returns to the initial SHINE priority screen.
"""
if '### Full local-data reset' not in history:
    history+=note

app_path.write_text(app,encoding='utf-8')
css_path.write_text(css,encoding='utf-8')
history_path.write_text(history,encoding='utf-8')
