# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path

rules_path=Path('PATIENT_CARE_RULES.md')
history_path=Path('docs/HISTORY.md')
rules=rules_path.read_text(encoding='utf-8')
history=history_path.read_text(encoding='utf-8')

old='''## 14. Narrow Physician Mode exception — vitamin D schedules\n\nThe user has explicitly approved one clinician-only dosing exception: Physician Mode may display Endocrine Society 2024 guidance context and may generate the dated vitamin D schedule defined by the approved local clinic pathways below 20 ng/mL and 20–30 ng/mL. The local pathway durations may be adjusted by the physician before confirmation. The clinician must confirm the protocol and safety review before export. The patient link must contain no identifying information. This exception does not unlock or alter any existing medication or supplement dosing field, does not authorize autonomous prescribing, and does not apply to any other treatment or schedule.'''
new=old+'''\n\n## 15. Narrow Physician Mode exception — oral and IV iron schedules\n\nThe user has explicitly approved two additional clinician-only tools: an oral iron elemental-dose calculator and scheduler, and an IV iron infusion calculator and scheduler. The oral tool may calculate elemental iron from clinician-confirmed product-label values and generate daily or every-two-days schedules. The IV tool may divide a clinician-entered prescribed total iron amount into dated infusions only after the clinician enters and confirms the exact product, dose per infusion, and maximum per administration. These tools must not choose an indication, total dose, product, administration limit, infusion rate, or monitoring plan autonomously. Patient links must contain no identifying information. Existing dosing locks remain unchanged outside Physician Mode.'''
if old not in rules:
    raise SystemExit('rules marker missing')
rules=rules.replace(old,new)
rules_path.write_text(rules,encoding='utf-8')

note='''\n\n### Physician Mode — Oral and IV Iron Journeys\n\n- Added separate Oral Iron and IV Iron tools beside the vitamin D tool.\n- Oral Iron supports ferrous sulfate, ferrous fumarate, ferrous gluconate, liposomal iron, and custom products, with clinician-confirmed product strength and elemental iron per unit.\n- Oral schedules support once-daily, every-two-days, and every-three-days intervals, exact dose dates, repeat-lab timing, QR handoff, and local completion tracking.\n- IV Iron supports common formulation names and a custom option while requiring clinician-entered prescribed total iron, dose per infusion, confirmed maximum per administration, spacing, and repeat-lab date.\n- The IV calculator blocks export when the planned infusion dose exceeds the clinician-entered maximum.\n- Both patient links remain non-identifying, static, offline, and backend-free. Existing medication and supplement dosing locks remain unchanged outside Physician Mode.\n'''
if '### Physician Mode — Oral and IV Iron Journeys' not in history:
    history += note
history_path.write_text(history,encoding='utf-8')
