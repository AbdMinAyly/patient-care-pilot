/* EDITABLE CONTENT STORE — data only, no application functions. */
window.PATIENT_CARE_CONTENT = {
  "meta": {
    "schemaVersion": 2,
    "contentVersion": "v020",
    "offlineOnly": true,
    "referencesVisible": false
  },
  "ui": {
    "modeDescriptions": {
      "shine": "Teaching for Sleep, Happiness, Immunity, Nutrition, and Exercise.",
      "heal": "Health support: diet, lifestyle, supplements, and normal vital ranges.",
      "dr": "Doctor space: symptoms, acute conditions, chronic conditions, medications, and ER.",
      "summary": "Saved SHINE lessons, HEAL health items, DR topics, and doctor questions. Stored only on this device."
    },
    "searchPlaceholders": {
      "heal": "Search HEAL: diet, BP, sugar, iron, supplements...",
      "dr": "Search DR: fatigue, diabetes, insulin, ER..."
    }
  },
  "shine": [
    {
      "id": "sleep",
      "letter": "S",
      "title": "Sleep",
      "tag": "Brain and body recovery",
      "subtitle": "Sleep is active recovery for memory, emotional control, appetite regulation, tissue repair, immune defense, and safe daytime performance.",
      "why": [
        "Sleep is not passive time. The brain uses sleep to support learning, memory, attention, decision-making, and emotional control, while the body carries out repair and recovery work.",
        "Deep sleep supports growth-hormone release involved in cell and tissue repair. Sleep also influences hunger and fullness signals, insulin response, and the body's defense against infection.",
        "For most adults, seven or more hours is a useful starting point, but duration is only one part of healthy sleep. Timing, regularity, interruptions, and whether sleep feels restorative also matter.",
        "Poor sleep can slow reaction time and increase mistakes. That matters for driving, work, exercise, medication use, and any task that depends on attention.",
        "A practical sleep foundation is consistency: keep wake time steady, make the hour before bed quieter and dimmer, avoid late caffeine and heavy meals, and keep the bedroom quiet, dark, and comfortably cool."
      ],
      "good": [
        {
          "to": "happiness",
          "icon": "🧠",
          "text": "Happiness is easier to protect after enough sleep because the brain is better able to manage emotions, make decisions, solve problems, and cope with change."
        },
        {
          "to": "nutrition",
          "icon": "🍽️",
          "text": "Nutrition is easier to regulate when sleep supports normal hunger and fullness signals and a healthier response to insulin, helping appetite and blood-sugar control work more normally."
        },
        {
          "to": "exercise",
          "icon": "🏃",
          "text": "Exercise is safer and more effective after adequate sleep because attention and reaction time improve, while deep sleep supports tissue repair and physical recovery."
        },
        {
          "to": "immunity",
          "icon": "🛡️",
          "text": "Immunity relies partly on sleep because regular sleep supports the body's defense response and gives recovery processes time to work."
        }
      ],
      "bad": [
        {
          "to": "happiness",
          "icon": "☁️",
          "text": "Happiness becomes harder to protect when sleep is poor because sleep loss weakens emotional control, judgment, and the ability to cope with stress."
        },
        {
          "to": "nutrition",
          "icon": "🍽️",
          "text": "Nutrition can become less stable when sleep is poor because hunger and fullness signals shift and insulin response may worsen, making cravings, meal timing, and glucose control harder to manage."
        },
        {
          "to": "exercise",
          "icon": "⚠️",
          "text": "Exercise can become less safe and less effective when sleep is poor because reaction time, attention, coordination, and recovery decline."
        },
        {
          "to": "immunity",
          "icon": "🛡️",
          "text": "Immunity can be weakened by ongoing sleep deficiency because the body's normal defense response becomes less effective."
        }
      ],
      "drLinks": [
        {
          "id": "insomnia",
          "title": "Insomnia",
          "text": "Difficulty falling asleep, staying asleep, or getting restorative sleep despite enough time and opportunity."
        },
        {
          "id": "sleep-apnea",
          "title": "Sleep apnea",
          "text": "Loud snoring, gasping, pauses in breathing, morning headache, or strong daytime sleepiness."
        },
        {
          "id": "restless-legs",
          "title": "Restless legs syndrome",
          "text": "An uncomfortable urge to move the legs that becomes worse at rest and can delay or interrupt sleep."
        },
        {
          "id": "asthma",
          "title": "Asthma",
          "text": "Night cough, wheeze, chest tightness, or shortness of breath that wakes the person or prevents restful sleep."
        },
        {
          "id": "headache",
          "title": "Headache or pain",
          "text": "Migraine, tension headache, or other pain can delay sleep, cause awakenings, or leave sleep unrefreshing."
        }
      ],
      "healLinks": [
        {
          "id": "sleep-schedule",
          "title": "Keep a steady sleep schedule",
          "text": "Use a consistent wake time and keep weekend timing close to weekdays so the body clock receives a clear daily signal."
        },
        {
          "id": "sleep-wind-down",
          "title": "Protect the hour before bed",
          "text": "Shift to quieter activities and reduce bright screens, intense work, or emotional stimulation before bedtime."
        },
        {
          "id": "sleep-environment",
          "title": "Set up the bedroom for sleep",
          "text": "Keep the room quiet, dark, relaxing, and comfortably cool, and reduce light or noise that repeatedly wakes you."
        },
        {
          "id": "sleep-daylight-activity",
          "title": "Use daylight and regular movement",
          "text": "Spend time outside when possible and stay physically active during the day to support a stronger sleep-wake rhythm."
        },
        {
          "id": "sleep-food-caffeine",
          "title": "Time caffeine, meals, and alcohol carefully",
          "text": "Avoid caffeine late in the day, heavy meals close to bedtime, and alcohol as a sleep aid because each can interfere with sleep."
        }
      ],
      "headings": {
        "why": "1. Why Sleep matters",
        "positive": "2. How Sleep helps SHINE",
        "negative": "3. How poor Sleep hurts SHINE",
        "habits": "4. Good habits that can improve Sleep",
        "conditions": "Common conditions that can disrupt Sleep"
      }
    },
    {
      "id": "happiness",
      "letter": "H",
      "title": "Happiness",
      "tag": "Emotional well-being",
      "subtitle": "Happiness in SHINE means emotional well-being: managing emotions, finding meaning, staying connected, and recovering after stress.",
      "why": [
        "Happiness does not mean feeling cheerful all the time. Emotional well-being means recognizing and managing emotions, maintaining supportive relationships, and keeping a sense of meaning or purpose.",
        "Strong emotional well-being helps people adapt to uncertainty, stress, disagreement, and change. It supports problem-solving, asking for help, and returning to steadiness after difficult experiences.",
        "Mental and physical health are connected. Small acts of self-care—regular movement, steady meals, hydration, sleep, relaxation, realistic goals, gratitude, and social connection—can support both.",
        "Stress is a normal response, but long-lasting stress can contribute to sleep problems, headaches, digestive symptoms, and worsening asthma. Recovery habits matter before stress becomes the entire routine.",
        "Severe or distressing symptoms lasting two weeks or more—such as major sleep or appetite change, loss of interest, difficulty functioning, or unsafe thoughts—need professional assessment rather than SHINE teaching alone."
      ],
      "good": [
        {
          "to": "sleep",
          "icon": "🌙",
          "text": "Sleep becomes easier to protect when emotional well-being supports calmer routines, realistic priorities, and healthier ways of handling worry before bedtime."
        },
        {
          "to": "nutrition",
          "icon": "🥗",
          "text": "Nutrition becomes more consistent when regular meals, hydration, and awareness of caffeine or alcohol are used to support energy and focus instead of reacting to stress."
        },
        {
          "to": "exercise",
          "icon": "🚶",
          "text": "Exercise is easier to begin when goals are realistic and small amounts count; movement can also reduce anxiety and strengthen daily structure."
        },
        {
          "to": "immunity",
          "icon": "🛡️",
          "text": "Immunity benefits indirectly when emotional well-being makes sleep, food, movement, recovery, and medical care easier to maintain during stressful periods."
        }
      ],
      "bad": [
        {
          "to": "sleep",
          "icon": "🌙",
          "text": "Sleep can deteriorate when worry, tension, racing thoughts, or late-night coping habits keep the nervous system activated."
        },
        {
          "to": "nutrition",
          "icon": "🥗",
          "text": "Nutrition can become irregular when stress changes appetite, leads to skipped meals, reduces hydration, or increases reliance on caffeine, alcohol, or low-effort food."
        },
        {
          "to": "exercise",
          "icon": "🪫",
          "text": "Exercise can disappear when low mood reduces motivation, confidence, concentration, or the ability to complete usual activities."
        },
        {
          "to": "immunity",
          "icon": "🛡️",
          "text": "Immunity-supporting routines can weaken when chronic stress disrupts sleep, meals, movement, and follow-up care for long periods."
        }
      ],
      "drLinks": [
        {
          "id": "depression",
          "title": "Depression",
          "text": "Persistent low mood, loss of interest, low energy, sleep or appetite change, and reduced daily function."
        },
        {
          "id": "anxiety",
          "title": "Anxiety disorders",
          "text": "Excessive fear or worry, physical tension, panic, avoidance, or difficulty controlling anxious thoughts."
        },
        {
          "id": "chronic-stress",
          "title": "Chronic stress",
          "text": "Long-lasting stress that begins to affect sleep, concentration, headaches, digestion, breathing, or daily function."
        },
        {
          "id": "insomnia",
          "title": "Insomnia",
          "text": "Ongoing difficulty falling asleep or staying asleep can worsen emotional regulation and daytime coping."
        },
        {
          "id": "headache",
          "title": "Headache or chronic pain",
          "text": "Repeated pain can reduce sleep, concentration, activity, and enjoyment and may need medical review."
        }
      ],
      "headings": {
        "why": "1. Why Happiness matters",
        "positive": "2. How Happiness helps SHINE",
        "negative": "3. How low emotional well-being hurts SHINE",
        "habits": "4. Good habits that can improve Happiness",
        "conditions": "Common conditions that can affect emotional well-being"
      },
      "healLinks": [
        {
          "id": "wellbeing-connection",
          "title": "Protect real social connection",
          "text": "Choose one practical contact: a conversation, shared meal, message, visit, or request for support."
        },
        {
          "id": "wellbeing-movement",
          "title": "Use movement as a daily reset",
          "text": "Start with a short walk or another manageable activity; small amounts count and can support mood and health."
        },
        {
          "id": "wellbeing-relaxation",
          "title": "Practice a relaxation response",
          "text": "Use slow breathing, muscle relaxation, mindfulness, prayer, or another calming practice that is safe and acceptable to you."
        },
        {
          "id": "wellbeing-goals",
          "title": "Set realistic goals and priorities",
          "text": "Decide what must be done now, what can wait, and what one small success would look like today."
        },
        {
          "id": "wellbeing-foundations",
          "title": "Protect sleep, meals, and hydration",
          "text": "Emotional well-being is harder to maintain when the body is sleep-deprived, underfed, dehydrated, or overloaded with caffeine or alcohol."
        }
      ]
    },
    {
      "id": "immunity",
      "letter": "I",
      "title": "Immunity",
      "tag": "Defense and recovery",
      "subtitle": "Immunity is a coordinated defense system—not a single vitamin, food, or supplement—and it depends on barriers, immune cells, antibodies, recovery, and adequate nutrition.",
      "why": [
        "The immune system uses physical barriers such as skin and the gut lining, fast innate defenses, and slower adaptive defenses involving B cells, T cells, and antibodies.",
        "Vaccination trains adaptive immunity to recognize specific threats. Everyday hygiene reduces exposure, while sleep and recovery support the body's response when exposure occurs.",
        "Adequate vitamins and minerals are necessary for normal immune function. Deficiencies can weaken immunity, but taking extra supplements without a deficiency usually does not create a stronger-than-normal immune system.",
        "A varied, nutrient-dense diet is more reliable than chasing one 'immune-boosting' ingredient. Protein, vegetables, fruits, whole grains, legumes, nuts, seeds, and appropriate fortified foods can all contribute.",
        "Repeated or unusually severe infections, unexplained weight loss, poor wound healing, or immune-suppressing treatment require DR assessment rather than self-treatment with supplements."
      ],
      "good": [
        {
          "to": "nutrition",
          "icon": "🥕",
          "text": "Nutrition supplies the protein, vitamins, minerals, and energy immune cells need; true nutrient deficiencies can impair normal immune responses."
        },
        {
          "to": "sleep",
          "icon": "🌙",
          "text": "Sleep gives the body protected recovery time and supports the normal defense response used against common infections."
        },
        {
          "to": "exercise",
          "icon": "🚶",
          "text": "Exercise supports overall health, and emerging evidence suggests regular physical activity may also help immune function."
        },
        {
          "to": "happiness",
          "icon": "🤝",
          "text": "Happiness and emotional resilience can make it easier to maintain sleep, food, movement, hygiene, and medical follow-up during stressful periods."
        }
      ],
      "bad": [
        {
          "to": "nutrition",
          "icon": "🥕",
          "text": "Nutrition problems can weaken immunity when intake is too limited or deficiencies develop in nutrients required for immune-cell and barrier function."
        },
        {
          "to": "sleep",
          "icon": "🌙",
          "text": "Sleep deficiency can change the body's defense response and reduce the recovery time available during illness."
        },
        {
          "to": "exercise",
          "icon": "🪑",
          "text": "Exercise benefits are lost when inactivity becomes the default, reducing a major support for cardiovascular, metabolic, bone, and overall health."
        },
        {
          "to": "happiness",
          "icon": "🌧️",
          "text": "Happiness can suffer when repeated illness interrupts work, family life, movement, sleep, and confidence in the body."
        }
      ],
      "drLinks": [
        {
          "id": "diabetes",
          "title": "Diabetes",
          "text": "High glucose can increase infection risk and slow healing, especially when diabetes is not well controlled."
        },
        {
          "id": "immune-deficiency",
          "title": "Immune deficiency",
          "text": "Inherited or acquired problems can reduce the body's ability to fight infections normally."
        },
        {
          "id": "autoimmune-disease",
          "title": "Autoimmune disease",
          "text": "The immune system mistakenly attacks the body's own tissues and may require immune-modifying treatment."
        },
        {
          "id": "malnutrition",
          "title": "Malnutrition or nutrient deficiency",
          "text": "Too little energy, protein, or key micronutrients can impair immune function and recovery."
        },
        {
          "id": "cancer-treatment",
          "title": "Cancer treatment or immune suppression",
          "text": "Chemotherapy, some biologic medicines, steroids, or transplant medicines can reduce immune defenses."
        }
      ],
      "headings": {
        "why": "1. Why Immunity matters",
        "positive": "2. How Immunity supports SHINE",
        "negative": "3. How weakened Immunity affects SHINE",
        "habits": "4. Good habits that can support Immunity",
        "conditions": "Common conditions that can affect immune function"
      },
      "healLinks": [
        {
          "id": "immunity-food-variety",
          "title": "Build nutrient variety through food",
          "text": "Use a mix of protein foods, vegetables, fruits, whole grains, legumes, nuts, seeds, and suitable fortified foods rather than relying on one ingredient."
        },
        {
          "id": "immunity-sleep-recovery",
          "title": "Protect sleep and recovery",
          "text": "Keep a regular sleep routine and allow recovery time when ill instead of trying to replace rest with stimulants."
        },
        {
          "id": "immunity-activity",
          "title": "Move regularly without overtraining",
          "text": "Use consistent, appropriate activity and allow recovery when fever, severe fatigue, breathing symptoms, or acute illness are present."
        },
        {
          "id": "immunity-hygiene",
          "title": "Use practical infection-prevention habits",
          "text": "Hand hygiene, safe food handling, respiratory etiquette, and clinician-guided vaccination are more dependable than unproven 'boosters.'"
        },
        {
          "id": "immunity-supplement-caution",
          "title": "Use supplements only for a clear reason",
          "text": "Supplements can help correct inadequate intake or deficiency, but dose, interactions, pregnancy, kidney disease, and other risks need review."
        }
      ]
    },
    {
      "id": "nutrition",
      "letter": "N",
      "title": "Nutrition",
      "tag": "Food pattern and fuel",
      "subtitle": "Nutrition is everyday food teaching: building a varied, nutrient-dense pattern that supports energy, digestion, chronic-disease prevention, and the other SHINE pillars.",
      "why": [
        "A healthy eating pattern emphasizes vegetables, fruits, protein foods, whole grains, healthy fats, and dairy or suitable alternatives while limiting added sugars, excess sodium, and saturated or trans fats.",
        "Nutrition affects more than weight. Food provides energy, protein for repair, fiber for bowel function and cholesterol management, and vitamins and minerals needed throughout the body.",
        "Variety matters because no single food supplies everything. Fresh, frozen, and lower-sodium canned foods can all be useful depending on cost, access, culture, and preparation time.",
        "Regular meals and adequate water can support energy and focus. Caffeine, alcohol, sugary drinks, and highly processed foods can affect sleep, mood, blood pressure, glucose, or appetite when they dominate the pattern.",
        "SHINE Nutrition teaches the everyday foundation. HEAL Diet gives condition-specific guidance for diabetes, hypertension, iron deficiency, constipation, cholesterol, and other needs."
      ],
      "good": [
        {
          "to": "immunity",
          "icon": "🛡️",
          "text": "Immunity depends on adequate protein and micronutrients; a varied eating pattern helps provide the building blocks immune cells and body barriers require."
        },
        {
          "to": "exercise",
          "icon": "🏃",
          "text": "Exercise is supported by regular energy intake, hydration, and enough protein and carbohydrate to match the person's activity and recovery needs."
        },
        {
          "to": "sleep",
          "icon": "🌙",
          "text": "Sleep is easier to protect when caffeine is timed earlier, large meals do not crowd bedtime, and hunger or reflux is not repeatedly waking the person."
        },
        {
          "to": "happiness",
          "icon": "🧠",
          "text": "Happiness and concentration are easier to support when meals and hydration are steady enough to prevent avoidable energy crashes and distraction."
        }
      ],
      "bad": [
        {
          "to": "immunity",
          "icon": "🛡️",
          "text": "Immunity can be impaired when restrictive or low-variety eating causes inadequate energy, protein, vitamins, or minerals."
        },
        {
          "to": "exercise",
          "icon": "🪫",
          "text": "Exercise becomes harder when dehydration, skipped meals, low energy intake, or poor recovery nutrition causes fatigue, dizziness, or weak performance."
        },
        {
          "to": "sleep",
          "icon": "🌙",
          "text": "Sleep can be disrupted by late caffeine, heavy meals, alcohol, reflux, hunger, or unstable glucose patterns."
        },
        {
          "to": "happiness",
          "icon": "☁️",
          "text": "Happiness and focus can become harder to maintain when irregular meals, dehydration, or heavy reliance on stimulants creates repeated energy swings."
        }
      ],
      "drLinks": [
        {
          "id": "diabetes",
          "title": "Diabetes",
          "text": "Glucose patterns, medication timing, carbohydrate intake, and low-sugar prevention may require individualized diet guidance."
        },
        {
          "id": "hypertension",
          "title": "Hypertension",
          "text": "Sodium intake, body weight, alcohol, potassium-rich foods, and medication effects may need review."
        },
        {
          "id": "cholesterol",
          "title": "High cholesterol",
          "text": "Saturated fat, fiber, overall dietary pattern, medications, and cardiovascular risk all influence management."
        },
        {
          "id": "iron-deficiency",
          "title": "Iron deficiency",
          "text": "Low iron intake, poor absorption, blood loss, or increased needs can cause fatigue and require testing before supplementation."
        },
        {
          "id": "constipation",
          "title": "Constipation",
          "text": "Fiber, fluid, activity, medicines, bowel habits, and red flags should be reviewed together."
        }
      ],
      "headings": {
        "why": "1. Why Nutrition matters",
        "positive": "2. How Nutrition helps SHINE",
        "negative": "3. How poor Nutrition hurts SHINE",
        "habits": "4. Good habits that can improve Nutrition",
        "conditions": "Common conditions that can affect Nutrition"
      },
      "healLinks": [
        {
          "id": "nutrition-variety",
          "title": "Build variety across the week",
          "text": "Rotate vegetables, fruits, protein sources, whole grains, legumes, nuts, seeds, and suitable dairy or alternatives."
        },
        {
          "id": "nutrition-plate",
          "title": "Use a balanced plate pattern",
          "text": "Build meals around vegetables or fruit, a protein source, a high-fiber carbohydrate, and water, then adapt portions to the person's needs."
        },
        {
          "id": "nutrition-water",
          "title": "Make water the default drink",
          "text": "Use water regularly and reduce drinks that add large amounts of sugar, caffeine, or alcohol."
        },
        {
          "id": "nutrition-limit",
          "title": "Reduce what crowds out better food",
          "text": "Limit excess added sugar, sodium, saturated fat, and frequent highly processed foods without turning eating into an all-or-nothing rule."
        },
        {
          "id": "nutrition-plan",
          "title": "Plan for the real week",
          "text": "Use shopping lists, simple meals, leftovers, frozen vegetables, canned beans, and practical food swaps that fit culture, budget, and time."
        }
      ]
    },
    {
      "id": "exercise",
      "letter": "E",
      "title": "Exercise",
      "tag": "Movement and capacity",
      "subtitle": "Exercise includes aerobic activity, strength, balance, flexibility, mobility, and reducing long periods of sitting—not only walking.",
      "why": [
        "Physical activity provides immediate benefits. A single moderate-to-vigorous session can improve sleep quality, reduce anxiety, and lower blood pressure.",
        "Regular activity lowers long-term risk of heart disease, stroke, type 2 diabetes, weight gain, falls, and several cancers while supporting bone health, balance, and coordination.",
        "Adults are generally advised to work toward at least 150 minutes of moderate-intensity aerobic activity each week plus muscle-strengthening activity on two days.",
        "The target does not need to be completed at once. Smaller sessions add up, and some activity is better than none. Starting with five or ten minutes can be a real beginning.",
        "Exercise must match the person. Chest pain, fainting, severe breathlessness, new neurologic symptoms, unstable glucose, significant injury, or severe illness require DR or urgent assessment rather than pushing through."
      ],
      "good": [
        {
          "to": "sleep",
          "icon": "🌙",
          "text": "Sleep quality can improve after physical activity, and a regular daytime movement pattern helps reinforce a healthier daily rhythm."
        },
        {
          "to": "happiness",
          "icon": "🧠",
          "text": "Happiness benefits because physical activity can reduce feelings of anxiety and lowers long-term risk of depression while creating structure and achievable wins."
        },
        {
          "to": "nutrition",
          "icon": "🥗",
          "text": "Nutrition becomes easier to plan when activity goals make hydration, meal timing, protein, and recovery needs more visible."
        },
        {
          "to": "immunity",
          "icon": "🛡️",
          "text": "Immunity may benefit from regular physical activity, although exercise should support—not replace—sleep, nutrition, vaccination, and medical care."
        }
      ],
      "bad": [
        {
          "to": "sleep",
          "icon": "🌙",
          "text": "Sleep loses one of its supports when the day contains very little movement, especially when inactivity is combined with long sitting and irregular routines."
        },
        {
          "to": "happiness",
          "icon": "☁️",
          "text": "Happiness can suffer when inactivity removes a proven way to reduce anxiety, support confidence, and create daily structure."
        },
        {
          "to": "nutrition",
          "icon": "⚖️",
          "text": "Nutrition goals can become harder to match to the body when long inactivity changes energy needs and reduces the routine around meals, hydration, and recovery."
        },
        {
          "to": "immunity",
          "icon": "🛡️",
          "text": "Immunity loses a whole-body health support when regular activity disappears, although more exercise is not always better during acute illness or inadequate recovery."
        }
      ],
      "drLinks": [
        {
          "id": "arthritis",
          "title": "Arthritis or joint pain",
          "text": "Pain, stiffness, swelling, and reduced range of motion may require activity modification rather than complete inactivity."
        },
        {
          "id": "asthma",
          "title": "Asthma",
          "text": "Exercise can trigger symptoms in some people, but a clinician-guided asthma plan can often support safe activity."
        },
        {
          "id": "heart-disease",
          "title": "Heart disease",
          "text": "Chest pain, unusual breathlessness, fainting, palpitations, or known cardiovascular disease may require exercise clearance or limits."
        },
        {
          "id": "anemia",
          "title": "Anemia",
          "text": "Low oxygen-carrying capacity can cause fatigue, breathlessness, dizziness, and reduced exercise tolerance."
        },
        {
          "id": "fatigue",
          "title": "Persistent fatigue",
          "text": "Ongoing exhaustion may reflect sleep, mood, infection, endocrine, nutritional, medication, or other causes that need assessment."
        }
      ],
      "headings": {
        "why": "1. Why Exercise matters",
        "positive": "2. How Exercise helps SHINE",
        "negative": "3. How too little Exercise affects SHINE",
        "habits": "4. Good habits that can improve Exercise",
        "conditions": "Common conditions that can affect Exercise"
      },
      "healLinks": [
        {
          "id": "exercise-start-small",
          "title": "Start below your maximum",
          "text": "Choose an amount you can repeat without severe pain, dizziness, or exhaustion, then build gradually."
        },
        {
          "id": "exercise-aerobic",
          "title": "Build aerobic activity",
          "text": "Use brisk walking, cycling, swimming, dancing, or another activity that raises breathing while still matching safety and ability."
        },
        {
          "id": "exercise-strength",
          "title": "Include strength work",
          "text": "Train major muscle groups on at least two days per week using body weight, bands, machines, or suitable household resistance."
        },
        {
          "id": "exercise-sit-less",
          "title": "Break up long sitting",
          "text": "Stand, stretch, or walk briefly during the day; movement does not need to be a full workout to count."
        },
        {
          "id": "exercise-recovery",
          "title": "Plan recovery and warning signs",
          "text": "Balance activity with sleep, hydration, food, easier days, and medical review when symptoms are unstable."
        }
      ]
    }
  ],
  "healSections": [
    {
      "id": "diet",
      "title": "Diet",
      "icon": "🍽️",
      "subtitle": "Condition-specific food guidance. Different from SHINE Nutrition.",
      "items": [
        {
          "id": "diabetes-diet",
          "title": "Diabetes diet",
          "subtitle": "Plate balance, carbs, fiber, hydration, and glucose-friendly patterns.",
          "body": [
            "Use regular meals when possible. Pair carbohydrates with protein, vegetables, and healthy fats.",
            "Choose high-fiber carbohydrates more often: oats, beans, lentils, whole grains, vegetables, and whole fruit.",
            "Limit sugary drinks because they can raise blood glucose quickly.",
            "Check your clinician plan for fasting, post-meal, bedtime, and HbA1c targets."
          ]
        },
        {
          "id": "hypertension-diet",
          "title": "Hypertension diet",
          "subtitle": "Lower-salt pattern, potassium-rich foods when appropriate, and realistic swaps.",
          "body": [
            "Use herbs, lemon, garlic, vinegar, and spices instead of extra salt.",
            "Reduce highly salted foods such as processed meats, chips, salty sauces, and many packaged meals.",
            "Ask a clinician before increasing potassium if kidney disease or certain blood pressure medicines are present."
          ]
        },
        {
          "id": "iron-rich-diet",
          "title": "Iron-rich diet",
          "subtitle": "Food support for suspected low iron; confirm with labs when needed.",
          "body": [
            "Iron-rich foods include meat, poultry, fish, beans, lentils, spinach, fortified grains, and nuts.",
            "Vitamin C foods such as citrus, tomato, peppers, and strawberries can help plant iron absorption.",
            "Tea or coffee close to iron-rich meals can reduce absorption for some people."
          ]
        },
        {
          "id": "constipation-diet",
          "title": "Constipation diet",
          "subtitle": "Fiber, fluids, routine, and movement support.",
          "body": [
            "Increase fiber slowly to avoid bloating. Use vegetables, fruit, oats, beans, lentils, and whole grains.",
            "Drink enough fluids as fiber increases.",
            "Walking and regular bathroom timing can support bowel rhythm."
          ]
        },
        {
          "id": "sleep-food-caffeine",
          "title": "Evening food, caffeine, and alcohol",
          "subtitle": "Time stimulants and meals so they do not interfere with sleep.",
          "body": [
            "Caffeine can remain active for hours. Avoid it in the afternoon or evening if it delays sleep or makes sleep lighter.",
            "Avoid heavy or very large meals within a few hours of bedtime. Reflux, fullness, or discomfort can make it harder to fall asleep or stay asleep.",
            "Alcohol may make someone feel sleepy at first but can disturb sleep later in the night. It should not be used as a sleep treatment.",
            "A light snack can be reasonable when hunger itself prevents sleep, but persistent nighttime eating, reflux, or glucose concerns may need a tailored plan."
          ]
        },
        {
          "id": "immunity-food-variety",
          "title": "Food variety for immune function",
          "subtitle": "Adequate protein and micronutrients support normal immune-cell and barrier function.",
          "body": [
            "Use a varied pattern rather than one 'immune' food: protein foods, vegetables, fruits, whole grains, legumes, nuts, seeds, and suitable fortified foods.",
            "A diagnosed deficiency may need treatment, but more is not automatically better when intake is already adequate."
          ]
        },
        {
          "id": "nutrition-variety",
          "title": "Build food variety",
          "subtitle": "Different foods contribute different nutrients, fiber, and protein.",
          "body": [
            "Rotate vegetables, fruits, protein sources, whole grains, legumes, nuts, seeds, and suitable dairy or alternatives.",
            "Fresh, frozen, and lower-sodium canned foods can all fit."
          ]
        },
        {
          "id": "nutrition-plate",
          "title": "Use a balanced plate pattern",
          "subtitle": "A simple meal structure is easier to repeat than a perfect diet.",
          "body": [
            "Build around vegetables or fruit, a protein source, a high-fiber carbohydrate, and water.",
            "Adjust portions for hunger, activity, age, pregnancy, and medical needs."
          ]
        },
        {
          "id": "nutrition-water",
          "title": "Make water the default drink",
          "subtitle": "Hydration supports concentration, digestion, activity, and temperature control.",
          "body": [
            "Drink regularly rather than waiting for severe thirst.",
            "Fluid needs vary with heat, exercise, pregnancy, kidney or heart conditions, and some medicines."
          ]
        },
        {
          "id": "nutrition-limit",
          "title": "Limit what crowds out better food",
          "subtitle": "Reduce excess added sugar, sodium, and saturated or trans fats.",
          "body": [
            "Use gradual swaps instead of all-or-nothing restriction.",
            "Read labels when useful and compare similar products for sodium, added sugar, and saturated fat."
          ]
        },
        {
          "id": "nutrition-plan",
          "title": "Plan for the real week",
          "subtitle": "Healthy eating must fit culture, budget, time, and access.",
          "body": [
            "Use a short shopping list, simple repeatable meals, leftovers, frozen vegetables, canned beans, and practical food swaps.",
            "Keep one easy backup meal for days when time or energy is low."
          ]
        }
      ]
    },
    {
      "id": "lifestyle",
      "title": "Lifestyle",
      "icon": "🧭",
      "subtitle": "Health support routines used with diet, supplements, and doctor care.",
      "items": [
        {
          "id": "bp-lifestyle",
          "title": "Blood pressure lifestyle",
          "subtitle": "Salt awareness, movement, sleep, weight, stress, and medication consistency.",
          "body": [
            "Home BP tracking can help if done correctly and shared with a clinician.",
            "Reduce sodium-heavy foods and increase daily movement when safe.",
            "Sleep, stress, and medication adherence can affect readings."
          ]
        },
        {
          "id": "sugar-lifestyle",
          "title": "Blood sugar lifestyle",
          "subtitle": "Meal timing, activity, hydration, sleep, and glucose checks.",
          "body": [
            "Post-meal walking can help some people manage post-meal glucose.",
            "Irregular sleep and skipped meals can make glucose patterns harder to understand.",
            "Bring your readings to your clinician rather than changing medicines alone."
          ]
        },
        {
          "id": "cholesterol-lifestyle",
          "title": "Cholesterol lifestyle",
          "subtitle": "Fiber, fats, activity, and medication discussion.",
          "body": [
            "Soluble fiber foods such as oats, beans, lentils, and some fruits can support cholesterol goals.",
            "Replace some saturated fats with unsaturated fats when appropriate.",
            "Statins and other medicines should be discussed in DR/Medications."
          ]
        },
        {
          "id": "sleep-schedule",
          "title": "Steady sleep schedule",
          "subtitle": "Use regular sleep and wake timing to strengthen the body clock.",
          "body": [
            "Choose a wake time you can follow most days. A steady wake time is often more practical than forcing the exact same bedtime every night.",
            "Keep weekday and weekend timing reasonably close. Large shifts can disturb the sleep–wake rhythm and make the next night harder.",
            "Give yourself enough time in bed for the sleep your age group needs. For most adults, 7 or more hours is a useful starting point.",
            "If shift work or caregiving makes a fixed schedule difficult, protect a repeatable sleep window and reduce light and noise during that period."
          ]
        },
        {
          "id": "sleep-wind-down",
          "title": "Wind-down and screen routine",
          "subtitle": "Use the final hour to lower light, stimulation, and mental effort.",
          "body": [
            "Move demanding work, arguments, and heavy problem-solving earlier when possible. The last part of the evening should signal that the day is ending.",
            "Turn off or reduce bright electronic screens before bed. CDC guidance suggests switching devices off at least 30 minutes before bedtime.",
            "Use a repeatable quiet routine such as washing, reading, prayer, breathing, light stretching, or preparing clothes for the next day.",
            "A wind-down routine supports sleep habits, but persistent insomnia may need clinical evaluation rather than more effort alone."
          ]
        },
        {
          "id": "sleep-environment",
          "title": "Bedroom setup for sleep",
          "subtitle": "Reduce light, noise, heat, and interruptions that break sleep quality.",
          "body": [
            "Keep the bedroom quiet, dark, relaxing, and comfortably cool. Repeated light or noise can fragment sleep even when total hours look adequate.",
            "Use practical fixes such as curtains, an eye mask, earplugs, quieter phone settings, or moving noisy devices away from the bed when safe and appropriate.",
            "Keep the bed mainly associated with sleep. Working, scrolling, or watching stimulating content in bed can make it harder to settle.",
            "If snoring, gasping, pain, coughing, leg discomfort, or repeated waking continues despite a good environment, review possible conditions in DR."
          ]
        },
        {
          "id": "sleep-daylight-activity",
          "title": "Daylight and daily movement",
          "subtitle": "Use daytime light and regular activity to support nighttime sleep.",
          "body": [
            "Spend time outside during the day when possible. Daylight helps reinforce the timing of the body’s sleep–wake rhythm.",
            "Be physically active regularly. Movement supports general health and can make healthy sleep patterns easier to maintain.",
            "Avoid very intense exercise in the final hour before bed if it leaves you alert or overheated. Earlier exercise may fit better for some people.",
            "If naps make nighttime sleep harder, shorten them or move them earlier. NHLBI notes that adults who nap should generally keep naps brief."
          ]
        },
        {
          "id": "wellbeing-connection",
          "title": "Protect real social connection",
          "subtitle": "Supportive relationships are part of emotional well-being.",
          "body": [
            "Choose one realistic contact: a conversation, shared meal, message, visit, or request for practical help.",
            "Connection should be supportive, not forced. Set boundaries with interactions that repeatedly increase distress."
          ]
        },
        {
          "id": "wellbeing-movement",
          "title": "Use movement as a daily reset",
          "subtitle": "Small amounts of activity can support mood and health.",
          "body": [
            "Start with a short walk, gentle mobility, or another manageable activity. Small amounts add up.",
            "Choose something repeatable rather than waiting for motivation to become perfect."
          ]
        },
        {
          "id": "wellbeing-relaxation",
          "title": "Practice a relaxation response",
          "subtitle": "Slow breathing and other calming practices can reduce physical stress activation.",
          "body": [
            "Try slow breathing, progressive muscle relaxation, mindfulness, prayer, quiet reading, or time in nature.",
            "Stop and seek guidance if a practice increases panic, intrusive memories, or distress."
          ]
        },
        {
          "id": "wellbeing-goals",
          "title": "Set realistic goals and priorities",
          "subtitle": "Reduce overload by deciding what matters now and what can wait.",
          "body": [
            "Break large tasks into one visible next step.",
            "End the day by noticing what was completed instead of measuring only what remains."
          ]
        },
        {
          "id": "wellbeing-foundations",
          "title": "Protect sleep, meals, and hydration",
          "subtitle": "The brain handles stress less effectively when basic physical needs are repeatedly missed.",
          "body": [
            "Keep a regular sleep window, eat regular balanced meals, and drink water through the day.",
            "Notice whether caffeine or alcohol worsens sleep, anxiety, irritability, or energy swings."
          ]
        },
        {
          "id": "immunity-sleep-recovery",
          "title": "Sleep and recovery for immunity",
          "subtitle": "Recovery time supports the body's normal defense response.",
          "body": [
            "Keep a regular sleep routine and reduce avoidable sleep loss.",
            "During acute illness, prioritize fluids, rest, and clinician advice when symptoms are severe or persistent."
          ]
        },
        {
          "id": "immunity-activity",
          "title": "Regular activity without overtraining",
          "subtitle": "Appropriate activity supports whole-body health; illness may require temporary reduction.",
          "body": [
            "Use regular moderate activity when well and build gradually.",
            "Pause hard exercise and seek guidance with fever, chest symptoms, severe fatigue, dehydration, or breathing difficulty."
          ]
        },
        {
          "id": "immunity-hygiene",
          "title": "Practical infection-prevention habits",
          "subtitle": "Reduce exposure with reliable daily measures.",
          "body": [
            "Use hand hygiene, safe food handling, respiratory etiquette, and cleaning where appropriate.",
            "Discuss recommended vaccinations with a qualified clinician; vaccines train adaptive immunity against specific threats."
          ]
        },
        {
          "id": "exercise-start-small",
          "title": "Start below your maximum",
          "subtitle": "A repeatable starting point is more useful than one exhausting session.",
          "body": [
            "Choose an amount that does not cause severe pain, dizziness, or prolonged exhaustion.",
            "Increase one variable at a time: duration, frequency, or intensity."
          ]
        },
        {
          "id": "exercise-aerobic",
          "title": "Build aerobic activity",
          "subtitle": "Aerobic movement raises heart rate and breathing for sustained periods.",
          "body": [
            "Examples include brisk walking, cycling, swimming, dancing, or adapted seated activity.",
            "Work toward weekly goals gradually and choose an intensity that matches health and ability."
          ]
        },
        {
          "id": "exercise-strength",
          "title": "Include strength work",
          "subtitle": "Strength training supports muscles, bones, function, and independence.",
          "body": [
            "Train major muscle groups on at least two days per week when appropriate.",
            "Use body weight, bands, machines, or suitable household resistance with safe technique."
          ]
        },
        {
          "id": "exercise-sit-less",
          "title": "Break up long sitting",
          "subtitle": "Short movement breaks can add activity without becoming a full workout.",
          "body": [
            "Stand, stretch, or walk for a few minutes during long seated periods.",
            "Use stairs, household tasks, short walks, or movement during calls when safe."
          ]
        },
        {
          "id": "exercise-recovery",
          "title": "Plan recovery and warning signs",
          "subtitle": "Exercise improves health when the body can recover from it.",
          "body": [
            "Balance activity with sleep, hydration, food, and easier days.",
            "Stop and seek medical help for chest pain, fainting, severe breathlessness, sudden weakness, or new neurologic symptoms."
          ]
        }
      ]
    },
    {
      "id": "supplements",
      "title": "Supplements",
      "icon": "💊",
      "subtitle": "Education only. Dose and safety depend on labs, medicines, pregnancy, kidney/liver status, and clinician review.",
      "items": [
        {
          "id": "iron-supplement",
          "title": "Iron supplement",
          "subtitle": "Used for confirmed or suspected iron deficiency under clinician guidance.",
          "body": [
            "Dosing is locked in this prototype. Iron can cause constipation, nausea, dark stools, and interactions.",
            "Ask about labs: ferritin, CBC, iron studies, and when to recheck.",
            "Do not combine with other medicines without checking timing and interactions."
          ]
        },
        {
          "id": "vitamin-d",
          "title": "Vitamin D",
          "subtitle": "Often needs lab context, risk review, and safe dosing.",
          "body": [
            "Vitamin D status can be checked with blood testing when clinically appropriate.",
            "Too much can be harmful. Dose should not be guessed from internet content.",
            "Ask your clinician if kidney disease, high calcium, pregnancy, or interacting medicines are present."
          ]
        },
        {
          "id": "b12",
          "title": "Vitamin B12",
          "subtitle": "Can be relevant for fatigue, neuropathy symptoms, diet pattern, or metformin use.",
          "body": [
            "B12 deficiency can occur with some diets, absorption problems, and some medicines.",
            "Oral vs injection depends on cause, severity, and clinician plan.",
            "Ask whether testing or follow-up is needed."
          ]
        },
        {
          "id": "immunity-supplement-caution",
          "title": "Immune supplement caution",
          "subtitle": "Supplements can correct inadequate intake or deficiency but do not create unlimited immunity.",
          "body": [
            "Dose, duration, interactions, pregnancy, kidney or liver disease, and other medicines matter.",
            "Do not combine multiple products with overlapping ingredients without checking the total amount."
          ]
        }
      ]
    },
    {
      "id": "vitals",
      "title": "Normal vital ranges",
      "icon": "📊",
      "subtitle": "Targets from the reference guide. Confirm personal targets with clinician.",
      "items": [
        {
          "id": "bp-range",
          "title": "Blood pressure",
          "subtitle": "Reference target: less than 130/80 mmHg for many high-risk patients.",
          "body": [
            "Measure after resting, seated, with correct cuff size.",
            "One reading is less useful than a pattern.",
            "Ask your clinician for your personal target."
          ]
        },
        {
          "id": "sugar-range",
          "title": "Glucose ranges",
          "subtitle": "Reference: fasting 80–130, 2-hour post-meal <180, bedtime 110–150 mg/dL.",
          "body": [
            "Low sugar is often treated as urgent when under 70 mg/dL.",
            "Use the 15–15 rule if appropriate: 15 grams fast carbohydrate, recheck after 15 minutes.",
            "Follow your clinician plan, especially if using insulin or sulfonylureas."
          ]
        },
        {
          "id": "hba1c",
          "title": "HbA1c",
          "subtitle": "Reference goal in your document: less than 6.5% when appropriate and safe.",
          "body": [
            "HbA1c goals vary by age, pregnancy, hypoglycemia risk, and other conditions.",
            "Do not intensify medication without clinician review."
          ]
        },
        {
          "id": "ldl",
          "title": "LDL cholesterol",
          "subtitle": "Reference goal in your document: less than 100 mg/dL.",
          "body": [
            "Targets may be lower for people with high cardiovascular risk.",
            "Diet, activity, weight, diabetes control, and medicines may all be part of care."
          ]
        }
      ]
    }
  ],
  "drSections": [
    {
      "id": "symptoms",
      "title": "Symptoms",
      "icon": "🔎",
      "subtitle": "What the patient notices and wants to explain clearly.",
      "items": [
        {
          "id": "fatigue",
          "title": "Fatigue",
          "subtitle": "Tiredness, low energy, heavy body, or poor stamina.",
          "body": [
            "Possible causes can include poor sleep, iron deficiency, thyroid problems, diabetes patterns, infection, depression, medications, and many others.",
            "Add what started it, how long it lasted, sleep pattern, diet changes, bleeding, weight change, and medicines."
          ]
        },
        {
          "id": "low-sugar-symptoms",
          "title": "Low sugar symptoms",
          "subtitle": "Shaking, sweating, hunger, confusion, fast heartbeat, weakness, or fainting risk.",
          "body": [
            "This can be urgent, especially with insulin or some diabetes medicines.",
            "Follow your clinician plan. If severe confusion, seizure, or inability to swallow, seek emergency help."
          ]
        },
        {
          "id": "high-sugar-symptoms",
          "title": "High sugar symptoms",
          "subtitle": "Thirst, frequent urination, blurry vision, fatigue, weight loss, or dehydration.",
          "body": [
            "Very high glucose with vomiting, deep breathing, confusion, or dehydration can be emergency.",
            "Bring glucose readings, medications, and timing to the doctor."
          ]
        },
        {
          "id": "headache",
          "title": "Headache",
          "subtitle": "Head pain can disturb sleep or be worsened by poor sleep, missed meals, stress, or other causes.",
          "body": [
            "Tension headaches are often related to stress, neck/scalp/jaw muscle tension, missed sleep, missed meals, or alcohol.",
            "Seek urgent care for sudden severe headache, headache after head injury, stiff neck with fever, confusion, loss of consciousness, or eye/ear pain.",
            "Track timing, location, severity, triggers, sleep, meals, caffeine, medicines, and red flags."
          ]
        }
      ]
    },
    {
      "id": "acute",
      "title": "Acute conditions",
      "icon": "⚡",
      "subtitle": "Short-term problems that need clear next steps.",
      "items": [
        {
          "id": "cold-flu",
          "title": "Cold / flu-like illness",
          "subtitle": "Fever, cough, sore throat, body aches, congestion.",
          "body": [
            "Track fever duration, breathing, hydration, and red flags.",
            "High-risk patients may need earlier medical review."
          ]
        },
        {
          "id": "gastroenteritis",
          "title": "Vomiting / diarrhea",
          "subtitle": "Hydration, duration, blood, fever, and dehydration risk.",
          "body": [
            "Watch for dizziness, little urine, blood, severe abdominal pain, or persistent vomiting.",
            "Diabetes patients may need sick-day rules from their clinician."
          ]
        },
        {
          "id": "constipation",
          "title": "Constipation",
          "subtitle": "Hard stools, infrequent bowel movements, straining, or bloating.",
          "body": [
            "Ask about iron, opioids, dehydration, low fiber, low movement, thyroid issues, and red flags.",
            "Red flags include severe pain, vomiting, blood, weight loss, or sudden change."
          ]
        }
      ]
    },
    {
      "id": "chronic",
      "title": "Chronic",
      "icon": "🩺",
      "subtitle": "Long-term conditions that need monitoring, lifestyle, medications, and follow-up.",
      "items": [
        {
          "id": "diabetes",
          "title": "Diabetes",
          "subtitle": "Glucose, HbA1c, diet, medicines, foot/eye/kidney care, and sick-day planning.",
          "body": [
            "Bring readings, hypoglycemia events, medications, diet pattern, and questions.",
            "Ask about HbA1c goal, fasting/post-meal targets, kidney checks, eye exams, and foot care."
          ]
        },
        {
          "id": "hypertension",
          "title": "Hypertension",
          "subtitle": "Blood pressure patterns, home readings, salt, sleep, medicines, and cardiovascular risk.",
          "body": [
            "Bring home readings and cuff details.",
            "Ask about target BP, medication timing, side effects, kidney checks, and lifestyle priorities."
          ]
        },
        {
          "id": "cholesterol",
          "title": "Cholesterol",
          "subtitle": "LDL, cardiovascular risk, diet pattern, statins, and follow-up labs.",
          "body": [
            "Ask your clinician what LDL target fits your risk.",
            "Report muscle symptoms, pregnancy plans, liver disease, or interacting medicines before starting statins."
          ]
        },
        {
          "id": "sleep-apnea",
          "title": "Sleep apnea",
          "subtitle": "Breathing repeatedly stops and restarts during sleep; snoring, gasping, or daytime sleepiness can be clues.",
          "body": [
            "Sleep apnea can prevent enough oxygen during sleep and reduce sleep quality.",
            "A doctor may consider a sleep study if symptoms fit. CPAP and lifestyle changes are common treatments when diagnosed.",
            "Ask about sleep apnea if there is loud snoring, witnessed pauses, gasping, morning headaches, or strong daytime sleepiness."
          ]
        },
        {
          "id": "insomnia",
          "title": "Insomnia",
          "subtitle": "Trouble falling asleep, staying asleep, or getting good quality sleep despite enough opportunity.",
          "body": [
            "Insomnia can make daily activities harder and cause daytime sleepiness.",
            "Short-term insomnia may follow stress or schedule changes; chronic insomnia is usually more persistent and should be discussed with a clinician.",
            "Bring a sleep diary: bedtime, wake time, night waking, naps, caffeine, exercise, medicines, and stress triggers."
          ]
        },
        {
          "id": "restless-legs",
          "title": "Restless legs syndrome",
          "subtitle": "An urge to move the legs with uncomfortable sensations that are worse at rest and often worse at night.",
          "body": [
            "Movement may relieve the discomfort briefly, but symptoms can return and make it difficult to fall asleep or stay asleep.",
            "RLS may occur without a clear cause, or be associated with iron-deficiency anemia, pregnancy, certain illnesses, or medicines.",
            "Bring details about timing, leg sensations, medicines, caffeine, tobacco, alcohol, pregnancy, and any history of iron deficiency."
          ]
        },
        {
          "id": "asthma",
          "title": "Asthma",
          "subtitle": "A chronic airway condition that can cause wheeze, cough, chest tightness, or shortness of breath, sometimes at night.",
          "body": [
            "Asthma symptoms can be triggered by infections, allergens, exercise, cold air, smoke, or other triggers.",
            "Night symptoms can disturb sleep and may mean asthma control needs review.",
            "Ask about an asthma action plan, inhaler technique, triggers, and when to seek urgent care."
          ]
        },
        {
          "id": "depression",
          "title": "Depression",
          "subtitle": "Persistent low mood or loss of interest that affects sleep, appetite, energy, thinking, and daily function.",
          "body": [
            "Depression is more than a difficult day. Symptoms that persist, worsen, or interfere with usual tasks need assessment.",
            "Seek urgent help for suicidal thoughts, plans, inability to stay safe, or severe functional decline."
          ]
        },
        {
          "id": "anxiety",
          "title": "Anxiety disorders",
          "subtitle": "Excessive fear or worry that becomes difficult to control and affects daily life.",
          "body": [
            "Anxiety can appear as racing thoughts, avoidance, panic, muscle tension, poor sleep, stomach symptoms, or difficulty concentrating.",
            "Sudden chest pain, fainting, severe breathlessness, or new neurologic symptoms should not automatically be assumed to be anxiety."
          ]
        },
        {
          "id": "chronic-stress",
          "title": "Chronic stress",
          "subtitle": "Long-lasting stress that repeatedly activates physical and emotional stress responses.",
          "body": [
            "Chronic stress can worsen sleep disorders, headaches, digestive symptoms, and asthma and may contribute to anxiety or depression.",
            "Track triggers, body symptoms, sleep, caffeine, alcohol, coping methods, and the effect on daily function."
          ]
        },
        {
          "id": "immune-deficiency",
          "title": "Immune deficiency",
          "subtitle": "Reduced immune function that can lead to repeated, severe, unusual, or difficult-to-treat infections.",
          "body": [
            "Immune deficiency may be inherited or acquired through illness or treatment.",
            "Repeated infections, poor growth, unexplained weight loss, or unusual organisms need clinician assessment."
          ]
        },
        {
          "id": "autoimmune-disease",
          "title": "Autoimmune disease",
          "subtitle": "The immune system mistakenly attacks the body's own tissues.",
          "body": [
            "Symptoms depend on the organ or tissue involved and may come and go.",
            "Treatment may reduce immune activity, so infection risk, vaccines, and monitoring should be discussed with the treating clinician."
          ]
        },
        {
          "id": "malnutrition",
          "title": "Malnutrition or nutrient deficiency",
          "subtitle": "Too little energy, protein, or key nutrients can affect immunity, healing, strength, and organ function.",
          "body": [
            "Possible clues include weight loss, weakness, poor wound healing, mouth changes, anemia, or repeated infections.",
            "The cause may involve intake, absorption, illness, medicines, finances, or increased needs and should be investigated."
          ]
        },
        {
          "id": "cancer-treatment",
          "title": "Cancer treatment or immune suppression",
          "subtitle": "Some treatments intentionally reduce immune activity and increase infection risk.",
          "body": [
            "Chemotherapy, immune-modifying drugs, long-term steroids, and transplant medicines require individualized infection precautions.",
            "Fever or rapidly worsening symptoms may need urgent contact with the treatment team."
          ]
        },
        {
          "id": "iron-deficiency",
          "title": "Iron deficiency",
          "subtitle": "Low iron stores can reduce red-blood-cell production and cause fatigue, weakness, headache, or reduced exercise tolerance.",
          "body": [
            "Causes include blood loss, low intake, poor absorption, pregnancy, or increased needs.",
            "Testing is important before long-term supplementation because treatment depends on the cause and severity."
          ]
        },
        {
          "id": "arthritis",
          "title": "Arthritis or chronic joint pain",
          "subtitle": "Joint pain, swelling, stiffness, or reduced movement can affect activity and daily function.",
          "body": [
            "Appropriate movement often remains useful, but the type and load may need modification.",
            "Hot, severely swollen joints, fever, recent injury, or sudden inability to bear weight need prompt assessment."
          ]
        },
        {
          "id": "heart-disease",
          "title": "Heart disease",
          "subtitle": "Heart conditions can change safe exercise intensity and may cause chest discomfort, breathlessness, palpitations, or fatigue.",
          "body": [
            "People with known heart disease may need an individualized activity plan or cardiac rehabilitation.",
            "Chest pressure, fainting, severe shortness of breath, or new neurologic symptoms require urgent care."
          ]
        },
        {
          "id": "anemia",
          "title": "Anemia",
          "subtitle": "Too few healthy red blood cells or too little hemoglobin can reduce oxygen delivery.",
          "body": [
            "Symptoms may include fatigue, weakness, headache, dizziness, palpitations, or shortness of breath with activity.",
            "Anemia has many causes; treatment should follow testing rather than assuming iron is always the answer."
          ]
        }
      ]
    },
    {
      "id": "medications",
      "title": "Medications",
      "icon": "💉",
      "subtitle": "Doctor-facing medication education and questions.",
      "items": [
        {
          "id": "metformin",
          "title": "Metformin",
          "subtitle": "Common diabetes medicine; GI side effects and kidney review matter.",
          "body": [
            "Ask about stomach side effects, kidney function, B12 monitoring, and timing with meals.",
            "Do not change dose without clinician advice."
          ]
        },
        {
          "id": "insulin",
          "title": "Insulin",
          "subtitle": "Powerful glucose-lowering medicine; low sugar safety matters.",
          "body": [
            "Ask about low sugar plan, injection technique, storage, meal timing, and sick-day rules.",
            "Dose changes must be clinician-guided."
          ]
        },
        {
          "id": "bp-meds",
          "title": "Blood pressure medicines",
          "subtitle": "Different classes, different side effects and monitoring.",
          "body": [
            "Ask which class you use, what side effects to watch for, and when labs are needed.",
            "Do not stop suddenly without medical advice."
          ]
        },
        {
          "id": "statin",
          "title": "Statin",
          "subtitle": "Cholesterol medicine; benefits and side effects depend on risk.",
          "body": [
            "Ask about LDL target, muscle symptoms, liver concerns, pregnancy considerations, and interactions.",
            "Do not stop without clinician review if prescribed for high risk."
          ]
        }
      ]
    },
    {
      "id": "er",
      "title": "ER",
      "icon": "🚨",
      "subtitle": "Red flags and emergency guidance.",
      "items": [
        {
          "id": "er-red-flags",
          "title": "Emergency red flags",
          "subtitle": "Call local emergency services for severe or rapidly worsening symptoms.",
          "body": [
            "Chest pain, severe shortness of breath, stroke signs, fainting, severe confusion, severe allergic reaction, uncontrolled bleeding, or severe dehydration need urgent care.",
            "If unsure and symptoms are severe, seek emergency care rather than using this app."
          ]
        }
      ]
    }
  ]
};
