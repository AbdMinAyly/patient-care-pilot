// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
window.ORAL_IRON_GUIDE_CONTENT = {
  meta: {
    version: 1,
    contentStatus: "researched",
    researchBatch: "ORAL_IRON_PATIENT_GUIDE_2026_08",
    sourceIds: [
      "NHS_IRON_DEFICIENCY_ANAEMIA_2024",
      "NHS_FERROUS_SULFATE_ABOUT_2023",
      "NHS_FERROUS_SULFATE_HOW_TO_TAKE_2023",
      "NHS_FERROUS_SULFATE_SIDE_EFFECTS_2023",
      "MEDLINEPLUS_IRON_SUPPLEMENTS_2025",
      "BSG_IRON_DEFICIENCY_ANAEMIA_GUIDELINE_2021"
    ],
    note: "Patient-facing educational wording derived from the listed official and guideline sources. It does not replace the clinician-selected product, dose, frequency, monitoring, or investigation plan."
  },
  formulationsAr: {
    "Ferrous sulfate": "كبريتات الحديد",
    "Ferrous fumarate": "فومارات الحديد",
    "Ferrous gluconate": "غلوكونات الحديد",
    "Liposomal iron": "حديد ليبوسومال",
    "Custom oral iron product": "مكمل الحديد المحدد من العيادة"
  },
  en: {
    eyebrow: "YOUR ORAL IRON GUIDE",
    title: "Build iron back without counting every tablet",
    intro: "Your clinic has already chosen the product and schedule. Use this page to take it safely, manage common side effects, and notice gradual changes.",
    prescribed: "Your prescribed plan",
    dose: "Iron in each dose",
    product: "Product",
    frequency: "Schedule",
    start: "Plan starts",
    bloodTest: "Next blood test",
    onceDaily: "once a day",
    everyDays: "every {days} days",
    weeks: "for {weeks} weeks",
    prescribedNote: "Do not change the amount, frequency, or product from this page. Follow the clinic label and instructions.",
    takeTitle: "How to take oral iron well",
    takeIntro: "These tips apply to many common oral iron products. Follow any different instructions from your clinic or pharmacist.",
    takeCards: [
      {
        icon: "1",
        title: "Use the exact clinic schedule",
        body: "Take only the prescribed amount. If you miss a dose, follow the product or clinic instructions and do not double the next dose."
      },
      {
        icon: "2",
        title: "Empty stomach absorbs best",
        body: "Many iron tablets are absorbed best away from food. If they upset your stomach, taking them with or just after a small meal may be easier."
      },
      {
        icon: "3",
        title: "Leave space around blockers",
        body: "Tea, coffee, dairy or calcium, eggs, and antacids can reduce absorption of common iron tablets. Unless your clinic says otherwise, leave about a 2-hour gap."
      },
      {
        icon: "4",
        title: "Check every medicine and supplement",
        body: "Iron can interfere with some medicines, and some medicines reduce iron absorption. Ask a pharmacist how far apart to take them."
      }
    ],
    improvementTitle: "Changes you may notice",
    improvementIntro: "Tick only changes you have genuinely noticed. Not everyone starts with every symptom, and improvement can be gradual.",
    improvementNone: "No changes marked yet",
    improvementCount: "{done} of {total} changes noticed",
    improvements: [
      {
        id: "energy",
        title: "More energy",
        body: "Normal daily activities feel a little less exhausting."
      },
      {
        id: "breathing",
        title: "Less breathless",
        body: "Usual walking or stairs feel easier than before."
      },
      {
        id: "head",
        title: "Fewer headaches or dizzy spells",
        body: "These symptoms happen less often or feel milder."
      },
      {
        id: "focus",
        title: "Clearer concentration",
        body: "It is easier to focus, think, or finish ordinary tasks."
      },
      {
        id: "other",
        title: "Other low-iron symptoms are easing",
        body: "For example, fewer palpitations, less ice craving, or calmer restless legs if these were present."
      }
    ],
    resetImprovements: "Clear improvement ticks",
    timelineTitle: "What the response timeline can look like",
    timelineIntro: "This is a general guide, not a promise. The cause of low iron, ongoing blood loss, absorption, and the prescribed regimen all affect recovery.",
    timeline: [
      {
        when: "First 2–4 weeks",
        title: "The clinic may check the blood response",
        body: "A blood-count response can appear before you feel a clear difference. Monitoring in the first month helps show whether the plan is working."
      },
      {
        when: "Around 3–4 weeks",
        title: "Many people begin to feel better",
        body: "Energy, breathlessness, headaches, or concentration may start to improve, but some people notice changes earlier or later."
      },
      {
        when: "Up to 2–4 months",
        title: "Full benefit may take longer",
        body: "Symptoms and blood results can continue improving over several months."
      },
      {
        when: "After you feel better",
        title: "Iron stores still need rebuilding",
        body: "Keep taking iron for as long as your clinician tells you. Feeling better is not a signal to stop early."
      }
    ],
    noSymptomsNote: "If you had few symptoms or were prescribed iron before anaemia developed, you may not feel a dramatic change even when treatment is working.",
    sideEffectsTitle: "Side effect | what may help",
    sideEffectsIntro: "Common stomach and bowel effects are manageable for many people. Contact the clinic rather than silently stopping or changing the dose.",
    sideEffects: [
      {
        symptom: "Nausea, heartburn, or stomach discomfort",
        solution: "Try taking it with or just after a small meal if your clinic or pharmacist agrees. Ask about another formulation or schedule if it remains difficult."
      },
      {
        symptom: "Constipation",
        solution: "Drink enough fluid, increase fibre gradually, and keep moving. Ask a pharmacist or clinician for help if it is persistent or painful."
      },
      {
        symptom: "Diarrhoea",
        solution: "Replace fluids. Speak with a pharmacist or clinician before using anti-diarrhoea medicine, especially if diarrhoea is severe or ongoing."
      },
      {
        symptom: "Darker stools",
        solution: "Dark stools are common with iron. Black tar-like or sticky stools, red blood, sharp abdominal pain, faintness, or worsening illness need urgent medical assessment."
      },
      {
        symptom: "Teeth staining from liquid iron",
        solution: "Use the measuring device and mixing instructions supplied. A straw and rinsing the mouth afterward may reduce staining."
      }
    ],
    contactTitle: "Contact the clinic",
    contactItems: [
      "Side effects are making you skip doses or you cannot keep the iron down.",
      "Symptoms are worsening, or you have not noticed improvement by the time your clinic expected.",
      "You started a new medicine, antacid, calcium supplement, antibiotic, or thyroid medicine and are unsure about spacing.",
      "You think bleeding may be continuing, including red blood or black tar-like stools."
    ],
    urgentTitle: "Get urgent help",
    urgentText: "Get urgent medical help for severe abdominal pain, vomiting blood, fainting, severe weakness, trouble breathing, or a suspected overdose. Iron overdose can be fatal in children.",
    childSafety: "Store iron locked away and out of sight and reach of children.",
    saveTitle: "Keep this guide",
    share: "Share link",
    copy: "Copy link",
    home: "Add to your Home Screen",
    iphone: "iPhone:",
    iphoneHelp: "Open this link in Safari, tap Share, then Add to Home Screen.",
    android: "Android:",
    androidHelp: "Open this link in Chrome, open the menu, then choose Add to Home screen."
  },
  ar: {
    eyebrow: "دليل الحديد الفموي",
    title: "استعد مخزون الحديد من دون عدّ كل حبة",
    intro: "اختارت العيادة المنتج والجدول العلاجي بالفعل. استخدم هذه الصفحة لتناوله بأمان، والتعامل مع الآثار الجانبية الشائعة، وملاحظة التحسن التدريجي.",
    prescribed: "الخطة الموصوفة لك",
    dose: "الحديد في كل جرعة",
    product: "المنتج",
    frequency: "الجدول",
    start: "بداية الخطة",
    bloodTest: "فحص الدم التالي",
    onceDaily: "مرة يوميًا",
    everyDays: "كل {days} أيام",
    weeks: "لمدة {weeks} أسابيع",
    prescribedNote: "لا تغيّر الكمية أو التكرار أو المنتج من هذه الصفحة. اتبع ملصق العيادة وتعليماتها.",
    takeTitle: "أفضل طريقة لتناول الحديد الفموي",
    takeIntro: "تنطبق هذه النصائح على كثير من مستحضرات الحديد الفموية الشائعة. اتبع أي تعليمات مختلفة أعطتك إياها العيادة أو الصيدلي.",
    takeCards: [
      {
        icon: "١",
        title: "التزم بجدول العيادة",
        body: "خذ الكمية الموصوفة فقط. إذا نسيت جرعة فاتبع تعليمات المنتج أو العيادة، ولا تضاعف الجرعة التالية."
      },
      {
        icon: "٢",
        title: "الامتصاص أفضل على معدة فارغة",
        body: "يُمتص كثير من أقراص الحديد بشكل أفضل بعيدًا عن الطعام. إذا سببت اضطرابًا بالمعدة فقد يكون تناولها مع وجبة صغيرة أو بعدها مباشرة أسهل."
      },
      {
        icon: "٣",
        title: "اترك فاصلًا عن الأشياء التي تقلل الامتصاص",
        body: "قد يقلل الشاي والقهوة ومنتجات الألبان أو الكالسيوم والبيض ومضادات الحموضة امتصاص أقراص الحديد الشائعة. ما لم تقل العيادة غير ذلك، اترك فاصلًا يقارب ساعتين."
      },
      {
        icon: "٤",
        title: "راجع كل دواء ومكمل",
        body: "قد يؤثر الحديد في بعض الأدوية، وقد تقلل أدوية أخرى امتصاصه. اسأل الصيدلي عن الفاصل المناسب بينها."
      }
    ],
    improvementTitle: "تغيّرات قد تلاحظها",
    improvementIntro: "علّم فقط التغيّرات التي لاحظتها فعلًا. ليست كل الأعراض موجودة عند الجميع، وقد يكون التحسن تدريجيًا.",
    improvementNone: "لم يتم تسجيل أي تحسن بعد",
    improvementCount: "تمت ملاحظة {done} من {total} تغيّرات",
    improvements: [
      {
        id: "energy",
        title: "طاقة أفضل",
        body: "أصبحت الأنشطة اليومية المعتادة أقل إرهاقًا."
      },
      {
        id: "breathing",
        title: "ضيق تنفس أقل",
        body: "أصبح المشي المعتاد أو صعود الدرج أسهل من السابق."
      },
      {
        id: "head",
        title: "صداع أو دوخة أقل",
        body: "تحدث هذه الأعراض بوتيرة أقل أو أصبحت أخف."
      },
      {
        id: "focus",
        title: "تركيز أوضح",
        body: "أصبح التركيز أو التفكير أو إنجاز المهام العادية أسهل."
      },
      {
        id: "other",
        title: "تحسن أعراض أخرى لنقص الحديد",
        body: "مثل خفقان أقل، أو تراجع الرغبة في أكل الثلج، أو هدوء تململ الساقين إذا كانت موجودة."
      }
    ],
    resetImprovements: "مسح علامات التحسن",
    timelineTitle: "كيف قد يبدو مسار التحسن",
    timelineIntro: "هذا دليل عام وليس وعدًا بموعد ثابت. سبب نقص الحديد واستمرار فقدان الدم والامتصاص والجدول الموصوف كلها تؤثر في سرعة التعافي.",
    timeline: [
      {
        when: "خلال أول أسبوعين إلى 4 أسابيع",
        title: "قد تفحص العيادة استجابة الدم",
        body: "قد يظهر تحسن في تعداد الدم قبل أن تشعر بفرق واضح. المتابعة خلال الشهر الأول تساعد على معرفة ما إذا كانت الخطة تعمل."
      },
      {
        when: "نحو 3 إلى 4 أسابيع",
        title: "يبدأ كثير من الناس بالشعور بتحسن",
        body: "قد تبدأ الطاقة وضيق التنفس والصداع أو التركيز بالتحسن، لكن بعض الناس يلاحظون التغير أبكر أو لاحقًا."
      },
      {
        when: "حتى شهرين إلى 4 أشهر",
        title: "قد يحتاج الأثر الكامل إلى وقت أطول",
        body: "قد تستمر الأعراض ونتائج الدم بالتحسن على مدى عدة أشهر."
      },
      {
        when: "بعد أن تشعر بتحسن",
        title: "يظل مخزون الحديد بحاجة إلى التعويض",
        body: "استمر في تناول الحديد للمدة التي تحددها العيادة. الشعور بالتحسن لا يعني التوقف مبكرًا."
      }
    ],
    noSymptomsNote: "إذا كانت أعراضك قليلة أو وُصف لك الحديد قبل حدوث فقر الدم، فقد لا تشعر بتغير كبير رغم أن العلاج يعمل.",
    sideEffectsTitle: "العرض الجانبي | ما الذي قد يساعد",
    sideEffectsIntro: "يمكن التعامل مع آثار المعدة والأمعاء الشائعة لدى كثير من الناس. تواصل مع العيادة بدلًا من إيقاف الجرعة أو تغييرها من تلقاء نفسك.",
    sideEffects: [
      {
        symptom: "غثيان أو حرقة أو انزعاج بالمعدة",
        solution: "جرّب تناوله مع وجبة صغيرة أو بعدها مباشرة إذا وافقت العيادة أو الصيدلي. اسأل عن مستحضر أو جدول آخر إذا استمرت المشكلة."
      },
      {
        symptom: "إمساك",
        solution: "اشرب سوائل كافية، وزد الألياف تدريجيًا، وحافظ على الحركة. اطلب مساعدة الصيدلي أو الطبيب إذا استمر الإمساك أو كان مؤلمًا."
      },
      {
        symptom: "إسهال",
        solution: "عوّض السوائل. تحدث مع صيدلي أو طبيب قبل استخدام دواء للإسهال، خصوصًا إذا كان شديدًا أو مستمرًا."
      },
      {
        symptom: "براز أغمق",
        solution: "اسمرار البراز شائع مع الحديد. أما البراز الأسود القطراني أو اللزج، أو الدم الأحمر، أو ألم البطن الحاد، أو الإغماء، فتحتاج إلى تقييم طبي عاجل."
      },
      {
        symptom: "تصبغ الأسنان مع الحديد السائل",
        solution: "استخدم أداة القياس وتعليمات الخلط المرفقة. قد يقلل استخدام المصاصة وشطف الفم بعد الجرعة من التصبغ."
      }
    ],
    contactTitle: "تواصل مع العيادة",
    contactItems: [
      "إذا جعلتك الآثار الجانبية تتجاوز الجرعات أو لم تستطع الاحتفاظ بالحديد في المعدة.",
      "إذا ساءت الأعراض أو لم تلاحظ تحسنًا في الوقت الذي توقعته العيادة.",
      "إذا بدأت دواءً جديدًا أو مضاد حموضة أو مكمل كالسيوم أو مضادًا حيويًا أو دواءً للغدة الدرقية ولم تعرف الفاصل المناسب.",
      "إذا ظننت أن النزيف ما زال مستمرًا، بما في ذلك دم أحمر أو براز أسود قطراني."
    ],
    urgentTitle: "اطلب مساعدة عاجلة",
    urgentText: "اطلب مساعدة طبية عاجلة عند ألم شديد بالبطن، أو قيء دموي، أو إغماء، أو ضعف شديد، أو صعوبة في التنفس، أو الاشتباه بجرعة زائدة. قد تكون جرعة الحديد الزائدة قاتلة للأطفال.",
    childSafety: "احفظ الحديد في مكان مقفل وبعيدًا عن نظر الأطفال ومتناولهم.",
    saveTitle: "احتفظ بهذا الدليل",
    share: "مشاركة الرابط",
    copy: "نسخ الرابط",
    home: "إضافة إلى الشاشة الرئيسية",
    iphone: "آيفون:",
    iphoneHelp: "افتح الرابط في Safari، اضغط مشاركة، ثم اختر إضافة إلى الشاشة الرئيسية.",
    android: "أندرويد:",
    androidHelp: "افتح الرابط في Chrome، افتح القائمة، ثم اختر إضافة إلى الشاشة الرئيسية."
  }
};