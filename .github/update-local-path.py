# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path

path = Path('PATIENT_CARE_RULES.md')
text = path.read_text(encoding='utf-8')
needle = "## 13. Repository workflow\n\n"
insert = "## 13. Repository workflow\n\nThe canonical local Windows repository path is:\n\n`C:\\Projects\\PatientCare\\patient-care-pilot`\n\nUse this path in local preview scripts, refresh scripts, and repository instructions unless the user explicitly provides a newer location. Do not use the previous OneDrive-based path.\n\n"
if needle not in text:
    raise SystemExit('Repository workflow section not found')
if '`C:\\Projects\\PatientCare\\patient-care-pilot`' not in text:
    text = text.replace(needle, insert, 1)
path.write_text(text, encoding='utf-8')
