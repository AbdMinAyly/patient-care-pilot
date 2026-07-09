window.PATIENT_CARE_DATA = {
  groups: [
    { key: "01_healthy_living", label: "Healthy Living" },
    { key: "02_diet_guides", label: "Diet Guides" },
    { key: "03_monitoring", label: "Body Numbers & Monitoring" },
    { key: "04_symptoms", label: "Symptoms" },
    { key: "05_conditions", label: "Conditions" },
    { key: "06_chronic_care", label: "Chronic Care" },
    { key: "07_emergency_now", label: "Emergency Now" },
    { key: "08_medication_safety", label: "Medication Safety" },
    { key: "09_special_circumstances", label: "Special Circumstances" }
  ],

  pages: [
    {
      id: "lifestyle-health-monitoring",
      order: 1,
      group: "01_healthy_living",
      type: "healthy_living_hub",
      title: "Healthy Living",
      titleAr: "AR_PENDING__lifestyle_health_monitoring__title",
      summary: "Start here for daily habits, food, BP/sugar monitoring, and when to seek care.",
      safety: "yellow",
      color: "blue",
      icon: "Start",
      keywords: "health diet blood pressure sugar monitoring daily sleep movement water",
      related: ["balanced-plate", "know-your-numbers", "cough-cold-symptoms"]
    },
    {
      id: "balanced-plate",
      order: 2,
      group: "02_diet_guides",
      type: "diet_guide",
      title: "Build Your Plate",
      titleAr: "AR_PENDING__balanced_plate__title",
      summary: "Half vegetables, quarter protein, quarter starch. Choose water instead of juice or soda.",
      safety: "green",
      color: "green",
      icon: "Diet",
      keywords: "food meal plate vegetables protein starch water juice sugar salt",
      related: ["lifestyle-health-monitoring", "type-2-diabetes"]
    },
    {
      id: "know-your-numbers",
      order: 3,
      group: "03_monitoring",
      type: "monitoring_guide",
      title: "Know Your Numbers",
      titleAr: "AR_PENDING__bp_numbers__title",
      summary: "Blood pressure and sugar are best understood as patterns. Dangerous symptoms matter more than one isolated number.",
      safety: "yellow",
      color: "yellow",
      icon: "BP/Sugar",
      keywords: "blood pressure bp sugar glucose high low symptoms reading",
      related: ["lifestyle-health-monitoring", "chest-pain", "type-2-diabetes"]
    },
    {
      id: "cough-cold-symptoms",
      order: 4,
      group: "04_symptoms",
      type: "symptom_hub",
      title: "Cough and Cold Symptoms",
      titleAr: "AR_PENDING__symptom_cough_cold__title",
      summary: "Most cough and cold symptoms improve with supportive care, but red flags need urgent assessment.",
      safety: "yellow",
      color: "yellow",
      icon: "Symptom",
      keywords: "cough cold fever sore throat runny nose congestion breathing",
      related: ["common-cold-urti", "antibiotic-safety"]
    },
    {
      id: "common-cold-urti",
      order: 5,
      group: "05_conditions",
      type: "condition_guide",
      title: "Common Cold / URTI",
      titleAr: "AR_PENDING__condition_urti_common_cold__title",
      summary: "Rest, fluids, and symptom care are usually enough. Antibiotics usually do not help viral colds.",
      safety: "green",
      color: "blue",
      icon: "Condition",
      keywords: "urti common cold viral infection antibiotics cough congestion",
      related: ["cough-cold-symptoms", "antibiotic-safety"]
    },
    {
      id: "type-2-diabetes",
      order: 6,
      group: "06_chronic_care",
      type: "chronic_program",
      title: "Type 2 Diabetes",
      titleAr: "AR_PENDING__chronic_type2_diabetes__title",
      summary: "Follow your care plan, track sugar as advised, and learn low/high sugar symptoms.",
      safety: "yellow",
      color: "purple",
      icon: "Chronic",
      keywords: "diabetes sugar glucose low high diet medicines monitoring",
      related: ["balanced-plate", "know-your-numbers", "ramadan-health"]
    },
    {
      id: "chest-pain",
      order: 7,
      group: "07_emergency_now",
      type: "emergency_action",
      title: "Chest Pain",
      titleAr: "AR_PENDING__emergency_chest_pain__title",
      summary: "Chest pain, pressure, or heaviness can be serious. Seek emergency care now.",
      safety: "red",
      color: "red",
      icon: "Emergency",
      keywords: "chest pain pressure heaviness shortness breath emergency",
      related: ["know-your-numbers"]
    },
    {
      id: "antibiotic-safety",
      order: 8,
      group: "08_medication_safety",
      type: "medication_safety",
      title: "Antibiotic Safety",
      titleAr: "AR_PENDING__med_antibiotic_safety__title",
      summary: "Do not use antibiotics for viral colds unless prescribed. Ask if unsure.",
      safety: "yellow",
      color: "orange",
      icon: "Medicine",
      keywords: "antibiotic antibiotics viral cold safety medicine prescription",
      related: ["common-cold-urti", "cough-cold-symptoms"]
    },
    {
      id: "ramadan-health",
      order: 9,
      group: "09_special_circumstances",
      type: "special_circumstance",
      title: "Ramadan Note",
      titleAr: "AR_PENDING__special_ramadan_health__title",
      summary: "Fasting plans for diabetes, BP medicines, pregnancy, or kidney disease need doctor review.",
      safety: "doctor_only",
      color: "gray",
      icon: "Special",
      keywords: "ramadan fasting diabetes hypertension pregnancy kidney insulin medicine",
      related: ["type-2-diabetes", "know-your-numbers"]
    }
  ],

  blocks: [
    { pageId: "lifestyle-health-monitoring", order: 1, type: "hero", heading: "Start here", body: "Use this page first for daily health habits, diet basics, blood pressure and sugar monitoring, and simple safety notes.", headingAr: "AR_PENDING__block_lhm_1__heading", bodyAr: "AR_PENDING__block_lhm_1__body", safety: "yellow" },
    { pageId: "lifestyle-health-monitoring", order: 2, type: "checklist", heading: "Today’s basics", body: "Eat regular meals, drink water, move daily, sleep consistently, take medicines as prescribed, and record readings if advised.", headingAr: "AR_PENDING__block_lhm_2__heading", bodyAr: "AR_PENDING__block_lhm_2__body", safety: "green" },
    { pageId: "balanced-plate", order: 1, type: "diet", heading: "Build your plate", body: "Half vegetables, quarter protein, quarter starch. Water is the default drink.", headingAr: "AR_PENDING__block_diet_1__heading", bodyAr: "AR_PENDING__block_diet_1__body", safety: "green" },
    { pageId: "balanced-plate", order: 2, type: "caution", heading: "Simple caution", body: "Patients on insulin or medicines that can cause low sugar should not skip meals without a care plan.", headingAr: "AR_PENDING__block_diet_2__heading", bodyAr: "AR_PENDING__block_diet_2__body", safety: "yellow" },
    { pageId: "know-your-numbers", order: 1, type: "monitoring", heading: "Know your numbers", body: "One reading is not the whole story. Track patterns and symptoms.", headingAr: "AR_PENDING__block_bp_1__heading", bodyAr: "AR_PENDING__block_bp_1__body", safety: "yellow" },
    { pageId: "know-your-numbers", order: 2, type: "action", heading: "When it is urgent", body: "Very high blood pressure with chest pain, severe shortness of breath, weakness, speech difficulty, or vision change needs emergency care.", headingAr: "AR_PENDING__block_bp_2__heading", bodyAr: "AR_PENDING__block_bp_2__body", safety: "red" },
    { pageId: "cough-cold-symptoms", order: 1, type: "symptom", heading: "Cough and cold", body: "Supportive care is often enough. Watch for breathing difficulty, chest pain, confusion, dehydration, or worsening illness.", headingAr: "AR_PENDING__block_symptom_1__heading", bodyAr: "AR_PENDING__block_symptom_1__body", safety: "yellow" },
    { pageId: "common-cold-urti", order: 1, type: "condition", heading: "Common cold / URTI", body: "Most cases are viral. Rest, fluids, and symptom care are usually enough.", headingAr: "AR_PENDING__block_condition_1__heading", bodyAr: "AR_PENDING__block_condition_1__body", safety: "green" },
    { pageId: "type-2-diabetes", order: 1, type: "chronic", heading: "Type 2 diabetes", body: "Follow your care plan, track sugar as advised, and know the symptoms of low and high sugar.", headingAr: "AR_PENDING__block_chronic_1__heading", bodyAr: "AR_PENDING__block_chronic_1__body", safety: "yellow" },
    { pageId: "chest-pain", order: 1, type: "emergency", heading: "Chest pain", body: "Seek emergency care now for chest pain, pressure, or heaviness, especially with sweating, shortness of breath, fainting, or weakness.", headingAr: "AR_PENDING__block_emergency_1__heading", bodyAr: "AR_PENDING__block_emergency_1__body", safety: "red" },
    { pageId: "antibiotic-safety", order: 1, type: "medication", heading: "Antibiotic safety", body: "Antibiotics do not treat most viral colds. Use only when prescribed.", headingAr: "AR_PENDING__block_med_1__heading", bodyAr: "AR_PENDING__block_med_1__body", safety: "yellow" },
    { pageId: "ramadan-health", order: 1, type: "special", heading: "Ramadan note", body: "Medication and insulin plans during fasting need doctor review before Ramadan.", headingAr: "AR_PENDING__block_special_1__heading", bodyAr: "AR_PENDING__block_special_1__body", safety: "doctor_only" }
  ],

  redFlags: [
    { pageId: "chest-pain", order: 1, trigger: "Chest pain, pressure, heaviness, or chest pain with sweating, shortness of breath, fainting, or weakness.", action: "Seek emergency care now." },
    { pageId: "know-your-numbers", order: 2, trigger: "Very high blood pressure with chest pain, severe shortness of breath, weakness, vision change, or speech difficulty.", action: "Seek emergency care now." },
    { pageId: "cough-cold-symptoms", order: 3, trigger: "Cough or cold symptoms with severe breathing difficulty, confusion, chest pain, blue lips, or severe weakness.", action: "Seek urgent or emergency care." }
  ]
};
