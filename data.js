window.SHINE_APP_DATA = {
  shine: {
    title: "SHINE",
    subtitle: "The key to a brighter life",
    intro: "A lifestyle-first home screen. No symptoms, no medications, no sickness language. The patient starts with how to live better.",
    pillars: [
      {
        id: "sleep",
        letter: "S",
        title: "Sleep",
        short: "Protect energy, appetite, mood, immunity, and blood pressure rhythm.",
        color: "maroon",
        summary: "Sleep is the first SHINE pillar because poor sleep makes the other habits harder. It can worsen cravings, motivation, stress tolerance, and daily energy.",
        doToday: [
          "Choose a fixed wake-up time for the next 3 days.",
          "Stop caffeine late in the day if it affects your sleep.",
          "Keep the phone away from the bed for the final 30 minutes.",
          "Use a short evening routine: light dinner, dim lights, calm activity."
        ],
        connectsTo: [
          { target: "nutrition", text: "Poor sleep increases cravings; nutrition is easier after better sleep." },
          { target: "exercise", text: "Movement improves sleep pressure; sleep improves exercise recovery." },
          { target: "happiness", text: "Sleep loss lowers stress tolerance and mood." }
        ],
        patientBridge: "If insomnia is severe, new, linked to breathing pauses, or causing unsafe daytime sleepiness, Patient Mode can guide what to ask a clinician."
      },
      {
        id: "happiness",
        letter: "H",
        title: "Happiness",
        short: "Build mood, connection, purpose, and stress control.",
        color: "maroon",
        summary: "Happiness here means emotional health, not pretending everything is fine. It includes stress reduction, social connection, sunlight, purpose, and small daily wins.",
        doToday: [
          "Write one problem you can control and one you cannot control.",
          "Take a 10-minute walk or light movement break.",
          "Message or call one supportive person.",
          "Choose one small task and finish it before starting another."
        ],
        connectsTo: [
          { target: "exercise", text: "Exercise is one of the fastest mood tools." },
          { target: "sleep", text: "Stress routines protect sleep." },
          { target: "nutrition", text: "Stable meals help stabilize energy and mood." }
        ],
        patientBridge: "If sadness, anxiety, panic, or hopeless thoughts are severe or persistent, use Patient Mode for safety guidance and professional support prompts."
      },
      {
        id: "immunity",
        letter: "I",
        title: "Immunity",
        short: "Support the body through sleep, food quality, vaccines, hygiene, and recovery.",
        color: "maroon",
        summary: "Immunity is not a single supplement. It is the result of sleep, nutrition, movement, stress control, hydration, hygiene, and timely medical care when needed.",
        doToday: [
          "Wash hands before meals and after public surfaces.",
          "Hydrate steadily across the day.",
          "Eat a protein source and a fruit or vegetable with meals.",
          "Rest when ill instead of forcing intense workouts."
        ],
        connectsTo: [
          { target: "sleep", text: "Sleep supports recovery." },
          { target: "nutrition", text: "Food quality supplies the body with building blocks." },
          { target: "exercise", text: "Moderate movement supports circulation and resilience." }
        ],
        patientBridge: "If fever, breathing difficulty, severe weakness, dehydration, chest pain, or worsening symptoms appear, Patient Mode becomes the safer route."
      },
      {
        id: "nutrition",
        letter: "N",
        title: "Nutrition",
        short: "Use food as daily structure: protein, plants, fiber, water, less sugar.",
        color: "maroon",
        summary: "Nutrition is the daily anchor. The pilot keeps it simple: build plates, reduce sugary drinks, control portions, and connect food timing to sleep and exercise.",
        doToday: [
          "Make half the plate vegetables or salad when possible.",
          "Add protein to each main meal.",
          "Replace juice or soda with water most of the time.",
          "Choose one snack you can improve, not the whole diet at once."
        ],
        connectsTo: [
          { target: "sleep", text: "Late heavy meals can disturb sleep." },
          { target: "exercise", text: "Food fuels movement and recovery." },
          { target: "happiness", text: "Regular meals can reduce energy crashes." }
        ],
        patientBridge: "If you have diabetes, kidney disease, pregnancy, eating disorder history, or medication-related diet restrictions, Patient Mode should add clinician-reviewed guidance."
      },
      {
        id: "exercise",
        letter: "E",
        title: "Exercise",
        short: "Move for strength, mood, sugar control, heart health, and independence.",
        color: "maroon",
        summary: "Exercise is not only gym workouts. It includes walking, stretching, balance, resistance training, and breaking up long sitting.",
        doToday: [
          "Walk for 10 minutes after one meal.",
          "Stand up for 2 minutes every hour if sitting long periods.",
          "Do 5 slow chair-squats or wall push-ups if safe for you.",
          "Pick the easiest movement you can repeat tomorrow."
        ],
        connectsTo: [
          { target: "happiness", text: "Movement is a mental health tool." },
          { target: "sleep", text: "Daytime movement improves sleep pressure." },
          { target: "nutrition", text: "Exercise and nutrition work better together than either alone." }
        ],
        patientBridge: "If exercise causes chest pain, fainting, severe shortness of breath, or unusual weakness, stop and use Patient Mode or urgent care guidance."
      }
    ]
  },

  guides: {
    diet: {
      title: "Diet Guides",
      subtitle: "Food advice that connects back to SHINE",
      cards: [
        {
          title: "Build Your Plate",
          summary: "Half plants, quarter protein, quarter starch. Then adjust based on health needs.",
          bullets: ["Start with vegetables.", "Add protein.", "Choose water first.", "Keep portions visible."],
          connects: ["Sleep affects cravings.", "Exercise changes hunger and recovery.", "Patient Mode adds medical restrictions when needed."]
        },
        {
          title: "Sugar Drink Swap",
          summary: "The easiest nutrition win for many people is replacing sweet drinks most days.",
          bullets: ["Water first.", "Unsweetened tea or coffee if tolerated.", "Keep sweet drinks occasional, not daily."],
          connects: ["Better sleep helps reduce cravings.", "Walking after meals supports glucose handling."]
        },
        {
          title: "Salt Awareness",
          summary: "A simple heart-health habit: taste before adding salt and reduce highly processed foods.",
          bullets: ["Compare labels when possible.", "Use herbs, lemon, garlic, spices.", "Avoid making every meal salty."],
          connects: ["Patient Mode links this to blood pressure and chronic care."]
        }
      ]
    },
    exercise: {
      title: "Exercise Guides",
      subtitle: "Simple movement that supports every SHINE pillar",
      cards: [
        {
          title: "10-Minute Starter Plan",
          summary: "Start so small that repetition is easy.",
          bullets: ["Walk 10 minutes.", "Repeat 3 days.", "Add 5 minutes only after it feels easy.", "Stop for red-flag symptoms."],
          connects: ["Better sleep recovery.", "Improved mood.", "Supports nutrition goals."]
        },
        {
          title: "Strength Without a Gym",
          summary: "Use bodyweight movements for daily independence.",
          bullets: ["Chair sit-to-stand.", "Wall push-up.", "Heel raises.", "Light carrying if safe."],
          connects: ["Muscle supports glucose use.", "Strength improves confidence and function."]
        },
        {
          title: "Break Sitting",
          summary: "Short movement breaks matter when the day is sedentary.",
          bullets: ["Stand every hour.", "Walk during phone calls.", "Use stairs if safe.", "Stretch hips and calves."],
          connects: ["Helps energy.", "Can reduce stiffness and improve mood."]
        }
      ]
    },
    mental: {
      title: "Mental Health Guide",
      subtitle: "Mood, stress, and exercise as one connected system",
      cards: [
        {
          title: "Movement for Mood",
          summary: "Exercise is not a cure-all, but it is a useful mood tool.",
          bullets: ["Begin with walking.", "Use daylight when possible.", "Track how you feel after movement.", "Choose repeatable over intense."],
          connects: ["Better sleep improves mood.", "Regular meals reduce energy crashes."]
        },
        {
          title: "Stress Reset",
          summary: "A short routine to interrupt stress before it controls the day.",
          bullets: ["Slow breathing for 60 seconds.", "Name the next small action.", "Step outside or move briefly.", "Avoid solving every problem at night."],
          connects: ["Protects sleep.", "Reduces emotional eating."]
        },
        {
          title: "Connection",
          summary: "Health advice works better when the patient is not isolated.",
          bullets: ["Pick one support person.", "Share one small goal.", "Ask for a walk, meal, or check-in.", "Use professional help for persistent distress."],
          connects: ["Supports SHINE consistency.", "Patient Mode adds safety prompts."]
        }
      ]
    }
  },

  patientMode: {
    title: "Patient Mode",
    subtitle: "Symptoms, conditions, chronic care, emergency, medication safety, and special circumstances",
    intro: "This mode changes the app from wellness-first to clinical-support mode. It is still educational and needs clinical review before real patient use.",
    sections: [
      {
        id: "symptoms",
        title: "Symptoms",
        summary: "Cough, fever, headache, dizziness, pain, stomach symptoms, and when symptoms become urgent.",
        theme: "blue",
        bullets: ["What is happening?", "What can be watched?", "What needs same-day care?", "What needs emergency care?"]
      },
      {
        id: "conditions",
        title: "Conditions",
        summary: "Simple explanations of common diagnoses after a clinician has assessed the patient.",
        theme: "blue",
        bullets: ["Common cold / URTI", "High blood pressure", "Diabetes basics", "Asthma-style breathing education"]
      },
      {
        id: "chronic-care",
        title: "Chronic Care",
        summary: "Long-term care programs for diabetes, hypertension, cholesterol, obesity, and prevention.",
        theme: "blue",
        bullets: ["Targets and monitoring", "Lifestyle link back to SHINE", "Medication adherence prompts", "Follow-up planning"]
      },
      {
        id: "emergency",
        title: "Emergency",
        summary: "Red-flag guidance that interrupts normal browsing.",
        theme: "red",
        bullets: ["Chest pain", "Stroke symptoms", "Severe shortness of breath", "Severe allergic reaction", "Severe low sugar symptoms"]
      },
      {
        id: "medications",
        title: "Medications, Dosing & Safety",
        summary: "Medication education without random self-dosing. Doses must be clinician-reviewed.",
        theme: "purple",
        bullets: ["What this medicine is for", "How to take it safely", "Common warnings", "Do not stop or change dose without clinician advice"]
      },
      {
        id: "special",
        title: "Special Circumstances",
        summary: "Ramadan, travel, pregnancy, surgery, fasting, sick days, heat, and elderly care.",
        theme: "blue",
        bullets: ["Plan before the situation", "Know what changes", "Know when to ask the doctor", "Know when to seek urgent care"]
      }
    ]
  }
};
