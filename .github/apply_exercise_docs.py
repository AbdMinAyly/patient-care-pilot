# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
rules=Path('PATIENT_CARE_RULES.md')
history=Path('docs/HISTORY.md')
r=rules.read_text(encoding='utf-8')
r=r.replace('Placeholders must remain excluded from ordinary lists, search, guides, and relationship cards. Exercise remains unavailable until researched content replaces its placeholder state.','Placeholders must remain excluded from ordinary lists, search, guides, and relationship cards. The HEAL Exercise Builder is now an approved general adult activity-planning tool; any separate placeholder clinical entity remains excluded until researched content replaces it.')
if '## 15. Narrow HEAL Exercise Builder exception' not in r:
    r += '\n\n## 15. Narrow HEAL Exercise Builder exception\n\nThe user has explicitly approved a general adult exercise-planning builder in HEAL. It may organize preferred activities, available days, gradual aerobic targets, strength days, balance reminders for older adults, and safety prompts. It must not diagnose, provide rehabilitation prescriptions, clear a user for vigorous exercise, or replace individualized medical assessment.\n'
rules.write_text(r,encoding='utf-8')
h=history.read_text(encoding='utf-8')
if '### HEAL Exercise Builder' not in h:
    h += '\n\n### HEAL Exercise Builder\n\n- Replaced the disabled Exercise builder card with a working adult weekly activity planner.\n- Added starting-level, preferred-activity, available-day, strength-day, gradual-target, print, and local-save controls.\n- Added safety wording, reduced-density mobile layouts, and no diagnosis, rehabilitation prescription, or external runtime dependency.\n- Based general targets on current WHO and CDC adult physical-activity guidance: at least 150 minutes of moderate activity weekly and muscle strengthening on 2 days, with gradual progression and balance activity for older adults.\n'
history.write_text(h,encoding='utf-8')
