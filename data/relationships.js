window.PC_DATA = window.PC_DATA || {};
window.PC_DATA.relationships = [
  { from: "sleep", to: "happiness", type: "benefit", label: "Good sleep may support mood", section: "good" },
  { from: "sleep", to: "immunity", type: "benefit", label: "Good sleep supports recovery rhythm", section: "good" },
  { from: "sleep", to: "fatigue", type: "poor_outcome", label: "Persistent tiredness may need closer review", section: "watch" },

  { from: "nutrition", to: "immunity", type: "benefit", label: "Balanced meals support recovery", section: "good" },
  { from: "exercise", to: "happiness", type: "benefit", label: "Movement may support mood", section: "good" },
  { from: "hydration", to: "nutrition", type: "related_shine", label: "Hydration belongs in Nutrition", section: "support" },
  { from: "fiber", to: "nutrition", type: "related_shine", label: "Fiber belongs in Nutrition", section: "support" },
  { from: "walking", to: "exercise", type: "related_shine", label: "Walking belongs in Exercise", section: "support" },

  { from: "fatigue", to: "iron-deficiency", type: "possible_cause", label: "One possible cause to discuss", section: "next" },
  { from: "fatigue", to: "emergency-guidance", type: "emergency_if", label: "Know red flags", section: "safety" },

  { from: "iron-deficiency", to: "nutrition", type: "lifestyle_support", label: "Food and meal support", section: "support" },
  { from: "iron-deficiency", to: "iron-supplement", type: "treated_by", label: "Supplement discussion", section: "clinical" },
  { from: "iron-deficiency", to: "iron-monitoring-placeholder", type: "needs_monitoring", label: "Ask about lab follow-up", section: "clinical" },

  { from: "iron-supplement", to: "constipation", type: "side_effect", label: "Possible side effect", section: "safety" },
  { from: "iron-supplement", to: "iron-supplement-contraindication-note", type: "needs_monitoring", label: "Safety cross-check", section: "clinical" },
  { from: "iron-supplement", to: "iron-follow-up-schedule-placeholder", type: "needs_monitoring", label: "Follow-up schedule question", section: "clinical" },

  { from: "constipation", to: "hydration", type: "lifestyle_support", label: "Support your recovery with fluids", section: "support" },
  { from: "constipation", to: "fiber", type: "lifestyle_support", label: "Support your recovery with gradual fiber", section: "support" },
  { from: "constipation", to: "walking", type: "lifestyle_support", label: "Support your recovery with gentle movement", section: "support" },
  { from: "constipation", to: "emergency-guidance", type: "emergency_if", label: "Know urgent red flags", section: "safety" }
];
