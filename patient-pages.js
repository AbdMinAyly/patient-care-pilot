// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';

const LANGUAGE_KEY='pc_patient_language';
const VITD_ROUTE='#/patient/vitamin-d/';
const ORAL_ROUTE='#/patient/iron-oral/';
const IV_ROUTE='#/patient/iron-iv/';
const VITD_PROGRESS_PREFIX='pc_vitd_progress_';
const IRON_PROGRESS_PREFIX='pc_iron_progress_';
const IRON_DATE_PREFIX='pc_iron_dates_';

const MAINTENANCE={
  en:{
    '600-daily':'600 IU once a day','800-daily':'800 IU once a day','1000-daily':'1,000 IU once a day',
    '1500-daily':'1,500 IU once a day','2000-daily':'2,000 IU once a day','50000-monthly':'50,000 IU once a month',
    custom:'A plan chosen by your clinic'
  },
  ar:{
    '600-daily':'600 وحدة دولية مرة يوميًا','800-daily':'800 وحدة دولية مرة يوميًا','1000-daily':'1,000 وحدة دولية مرة يوميًا',
    '1500-daily':'1,500 وحدة دولية مرة يوميًا','2000-daily':'2,000 وحدة دولية مرة يوميًا','50000-monthly':'50,000 وحدة دولية مرة شهريًا',
    custom:'خطة تحددها لك العيادة'
  }
};

const FORMULATIONS_AR={
  'Ferrous sulfate':'كبريتات الحديد','Ferrous fumarate':'فومارات الحديد','Ferrous gluconate':'غلوكونات الحديد',
  'Liposomal iron':'حديد ليبوسومال','Custom oral iron product':'مكمل الحديد',
  'Ferric carboxymaltose':'كربوكسي مالتوز الحديد','Ferric derisomaltose':'ديريزومالتوز الحديد',
  'Ferumoxytol':'فيروموكسيتول','Iron sucrose':'سكروز الحديد','Custom IV iron formulation':'حديد وريدي حسب خطة العيادة'
};

const EXPECTATIONS={
  en:[
    {
      id:'during',tab:'During',title:'During the infusion',
      intro:'Many people feel nothing unusual. The team will watch you while the iron is being given.',
      expected:['A brief metallic taste, warmth, or flushing','Mild nausea, headache, or dizziness','Feeling light-headed for a short time'],
      actionTitle:'Tell the nurse straight away if you have',
      action:['Burning, pain, swelling, or a skin-colour change around the needle','Tightness in your chest or throat, wheezing, or trouble breathing','Swelling of your face, lips, or tongue, widespread hives, severe dizziness, or fainting'],
      note:'Do not wait. The team can slow or stop the infusion and check you.'
    },
    {
      id:'after',tab:'Right after',title:'Right after the infusion',
      intro:'You will usually stay for at least 30 minutes, or until the team is happy that you are well.',
      expected:['A mild headache, nausea, flushing, dizziness, or tiredness may last a short time','The needle area may feel tender or look bruised','Follow the team’s advice before leaving, and do not drive if you feel unwell'],
      actionTitle:'Get urgent help after leaving if you have',
      action:['Trouble breathing, wheezing, or chest tightness that is getting worse','Swelling of your mouth, tongue, face, or throat','Fainting, collapse, severe chest pain, or a rapidly worsening reaction'],
      note:'Serious reactions are uncommon, but they need immediate help.'
    },
    {
      id:'days',tab:'Next days',title:'Over the next few days',
      intro:'Some symptoms can begin several hours later or up to about four days after treatment.',
      expected:['Muscle or joint aches, headache, chills, or a flu-like feeling','Temporary tiredness or feeling generally unwell','Mild symptoms often settle within two to four days'],
      actionTitle:'Contact the clinic if',
      action:['Symptoms are severe, getting worse, or not settling','Pain, swelling, or brown staining appears around the needle area','You are worried about a symptom or are not sure what to do'],
      note:'Only use symptom relief that your clinician has said is safe for you.'
    }
  ],
  ar:[
    {
      id:'during',tab:'أثناء الجلسة',title:'أثناء جلسة الحديد',
      intro:'قد لا تشعر بشيء غير معتاد. سيبقى الفريق معك ويراقبك أثناء إعطاء الحديد.',
      expected:['طعم معدني مؤقت في الفم أو شعور بالدفء أو احمرار الوجه','غثيان خفيف أو صداع أو دوخة','شعور بخفة في الرأس لفترة قصيرة'],
      actionTitle:'أخبر الممرضة فورًا إذا شعرت بـ',
      action:['حرقان أو ألم أو تورم أو تغيّر لون الجلد حول الإبرة','ضيق في الصدر أو الحلق، صفير، أو صعوبة في التنفس','تورم الوجه أو الشفتين أو اللسان، طفح منتشر، دوخة شديدة أو إغماء'],
      note:'لا تنتظر. يمكن للفريق إبطاء الجلسة أو إيقافها وفحصك.'
    },
    {
      id:'after',tab:'بعدها مباشرة',title:'بعد الجلسة مباشرة',
      intro:'عادة ستبقى للمراقبة لمدة 30 دقيقة على الأقل، أو حتى يتأكد الفريق أنك بخير.',
      expected:['قد يستمر صداع خفيف أو غثيان أو احمرار أو دوخة أو تعب لفترة قصيرة','قد يكون مكان الإبرة حساسًا أو تظهر كدمة بسيطة','اتبع تعليمات الفريق قبل المغادرة، ولا تقد السيارة إذا كنت لا تشعر بأنك بخير'],
      actionTitle:'اطلب مساعدة عاجلة بعد المغادرة إذا حدث',
      action:['صعوبة في التنفس أو صفير أو ضيق يزداد في الصدر','تورم الفم أو اللسان أو الوجه أو الحلق','إغماء أو انهيار أو ألم شديد في الصدر أو تدهور سريع'],
      note:'التفاعلات الشديدة غير شائعة، لكنها تحتاج إلى مساعدة فورية.'
    },
    {
      id:'days',tab:'الأيام التالية',title:'خلال الأيام التالية',
      intro:'قد تبدأ بعض الأعراض بعد عدة ساعات وحتى نحو أربعة أيام بعد الجلسة.',
      expected:['ألم في العضلات أو المفاصل، صداع، قشعريرة، أو شعور يشبه الإنفلونزا','تعب مؤقت أو شعور عام بعدم الراحة','غالبًا تتحسن الأعراض الخفيفة خلال يومين إلى أربعة أيام'],
      actionTitle:'اتصل بالعيادة إذا',
      action:['كانت الأعراض شديدة أو تزداد أو لا تتحسن','ظهر ألم أو تورم أو لون بني حول مكان الإبرة','كنت قلقًا من عرض أو غير متأكد مما يجب فعله'],
      note:'استخدم فقط ما سمح لك به الطبيب أو الصيدلي لتخفيف الأعراض.'
    }
  ]
};

let expectationTab=0;
let expectationReturnFocus=null;

function esc(value){return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}
function encode(value){return btoa(unescape(encodeURIComponent(JSON.stringify(value)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function decode(value){try{const normalized=String(value).replace(/-/g,'+').replace(/_/g,'/');return JSON.parse(decodeURIComponent(escape(atob(normalized+'==='.slice((normalized.length+3)%4)))))}catch(error){return null}}
function hash(value){let result=2166136261;for(let i=0;i<value.length;i++){result^=value.charCodeAt(i);result=Math.imul(result,16777619)}return (result>>>0).toString(36)}
function date(value){return new Date(String(value)+'T12:00:00')}
function iso(value){return value.toISOString().slice(0,10)}
function addDays(value,days){const result=date(value);result.setDate(result.getDate()+days);return iso(result)}
function addMonths(value,months){const result=date(value),day=result.getDate();result.setDate(1);result.setMonth(result.getMonth()+months);const last=new Date(result.getFullYear(),result.getMonth()+1,0).getDate();result.setDate(Math.min(day,last));return iso(result)}
function daysBetween(first,second){return Math.round((date(second)-date(first))/86400000)}
function language(){return localStorage.getItem(LANGUAGE_KEY)==='ar'?'ar':'en'}
function setLanguage(value){localStorage.setItem(LANGUAGE_KEY,value==='ar'?'ar':'en')}
function isArabic(){return language()==='ar'}
function prettyDate(value){return new Intl.DateTimeFormat(isArabic()?'ar-EG-u-ca-gregory':'en-US',{year:'numeric',month:'long',day:'numeric'}).format(date(value))}
function number(value){return Number(value).toLocaleString(isArabic()?'ar-EG':'en-US',{maximumFractionDigits:2})}
function toast(message){if(typeof window.showToast==='function')window.showToast(message)}
function clinicIntro(clinic,enText,arText){if(!clinic)return isArabic()?arText:enText;return isArabic()?`${esc(clinic)} أعدّ لك هذا الجدول. ${arText}`:`${esc(clinic)} prepared this schedule. ${enText}`}
function languageButton(){return `<button type="button" class="patient-language-toggle" data-patient-language-toggle aria-label="${isArabic()?'Show in English':'عرض الصفحة بالعربية'}">${isArabic()?'English':'العربية'}</button>`}
function pageAttrs(){return `lang="${language()}" dir="${isArabic()?'rtl':'ltr'}"`}
function formulation(value){return isArabic()?(FORMULATIONS_AR[value]||value):value}
function copyText(){return isArabic()?'تم نسخ رابط الجدول':'Schedule link copied'}
function invalidPage(){return `<div class="screen patient-language-page" ${pageAttrs()}>${languageButton()}<section class="detail"><h1>${isArabic()?'هذا الرابط غير صالح':'This schedule link is invalid'}</h1><p>${isArabic()?'اطلب من العيادة إرسال رابط جديد.':'Ask the clinic to send a new link.'}</p></section></div>`}

function loadSet(prefix,code){try{return new Set(JSON.parse(localStorage.getItem(prefix+hash(code)))||[])}catch(error){return new Set()}}
function saveSet(prefix,code,set){localStorage.setItem(prefix+hash(code),JSON.stringify([...set]))}

function vitaminDDates(schedule){
  const weekly=Array.from({length:Number(schedule.w)||0},(_,index)=>addDays(schedule.s,index*7));
  const isReference=schedule.kind==='reference';
  const monthly=isReference?[]:Array.from({length:Number(schedule.m)||0},(_,index)=>addMonths(weekly.at(-1)||schedule.s,index+1));
  const fallback=monthly.length?addMonths(monthly.at(-1),1):weekly.length?addMonths(weekly.at(-1),1):'';
  return {weekly,monthly,repeat:schedule.r||fallback};
}
function vitaminDMaintenance(schedule){
  if(schedule.kind==='reference'&&Number(schedule.d)>0)return isArabic()?`${number(schedule.d)} وحدة دولية مرة يوميًا`:`${number(schedule.d)} IU once a day`;
  return (MAINTENANCE[language()][schedule.mt]||MAINTENANCE[language()].custom);
}
function vitaminDDoseCard(id,label,dateValue,amount,done,frequency){
  const checked=done.has(id);
  return `<label class="vitd-dose-card ${checked?'done':''}"><input type="checkbox" data-pp-vitd-dose="${id}" ${checked?'checked':''}><span class="vitd-dose-check">${checked?'✓':''}</span><span><small>${esc(label)}</small><strong>${prettyDate(dateValue)}</strong><em><bdi>${number(amount)}</bdi> ${isArabic()?'وحدة دولية':'IU'} · ${frequency}</em></span></label>`;
}
function renderVitaminD(code){
  closeExpectations(false);
  const schedule=decode(code),root=document.getElementById('app');
  document.body.classList.add('vitd-patient-active');document.body.classList.remove('physician-mode-active','iron-patient-active');
  if(!root)return;
  if(!schedule||Number(schedule.v)<1){root.innerHTML=invalidPage();return}
  const dates=vitaminDDates(schedule),done=loadSet(VITD_PROGRESS_PREFIX,code),weeklyAmount=Number(schedule.wd)||50000;
  const doses=[...dates.weekly.map((value,index)=>({id:'w'+index,date:value,label:isArabic()?`الجرعة الأسبوعية ${index+1}`:`Weekly dose ${index+1}`,amount:weeklyAmount,frequency:isArabic()?'مرة واحدة هذا الأسبوع':'once this week'})),...dates.monthly.map((value,index)=>({id:'m'+index,date:value,label:isArabic()?`الجرعة الشهرية ${index+1}`:`Monthly dose ${index+1}`,amount:50000,frequency:isArabic()?'مرة واحدة هذا الشهر':'once this month'}))];
  const completed=doses.filter(item=>done.has(item.id)).length,next=doses.find(item=>!done.has(item.id)),percent=Math.round(completed/Math.max(doses.length,1)*100);
  const weeklySection=dates.weekly.length?`<section class="vitd-phase"><div class="vitd-phase-head"><span>1</span><div><small>${isArabic()?'جرعات أسبوعية':'WEEKLY DOSES'}</small><h2>${isArabic()?'جرعة واحدة في كل تاريخ':'Take one dose on each date'}</h2></div></div><div class="vitd-dose-list">${doses.filter(item=>item.id.startsWith('w')).map(item=>vitaminDDoseCard(item.id,item.label,item.date,item.amount,done,item.frequency)).join('')}</div></section>`:'';
  const monthlySection=dates.monthly.length?`<section class="vitd-phase monthly"><div class="vitd-phase-head"><span>2</span><div><small>${isArabic()?'جرعات شهرية':'MONTHLY DOSES'}</small><h2>${isArabic()?'جرعة واحدة في كل تاريخ':'Take one dose on each date'}</h2></div></div><div class="vitd-dose-list">${doses.filter(item=>item.id.startsWith('m')).map(item=>vitaminDDoseCard(item.id,item.label,item.date,item.amount,done,item.frequency)).join('')}</div></section>`:'';
  const progressText=isArabic()?`${number(completed)} من ${number(doses.length)} جرعات تم أخذها`:`${completed} of ${doses.length} doses taken`;
  const nextCard=next?`<aside class="vitd-next"><small>${isArabic()?'الجرعة التالية':'NEXT DOSE'}</small><strong>${esc(next.label)}</strong><span>${prettyDate(next.date)} · <bdi>${number(next.amount)}</bdi> ${isArabic()?'وحدة دولية':'IU'}</span></aside>`:`<aside class="vitd-next complete"><strong>${isArabic()?'تم تسجيل كل الجرعات':'All planned doses are marked'}</strong><span>${isArabic()?'احتفظ بموعد فحص الدم أدناه.':'Keep the blood-test date below.'}</span></aside>`;
  const repeatSection=dates.repeat?`<section class="vitd-repeat"><span aria-hidden="true">🧪</span><div><small>${isArabic()?'فحص الدم التالي':'NEXT BLOOD TEST'}</small><h2>${prettyDate(dates.repeat)}</h2><p>${isArabic()?'اعمل فحص فيتامين د في هذا التاريخ ما لم تغيّر العيادة الموعد.':'Have your vitamin D blood test on this date unless the clinic changes it.'}</p></div></section>`:'';
  root.innerHTML=`<div class="vitd-patient-page patient-language-page" ${pageAttrs()}><header class="vitd-journey-hero">${languageButton()}<div class="vitd-sun" aria-hidden="true"><span style="--progress:${percent}%">☀</span></div><p class="eyebrow">${isArabic()?'خطة فيتامين د':'YOUR VITAMIN D PLAN'}</p><h1>${isArabic()?'جدول فيتامين د':'Your vitamin D schedule'}</h1><p>${clinicIntro(schedule.c,'Take only the dose shown on each date.','خذ الجرعة المكتوبة فقط في كل تاريخ.')}</p>${doses.length?`<div class="vitd-progress"><div><span style="width:${percent}%"></span></div><strong>${progressText}</strong></div>${nextCard}`:''}</header><main class="vitd-journey-main">${weeklySection}${monthlySection}${repeatSection}<section class="vitd-maintenance"><small>${isArabic()?'بعد فحص الدم':'AFTER THE BLOOD TEST'}</small><h2>${esc(vitaminDMaintenance(schedule))}</h2><p>${isArabic()?'لا تبدأ هذه الخطوة إلا بعد أن تؤكدها لك العيادة.':'Start this only after the clinic confirms it with you.'}</p></section><section class="vitd-save-card"><h2>${isArabic()?'احفظ الجدول':'Save your schedule'}</h2><div class="vitd-save-actions"><button class="btn dr" data-patient-share>${isArabic()?'مشاركة الرابط':'Share link'}</button><button class="btn ghost" data-vitd-calendar="1">${isArabic()?'إضافة المواعيد للتقويم':'Add dates to calendar'}</button><button class="btn ghost" data-vitd-image="1">${isArabic()?'حفظ كصورة':'Save as image'}</button><button class="btn ghost" data-patient-copy>${isArabic()?'نسخ الرابط':'Copy link'}</button></div><details><summary>${isArabic()?'إضافة إلى الشاشة الرئيسية':'Add to your Home Screen'}</summary><div class="vitd-home-help"><p><strong>${isArabic()?'آيفون:':'iPhone:'}</strong> ${isArabic()?'افتح الرابط في Safari، اضغط مشاركة، ثم اختر إضافة إلى الشاشة الرئيسية.':'Open in Safari, tap Share, then Add to Home Screen.'}</p><p><strong>${isArabic()?'أندرويد:':'Android:'}</strong> ${isArabic()?'افتح الرابط في Chrome، افتح القائمة، ثم اختر إضافة إلى الشاشة الرئيسية.':'Open in Chrome, open the menu, then choose Add to Home screen.'}</p></div></details></section><aside class="vitd-patient-safety"><strong>${isArabic()?'خذ الجرعة المكتوبة فقط.':'Take only the amount shown.'}</strong><p>${isArabic()?'اتصل بالعيادة إذا أخذت جرعة بالخطأ، أو كانت قوة العبوة مختلفة، أو حدث حمل، أو تغيّرت أدويتك.':'Contact the clinic if you took the wrong amount, the bottle strength is different, you become pregnant, or your medicines change.'}</p></aside></main></div>`;
  root.dataset.vitdCode=code;root.dataset.vitdSchedule=encode(schedule);
}

function ironFormulationLine(data){
  const frequency=data.g===1?(isArabic()?'مرة يوميًا':'once a day'):(isArabic()?`كل ${number(data.g)} أيام`:`every ${data.g} days`);
  return isArabic()?`${formulation(data.f)} · ${number(data.u)} وحدة · ${frequency}`:`${formulation(data.f)} · ${number(data.u)} unit${Number(data.u)===1?'':'s'} · ${frequency}`;
}
function renderOralIron(code){
  closeExpectations(false);
  const data=decode(code),root=document.getElementById('app');
  document.body.classList.add('iron-patient-active');document.body.classList.remove('physician-mode-active','vitd-patient-active');
  if(!root)return;
  if(!data||data.v!==1||data.kind!=='oral'||!Array.isArray(data.d)){root.innerHTML=invalidPage();return}
  const done=loadSet(IRON_PROGRESS_PREFIX,code);
  const cards=data.d.map((doseDate,index)=>{const checked=done.has(String(index));return `<label class="vitd-dose-card ${checked?'done':''}"><input type="checkbox" data-pp-oral-dose="${index}" ${checked?'checked':''}><span class="vitd-dose-check">${checked?'✓':''}</span><span><small>${isArabic()?`الجرعة ${index+1}`:`Dose ${index+1}`}</small><strong>${prettyDate(doseDate)}</strong><em><bdi>${number(data.ed)}</bdi> ${isArabic()?'ملغ حديد':'mg iron'}</em></span></label>`}).join('');
  root.innerHTML=`<div class="vitd-patient-page iron-patient-page patient-language-page" ${pageAttrs()}><header class="vitd-journey-hero iron-journey">${languageButton()}<div class="iron-orbit" aria-hidden="true">Fe</div><p class="eyebrow">${isArabic()?'حبوب الحديد':'YOUR IRON TABLETS'}</p><h1>${isArabic()?'جدول الحديد':'Your iron schedule'}</h1><p>${clinicIntro(data.c,'Take only the amount shown on the dates below.','خذ الكمية المكتوبة فقط في التواريخ أدناه.')}</p></header><main class="vitd-journey-main"><section class="iron-summary-card"><small>${isArabic()?'الحديد في كل جرعة':'IRON IN EACH DOSE'}</small><h2><bdi>${number(data.ed)}</bdi> ${isArabic()?'ملغ':'mg'}</h2><p>${esc(ironFormulationLine(data))}</p></section><section class="vitd-phase"><div class="vitd-phase-head"><span>Fe</span><div><small>${isArabic()?'مواعيد الجرعات':'DOSE DATES'}</small><h2>${isArabic()?'علّم الجرعة بعد أن تأخذها':'Tick each dose after you take it'}</h2></div></div><div class="vitd-dose-list">${cards}</div></section><section class="vitd-repeat"><span aria-hidden="true">🧪</span><div><small>${isArabic()?'فحص الدم التالي':'NEXT BLOOD TEST'}</small><h2>${prettyDate(data.r)}</h2><p>${isArabic()?'ستخبرك العيادة بما يجب فعله بعد ظهور النتيجة.':'The clinic will tell you what to do after the result.'}</p></div></section><section class="vitd-save-card"><h2>${isArabic()?'احفظ الجدول':'Save your schedule'}</h2><div class="vitd-save-actions"><button class="btn dr" data-patient-share>${isArabic()?'مشاركة الرابط':'Share link'}</button><button class="btn ghost" data-patient-copy>${isArabic()?'نسخ الرابط':'Copy link'}</button></div><details><summary>${isArabic()?'إضافة إلى الشاشة الرئيسية':'Add to your Home Screen'}</summary><div class="vitd-home-help"><p><strong>${isArabic()?'آيفون:':'iPhone:'}</strong> ${isArabic()?'افتح الرابط في Safari، اضغط مشاركة، ثم اختر إضافة إلى الشاشة الرئيسية.':'Open in Safari, tap Share, then Add to Home Screen.'}</p><p><strong>${isArabic()?'أندرويد:':'Android:'}</strong> ${isArabic()?'افتح الرابط في Chrome، افتح القائمة، ثم اختر إضافة إلى الشاشة الرئيسية.':'Open in Chrome, open the menu, then choose Add to Home screen.'}</p></div></details></section><aside class="vitd-patient-safety"><strong>${isArabic()?'احفظ الحديد بعيدًا عن الأطفال.':'Keep iron away from children.'}</strong><p>${isArabic()?'اتصل بالعيادة إذا أخذت جرعة بالخطأ، أو لم تستطع تحمّل المنتج، أو حدث حمل، أو بدأت دواءً جديدًا.':'Contact the clinic if you took the wrong amount, cannot tolerate the product, become pregnant, or start a new medicine.'}</p></aside></main></div>`;
  root.dataset.ironCode=code;
}

function originalIvDates(data){return data.i.map(item=>item.date)}
function loadIvDates(code,data){const fallback=originalIvDates(data);try{const saved=JSON.parse(localStorage.getItem(IRON_DATE_PREFIX+hash(code)));return Array.isArray(saved)&&saved.length===fallback.length&&saved.every(item=>/^\d{4}-\d{2}-\d{2}$/.test(item))?saved:fallback}catch(error){return fallback}}
function saveIvDates(code,dates){localStorage.setItem(IRON_DATE_PREFIX+hash(code),JSON.stringify(dates))}
function minIvDate(index,data,dates){if(index===0)return data.i[0].date;return addDays(dates[index-1],Math.max(0,daysBetween(data.i[index-1].date,data.i[index].date)))}
function shiftIvDates(data,dates,index,newDate){const minimum=minIvDate(index,data,dates);if(newDate<minimum)return {error:isArabic()?'لا يمكن اختيار تاريخ أبكر من الموعد المسموح.':'That date is earlier than the allowed schedule.'};const shift=daysBetween(dates[index],newDate);if(!shift)return {dates:[...dates],shift:0};const adjusted=[...dates];for(let i=index;i<adjusted.length;i++)adjusted[i]=addDays(adjusted[i],shift);return {dates:adjusted,shift}}

function productExpectation(data){
  if(data?.preset==='carboxymaltose'||/carboxymaltose/i.test(data?.p||'')){
    return `<aside class="iron-expect-product"><strong>${isArabic()?'ملاحظة مهمة':'One extra thing to watch for'}</strong><p>${isArabic()?'إذا ظهر تعب جديد أو ازداد، أو شعرت بضعف في العضلات أو ألم في العظام، اتصل بالعيادة. قد يطلبون فحص دم.':'Contact the clinic if you develop new or worsening tiredness, muscle weakness, or bone pain. They may want a blood test.'}</p></aside>`;
  }
  return '';
}
function list(items){return `<ul>${items.map(item=>`<li>${esc(item)}</li>`).join('')}</ul>`}
function renderExpectationDialog(data){
  const items=EXPECTATIONS[language()],tab=items[expectationTab];
  let modal=document.getElementById('iron-expectations-modal');if(!modal){modal=document.createElement('div');modal.id='iron-expectations-modal';document.body.appendChild(modal)}
  modal.className='iron-expect-modal';
  modal.innerHTML=`<div class="iron-expect-backdrop" data-close-iron-expect></div><section class="iron-expect-dialog" ${pageAttrs()} role="dialog" aria-modal="true" aria-labelledby="iron-expect-title"><header><div><p class="eyebrow">${isArabic()?'دليل جلسة الحديد':'IV IRON GUIDE'}</p><h2 id="iron-expect-title">${isArabic()?'ما الذي قد تشعر به؟':'What to expect'}</h2><p>${esc(formulation(data.p||'IV iron'))}</p></div><button type="button" class="iron-expect-close" data-close-iron-expect aria-label="${isArabic()?'إغلاق':'Close'}">×</button></header><div class="iron-expect-tabs" role="tablist" aria-label="${isArabic()?'مراحل جلسة الحديد':'What to expect stages'}">${items.map((item,index)=>`<button type="button" role="tab" id="iron-expect-tab-${item.id}" aria-controls="iron-expect-panel" aria-selected="${index===expectationTab}" tabindex="${index===expectationTab?'0':'-1'}" data-iron-expect-tab="${index}">${esc(item.tab)}</button>`).join('')}</div><div id="iron-expect-panel" class="iron-expect-panel" role="tabpanel" aria-labelledby="iron-expect-tab-${tab.id}" tabindex="0"><p class="iron-expect-step">${isArabic()?`${number(expectationTab+1)} من ${number(items.length)}`:`${expectationTab+1} of ${items.length}`}</p><h3>${esc(tab.title)}</h3><p>${esc(tab.intro)}</p><section class="iron-expect-common"><h4>${isArabic()?'ما قد تشعر به':'What you may notice'}</h4>${list(tab.expected)}</section><section class="iron-expect-action"><h4>${esc(tab.actionTitle)}</h4>${list(tab.action)}</section>${expectationTab===2?productExpectation(data):''}<p class="iron-expect-note">${esc(tab.note)}</p></div><footer><button type="button" class="btn ghost" data-iron-expect-prev>${isArabic()?'السابق':'Previous'}</button><button type="button" class="btn dr" data-iron-expect-next>${isArabic()?'التالي':'Next'}</button></footer></section>`;
  document.body.classList.add('iron-expect-open');
}
function setExpectationTab(index,data,focus=true){const items=EXPECTATIONS[language()];expectationTab=(index+items.length)%items.length;renderExpectationDialog(data);if(focus)document.querySelector(`[data-iron-expect-tab="${expectationTab}"]`)?.focus()}
function openExpectations(data,opener){expectationReturnFocus=opener||document.activeElement;expectationTab=0;renderExpectationDialog(data);document.querySelector('[data-close-iron-expect]')?.focus()}
function closeExpectations(returnFocus=true){document.getElementById('iron-expectations-modal')?.remove();document.body.classList.remove('iron-expect-open');if(returnFocus)expectationReturnFocus?.focus?.();expectationReturnFocus=null}

function renderIvIron(code){
  closeExpectations(false);
  const data=decode(code),root=document.getElementById('app');
  document.body.classList.add('iron-patient-active');document.body.classList.remove('physician-mode-active','vitd-patient-active');
  if(!root)return;
  if(!data||data.v!==1||data.kind!=='iv'||!Array.isArray(data.i)){root.innerHTML=invalidPage();return}
  const dates=loadIvDates(code,data),done=loadSet(IRON_PROGRESS_PREFIX,code);
  const cards=data.i.map((dose,index)=>{const completed=done.has(String(index)),minimum=minIvDate(index,data,dates);return `<article class="vitd-dose-card iron-adjusted-dose-card ${completed?'done':''}"><label class="iron-adjusted-complete"><input type="checkbox" data-pp-iv-dose="${index}" ${completed?'checked':''}><span class="vitd-dose-check">${completed?'✓':''}</span><span><small>${isArabic()?`الجلسة ${index+1}`:`Visit ${index+1}`}</small><strong>${prettyDate(dates[index])}</strong><em><bdi>${number(dose.mg)}</bdi> ${isArabic()?'ملغ حديد وريدي':'mg IV iron'}${dose.ml!=null?` · <bdi>${number(dose.ml)}</bdi> ${isArabic()?'مل':'mL'}`:''}</em></span></label><label class="iron-adjusted-date"><span>${completed?(isArabic()?'تاريخ الجلسة الفعلي':'Actual visit date'):(isArabic()?'تاريخ الجلسة المخطط':'Planned visit date')}</span><input type="date" data-pp-iv-date="${index}" value="${dates[index]}" min="${minimum}"></label></article>`}).join('');
  root.innerHTML=`<div class="vitd-patient-page iron-patient-page patient-language-page" ${pageAttrs()}><header class="vitd-journey-hero iron-journey">${languageButton()}<div class="iron-orbit" aria-hidden="true">Fe</div><p class="eyebrow">${isArabic()?'مواعيد الحديد':'YOUR IRON APPOINTMENTS'}</p><h1>${isArabic()?'مواعيد الحديد الوريدي':'Your IV iron appointments'}</h1><p>${clinicIntro(data.c,'Mark each visit when it is done. If a visit happens later, change its date below.','علّم كل جلسة بعد انتهائها. إذا تأخرت جلسة، غيّر تاريخها أدناه.')}</p></header><main class="vitd-journey-main"><section class="iron-summary-card"><small>${isArabic()?'إجمالي الحديد المخطط':'TOTAL PLANNED IRON'}</small><h2><bdi>${number(data.t)}</bdi> ${isArabic()?'ملغ':'mg'}</h2><p>${esc(formulation(data.p))} · ${isArabic()?`${number(data.i.length)} جلسات`:`${data.i.length} visit${data.i.length===1?'':'s'}`}${data.i.length>1&&data.g?` · ${isArabic()?`كل ${number(data.g)} أيام`:`${data.g}-day interval`}`:''}</p></section><section class="iron-expect-launch"><div><p class="eyebrow">${isArabic()?'قبل الجلسة':'BE PREPARED'}</p><h2>${isArabic()?'اعرف ما الذي قد تشعر به':'Know what to expect'}</h2><p>${isArabic()?'اقرأ عن الأعراض الخفيفة ومتى تحتاج إلى مساعدة.':'Read about common effects and when to get help.'}</p></div><button type="button" class="btn dr" data-open-iron-expect>${isArabic()?'ما الذي قد أشعر به؟':'What to expect'}</button></section><section class="vitd-phase"><div class="vitd-phase-head"><span>Fe</span><div><small>${isArabic()?'مواعيد الجلسات':'VISIT DATES'}</small><h2>${isArabic()?'علّم الجلسة وعدّل التاريخ عند الحاجة':'Mark each visit and change the date if needed'}</h2></div></div><p class="iron-date-help">${isArabic()?'إذا حدثت جلسة في تاريخ متأخر، غيّر تاريخها وستنتقل الجلسات التالية معها.':'If a visit happens later, change its date and the later visits will move with it.'}</p><div class="vitd-dose-list">${cards}</div></section><section class="vitd-repeat"><span aria-hidden="true">🧪</span><div><small>${isArabic()?'فحص الدم التالي':'NEXT BLOOD TEST'}</small><h2>${prettyDate(data.r)}</h2><p>${isArabic()?'تأكد من موعد فحص الدم مع العيادة إذا تغيّرت مواعيد الجلسات.':'Check the blood-test date with the clinic if your visit dates change.'}</p></div></section><section class="vitd-save-card"><h2>${isArabic()?'احفظ الجدول':'Save your schedule'}</h2><div class="vitd-save-actions"><button class="btn dr" data-patient-share>${isArabic()?'مشاركة الرابط':'Share link'}</button><button class="btn ghost" data-patient-copy>${isArabic()?'نسخ الرابط':'Copy link'}</button><button class="btn ghost" data-pp-reset-iv-dates>${isArabic()?'إرجاع المواعيد الأصلية':'Reset dates'}</button></div><details><summary>${isArabic()?'إضافة إلى الشاشة الرئيسية':'Add to your Home Screen'}</summary><div class="vitd-home-help"><p><strong>${isArabic()?'آيفون:':'iPhone:'}</strong> ${isArabic()?'افتح الرابط في Safari، اضغط مشاركة، ثم اختر إضافة إلى الشاشة الرئيسية.':'Open in Safari, tap Share, then Add to Home Screen.'}</p><p><strong>${isArabic()?'أندرويد:':'Android:'}</strong> ${isArabic()?'افتح الرابط في Chrome، افتح القائمة، ثم اختر إضافة إلى الشاشة الرئيسية.':'Open in Chrome, open the menu, then choose Add to Home screen.'}</p></div></details></section><aside class="vitd-patient-safety"><strong>${isArabic()?'جلسة الحديد تُعطى في العيادة فقط.':'IV iron is given by the clinic team.'}</strong><p>${isArabic()?'اطلب مساعدة عاجلة إذا حدثت صعوبة في التنفس، أو تورم في الوجه أو الفم، أو إغماء، أو تفاعل شديد.':'Get urgent help for trouble breathing, swelling of the face or mouth, fainting, or a severe reaction.'}</p></aside></main></div>`;
  root.dataset.ironCode=code;
}

function handlePatientRoute(){const route=location.hash||'';if(route.startsWith(ORAL_ROUTE)){renderOralIron(route.slice(ORAL_ROUTE.length));return true}if(route.startsWith(IV_ROUTE)){renderIvIron(route.slice(IV_ROUTE.length));return true}return false}
function renderCurrentPatient(){const route=location.hash||'';if(route.startsWith(VITD_ROUTE)){renderVitaminD(route.slice(VITD_ROUTE.length));return true}return handlePatientRoute()}

const previousIronRoute=window.handleIronRoute;
window.handleIronRoute=function(){if(handlePatientRoute())return true;return typeof previousIronRoute==='function'?previousIronRoute():false};
window.renderVitaminDPatient=renderVitaminD;

document.addEventListener('change',event=>{
  const vitamin=event.target.closest?.('[data-pp-vitd-dose]');if(vitamin){const code=document.getElementById('app')?.dataset.vitdCode;if(!code)return;const done=loadSet(VITD_PROGRESS_PREFIX,code);vitamin.checked?done.add(vitamin.dataset.ppVitdDose):done.delete(vitamin.dataset.ppVitdDose);saveSet(VITD_PROGRESS_PREFIX,code,done);renderVitaminD(code);return}
  const oral=event.target.closest?.('[data-pp-oral-dose]');if(oral){const code=document.getElementById('app')?.dataset.ironCode;if(!code)return;const done=loadSet(IRON_PROGRESS_PREFIX,code);oral.checked?done.add(oral.dataset.ppOralDose):done.delete(oral.dataset.ppOralDose);saveSet(IRON_PROGRESS_PREFIX,code,done);renderOralIron(code);return}
  const iv=event.target.closest?.('[data-pp-iv-dose]');if(iv){const code=document.getElementById('app')?.dataset.ironCode;if(!code)return;const done=loadSet(IRON_PROGRESS_PREFIX,code);iv.checked?done.add(iv.dataset.ppIvDose):done.delete(iv.dataset.ppIvDose);saveSet(IRON_PROGRESS_PREFIX,code,done);renderIvIron(code);return}
  const dateInput=event.target.closest?.('[data-pp-iv-date]');if(dateInput){const code=document.getElementById('app')?.dataset.ironCode,data=decode(code),index=Number(dateInput.dataset.ppIvDate);if(!code||!data||!Number.isInteger(index)||!dateInput.value)return;const dates=loadIvDates(code,data),result=shiftIvDates(data,dates,index,dateInput.value);if(result.error){dateInput.value=dates[index];toast(result.error);return}if(result.shift){saveIvDates(code,result.dates);renderIvIron(code);toast(isArabic()?'تم تعديل هذا الموعد والمواعيد التالية.':'This visit and the later visits were adjusted.')}return}
});

document.addEventListener('click',async event=>{
  if(event.target.closest('[data-patient-language-toggle]')){setLanguage(isArabic()?'en':'ar');closeExpectations(false);renderCurrentPatient();return}
  const code=document.getElementById('app')?.dataset.ironCode;
  if(event.target.closest('[data-open-iron-expect]')&&code){const data=decode(code);if(data)openExpectations(data,event.target.closest('[data-open-iron-expect]'));return}
  if(event.target.closest('[data-close-iron-expect]')){closeExpectations();return}
  const tabButton=event.target.closest('[data-iron-expect-tab]');if(tabButton&&code){const data=decode(code);if(data)setExpectationTab(Number(tabButton.dataset.ironExpectTab),data,false);return}
  if(event.target.closest('[data-iron-expect-prev]')&&code){const data=decode(code);if(data)setExpectationTab(expectationTab-1,data);return}
  if(event.target.closest('[data-iron-expect-next]')&&code){const data=decode(code);if(data)setExpectationTab(expectationTab+1,data);return}
  if(event.target.closest('[data-pp-reset-iv-dates]')&&code){localStorage.removeItem(IRON_DATE_PREFIX+hash(code));renderIvIron(code);toast(isArabic()?'تم إرجاع المواعيد الأصلية.':'Original dates restored.');return}
  if(event.target.closest('[data-patient-copy]')){await navigator.clipboard?.writeText(location.href);toast(copyText());return}
  if(event.target.closest('[data-patient-share]')){const title=isArabic()?'جدول العلاج':'My treatment schedule',text=isArabic()?'افتح جدولي':'Open my schedule';if(navigator.share)await navigator.share({title,text,url:location.href});else{await navigator.clipboard?.writeText(location.href);toast(copyText())}}
});

document.addEventListener('keydown',event=>{
  const modal=document.getElementById('iron-expectations-modal');if(!modal)return;
  const code=document.getElementById('app')?.dataset.ironCode,data=decode(code);
  if(event.key==='Escape'){event.preventDefault();closeExpectations();return}
  if((event.key==='ArrowRight'||event.key==='ArrowLeft')&&event.target.matches?.('[role="tab"]')&&data){event.preventDefault();const base=event.key==='ArrowRight'?1:-1;setExpectationTab(expectationTab+(isArabic()?-base:base),data);return}
  if(event.key==='Tab'){const focusable=[...modal.querySelectorAll('button,[href],input,[tabindex]:not([tabindex="-1"])')].filter(element=>!element.disabled);if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}
});

window.addEventListener('hashchange',()=>setTimeout(renderCurrentPatient,0));
renderCurrentPatient();
})();