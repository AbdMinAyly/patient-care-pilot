# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
p=Path('data/content.js')
s=p.read_text(encoding='utf-8')
old='''        "chooseIntent": "What would you like help finding?",
        "back": "Back to Find",
        "selectedIntent": "Selected purpose",
        "foodIdea": "Food idea",
        "noOptions": "No existing destination is available for this choice."'''
new='''        "chooseIntent": "What would you like help finding?",
        "back": "Back to Find",
        "backTo": "Back to {page}",
        "choosePrompt": "Choose one option above to see existing Patient Care topics, food ideas, and actions.",
        "readLabel": "Read",
        "actionLabel": "Plan action",
        "openTopicTemplate": "Open {topic}",
        "selectedIntent": "Selected purpose",
        "foodIdea": "Food idea",
        "noOptions": "No existing destination is available for this choice."'''
assert old in s
s=s.replace(old,new)
p.write_text(s,encoding='utf-8')
print('labels fixed')
