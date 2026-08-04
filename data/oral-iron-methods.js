// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
window.ORAL_IRON_METHOD_CONTENT = {
  meta: {
    version: 3,
    contentStatus: 'researched',
    researchBatch: 'ORAL_IRON_ADMINISTRATION_METHODS_2026_08',
    sourceIds: [
      'NHS_FERROUS_SULFATE_HOW_TO_TAKE_2023',
      'NHS_FERROUS_SULFATE_ABOUT_2023',
      'MEDLINEPLUS_IRON_SUPPLEMENTS_2025',
      'AGA_IRON_DEFICIENCY_ANAEMIA_CPU_2024'
    ],
    note: 'Clinician-selected administration options. The patient page displays one chosen method.'
  },
  en: {
    builderLegend: 'How should this patient take the iron?',
    builderIntro: 'Select one. The patient guide will show it.',
    selectedLabel: 'TAKING METHOD',
    sectionTitle: 'How to take this iron',
    sectionIntro: '',
    methods: {
      morning: {
        title: 'Morning — empty stomach',
        short: 'Morning, before breakfast',
        builder: 'Take with water before breakfast.',
        instruction: 'Take the iron with water at least 30 minutes before breakfast.',
        detail: 'Breakfast can follow after 30 minutes.'
      },
      between: {
        title: 'Between meals — empty stomach',
        short: 'Between meals',
        builder: 'Take away from meals during the day.',
        instruction: 'Take the iron at least 2 hours after food. Wait at least 30 minutes before eating again.',
        detail: 'Use water.'
      },
      bedtime: {
        title: 'Bedtime — empty stomach',
        short: 'At bedtime',
        builder: 'Use when bedtime is at least 2 hours after the last meal.',
        instruction: 'Take the iron with water at bedtime, at least 2 hours after the last meal.',
        detail: 'Do not take it with a bedtime snack.'
      },
      sensitive: {
        title: 'Sensitive stomach — with a small meal',
        short: 'With a light meal',
        builder: 'Use when iron causes nausea or stomach discomfort without food.',
        instruction: 'Take the iron with or just after a small non-dairy meal.',
        detail: 'Examples: plain toast, crackers, banana, applesauce or a small amount of rice.'
      }
    },
    commonTitle: '',
    commonText: '',
    fixedPlan: '',
    missing: 'This older link does not include a taking method.'
  },
  ar: {
    builderLegend: 'كيف ينبغي لهذا المريض تناول الحديد؟',
    builderIntro: 'اختر طريقة واحدة. سيعرض دليل المريض هذه الطريقة.',
    selectedLabel: 'طريقة التناول',
    sectionTitle: 'كيفية تناول هذا الحديد',
    sectionIntro: '',
    methods: {
      morning: {
        title: 'صباحًا — على معدة فارغة',
        short: 'صباحًا قبل الإفطار',
        builder: 'يؤخذ مع الماء قبل الإفطار.',
        instruction: 'خذ الحديد مع الماء قبل الإفطار بـ30 دقيقة على الأقل.',
        detail: 'يمكن تناول الإفطار بعد 30 دقيقة.'
      },
      between: {
        title: 'بين الوجبات — على معدة فارغة',
        short: 'بين الوجبات',
        builder: 'يؤخذ بعيدًا عن الوجبات خلال النهار.',
        instruction: 'خذ الحديد بعد الطعام بساعتين على الأقل، وانتظر 30 دقيقة على الأقل قبل الأكل مرة أخرى.',
        detail: 'استخدم الماء.'
      },
      bedtime: {
        title: 'وقت النوم — على معدة فارغة',
        short: 'وقت النوم',
        builder: 'يستخدم عندما يكون وقت النوم بعد آخر وجبة بساعتين على الأقل.',
        instruction: 'خذ الحديد مع الماء وقت النوم، بعد آخر وجبة بساعتين على الأقل.',
        detail: 'لا تتناوله مع وجبة خفيفة قبل النوم.'
      },
      sensitive: {
        title: 'معدة حساسة — مع وجبة صغيرة',
        short: 'مع وجبة خفيفة',
        builder: 'يستخدم عند حدوث غثيان أو انزعاج بالمعدة من دون طعام.',
        instruction: 'خذ الحديد مع وجبة صغيرة خالية من الألبان أو بعدها مباشرة.',
        detail: 'أمثلة: خبز محمص، بسكويت سادة، موز، مهروس التفاح، أو كمية صغيرة من الأرز.'
      }
    },
    commonTitle: '',
    commonText: '',
    fixedPlan: '',
    missing: 'هذا الرابط القديم لا يتضمن طريقة تناول.'
  }
};
