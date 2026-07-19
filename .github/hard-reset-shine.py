# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
import re

path=Path('app.js')
text=path.read_text(encoding='utf-8')

pattern=r"function clearAllSavedData\(\)\{.*?\n\}"
replacement="""function clearAllSavedData(){
  closePriorityWizard();
  closeDietWizard();
  document.getElementById('shine-focus-modal')?.remove();
  document.getElementById('sleep-wizard-modal')?.remove();
  document.body.classList.remove('wizard-open','focus-modal-open');

  Object.keys(localStorage).filter(key=>key===KEY||key.startsWith('pc_pilot_')).forEach(key=>localStorage.removeItem(key));

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
  sleepWizardState=null;
  sleepWizardStep=0;

  const leftovers=Object.keys(localStorage).filter(key=>key===KEY||key.startsWith('pc_pilot_'));
  if(leftovers.length){
    alert('Reset could not remove all Patient Care data. Please close and reopen the app, then try again.');
    return;
  }

  history.replaceState(null,'',location.pathname+location.search+'#/shine');
  location.reload();
}"""
text,count=re.subn(pattern,replacement,text,count=1,flags=re.S)
if count!=1:
    raise SystemExit('clearAllSavedData replacement failed')

# Force SHINE to depend only on explicit completion.
text=text.replace("if(p.guided.shineCompleted!==true){", "if(profile().guided.shineCompleted!==true){", 1)

path.write_text(text,encoding='utf-8')
