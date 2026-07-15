# Batch 13 Research Register — Cross-App Clinical Consistency and Quality Review

**Release:** v042  
**Baseline:** v041  
**Date checked:** 2026-07-15  
**Patient-interface references:** hidden; this file is an offline editorial record.

## Scope

Cross-app wording consistency → content-status accuracy → emergency and red-flag consistency → medicine and supplement safety locks → monitoring and clinician-question consistency → duplicate-task review → Diet Builder metadata → Your Plan and SHINE Path wording → print safety → research-register and schema integrity

This batch is a quality review. It does not convert `researched` content into `approved` content and does not complete the deferred Exercise, Mobility, and Joint Health pathway.

## Source records

### CONSISTENCY_FDA_DRUG_INTERACTIONS
- Organization: U.S. Food and Drug Administration
- Title: Drug Interactions: What You Should Know
- URL: https://www.fda.gov/drugs/resources-drugs/drug-interactions-what-you-should-know
- Date checked: 2026-07-15
- Claims supported: medicine reviews should include prescription medicines, nonprescription medicines, vitamins, botanicals, minerals, supplements, and relevant foods; clinician or pharmacist review is appropriate before treatment changes.
- Pages affected: cross-app medicine and supplement safety wording; Action Path question labels; dosing locks.
- Safety notes: no product-specific spacing, dose, stop, restart, or missed-dose instruction is added.
- Review status: researched; product-specific instructions remain clinical-review-required.

### CONSISTENCY_FDA_SUPPLEMENT_QA
- Organization: U.S. Food and Drug Administration
- Title: Questions and Answers on Dietary Supplements
- URL: https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements
- Date checked: 2026-07-15
- Claims supported: supplements may interact with medicines or other supplements and should be discussed with a doctor, pharmacist, or other health professional.
- Pages affected: supplement library, supplement warnings, treatment Plan Core, dosing-lock validation.
- Safety notes: researched supplement information is not treated as approval to start or change a product.
- Review status: researched; dosing, interactions, pregnancy, childhood, kidney, liver, surgery, and emergency actions remain clinical-review-required.

### CONSISTENCY_ODS_SUPPLEMENT_SAFETY
- Organization: NIH Office of Dietary Supplements
- Title: Dietary Supplements: What You Need to Know
- URL: https://ods.od.nih.gov/factsheets/WYNTK-Consumer/
- Date checked: 2026-07-15
- Claims supported: supplements can cause side effects and interactions, particularly at high amounts, when multiple products overlap, or when supplements replace prescribed treatment.
- Pages affected: supplement library, treatment safety wording, print safety review.
- Safety notes: the app does not display universal doses or imply that “natural” means safe.
- Review status: researched.

### CONSISTENCY_CDC_STROKE_SIGNS
- Organization: U.S. Centers for Disease Control and Prevention
- Title: Signs and Symptoms of Stroke
- URL: https://www.cdc.gov/stroke/signs-symptoms/index.html
- Date checked: 2026-07-15
- Claims supported: sudden one-sided weakness or numbness, speech or understanding difficulty, vision change, balance or coordination loss, and sudden severe headache are emergency warning signs.
- Pages affected: emergency pathway and print-safety consistency review.
- Safety notes: local emergency numbers, transport, aspirin, and treatment-window instructions remain clinical-review-required.
- Review status: researched.

### CONSISTENCY_CDC_HEART_ATTACK
- Organization: U.S. Centers for Disease Control and Prevention
- Title: About Heart Attack Symptoms, Risk, and Recovery
- URL: https://www.cdc.gov/heart-disease/about/heart-attack.html
- Date checked: 2026-07-15
- Claims supported: possible heart-attack warning signs include chest discomfort, shortness of breath, upper-body discomfort, nausea, lightheadedness, and unusual tiredness.
- Pages affected: emergency pathway and print-safety consistency review.
- Safety notes: symptoms are framed as warning signs, not proof of a diagnosis; aspirin and transport instructions remain clinical-review-required.
- Review status: researched.

### CONSISTENCY_MEDLINEPLUS_EMERGENCIES
- Organization: MedlinePlus, U.S. National Library of Medicine
- Title: Recognizing medical emergencies
- URL: https://medlineplus.gov/ency/article/001927.htm
- Date checked: 2026-07-15
- Claims supported: severe or rapidly worsening symptoms may require local emergency services; educational planning tools should not delay emergency care.
- Pages affected: print safety, emergency red flags, cross-app urgent-language review.
- Safety notes: no national emergency number is hard-coded in the patient interface.
- Review status: researched; localization remains clinical-review-required.

## Review method

1. Parsed every SHINE, HEAL, DR, Diet Builder, Plan, and SHINE Path entity.
2. Checked IDs, links, content statuses, templates, source IDs, research batches, related entities, clinical-review queues, and dosing locks.
3. Compared emergency, medicine, supplement, laboratory, monitoring, and clinician-question language across batches.
4. Checked the patient-facing content store for visible online URLs.
5. Reviewed repeated tasks to distinguish unsafe duplicates from legitimate source-specific repetition.
6. Compared editable and standalone sources and verified ZIP integrity.

## Internal review status

- 85 patient-facing entities remain `researched`.
- 7 Exercise, Mobility, and Joint Health entities are now explicitly `placeholder` because Batch 11 remains deferred.
- No entity is changed to `approved`.
- Sensitive fields continue to use `clinical-review-required`.

## Clinical-review queue

- All medication and supplement dosing, route, timing, duration, interactions, missed-dose, stop/restart, pregnancy, childhood, kidney, liver, surgery, toxicity, and emergency instructions.
- All emergency localization, transport, first aid, rescue-device, poison-service, and condition-specific action thresholds.
- All numeric targets that require individualized interpretation.
- The complete deferred Exercise, Mobility, and Joint Health pathway.
