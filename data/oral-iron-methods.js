// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
window.ORAL_IRON_METHOD_CONTENT = {
  meta: {
    version: 2,
    contentStatus: 'researched',
    researchBatch: 'ORAL_IRON_ADMINISTRATION_METHODS_2026_08',
    sourceIds: [
      'NHS_FERROUS_SULFATE_HOW_TO_TAKE_2023',
      'NHS_FERROUS_SULFATE_ABOUT_2023',
      'MEDLINEPLUS_IRON_SUPPLEMENTS_2025',
      'AGA_IRON_DEFICIENCY_ANAEMIA_CPU_2024'
    ],
    note: 'Clinician-selected administration options. The patient page displays one chosen method and does not allow the patient to change it.'
  },
  en: {
    builderLegend: 'How should this patient take the iron?',
    builderIntro: 'Choose the method you discussed with the patient. The generated guide will show only this method.',
    selectedLabel: 'YOUR CLINIC SELECTED',
    sectionTitle: 'How to take this iron',
    sectionIntro: 'Use the selected method below unless your clinic or pharmacist gives you different instructions.',
    methods: {
      morning: {
        title: 'Morning — empty stomach',
        short: 'Morning, before breakfast',
        builder: 'For patients who tolerate iron without food.',
        instruction: 'Take the iron first thing in the morning with water, at least 30 minutes before breakfast.',
        detail: 'You do not need to extend the fast after the 30-minute window unless your clinic specifically told you to.'
      },
      between: {
        title: 'Between meals — empty stomach',
        short: 'Between meals',
        builder: 'For patients who prefer a daytime dose away from food.',
        instruction: 'Take the iron at least 2 hours after your last meal. Wait at least 30 minutes before eating again.',
        detail: 'Use water as the default drink. Orange juice is optional when the clinic or pharmacist recommends it.'
      },
      bedtime: {
        title: 'Bedtime — empty stomach',
        short: 'At bedtime',
        builder: 'For patients whose evening routine leaves at least 2 hours after the last meal.',
        instruction: 'Take the iron with water at bedtime, at least 2 hours after your last meal. Do not take it with a bedtime snack.',
        detail: 'Keep bedtime calcium, antacids, dairy, tea, coffee, eggs, and interacting medicines separated as directed. Use another clinic-selected method if taking it at night causes troublesome nausea, heartburn, or stomach pain.'
      },
      sensitive: {
        title: 'Sensitive stomach — with a small meal',
        short: 'With a light meal',
        builder: 'For patients who develop nausea, cramps, or stomach pain without food.',
        instruction: 'Take the iron with or just after a small non-dairy meal.',
        detail: 'Examples include plain toast or crackers, a banana or applesauce, or a small amount of rice. Avoid milk, yoghurt, calcium-fortified food, tea, coffee, bran, or a large high-fibre meal with the dose.'
      }
    },
    commonTitle: 'Keep these gaps around the dose',
    commonText: 'Unless your clinic or pharmacist says otherwise, keep tea, coffee, dairy or calcium, eggs, and antacids about 2 hours away. Ask a pharmacist how to separate iron from other medicines and supplements.',
    fixedPlan: 'This method was chosen by your clinic. Do not switch methods or change the dose or frequency without checking with them.',
    missing: 'No administration method was saved in this older link. Follow the label or ask the clinic how to take it.'
  },
  ar: {
    builderLegend: 'كيف ينبغي لهذا المريض تناول الحديد؟',
    builderIntro: 'اختر الطريقة التي ناقشتها مع المريض. سيعرض الدليل الناتج هذه الطريقة فقط.',
    selectedLabel: 'اختارت العيادة لك',
    sectionTitle: 'كيفية تناول هذا الحديد',
    sectionIntro: 'استخدم الطريقة المحددة أدناه ما لم تعطك العيادة أو الصيدلي تعليمات مختلفة.',
    methods: {
      morning: {
        title: 'صباحًا — على معدة فارغة',
        short: 'صباحًا قبل الإفطار',
        builder: 'لمن يتحمل الحديد من دون طعام.',
        instruction: 'خذ الحديد عند الاستيقاظ مع الماء، قبل الإفطار بـ30 دقيقة على الأقل.',
        detail: 'لا حاجة لإطالة الصيام بعد مرور 30 دقيقة إلا إذا أعطتك العيادة تعليمات مختلفة.'
      },
      between: {
        title: 'بين الوجبات — على معدة فارغة',
        short: 'بين الوجبات',
        builder: 'لمن يفضل جرعة نهارية بعيدة عن الطعام.',
        instruction: 'خذ الحديد بعد آخر وجبة بساعتين على الأقل، وانتظر 30 دقيقة على الأقل قبل الأكل مرة أخرى.',
        detail: 'الماء هو الخيار الافتراضي. عصير البرتقال اختياري إذا أوصت به العيادة أو الصيدلي.'
      },
      bedtime: {
        title: 'وقت النوم — على معدة فارغة',
        short: 'وقت النوم',
        builder: 'لمن يترك روتينه المسائي ساعتين على الأقل بعد آخر وجبة.',
        instruction: 'خذ الحديد مع الماء وقت النوم، بعد آخر وجبة بساعتين على الأقل. لا تتناوله مع وجبة خفيفة قبل النوم.',
        detail: 'اترك الفاصل المطلوب عن الكالسيوم ومضادات الحموضة والألبان والشاي والقهوة والبيض والأدوية المتداخلة التي تؤخذ مساءً. استخدم طريقة أخرى تختارها العيادة إذا سبب تناوله ليلًا غثيانًا أو حرقة أو ألمًا مزعجًا بالمعدة.'
      },
      sensitive: {
        title: 'معدة حساسة — مع وجبة صغيرة',
        short: 'مع وجبة خفيفة',
        builder: 'لمن يصاب بالغثيان أو المغص أو ألم المعدة عند تناوله من دون طعام.',
        instruction: 'خذ الحديد مع وجبة صغيرة خالية من الألبان أو بعدها مباشرة.',
        detail: 'أمثلة: خبز محمص أو بسكويت سادة، موز أو مهروس التفاح، أو كمية صغيرة من الأرز. تجنب الحليب واللبن والأطعمة المدعمة بالكالسيوم والشاي والقهوة والنخالة أو الوجبة الكبيرة الغنية بالألياف مع الجرعة.'
      }
    },
    commonTitle: 'اترك هذه الفواصل حول الجرعة',
    commonText: 'ما لم تقل العيادة أو الصيدلي غير ذلك، اترك نحو ساعتين بين الحديد وبين الشاي أو القهوة أو الألبان أو الكالسيوم أو البيض أو مضادات الحموضة. اسأل الصيدلي عن الفاصل عن الأدوية والمكملات الأخرى.',
    fixedPlan: 'اختارت العيادة هذه الطريقة. لا تغيّر الطريقة أو الجرعة أو التكرار من دون الرجوع إليها.',
    missing: 'لم تُحفظ طريقة التناول في هذا الرابط القديم. اتبع الملصق أو اسأل العيادة عن الطريقة المناسبة.'
  }
};
