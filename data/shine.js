window.PC_DATA = window.PC_DATA || {};
window.PC_DATA.shine = [
  {
    id: "sleep",
    mode: "shine",
    type: "shine_topic",
    title: "Sleep",
    shortTitle: "Sleep",
    summary: "Recover better, think clearer, and support energy with a calmer sleep routine.",
    hero: "Sleep is the base layer for energy, mood, appetite, immune rhythm, and daily recovery.",
    displayStatus: "published",
    safetyLevel: "green",
    reviewLevel: "general",
    keywords: ["sleep", "insomnia", "fatigue", "tired", "routine", "rest"],
    icon: "moon",
    why: [
      "Good sleep helps the body repair and reset.",
      "Poor sleep can make tiredness, cravings, low mood, and poor concentration feel worse."
    ],
    advice: [
      { id: "sleep-routine", title: "Build a steady sleep routine", text: "Choose a consistent bedtime and wake time most days." },
      { id: "sleep-light", title: "Lower light before bed", text: "Dim screens and bright lights during the final hour before sleep." },
      { id: "sleep-caffeine", title: "Move caffeine earlier", text: "Keep caffeine away from the late afternoon and evening when possible." }
    ],
    primaryAction: "Add Sleep routine to SHINE Plan"
  },
  {
    id: "happiness",
    mode: "shine",
    type: "shine_topic",
    title: "Happiness",
    shortTitle: "Happiness",
    summary: "Small daily actions that support mood, calm, connection, and meaning.",
    hero: "Mood is not only a feeling; it affects energy, sleep, food choices, and motivation.",
    displayStatus: "published",
    safetyLevel: "green",
    reviewLevel: "general",
    keywords: ["happiness", "mood", "stress", "mental health", "calm"],
    icon: "sun",
    why: [
      "Small routines can reduce friction when motivation is low.",
      "Connection, sunlight, movement, and sleep often support mood together."
    ],
    advice: [
      { id: "mood-check-in", title: "Do a two-minute check-in", text: "Name one feeling and one small thing that would make today easier." },
      { id: "connection-step", title: "Send one connection message", text: "A short message to a trusted person can support emotional steadiness." },
      { id: "sunlight-break", title: "Take a daylight break", text: "A few minutes of daylight can support rhythm and alertness." }
    ],
    primaryAction: "Add Mood support to SHINE Plan"
  },
  {
    id: "immunity",
    mode: "shine",
    type: "shine_topic",
    title: "Immunity",
    shortTitle: "Immunity",
    summary: "Support your body’s defenses through sleep, nutrition, movement, and hygiene basics.",
    hero: "Immune support is built from repeated basics, not one magic habit.",
    displayStatus: "published",
    safetyLevel: "green",
    reviewLevel: "general",
    keywords: ["immunity", "immune", "infection", "prevention", "recovery"],
    icon: "shield",
    why: [
      "Sleep, nutrition, and movement help the body maintain normal defense and recovery processes.",
      "A simple prevention routine is easier to follow than a complicated plan."
    ],
    advice: [
      { id: "immune-sleep", title: "Protect sleep during illness seasons", text: "Treat sleep as a recovery tool, not optional extra time." },
      { id: "hand-hygiene", title: "Keep hygiene simple", text: "Wash hands before meals and after public surfaces." },
      { id: "protein-color", title: "Add protein and color", text: "Include protein and colorful plants when meals allow." }
    ],
    primaryAction: "Add Immunity basics to SHINE Plan"
  },
  {
    id: "nutrition",
    mode: "shine",
    type: "shine_topic",
    title: "Nutrition",
    shortTitle: "Nutrition",
    summary: "Make food choices easier with simple meal structure, fiber, hydration, and balance.",
    hero: "Nutrition supports energy, digestion, blood sugar rhythm, recovery, and long-term health.",
    displayStatus: "published",
    safetyLevel: "green",
    reviewLevel: "general",
    keywords: ["nutrition", "diet", "food", "fiber", "hydration", "iron"],
    icon: "leaf",
    why: [
      "Balanced meals can support steadier energy.",
      "Fiber and fluids support digestion and may help constipation."
    ],
    advice: [
      { id: "plate-balance", title: "Use a simple plate structure", text: "Aim for protein, fiber-rich plants, and a steady carbohydrate portion." },
      { id: "hydration", title: "Plan hydration", text: "Keep water visible and pair drinking with daily anchors like meals." },
      { id: "fiber", title: "Increase fiber gradually", text: "Add fiber slowly and pair it with fluids to reduce bloating." }
    ],
    primaryAction: "Add Nutrition support to SHINE Plan"
  },
  {
    id: "exercise",
    mode: "shine",
    type: "shine_topic",
    title: "Exercise",
    shortTitle: "Exercise",
    summary: "Use gentle, realistic movement to support energy, mood, digestion, and strength.",
    hero: "Movement does not need to be intense to be useful. Small actions can still support daily function.",
    displayStatus: "published",
    safetyLevel: "green",
    reviewLevel: "general",
    keywords: ["exercise", "movement", "walking", "strength", "activity"],
    icon: "walk",
    why: [
      "Gentle movement can support mood, digestion, sleep, and circulation.",
      "A small repeatable plan is usually better than an intense plan that stops."
    ],
    advice: [
      { id: "walking", title: "Start with walking", text: "Try a short, comfortable walk after a meal if it is safe for you." },
      { id: "movement-break", title: "Use movement breaks", text: "Stand, stretch, or walk briefly during long sitting periods." },
      { id: "strength-basic", title: "Add simple strength twice weekly", text: "Use safe, light bodyweight movements when appropriate." }
    ],
    primaryAction: "Add Movement support to SHINE Plan"
  },
  {
    id: "hydration",
    mode: "shine",
    type: "shine_action",
    title: "Hydration",
    shortTitle: "Hydration",
    summary: "A simple water routine that supports digestion and daily energy.",
    hero: "Hydration is a small action that can support bowel regularity and daily function.",
    displayStatus: "published",
    safetyLevel: "green",
    reviewLevel: "general",
    keywords: ["hydration", "water", "fluids", "constipation"],
    icon: "drop",
    why: ["Fluids help fiber work better and can support bowel movement comfort."],
    advice: [
      { id: "water-visible", title: "Keep water visible", text: "Put water where you work or eat so drinking becomes easier." },
      { id: "meal-water", title: "Pair water with meals", text: "Use meals as a reminder to drink." }
    ],
    primaryAction: "Add Hydration to SHINE Plan"
  },
  {
    id: "fiber",
    mode: "shine",
    type: "shine_action",
    title: "Fiber",
    shortTitle: "Fiber",
    summary: "Add fiber gradually through foods such as vegetables, legumes, oats, and fruits.",
    hero: "Fiber can support digestion, but sudden large increases may cause bloating.",
    displayStatus: "published",
    safetyLevel: "green",
    reviewLevel: "general",
    keywords: ["fiber", "constipation", "nutrition", "digestion"],
    icon: "grain",
    why: ["Gradual fiber increases can support bowel regularity when paired with fluids."],
    advice: [
      { id: "fiber-slow", title: "Increase slowly", text: "Add one fiber-rich food at a time." },
      { id: "fiber-fluid", title: "Pair fiber with fluids", text: "Fiber works best when fluid intake is adequate." }
    ],
    primaryAction: "Add Fiber habit to SHINE Plan"
  },
  {
    id: "walking",
    mode: "shine",
    type: "shine_action",
    title: "Walking",
    shortTitle: "Walking",
    summary: "Gentle walking can support mood, digestion, circulation, and routine.",
    hero: "Walking is a practical movement anchor that many people can adapt to their day.",
    displayStatus: "published",
    safetyLevel: "green",
    reviewLevel: "general",
    keywords: ["walking", "exercise", "constipation", "digestion", "movement"],
    icon: "walk",
    why: ["Gentle movement can support digestive motility and daily energy."],
    advice: [
      { id: "walk-short", title: "Start short", text: "Try a short comfortable walk instead of aiming for perfection." },
      { id: "walk-after-meal", title: "Use an after-meal cue", text: "A short walk after a meal can become an easy routine anchor." }
    ],
    primaryAction: "Add Walking to SHINE Plan"
  }
];
