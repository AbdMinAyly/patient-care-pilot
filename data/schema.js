window.PC_DATA = window.PC_DATA || {};
window.PC_DATA.schema = {
  version: 1,
  enums: {
    displayStatus: ["published", "draft", "archived", "deprecated"],
    safetyLevel: ["green", "yellow", "red", "locked"],
    reviewLevel: ["general", "clinical", "doctor_only", "approved"],
    dosingStatus: ["locked", "draft", "approved"],
    relationshipType: [
      "benefit",
      "poor_outcome",
      "possible_cause",
      "symptom_of",
      "treated_by",
      "side_effect",
      "lifestyle_support",
      "related_shine",
      "emergency_if",
      "needs_monitoring",
      "doctor_question"
    ]
  },
  safetyCopy: {
    green: "General lifestyle education",
    yellow: "Use caution and consider clinician advice",
    red: "Urgent red-flag guidance",
    locked: "Clinical review required"
  },
  reviewCopy: {
    general: "General education",
    clinical: "Clinical review required",
    doctor_only: "Clinician-only detail",
    approved: "Reviewed content"
  }
};
