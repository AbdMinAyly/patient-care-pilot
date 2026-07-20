# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path

path=Path('styles.css')
css=path.read_text(encoding='utf-8')
marker='/* SHINE intro alignment refinement */'
block=r'''

/* SHINE intro alignment refinement */
.shine-meaning{top:26%}
.meaning-right{top:29%}
.shine-welcome-skip{
  position:absolute;
  z-index:8;
  top:max(14px,env(safe-area-inset-top));
  right:max(16px,env(safe-area-inset-right));
  left:auto;
  bottom:auto;
  min-height:44px;
  padding:8px 14px;
  transform:none;
  border:1px solid rgba(255,255,255,.58);
  border-radius:999px;
  background:rgba(255,247,241,.72);
  box-shadow:0 7px 18px rgba(98,18,38,.10);
  backdrop-filter:blur(8px);
}
@media(max-width:430px){
  .shine-meaning{top:25%;width:82px}
  .meaning-right{top:28%}
  .shine-welcome-skip{top:max(10px,env(safe-area-inset-top));right:max(10px,env(safe-area-inset-right));padding:7px 12px}
}
@media(max-height:700px){
  .shine-meaning{top:23%}
  .meaning-right{top:26%}
  .shine-welcome-skip{top:max(8px,env(safe-area-inset-top));right:max(10px,env(safe-area-inset-right));bottom:auto}
}
'''
if marker not in css:
    css += block
path.write_text(css,encoding='utf-8')
