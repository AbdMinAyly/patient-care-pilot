# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
rules=Path('PATIENT_CARE_RULES.md')
history=Path('docs/HISTORY.md')
r=rules.read_text(encoding='utf-8')
if '## 16. Narrow Physician Mode exception — iron calculators' not in r:
    r += '\n\n## 16. Narrow Physician Mode exception — iron calculators\n\nThe user has explicitly approved clinician-only oral and IV iron calculators and patient schedules. The IV tool may automatically calculate total iron requirement with the Ganzoni formula when iron-deficiency anemia is selected. When anemia is not selected, ferritin 100 µg/L may be displayed as a monitoring goal, but the tool must not convert ferritin change into an iron dose; the clinician must enter the prescribed total elemental iron. Product strength, maximum administration dose, infusion schedule, contraindications, monitoring, and final plan require clinician confirmation. Existing dosing locks outside Physician Mode remain unchanged.\n'
rules.write_text(r,encoding='utf-8')
h=history.read_text(encoding='utf-8')
if '### Automatic IV iron requirement calculator' not in h:
    h += '\n\n### Automatic IV iron requirement calculator\n\n- Added separate IDA and non-anemic iron-deficiency branches to the IV iron tool.\n- IDA uses the clinician-confirmed Ganzoni inputs: weight, actual hemoglobin, target hemoglobin, and iron-store allowance.\n- The non-anemic branch displays ferritin 100 µg/L as a monitoring goal while requiring a clinician-entered total iron prescription.\n- Added elemental iron per ampoule or vial, rounded ampoule count, maximum-per-infusion enforcement, dated appointments, repeat-laboratory timing, and QR patient handoff.\n'
history.write_text(h,encoding='utf-8')
