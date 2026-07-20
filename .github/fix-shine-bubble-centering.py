# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
p=Path('styles.css')
s=p.read_text(encoding='utf-8')
marker='/* SHINE acronym columns true vertical centering */'
if marker not in s:
    s += '''\n\n/* SHINE acronym columns true vertical centering */\n.shine-meaning{top:50%;transform:translateY(-50%)}\n.meaning-right{top:50%}\n@media(max-width:430px){.shine-meaning,.meaning-right{top:50%}}\n@media(max-height:700px){.shine-meaning,.meaning-right{top:50%}}\n'''
p.write_text(s,encoding='utf-8')
