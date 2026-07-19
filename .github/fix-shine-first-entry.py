# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path

app_path=Path('app.js')
history_path=Path('docs/HISTORY.md')
app=app_path.read_text(encoding='utf-8')
history=history_path.read_text(encoding='utf-8')

app=app.replace("guided:{shineAnswers:{},routineChoices:[],medicalProfile:[],dietSetup:{completed:false,answers:{}},pendingMedical:[],confirmedMedical:[]}","guided:{shineAnswers:{},shineCompleted:false,routineChoices:[],medicalProfile:[],dietSetup:{completed:false,answers:{}},pendingMedical:[],confirmedMedical:[]}")

app=app.replace("guided:{...base.guided,...(parsed.guided||{}),shineAnswers:{...(parsed.guided?.shineAnswers||{})},routineChoices:Array.isArray(parsed.guided?.routineChoices)?parsed.guided.routineChoices:[],medicalProfile:Array.isArray(parsed.guided?.medicalProfile)?parsed.guided.medicalProfile:[],dietSetup:{...base.guided.dietSetup,...(parsed.guided?.dietSetup||{}),answers:{...(parsed.guided?.dietSetup?.answers||{})}},pendingMedical:Array.isArray(parsed.guided?.pendingMedical)?parsed.guided.pendingMedical:[],confirmedMedical:Array.isArray(parsed.guided?.confirmedMedical)?parsed.guided.confirmedMedical:[]}","guided:{...base.guided,...(parsed.guided||{}),shineAnswers:{...(parsed.guided?.shineAnswers||{})},shineCompleted:parsed.guided?.shineCompleted===true,routineChoices:Array.isArray(parsed.guided?.routineChoices)?parsed.guided.routineChoices:[],medicalProfile:Array.isArray(parsed.guided?.medicalProfile)?parsed.guided.medicalProfile:[],dietSetup:{...base.guided.dietSetup,...(parsed.guided?.dietSetup||{}),answers:{...(parsed.guided?.dietSetup?.answers||{})}},pendingMedical:Array.isArray(parsed.guided?.pendingMedical)?parsed.guided.pendingMedical:[],confirmedMedical:Array.isArray(parsed.guided?.confirmedMedical)?parsed.guided.confirmedMedical:[]}")

app=app.replace("p.guided.shineAnswers={...shinePriorityAnswers};saveProfile(p);closePriorityWizard();renderShine();return","p.guided.shineAnswers={...shinePriorityAnswers};p.guided.shineCompleted=true;saveProfile(p);closePriorityWizard();renderShine();return")

app=app.replace("if(!selectedShineFocus().length){app.innerHTML=renderSingleStart('shine',c.title,c.intro,c.start,'data-open-priority=\"1\"');return;}","if(profile().guided.shineCompleted!==true){app.innerHTML=renderSingleStart('shine',c.title,c.intro,c.start,'data-open-priority=\"1\"');return;}")

note='''\n\n### SHINE first-entry gate\n\n- SHINE now remains on a single Choose Your Priority action until the new priority wizard is explicitly completed.\n- Legacy SHINE focus selections no longer bypass the progressive-reveal entry screen.\n'''
if '### SHINE first-entry gate' not in history:
    history += note

app_path.write_text(app,encoding='utf-8')
history_path.write_text(history,encoding='utf-8')
