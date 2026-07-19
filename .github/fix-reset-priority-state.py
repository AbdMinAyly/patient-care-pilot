# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
import re

path=Path('app.js')
text=path.read_text(encoding='utf-8')

render_pattern=r"function renderShine\(\)\{.*?\n\}"
render_replacement="""function renderShine(){
  setActive('shine');
  const p=profile();
  const c=guidedConfig().shine;
  if(p.guided.shineCompleted!==true){
    app.innerHTML=renderSingleStart('shine',c.title,c.intro,c.start,'data-open-priority=\"1\"');
    return;
  }
  app.innerHTML=`<div class=\"screen\">${hero('shine','SHINE',DATA.ui.modeDescriptions.shine)}${renderPriorityLauncher()}<section class=\"grid shine-focus-grid\">${DATA.shine.map(renderGuidedShineCard).join('')}</section></div>`;
}"""
text,count=re.subn(render_pattern,render_replacement,text,count=1,flags=re.S)
if count!=1:
    raise SystemExit('renderShine replacement failed')

reset_pattern=r"function clearAllSavedData\(\)\{.*?\n\}"
reset_replacement="""function clearAllSavedData(){
  localStorage.removeItem(KEY);
  closePriorityWizard();
  closeDietWizard();
  document.getElementById('shine-focus-modal')?.remove();
  document.getElementById('sleep-wizard-modal')?.remove();
  document.body.classList.remove('wizard-open','focus-modal-open');
  shinePriorityStep=0;
  shinePriorityAnswers={};
  pendingShineFocusId=null;
  dietWizardStep=0;
  dietWizardAnswers={conditions:[],goal:'',preference:''};
  dietState.focus=[];
  dietState.meal='all';
  dietState.match='all';
  dietState.query='';
  findShowAll=false;
  findQuery='';
  findScrollY=0;
  ironGuideIntent=null;
  pendingDietFoodId=null;
  history.replaceState(null,'',location.pathname+location.search+'#/shine');
  renderShine();
}"""
text,count=re.subn(reset_pattern,reset_replacement,text,count=1,flags=re.S)
if count!=1:
    raise SystemExit('clearAllSavedData replacement failed')

path.write_text(text,encoding='utf-8')
