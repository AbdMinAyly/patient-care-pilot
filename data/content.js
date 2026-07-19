/* EDITABLE CONTENT STORE — data only, no application functions. */
window.PATIENT_CARE_CONTENT = {
  "meta": {
    "schemaVersion": 21,
    "contentVersion": "v045",
    "offlineOnly": true,
    "referencesVisible": false,
    "contentBatch": "FEATURE_CLARITY_PASS",
    "contentStatusDefinitions": {
      "placeholder": "Initial content that still requires structured research.",
      "researched": "Patient-facing content has been researched and source-registered.",
      "clinical-review-required": "Sensitive wording or fields require deliberate clinical approval.",
      "approved": "Content has completed the defined clinical approval process."
    },
    "completedBatches": [
      {
        "id": "BATCH_01_ENERGY_IRON",
        "title": "Energy, Fatigue, and Iron",
        "status": "researched"
      },
      {
        "id": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
        "title": "Sleep and Daytime Function",
        "status": "researched"
      },
      {
        "id": "BATCH_03_DIABETES_GLUCOSE",
        "title": "Diabetes and Glucose",
        "status": "researched"
      },
      {
        "id": "BATCH_04_BLOOD_PRESSURE",
        "title": "Blood Pressure",
        "status": "researched"
      },
      {
        "id": "BATCH_05_CHOLESTEROL_HEART",
        "title": "Cholesterol and Heart Health",
        "status": "researched"
      },
      {
        "id": "BATCH_06_DIGESTIVE_SUPPORT",
        "title": "Digestive Support",
        "status": "researched"
      },
      {
        "id": "BATCH_07_MOOD_STRESS",
        "title": "Mood and Stress",
        "status": "researched"
      },
      {
        "id": "BATCH_08_SUPPLEMENT_LIBRARY",
        "title": "Supplement Library",
        "status": "researched"
      },
      {
        "id": "BATCH_09_EMERGENCY_SAFETY",
        "title": "Emergency and Safety Pass",
        "status": "researched"
      },
      {
        "id": "BATCH_10_IMMUNITY_INFECTION",
        "title": "Immunity and Infection Prevention",
        "status": "researched"
      },
      {
        "id": "BATCH_12_NUTRITION_HEALTHY_EATING",
        "title": "Nutrition and Healthy Eating",
        "status": "researched"
      },
      {
        "id": "BATCH_13_CLINICAL_CONSISTENCY_REVIEW",
        "title": "Cross-App Clinical Consistency and Quality Review",
        "status": "quality-reviewed"
      }
    ],
    "qualityReview": {
      "status": "completed",
      "dateChecked": "2026-07-15",
      "report": "docs/quality/V042_CLINICAL_CONSISTENCY_REPORT.md",
      "sourceIndex": "docs/research/SOURCE_INDEX.md",
      "deferredEntityIds": [
        "exercise",
        "exercise-start-small",
        "exercise-aerobic",
        "exercise-strength",
        "exercise-sit-less",
        "exercise-recovery",
        "arthritis"
      ],
      "note": "Quality review does not imply clinical approval. Batch 11 Exercise, Mobility, and Joint Health remains deferred.",
      "editorialSourceIds": [
        "CONSISTENCY_FDA_DRUG_INTERACTIONS",
        "CONSISTENCY_FDA_SUPPLEMENT_QA",
        "CONSISTENCY_ODS_SUPPLEMENT_SAFETY",
        "CONSISTENCY_CDC_STROKE_SIGNS",
        "CONSISTENCY_CDC_HEART_ATTACK",
        "CONSISTENCY_MEDLINEPLUS_EMERGENCIES"
      ]
    },
    "featureRelease": {
      "id": "FEATURE_CLARITY_PASS",
      "title": "Clarity Pass",
      "status": "implemented",
      "baseline": "v044",
      "scope": "Presentation and navigation",
      "note": "Progressive disclosure retains complete researched content, keeps safety and dosing-lock information visible, hides placeholders from normal discovery, and corrects Plan routing and task counts. No new sources, clinical claims, QR codes, or scheduling features are introduced."
    }
  },
  "ui": {
    "modeDescriptions": {
      "shine": "Teaching for Sleep, Happiness, Immunity, Nutrition, and Exercise.",
      "heal": "Build practical diet, lifestyle, supplement, and normal-range guidance.",
      "dr": "Doctor space: symptoms, acute conditions, chronic conditions, medications, and urgent help.",
      "summary": "A structured plan built from the lifestyle, food, treatment, and doctor items you choose."
    },
    "searchPlaceholders": {
      "heal": "Search HEAL: diet, lifestyle, supplements, BP, sugar...",
      "dr": "Search DR: fatigue, diabetes, insulin, urgent help..."
    },
    "planLabel": "Your Plan",
    "clarity": {
      "backToShine": "← Back to SHINE",
      "backToSectionPrefix": "← Back to",
      "atAGlance": "At a glance",
      "important": "Important",
      "readFullTeachingDetails": "Read full teaching details",
      "comingSoon": "Coming soon",
      "saveTopic": "Add to Your Plan",
      "nextActionsEyebrow": "NEXT ACTIONS",
      "nextActionsTitle": "What you saved to do or discuss",
      "reviewAllSavedItems": "Review all saved items",
      "visualizeShinePath": "Visualize Your SHINE Path",
      "printPlan": "Print Your Plan",
      "moreOptions": "More options",
      "downloadJsonBackup": "Download JSON backup"
    },
    "actionPath": {
      "title": "Your next-step tasks",
      "intro": "Choose only what fits your situation. Food, habits, supplements, questions, and tests are organized as planning or discussion items—not personalized treatment instructions.",
      "foodIdeas": "Food ideas that may help",
      "helpfulTasks": "Helpful tasks",
      "supplements": "Supplements to discuss",
      "questions": "Questions for a clinician",
      "labs": "Labs or tests to discuss",
      "add": "Add task",
      "added": "Added"
    }
  },
  "shine": [
    {
      "id": "sleep",
      "letter": "S",
      "title": "Sleep",
      "tag": "Brain, body, and daytime recovery",
      "subtitle": "Sleep supports attention, memory, emotional regulation, physical recovery, immune function, and safer daytime performance. Sleep quality, timing, regularity, and duration all matter.",
      "why": [
        "What sleep is — Sleep is an active biological process. The brain and body cycle through different sleep stages that support learning, memory, emotional control, repair, and recovery.",
        "What healthy sleep includes — Duration matters, but so do regular timing, few interruptions, and waking with enough alertness for usual daytime activities.",
        "Daytime function — Sleep deficiency can cause sleepiness, slower reaction time, poor concentration, irritability, and more mistakes at work, school, while driving, or when managing medicines.",
        "Sleepiness versus fatigue — Sleepiness is a tendency to doze. Fatigue is low energy or reduced capacity. They can occur together, but they are not the same and may have different causes.",
        "Patterns to notice — Record bedtime, estimated sleep time, waking time, night waking, naps, caffeine, alcohol, exercise, medicines, snoring, gasping, leg discomfort, pain, and daytime sleepiness.",
        "Possible disruptors — Insomnia, sleep apnea, restless legs syndrome, pain, headache, asthma symptoms, mood symptoms, medicines, shift work, caregiving, and environmental interruptions can reduce sleep quality.",
        "A practical foundation — Keep a steady wake time, allow enough opportunity for sleep, lower evening light and stimulation, use daytime light and movement, and make the bedroom quiet, dark, and comfortably cool.",
        "When habits are not enough — Persistent sleep problems, dangerous daytime sleepiness, loud snoring with gasping, repeated breathing pauses, or nighttime breathing symptoms should be discussed with a clinician."
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
          "text": "Loud snoring, gasping, breathing pauses, morning headache, dry mouth, or strong daytime sleepiness."
        },
        {
          "id": "restless-legs",
          "title": "Restless legs syndrome",
          "text": "An urge to move the legs with uncomfortable sensations that are worse at rest and usually worse in the evening or at night."
        },
        {
          "id": "asthma",
          "title": "Asthma at night",
          "text": "Cough, wheeze, chest tightness, or shortness of breath that wakes the person or prevents restful sleep."
        },
        {
          "id": "headache",
          "title": "Headache",
          "text": "Headache can interrupt sleep, appear on waking, or be affected by sleep changes, missed meals, caffeine, stress, or medicine use."
        },
        {
          "id": "fatigue",
          "title": "Fatigue and daytime function",
          "text": "Low energy can occur with poor sleep but may also relate to anemia, thyroid disease, diabetes, infection, medicines, mood, or other conditions."
        }
      ],
      "healLinks": [
        {
          "id": "sleep-schedule",
          "title": "Keep a steady sleep schedule",
          "text": "Use a consistent wake time and protect enough time for sleep, while keeping days off reasonably close to the usual routine."
        },
        {
          "id": "sleep-wind-down",
          "title": "Build a repeatable wind-down",
          "text": "Use the final part of the evening to reduce bright light, demanding work, and emotional stimulation."
        },
        {
          "id": "sleep-environment",
          "title": "Set up the bedroom for sleep",
          "text": "Reduce repeated light, noise, heat, and interruptions, and keep the bed associated mainly with sleep."
        },
        {
          "id": "sleep-daylight-activity",
          "title": "Use daylight, movement, and careful naps",
          "text": "Daytime light and regular activity support the sleep–wake rhythm; late or long naps may interfere for some people."
        },
        {
          "id": "sleep-food-caffeine",
          "title": "Review evening food, caffeine, alcohol, and fluids",
          "text": "Late caffeine, heavy meals, alcohol, reflux, hunger, or repeated bathroom trips can affect sleep."
        }
      ],
      "headings": {
        "why": "1. Sleep and daytime function",
        "positive": "2. How healthy Sleep helps SHINE",
        "negative": "3. How poor Sleep affects SHINE",
        "habits": "4. Sleep-supporting habits",
        "conditions": "5. Conditions and symptoms that may disrupt Sleep"
      },
      "actionPath": {
        "helpfulTasks": [
          {
            "id": "habit-sleep-schedule",
            "title": "Track sleep for seven days",
            "detail": "Record bedtime, estimated sleep time, waking time, naps, and how alert you feel during the day."
          },
          {
            "id": "habit-sleep-wind-down",
            "title": "Protect a repeatable wind-down period",
            "detail": "Reduce bright screens, demanding work, and emotional stimulation before bed."
          },
          {
            "id": "habit-sleep-environment",
            "title": "Review the bedroom environment",
            "detail": "Note light, noise, temperature, interruptions, and whether the bed is used for wakeful activities."
          },
          {
            "id": "habit-sleep-daylight-activity",
            "title": "Record daylight, movement, and naps",
            "detail": "Compare daytime light exposure, activity, and nap timing with sleep quality."
          },
          {
            "id": "habit-sleep-food-caffeine",
            "title": "Review evening caffeine, meals, alcohol, and fluids",
            "detail": "Record timing rather than assuming one item is the cause."
          },
          {
            "id": "habit-sleep-driving-safety",
            "title": "Avoid driving when dangerously sleepy",
            "detail": "Use a safer transport plan and discuss severe daytime sleepiness promptly."
          },
          {
            "id": "habit-sleep-medication-review",
            "title": "Prepare a medicine and supplement list",
            "detail": "Include prescription, over-the-counter, herbal, caffeine, nicotine, and alcohol use."
          }
        ],
        "questions": [
          {
            "id": "ask-insomnia",
            "title": "Could insomnia be contributing?",
            "detail": "Ask whether the pattern fits short-term or chronic insomnia and whether CBT-I is appropriate."
          },
          {
            "id": "ask-sleep-apnea",
            "title": "Could sleep apnea be contributing?",
            "detail": "Mention snoring, gasping, witnessed breathing pauses, morning headache, and daytime sleepiness."
          },
          {
            "id": "ask-restless-legs",
            "title": "Could restless legs syndrome be contributing?",
            "detail": "Describe the sensations, timing, relief with movement, medicines, and iron history."
          },
          {
            "id": "ask-asthma",
            "title": "Could nighttime asthma symptoms be affecting sleep?",
            "detail": "Bring a record of cough, wheeze, chest tightness, reliever use, and nighttime waking."
          },
          {
            "id": "ask-headache",
            "title": "Could headache, pain, or medicine use be affecting sleep?",
            "detail": "Describe timing, severity, associated symptoms, and whether headache wakes you or appears on waking."
          },
          {
            "id": "ask-fatigue-sleepiness",
            "title": "Am I describing sleepiness, fatigue, or both?",
            "detail": "Explain whether you are likely to doze, feel low energy, or have both patterns."
          }
        ]
      },
      "contentStatus": "researched",
      "contentTemplate": "shine-teaching",
      "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
      "editorialSourceIds": [
        "NHLBI_SLEEP_DEFICIENCY",
        "NHLBI_SLEEP_HEALTH_EFFECTS",
        "CDC_ABOUT_SLEEP",
        "NHLBI_HEALTHY_SLEEP_HABITS"
      ],
      "relatedIds": [
        "insomnia",
        "sleep-apnea",
        "restless-legs",
        "headache",
        "asthma",
        "fatigue",
        "sleep-schedule",
        "sleep-wind-down",
        "sleep-environment",
        "sleep-daylight-activity",
        "sleep-food-caffeine",
        "happiness",
        "depression",
        "anxiety",
        "chronic-stress",
        "wellbeing-connection",
        "wellbeing-movement",
        "wellbeing-relaxation",
        "wellbeing-goals",
        "wellbeing-foundations"
      ],
      "clinicalReview": {
        "status": "clinical-review-required",
        "fields": [
          "dangerous daytime sleepiness and driving language",
          "adult sleep-duration wording",
          "emergency breathing wording"
        ]
      },
      "additionalResearchBatches": [
        "BATCH_07_MOOD_STRESS"
      ],
      "wizard": {
        "id": "sleep-heal-wizard",
        "title": "Build your Sleep next steps",
        "subtitle": "Choose the conditions, schedule patterns, sleep experiences, and daily-life factors that matter to you. The wizard will organize relevant HEAL actions that you can add individually to Your Plan.",
        "launchLabel": "Start Sleep Wizard",
        "resumeLabel": "Review my Sleep Wizard",
        "notice": "This wizard organizes educational options. It does not diagnose a sleep disorder or replace individualized medical advice.",
        "backLabel": "Back",
        "nextLabel": "Next",
        "resultsLabel": "Build my actions",
        "closeLabel": "Close wizard",
        "addAllLabel": "Add all shown actions",
        "addedAllLabel": "All shown actions added",
        "emptySelection": "You can continue without choosing an option. The wizard will still show a small foundation set.",
        "resultsTitle": "Your Sleep action options",
        "resultsIntro": "These actions are matched to the choices you made. Add only the ones that fit your life.",
        "steps": [
          {
            "id": "conditions",
            "eyebrow": "Step 1",
            "title": "Health considerations",
            "intro": "Choose topics that are already relevant to you. Selecting a card does not mean the app is diagnosing the condition.",
            "options": [
              {
                "id": "diabetes",
                "label": "Diabetes or glucose concerns",
                "detail": "Consider meal timing, medicines, monitoring, and overnight symptoms.",
                "icon": "🩸"
              },
              {
                "id": "hypertension",
                "label": "High blood pressure",
                "detail": "Consider activity, medicines, fluid timing, and possible sleep disruption.",
                "icon": "🫀"
              },
              {
                "id": "asthma",
                "label": "Asthma or nighttime breathing symptoms",
                "detail": "Consider bedroom triggers, symptom tracking, and nighttime safety.",
                "icon": "🫁"
              },
              {
                "id": "anxiety-stress",
                "label": "Anxiety or ongoing stress",
                "detail": "Consider wind-down structure, relaxation, and reducing bedtime problem-solving.",
                "icon": "🧠"
              },
              {
                "id": "pain-headache",
                "label": "Pain or headache",
                "detail": "Consider symptom timing, bedroom setup, and sleep-pattern tracking.",
                "icon": "🌡️"
              },
              {
                "id": "restless-legs",
                "label": "Restless legs or leg discomfort",
                "detail": "Consider symptom tracking, movement, and medicine or supplement review.",
                "icon": "🦵"
              }
            ]
          },
          {
            "id": "schedule",
            "eyebrow": "Step 2",
            "title": "Sleep and work pattern",
            "intro": "Choose the pattern that best describes your current life. More than one may apply.",
            "options": [
              {
                "id": "regular-days",
                "label": "Mostly regular daytime schedule",
                "detail": "Bedtime and waking time are usually similar.",
                "icon": "☀️"
              },
              {
                "id": "night-shift",
                "label": "Night shift",
                "detail": "Work happens mainly overnight.",
                "icon": "🌙"
              },
              {
                "id": "rotating-shift",
                "label": "Rotating shifts",
                "detail": "Work times change between days, evenings, or nights.",
                "icon": "🔄"
              },
              {
                "id": "split-shift",
                "label": "Split sleep or split shifts",
                "detail": "Sleep or work is divided into separate blocks.",
                "icon": "↔️"
              },
              {
                "id": "caregiving",
                "label": "Caregiving or repeated interruptions",
                "detail": "Another person or responsibility regularly interrupts sleep.",
                "icon": "🤝"
              },
              {
                "id": "irregular",
                "label": "Irregular or unpredictable schedule",
                "detail": "Sleep timing changes often and is difficult to plan.",
                "icon": "🗓️"
              }
            ]
          },
          {
            "id": "patterns",
            "eyebrow": "Step 3",
            "title": "What happens with your sleep?",
            "intro": "Choose the patterns you want the plan to address.",
            "options": [
              {
                "id": "falling-asleep",
                "label": "Trouble falling asleep",
                "detail": "You remain awake after going to bed.",
                "icon": "⌛"
              },
              {
                "id": "night-waking",
                "label": "Waking during the night",
                "detail": "Sleep is interrupted one or more times.",
                "icon": "👁️"
              },
              {
                "id": "early-waking",
                "label": "Waking earlier than intended",
                "detail": "You wake early and cannot return to sleep.",
                "icon": "🌅"
              },
              {
                "id": "snoring-gasping",
                "label": "Snoring, gasping, or breathing pauses",
                "detail": "Breathing symptoms may be disturbing sleep.",
                "icon": "💨"
              },
              {
                "id": "leg-discomfort",
                "label": "Leg discomfort or urge to move",
                "detail": "Symptoms are worse at rest or in the evening.",
                "icon": "🦵"
              },
              {
                "id": "daytime-sleepiness",
                "label": "Strong daytime sleepiness",
                "detail": "You feel likely to doze or struggle to stay alert.",
                "icon": "🥱"
              },
              {
                "id": "morning-headache",
                "label": "Morning headache",
                "detail": "Headache appears on waking or follows poor sleep.",
                "icon": "🤕"
              }
            ]
          },
          {
            "id": "factors",
            "eyebrow": "Step 4",
            "title": "Daily-life factors",
            "intro": "Choose anything you want the wizard to account for.",
            "options": [
              {
                "id": "screens-work",
                "label": "Late screens or demanding work",
                "detail": "Work, scrolling, conflict, or planning continues close to bed.",
                "icon": "📱"
              },
              {
                "id": "caffeine-stimulants",
                "label": "Caffeine or stimulants later in the day",
                "detail": "Coffee, tea, energy drinks, nicotine, or stimulant products may be timed late.",
                "icon": "☕"
              },
              {
                "id": "late-meals-reflux",
                "label": "Late meals, reflux, hunger, or fluids",
                "detail": "Food, fullness, reflux, hunger, or bathroom waking may affect sleep.",
                "icon": "🍽️"
              },
              {
                "id": "naps",
                "label": "Naps may affect nighttime sleep",
                "detail": "Nap timing or duration may be changing sleep pressure.",
                "icon": "🛋️"
              },
              {
                "id": "bedroom",
                "label": "Light, noise, heat, or interruptions",
                "detail": "The sleep environment may be difficult to control.",
                "icon": "🛏️"
              },
              {
                "id": "alcohol",
                "label": "Alcohol near bedtime",
                "detail": "Alcohol may make you sleepy initially but can disturb sleep later.",
                "icon": "🥃"
              },
              {
                "id": "medicines",
                "label": "Medicines or supplements may affect sleep",
                "detail": "Prescription, over-the-counter, or supplement timing may be relevant.",
                "icon": "💊"
              }
            ]
          }
        ],
        "categories": [
          {
            "id": "routine",
            "title": "Routine and timing",
            "icon": "🕰️"
          },
          {
            "id": "environment",
            "title": "Bedroom and wind-down",
            "icon": "🛏️"
          },
          {
            "id": "daytime",
            "title": "Daylight, movement, and alertness",
            "icon": "☀️"
          },
          {
            "id": "food",
            "title": "Food, drinks, and medicines",
            "icon": "🍽️"
          },
          {
            "id": "tracking",
            "title": "Track and prepare",
            "icon": "📝"
          }
        ],
        "recommendations": [
          {
            "id": "foundation-sleep-diary",
            "category": "tracking",
            "priority": 100,
            "always": true,
            "reason": "A short sleep record gives the rest of the plan a clear starting point.",
            "taskRef": {
              "itemId": "sleep",
              "group": "helpfulTasks",
              "taskId": "habit-sleep-schedule"
            }
          },
          {
            "id": "foundation-opportunity",
            "category": "routine",
            "priority": 95,
            "always": true,
            "reason": "Protecting enough opportunity for sleep is a useful foundation before adding more rules.",
            "taskRef": {
              "itemId": "sleep-schedule",
              "group": "helpfulTasks",
              "taskId": "task-3-give-yourself-enough-time-in-bed-for-the"
            }
          },
          {
            "id": "regular-wake",
            "category": "routine",
            "priority": 90,
            "when": {
              "schedule": [
                "regular-days",
                "irregular"
              ],
              "patterns": [
                "early-waking"
              ]
            },
            "reason": "A realistic wake time helps make the sleep pattern more repeatable.",
            "taskRef": {
              "itemId": "sleep-schedule",
              "group": "helpfulTasks",
              "taskId": "task-1-choose-a-wake-time-you-can-follow-most-d"
            }
          },
          {
            "id": "compare-days",
            "category": "routine",
            "priority": 75,
            "when": {
              "schedule": [
                "regular-days",
                "rotating-shift",
                "irregular"
              ]
            },
            "reason": "Comparing workdays and days off can reveal large timing shifts.",
            "taskRef": {
              "itemId": "sleep-schedule",
              "group": "helpfulTasks",
              "taskId": "task-2-keep-weekday-and-weekend-timing-reasonab"
            }
          },
          {
            "id": "shift-window",
            "category": "routine",
            "priority": 98,
            "when": {
              "schedule": [
                "night-shift",
                "rotating-shift",
                "split-shift",
                "caregiving",
                "irregular"
              ]
            },
            "reason": "A repeatable protected sleep window can make a difficult schedule more workable.",
            "taskRef": {
              "itemId": "sleep-schedule",
              "group": "helpfulTasks",
              "taskId": "task-4-if-shift-work-or-caregiving-makes-a-fixe"
            }
          },
          {
            "id": "move-demanding-work",
            "category": "environment",
            "priority": 80,
            "when": {
              "patterns": [
                "falling-asleep"
              ],
              "factors": [
                "screens-work"
              ],
              "conditions": [
                "anxiety-stress"
              ]
            },
            "reason": "Moving problem-solving and demanding work earlier may reduce bedtime alertness.",
            "taskRef": {
              "itemId": "sleep-wind-down",
              "group": "helpfulTasks",
              "taskId": "task-1-move-demanding-work-arguments-and-heav"
            }
          },
          {
            "id": "reduce-screens",
            "category": "environment",
            "priority": 88,
            "when": {
              "patterns": [
                "falling-asleep"
              ],
              "factors": [
                "screens-work"
              ]
            },
            "reason": "Lowering bright light and stimulation supports a clearer transition toward sleep.",
            "taskRef": {
              "itemId": "sleep-wind-down",
              "group": "helpfulTasks",
              "taskId": "task-2-turn-off-or-reduce-bright-electronic-scr"
            }
          },
          {
            "id": "quiet-sequence",
            "category": "environment",
            "priority": 84,
            "when": {
              "patterns": [
                "falling-asleep",
                "early-waking"
              ],
              "conditions": [
                "anxiety-stress"
              ]
            },
            "reason": "A short repeatable sequence is easier to maintain than a long list of sleep rules.",
            "taskRef": {
              "itemId": "sleep-wind-down",
              "group": "helpfulTasks",
              "taskId": "task-3-use-a-repeatable-quiet-routine-such-as-w"
            }
          },
          {
            "id": "write-next-day",
            "category": "environment",
            "priority": 76,
            "when": {
              "patterns": [
                "falling-asleep"
              ],
              "factors": [
                "screens-work"
              ],
              "conditions": [
                "anxiety-stress"
              ]
            },
            "reason": "Writing down tomorrow’s tasks can move planning out of the sleep period.",
            "taskRef": {
              "itemId": "sleep-wind-down",
              "group": "helpfulTasks",
              "taskId": "sleep-wind-down-task-5"
            }
          },
          {
            "id": "review-environment",
            "category": "environment",
            "priority": 92,
            "when": {
              "patterns": [
                "night-waking",
                "snoring-gasping",
                "leg-discomfort",
                "morning-headache"
              ],
              "schedule": [
                "night-shift",
                "rotating-shift",
                "split-shift",
                "caregiving"
              ],
              "factors": [
                "bedroom"
              ],
              "conditions": [
                "asthma",
                "pain-headache",
                "restless-legs"
              ]
            },
            "reason": "Light, noise, temperature, triggers, and interruptions may need different solutions for different schedules.",
            "taskRef": {
              "itemId": "sleep-environment",
              "group": "helpfulTasks",
              "taskId": "task-1-keep-the-bedroom-quiet-dark-relaxing"
            }
          },
          {
            "id": "one-environment-change",
            "category": "environment",
            "priority": 82,
            "when": {
              "schedule": [
                "night-shift",
                "rotating-shift",
                "split-shift",
                "caregiving"
              ],
              "factors": [
                "bedroom"
              ],
              "conditions": [
                "asthma"
              ]
            },
            "reason": "One practical change is easier to test than changing the whole bedroom at once.",
            "taskRef": {
              "itemId": "sleep-environment",
              "group": "helpfulTasks",
              "taskId": "task-2-use-practical-fixes-such-as-curtains-an"
            }
          },
          {
            "id": "track-night-symptoms",
            "category": "tracking",
            "priority": 94,
            "when": {
              "patterns": [
                "night-waking",
                "snoring-gasping",
                "leg-discomfort",
                "morning-headache"
              ],
              "conditions": [
                "asthma",
                "pain-headache",
                "restless-legs"
              ]
            },
            "reason": "Recording what wakes you helps separate environment problems from symptoms that need review.",
            "taskRef": {
              "itemId": "sleep-environment",
              "group": "helpfulTasks",
              "taskId": "task-4-if-snoring-gasping-pain-coughing-leg"
            }
          },
          {
            "id": "daylight",
            "category": "daytime",
            "priority": 88,
            "when": {
              "schedule": [
                "night-shift",
                "rotating-shift",
                "split-shift",
                "irregular"
              ],
              "patterns": [
                "early-waking",
                "daytime-sleepiness"
              ]
            },
            "reason": "Daytime light timing can support the sleep–wake rhythm, especially when schedules change.",
            "taskRef": {
              "itemId": "sleep-daylight-activity",
              "group": "helpfulTasks",
              "taskId": "task-1-spend-time-outside-during-the-day-when-p"
            }
          },
          {
            "id": "movement",
            "category": "daytime",
            "priority": 74,
            "when": {
              "conditions": [
                "diabetes",
                "hypertension",
                "anxiety-stress"
              ],
              "patterns": [
                "daytime-sleepiness"
              ]
            },
            "reason": "Regular movement can support daytime function when adapted to health and safety needs.",
            "taskRef": {
              "itemId": "sleep-daylight-activity",
              "group": "helpfulTasks",
              "taskId": "task-2-be-physically-active-regularly-movement"
            }
          },
          {
            "id": "naps",
            "category": "daytime",
            "priority": 86,
            "when": {
              "schedule": [
                "night-shift",
                "rotating-shift",
                "split-shift"
              ],
              "patterns": [
                "falling-asleep",
                "night-waking"
              ],
              "factors": [
                "naps"
              ]
            },
            "reason": "Tracking nap timing and duration can show whether naps help alertness or make nighttime sleep harder.",
            "taskRef": {
              "itemId": "sleep-daylight-activity",
              "group": "helpfulTasks",
              "taskId": "task-4-if-naps-make-nighttime-sleep-harder-sho"
            }
          },
          {
            "id": "alertness",
            "category": "tracking",
            "priority": 90,
            "when": {
              "patterns": [
                "daytime-sleepiness",
                "snoring-gasping"
              ],
              "schedule": [
                "night-shift",
                "rotating-shift"
              ]
            },
            "reason": "Morning alertness and daytime sleepiness help show whether the schedule is supporting safe function.",
            "taskRef": {
              "itemId": "sleep-schedule",
              "group": "helpfulTasks",
              "taskId": "sleep-schedule-task-5"
            }
          },
          {
            "id": "dangerous-sleepiness",
            "category": "daytime",
            "priority": 110,
            "when": {
              "patterns": [
                "daytime-sleepiness",
                "snoring-gasping"
              ]
            },
            "reason": "Severe sleepiness changes driving and work safety even before the cause is known.",
            "taskRef": {
              "itemId": "sleep-daylight-activity",
              "group": "helpfulTasks",
              "taskId": "sleep-daylight-task-5"
            }
          },
          {
            "id": "caffeine-window",
            "category": "food",
            "priority": 90,
            "when": {
              "schedule": [
                "night-shift",
                "rotating-shift",
                "split-shift"
              ],
              "patterns": [
                "falling-asleep"
              ],
              "factors": [
                "caffeine-stimulants"
              ],
              "conditions": [
                "anxiety-stress",
                "hypertension"
              ]
            },
            "reason": "A personal timing review is more useful than assuming one cutoff fits every schedule.",
            "taskRef": {
              "itemId": "sleep-food-caffeine",
              "group": "foodIdeas",
              "taskId": "food-1-caffeine-can-remain-active-for-hours-av"
            }
          },
          {
            "id": "heavy-meal",
            "category": "food",
            "priority": 76,
            "when": {
              "patterns": [
                "falling-asleep",
                "night-waking"
              ],
              "factors": [
                "late-meals-reflux"
              ],
              "conditions": [
                "diabetes"
              ]
            },
            "reason": "Moving a heavy meal earlier may help when fullness or reflux is disturbing sleep.",
            "taskRef": {
              "itemId": "sleep-food-caffeine",
              "group": "foodIdeas",
              "taskId": "food-2-avoid-heavy-or-very-large-meals-within-a"
            }
          },
          {
            "id": "alcohol",
            "category": "food",
            "priority": 94,
            "when": {
              "factors": [
                "alcohol"
              ],
              "patterns": [
                "snoring-gasping",
                "night-waking"
              ]
            },
            "reason": "Alcohol can worsen sleep quality and may be unsafe with medicines or breathing problems.",
            "taskRef": {
              "itemId": "sleep-food-caffeine",
              "group": "foodIdeas",
              "taskId": "food-3-alcohol-may-make-someone-feel-sleepy-at"
            }
          },
          {
            "id": "fluids",
            "category": "food",
            "priority": 82,
            "when": {
              "patterns": [
                "night-waking"
              ],
              "factors": [
                "late-meals-reflux"
              ],
              "conditions": [
                "diabetes",
                "hypertension"
              ]
            },
            "reason": "Tracking fluid timing can help identify bathroom waking without unsafe over-restriction.",
            "taskRef": {
              "itemId": "sleep-food-caffeine",
              "group": "foodIdeas",
              "taskId": "sleep-food-task-5"
            }
          },
          {
            "id": "medicine-list",
            "category": "tracking",
            "priority": 96,
            "when": {
              "conditions": [
                "diabetes",
                "hypertension",
                "asthma",
                "anxiety-stress",
                "pain-headache",
                "restless-legs"
              ],
              "factors": [
                "medicines"
              ],
              "patterns": [
                "leg-discomfort",
                "daytime-sleepiness"
              ]
            },
            "reason": "A complete list helps a clinician or pharmacist review timing, sedation, stimulation, and interactions.",
            "taskRef": {
              "itemId": "sleep",
              "group": "helpfulTasks",
              "taskId": "habit-sleep-medication-review"
            }
          },
          {
            "id": "food-review",
            "category": "food",
            "priority": 72,
            "when": {
              "conditions": [
                "diabetes",
                "hypertension"
              ],
              "factors": [
                "late-meals-reflux",
                "caffeine-stimulants",
                "alcohol"
              ]
            },
            "reason": "Recording timing helps adapt food and drink choices to the person’s condition and schedule.",
            "taskRef": {
              "itemId": "sleep",
              "group": "helpfulTasks",
              "taskId": "habit-sleep-food-caffeine"
            }
          },
          {
            "id": "daylight-naps-summary",
            "category": "daytime",
            "priority": 70,
            "when": {
              "schedule": [
                "night-shift",
                "rotating-shift",
                "split-shift",
                "irregular"
              ],
              "factors": [
                "naps"
              ]
            },
            "reason": "A combined record of light, movement, and naps can show which daytime pattern supports better sleep.",
            "taskRef": {
              "itemId": "sleep",
              "group": "helpfulTasks",
              "taskId": "habit-sleep-daylight-activity"
            }
          },
          {
            "id": "bedroom-summary",
            "category": "environment",
            "priority": 70,
            "when": {
              "factors": [
                "bedroom"
              ],
              "conditions": [
                "asthma",
                "pain-headache",
                "restless-legs"
              ]
            },
            "reason": "A simple bedroom review can identify practical changes and symptoms that continue despite them.",
            "taskRef": {
              "itemId": "sleep",
              "group": "helpfulTasks",
              "taskId": "habit-sleep-environment"
            }
          }
        ],
        "maxPerCategory": 3
      }
    },
    {
      "id": "happiness",
      "letter": "H",
      "title": "Happiness",
      "tag": "Emotional well-being",
      "subtitle": "Happiness in SHINE means emotional well-being: noticing emotions, staying connected, finding meaning, functioning through difficult periods, and recovering after stress.",
      "why": [
        "What emotional well-being means — Happiness does not mean feeling cheerful all the time. Emotional well-being includes recognizing emotions, coping with ordinary stress, maintaining supportive relationships, making decisions, and keeping a sense of meaning or purpose.",
        "How it may feel — Emotional well-being can include calm, interest, hope, connection, satisfaction, or the ability to return to steadiness after disappointment. It can coexist with grief, illness, pain, or a diagnosed mental-health condition.",
        "Patterns to notice — Record mood, interest, worry, irritability, energy, concentration, sleep, appetite, physical symptoms, social contact, alcohol or drug use, and how well usual responsibilities are being completed.",
        "Many influences matter — Mental health is shaped by biological factors, physical illness, medicines, relationships, caregiving, work, money, housing, discrimination, safety, grief, trauma, isolation, and access to support. A difficult environment is not a personal failure.",
        "Stress and anxiety are not identical — Stress is often a response to a pressure or demand. Anxiety may continue after the immediate pressure has passed and can become a disorder when fear or worry is persistent, difficult to control, or disruptive.",
        "Low mood is not automatically depression — Sadness and discouragement can follow difficult events. Depression involves a broader pattern such as low mood or loss of interest with changes in sleep, appetite, energy, thinking, self-worth, or daily function.",
        "Physical and mental health are connected — Sleep problems, pain, thyroid disease, anemia, diabetes, infections, hormonal changes, medicines, alcohol, and other substances can affect mood or anxiety. Mental-health symptoms can also make physical care harder to maintain.",
        "Supportive actions are foundations, not substitutes — Regular sleep, steady meals, hydration, movement, relaxation, realistic goals, and social connection may support well-being. They do not replace assessment or treatment when symptoms are persistent, severe, or unsafe.",
        "When to seek professional help — Severe or distressing symptoms lasting about two weeks or more, repeated panic, major sleep or appetite change, loss of interest, inability to complete usual tasks, or increasing substance use should be discussed with a health professional.",
        "Safety comes first — Thoughts of suicide, a plan to self-harm, inability to stay safe, severe agitation, psychosis, or immediate danger require urgent help through local emergency or crisis services."
      ],
      "good": [
        {
          "to": "sleep",
          "icon": "🌙",
          "text": "Sleep becomes easier to protect when emotional well-being supports calmer routines, realistic priorities, and earlier help for persistent worry, low mood, or distress."
        },
        {
          "to": "nutrition",
          "icon": "🥗",
          "text": "Nutrition becomes more consistent when regular meals, hydration, and awareness of caffeine, alcohol, and appetite changes are used to support energy and concentration."
        },
        {
          "to": "exercise",
          "icon": "🚶",
          "text": "Exercise is easier to begin when goals are small and realistic. Movement can support mood and structure, while the right activity level depends on health, safety, and current function."
        },
        {
          "to": "immunity",
          "icon": "🛡️",
          "text": "Immunity-supporting routines are easier to maintain when emotional well-being supports sleep, food, movement, recovery, medication consistency, and follow-up care."
        }
      ],
      "bad": [
        {
          "to": "sleep",
          "icon": "🌙",
          "text": "Sleep can deteriorate when worry, rumination, panic, low mood, trauma symptoms, substance use, or late-night coping habits keep the brain and body activated."
        },
        {
          "to": "nutrition",
          "icon": "🥗",
          "text": "Nutrition can become irregular when distress changes appetite, leads to skipped meals, reduces hydration, or increases reliance on caffeine, alcohol, or low-effort food."
        },
        {
          "to": "exercise",
          "icon": "🪫",
          "text": "Movement can disappear when low mood, fear, pain, exhaustion, or loss of confidence makes usual activities feel unmanageable."
        },
        {
          "to": "immunity",
          "icon": "🛡️",
          "text": "Immunity-supporting routines can weaken when chronic stress or a mental-health condition disrupts sleep, meals, movement, treatment, and medical follow-up for long periods."
        }
      ],
      "drLinks": [
        {
          "id": "depression",
          "title": "Depression",
          "text": "Persistent low mood or loss of interest with changes in sleep, appetite, energy, thinking, self-worth, or daily function."
        },
        {
          "id": "anxiety",
          "title": "Anxiety disorders",
          "text": "Fear, worry, panic, tension, avoidance, or physical symptoms that are persistent, difficult to control, or disruptive."
        },
        {
          "id": "chronic-stress",
          "title": "Chronic stress",
          "text": "Long-lasting pressure or repeated stress responses that begin to affect sleep, concentration, mood, physical symptoms, substances, or daily function."
        },
        {
          "id": "insomnia",
          "title": "Insomnia",
          "text": "Ongoing difficulty falling asleep, staying asleep, or getting restorative sleep can worsen emotional regulation and daytime coping."
        },
        {
          "id": "headache",
          "title": "Headache or chronic pain",
          "text": "Repeated pain can reduce sleep, concentration, activity, social connection, and enjoyment and may need medical review."
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
          "text": "Choose a safe, realistic form of contact and identify who can provide emotional or practical support."
        },
        {
          "id": "wellbeing-movement",
          "title": "Use movement as a daily reset",
          "text": "Use a manageable amount of activity to support structure and mood without treating exercise as a substitute for care."
        },
        {
          "id": "wellbeing-relaxation",
          "title": "Practice a relaxation response",
          "text": "Try a calming practice that feels safe, stop if it increases distress, and use it alongside—not instead of—needed treatment."
        },
        {
          "id": "wellbeing-goals",
          "title": "Set realistic goals and priorities",
          "text": "Reduce overload by choosing one visible next step, allowing rest, and separating urgent tasks from tasks that can wait."
        },
        {
          "id": "wellbeing-foundations",
          "title": "Protect sleep, meals, hydration, and substance safety",
          "text": "Track basic routines and notice whether caffeine, alcohol, nicotine, cannabis, or other substances worsen mood, anxiety, or sleep."
        }
      ],
      "actionPath": {
        "helpfulTasks": [
          {
            "id": "habit-wellbeing-pattern",
            "title": "Track mood and daily function for two weeks",
            "detail": "Record mood, interest, worry, irritability, sleep, appetite, energy, concentration, social contact, substances, and ability to complete usual tasks."
          },
          {
            "id": "habit-wellbeing-connection",
            "title": "Prepare one safe support contact",
            "detail": "Write down one person, service, or community connection you can contact for emotional or practical support."
          },
          {
            "id": "habit-wellbeing-movement",
            "title": "Add a manageable movement reset",
            "detail": "Choose a short walk, mobility practice, or another safe activity that is realistic for your health and current energy."
          },
          {
            "id": "habit-wellbeing-relaxation",
            "title": "Compare one calming practice",
            "detail": "Try slow breathing, progressive muscle relaxation, mindfulness, prayer, music, or time in nature and record whether it helps or increases distress."
          },
          {
            "id": "habit-wellbeing-goals",
            "title": "Prepare one visible next step",
            "detail": "Choose one task that matters today, break it into a smaller action, and decide what can wait."
          },
          {
            "id": "habit-wellbeing-foundations",
            "title": "Track sleep, meals, and hydration",
            "detail": "Use a basic routine and record whether missed sleep, meals, fluids, caffeine, alcohol, or other substances change symptoms."
          },
          {
            "id": "habit-wellbeing-med-list",
            "title": "Prepare a medication and substance list",
            "detail": "Include prescriptions, over-the-counter products, supplements, caffeine, nicotine, alcohol, cannabis, and other substances."
          },
          {
            "id": "habit-wellbeing-safety-plan",
            "title": "Prepare a safety-support plan with a clinician",
            "detail": "Identify warning signs, safe contacts, local crisis options, and steps to reduce immediate access to means when clinically appropriate."
          }
        ],
        "questions": [
          {
            "id": "ask-depression",
            "title": "Could depression be contributing?",
            "detail": "Describe low mood, loss of interest, sleep, appetite, energy, concentration, guilt, hopelessness, and functional change."
          },
          {
            "id": "ask-anxiety",
            "title": "Could an anxiety disorder or panic be contributing?",
            "detail": "Describe worries, triggers, avoidance, physical symptoms, panic episodes, duration, and effect on daily life."
          },
          {
            "id": "ask-chronic-stress",
            "title": "Could chronic stress, grief, trauma, or burnout be contributing?",
            "detail": "Explain the pressures involved, how long they have lasted, and which physical or emotional symptoms have changed."
          },
          {
            "id": "ask-medical-contributors",
            "title": "Could a health condition, medicine, supplement, or substance be contributing?",
            "detail": "Bring a complete list and mention thyroid symptoms, anemia history, pain, sleep problems, hormonal changes, and recent illness."
          },
          {
            "id": "ask-treatment-options",
            "title": "What treatment and support options fit my needs and preferences?",
            "detail": "Ask about psychotherapy, medication, combined care, social support, accessibility, language, culture, pregnancy, and other health conditions."
          },
          {
            "id": "ask-safety-plan",
            "title": "What should my safety plan include?",
            "detail": "Ask which warning signs require urgent help, who to contact, and how family or trusted people should respond."
          }
        ]
      },
      "contentStatus": "researched",
      "contentTemplate": "shine-teaching",
      "researchBatch": "BATCH_07_MOOD_STRESS",
      "editorialSourceIds": [
        "CDC_MENTAL_HEALTH_OVERVIEW",
        "NIMH_CARING_MENTAL_HEALTH",
        "NIMH_DEPRESSION",
        "NIMH_GAD",
        "CDC_MANAGING_STRESS",
        "CDC_SOCIAL_CONNECTION",
        "NIMH_SUICIDE_WARNING_SIGNS"
      ],
      "relatedIds": [
        "depression",
        "anxiety",
        "chronic-stress",
        "insomnia",
        "headache",
        "wellbeing-connection",
        "wellbeing-movement",
        "wellbeing-relaxation",
        "wellbeing-goals",
        "wellbeing-foundations"
      ],
      "clinicalReview": {
        "status": "clinical-review-required",
        "fields": [
          "suicide and self-harm crisis wording",
          "psychosis and severe agitation wording",
          "two-week help-seeking wording",
          "child and adolescent adaptations",
          "pregnancy and postpartum adaptations",
          "substance-use crisis wording",
          "local emergency and crisis-service localization"
        ]
      }
    },
    {
      "id": "immunity",
      "letter": "I",
      "title": "Immunity",
      "tag": "Defense and recovery",
      "subtitle": "Immunity is a coordinated defense and recovery system. It includes physical barriers, immune cells, antibodies, inflammation, memory, and carefully regulated responses—not a single food, vitamin, or “boost.”",
      "why": [
        "What immunity means — The immune system protects the body from infections and responds to damaged or abnormal cells. It works through organs, tissues, barriers, white blood cells, antibodies, signaling chemicals, and immune memory.",
        "Different defenses do different jobs — Skin and lining tissues help block entry. Innate defenses respond quickly. Adaptive defenses use B cells, T cells, and antibodies to recognize specific threats and remember some of them.",
        "Balance matters — A healthy immune response must be strong enough to control threats and regulated enough to avoid unnecessary damage. “More immune activity” is not automatically better.",
        "Vaccination is specific training — Vaccines prepare adaptive immunity for particular infections. The recommended product and timing depend on age, pregnancy, health conditions, medicines, treatment plans, and local guidance.",
        "Prevention uses layers — Staying current with recommended vaccination, hand hygiene, respiratory etiquette, cleaner indoor air, safer food handling, and reducing close exposure while ill can lower infection risk.",
        "Nutrition supports normal function — Adequate energy, protein, vitamins, and minerals are needed for immune cells, barriers, healing, and recovery. A deficiency may weaken normal function, but extra intake does not create unlimited protection.",
        "Sleep and recovery matter — Regular sleep supports normal immune regulation. Acute illness may require more rest, fluid planning, and temporary adjustment of activity.",
        "Movement supports whole-body health — Regular appropriate activity supports cardiovascular, metabolic, muscle, and mental health. Hard exercise during fever, dehydration, severe fatigue, chest symptoms, or breathing difficulty may be unsafe.",
        "Patterns to notice — Record how often infections occur, how severe they are, how long recovery takes, whether unusual organisms or repeated antibiotics are involved, and whether weight loss, poor healing, swollen glands, rash, joint symptoms, or treatment changes occur.",
        "When DR assessment matters — Repeated, severe, unusual, or difficult-to-treat infections; unexplained weight loss; poor wound healing; persistent fever; immune-suppressing treatment; or rapidly worsening symptoms need clinician review rather than self-treatment with supplements."
      ],
      "good": [
        {
          "to": "nutrition",
          "icon": "🥕",
          "text": "Nutrition supplies energy, protein, vitamins, and minerals used by immune cells, physical barriers, healing, and recovery."
        },
        {
          "to": "sleep",
          "icon": "🌙",
          "text": "Sleep supports normal immune regulation and gives the body protected time for repair and recovery."
        },
        {
          "to": "exercise",
          "icon": "🚶",
          "text": "Appropriate regular movement supports overall health and may help maintain normal immune function, while recovery days protect against overtraining."
        },
        {
          "to": "happiness",
          "icon": "🤝",
          "text": "Emotional well-being and social support can make prevention habits, sleep, meals, movement, treatment follow-up, and recovery easier to maintain."
        }
      ],
      "bad": [
        {
          "to": "nutrition",
          "icon": "🥕",
          "text": "Limited intake, poor absorption, weight loss, or nutrient deficiency can weaken barriers, healing, strength, and normal immune responses."
        },
        {
          "to": "sleep",
          "icon": "🌙",
          "text": "Ongoing sleep loss can disrupt immune regulation and reduce the recovery time available during illness."
        },
        {
          "to": "exercise",
          "icon": "⚠️",
          "text": "Inactivity reduces broad health support, while pushing through fever, dehydration, severe fatigue, chest symptoms, or breathing difficulty can delay recovery or increase risk."
        },
        {
          "to": "happiness",
          "icon": "🌧️",
          "text": "Repeated illness, isolation, uncertainty, and treatment burden can affect mood, confidence, work, family life, and follow-through with care."
        }
      ],
      "drLinks": [
        {
          "id": "cold-flu",
          "title": "Cold or flu-like illness",
          "text": "Cough, sore throat, congestion, fever, chills, body aches, headache, and fatigue can overlap across respiratory infections."
        },
        {
          "id": "immune-deficiency",
          "title": "Immune deficiency",
          "text": "Inherited or acquired immune problems can cause repeated, severe, unusual, or difficult-to-treat infections."
        },
        {
          "id": "autoimmune-disease",
          "title": "Autoimmune disease",
          "text": "The immune system can mistakenly attack healthy tissues, causing inflammation and organ-specific symptoms."
        },
        {
          "id": "malnutrition",
          "title": "Malnutrition or nutrient deficiency",
          "text": "Too little energy, protein, or key nutrients can affect immune function, healing, strength, and recovery."
        },
        {
          "id": "cancer-treatment",
          "title": "Cancer treatment or immune suppression",
          "text": "Chemotherapy and other immune-suppressing treatments can lower infection defenses and change how fever or new symptoms should be handled."
        },
        {
          "id": "diabetes",
          "title": "Diabetes",
          "text": "Persistently high glucose can increase infection risk and slow healing, especially when diabetes is not well controlled."
        }
      ],
      "headings": {
        "why": "1. Immunity, prevention, and recovery",
        "positive": "2. How balanced Immunity supports SHINE",
        "negative": "3. How illness or immune disruption affects SHINE",
        "habits": "4. Practical ways to support prevention and recovery",
        "conditions": "5. Conditions and treatments that may affect immune function"
      },
      "healLinks": [
        {
          "id": "immunity-food-variety",
          "title": "Build nutrient variety through food",
          "text": "Use varied meals with suitable protein, vegetables, fruit, whole grains, legumes, nuts, seeds, and appropriate fortified foods rather than relying on one “immune” ingredient."
        },
        {
          "id": "immunity-sleep-recovery",
          "title": "Protect sleep and recovery",
          "text": "Keep a regular sleep routine, allow recovery during illness, and discuss persistent fever, night symptoms, or severe fatigue."
        },
        {
          "id": "immunity-activity",
          "title": "Use activity without overtraining",
          "text": "Build regular movement when well, reduce intensity during acute illness, and return gradually after significant symptoms."
        },
        {
          "id": "immunity-hygiene",
          "title": "Use layered infection prevention",
          "text": "Combine vaccination planning, hand and respiratory hygiene, cleaner air, safer food handling, and practical exposure reduction."
        },
        {
          "id": "immunity-supplement-caution",
          "title": "Review immune supplements carefully",
          "text": "Check the reason, evidence, total ingredients, interactions, pregnancy, kidney or liver conditions, and treatment plans before use."
        }
      ],
      "actionPath": {
        "foodIdeas": [
          {
            "id": "immunity-food-variety-plan",
            "title": "Add one varied meal each day",
            "detail": "Combine a suitable protein food with vegetables or fruit and a whole grain, legume, or other quality carbohydrate."
          },
          {
            "id": "immunity-food-access-plan",
            "title": "Prepare a realistic food-access plan",
            "detail": "Record affordable, available, culturally appropriate foods and barriers such as swallowing, nausea, transport, or cooking capacity."
          }
        ],
        "helpfulTasks": [
          {
            "id": "immunity-infection-log",
            "title": "Track infection patterns",
            "detail": "Record dates, symptoms, temperature when relevant, testing, treatment, missed activities, and time to recovery."
          },
          {
            "id": "immunity-vaccine-record",
            "title": "Prepare a vaccination record",
            "detail": "List known vaccines and dates, then discuss what is recommended for age, pregnancy, conditions, medicines, and treatment plans."
          },
          {
            "id": "immunity-prevention-review",
            "title": "Review prevention layers",
            "detail": "Check hand hygiene, cough etiquette, ventilation, food handling, and plans for reducing exposure when someone is ill."
          },
          {
            "id": "immunity-sleep-recovery-log",
            "title": "Record sleep and recovery",
            "detail": "Compare sleep, activity, appetite, hydration, and fatigue before, during, and after illness."
          },
          {
            "id": "immunity-medicine-list",
            "title": "Record medicines and supplements",
            "detail": "Include steroids, biologic medicines, chemotherapy, transplant medicines, over-the-counter products, and all supplements."
          },
          {
            "id": "immunity-weight-intake-log",
            "title": "Record weight and intake changes",
            "detail": "Note unplanned weight change, reduced intake, swallowing difficulty, nausea, diarrhea, or food-access problems."
          }
        ],
        "supplements": [
          {
            "id": "immunity-supplement-review",
            "title": "Discuss every immune-marketed supplement",
            "detail": "Discuss the exact product, ingredient amounts, evidence, interactions, overlap, and whether a deficiency has been identified."
          }
        ],
        "questions": [
          {
            "id": "immunity-question-pattern",
            "title": "Ask whether the infection pattern needs further assessment",
            "detail": "Ask whether frequency, severity, organisms, treatment response, or recovery time suggests an immune or other medical problem."
          },
          {
            "id": "immunity-question-vaccines",
            "title": "Ask which vaccinations and timing apply",
            "detail": "Review age, pregnancy, prior reactions, chronic conditions, immune suppression, and treatment timing."
          },
          {
            "id": "immunity-question-medicines",
            "title": "Ask whether a medicine or treatment is changing infection risk",
            "detail": "Ask how steroids, biologics, chemotherapy, transplant medicines, or other treatments affect precautions and monitoring."
          },
          {
            "id": "immunity-question-nutrition",
            "title": "Ask whether nutrition or absorption is affecting recovery",
            "detail": "Discuss weight change, intake, swallowing, digestive symptoms, food access, and whether dietitian support is appropriate."
          },
          {
            "id": "immunity-question-autoimmune",
            "title": "Ask whether inflammation or autoimmune disease could explain the pattern",
            "detail": "Ask how symptoms, examination findings, and targeted testing should be interpreted together."
          },
          {
            "id": "immunity-question-safety",
            "title": "Ask which symptoms require same-day or urgent contact",
            "detail": "Use the condition-specific plan from the treating clinician rather than a generic threshold."
          }
        ],
        "labs": [
          {
            "id": "immunity-lab-blood-count",
            "title": "Discuss whether a blood count with differential is appropriate",
            "detail": "A clinician may use it with the history and examination to assess white cells, anemia, platelets, or treatment effects."
          },
          {
            "id": "immunity-lab-targeted",
            "title": "Discuss targeted immune or nutrition testing",
            "detail": "Immunoglobulins, vaccine-response testing, nutrient tests, inflammatory markers, infection tests, or specialist studies may be considered based on the pattern."
          }
        ]
      },
      "contentStatus": "researched",
      "contentTemplate": "shine-teaching",
      "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
      "editorialSourceIds": [
        "NIAID_IMMUNE_OVERVIEW",
        "CDC_RESPIRATORY_PREVENTION",
        "CDC_RESPIRATORY_HYGIENE",
        "ODS_IMMUNE_FUNCTION",
        "FDA_SUPPLEMENT_101"
      ],
      "relatedIds": [
        "cold-flu",
        "immune-deficiency",
        "autoimmune-disease",
        "malnutrition",
        "cancer-treatment",
        "immunity-food-variety",
        "immunity-sleep-recovery",
        "immunity-activity",
        "immunity-hygiene",
        "immunity-supplement-caution",
        "breathing-allergy-emergency"
      ],
      "clinicalReview": {
        "status": "clinical-review-required",
        "fields": [
          "vaccine schedules and contraindications",
          "infection-control timing and isolation",
          "mask or respirator selection",
          "immune-testing indications and thresholds",
          "fever and emergency instructions",
          "pregnancy, childhood, older-adult, disability, kidney, liver, and immune-suppression adaptations"
        ]
      }
    },
    {
      "id": "nutrition",
      "letter": "N",
      "title": "Nutrition",
      "tag": "Food pattern, hydration, and practical planning",
      "subtitle": "Nutrition is the everyday pattern of food and drink that supplies energy and nutrients while fitting health needs, culture, budget, access, preferences, and daily life.",
      "why": [
        "What nutrition means — Nutrition is not one “perfect” food or a short-term diet. It is the overall pattern of foods and drinks used to meet energy and nutrient needs across time.",
        "A strong everyday pattern — Build most meals from varied vegetables and fruit, protein foods, whole grains or other high-fiber carbohydrates, suitable dairy or fortified alternatives, healthy fats, and water.",
        "Variety fills different roles — Foods contribute different combinations of protein, carbohydrate, fat, fiber, vitamins, and minerals. Rotating food groups and colors reduces reliance on a narrow set of foods.",
        "A balanced meal is a flexible guide — A practical meal can combine vegetables or fruit, a protein source, a high-fiber carbohydrate, and a suitable drink. Portions and timing depend on appetite, activity, age, treatment, and health conditions.",
        "Hydration is part of nutrition — Water supports normal body function. Needs change with heat, activity, illness, pregnancy, age, medicines, and heart or kidney conditions, so one fixed amount does not fit everyone.",
        "Food labels can support comparison — Serving size, dietary fiber, sodium, added sugars, saturated fat, and allergen information can help compare similar packaged foods. A label supports choices but does not define the quality of the whole diet.",
        "Healthy eating must work in real life — Frozen and lower-sodium canned foods, leftovers, beans, familiar staple foods, and simple repeat meals can support nutrition when time, energy, access, or cost is limited.",
        "Culture and preference belong in the plan — A healthy pattern can use many cuisines and can be adapted for vegetarian eating, religious practice, allergies, texture needs, and family food traditions.",
        "Patterns to notice — Track skipped meals, appetite change, thirst, digestive symptoms, food access, unplanned weight change, restrictive rules, glucose patterns, and whether medicines or supplements affect eating.",
        "When individualized support matters — Pregnancy, childhood, older age, diabetes treatment, kidney or heart disease, food allergy, swallowing difficulty, eating disorders, malnutrition risk, and major unplanned weight change should be discussed with a clinician or dietitian."
      ],
      "good": [
        {
          "to": "immunity",
          "icon": "🛡️",
          "text": "Immunity is supported by adequate energy, protein, vitamins, minerals, and food safety; a varied pattern helps provide the materials used for normal defense and recovery."
        },
        {
          "to": "exercise",
          "icon": "🏃",
          "text": "Exercise is supported by enough food, fluids, carbohydrate, protein, and recovery nutrition to match the person’s activity and medical needs."
        },
        {
          "to": "sleep",
          "icon": "🌙",
          "text": "Sleep can be easier to protect when caffeine and alcohol are used carefully, hunger is addressed, and large or reflux-triggering meals do not crowd bedtime."
        },
        {
          "to": "happiness",
          "icon": "🧠",
          "text": "Happiness, concentration, and daily function may be easier to support when meals, hydration, and caffeine use are regular enough to reduce avoidable energy swings."
        }
      ],
      "bad": [
        {
          "to": "immunity",
          "icon": "🛡️",
          "text": "Immunity and healing can be affected when low intake, poor absorption, severe restriction, or low variety causes inadequate energy, protein, vitamins, or minerals."
        },
        {
          "to": "exercise",
          "icon": "🪫",
          "text": "Exercise becomes harder or less safe when dehydration, skipped meals, inadequate intake, or poor recovery contributes to dizziness, weakness, or low glucose."
        },
        {
          "to": "sleep",
          "icon": "🌙",
          "text": "Sleep can be disrupted by late caffeine, alcohol, heavy meals, reflux, hunger, or unstable glucose patterns."
        },
        {
          "to": "happiness",
          "icon": "☁️",
          "text": "Mood and focus may be harder to maintain when distress, food insecurity, restrictive eating, dehydration, or heavy stimulant use repeatedly disrupts meals and energy."
        }
      ],
      "drLinks": [
        {
          "id": "diabetes",
          "title": "Diabetes",
          "text": "Diabetes care connects meal structure, carbohydrate timing, glucose monitoring, low- and high-glucose safety, medicines, and complication screening."
        },
        {
          "id": "hypertension",
          "title": "Hypertension",
          "text": "Hypertension care connects repeated measurements, sodium and DASH-style eating, sleep and activity, medicines, kidney and cardiovascular risk, and an urgent-symptom plan."
        },
        {
          "id": "cholesterol",
          "title": "High cholesterol",
          "text": "Cholesterol care connects LDL and the full lipid profile, Mediterranean-style eating, activity, medicines, family history, and overall cardiovascular risk."
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
        },
        {
          "id": "low-sugar-symptoms",
          "title": "Low glucose symptoms",
          "text": "Shaking, sweating, hunger, confusion, weakness, or impaired consciousness may require the written low-glucose plan."
        },
        {
          "id": "high-sugar-symptoms",
          "title": "High glucose symptoms",
          "text": "Thirst, frequent urination, blurred vision, fatigue, dehydration, vomiting, or breathing changes need interpretation in context."
        },
        {
          "id": "gastroenteritis",
          "title": "Vomiting / diarrhea",
          "text": "Fluid loss, food tolerance, medicine safety, duration, fever, blood, pain, and dehydration risk should be reviewed together."
        },
        {
          "id": "digestive-medicine-review",
          "title": "Medication and supplement digestive review",
          "text": "Compare bowel and stomach symptoms with every prescription, nonprescription medicine, vitamin, mineral, herb, and recent change."
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
          "title": "Build food variety across the week",
          "text": "Use different vegetables, fruits, protein foods, whole grains, legumes, nuts, seeds, and suitable dairy or alternatives without requiring every food group at every meal."
        },
        {
          "id": "nutrition-plate",
          "title": "Build a balanced meal pattern",
          "text": "Use a flexible plate or bowl structure, practical examples, and portion awareness rather than a rigid “perfect plate.”"
        },
        {
          "id": "nutrition-water",
          "title": "Use water and suitable drinks",
          "text": "Make water a regular option, compare sugary drinks, and adapt fluid planning to heat, activity, illness, medicines, and medical restrictions."
        },
        {
          "id": "nutrition-limit",
          "title": "Use labels and gradual food swaps",
          "text": "Compare added sugars, sodium, saturated fat, fiber, ingredients, serving size, and allergens without turning eating into an all-or-nothing rule."
        },
        {
          "id": "nutrition-plan",
          "title": "Plan meals for the real week",
          "text": "Use simple anchors, shopping lists, leftovers, frozen or canned foods, budget strategies, cultural foods, and backup meals."
        },
        {
          "id": "sugar-lifestyle",
          "title": "Connect meals with glucose patterns",
          "text": "Track meal timing, carbohydrate portions, activity, sleep, medicines, and readings without changing diabetes treatment independently."
        },
        {
          "id": "diabetes-diet",
          "title": "Build a diabetes-supporting meal pattern",
          "text": "Use a flexible plate, match carbohydrate timing with treatment, and compare repeat meals with glucose patterns."
        },
        {
          "id": "sugar-range",
          "title": "Understand glucose ranges",
          "text": "Separate general treatment targets from personal action thresholds and diagnostic laboratory criteria."
        },
        {
          "id": "hba1c",
          "title": "Interpret HbA1c carefully",
          "text": "Use the three-month estimate together with current readings, hypoglycemia history, anemia, and other factors."
        },
        {
          "id": "hypertension-diet",
          "title": "Build a DASH-style eating pattern",
          "text": "Use vegetables, fruit, legumes, whole grains, suitable dairy, lean protein, unsalted nuts, and lower-sodium preparation, with kidney and medicine cautions."
        },
        {
          "id": "bp-home-monitoring",
          "title": "Measure blood pressure accurately at home",
          "text": "Use a validated upper-arm device, correct cuff size, supported posture, a repeatable schedule, and a complete log."
        },
        {
          "id": "bp-range",
          "title": "Understand blood-pressure ranges",
          "text": "Separate general adult categories from personal home targets, pregnancy ranges, and emergency instructions."
        },
        {
          "id": "mediterranean-heart-diet",
          "title": "Build a Mediterranean-style heart-health pattern",
          "text": "Use plant-forward meals, whole grains, beans, nuts, fish or suitable lean protein, and unsaturated fats while limiting excess saturated fat, sodium, added sugar, and highly processed foods."
        },
        {
          "id": "ldl",
          "title": "Interpret LDL in the full risk picture",
          "text": "Separate a general laboratory reference from the personal LDL goal, expected reduction, family history, and treatment plan."
        },
        {
          "id": "fiber-support",
          "title": "Build fiber gradually",
          "text": "Use varied plant foods, suitable fluids, and a one-change-at-a-time symptom record."
        },
        {
          "id": "hydration-support",
          "title": "Protect hydration during fluid loss",
          "text": "Track urine, dizziness, vomiting, diarrhea, and the need for an individualized oral rehydration or sick-day plan."
        },
        {
          "id": "meal-tolerance",
          "title": "Return to meals as tolerance improves",
          "text": "Use small familiar meals, expand variety gradually, and avoid unnecessary long-term restriction."
        }
      ],
      "actionPath": {
        "helpfulTasks": [
          {
            "id": "nutrition-task-week-pattern",
            "title": "Record a three-day food and drink pattern",
            "detail": "Include meal timing, drinks, snacks, appetite, symptoms, access barriers, and one weekend or workday when possible."
          },
          {
            "id": "nutrition-task-variety",
            "title": "Track food-group variety across one week",
            "detail": "Record vegetables, fruit, protein foods, beans or lentils, whole grains, nuts or seeds, and suitable dairy or alternatives without aiming for perfection each day."
          },
          {
            "id": "nutrition-task-plate",
            "title": "Prepare three balanced repeat meals",
            "detail": "Combine vegetables or fruit, a protein source, a high-fiber carbohydrate, and a suitable drink using familiar foods."
          },
          {
            "id": "nutrition-task-water",
            "title": "Review usual drinks and hydration cues",
            "detail": "Track water, sugary drinks, caffeine, alcohol, thirst, urine changes, heat, activity, and any fluid restriction."
          },
          {
            "id": "nutrition-task-label",
            "title": "Compare labels on three similar foods",
            "detail": "Review serving size, fiber, sodium, added sugars, saturated fat, ingredients, and allergen statements."
          },
          {
            "id": "nutrition-task-swap",
            "title": "Prepare two practical food or drink swaps",
            "detail": "Use changes that fit culture, cost, access, allergies, appetite, and cooking ability."
          },
          {
            "id": "nutrition-task-plan",
            "title": "Prepare a realistic weekly meal outline",
            "detail": "Choose repeatable breakfasts, main meals, snacks, leftovers, and one backup meal for low-time or low-energy days."
          }
        ],
        "questions": [
          {
            "id": "nutrition-q-pattern",
            "title": "Ask which part of the current food pattern matters most",
            "detail": "Ask whether meal timing, low variety, portions, drinks, sodium, added sugar, saturated fat, fiber, or inadequate intake is the first priority."
          },
          {
            "id": "nutrition-q-condition",
            "title": "Ask how conditions and medicines should change the plan",
            "detail": "Review diabetes, kidney or heart disease, digestive symptoms, pregnancy, food allergy, swallowing, and medicine timing."
          },
          {
            "id": "nutrition-q-weight",
            "title": "Ask whether appetite or weight change needs assessment",
            "detail": "Discuss unplanned loss or gain, reduced strength, swelling, restrictive eating, food insecurity, or difficulty eating."
          },
          {
            "id": "nutrition-q-allergy",
            "title": "Ask whether an allergy, intolerance, or texture-specific plan is needed",
            "detail": "Bring labels, reaction history, swallowing concerns, and foods currently avoided."
          },
          {
            "id": "nutrition-q-dietitian",
            "title": "Ask whether a registered dietitian would help adapt the plan",
            "detail": "Bring usual meals, cultural foods, budget, access, cooking equipment, symptoms, laboratory results, and treatment schedule."
          },
          {
            "id": "nutrition-q-glucose",
            "title": "Ask how meal timing and carbohydrate portions should match the diabetes plan",
            "detail": "Ask about monitoring, activity, low-glucose risk, illness, fasting, and medicines without changing treatment alone."
          }
        ]
      },
      "contentStatus": "researched",
      "additionalResearchBatches": [
        "BATCH_03_DIABETES_GLUCOSE",
        "BATCH_04_BLOOD_PRESSURE",
        "BATCH_05_CHOLESTEROL_HEART",
        "BATCH_06_DIGESTIVE_SUPPORT",
        "BATCH_10_IMMUNITY_INFECTION"
      ],
      "editorialSourceIds": [
        "USDA_DGA_2025_2030",
        "USDA_MYPLATE",
        "CDC_HEALTHY_EATING_TIPS",
        "CDC_WATER_HEALTHIER_DRINKS",
        "FDA_NUTRITION_FACTS_LABEL",
        "FDA_FOOD_ALLERGIES",
        "NIDDK_HEALTHY_EATING_LIFE",
        "NIDDK_HEALTHY_HABITS_BUDGET",
        "NIDDK_HEALTHY_LIVING_DIABETES",
        "CDC_DIABETES_MEAL_PLANNING"
      ],
      "contentTemplate": "shine-teaching",
      "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
      "relatedIds": [
        "nutrition-variety",
        "nutrition-plate",
        "nutrition-water",
        "nutrition-limit",
        "nutrition-plan",
        "sugar-lifestyle",
        "diabetes-diet",
        "hypertension-diet",
        "mediterranean-heart-diet",
        "iron-rich-diet",
        "fiber-support",
        "malnutrition"
      ],
      "clinicalReview": {
        "status": "clinical-review-required",
        "fields": [
          "individual calorie, protein, carbohydrate, fat, fiber, sodium, potassium, and fluid targets",
          "pregnancy, childhood, older-adult, kidney, liver, heart-failure, diabetes, eating-disorder, malnutrition, allergy, and swallowing adaptations",
          "weight-loss or weight-gain prescriptions",
          "therapeutic elimination diets",
          "oral nutrition products, tube feeding, parenteral nutrition, and refeeding guidance"
        ]
      }
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
      ],
      "actionPath": {
        "helpfulTasks": [
          {
            "id": "habit-exercise-start-small",
            "title": "Start below your maximum",
            "detail": "Choose an amount you can repeat without severe pain, dizziness, or exhaustion, then build gradually."
          },
          {
            "id": "habit-exercise-aerobic",
            "title": "Build aerobic activity",
            "detail": "Use brisk walking, cycling, swimming, dancing, or another activity that raises breathing while still matching safety and ability."
          },
          {
            "id": "habit-exercise-strength",
            "title": "Include strength work",
            "detail": "Train major muscle groups on at least two days per week using body weight, bands, machines, or suitable household resistance."
          },
          {
            "id": "habit-exercise-sit-less",
            "title": "Break up long sitting",
            "detail": "Stand, stretch, or walk briefly during the day; movement does not need to be a full workout to count."
          },
          {
            "id": "habit-exercise-recovery",
            "title": "Plan recovery and warning signs",
            "detail": "Balance activity with sleep, hydration, food, easier days, and medical review when symptoms are unstable."
          }
        ],
        "questions": [
          {
            "id": "ask-arthritis",
            "title": "Could arthritis or joint pain be affecting my exercise?",
            "detail": "Pain, stiffness, swelling, and reduced range of motion may require activity modification rather than complete inactivity."
          },
          {
            "id": "ask-asthma",
            "title": "Could asthma be affecting my exercise?",
            "detail": "Exercise can trigger symptoms in some people, but a clinician-guided asthma plan can often support safe activity."
          },
          {
            "id": "ask-heart-disease",
            "title": "Could heart disease be affecting my exercise?",
            "detail": "Chest pain, unusual breathlessness, fainting, palpitations, or known cardiovascular disease may require exercise clearance or limits."
          },
          {
            "id": "ask-anemia",
            "title": "Could anemia be affecting my exercise?",
            "detail": "Low oxygen-carrying capacity can cause fatigue, breathlessness, dizziness, and reduced exercise tolerance."
          },
          {
            "id": "ask-fatigue",
            "title": "Could persistent fatigue be affecting my exercise?",
            "detail": "Ongoing exhaustion may reflect sleep, mood, infection, endocrine, nutritional, medication, or other causes that need assessment."
          }
        ]
      },
      "contentStatus": "placeholder",
      "contentTemplate": "shine-teaching",
      "researchBatch": null,
      "editorialSourceIds": [],
      "relatedIds": [
        "sleep",
        "happiness",
        "immunity",
        "nutrition",
        "exercise-start-small",
        "exercise-aerobic",
        "exercise-strength",
        "exercise-sit-less",
        "exercise-recovery",
        "arthritis",
        "asthma",
        "heart-disease",
        "anemia",
        "fatigue"
      ],
      "clinicalReview": {
        "status": "clinical-review-required",
        "fields": [
          "fullPathwayResearch",
          "numericTargets",
          "contraindications",
          "conditionAdaptations",
          "pregnancyChildOlderAdultGuidance",
          "urgentInstructions"
        ]
      }
    }
  ],
  "healSections": [
    {
      "id": "diet",
      "title": "Diet",
      "icon": "🍽️",
      "subtitle": "Filter local food items by diet type, then add the ones you want to Your Plan.",
      "items": [
        {
          "id": "diabetes-diet",
          "title": "Diabetes diet",
          "subtitle": "A flexible meal pattern that matches carbohydrate amount and timing with medicines, activity, glucose goals, culture, appetite, and other health needs.",
          "body": [
            "Purpose — Food planning can support glucose management, heart health, blood pressure, energy, and nutrition. It does not replace insulin or other prescribed treatment.",
            "Who it may support — The pattern can be adapted for type 1, type 2, gestational, and other diabetes forms, but carbohydrate and medicine decisions must be individualized.",
            "Core plate pattern — A practical starting plate uses non-starchy vegetables for about half, a protein food for one quarter, and a carbohydrate food for one quarter, with water or another suitable drink.",
            "Carbohydrate matters — Grains, bread, rice, pasta, fruit, milk, yogurt, beans, lentils, starchy vegetables, sweets, and sugary drinks can affect glucose. The amount and timing usually matter more than banning one food group.",
            "Foods to emphasize — Use vegetables, beans, lentils, whole grains, whole fruit, lean proteins, fish, nuts, seeds, and unsaturated fats more often when they fit kidney, allergy, digestive, and cultural needs.",
            "Foods to use carefully — Sugar-sweetened drinks, large portions of refined carbohydrate, frequent sweets, highly processed foods, excess sodium, and high saturated-fat choices can crowd out a healthier pattern.",
            "Meal-building guidance — Pair carbohydrate with protein, vegetables, or healthy fat. Use similar portions at repeat meals when learning how food and medicine interact.",
            "Regularity and medicines — Skipping or delaying meals can contribute to low glucose with insulin or some medicines. Other treatment plans may allow more flexible timing.",
            "Meal examples — Oats with berries and nuts; egg with vegetables and whole-grain bread; lentils with tomato and peppers; fish with vegetables and a whole grain; chicken with vegetables and brown rice; or yogurt with berries and nuts.",
            "Food swaps — Replace sugary drinks with water; use whole fruit instead of juice more often; replace part of refined grain with beans, lentils, or whole grain; and add non-starchy vegetables before increasing starch portions.",
            "Monitoring — Compare meal timing, portions, activity, and glucose readings over several days. One reading is not enough to label a food as good or bad.",
            "Cautions — Pregnancy, kidney disease, gastroparesis, swallowing problems, food insecurity, eating disorders, recurrent hypoglycemia, and intensive insulin use require individualized planning."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "diabetes-diet-food-oats",
                "title": "Add oats with berries and unsalted nuts",
                "detail": "Use plain oats and a portion that fits the carbohydrate plan."
              },
              {
                "id": "diabetes-diet-food-egg",
                "title": "Add an egg and vegetable meal",
                "detail": "Add a suitable whole-grain or other carbohydrate portion when needed."
              },
              {
                "id": "diabetes-diet-food-lentil",
                "title": "Add lentils with tomato and peppers",
                "detail": "This provides plant protein, fiber, carbohydrate, and vegetables in one meal."
              },
              {
                "id": "diabetes-diet-food-fish",
                "title": "Add grilled fish, vegetables, and a whole grain",
                "detail": "Use a measured grain portion and limit sugary sauces."
              },
              {
                "id": "diabetes-diet-food-chicken",
                "title": "Add chicken, vegetables, and brown rice",
                "detail": "Keep vegetables prominent and adapt rice to the treatment plan."
              },
              {
                "id": "diabetes-diet-food-yogurt",
                "title": "Add plain yogurt with berries and nuts",
                "detail": "Choose unsweetened yogurt and review the label for total carbohydrate."
              },
              {
                "id": "diabetes-diet-food-beans",
                "title": "Add white beans with lemon and vegetables",
                "detail": "Increase fiber gradually and adapt portions for kidney or digestive conditions."
              },
              {
                "id": "diabetes-diet-food-fruitnuts",
                "title": "Add whole fruit with unsalted nuts",
                "detail": "Use a planned portion and do not use this slower snack to replace a fast-acting low-glucose treatment."
              }
            ],
            "helpfulTasks": [
              {
                "id": "diabetes-diet-task-plate",
                "title": "Photograph or sketch three usual meals",
                "detail": "Compare the vegetable, protein, carbohydrate, and drink portions."
              },
              {
                "id": "diabetes-diet-task-labels",
                "title": "Compare food labels for total carbohydrate and added sugar",
                "detail": "Also review serving size, fiber, sodium, and saturated fat."
              },
              {
                "id": "diabetes-diet-task-pattern",
                "title": "Compare similar meals with glucose patterns",
                "detail": "Record meal timing, portion, activity, and medicine timing without changing treatment independently."
              },
              {
                "id": "diabetes-diet-task-plan",
                "title": "Prepare a realistic weekly food plan",
                "detail": "Use familiar foods, leftovers, frozen vegetables, canned beans, and affordable protein options."
              }
            ],
            "questions": [
              {
                "id": "diabetes-diet-q-carbs",
                "title": "Do I need carbohydrate counting, a plate method, or another approach?",
                "detail": "The answer depends on insulin use, goals, numeracy, preferences, and daily routine."
              },
              {
                "id": "diabetes-diet-q-timing",
                "title": "How should meal timing match my medicines or insulin?",
                "detail": "Ask what to do when appetite, work shifts, fasting, illness, or exercise changes."
              },
              {
                "id": "diabetes-diet-q-low",
                "title": "Which foods are for routine meals and which are for treating low glucose?",
                "detail": "Keep emergency fast-acting carbohydrate separate from ordinary snacks."
              },
              {
                "id": "diabetes-diet-q-conditions",
                "title": "How should kidney, heart, digestive, pregnancy, or weight goals change the plan?",
                "detail": "Ask which priority takes precedence when recommendations conflict."
              },
              {
                "id": "diabetes-diet-q-dietitian",
                "title": "Would a registered dietitian or diabetes educator help?",
                "detail": "Bring usual meals, glucose records, medicines, budget, cultural foods, and barriers."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "diet",
          "researchBatch": "BATCH_03_DIABETES_GLUCOSE",
          "editorialSourceIds": [
            "NIDDK_HEALTHY_LIVING_DIABETES",
            "CDC_DIABETES_MEAL_PLANNING",
            "CDC_HEALTHY_EATING_DIABETES"
          ],
          "relatedIds": [
            "diabetes",
            "sugar-range",
            "hba1c",
            "low-sugar-symptoms",
            "high-sugar-symptoms",
            "metformin",
            "insulin"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "carbohydrate prescription",
              "insulin-to-carbohydrate matching",
              "pregnancy adaptations",
              "kidney and gastroparesis adaptations",
              "eating-disorder language",
              "low-glucose treatment amounts"
            ]
          }
        },
        {
          "id": "hypertension-diet",
          "title": "DASH-style eating for blood pressure",
          "subtitle": "A practical pattern built around vegetables, fruit, legumes, whole grains, suitable dairy, lean protein, unsalted nuts, and lower-sodium choices.",
          "body": [
            "Purpose — A DASH-style eating pattern can support blood-pressure control and overall heart health. It works as part of a broader care plan and does not replace prescribed medicine.",
            "Who it may support — Adults with elevated or high blood pressure may discuss this pattern. Pregnancy, childhood, kidney disease, heart failure, diabetes, swallowing problems, allergies, and eating-disorder history may require adaptation.",
            "Core pattern — Build most meals from vegetables or fruit, whole grains, beans or lentils, suitable low-fat dairy or alternatives, fish or poultry, and unsalted nuts or seeds. Use less processed meat, highly salted food, sweets, and saturated fat.",
            "Sodium — Much sodium comes from packaged food, restaurant meals, breads, sauces, processed meat, cheese, snacks, and seasoning mixes. Compare labels and reduce sodium gradually so the pattern remains realistic.",
            "General DASH references — NHLBI DASH materials commonly use a 2,300 mg daily sodium pattern and note that 1,500 mg may lower blood pressure further. A clinician or dietitian should individualize the target.",
            "Potassium and minerals — Fruits, vegetables, beans, dairy, fish, and nuts provide potassium, calcium, magnesium, fiber, and protein. Potassium supplements or potassium-based salt substitutes are not automatically safe with kidney disease or some medicines.",
            "Meal-building pattern — Choose half a plate of nonstarchy vegetables when practical, add a lean or plant protein, add a whole-grain or other high-fiber carbohydrate, and use fruit or suitable dairy as needed.",
            "Practical examples — Oats with berries and unsalted nuts; lentils with vegetables; grilled fish with vegetables and a whole grain; white beans with lemon and vegetables; or plain yogurt with fruit and nuts.",
            "Food swaps — Use herbs, garlic, lemon, vinegar, pepper, and spices instead of relying on salt. Choose unsalted nuts, lower-sodium canned foods, fresh or frozen vegetables, and less processed protein more often.",
            "Cautions — Fluid restriction, kidney disease, heart failure, diabetes medicines, anticoagulants, food allergy, pregnancy, and gastrointestinal conditions can change which foods, minerals, portions, or drinks are appropriate."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "dash-food-oats",
                "title": "Oats with berries and unsalted nuts",
                "detail": "Whole grains, fruit, and unsalted nuts can fit a DASH-style breakfast; adapt portions for glucose or kidney goals."
              },
              {
                "id": "dash-food-yogurt",
                "title": "Plain yogurt with fruit and unsalted nuts",
                "detail": "Choose an unsweetened option and review potassium, phosphorus, or lactose needs when relevant."
              },
              {
                "id": "dash-food-lentils",
                "title": "Lentils with tomato, peppers, and herbs",
                "detail": "Beans or lentils provide fiber and plant protein; use lower-sodium broth or seasoning."
              },
              {
                "id": "dash-food-fish",
                "title": "Grilled fish with vegetables and a whole grain",
                "detail": "Avoid heavily salted marinades and processed fish products."
              },
              {
                "id": "dash-food-chicken",
                "title": "Chicken, vegetables, and brown rice",
                "detail": "Use unprocessed poultry and flavor with herbs, lemon, garlic, or spices rather than salty sauces."
              },
              {
                "id": "dash-food-beans",
                "title": "White beans with lemon and vegetables",
                "detail": "Rinse canned beans when suitable and compare labels for sodium."
              },
              {
                "id": "dash-food-fruit-nuts",
                "title": "Whole fruit with unsalted nuts",
                "detail": "A simple snack with fruit, fiber, and unsaturated fat; use a planned portion when needed."
              },
              {
                "id": "dash-food-laban",
                "title": "Plain laban or yogurt with cucumber and herbs",
                "detail": "Use a lower-sodium dairy choice and avoid adding large amounts of salt."
              }
            ],
            "helpfulTasks": [
              {
                "id": "dash-task-labels",
                "title": "Compare sodium on five frequently used foods",
                "detail": "Record serving size and sodium per serving before choosing a realistic swap."
              },
              {
                "id": "dash-task-sauces",
                "title": "List sauces, seasoning mixes, and restaurant meals used each week",
                "detail": "These can contribute sodium even when food does not taste very salty."
              },
              {
                "id": "dash-task-meals",
                "title": "Build three repeatable DASH-style meals",
                "detail": "Use familiar foods, budget-friendly ingredients, and preparation methods that can be repeated."
              },
              {
                "id": "dash-task-potassium",
                "title": "Review potassium safety before using salt substitutes",
                "detail": "Bring the medicine list and kidney history to a clinician or pharmacist."
              }
            ],
            "questions": [
              {
                "id": "dash-q-sodium",
                "title": "What sodium target is appropriate for me?",
                "detail": "Ask how pregnancy, kidney disease, heart failure, sweating, medicines, and usual intake affect the target."
              },
              {
                "id": "dash-q-potassium",
                "title": "Are potassium-rich foods or salt substitutes safe for me?",
                "detail": "Review kidney function and medicines that can raise or lower potassium."
              },
              {
                "id": "dash-q-dietitian",
                "title": "Would a dietitian help adapt DASH to my culture, budget, and conditions?",
                "detail": "Bring usual meals, labels, access barriers, and food preferences."
              },
              {
                "id": "dash-q-medicine",
                "title": "How should food timing or grapefruit be handled with my medicines?",
                "detail": "Ask about the exact products rather than applying a general interaction rule."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "diet",
          "researchBatch": "BATCH_04_BLOOD_PRESSURE",
          "editorialSourceIds": [
            "NHLBI_DASH_EATING_PLAN",
            "NHLBI_DASH_LABEL_GUIDE",
            "NHLBI_HIGH_BP_TREATMENT"
          ],
          "relatedIds": [
            "hypertension",
            "bp-range",
            "bp-home-monitoring",
            "bp-lifestyle",
            "bp-meds",
            "hypertension-emergency",
            "heart-disease",
            "diabetes"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "individual sodium target",
              "potassium target and salt-substitute guidance",
              "kidney and heart-failure adaptations",
              "pregnancy and child adaptations",
              "fluid restriction",
              "food–medicine interactions"
            ]
          }
        },
        {
          "id": "mediterranean-heart-diet",
          "title": "Mediterranean-style eating for heart health",
          "subtitle": "A flexible, plant-forward food pattern built around vegetables, fruit, whole grains, beans, nuts, seeds, fish, and unsaturated fats.",
          "body": [
            "Purpose — Mediterranean-style eating supports overall cardiovascular health and can help improve cholesterol, blood pressure, glucose, and food quality when adapted to the person’s needs.",
            "Who it may support — It can be used for general heart health, high cholesterol, diabetes, hypertension, or recovery after cardiovascular disease. Kidney disease, heart failure, pregnancy, allergies, swallowing problems, and medicine interactions may require changes.",
            "There is no single Mediterranean menu — Countries and cultures around the Mediterranean eat differently. The shared pattern matters more than copying one cuisine.",
            "Core pattern — Emphasize vegetables, fruit, whole grains, beans and lentils, nuts and seeds, herbs and spices, and minimally processed foods.",
            "Fat pattern — Use suitable unsaturated fats such as olive or canola oil, nuts, seeds, avocado, and fish in place of some butter, ghee, fatty meat, coconut oil, or other saturated-fat sources.",
            "Protein pattern — Use beans and lentils often, include fish or seafood when suitable, choose poultry or lean meat in moderate portions, and limit processed and fatty meats.",
            "Foods to use carefully — Limit highly processed foods, refined carbohydrates, sugary drinks, excess sodium, added sugars, and frequent foods high in saturated or trans fat.",
            "Meal building — Start with vegetables, add beans, fish, poultry, eggs, yogurt, or another suitable protein, include a whole grain or other high-fiber carbohydrate, and use a modest unsaturated-fat source.",
            "Practical examples — Oats with berries and walnuts; lentil, tomato, cucumber, and herb bowl; grilled fish with vegetables and barley; hummus and vegetable whole-grain wrap; fruit with unsalted nuts.",
            "Cautions — Wine is not required and should not be started for heart health. Alcohol, grapefruit, potassium, sodium, carbohydrate portions, fish choice, food allergy, and calorie needs may require individualized review."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "med-food-oats",
                "title": "Oats with berries and walnuts",
                "detail": "A whole-grain breakfast with soluble fiber, fruit, and unsaturated fat; choose unsweetened ingredients and adapt for allergies."
              },
              {
                "id": "med-food-lentil-bowl",
                "title": "Lentil, tomato, cucumber, and herb bowl",
                "detail": "A plant-forward meal with legumes, vegetables, lemon, and olive oil; rinse canned foods and adapt sodium when needed."
              },
              {
                "id": "med-food-fish-barley",
                "title": "Grilled fish with vegetables and barley",
                "detail": "A meal with fish protein, vegetables, and a whole grain; use lower-sodium preparation and pregnancy-appropriate fish guidance."
              },
              {
                "id": "med-food-hummus-wrap",
                "title": "Hummus and vegetable whole-grain wrap",
                "detail": "A portable meal with legumes, vegetables, and whole grains; compare sodium in hummus and wraps."
              },
              {
                "id": "med-food-fruit-nuts",
                "title": "Whole fruit with unsalted nuts",
                "detail": "A simple snack with fiber and unsaturated fat; use a suitable portion and adapt for allergies or swallowing risk."
              },
              {
                "id": "med-food-beans",
                "title": "White beans with lemon and vegetables",
                "detail": "A fiber-rich plant meal; kidney disease and selected medicines may require potassium review."
              }
            ],
            "helpfulTasks": [
              {
                "id": "med-task-swap",
                "title": "Choose two repeatable saturated-fat swaps",
                "detail": "Examples include plant oil instead of butter, beans instead of processed meat, or nuts instead of a fried snack."
              },
              {
                "id": "med-task-plants",
                "title": "Count plant-food variety across one week",
                "detail": "Track vegetables, fruit, beans, lentils, whole grains, nuts, seeds, herbs, and spices without requiring perfection every day."
              },
              {
                "id": "med-task-labels",
                "title": "Compare sodium, saturated fat, and added sugar on five foods",
                "detail": "Use serving size and ingredients to choose a realistic alternative."
              },
              {
                "id": "med-task-meals",
                "title": "Build three culturally familiar Mediterranean-style meals",
                "detail": "Keep the core pattern while adapting spices, grains, legumes, vegetables, and proteins to preference, budget, and access."
              },
              {
                "id": "med-task-alcohol",
                "title": "Review alcohol rather than adding it for heart health",
                "detail": "Alcohol may be unsafe with pregnancy, liver disease, medicines, addiction risk, sleep problems, or some heart conditions."
              }
            ],
            "questions": [
              {
                "id": "med-q-conditions",
                "title": "How should this pattern be adapted for my conditions and medicines?",
                "detail": "Discuss diabetes, kidney disease, heart failure, swallowing, allergies, pregnancy, anticoagulants, and potassium or sodium limits."
              },
              {
                "id": "med-q-fats",
                "title": "Which fat swaps would make the biggest difference in my usual meals?",
                "detail": "Bring examples of cooking oils, spreads, meat, dairy, restaurant meals, and snacks."
              },
              {
                "id": "med-q-fish",
                "title": "What fish choices and frequency are appropriate for me?",
                "detail": "Ask about pregnancy, mercury, allergies, cultural preference, access, and sodium in processed fish."
              },
              {
                "id": "med-q-dietitian",
                "title": "Would a dietitian help adapt the plan to my culture, budget, and treatment?",
                "detail": "Bring usual meals, food access barriers, laboratory results, and medicine timing."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "diet",
          "researchBatch": "BATCH_05_CHOLESTEROL_HEART",
          "editorialSourceIds": [
            "AHA_MEDITERRANEAN_DIET",
            "AHA_DIET_LIFESTYLE",
            "NHLBI_BLOOD_CHOLESTEROL_CAUSES"
          ],
          "relatedIds": [
            "cholesterol",
            "ldl",
            "heart-disease",
            "cholesterol-lifestyle",
            "statin",
            "hypertension-diet",
            "diabetes-diet"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "individual saturated-fat, sodium, carbohydrate, potassium, calorie, and alcohol guidance",
              "kidney disease, heart failure, pregnancy, child, frailty, and eating-disorder adaptations",
              "fish and mercury guidance",
              "food–medicine interactions",
              "allergy and swallowing adaptations",
              "medical nutrition therapy"
            ]
          }
        },
        {
          "id": "iron-rich-diet",
          "title": "Iron-rich diet",
          "subtitle": "A practical eating pattern that includes heme or nonheme iron and supports absorption without replacing diagnosis or treatment.",
          "body": [
            "Purpose — An iron-rich diet helps provide iron for hemoglobin and other body functions; it may support prevention or treatment plans when appropriate.",
            "Who it may support — People with low iron intake, higher iron needs, or confirmed deficiency may discuss this pattern, while the cause of deficiency is assessed separately.",
            "Heme iron — Meat, seafood, and poultry contain heme iron, which is generally absorbed more readily than nonheme iron.",
            "Nonheme iron — Beans, lentils, tofu, peas, nuts, seeds, leafy vegetables, dried fruit, and iron-fortified cereals or breads provide nonheme iron.",
            "Vitamin C pairing — Tomato, peppers, citrus, strawberries, and other vitamin C–rich foods can improve absorption of nonheme iron when eaten in the same meal.",
            "Meal-building pattern — Choose an iron source, add vegetables or fruit, include a suitable carbohydrate and protein source, and use water or another appropriate drink.",
            "Timing considerations — Tea, coffee, calcium products, antacids, and some medicines can affect iron absorption or product timing; individualized advice may be needed.",
            "Vegetarian considerations — Plant-based diets can provide iron, but variety, fortified foods, vitamin C pairing, and assessment of symptoms or risk factors are important.",
            "Practical approach — Repeat a small group of realistic meals rather than relying on one food or very large portions of red meat.",
            "Food cautions — Kidney disease, pregnancy, food allergy, swallowing problems, diabetes medicines, anticoagulants, or other conditions may require changes to specific foods or portions."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "iron-diet-lentils",
                "title": "Lentils with tomato and peppers",
                "detail": "Lentils provide nonheme iron and plant protein; tomato and peppers add vitamin C."
              },
              {
                "id": "iron-diet-white-beans",
                "title": "White beans with lemon and vegetables",
                "detail": "White beans provide nonheme iron and fiber; lemon and vegetables support meal variety and vitamin C intake."
              },
              {
                "id": "iron-diet-lean-meat",
                "title": "Lean meat with a vegetable-rich meal",
                "detail": "Lean meat provides heme iron and protein; vegetables add vitamin C, fiber, and meal balance."
              },
              {
                "id": "iron-diet-cereal",
                "title": "Iron-fortified cereal with vitamin-C-rich fruit",
                "detail": "Check the label for iron, added sugar, and serving size; pair with berries, citrus, or another suitable fruit."
              },
              {
                "id": "iron-diet-chickpea",
                "title": "Chickpea and pepper salad",
                "detail": "Chickpeas provide nonheme iron and plant protein; peppers add vitamin C."
              },
              {
                "id": "iron-diet-spinach",
                "title": "Spinach with beans and tomatoes",
                "detail": "This combines two plant iron sources with tomato as a vitamin C source."
              },
              {
                "id": "iron-diet-egg",
                "title": "Egg and vegetable meal",
                "detail": "Eggs add protein and some iron; vegetables improve variety and can provide vitamin C."
              },
              {
                "id": "iron-diet-tuna",
                "title": "Tuna with whole-grain bread and vegetables",
                "detail": "Tuna provides protein and some iron; whole grains and vegetables complete the meal."
              }
            ],
            "helpfulTasks": [
              {
                "id": "iron-diet-task-record",
                "title": "Prepare a three-day food record",
                "detail": "Mark iron sources, vitamin C pairings, tea or coffee timing, fortified foods, and any dietary restrictions."
              },
              {
                "id": "iron-diet-task-labels",
                "title": "Compare fortified-food labels",
                "detail": "Review serving size, iron amount, added sugar, sodium, and other nutrients relevant to your health."
              },
              {
                "id": "iron-diet-task-repeat",
                "title": "Choose two realistic iron-focused meals to repeat",
                "detail": "Select meals that fit budget, culture, cooking access, allergies, and other health needs."
              }
            ],
            "questions": [
              {
                "id": "iron-diet-q-fit",
                "title": "How should this eating pattern fit my test results and the cause of low iron?",
                "detail": "Food guidance differs when blood loss, poor absorption, pregnancy, inflammation, or another condition is involved."
              },
              {
                "id": "iron-diet-q-interactions",
                "title": "Do any medicines, supplements, tea, coffee, calcium, or antacids affect timing?",
                "detail": "Bring a complete medicine and supplement list for product-specific advice."
              },
              {
                "id": "iron-diet-q-vegetarian",
                "title": "Do I need changes for a vegetarian or vegan diet?",
                "detail": "Discuss fortified foods, variety, vitamin C pairing, and whether monitoring is needed."
              },
              {
                "id": "iron-diet-q-safety",
                "title": "Do kidney disease, pregnancy, diabetes, allergies, or swallowing problems change these choices?",
                "detail": "Ask for individualized substitutions or portions when another condition affects diet safety."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "diet",
          "researchBatch": "BATCH_01_ENERGY_IRON",
          "editorialSourceIds": [
            "ODS_IRON_HP",
            "NHLBI_IRON_DEFICIENCY_ANEMIA",
            "ODS_VITAMIN_C_CONSUMER"
          ],
          "relatedIds": [
            "fatigue",
            "iron-deficiency",
            "anemia",
            "iron-supplement",
            "constipation"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "foodCautions",
              "interactions"
            ]
          }
        },
        {
          "id": "constipation-diet",
          "title": "Constipation diet",
          "subtitle": "A practical bowel-support pattern using gradual fiber, suitable fluids, regular meals, movement, and symptom tracking.",
          "body": [
            "Purpose — This plan supports constipation care through gradual fiber changes, suitable fluids, regular meals, movement, and a repeatable bathroom routine.",
            "Core pattern — Add vegetables, fruit, oats, beans, lentils, nuts, seeds, and whole grains in manageable steps rather than changing everything at once.",
            "Fluid pairing — Review fluid needs as fiber increases. Heart, kidney, liver, swallowing, and pregnancy considerations may change the safest plan.",
            "Meal-building — Add one high-fiber food to a familiar meal, keep portions realistic, and compare the change with stool form, bloating, pain, and urgency.",
            "Movement and routine — Suitable activity and a consistent bathroom opportunity after a regular meal may support bowel rhythm.",
            "Medicine review — Iron, calcium, opioid pain medicines, anticholinergic medicines, and other products may contribute. Do not stop them independently.",
            "Cautions — Severe pain, vomiting, inability to pass gas, marked swelling, blood, black stool, fever, or unexplained weight loss requires medical assessment."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "constipation-diet-food-oats",
                "title": "Add oats, fruit, or another whole grain",
                "detail": "Choose one change, increase gradually, and record bloating and stool pattern."
              },
              {
                "id": "constipation-diet-food-legumes",
                "title": "Add beans or lentils in a small portion",
                "detail": "Rinse canned products when suitable and increase only as tolerated."
              },
              {
                "id": "constipation-diet-food-fluid",
                "title": "Pair fiber with the approved fluid plan",
                "detail": "Do not exceed a fluid restriction or ignore swallowing guidance."
              }
            ],
            "helpfulTasks": [
              {
                "id": "constipation-diet-task-meals",
                "title": "Plan one repeatable high-fiber meal",
                "detail": "Use a meal that fits culture, budget, medicines, and chronic conditions."
              },
              {
                "id": "constipation-diet-task-symptoms",
                "title": "Compare food changes with bowel symptoms",
                "detail": "Track stool form, frequency, straining, gas, pain, and urgency."
              }
            ],
            "questions": [
              {
                "id": "constipation-diet-q-fit",
                "title": "How should I adapt this pattern to my medicines and conditions?",
                "detail": "Bring the bowel diary, food pattern, fluid plan, and complete product list."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "diet",
          "researchBatch": "BATCH_06_DIGESTIVE_SUPPORT",
          "additionalResearchBatches": [
            "BATCH_01_ENERGY_IRON"
          ],
          "editorialSourceIds": [
            "NIDDK_CONSTIPATION_DIET",
            "NIDDK_CONSTIPATION_TREATMENT",
            "MEDLINEPLUS_DIETARY_FIBER",
            "MEDLINEPLUS_SOLUBLE_INSOLUBLE_FIBER"
          ],
          "relatedIds": [
            "constipation",
            "fiber-support",
            "hydration-support",
            "digestive-medicine-review"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "fiberTargets",
              "fluidTargets",
              "supplementProducts",
              "bowelDiseaseAdaptations"
            ]
          }
        },
        {
          "id": "fiber-support",
          "title": "Fiber support for bowel regularity",
          "subtitle": "Plant foods, gradual increases, suitable fluids, and symptom-aware planning.",
          "body": [
            "Purpose — Fiber adds structure to the eating pattern and can support stool bulk, softness, bowel regularity, glucose patterns, and cholesterol management.",
            "Who it may support — People with low-fiber eating patterns or constipation may benefit, but the amount and type should fit symptoms, medicines, swallowing ability, and digestive conditions.",
            "Types of fiber — Soluble fiber holds water and forms a gel. Insoluble fiber adds bulk. Many plant foods contain a mixture, so a varied pattern is usually more practical than trying to isolate one type.",
            "Foods to emphasize — Oats, beans, lentils, peas, vegetables, fruit, whole grains, nuts, and seeds can provide fiber. Increase variety gradually rather than relying on one food or supplement.",
            "Add gradually — A sudden increase can cause gas, bloating, cramps, or discomfort. Add one change at a time and compare it with the bowel and symptom diary.",
            "Pair with suitable fluids — Fiber works best with adequate fluid. Fluid needs must be individualized when heart, kidney, liver, swallowing, pregnancy, or medicine concerns apply.",
            "Meal-building guidance — Add one fiber source to a familiar meal: oats at breakfast, beans or lentils at a main meal, vegetables with lunch or dinner, or whole fruit as a snack.",
            "Foods to use carefully — Very large portions, bran-heavy products, sugar alcohols, and sudden high-fiber supplements may worsen symptoms. A prescribed low-fiber diet should not be changed without review.",
            "Supplement discussion — Fiber supplements are not interchangeable. Ask about product type, interactions, fluid needs, timing, bowel narrowing, swallowing problems, and when to stop.",
            "Cautions — Severe pain, vomiting, inability to pass gas, marked swelling, blood, black stool, or rapidly worsening constipation requires assessment rather than simply adding more fiber."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "fiber-food-oats",
                "title": "Add oats to a repeatable breakfast",
                "detail": "Start with a familiar portion and record gas, bloating, stool form, and fullness."
              },
              {
                "id": "fiber-food-beans",
                "title": "Add beans or lentils gradually",
                "detail": "Use a small portion first, rinse canned products when suitable, and increase only as tolerated."
              },
              {
                "id": "fiber-food-fruit",
                "title": "Choose whole fruit more often",
                "detail": "Whole fruit provides fiber that juice does not; adapt texture for swallowing or dental needs."
              },
              {
                "id": "fiber-food-vegetable",
                "title": "Add a cooked or raw vegetable that fits tolerance",
                "detail": "Cooking changes texture and may be easier for some people, but individual tolerance varies."
              }
            ],
            "helpfulTasks": [
              {
                "id": "fiber-task-baseline",
                "title": "Record the current fiber pattern",
                "detail": "List usual grains, vegetables, fruit, beans, nuts, seeds, and supplements before changing several items."
              },
              {
                "id": "fiber-task-one-change",
                "title": "Add one fiber change at a time",
                "detail": "Compare bowel pattern, gas, pain, and fullness over several days."
              },
              {
                "id": "fiber-task-fluid",
                "title": "Review the fluid plan as fiber increases",
                "detail": "Confirm restrictions or special needs before deliberately increasing fluids."
              }
            ],
            "questions": [
              {
                "id": "fiber-q-type",
                "title": "Which fiber sources are most suitable for my symptoms?",
                "detail": "Ask whether soluble, insoluble, food-based, or supplemental fiber needs emphasis."
              },
              {
                "id": "fiber-q-restriction",
                "title": "Is there a reason I should limit fiber temporarily?",
                "detail": "Discuss bowel narrowing, obstruction risk, recent surgery, severe flare symptoms, swallowing problems, or a prescribed low-fiber plan."
              },
              {
                "id": "fiber-q-supplement",
                "title": "Is a fiber supplement appropriate with my medicines?",
                "detail": "Ask about timing, interactions, fluid needs, and when persistent symptoms need evaluation."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "diet",
          "researchBatch": "BATCH_06_DIGESTIVE_SUPPORT",
          "editorialSourceIds": [
            "NIDDK_CONSTIPATION_DIET",
            "NIDDK_CONSTIPATION_TREATMENT",
            "MEDLINEPLUS_DIETARY_FIBER",
            "MEDLINEPLUS_SOLUBLE_INSOLUBLE_FIBER"
          ],
          "relatedIds": [
            "constipation",
            "hydration-support",
            "constipation-diet",
            "digestive-medicine-review"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "fiberTargets",
              "supplementProducts",
              "fluidTargets",
              "bowelNarrowingAndSurgeryGuidance",
              "childAndPregnancyGuidance"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_01_ENERGY_IRON"
          ]
        },
        {
          "id": "meal-tolerance",
          "title": "Meal tolerance after vomiting or diarrhea",
          "subtitle": "Small familiar meals, gradual variety, symptom tracking, and food-safety awareness.",
          "body": [
            "Purpose — This page supports a gradual return to eating when nausea, vomiting, diarrhea, or reduced appetite makes usual meals difficult.",
            "No fixed recovery diet — Most adults do not need prolonged fasting or a narrow set of foods after uncomplicated acute diarrhea. Food choices should expand as appetite and tolerance return.",
            "Start with what stays down — Use small amounts of familiar food and fluid. Larger meals, rich foods, alcohol, and heavy caffeine may be harder to tolerate during active symptoms.",
            "Build the meal gently — Combine an easy-to-eat carbohydrate with a protein or another familiar food, then add cooked vegetables, fruit, whole grains, or higher-fiber foods as symptoms settle.",
            "Track patterns — Record the food, portion, timing, nausea, pain, vomiting, stool pattern, and whether symptoms repeatedly follow a specific ingredient.",
            "Temporary intolerance — Some people notice short-term difficulty with milk products or other foods after an intestinal infection. Do not assume a permanent intolerance from one episode.",
            "Food safety — Avoid questionable leftovers, undercooked foods, unsafe water, and cross-contamination. If several people are ill after the same food, report and seek guidance as appropriate.",
            "Nutrition risks — Prolonged poor intake can affect glucose, medicines, strength, and hydration. Pregnancy, older age, childhood, eating disorders, diabetes, kidney disease, and immune suppression need earlier clinical advice.",
            "When to review — Persistent vomiting, ongoing diarrhea, repeated symptoms after meals, weight loss, difficulty swallowing, severe pain, blood, fever, or dehydration should not be managed only through food restriction.",
            "Return to variety — Once symptoms improve, rebuild the usual balanced pattern rather than staying on a low-variety diet longer than necessary."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "tolerance-food-small",
                "title": "Use a small familiar meal",
                "detail": "Choose a food normally tolerated, start with a small portion, and increase only if symptoms remain controlled."
              },
              {
                "id": "tolerance-food-combine",
                "title": "Add protein when tolerated",
                "detail": "Egg, yogurt, chicken, fish, tofu, or another familiar protein can help restore a more complete meal."
              },
              {
                "id": "tolerance-food-variety",
                "title": "Restore food variety gradually",
                "detail": "Add fruit, vegetables, whole grains, and higher-fiber foods as symptoms settle rather than remaining on a narrow diet."
              }
            ],
            "helpfulTasks": [
              {
                "id": "tolerance-task-log",
                "title": "Keep a food-and-symptom record",
                "detail": "Note portions, timing, nausea, vomiting, stool pattern, pain, and repeated triggers."
              },
              {
                "id": "tolerance-task-medicine",
                "title": "Compare symptoms with medicine timing",
                "detail": "Record antibiotics, metformin, laxatives, magnesium products, pain medicines, supplements, and recent changes."
              },
              {
                "id": "tolerance-task-return",
                "title": "Plan the return to usual meals",
                "detail": "List the next familiar food to add instead of avoiding broad food groups indefinitely."
              }
            ],
            "questions": [
              {
                "id": "tolerance-q-duration",
                "title": "How long should I use smaller or simpler meals?",
                "detail": "Ask when to restore the usual pattern and which symptoms mean the plan needs review."
              },
              {
                "id": "tolerance-q-intolerance",
                "title": "Could a temporary or persistent food intolerance be contributing?",
                "detail": "Discuss repeat patterns before removing milk, gluten, or another broad category."
              },
              {
                "id": "tolerance-q-dietitian",
                "title": "Would a dietitian help if intake remains limited?",
                "detail": "Ask earlier when weight loss, chronic disease, pregnancy, swallowing problems, or malnutrition risk is present."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "diet",
          "researchBatch": "BATCH_06_DIGESTIVE_SUPPORT",
          "editorialSourceIds": [
            "NIDDK_DIARRHEA_DIET",
            "NIDDK_DIARRHEA_TREATMENT",
            "NIDDK_VIRAL_GASTROENTERITIS_TREATMENT",
            "MEDLINEPLUS_NAUSEA_VOMITING_ADULTS"
          ],
          "relatedIds": [
            "gastroenteritis",
            "hydration-support",
            "digestive-medicine-review",
            "nutrition-plate"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "oralIntakeThresholds",
              "pregnancyChildOlderAdultGuidance",
              "diabetesAndKidneyAdaptations",
              "foodborneIllnessReporting",
              "redFlags"
            ]
          }
        },
        {
          "id": "sleep-food-caffeine",
          "title": "Evening food, caffeine, alcohol, and fluids",
          "subtitle": "Review timing and symptoms without claiming that one food can treat a sleep disorder.",
          "body": [
            "Purpose — Food and drink timing can affect alertness, reflux, fullness, hunger, glucose, and bathroom trips during the sleep period.",
            "Caffeine — Caffeine can remain active for hours. Record coffee, tea, energy drinks, cola, chocolate, pre-workout products, and some medicines before deciding on a personal cutoff.",
            "Meals — Very large, heavy, or spicy meals close to bed may worsen fullness or reflux for some people. An earlier balanced meal may fit better.",
            "Hunger — A small snack may be reasonable when hunger prevents sleep, but it is not a treatment for insomnia. Diabetes, kidney disease, allergies, and other conditions may change the choice.",
            "Alcohol — Alcohol may make a person feel sleepy initially but can fragment sleep later. It should not be used as a sleep treatment and may interact with medicines.",
            "Fluids — Too much fluid close to bed can increase waking to urinate, but excessive restriction can be unsafe. Adjustments depend on health conditions and medicines.",
            "Supplements and herbal products — Products marketed for sleep can cause side effects, interactions, next-day impairment, or variable dosing. Discuss them before use.",
            "Track response — Record timing, amount, reflux, hunger, urination, glucose concerns, sleep onset, and night waking."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "food-1-caffeine-can-remain-active-for-hours-av",
                "title": "Set a personal caffeine review window",
                "detail": "Record all sources and compare earlier timing with sleep rather than assuming one universal cutoff."
              },
              {
                "id": "food-2-avoid-heavy-or-very-large-meals-within-a",
                "title": "Move a heavy evening meal earlier",
                "detail": "Use a balanced portion and track reflux, fullness, and sleep."
              },
              {
                "id": "food-3-alcohol-may-make-someone-feel-sleepy-at",
                "title": "Do not use alcohol as a sleep treatment",
                "detail": "Record alcohol timing and discuss interactions with medicines or sleep apnea."
              },
              {
                "id": "food-4-a-light-snack-can-be-reasonable-when-hun",
                "title": "Use a small snack only when hunger is the issue",
                "detail": "Choose an item that fits diabetes, kidney, allergy, and medication needs."
              },
              {
                "id": "sleep-food-task-5",
                "title": "Review fluid timing without over-restricting",
                "detail": "Track bathroom waking and discuss heart, kidney, pregnancy, or diuretic considerations."
              }
            ],
            "questions": [
              {
                "id": "ask-fit",
                "title": "How should I adapt evening food and drink timing?",
                "detail": "Bring the usual food pattern, symptoms, conditions, and medicine list."
              },
              {
                "id": "sleep-food-q-2",
                "title": "Could reflux, glucose changes, alcohol, or a medicine be disrupting sleep?",
                "detail": "Discuss the timing pattern and associated symptoms."
              },
              {
                "id": "sleep-food-q-3",
                "title": "Is a sleep supplement safe with my medicines and conditions?",
                "detail": "Dosing and product selection require clinical review."
              }
            ],
            "supplements": [
              {
                "id": "sleep-food-supp-1",
                "title": "Discuss any sleep-marketed supplement before use",
                "detail": "Review interactions, pregnancy, liver or kidney disease, and next-day impairment."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "diet",
          "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
          "editorialSourceIds": [
            "NHLBI_HEALTHY_SLEEP_HABITS",
            "NHLBI_INSOMNIA_TREATMENT"
          ],
          "relatedIds": [
            "sleep",
            "insomnia",
            "sleep-apnea",
            "restless-legs",
            "headache",
            "asthma"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "driving-safety wording",
              "supplement wording",
              "pregnancy and chronic-condition adaptations"
            ]
          }
        },
        {
          "id": "immunity-food-variety",
          "title": "Food variety for immune function",
          "subtitle": "A varied eating pattern supplies the energy, protein, vitamins, minerals, and other nutrients needed for normal immune function, healing, and recovery.",
          "body": [
            "Purpose — This page supports adequate nutrition and variety. It does not claim that one food or supplement prevents infection or “boosts” immunity beyond normal function.",
            "Who it may support — People building a balanced pattern, recovering from limited intake, or reviewing nutrient adequacy may use it as a planning guide.",
            "Core pattern — Combine vegetables or fruit, a suitable protein source, a whole grain or other quality carbohydrate, and appropriate unsaturated fats across the week.",
            "Protein matters — Eggs, dairy or fortified alternatives, beans, lentils, fish, poultry, meat, tofu, nuts, and seeds can help meet protein needs when suitable.",
            "Use plant variety — Different vegetables, fruits, legumes, whole grains, nuts, and seeds provide different nutrients and food components. Variety is more reliable than focusing on one ingredient.",
            "Fortified foods can fill gaps — Fortified cereals, dairy alternatives, or other products may help when intake is limited, but labels and overlapping nutrients should be reviewed.",
            "Build meals from familiar foods — A practical meal can be one protein, one or more vegetables or fruit, and one whole grain, legume, potato, or other tolerated carbohydrate.",
            "Plan for barriers — Cost, transport, cooking ability, dental or swallowing problems, nausea, diarrhea, allergies, cultural preferences, and treatment effects can determine what is realistic.",
            "Use caution with restrictive diets — Removing several food groups without a clear reason can increase deficiency and weight-loss risk.",
            "Special conditions need adaptation — Kidney, liver, diabetes, food allergy, swallowing disorders, pregnancy, severe immune suppression, and cancer treatment may require individualized food-safety or nutrient guidance."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "immunity-food-oats",
                "title": "Add oats with berries and unsalted nuts",
                "detail": "A whole-grain breakfast with fruit and unsaturated fat."
              },
              {
                "id": "immunity-food-yogurt",
                "title": "Add plain yogurt or a fortified alternative with fruit and seeds",
                "detail": "Choose a product that fits allergy, lactose, sugar, and immune-suppression guidance."
              },
              {
                "id": "immunity-food-lentils",
                "title": "Add lentils with tomato and peppers",
                "detail": "A plant-based meal with protein, fiber, and varied vegetables."
              },
              {
                "id": "immunity-food-fish",
                "title": "Add fish with vegetables and a whole grain",
                "detail": "A protein-centered meal with plant variety."
              },
              {
                "id": "immunity-food-tofu",
                "title": "Add tofu, broccoli, and brown rice",
                "detail": "A vegetarian meal with protein, vegetables, and whole grain."
              },
              {
                "id": "immunity-food-chicken-bean",
                "title": "Add chicken, beans, and vegetables",
                "detail": "A flexible high-protein meal with legumes and vegetables."
              },
              {
                "id": "immunity-food-egg",
                "title": "Add an egg and vegetable meal",
                "detail": "A familiar protein source combined with varied vegetables."
              },
              {
                "id": "immunity-food-beans",
                "title": "Add white beans with cooked vegetables and whole grain",
                "detail": "A plant-forward meal with protein and fiber."
              }
            ],
            "helpfulTasks": [
              {
                "id": "immunity-food-weekly-variety",
                "title": "Track food variety for one week",
                "detail": "Record protein foods, vegetable and fruit types, whole grains, legumes, nuts, seeds, and fortified foods."
              },
              {
                "id": "immunity-food-barriers",
                "title": "Record barriers to adequate intake",
                "detail": "Include cost, access, cooking, swallowing, dental problems, nausea, diarrhea, taste change, and fatigue."
              },
              {
                "id": "immunity-food-labels",
                "title": "Compare fortified-food and supplement labels",
                "detail": "Check serving size, overlapping nutrients, added sugar, sodium, allergens, and total amounts."
              }
            ],
            "questions": [
              {
                "id": "immunity-food-q-dietitian",
                "title": "Ask whether a dietitian assessment would help",
                "detail": "Ask when weight loss, limited intake, cancer treatment, digestive symptoms, or several restrictions are present."
              },
              {
                "id": "immunity-food-q-safety",
                "title": "Ask whether special food-safety or nutrient restrictions apply",
                "detail": "Review immune suppression, kidney or liver disease, diabetes, pregnancy, allergy, and swallowing needs."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "diet",
          "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
          "editorialSourceIds": [
            "ODS_IMMUNE_FUNCTION",
            "MEDLINEPLUS_MALNUTRITION"
          ],
          "relatedIds": [
            "immunity",
            "malnutrition",
            "nutrition-variety",
            "immunity-supplement-caution",
            "cancer-treatment"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "neutropenic and transplant food-safety guidance",
              "allergy and swallowing modifications",
              "oral nutrition products",
              "kidney, liver, diabetes, pregnancy, and child adaptations",
              "specific nutrient targets"
            ]
          }
        },
        {
          "id": "nutrition-variety",
          "title": "Build food variety across the week",
          "subtitle": "Use different food groups, colors, textures, and protein sources so the overall pattern supplies a wider range of nutrients and remains practical.",
          "body": [
            "Purpose — Food variety helps the eating pattern provide different nutrients, fiber types, protein sources, flavors, and textures. It is not a requirement to eat every food group at every meal.",
            "Who it may support — This page is for general healthy eating, low-variety patterns, meal planning, recovery from restrictive routines, and people trying to make familiar meals more complete.",
            "Core pattern — Rotate vegetables and fruit, whole grains or other high-fiber carbohydrates, beans or lentils, eggs, fish, poultry, meat, tofu or other proteins, nuts or seeds, and suitable dairy or fortified alternatives.",
            "Color can be a planning cue — Different-colored vegetables and fruits often contribute different nutrients, but color is not a medical scoring system and pale foods can also be nutritious.",
            "Fresh is not the only option — Frozen produce, canned beans, lower-sodium canned vegetables, and fruit packed without heavy syrup can be practical choices when cost, access, season, or energy is limited.",
            "Protein variety matters — Rotating beans, lentils, eggs, dairy or alternatives, fish, poultry, meat, tofu, nuts, and seeds can improve flexibility and reduce dependence on one source.",
            "Use familiar foods first — Add variety by changing one component of an existing meal, such as a different vegetable, bean, whole grain, fruit, or protein rather than replacing the whole cuisine.",
            "Food examples — Oats with fruit and seeds; beans with rice and vegetables; egg with vegetables and whole-grain bread; fish with a grain and greens; yogurt or a fortified alternative with fruit; or tofu with vegetables and rice.",
            "Foods to use carefully — Allergens, choking hazards, swallowing problems, kidney restrictions, carbohydrate portions, food safety, and treatment-specific restrictions can limit which foods are suitable.",
            "Cautions — Severe restriction, fear of food, unplanned weight change, persistent poor appetite, repeated reactions, swallowing difficulty, or signs of malnutrition need clinical assessment rather than a simple variety challenge."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "nutrition-variety-food-color",
                "title": "Add one different-colored vegetable or fruit",
                "detail": "Choose a familiar option in fresh, frozen, or suitable canned form."
              },
              {
                "id": "nutrition-variety-food-protein",
                "title": "Add a different protein source",
                "detail": "Try beans, lentils, eggs, fish, poultry, tofu, yogurt or an alternative, nuts, or seeds when suitable."
              },
              {
                "id": "nutrition-variety-food-grain",
                "title": "Add a different whole grain or high-fiber carbohydrate",
                "detail": "Examples include oats, barley, brown rice, whole-grain bread, beans, lentils, or a familiar local whole grain."
              },
              {
                "id": "nutrition-variety-food-freezer",
                "title": "Add one frozen or canned plant food to the backup list",
                "detail": "Compare sodium, added sugar, ingredients, serving size, and preparation needs."
              },
              {
                "id": "nutrition-variety-food-snack",
                "title": "Add a fruit or vegetable paired with a protein food",
                "detail": "Examples include fruit with nuts, vegetables with hummus, or yogurt or a suitable alternative with fruit."
              }
            ],
            "helpfulTasks": [
              {
                "id": "nutrition-variety-task-log",
                "title": "Track food-group variety for seven days",
                "detail": "Record groups and repeated foods without judging individual meals as good or bad."
              },
              {
                "id": "nutrition-variety-task-gap",
                "title": "Review one realistic variety gap",
                "detail": "Add one vegetable, fruit, protein, or whole-grain option that fits access and preference."
              },
              {
                "id": "nutrition-variety-task-barrier",
                "title": "Record barriers to variety",
                "detail": "Note cost, access, cooking time, equipment, taste, texture, allergy, symptoms, or household needs."
              },
              {
                "id": "nutrition-variety-task-list",
                "title": "Prepare a flexible variety shopping list",
                "detail": "Include fresh, frozen, canned, dried, and shelf-stable options that can substitute for one another."
              }
            ],
            "questions": [
              {
                "id": "nutrition-variety-q-nutrients",
                "title": "Ask whether a food group or nutrient source may be missing",
                "detail": "Ask based on the full pattern, symptoms, medicines, conditions, and laboratory history rather than one meal."
              },
              {
                "id": "nutrition-variety-q-restrictions",
                "title": "Ask which restrictions are medically necessary",
                "detail": "Review allergies, intolerances, kidney or digestive plans, swallowing, cultural practice, and self-imposed avoidance."
              },
              {
                "id": "nutrition-variety-q-fortified",
                "title": "Ask whether a fortified food or supplement assessment is appropriate",
                "detail": "Use testing and clinician review when deficiency or limited intake is a concern."
              },
              {
                "id": "nutrition-variety-q-dietitian",
                "title": "Ask whether a dietitian would help expand variety safely",
                "detail": "Bring avoided foods, reactions, symptoms, budget, cooking ability, and usual meals."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "diet",
          "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
          "editorialSourceIds": [
            "USDA_DGA_2025_2030",
            "USDA_MYPLATE",
            "CDC_HEALTHY_EATING_TIPS",
            "NIDDK_HEALTHY_EATING_LIFE",
            "NIDDK_HEALTHY_HABITS_BUDGET"
          ],
          "relatedIds": [
            "nutrition",
            "nutrition-plate",
            "nutrition-plan",
            "immunity-food-variety",
            "malnutrition",
            "fiber-support"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "individual nutrient targets",
              "food-allergy and swallowing modifications",
              "kidney, liver, diabetes, pregnancy, child, older-adult, and treatment-specific restrictions",
              "fortified food and supplement selection",
              "malnutrition and eating-disorder management"
            ]
          }
        },
        {
          "id": "nutrition-plate",
          "title": "Build a balanced meal pattern",
          "subtitle": "Use a flexible plate, bowl, wrap, or mixed-dish structure that combines plant foods, protein, a quality carbohydrate, and a suitable drink.",
          "body": [
            "Purpose — A meal-building pattern makes healthy eating easier to repeat. It is a starting structure, not a rigid portion prescription.",
            "Who it may support — It can support general nutrition, meal planning, energy, and chronic-disease prevention. Diabetes, kidney disease, pregnancy, eating disorders, and other conditions may require individualized portions.",
            "Core structure — Include vegetables or fruit, a protein source, a whole grain or other high-fiber carbohydrate, and water or another suitable drink. Healthy fats may be included through oils, nuts, seeds, avocado, fish, or other foods.",
            "Plates are not the only format — Soups, stews, sandwiches, wraps, rice dishes, pasta, curries, and mixed meals can follow the same idea by including several food groups.",
            "Protein choices — Beans, lentils, eggs, fish, poultry, lean meat, tofu, yogurt, milk, fortified alternatives, nuts, and seeds can contribute protein. Needs vary by body size, age, activity, illness, and treatment.",
            "Carbohydrate quality and amount both matter — Whole grains, beans, lentils, starchy vegetables, fruit, and dairy can provide carbohydrate plus nutrients. Diabetes care may require attention to amount and timing.",
            "Vegetables and fruit add more than color — They provide fiber, vitamins, minerals, and food volume. Use forms that fit cost, access, digestion, chewing, and cooking ability.",
            "Meal examples — Bean and vegetable rice bowl; egg, vegetables, and whole-grain toast; chicken or tofu with roasted vegetables and potato; fish with greens and barley; or yogurt or a fortified alternative with fruit and oats.",
            "Food swaps — Add vegetables to a familiar mixed dish; replace part of a refined grain with beans or whole grain; pair a snack carbohydrate with protein; or replace a sugary drink with water.",
            "Cautions — A balanced-looking plate can still conflict with allergies, swallowing needs, insulin timing, kidney restrictions, food safety, appetite loss, or a prescribed therapeutic diet."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "nutrition-plate-food-bowl",
                "title": "Add a bean, grain, and vegetable bowl",
                "detail": "Use a familiar grain, beans or lentils, vegetables, and a suitable sauce or healthy fat."
              },
              {
                "id": "nutrition-plate-food-egg",
                "title": "Add an egg, vegetable, and whole-grain meal",
                "detail": "Adapt the carbohydrate portion, sodium, and cooking method to the health plan."
              },
              {
                "id": "nutrition-plate-food-chicken-tofu",
                "title": "Add a chicken or tofu sheet-pan meal",
                "detail": "Add several vegetables and a potato or whole-grain side."
              },
              {
                "id": "nutrition-plate-food-yogurt",
                "title": "Add a yogurt or fortified-alternative breakfast bowl",
                "detail": "Add whole fruit, oats, and seeds or nuts when suitable."
              },
              {
                "id": "nutrition-plate-food-wrap",
                "title": "Add a whole-grain wrap with protein and vegetables",
                "detail": "Use beans, hummus, egg, chicken, tuna, or tofu and compare sodium in packaged ingredients."
              }
            ],
            "helpfulTasks": [
              {
                "id": "nutrition-plate-task-photo",
                "title": "Record three usual meals with a photo or sketch",
                "detail": "Identify the vegetables or fruit, protein, carbohydrate, drink, and any missing practical component."
              },
              {
                "id": "nutrition-plate-task-repeat",
                "title": "Prepare three balanced repeat meals",
                "detail": "Use meals that can be prepared with available time, equipment, money, and cultural foods."
              },
              {
                "id": "nutrition-plate-task-portion",
                "title": "Compare portions with hunger and symptoms",
                "detail": "Record fullness, energy, digestive symptoms, activity, and glucose when relevant without using one meal to diagnose a problem."
              },
              {
                "id": "nutrition-plate-task-mixed",
                "title": "Review one mixed dish using the meal pattern",
                "detail": "Identify its plant foods, protein, carbohydrate, fat, and suitable side or drink."
              }
            ],
            "questions": [
              {
                "id": "nutrition-plate-q-portions",
                "title": "Ask how portions should be adapted",
                "detail": "Discuss age, activity, appetite, pregnancy, weight change, diabetes treatment, kidney disease, and other conditions."
              },
              {
                "id": "nutrition-plate-q-protein",
                "title": "Ask whether protein intake is adequate and suitable",
                "detail": "Ask when appetite, strength, recovery, kidney disease, plant-based eating, or treatment affects intake."
              },
              {
                "id": "nutrition-plate-q-carbohydrate",
                "title": "Ask how carbohydrate amount and timing should fit medicines",
                "detail": "This is especially important with insulin or medicines that can cause low glucose."
              },
              {
                "id": "nutrition-plate-q-texture",
                "title": "Ask whether chewing, swallowing, or digestive symptoms require a different texture",
                "detail": "Ask before relying on restrictive or blended diets for long periods."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "diet",
          "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
          "additionalResearchBatches": [
            "BATCH_03_DIABETES_GLUCOSE"
          ],
          "editorialSourceIds": [
            "USDA_DGA_2025_2030",
            "USDA_MYPLATE",
            "CDC_HEALTHY_EATING_TIPS",
            "NIDDK_HEALTHY_EATING_LIFE",
            "NIDDK_HEALTHY_LIVING_DIABETES"
          ],
          "relatedIds": [
            "nutrition",
            "nutrition-variety",
            "nutrition-plan",
            "diabetes-diet",
            "sugar-lifestyle",
            "malnutrition"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "individual portions and energy targets",
              "protein and carbohydrate prescriptions",
              "insulin and medicine matching",
              "pregnancy, child, kidney, liver, heart-failure, eating-disorder, malnutrition, allergy, and swallowing adaptations"
            ]
          }
        },
        {
          "id": "nutrition-water",
          "title": "Use water and suitable drinks",
          "subtitle": "Make hydration a regular part of the day while adapting fluids to heat, activity, illness, medicines, pregnancy, and medical restrictions.",
          "body": [
            "Purpose — Water supports normal circulation, temperature control, digestion, concentration, and physical function. This page does not give one universal fluid amount.",
            "Who it may support — Most people benefit from regular access to water, but heart failure, kidney or liver disease, dialysis, pregnancy, older age, swallowing problems, and some medicines may require individualized guidance.",
            "Water comes from drinks and food — Plain water is a practical default. Milk or suitable alternatives, soups, fruit, vegetables, and other foods also contribute fluid.",
            "Use thirst as one cue, not the only cue — Heat, exercise, illness, vomiting, diarrhea, fever, older age, disability, and some medicines can change thirst or fluid loss.",
            "Drink choices matter — Sugary drinks add concentrated added sugar. Alcohol and high-caffeine drinks can affect sleep, glucose, blood pressure, medicines, or safety. Water can replace some of these drinks without adding calories.",
            "Build a routine — Keep water accessible, drink with meals and medicines when allowed, carry a suitable bottle, and plan extra access during heat or activity.",
            "Compare patterns — Track thirst, urine changes, dizziness, headache, constipation, heat exposure, exercise, vomiting, diarrhea, and drinks used during the day.",
            "Oral rehydration is different from ordinary hydration — Vomiting, diarrhea, heat illness, or significant losses may require a clinician-approved product and plan. Sports drinks are not automatically necessary for routine activity.",
            "Fluid restrictions matter — Do not deliberately increase fluids against a heart, kidney, liver, dialysis, swallowing, or treatment plan.",
            "Seek assessment for serious change — Confusion, fainting, inability to keep fluids down, very low urine, severe weakness, breathing difficulty, or rapidly worsening illness requires urgent medical review."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "nutrition-water-food-default",
                "title": "Add plain water as a regular drink option",
                "detail": "Use tap, filtered, bottled, or unsweetened sparkling water when safe and suitable."
              },
              {
                "id": "nutrition-water-food-flavor",
                "title": "Add a low-sugar flavor to water",
                "detail": "Use lemon, lime, cucumber, mint, or berries when these are safe and tolerated."
              },
              {
                "id": "nutrition-water-food-milk",
                "title": "Add plain milk or a suitable fortified alternative when appropriate",
                "detail": "Compare added sugar, allergens, protein, and the needs of children, pregnancy, kidney disease, and diabetes."
              },
              {
                "id": "nutrition-water-food-produce",
                "title": "Add a water-rich fruit or vegetable",
                "detail": "Examples include melon, oranges, cucumber, tomatoes, soups, and cooked vegetables, adapted for glucose, sodium, and swallowing needs."
              }
            ],
            "helpfulTasks": [
              {
                "id": "nutrition-water-task-log",
                "title": "Record drinks for three days",
                "detail": "Include water, coffee, tea, sugary drinks, alcohol, milk or alternatives, and times of heat or activity."
              },
              {
                "id": "nutrition-water-task-cues",
                "title": "Prepare two hydration cues",
                "detail": "Examples include meals, medication times when allowed, leaving home, or starting activity."
              },
              {
                "id": "nutrition-water-task-swap",
                "title": "Prepare one frequent sugary-drink swap",
                "detail": "Use a gradual change that fits access, taste, low-glucose safety, and the medical plan."
              },
              {
                "id": "nutrition-water-task-restriction",
                "title": "Review whether a fluid restriction applies",
                "detail": "Check heart, kidney, liver, dialysis, swallowing, pregnancy, and medicine instructions before increasing fluids."
              }
            ],
            "questions": [
              {
                "id": "nutrition-water-q-amount",
                "title": "Ask whether an individualized fluid range is needed",
                "detail": "Ask based on body size, heat, activity, pregnancy, age, medicines, and heart, kidney, or liver conditions."
              },
              {
                "id": "nutrition-water-q-losses",
                "title": "Ask what to use during vomiting, diarrhea, fever, or heat exposure",
                "detail": "Ask which product, amount, monitoring, and urgent-contact instructions fit the situation."
              },
              {
                "id": "nutrition-water-q-caffeine",
                "title": "Ask whether caffeine or alcohol is affecting sleep, blood pressure, glucose, or medicines",
                "detail": "Review amount, timing, symptoms, pregnancy, and substance-use risk."
              },
              {
                "id": "nutrition-water-q-swallow",
                "title": "Ask whether swallowing problems require thickened fluids or another plan",
                "detail": "Fluid texture and safety require professional assessment."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "diet",
          "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
          "additionalResearchBatches": [
            "BATCH_06_DIGESTIVE_SUPPORT"
          ],
          "editorialSourceIds": [
            "CDC_WATER_HEALTHIER_DRINKS",
            "CDC_HEALTHY_EATING_TIPS",
            "NIDDK_HEALTHY_EATING_LIFE"
          ],
          "relatedIds": [
            "nutrition",
            "hydration-support",
            "gastroenteritis",
            "bleeding-dehydration-emergency",
            "constipation",
            "sugar-lifestyle"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "individual fluid ranges",
              "oral rehydration products and amounts",
              "heat-illness instructions",
              "heart, kidney, liver, dialysis, pregnancy, child, and older-adult adaptations",
              "thickened-fluid and swallowing plans",
              "alcohol and caffeine limits"
            ]
          }
        },
        {
          "id": "nutrition-limit",
          "title": "Use labels and gradual food swaps",
          "subtitle": "Reduce foods and drinks that repeatedly crowd out nutrient-dense choices without using fear, perfection, or unnecessary restriction.",
          "body": [
            "Purpose — This page helps compare packaged foods and choose practical swaps. It does not label one food as forbidden or prescribe a therapeutic restriction.",
            "Added sugars — Added sugars are put into foods or drinks during processing or preparation. Whole fruit and plain milk contain naturally occurring sugars together with other nutrients.",
            "Sodium — Sodium is present in salt and many packaged, restaurant, cured, and prepared foods. Comparing similar products can reveal meaningful differences even when foods do not taste very salty.",
            "Saturated and trans fat — Saturated fat is common in fatty meat, processed meat, butter, some dairy foods, coconut or palm fats, and many baked or fried products. Trans fat should be minimized.",
            "Highly processed foods — These foods are not identical. Review how often they appear, what they replace, and their sodium, added sugar, saturated fat, fiber, protein, and portion pattern.",
            "Use the whole label — Start with serving size, then compare dietary fiber, sodium, added sugars, saturated fat, ingredients, and major allergen statements.",
            "Gradual swaps — Replace sugary drinks with water, choose unsalted nuts, add beans or vegetables to a mixed dish, use whole fruit more often than juice, or choose a lower-sodium version of a familiar food.",
            "Keep pleasure and culture — Celebration foods, traditional foods, convenience foods, and restaurant meals can remain part of an overall pattern. Frequency, amount, and what accompanies them matter.",
            "Alcohol and caffeine require context — They can affect sleep, mood, blood pressure, glucose, pregnancy, liver health, medicines, and safety. Do not start alcohol for health reasons.",
            "Allergen labels protect safety — People with food allergy should read ingredient and allergen information every time because recipes and manufacturing can change.",
            "Cautions — Restrictive rules can worsen inadequate intake, eating disorders, anxiety around food, or malnutrition. Medical elimination diets should be supervised and reviewed for nutritional adequacy."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "nutrition-limit-food-water",
                "title": "Add a water swap for one sugary drink",
                "detail": "Keep fast-acting carbohydrate available separately when required for a clinician-approved low-glucose plan."
              },
              {
                "id": "nutrition-limit-food-nuts",
                "title": "Add unsalted nuts or seeds instead of a salty snack",
                "detail": "Adapt for allergy, swallowing, kidney, and portion needs."
              },
              {
                "id": "nutrition-limit-food-fruit",
                "title": "Add whole fruit more often than juice",
                "detail": "Whole fruit adds fiber; use a suitable portion for diabetes and digestive needs."
              },
              {
                "id": "nutrition-limit-food-beans",
                "title": "Add beans or lentils in place of part of a processed-meat portion",
                "detail": "Increase fiber gradually and adapt sodium, potassium, and digestive needs."
              },
              {
                "id": "nutrition-limit-food-seasoning",
                "title": "Add herbs, spices, lemon, garlic, or vinegar for flavor",
                "detail": "This can reduce reliance on salt-heavy sauces while keeping familiar cuisine."
              }
            ],
            "helpfulTasks": [
              {
                "id": "nutrition-limit-task-label",
                "title": "Compare labels on three similar packaged foods",
                "detail": "Review serving size, fiber, sodium, added sugars, saturated fat, ingredients, and allergens."
              },
              {
                "id": "nutrition-limit-task-drinks",
                "title": "Record sugary drinks, caffeine, and alcohol for one week",
                "detail": "Note amount, timing, sleep, glucose, blood pressure, symptoms, and medicines when relevant."
              },
              {
                "id": "nutrition-limit-task-swap",
                "title": "Prepare two gradual swaps",
                "detail": "Pick changes that are affordable, acceptable, and easy to repeat."
              },
              {
                "id": "nutrition-limit-task-restriction",
                "title": "Review rules that may be overly restrictive",
                "detail": "Discuss fear of food, many avoided foods, appetite loss, unplanned weight change, or eating-disorder history."
              }
            ],
            "questions": [
              {
                "id": "nutrition-limit-q-priority",
                "title": "Ask which nutrient or food pattern is the main priority",
                "detail": "Ask whether sodium, added sugar, saturated fat, alcohol, low fiber, inadequate intake, or another issue matters most."
              },
              {
                "id": "nutrition-limit-q-label",
                "title": "Ask how to use the label with the current condition",
                "detail": "Discuss diabetes, blood pressure, cholesterol, kidney disease, allergies, and portion needs."
              },
              {
                "id": "nutrition-limit-q-allergy",
                "title": "Ask which ingredients or allergen statements must be avoided",
                "detail": "Review reaction history and emergency planning with an allergy clinician."
              },
              {
                "id": "nutrition-limit-q-elimination",
                "title": "Ask whether the elimination diet is necessary and nutritionally complete",
                "detail": "Ask how long it should continue, how foods will be reintroduced, and whether a dietitian is needed."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "diet",
          "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
          "editorialSourceIds": [
            "CDC_HEALTHY_EATING_TIPS",
            "FDA_NUTRITION_FACTS_LABEL",
            "FDA_FOOD_ALLERGIES",
            "USDA_DGA_2025_2030"
          ],
          "relatedIds": [
            "nutrition",
            "nutrition-plan",
            "nutrition-plate",
            "hypertension-diet",
            "mediterranean-heart-diet",
            "diabetes-diet",
            "breathing-allergy-emergency"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "individual sodium, added-sugar, saturated-fat, alcohol, caffeine, and calorie limits",
              "food-allergy diagnosis and emergency plans",
              "therapeutic elimination diets",
              "pregnancy, child, kidney, liver, diabetes, eating-disorder, and malnutrition adaptations"
            ]
          }
        },
        {
          "id": "nutrition-plan",
          "title": "Plan meals for the real week",
          "subtitle": "Use repeatable meals, flexible shopping, backup foods, practical swaps, and culturally familiar choices that fit time, cost, access, ability, and household needs.",
          "body": [
            "Purpose — Meal planning reduces the number of decisions needed during busy or low-energy days. It is a flexible support tool, not a requirement to cook every meal from scratch.",
            "Start with the actual week — Mark work, school, appointments, fasting, exercise, caregiving, treatment, travel, and days when cooking time or appetite is limited.",
            "Choose anchor meals — Select a few breakfasts, main meals, and snacks that are familiar, balanced, affordable, and easy to repeat.",
            "Build a flexible shopping list — Group foods by vegetables and fruit, protein, grains or other carbohydrates, dairy or alternatives, healthy fats, drinks, and backup foods.",
            "Use budget tools — Compare unit prices when useful, buy staple foods in practical quantities, use beans and lentils, choose seasonal produce, and use frozen or suitable canned foods.",
            "Plan components, not only recipes — Cook a grain, bean, protein, or tray of vegetables that can be combined differently across several meals.",
            "Keep backup meals — Examples include oats with fruit and nuts, beans with frozen vegetables and rice, eggs with whole-grain bread, soup with added protein, or a frozen balanced meal that fits the health plan.",
            "Use leftovers safely — Store and reheat food according to local food-safety guidance, and discard food when safety is uncertain.",
            "Adapt culture and preference — Keep familiar flavors, staple grains, breads, legumes, vegetables, and proteins. The healthy pattern should fit the household rather than copy one cuisine.",
            "Adapt allergies and dietary preferences — Read labels every time, avoid cross-contact as instructed, and replace excluded food groups with nutritionally suitable alternatives.",
            "Plan for blood-sugar safety — People using insulin or medicines that can cause low glucose should align meal timing, carbohydrate availability, activity, and sick-day planning with their clinical plan.",
            "Cautions — Food insecurity, inability to shop or cook, eating disorders, swallowing problems, severe fatigue, disability, malnutrition risk, or major treatment side effects may require social, occupational, speech, or dietitian support."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "nutrition-plan-food-breakfast",
                "title": "Add two repeatable breakfasts to the weekly outline",
                "detail": "Examples include oats with fruit and nuts, eggs with vegetables and whole-grain bread, or yogurt or a suitable alternative with fruit and oats."
              },
              {
                "id": "nutrition-plan-food-main",
                "title": "Add three flexible main-meal formulas",
                "detail": "Examples include a bean bowl, soup or stew, sheet-pan protein and vegetables, or a whole-grain wrap."
              },
              {
                "id": "nutrition-plan-food-backup",
                "title": "Add one shelf-stable or frozen backup meal",
                "detail": "Compare sodium, added sugar, saturated fat, fiber, allergens, and carbohydrate portions."
              },
              {
                "id": "nutrition-plan-food-leftovers",
                "title": "Add one planned leftovers meal",
                "detail": "Label and store food safely, then combine it with a fresh or frozen plant food."
              },
              {
                "id": "nutrition-plan-food-snack",
                "title": "Add one balanced snack option",
                "detail": "Pair fruit or vegetables with a suitable protein food."
              }
            ],
            "helpfulTasks": [
              {
                "id": "nutrition-plan-task-calendar",
                "title": "Prepare a seven-day meal outline",
                "detail": "Include work, appointments, fasting, activity, treatment, and low-energy days."
              },
              {
                "id": "nutrition-plan-task-inventory",
                "title": "Review the pantry, freezer, and refrigerator",
                "detail": "Use available food first and identify one missing component for balanced meals."
              },
              {
                "id": "nutrition-plan-task-list",
                "title": "Prepare a short flexible shopping list",
                "detail": "Include substitutions for unavailable or unaffordable foods."
              },
              {
                "id": "nutrition-plan-task-budget",
                "title": "Compare the cost of three staple options",
                "detail": "Consider beans, lentils, eggs, frozen vegetables, canned fish or chicken, whole grains, and local seasonal foods."
              },
              {
                "id": "nutrition-plan-task-barriers",
                "title": "Record practical barriers",
                "detail": "Note transport, money, equipment, cooking skill, disability, symptoms, household preferences, allergy, texture, or storage limitations."
              },
              {
                "id": "nutrition-plan-task-support",
                "title": "Prepare one food or meal-support contact",
                "detail": "This may be a household member, community program, clinician, dietitian, social worker, or delivery option."
              }
            ],
            "questions": [
              {
                "id": "nutrition-plan-q-budget",
                "title": "Ask which lower-cost foods can meet the same nutrition goal",
                "detail": "Ask for substitutions that fit local prices, culture, storage, and cooking equipment."
              },
              {
                "id": "nutrition-plan-q-access",
                "title": "Ask about referral for food-access or meal-support services",
                "detail": "Discuss transport, disability, income, caregiving, and ability to shop or cook."
              },
              {
                "id": "nutrition-plan-q-culture",
                "title": "Ask how cultural foods can remain in the health plan",
                "detail": "Bring examples of staple meals, seasonings, portions, fasting practices, and celebration foods."
              },
              {
                "id": "nutrition-plan-q-allergy",
                "title": "Ask which substitutes are safe and nutritionally suitable",
                "detail": "Review protein, calcium, vitamin D, iron, B12, fiber, and allergen labeling as relevant."
              },
              {
                "id": "nutrition-plan-q-diabetes",
                "title": "Ask how the weekly plan should match diabetes medicines or insulin",
                "detail": "Ask about skipped meals, work shifts, exercise, illness, fasting, and low-glucose supplies."
              },
              {
                "id": "nutrition-plan-q-team",
                "title": "Ask whether dietitian, social-work, occupational, or swallowing support would help",
                "detail": "Ask when barriers involve nutrition knowledge, money, disability, equipment, fatigue, chewing, or swallowing."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "diet",
          "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
          "additionalResearchBatches": [
            "BATCH_03_DIABETES_GLUCOSE"
          ],
          "editorialSourceIds": [
            "NIDDK_HEALTHY_HABITS_BUDGET",
            "NIDDK_HEALTHY_EATING_LIFE",
            "USDA_MYPLATE",
            "FDA_FOOD_ALLERGIES",
            "NIDDK_HEALTHY_LIVING_DIABETES"
          ],
          "relatedIds": [
            "nutrition",
            "nutrition-variety",
            "nutrition-plate",
            "nutrition-limit",
            "sugar-lifestyle",
            "malnutrition",
            "diabetes-diet"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "individual meal timing and portions",
              "food-insecurity referral localization",
              "food-allergy and cross-contact plans",
              "food-safety timing and storage rules",
              "insulin and medicine matching",
              "pregnancy, child, kidney, heart-failure, eating-disorder, disability, swallowing, and malnutrition adaptations"
            ]
          }
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
          "title": "Blood pressure lifestyle support",
          "subtitle": "A coordinated routine for food, movement, sleep, tobacco, alcohol, stress, medicine consistency, and monitoring.",
          "body": [
            "Purpose — Lifestyle support can help prevent or manage high blood pressure and reduce cardiovascular risk. It is used with—not instead of—clinical assessment and prescribed treatment.",
            "Start with a pattern — Blood pressure varies during the day. Compare repeated readings with food, sleep, activity, pain, stress, medicines, alcohol, nicotine, caffeine, and illness rather than reacting to one number.",
            "Food and sodium — Use a DASH-style pattern and review packaged foods, restaurant meals, sauces, processed meats, breads, snacks, and seasoning mixes for sodium.",
            "Movement — Regular aerobic activity and muscle-strengthening activity can support blood pressure and heart health. The type and pace should fit symptoms, mobility, pregnancy, heart disease, and other conditions.",
            "Body weight — For some people, gradual weight change can improve blood pressure. Weight advice should avoid stigma and should be individualized for pregnancy, frailty, eating disorders, and other conditions.",
            "Sleep — Short or disrupted sleep and untreated sleep apnea can contribute to difficult blood-pressure control. Record snoring, gasping, morning headache, and daytime sleepiness.",
            "Alcohol, tobacco, and stimulants — Alcohol, nicotine, cocaine or amphetamines, energy products, and some decongestants can raise blood pressure or complicate treatment. Ask for support rather than stopping a prescribed medicine independently.",
            "Stress and recovery — Stress-management skills may support the overall plan, but high blood pressure is not simply caused by worry. Persistent high readings still require medical review.",
            "Medicine consistency — Take prescribed medicine as directed and prepare a complete list of prescriptions, over-the-counter medicines, supplements, and salt substitutes. Do not double or stop doses without product-specific advice.",
            "Monitoring — Use correct home technique, record symptoms and timing, and bring the device and log to appointments. A clinician should set the review frequency and personal target."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "bp-life-task-pattern",
                "title": "Track blood pressure and daily context for seven days",
                "detail": "Record time, reading, sleep, activity, pain, stress, alcohol, caffeine, nicotine, and medicine timing without changing treatment."
              },
              {
                "id": "bp-life-task-sodium",
                "title": "Compare sodium in five usual foods",
                "detail": "Look at serving size, sodium per serving, and realistic lower-sodium alternatives."
              },
              {
                "id": "bp-life-task-movement",
                "title": "Record current movement and symptoms",
                "detail": "Note walking, exercise, dizziness, chest symptoms, breathlessness, pain, and recovery."
              },
              {
                "id": "bp-life-task-sleep",
                "title": "Screen your routine for sleep disruption",
                "detail": "Record snoring, gasping, morning headache, insomnia, and daytime sleepiness."
              },
              {
                "id": "bp-life-task-medlist",
                "title": "Prepare a complete medicine and supplement list",
                "detail": "Include pain relievers, decongestants, stimulants, hormonal products, herbal products, and salt substitutes."
              },
              {
                "id": "bp-life-task-barrier",
                "title": "Name one barrier to the plan",
                "detail": "Examples include cost, food access, shift work, caregiving, disability, transport, language, side effects, or medication access."
              }
            ],
            "questions": [
              {
                "id": "bp-life-q-priority",
                "title": "Which lifestyle change should I prioritize first?",
                "detail": "Ask for one or two measurable changes rather than an unrealistic complete overhaul."
              },
              {
                "id": "bp-life-q-activity",
                "title": "What movement is safe for me?",
                "detail": "Discuss symptoms, pregnancy, heart disease, joint pain, falls, asthma, and current fitness."
              },
              {
                "id": "bp-life-q-sleep",
                "title": "Should I be assessed for sleep apnea?",
                "detail": "Mention loud snoring, gasping, witnessed pauses, morning headache, or strong daytime sleepiness."
              },
              {
                "id": "bp-life-q-substances",
                "title": "Could a medicine, supplement, alcohol, nicotine, or stimulant be raising my readings?",
                "detail": "Bring exact names, doses, timing, and frequency for review."
              },
              {
                "id": "bp-life-q-support",
                "title": "What support is available for food, tobacco, alcohol, stress, or medicine access?",
                "detail": "Ask about dietitians, pharmacists, community programs, counseling, or social support."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_04_BLOOD_PRESSURE",
          "editorialSourceIds": [
            "NHLBI_HIGH_BP_TREATMENT",
            "CDC_HIGH_BP_RISK_FACTORS",
            "CDC_MANAGING_HIGH_BP"
          ],
          "relatedIds": [
            "hypertension",
            "hypertension-diet",
            "bp-range",
            "bp-home-monitoring",
            "bp-meds",
            "sleep-apnea",
            "heart-disease",
            "diabetes"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "exercise clearance",
              "weight-management recommendations",
              "alcohol limits",
              "pregnancy and postpartum guidance",
              "tobacco and substance-treatment pathways",
              "medicine adherence and missed-dose instructions"
            ]
          }
        },
        {
          "id": "bp-home-monitoring",
          "title": "Home blood-pressure measurement",
          "subtitle": "Use a validated upper-arm device, correct cuff size, repeatable positioning, and a written log that a clinician can interpret.",
          "body": [
            "Purpose — Home measurements can show patterns outside the clinic and help a clinician assess treatment response. They do not replace emergency assessment or establish a diagnosis by themselves.",
            "Choose the device — Use an automatic, validated upper-arm monitor when possible. Wrist and finger devices are more sensitive to position. The cuff must fit the arm correctly.",
            "Prepare — Follow the device and clinician instructions. A common method is to avoid exercise, caffeine, nicotine, and a meal for about 30 minutes, empty the bladder, and sit quietly for about five minutes.",
            "Position — Sit with the back supported, feet flat, legs uncrossed, and the cuff on bare skin. Support the arm so the cuff is near heart level. Do not talk, text, or watch a stressful screen during the reading.",
            "Take readings consistently — Use the same arm and similar times when possible. If the clinician requests repeated readings, allow a brief interval and record each result rather than selecting only the lowest.",
            "Record context — Write the date, time, arm, readings, pulse if shown, symptoms, medicine timing, unusual pain or stress, illness, caffeine, nicotine, alcohol, and exercise.",
            "Check accuracy — Bring the monitor and cuff to an appointment so technique and device readings can be compared with the clinic equipment.",
            "Interpret patterns — One reading can be affected by position, cuff size, pain, anxiety, temperature, talking, a full bladder, recent activity, or substances. Repeated patterns are more useful.",
            "Do not self-adjust treatment — Do not skip, double, stop, or move medicine doses based on one home result unless the written clinician plan specifically says to do so.",
            "Safety — A very high reading with chest pain, severe breathing difficulty, weakness, numbness, trouble speaking, severe headache, confusion, seizure, fainting, or vision change may be an emergency. Pregnancy and the postpartum period require separate urgent guidance."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "bp-home-task-device",
                "title": "Record the monitor brand, model, cuff size, and arm circumference",
                "detail": "Bring these details and the device to the next appointment."
              },
              {
                "id": "bp-home-task-technique",
                "title": "Practice the measurement position",
                "detail": "Back supported, feet flat, legs uncrossed, bare upper arm supported near heart level, and no talking."
              },
              {
                "id": "bp-home-task-log",
                "title": "Keep the clinician-requested blood-pressure log",
                "detail": "Record every requested reading with date, time, arm, symptoms, and medicine timing."
              },
              {
                "id": "bp-home-task-compare",
                "title": "Compare the home monitor with clinic equipment",
                "detail": "Ask staff to review cuff fit, placement, position, and device accuracy."
              },
              {
                "id": "bp-home-task-plan",
                "title": "Write down the action plan for unusually high or low readings",
                "detail": "Include who to call, which symptoms mean emergency care, and what not to change independently."
              }
            ],
            "questions": [
              {
                "id": "bp-home-q-device",
                "title": "Is this device validated and is the cuff the correct size?",
                "detail": "Bring the monitor, cuff, box, or model number."
              },
              {
                "id": "bp-home-q-schedule",
                "title": "When and how often should I measure?",
                "detail": "Ask for a start date, end date, time windows, number of readings, and how to send the log."
              },
              {
                "id": "bp-home-q-target",
                "title": "What home range and action thresholds apply to me?",
                "detail": "Pregnancy, age, medicines, kidney disease, diabetes, falls, and other conditions can change the plan."
              },
              {
                "id": "bp-home-q-difference",
                "title": "What should I do if home and clinic readings differ?",
                "detail": "Ask about technique, white-coat patterns, masked hypertension, or ambulatory monitoring."
              },
              {
                "id": "bp-home-q-low",
                "title": "What symptoms or low readings should prompt a medicine review?",
                "detail": "Mention dizziness, fainting, falls, weakness, dehydration, or illness."
              }
            ],
            "labs": [
              {
                "id": "bp-home-monitoring-review",
                "title": "Home blood-pressure log and device comparison",
                "detail": "Use the schedule recommended by the clinician and review the full pattern, not selected readings."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_04_BLOOD_PRESSURE",
          "editorialSourceIds": [
            "CDC_BP_MEASUREMENT",
            "AHA_HOME_BP_MONITORING",
            "NHLBI_SELF_MEASURED_BP"
          ],
          "relatedIds": [
            "bp-range",
            "hypertension",
            "bp-lifestyle",
            "bp-meds",
            "hypertension-emergency"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "preparation interval",
              "number and spacing of readings",
              "monitoring schedule",
              "individual home targets",
              "action thresholds",
              "pregnancy and child measurement guidance"
            ]
          }
        },
        {
          "id": "sugar-lifestyle",
          "title": "Blood-sugar lifestyle support",
          "subtitle": "Connect meal timing, carbohydrate portions, activity, hydration, sleep, stress, medicines, and glucose records without changing treatment independently.",
          "body": [
            "Purpose — Lifestyle patterns can support diabetes management and make glucose readings easier to interpret. They do not replace insulin, prescribed medicine, monitoring, or emergency plans.",
            "Meal timing and carbohydrate — The amount and timing of carbohydrate can affect glucose. A consistent pattern may help some treatment plans, while others allow more flexibility.",
            "Pair meals thoughtfully — Vegetables, protein, fiber-rich carbohydrate, and suitable healthy fat can make meals more complete. Carbohydrate still needs to match the individual treatment plan.",
            "Activity changes glucose — Walking or other activity can lower glucose during or after activity for some people, but insulin and selected medicines can create delayed low-glucose risk.",
            "Hydration supports interpretation — Dehydration can accompany high glucose or illness. Fluid instructions must fit kidney, heart, pregnancy, and sick-day plans.",
            "Sleep and stress matter — Poor sleep, shift work, illness, pain, and stress hormones can change appetite, activity, medicine routines, and glucose patterns.",
            "Use repeated observations — Compare similar meals with timing, portions, medicines, activity, sleep, stress, and readings across several days. One reading does not prove that a food is safe or harmful.",
            "Prepare for routine disruption — Work shifts, fasting, travel, exercise, vomiting, poor appetite, and illness require a written plan for meals, monitoring, medicines, low glucose, ketones, and clinician contact.",
            "Do not adjust treatment alone — Do not skip, double, stop, or change insulin or diabetes medicine based only on this page or a single glucose result.",
            "Safety — Shaking, sweating, confusion, seizure, inability to swallow, repeated vomiting, deep or rapid breathing, severe dehydration, or altered consciousness requires the written urgent or emergency plan."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "sugar-lifestyle-task-pattern",
                "title": "Record three days of meals, medicines, activity, and glucose",
                "detail": "Include timing, carbohydrate portions, sleep, stress, symptoms, and any low or high readings."
              },
              {
                "id": "sugar-lifestyle-task-repeat",
                "title": "Compare two similar meals with glucose patterns",
                "detail": "Keep medicine and activity context visible and do not change treatment independently."
              },
              {
                "id": "sugar-lifestyle-task-walk",
                "title": "Discuss a safe post-meal activity routine",
                "detail": "Ask about low-glucose risk, heart or joint conditions, pregnancy, neuropathy, and footwear."
              },
              {
                "id": "sugar-lifestyle-task-sickday",
                "title": "Prepare a written sick-day and disrupted-meal plan",
                "detail": "Include monitoring, fluids, food, medicines, ketones when applicable, low-glucose treatment, and contact instructions."
              },
              {
                "id": "sugar-lifestyle-task-supplies",
                "title": "Review glucose supplies and low-glucose access",
                "detail": "Check meter or sensor supplies, fast-acting carbohydrate, identification, and glucagon when prescribed."
              }
            ],
            "questions": [
              {
                "id": "sugar-lifestyle-q-timing",
                "title": "Ask how meal timing should match medicines or insulin",
                "detail": "Ask about skipped meals, work shifts, fasting, exercise, poor appetite, and illness."
              },
              {
                "id": "sugar-lifestyle-q-carbs",
                "title": "Ask whether a plate method, carbohydrate counting, or another approach is appropriate",
                "detail": "The choice depends on treatment, goals, numeracy, culture, preferences, and daily routine."
              },
              {
                "id": "sugar-lifestyle-q-activity",
                "title": "Ask when activity could lower glucose too much",
                "detail": "Ask about insulin, selected medicines, delayed lows, sensor trends, and activity intensity."
              },
              {
                "id": "sugar-lifestyle-q-patterns",
                "title": "Ask which glucose patterns should trigger contact with the care team",
                "detail": "Use clinician-provided thresholds rather than a universal number from the app."
              },
              {
                "id": "sugar-lifestyle-q-dietitian",
                "title": "Ask whether diabetes nutrition education would help",
                "detail": "Bring usual meals, readings, medicines, culture, budget, access, and barriers."
              }
            ],
            "labs": [
              {
                "id": "sugar-lifestyle-lab-log",
                "title": "Review glucose records and HbA1c together",
                "detail": "Ask how short-term readings, time in range when available, low-glucose episodes, and HbA1c fit together."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
          "additionalResearchBatches": [
            "BATCH_03_DIABETES_GLUCOSE"
          ],
          "editorialSourceIds": [
            "NIDDK_HEALTHY_LIVING_DIABETES",
            "CDC_DIABETES_MEAL_PLANNING",
            "NIDDK_HEALTHY_EATING_LIFE"
          ],
          "relatedIds": [
            "nutrition",
            "nutrition-plate",
            "nutrition-plan",
            "diabetes",
            "diabetes-diet",
            "sugar-range",
            "hba1c",
            "low-sugar-symptoms",
            "high-sugar-symptoms",
            "glucose-emergency",
            "insulin",
            "metformin"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "personal glucose targets and contact thresholds",
              "carbohydrate prescription and insulin matching",
              "medicine changes",
              "activity timing and low-glucose prevention",
              "sick-day, ketone, fasting, pregnancy, and emergency instructions",
              "glucagon and low-glucose treatment amounts"
            ]
          }
        },
        {
          "id": "cholesterol-lifestyle",
          "title": "Heart-health activity and lifestyle",
          "subtitle": "Activity, sitting time, tobacco, sleep, stress, food pattern, and treatment consistency work together to lower cardiovascular risk.",
          "body": [
            "Purpose — Lifestyle support can improve cholesterol and overall cardiovascular risk. It complements rather than replaces prescribed medicine or specialist care.",
            "Activity — Regular aerobic activity and muscle-strengthening activity support cardiovascular fitness and risk reduction. Some activity is better than none, and shorter sessions can add up.",
            "Start safely — Begin below the maximum, increase gradually, and match movement to mobility, symptoms, pregnancy, age, and current fitness. Known heart disease may require an individualized plan or cardiac rehabilitation.",
            "Break up sitting — Long periods of sitting can be interrupted with brief standing or movement when safe. The goal is a repeatable routine, not an all-or-nothing exercise program.",
            "Food pattern — Pair activity with a Mediterranean- or DASH-aligned eating pattern, sufficient hydration, and meals that fit diabetes, kidney, heart-failure, or other treatment needs.",
            "Tobacco and nicotine — Smoking and secondhand smoke increase cardiovascular risk. Ask for evidence-based cessation support rather than relying on willpower alone.",
            "Sleep and recovery — Poor sleep, sleep apnea, pain, and overtraining can make activity harder and affect blood pressure, glucose, and recovery. Record symptoms instead of pushing through warning signs.",
            "Stress and social support — Stress-management skills and reliable support can help adherence, but they do not replace evaluation of chest symptoms, high blood pressure, or abnormal cholesterol.",
            "Body weight — For some people, gradual weight change can improve risk factors. Advice should be individualized and should account for pregnancy, frailty, eating disorders, culture, and access.",
            "Monitoring — Track activity, sitting time, symptoms, sleep, tobacco exposure, medicine consistency, blood pressure, glucose, and lipid results. Review the pattern with the care team."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "heart-life-task-baseline",
                "title": "Record a seven-day activity baseline",
                "detail": "Note walking, structured exercise, strength work, sitting time, symptoms, and recovery without trying to change everything at once."
              },
              {
                "id": "heart-life-task-breaks",
                "title": "Choose one repeatable sitting break",
                "detail": "Use a brief standing, walking, or mobility break that fits safety, work, pain, and disability needs."
              },
              {
                "id": "heart-life-task-symptoms",
                "title": "Track symptoms during and after activity",
                "detail": "Record chest discomfort, breathlessness, dizziness, palpitations, unusual fatigue, pain, and how long recovery takes."
              },
              {
                "id": "heart-life-task-tobacco",
                "title": "Record tobacco and nicotine exposure",
                "detail": "Include smoking, vaping, smokeless tobacco, and secondhand exposure; ask about treatment support."
              },
              {
                "id": "heart-life-task-barrier",
                "title": "Name the main barrier to activity or treatment consistency",
                "detail": "Examples include symptoms, cost, transport, unsafe space, disability, caregiving, work schedule, medicine effects, or low confidence."
              }
            ],
            "questions": [
              {
                "id": "heart-life-q-safety",
                "title": "What activity is safe for me now?",
                "detail": "Discuss known heart disease, recent symptoms or procedures, pregnancy, falls, joint pain, asthma, and current fitness."
              },
              {
                "id": "heart-life-q-rehab",
                "title": "Would cardiac rehabilitation or supervised exercise help?",
                "detail": "Ask after a heart event, procedure, new diagnosis, or when symptoms limit confidence."
              },
              {
                "id": "heart-life-q-target",
                "title": "What weekly activity target should I build toward?",
                "detail": "Ask for a gradual plan and clear reasons to stop or seek review."
              },
              {
                "id": "heart-life-q-tobacco",
                "title": "What support can help me stop tobacco or nicotine?",
                "detail": "Ask about counseling, medicines, pregnancy considerations, and local programs."
              },
              {
                "id": "heart-life-q-monitoring",
                "title": "Which measurements should be reviewed with lifestyle changes?",
                "detail": "Ask about lipids, blood pressure, glucose, weight, symptoms, and medicine effects."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_05_CHOLESTEROL_HEART",
          "editorialSourceIds": [
            "CDC_CHOLESTEROL_TREATMENT",
            "ODPHP_PHYSICAL_ACTIVITY_GUIDELINES",
            "AHA_DIET_LIFESTYLE",
            "MEDLINEPLUS_HEART_DISEASE"
          ],
          "relatedIds": [
            "cholesterol",
            "ldl",
            "heart-disease",
            "mediterranean-heart-diet",
            "statin",
            "exercise"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "activity clearance and intensity",
              "cardiac rehabilitation eligibility",
              "symptom stop rules and emergency instructions",
              "pregnancy, child, frailty, falls, and disability adaptations",
              "weight-management recommendations",
              "tobacco and nicotine treatment",
              "monitoring frequency"
            ]
          }
        },
        {
          "id": "sleep-schedule",
          "title": "Steady sleep schedule",
          "subtitle": "Use regular timing and enough sleep opportunity to strengthen the sleep–wake rhythm.",
          "body": [
            "Purpose — A repeatable schedule gives the body clock clearer timing signals and protects enough opportunity for sleep.",
            "Start with wake time — Choose a wake time that can be followed most days. A steady wake time is often more practical than forcing sleep at an exact bedtime.",
            "Protect enough time — Plan a sleep window that fits age, health, work, caregiving, and daytime function. Hours alone do not prove sleep quality.",
            "Days off — Keep weekday and weekend timing reasonably close when possible. Large shifts can make the next sleep period harder.",
            "Shift work or caregiving — Protect the most repeatable sleep window available and reduce light, noise, and interruptions during that period.",
            "Track response — Compare timing with sleep onset, night waking, morning alertness, naps, and daytime sleepiness for at least one week.",
            "Caution — Do not drive or perform hazardous work when dangerously sleepy. Persistent sleep difficulty needs assessment rather than stricter scheduling alone.",
            "Related care — Review insomnia, sleep apnea, restless legs, pain, nighttime asthma, medicines, and mood symptoms when the schedule is adequate but sleep remains poor."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "task-1-choose-a-wake-time-you-can-follow-most-d",
                "title": "Choose a wake time you can follow most days",
                "detail": "Keep the timing realistic for work, caregiving, health, and safety."
              },
              {
                "id": "task-2-keep-weekday-and-weekend-timing-reasonab",
                "title": "Compare weekday and day-off timing",
                "detail": "Record large shifts that may disrupt the sleep–wake rhythm."
              },
              {
                "id": "task-3-give-yourself-enough-time-in-bed-for-the",
                "title": "Protect enough opportunity for sleep",
                "detail": "Plan the window before adding optional evening activities."
              },
              {
                "id": "task-4-if-shift-work-or-caregiving-makes-a-fixe",
                "title": "Create a repeatable sleep window for shift work or caregiving",
                "detail": "Reduce light, noise, and interruptions during the protected period."
              },
              {
                "id": "sleep-schedule-task-5",
                "title": "Track morning alertness and daytime sleepiness",
                "detail": "Compare function with the schedule rather than counting hours alone."
              }
            ],
            "questions": [
              {
                "id": "ask-safety",
                "title": "Is this schedule safe and realistic for me?",
                "detail": "Ask about shift work, pregnancy, disability, medicines, chronic conditions, and dangerous daytime sleepiness."
              },
              {
                "id": "sleep-schedule-q-2",
                "title": "Could another sleep disorder be disrupting an adequate schedule?",
                "detail": "Discuss snoring, gasping, leg sensations, pain, unusual behaviors, or persistent insomnia."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
          "editorialSourceIds": [
            "NHLBI_HEALTHY_SLEEP_HABITS",
            "CDC_ABOUT_SLEEP",
            "NHLBI_INSOMNIA_TREATMENT"
          ],
          "relatedIds": [
            "sleep",
            "insomnia",
            "sleep-apnea",
            "restless-legs",
            "headache",
            "asthma"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "driving-safety wording",
              "supplement wording",
              "pregnancy and chronic-condition adaptations"
            ]
          }
        },
        {
          "id": "sleep-wind-down",
          "title": "Wind-down and screen routine",
          "subtitle": "Use the final part of the evening to reduce light, stimulation, and unfinished mental work.",
          "body": [
            "Purpose — A repeatable wind-down helps separate daytime demands from the sleep period.",
            "Lower stimulation — Move demanding work, arguments, intense exercise, and heavy problem-solving earlier when possible.",
            "Review light and screens — Reduce bright room light and screen exposure before bed. The practical timing should fit the person rather than becoming another source of anxiety.",
            "Use a repeatable sequence — Washing, reading, prayer, breathing, gentle stretching, or preparing for the next day can become a consistent cue.",
            "Manage unfinished thoughts — Write down next-day tasks or questions before bed instead of repeatedly rehearsing them.",
            "Do not force sleep — A routine supports sleep but cannot guarantee it. Persistent insomnia may need CBT-I or evaluation for another cause.",
            "Caution — Avoid unreviewed sedating medicines, alcohol, or supplements as a substitute for a routine. They may cause interactions or next-day impairment.",
            "Track response — Note which activities calm you, which increase alertness, and whether the routine affects time awake in bed."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "task-1-move-demanding-work-arguments-and-heav",
                "title": "Move demanding tasks earlier",
                "detail": "Choose a clear stopping point for work, conflict, and problem-solving."
              },
              {
                "id": "task-2-turn-off-or-reduce-bright-electronic-scr",
                "title": "Reduce bright light and screens before bed",
                "detail": "Use dimmer settings or move devices away when practical."
              },
              {
                "id": "task-3-use-a-repeatable-quiet-routine-such-as-w",
                "title": "Build a repeatable quiet sequence",
                "detail": "Choose two or three calm activities that are realistic to repeat."
              },
              {
                "id": "task-4-a-wind-down-routine-supports-sleep-habit",
                "title": "Record what increases or lowers alertness",
                "detail": "Use the pattern to refine the routine without assuming it treats insomnia."
              },
              {
                "id": "sleep-wind-down-task-5",
                "title": "Write down next-day tasks before bed",
                "detail": "Move planning out of the sleep period."
              }
            ],
            "questions": [
              {
                "id": "ask-safety",
                "title": "Is this wind-down approach safe and realistic for me?",
                "detail": "Ask about medicines, trauma symptoms, shift work, pain, disability, pregnancy, and caregiving."
              },
              {
                "id": "sleep-wind-down-q-2",
                "title": "Would CBT-I be more appropriate than adding more sleep rules?",
                "detail": "Discuss persistent insomnia or growing anxiety about sleep."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
          "editorialSourceIds": [
            "NHLBI_HEALTHY_SLEEP_HABITS",
            "CDC_ABOUT_SLEEP",
            "NHLBI_INSOMNIA_TREATMENT"
          ],
          "relatedIds": [
            "sleep",
            "insomnia",
            "sleep-apnea",
            "restless-legs",
            "headache",
            "asthma"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "driving-safety wording",
              "supplement wording",
              "pregnancy and chronic-condition adaptations"
            ]
          }
        },
        {
          "id": "sleep-environment",
          "title": "Bedroom setup for sleep",
          "subtitle": "Reduce repeated light, noise, heat, and interruptions that fragment sleep.",
          "body": [
            "Purpose — The environment should make sleep easier and reduce avoidable waking.",
            "Light — Use curtains, an eye mask, dim night lighting, or device settings when safe and practical.",
            "Noise — Reduce alerts, television, traffic, or household noise with practical changes such as quieter settings or ear protection when safe.",
            "Temperature and comfort — Keep the room comfortably cool and review bedding, pain, reflux, breathing, or mobility needs that affect comfort.",
            "Bed association — Keep the bed mainly for sleep when possible. Long periods of work, scrolling, or worrying in bed can strengthen wakefulness.",
            "Safety and access — Do not create fall hazards or block access to prescribed inhalers, mobility aids, a bathroom route, or emergency equipment.",
            "Persistent interruptions — Snoring, gasping, coughing, pain, leg discomfort, nightmares, urination, or unusual behaviors may need clinical review.",
            "Track response — Change one or two factors at a time and compare night waking and morning alertness."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "task-1-keep-the-bedroom-quiet-dark-relaxing",
                "title": "Review light, noise, and temperature",
                "detail": "Identify the interruptions that occur most often."
              },
              {
                "id": "task-2-use-practical-fixes-such-as-curtains-an",
                "title": "Choose one safe environmental adjustment",
                "detail": "Examples include curtains, an eye mask, quieter phone settings, or moving a noisy device."
              },
              {
                "id": "task-3-keep-the-bed-mainly-associated-with-slee",
                "title": "Keep wakeful activities out of bed when possible",
                "detail": "Move work, scrolling, and planning to another place."
              },
              {
                "id": "task-4-if-snoring-gasping-pain-coughing-leg",
                "title": "Track symptoms that continue despite a good environment",
                "detail": "Record snoring, gasping, pain, cough, leg sensations, urination, or unusual behaviors."
              },
              {
                "id": "sleep-environment-task-5",
                "title": "Check nighttime safety and access",
                "detail": "Keep clear paths and prescribed equipment accessible."
              }
            ],
            "questions": [
              {
                "id": "ask-safety",
                "title": "Is this bedroom setup safe for me?",
                "detail": "Ask about falls, disability, oxygen or PAP equipment, asthma, hearing needs, children, and caregiving."
              },
              {
                "id": "sleep-environment-q-2",
                "title": "Which repeated awakenings need medical assessment?",
                "detail": "Bring a record of symptoms and timing."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
          "editorialSourceIds": [
            "NHLBI_HEALTHY_SLEEP_HABITS",
            "CDC_ABOUT_SLEEP",
            "NHLBI_INSOMNIA_TREATMENT"
          ],
          "relatedIds": [
            "sleep",
            "insomnia",
            "sleep-apnea",
            "restless-legs",
            "headache",
            "asthma"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "driving-safety wording",
              "supplement wording",
              "pregnancy and chronic-condition adaptations"
            ]
          }
        },
        {
          "id": "sleep-daylight-activity",
          "title": "Daylight, movement, and naps",
          "subtitle": "Use daytime light and regular activity to support a clearer sleep–wake rhythm.",
          "body": [
            "Purpose — Daytime light and activity provide timing and activity signals that can support nighttime sleep.",
            "Daylight — Spend time in daylight when possible, especially earlier in the waking period. Timing may need adjustment for shift workers or circadian-rhythm conditions.",
            "Movement — Use regular physical activity that fits health, mobility, and safety. Consistency matters more than relying on one intense session.",
            "Exercise timing — Very intense activity close to bedtime may keep some people alert or overheated, while others are not affected. Track the individual response.",
            "Naps — Naps may help some people but can reduce nighttime sleep pressure. If naps interfere, compare shorter or earlier naps with the usual pattern.",
            "Daytime sleepiness — An uncontrollable need to sleep is not solved by exercise alone and may indicate sleep deficiency, sleep apnea, medicine effects, or another condition.",
            "Caution — Avoid exercise when dangerously sleepy, acutely unwell, or when symptoms make activity unsafe. Follow condition-specific advice.",
            "Track response — Record daylight timing, activity, naps, sleep onset, night waking, and daytime alertness."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "task-1-spend-time-outside-during-the-day-when-p",
                "title": "Record daytime light exposure",
                "detail": "Note timing and whether the day was mostly indoors."
              },
              {
                "id": "task-2-be-physically-active-regularly-movement",
                "title": "Plan regular movement that fits your health",
                "detail": "Use a realistic amount and record how it affects alertness and sleep."
              },
              {
                "id": "task-3-avoid-very-intense-exercise-in-the-final",
                "title": "Compare exercise timing with sleep",
                "detail": "Move very intense activity earlier if it repeatedly increases alertness at bedtime."
              },
              {
                "id": "task-4-if-naps-make-nighttime-sleep-harder-sho",
                "title": "Track nap timing and duration",
                "detail": "Compare shorter or earlier naps if nighttime sleep is harder."
              },
              {
                "id": "sleep-daylight-task-5",
                "title": "Record dangerous daytime sleepiness",
                "detail": "Avoid driving and discuss uncontrollable dozing promptly."
              }
            ],
            "questions": [
              {
                "id": "ask-safety",
                "title": "What daylight, activity, and nap pattern is safe for me?",
                "detail": "Ask about shift work, pregnancy, disability, heart or lung disease, pain, and medicines."
              },
              {
                "id": "sleep-daylight-q-2",
                "title": "Could severe daytime sleepiness require a sleep evaluation?",
                "detail": "Describe dozing, near misses, and whether sleepiness occurs despite enough sleep opportunity."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
          "editorialSourceIds": [
            "NHLBI_HEALTHY_SLEEP_HABITS",
            "CDC_ABOUT_SLEEP",
            "NHLBI_INSOMNIA_TREATMENT"
          ],
          "relatedIds": [
            "sleep",
            "insomnia",
            "sleep-apnea",
            "restless-legs",
            "headache",
            "asthma"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "driving-safety wording",
              "supplement wording",
              "pregnancy and chronic-condition adaptations"
            ]
          }
        },
        {
          "id": "wellbeing-connection",
          "title": "Protect real social connection",
          "subtitle": "Safe, supportive relationships can strengthen emotional well-being and practical resilience.",
          "body": [
            "Purpose — Social connection means having relationships or communities that provide belonging, trust, companionship, information, emotional support, or practical help. It is not measured only by the number of contacts.",
            "Who it may support — Connection can help during stress, illness, caregiving, grief, depression, anxiety, disability, relocation, retirement, and other transitions. It can also make appointments, meals, movement, and treatment routines easier to maintain.",
            "Choose quality and safety — A supportive contact respects boundaries and does not threaten, control, humiliate, exploit, or pressure. More contact is not always better when a relationship is unsafe or repeatedly harmful.",
            "Use a small first step — Send a message, share a meal, attend a faith or community activity, ask for a practical favor, join a peer group, or schedule a regular check-in. Choose a form of contact that fits energy, mobility, hearing, language, culture, and privacy.",
            "Different kinds of support — One person may listen, another may help with transport or meals, and a professional may provide therapy or case support. A single relationship does not need to meet every need.",
            "Barriers matter — Depression, anxiety, pain, fatigue, caregiving, disability, money, transport, stigma, unsafe relationships, and digital access can make connection difficult. The plan should address the barrier rather than blaming the person.",
            "Online connection — Online groups may help with access and shared experience. Protect privacy, verify health claims, and avoid replacing professional care with unmoderated advice.",
            "Monitoring — Notice whether contact leaves you more supported, pressured, exhausted, unsafe, or isolated. Record repeated cancellations, conflict, withdrawal, or loss of interest when these may signal worsening symptoms.",
            "When more help is needed — Severe isolation, inability to ask for help, abuse, stalking, coercive control, suicidal thoughts, or immediate danger require professional or urgent support through the appropriate local service."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "connection-task-map",
                "title": "Prepare three types of support",
                "detail": "List one person or service for emotional support, one for practical help, and one for professional or urgent help."
              },
              {
                "id": "connection-task-contact",
                "title": "Add one realistic contact",
                "detail": "Choose a message, call, shared meal, visit, group, or appointment that feels safe and manageable."
              },
              {
                "id": "connection-task-request",
                "title": "Prepare one specific request for help",
                "detail": "Ask for a concrete action such as transport, a meal, childcare, appointment support, or a regular check-in."
              },
              {
                "id": "connection-task-boundary",
                "title": "Record one relationship boundary",
                "detail": "Identify what contact is acceptable and what behavior requires distance or support."
              },
              {
                "id": "connection-task-barrier",
                "title": "Record the main barrier to connection",
                "detail": "Record whether energy, anxiety, pain, transport, money, language, privacy, caregiving, or safety is limiting contact."
              },
              {
                "id": "connection-task-followup",
                "title": "Review how the contact affected you",
                "detail": "Note whether you felt supported, pressured, calmer, more distressed, or more able to complete daily tasks."
              }
            ],
            "questions": [
              {
                "id": "connection-q-support",
                "title": "What social or peer support is available locally?",
                "detail": "Ask about condition-specific groups, community programs, faith communities, caregiver resources, and accessible formats."
              },
              {
                "id": "connection-q-therapy",
                "title": "Would therapy or a structured support group help?",
                "detail": "Ask how group, individual, family, or couples approaches fit the situation and safety needs."
              },
              {
                "id": "connection-q-safety",
                "title": "How should unsafe or controlling relationships be handled?",
                "detail": "Ask about confidential safeguarding, domestic-violence, legal, housing, or emergency support."
              },
              {
                "id": "connection-q-access",
                "title": "What help is available for transport, language, disability, cost, or digital access?",
                "detail": "Ask for practical services rather than relying only on informal support."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_07_MOOD_STRESS",
          "editorialSourceIds": [
            "CDC_SOCIAL_CONNECTION",
            "CDC_IMPROVING_SOCIAL_CONNECTION",
            "CDC_MENTAL_HEALTH_OVERVIEW",
            "NIMH_CARING_MENTAL_HEALTH"
          ],
          "relatedIds": [
            "happiness",
            "depression",
            "anxiety",
            "chronic-stress",
            "wellbeing-goals",
            "wellbeing-foundations"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "abuse coercive-control stalking and safeguarding wording",
              "local crisis and community-resource localization",
              "child and dependent-adult safeguarding",
              "online group privacy and moderation guidance"
            ]
          }
        },
        {
          "id": "wellbeing-movement",
          "title": "Use movement as a daily reset",
          "subtitle": "A manageable amount of activity can support mood, sleep, structure, and physical health.",
          "body": [
            "Purpose — Movement can support emotional well-being, reduce time spent inactive, provide daily structure, and improve physical health. It is supportive care, not proof that symptoms are minor and not a replacement for depression or anxiety treatment.",
            "Who it may support — People with low mood, anxiety, chronic stress, poor sleep, pain, or social isolation may benefit from a safe, realistic activity plan. The starting point depends on health, disability, pregnancy, symptoms, and current activity.",
            "Start below the barrier — Choose an amount that feels possible on a difficult day, such as standing, gentle mobility, a short walk, household movement, or a brief accessible activity. Repeatability matters more than intensity at the start.",
            "Use timing deliberately — Daytime activity may support sleep and energy. Very late intense exercise can disturb sleep for some people. Compare timing with mood, anxiety, pain, and sleep rather than assuming one schedule fits everyone.",
            "Add connection when helpful — Walking with another person, attending a class, or using a supervised program can add accountability and social support. Solitary activity may be better when social contact feels overwhelming.",
            "Avoid all-or-nothing goals — Missing a session does not erase progress. Reduce the amount during symptom flares and return gradually rather than using exercise as punishment.",
            "Cautions — Chest pain, fainting, severe breathlessness, new neurologic symptoms, dangerous dizziness, acute injury, or another concerning change needs medical assessment. Excessive exercise, exercise used to compensate for eating, or activity during mania may require specialist review.",
            "Monitoring — Track activity type, duration, effort, mood before and after, sleep, pain, dizziness, and whether daily function improves or worsens."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "movement-task-baseline",
                "title": "Track a seven-day movement baseline",
                "detail": "Track walking, standing, exercise, sitting time, symptoms, mood, sleep, and recovery without judging the result."
              },
              {
                "id": "movement-task-minimum",
                "title": "Prepare a minimum movement option",
                "detail": "Define a brief activity that remains realistic on a low-energy or anxious day."
              },
              {
                "id": "movement-task-timing",
                "title": "Compare activity timing with mood and sleep",
                "detail": "Record whether morning, daytime, or evening movement changes alertness, worry, pain, or sleep."
              },
              {
                "id": "movement-task-support",
                "title": "Prepare a solo or supported activity plan",
                "detail": "Decide whether a companion, class, clinician, or accessible program would make movement safer or easier."
              },
              {
                "id": "movement-task-barriers",
                "title": "Record movement barriers",
                "detail": "Include pain, fatigue, fear, cost, transport, weather, caregiving, disability, safety, and lack of space."
              },
              {
                "id": "movement-task-warning",
                "title": "Record concerning symptoms and seek assessment",
                "detail": "Document chest pain, fainting, severe breathlessness, new neurologic symptoms, or dangerous dizziness and seek appropriate assessment."
              }
            ],
            "questions": [
              {
                "id": "movement-q-safe",
                "title": "What activity is safe for my symptoms and health conditions?",
                "detail": "Ask about heart, lung, joint, neurologic, pregnancy, eating-disorder, medication, and fall-risk considerations."
              },
              {
                "id": "movement-q-mood",
                "title": "How can movement support treatment without replacing it?",
                "detail": "Ask how activity fits with psychotherapy, medication, sleep care, and recovery goals."
              },
              {
                "id": "movement-q-referral",
                "title": "Would physical therapy, cardiac rehabilitation, pulmonary rehabilitation, or an adapted program help?",
                "detail": "Ask which supervised or accessible option matches the condition."
              },
              {
                "id": "movement-q-warning",
                "title": "Which symptoms mean I should stop or seek urgent help?",
                "detail": "Ask for individualized warning signs and a return-to-activity plan."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_07_MOOD_STRESS",
          "editorialSourceIds": [
            "NIMH_CARING_MENTAL_HEALTH",
            "NIMH_GAD",
            "CDC_MENTAL_HEALTH_OVERVIEW"
          ],
          "relatedIds": [
            "happiness",
            "depression",
            "anxiety",
            "chronic-stress",
            "exercise-start-small",
            "exercise-aerobic",
            "exercise-strength",
            "exercise-sit-less",
            "exercise-recovery",
            "sleep-daylight-activity"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "exercise contraindications and emergency wording",
              "eating-disorder and compulsive-exercise wording",
              "mania-related activity guidance",
              "pregnancy child disability and older-adult adaptations",
              "activity targets and progression"
            ]
          }
        },
        {
          "id": "wellbeing-relaxation",
          "title": "Practice a relaxation response",
          "subtitle": "Calming practices can reduce physical stress activation for some people when they feel safe and acceptable.",
          "body": [
            "Purpose — Relaxation practices aim to reduce the body’s stress response. Examples include slower breathing, progressive muscle relaxation, guided imagery, mindfulness, prayer, gentle yoga, music, or quiet time in nature.",
            "Choose a safe practice — The best method is one that fits health, culture, beliefs, trauma history, sensory needs, and privacy. A practice that feels calming for one person can increase distress for another.",
            "Start briefly — Try a short practice in a safe place before using it during intense symptoms. Longer sessions are not automatically better.",
            "Breathing caution — Do not force deep or rapid breathing. Stop if there is worsening dizziness, tingling, chest discomfort, air hunger, panic, or faintness. Breathing symptoms from asthma, heart disease, infection, or another condition need appropriate medical review.",
            "Trauma and intrusive thoughts — Closing the eyes, body scanning, silence, or imagery may worsen flashbacks or dissociation for some people. Use an eyes-open grounding method or trauma-informed professional support instead.",
            "Mindfulness is not a test — Wandering thoughts are expected. The goal is to notice and return attention, not to eliminate every thought or emotion.",
            "Use alongside care — Relaxation may support stress or anxiety management, but it does not replace psychotherapy, medication, safeguarding, substance-use care, or evaluation of physical warning signs.",
            "Monitoring — Record the method, length, setting, symptom level before and after, and any dizziness, panic, intrusive memories, pain, or sleep effect."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "relax-task-choose",
                "title": "Prepare one brief relaxation method",
                "detail": "Select slow comfortable breathing, muscle relaxation, grounding, prayer, music, imagery, or another acceptable practice."
              },
              {
                "id": "relax-task-safe-setting",
                "title": "Compare the method in a safe low-stress setting",
                "detail": "Learn how the method affects you before relying on it during intense distress."
              },
              {
                "id": "relax-task-track",
                "title": "Track the response",
                "detail": "Note symptom level before and after, duration, dizziness, panic, intrusive memories, pain, and sleep effect."
              },
              {
                "id": "relax-task-grounding",
                "title": "Prepare an eyes-open grounding option",
                "detail": "Identify visible objects, sounds, contact with the floor, or another method that keeps attention in the present."
              },
              {
                "id": "relax-task-stop",
                "title": "Review any practice that increases distress",
                "detail": "Do not force the method when it worsens panic, dissociation, breathing symptoms, or physical pain."
              },
              {
                "id": "relax-task-routine",
                "title": "Add the practice to one routine cue",
                "detail": "Use a predictable cue such as after waking, after work, before a meal, or during the wind-down period."
              }
            ],
            "questions": [
              {
                "id": "relax-q-method",
                "title": "Which relaxation method fits my symptoms and history?",
                "detail": "Ask about trauma, panic, asthma, heart disease, pain, pregnancy, disability, and cultural preferences."
              },
              {
                "id": "relax-q-therapy",
                "title": "Should relaxation be combined with psychotherapy or another treatment?",
                "detail": "Ask how the practice supports—not replaces—the main treatment plan."
              },
              {
                "id": "relax-q-worse",
                "title": "What should I do if mindfulness or breathing worsens symptoms?",
                "detail": "Ask about trauma-informed grounding, panic treatment, breathing assessment, or another method."
              },
              {
                "id": "relax-q-app",
                "title": "Are apps, classes, or groups appropriate and private?",
                "detail": "Ask about qualifications, data privacy, cost, accessibility, and evidence."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_07_MOOD_STRESS",
          "editorialSourceIds": [
            "NCCIH_RELAXATION",
            "NCCIH_MEDITATION",
            "NIMH_CARING_MENTAL_HEALTH",
            "NIMH_GAD"
          ],
          "relatedIds": [
            "happiness",
            "anxiety",
            "chronic-stress",
            "insomnia",
            "sleep-wind-down",
            "wellbeing-foundations"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "breathing-exercise safety wording",
              "trauma dissociation and psychosis adaptations",
              "pregnancy child and disability adaptations",
              "app and program recommendations",
              "acute cardiopulmonary symptom differentiation"
            ]
          }
        },
        {
          "id": "wellbeing-goals",
          "title": "Set realistic goals and priorities",
          "subtitle": "Reduce overload by turning broad demands into visible next steps and allowing lower-capacity days.",
          "body": [
            "Purpose — Realistic planning can reduce cognitive overload and make progress visible when stress, depression, anxiety, fatigue, pain, or caregiving limits capacity.",
            "Separate needs from expectations — Identify what protects safety, health, housing, food, medicine, dependents, or essential work. Other tasks may be delayed, delegated, simplified, or declined.",
            "Use one purpose per step — Replace “fix everything” with a specific action such as make one call, prepare one question, eat one meal, or walk for a short period.",
            "Match the plan to current capacity — A goal should be smaller during severe symptoms. Completing a minimum version can protect continuity without turning recovery into another performance test.",
            "Plan barriers in advance — Note transport, money, childcare, language, disability, pain, fatigue, anxiety, privacy, or digital access and decide what support is needed.",
            "Use compassionate review — At the end of the day, record what was completed, what was learned, and what should change. Avoid using missed tasks as evidence of personal failure.",
            "Know when goals are not enough — Marked inability to complete basic self-care, care for dependents, attend essential treatment, or remain safe needs professional or urgent support.",
            "Monitoring — Compare planned tasks with actual capacity, mood, sleep, pain, anxiety, and support. Repeatedly impossible goals may need clinical, workplace, family, or social-service intervention."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "goals-task-three",
                "title": "Record tasks as now, later, or delegate",
                "detail": "Keep the “now” list limited to safety, health, essential responsibilities, and one achievable personal task."
              },
              {
                "id": "goals-task-next",
                "title": "Prepare one next action",
                "detail": "Write an action that can be started without another decision."
              },
              {
                "id": "goals-task-minimum",
                "title": "Prepare a minimum version",
                "detail": "Choose the smallest safe version of a routine for low-capacity days."
              },
              {
                "id": "goals-task-barrier",
                "title": "Record one barrier and one support",
                "detail": "Match the barrier with transport, childcare, language, money, accessibility, practical help, or professional support."
              },
              {
                "id": "goals-task-review",
                "title": "Review completed work without punishment",
                "detail": "Record what was done, what was too much, and what should change tomorrow."
              },
              {
                "id": "goals-task-boundary",
                "title": "Prepare one respectful boundary statement",
                "detail": "Decide what request must be declined, delayed, or renegotiated to protect health and safety."
              }
            ],
            "questions": [
              {
                "id": "goals-q-function",
                "title": "Is reduced function a sign that symptoms need more treatment?",
                "detail": "Describe self-care, work, school, caregiving, medication, appointments, and household changes."
              },
              {
                "id": "goals-q-support",
                "title": "What occupational, disability, workplace, school, or social support is available?",
                "detail": "Ask for practical adjustments and documentation when appropriate."
              },
              {
                "id": "goals-q-cognition",
                "title": "Could sleep, medicines, pain, depression, anxiety, ADHD, or another condition affect planning and concentration?",
                "detail": "Bring examples of tasks that have become difficult."
              },
              {
                "id": "goals-q-urgent",
                "title": "What level of functional decline requires urgent help?",
                "detail": "Ask about inability to eat, drink, take essential medicine, care for dependents, or remain safe."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_07_MOOD_STRESS",
          "editorialSourceIds": [
            "NIMH_CARING_MENTAL_HEALTH",
            "CDC_MANAGING_STRESS",
            "CDC_MENTAL_HEALTH_OVERVIEW"
          ],
          "relatedIds": [
            "happiness",
            "depression",
            "anxiety",
            "chronic-stress",
            "wellbeing-connection",
            "wellbeing-foundations"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "functional-decline urgency wording",
              "disability workplace and school accommodation localization",
              "caregiver and dependent safety wording",
              "mania and overactivity adaptations"
            ]
          }
        },
        {
          "id": "wellbeing-foundations",
          "title": "Protect sleep, meals, hydration, and substance safety",
          "subtitle": "Basic physical routines can support mental health, while major changes may also signal that assessment is needed.",
          "body": [
            "Purpose — Sleep, food, hydration, movement, medicines, and substances affect energy, concentration, irritability, anxiety, and mood. A basic routine can support treatment and make symptom patterns easier to interpret.",
            "Sleep — Keep a reasonably consistent wake time and protect enough sleep opportunity. Record insomnia, oversleeping, nightmares, snoring, gasping, restless legs, daytime sleepiness, or a greatly reduced need for sleep.",
            "Meals — Use regular balanced meals when possible. Depression and stress may reduce appetite; anxiety may cause nausea; some people eat more during distress. Major or rapid changes need assessment rather than blame.",
            "Hydration — Use regular fluids unless a clinician has prescribed a restriction. Dizziness, vomiting, diarrhea, fever, heat, diabetes, kidney disease, heart disease, or medicines can change hydration needs.",
            "Caffeine and nicotine — Record amount and timing. These can worsen anxiety, palpitations, tremor, reflux, and sleep for some people. Changes should be gradual when withdrawal symptoms are a concern.",
            "Alcohol, cannabis, and other substances — These may temporarily change feelings but can worsen sleep, mood, anxiety, judgment, medication safety, and dependence risk. Abrupt stopping can be dangerous for some substances and requires clinical advice.",
            "Medication consistency — Take prescribed medicines according to the written plan. Do not change psychiatric, sleep, pain, blood-pressure, diabetes, or other medicines based on mood or appetite without prescriber or pharmacist guidance.",
            "Monitoring — Track sleep, meals, fluids, caffeine, nicotine, alcohol, cannabis, other substances, medicines, mood, anxiety, energy, and function. Bring the record to clinical review.",
            "Red flags — Inability to eat or drink, severe dehydration, dangerous intoxication or withdrawal, greatly reduced need for sleep with escalating energy or risky behavior, suicidal thoughts, psychosis, or inability to stay safe needs urgent assessment."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "foundations-task-seven",
                "title": "Track seven days of physical foundations",
                "detail": "Track sleep timing, meals, fluids, caffeine, nicotine, alcohol, cannabis, other substances, medicines, mood, anxiety, and function."
              },
              {
                "id": "foundations-task-sleep",
                "title": "Track a consistent wake time and sleep pattern",
                "detail": "Use a realistic schedule and record insomnia, oversleeping, nightmares, breathing symptoms, restless legs, and daytime sleepiness."
              },
              {
                "id": "foundations-task-meals",
                "title": "Prepare a minimum meal pattern",
                "detail": "Choose simple meals or snacks that remain possible on low-energy or nauseated days and fit medical needs."
              },
              {
                "id": "foundations-task-fluids",
                "title": "Add regular hydration cues when appropriate",
                "detail": "Link fluids to meals or medicines unless a clinician has prescribed a restriction."
              },
              {
                "id": "foundations-task-substances",
                "title": "Track substance use honestly",
                "detail": "Include amount, timing, reason for use, withdrawal symptoms, and effect on sleep, mood, anxiety, and safety."
              },
              {
                "id": "foundations-task-medlist",
                "title": "Prepare a complete medicine and supplement list",
                "detail": "Include dose labels, timing, missed doses, side effects, and recent changes without altering treatment independently."
              }
            ],
            "questions": [
              {
                "id": "foundations-q-sleep",
                "title": "Does the sleep pattern need separate assessment?",
                "detail": "Ask about insomnia, apnea, restless legs, nightmares, daytime sleepiness, and unusually reduced need for sleep."
              },
              {
                "id": "foundations-q-appetite",
                "title": "Do appetite or weight changes need medical or dietitian review?",
                "detail": "Ask about depression, anxiety, medicines, eating disorders, diabetes, thyroid disease, pregnancy, and digestive symptoms."
              },
              {
                "id": "foundations-q-substances",
                "title": "How can alcohol, nicotine, cannabis, or other substances be reduced safely?",
                "detail": "Ask about dependence, withdrawal, medicine interactions, pregnancy, driving, and treatment options."
              },
              {
                "id": "foundations-q-medicines",
                "title": "Could a medicine or supplement be affecting mood, anxiety, sleep, or appetite?",
                "detail": "Bring the full list and recent changes."
              },
              {
                "id": "foundations-q-urgent",
                "title": "Which changes require urgent assessment?",
                "detail": "Ask about dehydration, dangerous withdrawal, mania-like symptoms, psychosis, suicidality, and inability to care for basic needs."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_07_MOOD_STRESS",
          "editorialSourceIds": [
            "NIMH_CARING_MENTAL_HEALTH",
            "NIMH_DEPRESSION",
            "NIMH_GAD",
            "CDC_MANAGING_STRESS"
          ],
          "relatedIds": [
            "happiness",
            "depression",
            "anxiety",
            "chronic-stress",
            "sleep",
            "insomnia",
            "nutrition",
            "hydration-support",
            "wellbeing-movement"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "substance dependence and withdrawal wording",
              "mania and psychosis wording",
              "nutrition and hydration thresholds",
              "medication continuation and discontinuation wording",
              "pregnancy child eating-disorder kidney heart and diabetes adaptations"
            ]
          }
        },
        {
          "id": "hydration-support",
          "title": "Hydration and fluid-loss support",
          "subtitle": "Fluid patterns, dehydration signs, oral rehydration discussion, and condition-specific cautions.",
          "body": [
            "Purpose — Hydration support helps replace normal daily fluid losses and identifies when vomiting, diarrhea, fever, heat, exercise, or reduced intake may cause a larger deficit.",
            "What dehydration may feel like — Thirst, dry mouth, darker or reduced urine, tiredness, headache, dizziness, weakness, muscle cramps, or reduced alertness may occur.",
            "Use a repeatable pattern — Regular drinks with meals and between meals may be easier than trying to correct the whole day at once. During nausea, small frequent sips may be better tolerated.",
            "When water may not be enough — Significant vomiting or diarrhea can remove electrolytes as well as water. A clinician or pharmacist can advise whether a commercial oral rehydration product is appropriate.",
            "Fluid restrictions matter — Heart failure, kidney disease, liver disease, low sodium, swallowing problems, pregnancy complications, and some medicines can change the safest type or amount of fluid.",
            "Drinks to use carefully — Alcohol can worsen dehydration and judgment. Large amounts of caffeine, very sugary drinks, and products marketed as hydration solutions may not match the electrolyte needs of diarrheal illness.",
            "Monitoring — Track urine pattern, thirst, dizziness, vomiting or stool frequency, temperature, glucose when relevant, body weight when clinically advised, and whether medicines stay down.",
            "Medicine links — Diuretics, diabetes medicines, blood-pressure medicines, anti-inflammatory medicines, laxatives, and supplements may require individualized sick-day guidance during dehydration.",
            "Questions for a clinician — Ask which fluids fit the condition, whether electrolytes need replacement, which medicines need a sick-day plan, and what signs require same-day review.",
            "Seek urgent care if — There is fainting, confusion, severe weakness, minimal urine, inability to keep liquids down, severe breathing difficulty, seizure, shock symptoms, or rapidly worsening illness."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "hydration-task-pattern",
                "title": "Record the daily fluid pattern",
                "detail": "Note drinks with meals, between meals, caffeine, alcohol, vomiting, diarrhea, heat, exercise, and any fluid restriction."
              },
              {
                "id": "hydration-task-urine",
                "title": "Track urine and dizziness during fluid loss",
                "detail": "Record reduced or darker urine, standing dizziness, weakness, and increasing sleepiness."
              },
              {
                "id": "hydration-task-sips",
                "title": "Use small frequent sips when nauseated",
                "detail": "Record whether liquids stay down and seek review if oral intake remains inadequate."
              },
              {
                "id": "hydration-task-sickday",
                "title": "Prepare a medicine sick-day plan",
                "detail": "Ask how dehydration changes diabetes, blood-pressure, kidney, diuretic, anti-inflammatory, and other medicines."
              }
            ],
            "questions": [
              {
                "id": "hydration-q-fluid",
                "title": "Which fluids are safest for me?",
                "detail": "Ask about water, oral rehydration products, sodium, potassium, sugar, kidney, heart, liver, pregnancy, and swallowing considerations."
              },
              {
                "id": "hydration-q-electrolytes",
                "title": "When should electrolytes or kidney function be checked?",
                "detail": "Discuss persistent losses, dizziness, low urine, chronic disease, and medicine risks."
              },
              {
                "id": "hydration-q-urgent",
                "title": "Which signs require same-day or emergency assessment?",
                "detail": "Clarify the plan for fainting, confusion, minimal urine, repeated vomiting, severe weakness, or breathing changes."
              }
            ],
            "labs": [
              {
                "id": "hydration-lab-electrolytes",
                "title": "Electrolytes and kidney function to discuss",
                "detail": "Testing may be needed when losses are substantial, symptoms persist, or chronic disease and medicine risks are present."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_06_DIGESTIVE_SUPPORT",
          "editorialSourceIds": [
            "MEDLINEPLUS_DEHYDRATION",
            "MEDLINEPLUS_FLUID_ELECTROLYTE_BALANCE",
            "NIDDK_VIRAL_GASTROENTERITIS_TREATMENT",
            "CDC_FOOD_SAFETY_REHYDRATION"
          ],
          "relatedIds": [
            "gastroenteritis",
            "constipation",
            "meal-tolerance",
            "fiber-support",
            "digestive-medicine-review"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "fluidAmounts",
              "oralRehydrationProducts",
              "electrolyteReplacement",
              "fluidRestrictions",
              "medicineSickDayRules",
              "redFlags",
              "emergencyInstructions"
            ]
          }
        },
        {
          "id": "immunity-sleep-recovery",
          "title": "Sleep and recovery for immunity",
          "subtitle": "Regular sleep supports normal immune regulation, while illness recovery may require rest, fluid planning, symptom monitoring, and temporary routine changes.",
          "body": [
            "Purpose — Protect recovery without presenting sleep as a treatment for infection or immune disease.",
            "Regular sleep supports normal function — Keep a steady sleep opportunity and wake time when possible, while allowing extra recovery during acute illness.",
            "Distinguish sleepiness, fatigue, and weakness — Record whether the main problem is dozing, low energy, reduced strength, breathlessness, pain, fever, or medicine effects.",
            "Acute illness can disrupt sleep — Cough, congestion, pain, fever, breathing symptoms, diarrhea, and repeated urination may require condition-specific treatment rather than sleep advice alone.",
            "Avoid replacing recovery with stimulants — High caffeine intake or repeated decongestant use can affect sleep, heart rate, blood pressure, anxiety, and medicine safety.",
            "Hydration and food tolerance matter — Follow the approved fluid plan and use tolerated food. Heart, kidney, liver, diabetes, pregnancy, and child-specific guidance may differ.",
            "Reduce spread in shared spaces — Improve air flow when possible, use respiratory hygiene, and follow current local guidance while ill.",
            "Return to routine gradually — Rebuild work, school, caregiving, and exercise based on symptom improvement and clinician advice for significant illness.",
            "Seek review when recovery is not following the expected course — Persistent fever, severe fatigue, breathing difficulty, chest symptoms, confusion, dehydration, or worsening after initial improvement needs assessment."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "immunity-recovery-sleep-log",
                "title": "Track sleep and symptoms together",
                "detail": "Record bedtime, waking, naps, fever, cough, breathing, pain, fluids, medicines, and daytime function."
              },
              {
                "id": "immunity-recovery-priorities",
                "title": "Prepare a lower-demand recovery schedule",
                "detail": "Protect time for rest, food, fluids, medicines, and clinical follow-up."
              },
              {
                "id": "immunity-recovery-caffeine",
                "title": "Review caffeine and stimulant products",
                "detail": "Include coffee, tea, energy drinks, decongestants, and pre-workout products."
              },
              {
                "id": "immunity-recovery-return",
                "title": "Prepare a gradual return to activity",
                "detail": "Increase work and exercise only as symptoms, hydration, strength, and breathing allow."
              },
              {
                "id": "immunity-recovery-spread",
                "title": "Prepare a shared-space prevention plan",
                "detail": "Use cleaner air, hand and respiratory hygiene, and separation from higher-risk people when appropriate."
              }
            ],
            "questions": [
              {
                "id": "immunity-recovery-q-course",
                "title": "Ask whether the recovery course is expected",
                "detail": "Ask about persistent fever, severe fatigue, breathing symptoms, worsening after improvement, or repeated infections."
              },
              {
                "id": "immunity-recovery-q-medicine",
                "title": "Ask whether a medicine is disturbing sleep or recovery",
                "detail": "Review decongestants, cough products, steroids, pain medicines, sedatives, and supplements."
              },
              {
                "id": "immunity-recovery-q-return",
                "title": "Ask when it is safe to return to work, school, exercise, or caregiving",
                "detail": "Use condition-specific and local public-health guidance."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
          "editorialSourceIds": [
            "NIAID_IMMUNE_OVERVIEW",
            "CDC_RESPIRATORY_PREVENTION",
            "CDC_FLU_CARE"
          ],
          "relatedIds": [
            "immunity",
            "sleep",
            "fatigue",
            "cold-flu",
            "hydration-support",
            "immunity-activity"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "return-to-activity timing",
              "isolation and work or school return",
              "fever thresholds",
              "fluid plans",
              "medicine selection",
              "pregnancy, child, cardiac, kidney, liver, and immune-suppression adaptations"
            ]
          }
        },
        {
          "id": "immunity-activity",
          "title": "Regular activity without overtraining",
          "subtitle": "Appropriate regular movement supports whole-body health. Acute illness, immune suppression, blood-count changes, and severe symptoms may require temporary reduction or a supervised return.",
          "body": [
            "Purpose — Use movement to support function and health, not as a method to “sweat out” infection or force recovery.",
            "Build regular activity when well — Aerobic, strength, balance, and mobility activities can be adapted to current ability and medical conditions.",
            "Increase gradually — Start below maximum effort and change one factor at a time, such as duration, frequency, or intensity.",
            "Acute illness can change the plan — Fever, chest symptoms, significant breathing difficulty, dehydration, severe fatigue, dizziness, vomiting, or diarrhea are reasons to reduce or stop activity and seek guidance.",
            "Immune suppression needs individualized precautions — Blood counts, infection exposure, central lines, bone risk, neuropathy, anemia, and treatment effects can change safe activities and settings.",
            "Recovery includes rest days — Persistent soreness, declining performance, irritability, poor sleep, elevated symptoms, or repeated illness may signal inadequate recovery.",
            "Use practical infection prevention — Avoid sharing drink bottles or personal items, clean hands and equipment, and reduce close exposure when ill.",
            "Return after illness in stages — Resume light activity first and compare breathing, heart symptoms, dizziness, fatigue, hydration, and next-day recovery.",
            "Seek prompt assessment for warning signs — Chest pain, fainting, severe breathlessness, confusion, blue or gray lips, severe weakness, or rapidly worsening symptoms require urgent care."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "immunity-activity-baseline",
                "title": "Record the current activity baseline",
                "detail": "Note walking, stairs, strength tasks, balance, symptoms, and next-day recovery."
              },
              {
                "id": "immunity-activity-build",
                "title": "Prepare a one-factor-at-a-time activity increase",
                "detail": "Change duration, frequency, or intensity gradually rather than all at once."
              },
              {
                "id": "immunity-activity-illness",
                "title": "Prepare an illness adjustment plan",
                "detail": "Identify symptoms that mean rest, clinician contact, or urgent assessment."
              },
              {
                "id": "immunity-activity-recovery",
                "title": "Track recovery signals",
                "detail": "Record sleep, soreness, fatigue, symptoms, appetite, hydration, and performance."
              },
              {
                "id": "immunity-activity-setting",
                "title": "Review the activity setting for safety",
                "detail": "Consider infection exposure, temperature, air quality, fall risk, and access to help."
              }
            ],
            "questions": [
              {
                "id": "immunity-activity-q-safe",
                "title": "Ask which activities are safe for the condition and treatment",
                "detail": "Ask about blood counts, central lines, bone risk, neuropathy, anemia, heart or lung disease, and immune suppression."
              },
              {
                "id": "immunity-activity-q-return",
                "title": "Ask how to return after infection or treatment",
                "detail": "Clarify stages, warning signs, and when supervision is needed."
              },
              {
                "id": "immunity-activity-q-referral",
                "title": "Ask whether physical therapy or supervised exercise would help",
                "detail": "Ask when weakness, falls, pain, disability, or prolonged deconditioning is present."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
          "editorialSourceIds": [
            "NIAID_IMMUNE_OVERVIEW",
            "CDC_RESPIRATORY_PREVENTION",
            "NCI_INFECTION_NEUTROPENIA"
          ],
          "relatedIds": [
            "immunity",
            "exercise",
            "cold-flu",
            "cancer-treatment",
            "fatigue",
            "immunity-sleep-recovery"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "exercise restrictions during infection",
              "blood-count thresholds",
              "central-line and bone precautions",
              "cardiac and pulmonary return-to-activity rules",
              "pregnancy, child, disability, and cancer-treatment adaptations"
            ]
          }
        },
        {
          "id": "immunity-hygiene",
          "title": "Infection prevention and vaccination planning",
          "subtitle": "Use several practical layers—recommended vaccination, cleaner air, hand and respiratory hygiene, safer food handling, and exposure planning—rather than relying on one product.",
          "body": [
            "Purpose — Reduce infection risk and spread while keeping the plan realistic for home, work, school, travel, and healthcare settings.",
            "Vaccination is a core prevention tool — Recommended vaccines can reduce infection or severe outcomes for specific diseases. The schedule depends on age, pregnancy, conditions, prior doses, and immune-suppressing treatment.",
            "Clean hands at useful times — Wash with soap and water after coughing, sneezing, bathroom use, contact with body fluids, and before preparing or eating food. Hand sanitizer can be an option when hands are not visibly dirty and soap is unavailable.",
            "Use respiratory etiquette — Cover coughs and sneezes, dispose of tissues, clean hands, and avoid close contact when acutely ill.",
            "Improve indoor air — Open windows when safe, use appropriate ventilation or filtration, and move activities outdoors when practical.",
            "Masks can add protection in selected situations — A well-fitting mask or respirator may be useful during high respiratory-virus activity, close exposure, travel, healthcare visits, or around people at higher risk.",
            "Clean strategically — Routine household cleaning is usually enough. Focus additional disinfection on contaminated or frequently touched surfaces when someone is ill or a specific organism requires it.",
            "Use safer food handling — Separate raw and ready-to-eat foods, cook and store food safely, and follow treatment-team food guidance during severe immune suppression.",
            "Plan for illness in the household — Decide how to improve air, separate sleeping or eating spaces when feasible, protect higher-risk people, and access testing or care.",
            "Special immune conditions need tailored advice — Live vaccines, travel vaccines, pet exposure, water, food restrictions, school, work, and household-contact vaccines may need specialist review."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "immunity-prevention-vaccine-record",
                "title": "Prepare a vaccination record",
                "detail": "List known products and dates, then review missing or uncertain records with a clinician or pharmacist."
              },
              {
                "id": "immunity-prevention-air",
                "title": "Review indoor air",
                "detail": "Identify windows, exhaust fans, filtration, outdoor options, and crowded spaces."
              },
              {
                "id": "immunity-prevention-hands",
                "title": "Prepare hand-hygiene supplies where needed",
                "detail": "Keep soap, towels, or suitable sanitizer available at home, work, school, or during travel."
              },
              {
                "id": "immunity-prevention-mask",
                "title": "Prepare an added-protection option",
                "detail": "Keep a well-fitting mask available for healthcare visits, travel, outbreaks, or contact with high-risk people."
              },
              {
                "id": "immunity-prevention-food",
                "title": "Review food-handling steps",
                "detail": "Check separation, cooking, refrigeration, leftovers, water, and treatment-specific restrictions."
              },
              {
                "id": "immunity-prevention-household",
                "title": "Prepare a household illness plan",
                "detail": "Include testing access, cleaner air, supplies, medication lists, high-risk contacts, and when to call for care."
              }
            ],
            "questions": [
              {
                "id": "immunity-prevention-q-vaccines",
                "title": "Ask which vaccines and timing apply",
                "detail": "Review age, pregnancy, immune suppression, prior reactions, travel, and treatment timing."
              },
              {
                "id": "immunity-prevention-q-extra",
                "title": "Ask which extra precautions are appropriate for the risk",
                "detail": "Ask about masks, ventilation, visitors, work, school, travel, food, water, pets, and household contacts."
              },
              {
                "id": "immunity-prevention-q-live",
                "title": "Ask whether live vaccines are safe for the user or close household contacts",
                "detail": "This requires condition- and treatment-specific clinical guidance."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "lifestyle",
          "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
          "editorialSourceIds": [
            "CDC_RESPIRATORY_PREVENTION",
            "CDC_RESPIRATORY_HYGIENE",
            "CDC_VENTILATION",
            "NIAID_PIDD_OVERVIEW"
          ],
          "relatedIds": [
            "immunity",
            "cold-flu",
            "immune-deficiency",
            "cancer-treatment",
            "breathing-allergy-emergency"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "vaccine schedules and contraindications",
              "live vaccines",
              "mask or respirator selection",
              "isolation duration",
              "healthcare infection-control protocols",
              "food and water restrictions",
              "travel and household-contact advice"
            ]
          }
        },
        {
          "id": "exercise-start-small",
          "title": "Start below your maximum",
          "subtitle": "A repeatable starting point is more useful than one exhausting session.",
          "body": [
            "Choose an amount that does not cause severe pain, dizziness, or prolonged exhaustion.",
            "Increase one variable at a time: duration, frequency, or intensity."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "task-1-choose-an-amount-that-does-not-cause-sev",
                "title": "Choose an amount that does not cause severe pain, dizziness, or prolonged exhaustion.",
                "detail": ""
              },
              {
                "id": "task-2-increase-one-variable-at-a-time-duratio",
                "title": "Increase one variable at a time: duration, frequency, or intensity.",
                "detail": ""
              }
            ],
            "questions": [
              {
                "id": "ask-safety",
                "title": "Is this start below your maximum approach safe and realistic for me?",
                "detail": "Ask about changes needed for symptoms, pregnancy, disability, medicines, or chronic conditions."
              }
            ]
          },
          "contentStatus": "placeholder",
          "contentTemplate": "lifestyle",
          "researchBatch": null,
          "editorialSourceIds": [],
          "relatedIds": [
            "exercise",
            "exercise-aerobic",
            "exercise-strength",
            "exercise-sit-less",
            "exercise-recovery",
            "arthritis"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "fullPathwayResearch",
              "numericTargets",
              "contraindications",
              "conditionAdaptations",
              "pregnancyChildOlderAdultGuidance",
              "urgentInstructions"
            ]
          }
        },
        {
          "id": "exercise-aerobic",
          "title": "Build aerobic activity",
          "subtitle": "Aerobic movement raises heart rate and breathing for sustained periods.",
          "body": [
            "Examples include brisk walking, cycling, swimming, dancing, or adapted seated activity.",
            "Work toward weekly goals gradually and choose an intensity that matches health and ability."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "task-1-examples-include-brisk-walking-cycling",
                "title": "Examples include brisk walking, cycling, swimming, dancing, or adapted seated activity.",
                "detail": ""
              },
              {
                "id": "task-2-work-toward-weekly-goals-gradually-and-c",
                "title": "Work toward weekly goals gradually and choose an intensity that matches health and ability.",
                "detail": ""
              }
            ],
            "questions": [
              {
                "id": "ask-safety",
                "title": "Is this build aerobic activity approach safe and realistic for me?",
                "detail": "Ask about changes needed for symptoms, pregnancy, disability, medicines, or chronic conditions."
              }
            ]
          },
          "contentStatus": "placeholder",
          "contentTemplate": "lifestyle",
          "researchBatch": null,
          "editorialSourceIds": [],
          "relatedIds": [
            "exercise",
            "exercise-start-small",
            "exercise-strength",
            "exercise-sit-less",
            "exercise-recovery",
            "arthritis",
            "asthma",
            "heart-disease"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "fullPathwayResearch",
              "numericTargets",
              "contraindications",
              "conditionAdaptations",
              "pregnancyChildOlderAdultGuidance",
              "urgentInstructions"
            ]
          }
        },
        {
          "id": "exercise-strength",
          "title": "Include strength work",
          "subtitle": "Strength training supports muscles, bones, function, and independence.",
          "body": [
            "Train major muscle groups on at least two days per week when appropriate.",
            "Use body weight, bands, machines, or suitable household resistance with safe technique."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "task-1-train-major-muscle-groups-on-at-least-tw",
                "title": "Train major muscle groups on at least two days per week when appropriate.",
                "detail": ""
              },
              {
                "id": "task-2-use-body-weight-bands-machines-or-sui",
                "title": "Use body weight, bands, machines, or suitable household resistance with safe technique.",
                "detail": ""
              }
            ],
            "questions": [
              {
                "id": "ask-safety",
                "title": "Is this include strength work approach safe and realistic for me?",
                "detail": "Ask about changes needed for symptoms, pregnancy, disability, medicines, or chronic conditions."
              }
            ]
          },
          "contentStatus": "placeholder",
          "contentTemplate": "lifestyle",
          "researchBatch": null,
          "editorialSourceIds": [],
          "relatedIds": [
            "exercise",
            "exercise-start-small",
            "exercise-aerobic",
            "exercise-sit-less",
            "exercise-recovery",
            "arthritis"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "fullPathwayResearch",
              "numericTargets",
              "contraindications",
              "conditionAdaptations",
              "pregnancyChildOlderAdultGuidance",
              "urgentInstructions"
            ]
          }
        },
        {
          "id": "exercise-sit-less",
          "title": "Break up long sitting",
          "subtitle": "Short movement breaks can add activity without becoming a full workout.",
          "body": [
            "Stand, stretch, or walk for a few minutes during long seated periods.",
            "Use stairs, household tasks, short walks, or movement during calls when safe."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "task-1-stand-stretch-or-walk-for-a-few-minute",
                "title": "Stand, stretch, or walk for a few minutes during long seated periods.",
                "detail": ""
              },
              {
                "id": "task-2-use-stairs-household-tasks-short-walks",
                "title": "Use stairs, household tasks, short walks, or movement during calls when safe.",
                "detail": ""
              }
            ],
            "questions": [
              {
                "id": "ask-safety",
                "title": "Is this break up long sitting approach safe and realistic for me?",
                "detail": "Ask about changes needed for symptoms, pregnancy, disability, medicines, or chronic conditions."
              }
            ]
          },
          "contentStatus": "placeholder",
          "contentTemplate": "lifestyle",
          "researchBatch": null,
          "editorialSourceIds": [],
          "relatedIds": [
            "exercise",
            "exercise-start-small",
            "exercise-aerobic",
            "exercise-strength",
            "exercise-recovery",
            "arthritis"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "fullPathwayResearch",
              "numericTargets",
              "contraindications",
              "conditionAdaptations",
              "pregnancyChildOlderAdultGuidance",
              "urgentInstructions"
            ]
          }
        },
        {
          "id": "exercise-recovery",
          "title": "Plan recovery and warning signs",
          "subtitle": "Exercise improves health when the body can recover from it.",
          "body": [
            "Balance activity with sleep, hydration, food, and easier days.",
            "Stop and seek medical help for chest pain, fainting, severe breathlessness, sudden weakness, or new neurologic symptoms."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "task-1-balance-activity-with-sleep-hydration",
                "title": "Balance activity with sleep, hydration, food, and easier days.",
                "detail": ""
              },
              {
                "id": "task-2-stop-and-seek-medical-help-for-chest-pai",
                "title": "Stop and seek medical help for chest pain, fainting, severe breathlessness, sudden weakness, or new neurologic symptoms.",
                "detail": ""
              }
            ],
            "questions": [
              {
                "id": "ask-safety",
                "title": "Is this plan recovery and warning signs approach safe and realistic for me?",
                "detail": "Ask about changes needed for symptoms, pregnancy, disability, medicines, or chronic conditions."
              }
            ]
          },
          "contentStatus": "placeholder",
          "contentTemplate": "lifestyle",
          "researchBatch": null,
          "editorialSourceIds": [],
          "relatedIds": [
            "exercise",
            "exercise-start-small",
            "exercise-aerobic",
            "exercise-strength",
            "exercise-sit-less",
            "arthritis",
            "fatigue",
            "anemia",
            "heart-disease",
            "asthma"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "fullPathwayResearch",
              "numericTargets",
              "contraindications",
              "conditionAdaptations",
              "pregnancyChildOlderAdultGuidance",
              "urgentInstructions"
            ]
          }
        }
      ]
    },
    {
      "id": "supplements",
      "title": "Supplements",
      "icon": "💊",
      "subtitle": "Education only. Every supplement needs a clear reason, full interaction review, safe route, and monitoring plan.",
      "items": [
        {
          "id": "iron-supplement",
          "title": "Iron supplement",
          "subtitle": "A supplement to discuss when iron deficiency is confirmed or strongly suspected; product, route, dose, and duration remain locked for clinical review.",
          "body": [
            "What it is — Iron supplements provide iron in oral products such as tablets, capsules, chewables, or liquids. Intravenous iron is a prescription treatment given in a clinical setting and is not interchangeable with an over-the-counter product.",
            "Role in the body — Iron is needed to make hemoglobin, which carries oxygen in red blood cells, and myoglobin, which helps supply oxygen to muscle.",
            "Who may be assessed — Clinicians may assess iron when symptoms, blood loss, pregnancy, diet pattern, gastrointestinal disease, kidney disease, inflammation, surgery, or previous results suggest possible deficiency. Fatigue alone does not establish iron deficiency.",
            "Food sources — Meat, seafood, poultry, fortified cereals and breads, beans, lentils, peas, spinach, nuts, seeds, and some dried fruit can contribute iron. Food support does not replace treatment when clinically significant deficiency is present.",
            "Available forms — Oral products use different iron salts or complexes and contain different amounts of elemental iron. Tablet count, total product weight, and elemental iron are not the same measurement.",
            "Oral versus intravenous iron — Oral iron is commonly used. Intravenous iron may be considered when absorption is poor, oral treatment is not tolerated or ineffective, deficiency is severe, ongoing replacement is needed, or a clinician identifies another reason.",
            "Expected response — Symptoms, hemoglobin, ferritin, and other iron measures may be followed over time. Improvement in one result does not confirm that iron stores are restored or that the underlying cause has been addressed.",
            "Common side effects — Constipation, nausea, stomach pain, diarrhea, vomiting, metallic taste, and dark stools can occur. Side effects should be recorded and discussed rather than managed by changing treatment independently.",
            "Interactions — Calcium, antacids, tea, coffee, thyroid medicine, selected antibiotics, and other products can affect absorption or timing. Exact spacing depends on the specific products and medicines.",
            "Contraindications and cautions — Unnecessary iron may be harmful, including in iron-overload conditions or when anemia has another cause. Pregnancy, childhood, kidney or liver disease, gastrointestinal disease, and repeated transfusions require individualized review.",
            "Overdose and storage — Iron overdose can cause severe poisoning and organ injury, especially in children. Keep every iron-containing product secured in its original closed container and seek urgent poison or emergency guidance after a possible overdose.",
            "Monitoring — A clinician may discuss CBC, ferritin, iron studies, treatment tolerance, adherence, blood-loss evaluation, absorption problems, and the plan for continuing, changing, or stopping treatment.",
            "Dosing requires clinical review — No dose, schedule, route, elemental-iron target, spacing instruction, or treatment duration is displayed in this app."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "iron-lib-task-label",
                "title": "Record the exact iron product and Supplement Facts label",
                "detail": "Include the form, serving size, listed elemental iron, other ingredients, and whether the product is prescribed or purchased."
              },
              {
                "id": "iron-lib-task-list",
                "title": "Prepare a complete medicine and supplement list",
                "detail": "Include thyroid medicine, antibiotics, antacids, calcium, multivitamins, herbal products, and over-the-counter medicines."
              },
              {
                "id": "iron-lib-task-effects",
                "title": "Track stomach effects, bowel pattern, and stool changes",
                "detail": "Record timing, severity, hydration, food intake, and whether symptoms interfere with treatment."
              },
              {
                "id": "iron-lib-task-cause",
                "title": "Review whether the cause of iron deficiency has been addressed",
                "detail": "Ask about blood loss, diet, pregnancy, inflammation, gastrointestinal absorption, kidney disease, or another contributor when relevant."
              },
              {
                "id": "iron-lib-task-storage",
                "title": "Review secure iron storage away from children",
                "detail": "Use the original closed container and follow the product storage instructions."
              }
            ],
            "supplements": [
              {
                "id": "discuss-iron-supplement-v037",
                "title": "Discuss whether an iron supplement and route are appropriate",
                "detail": "Review the diagnosis, cause, severity, current medicines, other supplements, pregnancy, age, kidney or liver conditions, gastrointestinal history, previous response, and risk of iron overload."
              }
            ],
            "questions": [
              {
                "id": "iron-lib-q-reason",
                "title": "What diagnosis or result is this product intended to treat?",
                "detail": "Ask whether the goal is to restore iron stores, treat iron-deficiency anemia, support a pregnancy-related need, or address another defined indication."
              },
              {
                "id": "iron-lib-q-form",
                "title": "Why is this form or route being considered?",
                "detail": "Discuss oral versus intravenous treatment, absorption, tolerability, severity, treatment urgency, access, and previous response."
              },
              {
                "id": "iron-lib-q-label",
                "title": "Which number on the label represents elemental iron?",
                "detail": "Do not compare products using tablet count or total compound weight alone."
              },
              {
                "id": "iron-lib-q-effects",
                "title": "What should I do if constipation, nausea, pain, diarrhea, vomiting, or troublesome stool changes occur?",
                "detail": "Obtain a product-specific plan rather than stopping, doubling, or changing treatment independently."
              },
              {
                "id": "iron-lib-q-interactions",
                "title": "How should this exact product be separated from food, calcium, antacids, thyroid medicine, or antibiotics?",
                "detail": "Timing depends on the full medicine list and the exact product."
              },
              {
                "id": "iron-lib-q-monitor",
                "title": "Which tests and symptoms will show whether treatment is working?",
                "detail": "Ask how CBC, ferritin, other iron measures, side effects, adherence, and the underlying cause will be reviewed."
              }
            ],
            "labs": [
              {
                "id": "iron-lib-lab-cbc",
                "title": "Complete blood count (CBC)",
                "detail": "May be followed when anemia is present or suspected."
              },
              {
                "id": "iron-lib-lab-ferritin",
                "title": "Ferritin",
                "detail": "May help assess iron stores, with interpretation adjusted for inflammation and clinical context."
              },
              {
                "id": "iron-lib-lab-studies",
                "title": "Iron studies",
                "detail": "Transferrin saturation, TIBC, or related measures may be used when appropriate."
              },
              {
                "id": "iron-lib-lab-cause",
                "title": "Evaluation of the cause",
                "detail": "Testing may address blood loss, absorption, inflammation, kidney disease, pregnancy, or another contributor when indicated."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "supplement",
          "researchBatch": "BATCH_08_SUPPLEMENT_LIBRARY",
          "editorialSourceIds": [
            "ODS_IRON_HP",
            "ODS_IRON_CONSUMER",
            "MEDLINEPLUS_IRON_SUPPLEMENTS",
            "FDA_IRON_WARNING",
            "FDA_SUPPLEMENT_QA",
            "FDA_SUPPLEMENT_INTERACTIONS"
          ],
          "relatedIds": [
            "fatigue",
            "iron-deficiency",
            "anemia",
            "iron-rich-diet",
            "constipation",
            "supplement-routes",
            "supplement-side-effects",
            "supplement-interactions",
            "supplement-monitoring",
            "supplement-emergency-safety"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "dosing",
              "elementalIron",
              "route",
              "timing",
              "interactions",
              "pregnancy",
              "childhood",
              "kidneyLiver",
              "ironOverload",
              "overdose",
              "emergencyInstructions"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_01_ENERGY_IRON",
            "BATCH_09_EMERGENCY_SAFETY"
          ],
          "lockedDosing": {
            "status": "clinical-review-required",
            "display": false,
            "reason": "Dose, route, timing, duration, interactions, monitoring, age, pregnancy, and health conditions require clinician or pharmacist review."
          }
        },
        {
          "id": "b12",
          "title": "Vitamin B12",
          "subtitle": "A nutrient and supplement topic to discuss when diet, absorption, medicines, blood results, or nerve symptoms suggest possible deficiency.",
          "body": [
            "What it is — Vitamin B12 is a water-soluble vitamin found naturally in animal foods, added to fortified foods, and available in supplements and prescription products.",
            "Role in the body — Vitamin B12 supports healthy red blood cell formation, DNA synthesis, and the development and function of the nervous system.",
            "Who may be assessed — Assessment may be considered with anemia, fatigue, mouth or tongue changes, numbness, tingling, balance problems, memory or thinking changes, a vegan or low-animal-food diet, older age, pernicious anemia, gastrointestinal surgery, malabsorption, metformin use, or long-term acid-suppressing medicine.",
            "Symptoms are not specific — Fatigue, anemia, or nerve symptoms can have many causes. Normal-looking blood counts do not always exclude a clinically important B12 problem, especially when neurologic symptoms are present.",
            "Food sources — Fish, meat, poultry, eggs, milk, and other dairy foods contain B12. Plant foods do not naturally contain B12, but some breakfast cereals, nutritional yeasts, and other foods are fortified.",
            "Available forms — Supplements may contain cyanocobalamin, methylcobalamin, adenosylcobalamin, or hydroxocobalamin and may be sold as tablets, capsules, liquids, lozenges, or sublingual products. Prescription forms include injections and selected nasal products.",
            "Oral versus injection — Route depends on the cause and severity of deficiency, absorption, neurologic findings, adherence, access, and the clinician plan. Injections may be used when absorption is impaired or deficiency is severe; they are prescription medicines administered under a defined schedule.",
            "Expected response — Clinicians may monitor symptoms, blood count, vitamin B12, and related markers. Blood findings and neurologic symptoms can improve at different rates, and delayed assessment may allow nerve injury to persist.",
            "Side effects — Oral products are often tolerated, but any product can cause stomach symptoms, headache, skin reactions, or other effects. Injections can cause pain or redness at the injection site and, rarely, serious allergic reactions.",
            "Interactions and contributors — Metformin and medicines that reduce stomach acid can lower B12 absorption or levels in some people. The full medicine and supplement list should be reviewed rather than assuming a low result is caused by diet alone.",
            "Cautions — Do not use B12 as a general energy booster when deficiency has not been established. Folic acid can improve some blood findings while B12-related nerve injury continues, so suspected deficiency should be assessed rather than self-treated with one nutrient alone.",
            "Monitoring — A clinician may discuss CBC, serum B12, methylmalonic acid or another confirmatory marker, diet, medicine contributors, neurologic findings, and whether long-term replacement is needed.",
            "Dosing requires clinical review — No dose, injection schedule, route, treatment duration, laboratory threshold, or maintenance plan is displayed in this app."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "b12-lib-task-symptoms",
                "title": "Record blood and nerve-related symptoms",
                "detail": "Track fatigue, breathlessness, mouth soreness, numbness, tingling, balance change, weakness, memory change, and when each symptom began."
              },
              {
                "id": "b12-lib-task-history",
                "title": "Prepare a diet, surgery, and absorption history",
                "detail": "Include vegan or vegetarian eating, fortified foods, stomach or bowel surgery, inflammatory bowel disease, celiac disease, and other absorption concerns."
              },
              {
                "id": "b12-lib-task-medicines",
                "title": "Prepare a list of metformin, acid-suppressing medicines, and all supplements",
                "detail": "Include duration of use, product names, multivitamins, B-complex products, and folic acid."
              },
              {
                "id": "b12-lib-task-label",
                "title": "Record the exact B12 product and form",
                "detail": "Photograph or copy the label, including cyanocobalamin, methylcobalamin, combination ingredients, and route."
              },
              {
                "id": "b12-lib-task-followup",
                "title": "Record follow-up tests and symptom changes",
                "detail": "Do not stop replacement because energy improves before the treatment plan and underlying cause are reviewed."
              }
            ],
            "supplements": [
              {
                "id": "discuss-b12-v037",
                "title": "Discuss whether Vitamin B12 replacement is appropriate",
                "detail": "Review symptoms, diet, blood results, absorption, medicines, pregnancy, age, previous treatment, and whether oral or prescription therapy is being considered."
              }
            ],
            "questions": [
              {
                "id": "b12-lib-q-cause",
                "title": "What is the likely cause of the B12 problem?",
                "detail": "Ask about diet, pernicious anemia, surgery, bowel disease, medicines, and other absorption problems."
              },
              {
                "id": "b12-lib-q-route",
                "title": "Why is oral, sublingual, nasal, or injected B12 being considered?",
                "detail": "Route should reflect the diagnosis, severity, absorption, symptoms, access, and follow-up plan."
              },
              {
                "id": "b12-lib-q-neuro",
                "title": "Do my numbness, tingling, balance, weakness, or thinking changes need prompt assessment?",
                "detail": "Neurologic symptoms should not be managed only with an over-the-counter product."
              },
              {
                "id": "b12-lib-q-medicines",
                "title": "Could metformin or an acid-suppressing medicine be affecting B12 status?",
                "detail": "Do not stop a prescribed medicine independently; ask how status and treatment should be monitored."
              },
              {
                "id": "b12-lib-q-folate",
                "title": "Should folate or another cause of anemia be assessed at the same time?",
                "detail": "Ask how results will be interpreted together and how nerve symptoms will be protected."
              },
              {
                "id": "b12-lib-q-monitor",
                "title": "Which tests and symptoms will be followed, and how will long-term need be decided?",
                "detail": "Monitoring depends on the cause, route, response, recurrence risk, and neurologic findings."
              }
            ],
            "labs": [
              {
                "id": "b12-lib-lab-cbc",
                "title": "Complete blood count (CBC)",
                "detail": "May show anemia or enlarged red blood cells, but a normal CBC does not exclude every B12-related problem."
              },
              {
                "id": "b12-lib-lab-b12",
                "title": "Serum or plasma Vitamin B12",
                "detail": "A commonly used first test whose interpretation depends on the result and clinical context."
              },
              {
                "id": "b12-lib-lab-mma",
                "title": "Methylmalonic acid or another confirmatory marker",
                "detail": "May be discussed when the B12 result is borderline or symptoms and results do not match."
              },
              {
                "id": "b12-lib-lab-cause",
                "title": "Tests addressing the cause",
                "detail": "A clinician may assess pernicious anemia, folate, thyroid disease, absorption, kidney function, or another contributor when indicated."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "supplement",
          "researchBatch": "BATCH_08_SUPPLEMENT_LIBRARY",
          "editorialSourceIds": [
            "ODS_B12_HP",
            "ODS_B12_CONSUMER",
            "MEDLINEPLUS_B12",
            "MEDLINEPLUS_CYANOCOBALAMIN_INJECTION",
            "ODS_FOLATE_HP",
            "FDA_SUPPLEMENT_QA",
            "FDA_SUPPLEMENT_INTERACTIONS"
          ],
          "relatedIds": [
            "fatigue",
            "anemia",
            "metformin",
            "iron-deficiency",
            "supplement-routes",
            "supplement-side-effects",
            "supplement-interactions",
            "supplement-monitoring",
            "supplement-emergency-safety"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "diagnosisThresholds",
              "dosing",
              "route",
              "injectionSchedule",
              "treatmentDuration",
              "neurologicUrgency",
              "folateMasking",
              "interactions",
              "pregnancy",
              "childhood",
              "kidneyLiver",
              "allergy",
              "emergencyInstructions"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_09_EMERGENCY_SAFETY"
          ],
          "lockedDosing": {
            "status": "clinical-review-required",
            "display": false,
            "reason": "Dose, route, timing, duration, interactions, monitoring, age, pregnancy, and health conditions require clinician or pharmacist review."
          }
        },
        {
          "id": "vitamin-d",
          "title": "Vitamin D",
          "subtitle": "A fat-soluble vitamin that supports calcium balance and bone health; testing, product choice, and dosing require context.",
          "body": [
            "What it is — Vitamin D is a fat-soluble vitamin obtained from limited foods, fortified foods, supplements, and vitamin D made in the skin after ultraviolet exposure.",
            "Role in the body — Vitamin D helps the intestine absorb calcium and supports bone mineralization, muscle and nerve function, and other regulated body processes.",
            "Who may be assessed — Assessment may be considered with bone disease, repeated fractures, muscle weakness, limited sun exposure, malabsorption, bariatric surgery, kidney or liver disease, older age, obesity, selected medicines, or other clinical risk factors. Routine testing is not necessary for every person.",
            "Food sources — Fatty fish and fish liver oils are important natural sources. Egg yolks, liver, cheese, UV-exposed mushrooms, fortified milk or plant drinks, and fortified cereals can contribute.",
            "Available forms — Supplements commonly contain vitamin D2 or D3 in tablets, capsules, gummies, or liquids. Prescription active vitamin D medicines are different products used for selected conditions and should not be substituted for ordinary supplements.",
            "Oral versus injection — Most consumer vitamin D supplements are oral. Injected or active prescription vitamin D products are not routine self-care supplements and require a clinician-defined indication, product, route, and monitoring plan.",
            "Expected response — Serum 25-hydroxyvitamin D, written 25(OH)D, is the main blood marker used to assess vitamin D status. The result should be interpreted with the reason for testing, calcium balance, kidney function, and the full clinical picture.",
            "Side effects and excess — Vitamin D toxicity is usually caused by excessive supplement intake rather than ordinary sun exposure. Excess can raise calcium and may cause nausea, vomiting, weakness, confusion, poor appetite, constipation, thirst, frequent urination, dehydration, kidney stones, abnormal heart rhythm, or kidney injury.",
            "Interactions — Orlistat, corticosteroids, thiazide diuretics, selected statins, calcium products, and other medicines can affect vitamin D status or safety. Interaction decisions are medicine- and product-specific.",
            "Contraindications and cautions — Kidney disease, high calcium, hyperparathyroidism, granulomatous disease, pregnancy, childhood, and use of active vitamin D medicines require individualized review.",
            "Claims to avoid — Vitamin D should not be presented as a treatment for fatigue, infection prevention, weight loss, diabetes, mood symptoms, or another condition without a specific clinical indication and evidence-based plan.",
            "Monitoring — Depending on the situation, a clinician may discuss 25(OH)D, calcium, kidney function, phosphorus, parathyroid hormone, symptoms, medicine interactions, and when repeat testing is useful.",
            "Dosing requires clinical review — No dose, loading schedule, target level, injection plan, duration, or repeat-testing interval is displayed in this app."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "vitd-lib-task-total",
                "title": "Record every source of Vitamin D and calcium",
                "detail": "Include multivitamins, separate products, gummies, drops, fortified drinks, prescriptions, and combination products."
              },
              {
                "id": "vitd-lib-task-risk",
                "title": "Prepare relevant bone, kidney, absorption, and medicine history",
                "detail": "Include fractures, osteoporosis, bariatric or bowel surgery, kidney or liver disease, stones, high calcium, and long-term steroid use."
              },
              {
                "id": "vitd-lib-task-label",
                "title": "Record the exact product, form, and units on the label",
                "detail": "Do not combine IU and microgram amounts or compare products without checking the label carefully."
              },
              {
                "id": "vitd-lib-task-effects",
                "title": "Track possible excess or high-calcium symptoms",
                "detail": "Record nausea, vomiting, weakness, confusion, constipation, thirst, frequent urination, dehydration, or stone symptoms and seek prompt review when concerning."
              },
              {
                "id": "vitd-lib-task-followup",
                "title": "Record the reason for testing and the follow-up plan",
                "detail": "A result should be linked to the clinical question, current intake, calcium status, and medicine list."
              }
            ],
            "supplements": [
              {
                "id": "discuss-vitamin-d-v037",
                "title": "Discuss whether Vitamin D supplementation is appropriate",
                "detail": "Review the reason for use, food and sun exposure, current products, medicines, calcium intake, pregnancy, age, kidney or liver conditions, absorption, and previous results."
              }
            ],
            "questions": [
              {
                "id": "vitd-lib-q-reason",
                "title": "What is the specific reason for testing or supplementation?",
                "detail": "Ask whether the goal relates to deficiency, bone health, malabsorption, kidney disease, a medicine effect, or another defined indication."
              },
              {
                "id": "vitd-lib-q-test",
                "title": "Which Vitamin D test is appropriate and how will it be interpreted?",
                "detail": "25(OH)D is commonly used, but thresholds and targets depend on the clinical setting."
              },
              {
                "id": "vitd-lib-q-product",
                "title": "Is this D2, D3, or an active prescription Vitamin D medicine?",
                "detail": "These products are not automatically interchangeable."
              },
              {
                "id": "vitd-lib-q-interactions",
                "title": "Could calcium, a thiazide, steroid, statin, orlistat, or another medicine affect safety or response?",
                "detail": "Ask a clinician or pharmacist to review the exact products."
              },
              {
                "id": "vitd-lib-q-monitor",
                "title": "Will calcium or kidney function also need monitoring?",
                "detail": "The monitoring plan depends on dose, condition, medicines, route, and risk factors."
              },
              {
                "id": "vitd-lib-q-stop",
                "title": "How will we decide whether to continue, change, or stop the product?",
                "detail": "Avoid indefinite use without a defined reason and follow-up plan."
              }
            ],
            "labs": [
              {
                "id": "vitd-lib-lab-25ohd",
                "title": "25-hydroxyvitamin D, or 25(OH)D",
                "detail": "The main blood marker used to assess vitamin D status."
              },
              {
                "id": "vitd-lib-lab-calcium",
                "title": "Calcium",
                "detail": "May be checked when deficiency, high intake, toxicity, kidney disease, or interacting medicines are a concern."
              },
              {
                "id": "vitd-lib-lab-kidney",
                "title": "Kidney function",
                "detail": "May affect product choice, activation of vitamin D, calcium balance, and monitoring."
              },
              {
                "id": "vitd-lib-lab-context",
                "title": "Phosphorus, parathyroid hormone, or other contextual tests",
                "detail": "May be discussed for bone, kidney, endocrine, or complex deficiency questions."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "supplement",
          "researchBatch": "BATCH_08_SUPPLEMENT_LIBRARY",
          "editorialSourceIds": [
            "ODS_VITAMIN_D_HP",
            "ODS_VITAMIN_D_CONSUMER",
            "MEDLINEPLUS_VITAMIN_D_DEFICIENCY",
            "MEDLINEPLUS_ERGOCALCIFEROL",
            "FDA_SUPPLEMENT_QA",
            "FDA_SUPPLEMENT_INTERACTIONS"
          ],
          "relatedIds": [
            "supplement-routes",
            "supplement-side-effects",
            "supplement-interactions",
            "supplement-monitoring",
            "statin",
            "bp-meds",
            "supplement-emergency-safety"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "testingIndications",
              "testThresholds",
              "dosing",
              "route",
              "activeVitaminD",
              "toxicity",
              "interactions",
              "kidneyDisease",
              "highCalcium",
              "pregnancy",
              "childhood",
              "emergencyInstructions"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_09_EMERGENCY_SAFETY"
          ],
          "lockedDosing": {
            "status": "clinical-review-required",
            "display": false,
            "reason": "Dose, route, timing, duration, interactions, monitoring, age, pregnancy, and health conditions require clinician or pharmacist review."
          }
        },
        {
          "id": "supplement-routes",
          "title": "Oral versus injection",
          "subtitle": "The route is part of the treatment decision; swallowed supplements, prescription injections, and infusions are not interchangeable.",
          "body": [
            "What the terms mean — Oral products are swallowed as tablets, capsules, gummies, powders, or liquids. Sublingual products dissolve under the tongue. Injections and infusions are prescription medicines given through the skin, muscle, or vein.",
            "Why the distinction matters — FDA defines dietary supplements as products intended for ingestion. An injected nutrient is generally being used as a medication or clinical treatment rather than as an ordinary dietary supplement.",
            "Route selection — Clinicians consider the confirmed diagnosis, severity, symptoms, absorption, treatment urgency, previous response, side effects, adherence, access, pregnancy, age, kidney or liver disease, and patient preference.",
            "Oral advantages and limits — Oral products can be convenient and avoid procedure-related risks. They still require correct product selection, consistent use, safe timing, and adequate absorption.",
            "Injection or infusion advantages and limits — A clinical route can bypass gastrointestinal absorption and may be chosen for severe deficiency or poor absorption. It also adds injection-site, infusion, allergy, dosing-error, access, and monitoring risks.",
            "Iron example — Oral iron is common, while intravenous iron may be considered when oral treatment is not tolerated, absorbed, or effective, when deficiency is severe, or for another clinician-defined reason.",
            "Vitamin B12 example — Oral B12 can be used in many settings, while injected B12 may be selected for pernicious anemia, major malabsorption, severe deficiency, neurologic findings, or another specific plan.",
            "Vitamin D example — Most consumer products are oral. Injected or active prescription vitamin D products are not routine substitutes for oral supplements and require specialist selection and monitoring.",
            "Products are not interchangeable — Concentration, elemental amount, formulation, route, schedule, and monitoring differ. Never convert an oral label into an injection amount or substitute one route for another independently.",
            "Follow-up still matters — Bypassing the gut does not remove the need to confirm the diagnosis, monitor response, watch for reactions, and decide how long treatment is needed.",
            "Dosing and administration require clinical review — The app does not provide conversion, injection technique, infusion rate, route selection, schedule, or home-administration instructions."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "route-task-reason",
                "title": "Record the stated reason for the proposed route",
                "detail": "Write whether the concern is absorption, severity, side effects, treatment response, adherence, access, or another factor."
              },
              {
                "id": "route-task-history",
                "title": "Prepare a history of previous products and reactions",
                "detail": "Include oral tolerance, constipation, nausea, allergy, injection reactions, missed doses, and previous laboratory response."
              },
              {
                "id": "route-task-access",
                "title": "Review access, transport, storage, and follow-up needs",
                "detail": "A route may require clinic visits, trained administration, refrigeration, observation, or repeat laboratory testing."
              },
              {
                "id": "route-task-plan",
                "title": "Review who administers the product and who monitors it",
                "detail": "Do not use an injectable or infusion product without a clear prescriber, administration, reaction, and follow-up plan."
              }
            ],
            "questions": [
              {
                "id": "route-q-why",
                "title": "Why is this route preferred for my diagnosis and current results?",
                "detail": "Ask what problem the route is intended to solve."
              },
              {
                "id": "route-q-oral",
                "title": "Is an oral option reasonable, and what would make it inadequate?",
                "detail": "Discuss absorption, severity, adherence, side effects, evidence, and monitoring."
              },
              {
                "id": "route-q-reaction",
                "title": "What reactions should be watched for during and after administration?",
                "detail": "Obtain product-specific guidance and emergency instructions."
              },
              {
                "id": "route-q-duration",
                "title": "Is this a short course, long-term replacement, or a bridge to another route?",
                "detail": "The duration depends on the cause and recurrence risk."
              },
              {
                "id": "route-q-monitor",
                "title": "Which symptoms and tests will determine whether the route is working?",
                "detail": "Ask how response, safety, and route changes will be decided."
              }
            ],
            "labs": [
              {
                "id": "route-lab-baseline",
                "title": "Baseline tests linked to the deficiency",
                "detail": "Confirm the diagnosis and severity before selecting a route when clinically appropriate."
              },
              {
                "id": "route-lab-response",
                "title": "Response monitoring",
                "detail": "The relevant blood count, nutrient marker, calcium, kidney function, or other test depends on the product."
              },
              {
                "id": "route-lab-cause",
                "title": "Evaluation of absorption or the underlying cause",
                "detail": "Route choice should not replace investigation of persistent blood loss, malabsorption, kidney disease, or another cause when indicated."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "supplement-safety",
          "researchBatch": "BATCH_08_SUPPLEMENT_LIBRARY",
          "editorialSourceIds": [
            "FDA_SUPPLEMENT_QA",
            "FDA_SUPPLEMENT_INTERACTIONS",
            "ODS_IRON_HP",
            "ODS_B12_HP",
            "MEDLINEPLUS_CYANOCOBALAMIN_INJECTION",
            "ODS_VITAMIN_D_HP"
          ],
          "relatedIds": [
            "iron-supplement",
            "b12",
            "vitamin-d",
            "supplement-side-effects",
            "supplement-interactions",
            "supplement-monitoring",
            "supplement-emergency-safety"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "routeSelection",
              "oralToInjectionConversion",
              "dosing",
              "administration",
              "injectionTechnique",
              "infusionRate",
              "infusionReactions",
              "anaphylaxis",
              "pregnancy",
              "childhood",
              "kidneyLiver",
              "emergencyInstructions"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_01_ENERGY_IRON",
            "BATCH_09_EMERGENCY_SAFETY"
          ],
          "lockedDosing": {
            "status": "clinical-review-required",
            "display": false,
            "reason": "Dose, route, timing, duration, interactions, monitoring, age, pregnancy, and health conditions require clinician or pharmacist review."
          }
        },
        {
          "id": "supplement-side-effects",
          "title": "Supplement side effects",
          "subtitle": "Side effects depend on the ingredient, amount, route, other products, and the person taking it.",
          "body": [
            "Natural does not mean risk-free — Vitamins and minerals have biological effects. A product can cause harm when the amount is excessive, ingredients overlap, a medicine interacts, or a health condition changes how the body handles it.",
            "Common patterns — Stomach upset, nausea, constipation, diarrhea, headache, taste change, flushing, sleep change, skin symptoms, or injection-site pain can occur with selected products.",
            "Dose and route matter — A side effect after an oral product may not predict the same response to a different form, and an injection or infusion introduces additional procedure and allergy risks.",
            "Overlapping products — Multivitamins, single-nutrient products, fortified foods, antacids, laxatives, energy products, and combination supplements may contain the same ingredient under different names.",
            "Expected does not mean ignore — A known effect such as constipation with iron should still be tracked when severe, persistent, worsening, or interfering with eating, hydration, sleep, or treatment.",
            "Signs of possible excess — Repeated vomiting, severe weakness, confusion, extreme thirst, frequent urination, dehydration, severe abdominal pain, abnormal heartbeat, or new neurologic symptoms require prompt assessment.",
            "Allergy and severe reactions — Trouble breathing, swelling of the face or throat, widespread hives, fainting, severe dizziness, or a rapid reaction after an injection or infusion requires emergency help.",
            "Overdose and child ingestion — Possible overdose, an unknown amount, or any unintended iron ingestion by a child requires immediate poison or emergency guidance. Do not wait for symptoms.",
            "Product quality and labeling — Record the brand, lot number, ingredients, serving size, route, and where the product was obtained. Products marketed as natural or online are not automatically verified as safe or effective before sale.",
            "Do not self-correct with another supplement — Adding a second product to manage the first product’s side effect can create new interactions or duplicate ingredients.",
            "Reporting and review — Contact a clinician or pharmacist for concerning effects and retain the packaging. Adverse events may also be reportable to the relevant medicine or supplement regulator.",
            "Emergency wording requires local review — Exact poison-center, emergency-service, and adverse-event reporting instructions must be localized and clinically approved."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "sidefx-task-record",
                "title": "Record the product, amount, route, and symptom timing",
                "detail": "Include when the product was taken or administered, food, medicines, and how long the effect lasted."
              },
              {
                "id": "sidefx-task-duplicates",
                "title": "Compare every label for duplicate ingredients",
                "detail": "Check multivitamins, combination products, fortified foods, antacids, laxatives, gummies, and drinks."
              },
              {
                "id": "sidefx-task-package",
                "title": "Prepare the packaging and lot information",
                "detail": "Bring the original container or clear photographs to a clinician, pharmacist, poison service, or emergency department."
              },
              {
                "id": "sidefx-task-review",
                "title": "Review persistent or worsening effects before changing treatment",
                "detail": "Do not stop a prescribed product, double a missed amount, or add another remedy without product-specific guidance."
              },
              {
                "id": "sidefx-task-urgent",
                "title": "Review urgent-help triggers for severe reaction or possible overdose",
                "detail": "Use locally approved emergency or poison guidance for breathing difficulty, swelling, fainting, confusion, severe vomiting, seizure, or unintended child ingestion."
              }
            ],
            "questions": [
              {
                "id": "sidefx-q-expected",
                "title": "Is this an expected effect, a dose problem, an interaction, or a sign to stop?",
                "detail": "The answer depends on the exact product and the severity of symptoms."
              },
              {
                "id": "sidefx-q-form",
                "title": "Would a different form or route change tolerability without reducing effectiveness?",
                "detail": "Product changes should preserve the treatment goal and monitoring plan."
              },
              {
                "id": "sidefx-q-overlap",
                "title": "Am I receiving this ingredient from more than one source?",
                "detail": "Ask a pharmacist to total combination products and fortified sources when relevant."
              },
              {
                "id": "sidefx-q-report",
                "title": "Should this reaction be documented or reported?",
                "detail": "Ask what information is needed and where local adverse-event reporting applies."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "supplement-safety",
          "researchBatch": "BATCH_08_SUPPLEMENT_LIBRARY",
          "editorialSourceIds": [
            "FDA_SUPPLEMENT_QA",
            "FDA_SUPPLEMENT_SAFETY",
            "FDA_SUPPLEMENT_INTERACTIONS",
            "ODS_IRON_HP",
            "ODS_VITAMIN_D_HP",
            "MEDLINEPLUS_CYANOCOBALAMIN_INJECTION",
            "MEDLINEPLUS_ERGOCALCIFEROL"
          ],
          "relatedIds": [
            "iron-supplement",
            "b12",
            "vitamin-d",
            "supplement-routes",
            "supplement-interactions",
            "supplement-monitoring",
            "supplement-emergency-safety"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "productSpecificSideEffects",
              "doseAdjustment",
              "routeChange",
              "allergy",
              "overdose",
              "childIngestion",
              "pregnancy",
              "kidneyLiver",
              "adverseEventReporting",
              "poisonGuidance",
              "emergencyInstructions"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_01_ENERGY_IRON",
            "BATCH_09_EMERGENCY_SAFETY"
          ],
          "lockedDosing": {
            "status": "clinical-review-required",
            "display": false,
            "reason": "Dose, route, timing, duration, interactions, monitoring, age, pregnancy, and health conditions require clinician or pharmacist review."
          }
        },
        {
          "id": "supplement-interactions",
          "title": "Supplement interactions",
          "subtitle": "A supplement can interact with medicines, other supplements, food, laboratory tests, surgery, and health conditions.",
          "body": [
            "Why interactions matter — A supplement can reduce a medicine’s effect, increase side effects, alter absorption, change bleeding or heart-rhythm risk, or affect a laboratory result.",
            "The complete list matters — Prescription medicines, over-the-counter products, vitamins, minerals, herbal products, antacids, laxatives, protein or energy products, fortified foods, nicotine, alcohol, and other substances should be reviewed together.",
            "Duplicate ingredients — Combination products may repeat iron, vitamin D, calcium, magnesium, folic acid, B vitamins, or other ingredients. Different names and units can hide the total amount.",
            "Iron examples — Calcium, antacids, tea, coffee, thyroid medicine, and selected antibiotics can affect iron absorption or timing. Exact separation rules are product-specific.",
            "Vitamin B12 examples — Metformin and medicines that reduce stomach acid can lower B12 absorption or status in some people. Do not stop these medicines independently; discuss monitoring.",
            "Vitamin D examples — Orlistat can reduce absorption, corticosteroids can affect vitamin D and calcium metabolism, thiazide diuretics can increase high-calcium risk, and selected statins may require review.",
            "Food and timing — Taking a product with food may improve tolerability or change absorption. Do not apply a general “empty stomach” or spacing rule to every supplement.",
            "Health-condition interactions — Kidney disease, liver disease, pregnancy, childhood, high calcium, iron overload, malabsorption, bleeding disorders, and planned procedures can change safety.",
            "Surgery and procedures — Some supplements can affect bleeding, blood pressure, sedation, or other perioperative risks. The surgical team needs the full list and gives the stop or continue plan.",
            "Laboratory interference — Supplements can affect test results directly or by changing the body marker being measured. Record the product and timing before testing.",
            "Use one source of truth — Keep an updated medicine-and-supplement record and review it with a pharmacist or clinician whenever a product, dose, route, or health condition changes.",
            "Interaction instructions require clinical review — The app does not provide medicine-specific spacing, start, stop, surgery, pregnancy, or laboratory instructions."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "interaction-task-list",
                "title": "Prepare one complete medicine and supplement record",
                "detail": "Include exact names, forms, routes, label amounts, frequency in the clinical record, and the reason for each product."
              },
              {
                "id": "interaction-task-labels",
                "title": "Compare labels for duplicate ingredients and units",
                "detail": "Check multivitamins, gummies, fortified drinks, antacids, laxatives, and combination products."
              },
              {
                "id": "interaction-task-pharmacist",
                "title": "Review the full list with a pharmacist or clinician",
                "detail": "Repeat the review after any medicine, supplement, route, pregnancy, kidney, liver, or surgery change."
              },
              {
                "id": "interaction-task-timing",
                "title": "Record the actual timing of products, food, and symptoms",
                "detail": "Do not invent spacing rules; bring the record to the product-specific review."
              },
              {
                "id": "interaction-task-procedure",
                "title": "Prepare the full supplement list for procedures and laboratory tests",
                "detail": "Ask for explicit local instructions about what to continue, pause, or document."
              }
            ],
            "questions": [
              {
                "id": "interaction-q-exact",
                "title": "Does this exact product interact with any of my medicines or conditions?",
                "detail": "Brand, formulation, route, other ingredients, and total intake can matter."
              },
              {
                "id": "interaction-q-spacing",
                "title": "Is specific spacing from food, calcium, antacids, thyroid medicine, or antibiotics required?",
                "detail": "Obtain a written product-specific instruction when timing is important."
              },
              {
                "id": "interaction-q-duplicates",
                "title": "Am I receiving the same ingredient from multiple products?",
                "detail": "Ask how the total should be calculated and which product is necessary."
              },
              {
                "id": "interaction-q-surgery",
                "title": "What should I do before surgery, a procedure, or a laboratory test?",
                "detail": "Only the treating team should provide the stop, continue, or timing plan."
              },
              {
                "id": "interaction-q-change",
                "title": "Which symptoms or results should prompt an interaction review?",
                "detail": "Ask about bleeding, palpitations, confusion, severe stomach effects, treatment failure, or unexpected laboratory changes."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "supplement-safety",
          "researchBatch": "BATCH_08_SUPPLEMENT_LIBRARY",
          "editorialSourceIds": [
            "FDA_SUPPLEMENT_QA",
            "FDA_SUPPLEMENT_INTERACTIONS",
            "FDA_SUPPLEMENT_SAFETY",
            "ODS_IRON_HP",
            "ODS_B12_HP",
            "ODS_VITAMIN_D_HP"
          ],
          "relatedIds": [
            "iron-supplement",
            "b12",
            "vitamin-d",
            "supplement-routes",
            "supplement-side-effects",
            "supplement-monitoring",
            "metformin",
            "statin",
            "bp-meds",
            "supplement-emergency-safety"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "medicineSpecificInteractions",
              "spacing",
              "doseAdjustment",
              "surgeryInstructions",
              "laboratoryInterference",
              "pregnancy",
              "childhood",
              "kidneyLiver",
              "bleedingRisk",
              "emergencyInstructions"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_01_ENERGY_IRON",
            "BATCH_09_EMERGENCY_SAFETY"
          ],
          "lockedDosing": {
            "status": "clinical-review-required",
            "display": false,
            "reason": "Dose, route, timing, duration, interactions, monitoring, age, pregnancy, and health conditions require clinician or pharmacist review."
          }
        },
        {
          "id": "supplement-monitoring",
          "title": "Supplement monitoring",
          "subtitle": "A safe plan defines the reason, baseline, response, side effects, follow-up tests, and decision to continue, change, or stop.",
          "body": [
            "Start with a defined purpose — Monitoring is meaningful only when the supplement has a clear indication, such as confirmed deficiency, a life-stage need, malabsorption, a medicine effect, or another clinician-defined reason.",
            "Record the baseline — Symptoms, diet, medicines, supplement labels, dose in the clinical record, route, relevant examination findings, and laboratory results provide the comparison point.",
            "Symptoms are only one part — Feeling better or worse does not prove that a nutrient level is corrected, excessive, or unrelated. Objective results and the underlying cause also matter.",
            "Iron monitoring — A clinician may use CBC, ferritin, iron studies, treatment tolerance, adherence, and investigation of blood loss or absorption. Hemoglobin improvement does not automatically mean iron stores are fully restored.",
            "Vitamin B12 monitoring — CBC, serum B12, methylmalonic acid or another marker, neurologic symptoms, medicine contributors, and the cause of deficiency may be reviewed. Nerve symptoms need direct clinical follow-up.",
            "Vitamin D monitoring — 25(OH)D is the main status marker. Calcium, kidney function, phosphorus, parathyroid hormone, symptoms, and interacting medicines may be relevant in selected cases.",
            "Route affects monitoring — Oral products require review of adherence, timing, absorption, and stomach effects. Injections or infusions add administration, reaction, access, and procedure-specific monitoring.",
            "Watch for excess and interactions — New constipation, vomiting, weakness, confusion, thirst, frequent urination, rash, swelling, palpitations, or a treatment that stops working should prompt review.",
            "The cause determines duration — A temporary dietary gap, ongoing blood loss, pernicious anemia, bowel surgery, chronic medicine effect, pregnancy, or kidney disease can lead to different long-term plans.",
            "Avoid automatic repeat testing — The useful interval depends on the nutrient, severity, route, treatment plan, symptoms, and previous results. More testing is not always better.",
            "Close the loop — Every plan should state who reviews the result, what counts as response or harm, and how the continue, change, route, or stop decision will be made.",
            "Thresholds and frequency require clinical review — The app does not provide target levels, retesting intervals, maintenance doses, or treatment-stop rules."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "monitor-task-goal",
                "title": "Record the reason and goal for the supplement",
                "detail": "Use a specific indication and the result or symptom that will be followed."
              },
              {
                "id": "monitor-task-baseline",
                "title": "Record baseline symptoms, labels, medicines, route, and results",
                "detail": "Keep the information in one place before treatment changes."
              },
              {
                "id": "monitor-task-calendar",
                "title": "Record follow-up tests and appointments",
                "detail": "Include who ordered the test, who will review it, and how results will be communicated."
              },
              {
                "id": "monitor-task-effects",
                "title": "Track response, side effects, missed use, and product changes",
                "detail": "Record changes without interpreting them as proof of deficiency or cure."
              },
              {
                "id": "monitor-task-decision",
                "title": "Prepare the continue, change, route, or stop question",
                "detail": "Do not let a supplement continue indefinitely without a defined review point."
              }
            ],
            "questions": [
              {
                "id": "monitor-q-baseline",
                "title": "What baseline result or finding supports this supplement?",
                "detail": "Ask how certain the diagnosis is and whether another cause needs assessment."
              },
              {
                "id": "monitor-q-response",
                "title": "What counts as an expected response, and what would count as treatment failure?",
                "detail": "Include symptoms, laboratory results, adherence, absorption, and the route."
              },
              {
                "id": "monitor-q-harm",
                "title": "Which side effects or results indicate possible excess or an interaction?",
                "detail": "Obtain product-specific instructions for prompt and emergency review."
              },
              {
                "id": "monitor-q-frequency",
                "title": "When should follow-up occur and who will review it?",
                "detail": "Frequency should match the nutrient, severity, route, and treatment plan."
              },
              {
                "id": "monitor-q-duration",
                "title": "How will we decide whether this is temporary or long-term?",
                "detail": "The answer depends on whether the cause is reversible, ongoing, or recurrent."
              }
            ],
            "labs": [
              {
                "id": "monitor-lab-iron",
                "title": "Iron pathway monitoring",
                "detail": "CBC, ferritin, iron studies, and evaluation of the underlying cause may be discussed."
              },
              {
                "id": "monitor-lab-b12",
                "title": "Vitamin B12 pathway monitoring",
                "detail": "CBC, serum B12, methylmalonic acid or another marker, and neurologic review may be discussed."
              },
              {
                "id": "monitor-lab-vitd",
                "title": "Vitamin D pathway monitoring",
                "detail": "25(OH)D, calcium, kidney function, and contextual bone or endocrine tests may be discussed."
              },
              {
                "id": "monitor-lab-product",
                "title": "Product- and condition-specific safety monitoring",
                "detail": "The route, medicines, pregnancy, kidney or liver conditions, and adverse effects determine what else may be needed."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "supplement-safety",
          "researchBatch": "BATCH_08_SUPPLEMENT_LIBRARY",
          "editorialSourceIds": [
            "ODS_IRON_HP",
            "ODS_B12_HP",
            "ODS_VITAMIN_D_HP",
            "FDA_SUPPLEMENT_QA",
            "FDA_SUPPLEMENT_INTERACTIONS",
            "MEDLINEPLUS_CYANOCOBALAMIN_INJECTION",
            "MEDLINEPLUS_ERGOCALCIFEROL"
          ],
          "relatedIds": [
            "iron-supplement",
            "b12",
            "vitamin-d",
            "supplement-routes",
            "supplement-side-effects",
            "supplement-interactions",
            "supplement-emergency-safety"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "testSelection",
              "diagnosisThresholds",
              "targetLevels",
              "monitoringFrequency",
              "responseThresholds",
              "toxicityThresholds",
              "continueChangeStop",
              "route",
              "pregnancy",
              "childhood",
              "kidneyLiver",
              "emergencyInstructions"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_01_ENERGY_IRON",
            "BATCH_09_EMERGENCY_SAFETY"
          ],
          "lockedDosing": {
            "status": "clinical-review-required",
            "display": false,
            "reason": "Dose, route, timing, duration, interactions, monitoring, age, pregnancy, and health conditions require clinician or pharmacist review."
          }
        },
        {
          "id": "immunity-supplement-caution",
          "title": "Immune supplement caution",
          "subtitle": "Supplements may help correct inadequate intake or a diagnosed deficiency, but they do not create unlimited immunity and can cause interactions, toxicity, or treatment problems.",
          "body": [
            "What it is — “Immune support” is a marketing category, not one medical treatment. Products may contain vitamins, minerals, herbs, probiotics, or several combined ingredients.",
            "Adequate nutrients are necessary — Clinical deficiencies of some nutrients can impair normal immune function, but taking more after needs are met does not guarantee fewer infections.",
            "Evidence differs by ingredient and condition — A product studied for one population, dose, infection, or outcome should not be generalized to everyone.",
            "Check the entire label — Record serving size, amount per serving, directions, proprietary blends, allergens, warnings, and all active ingredients.",
            "Avoid ingredient stacking — Multivitamins, cold products, powders, drinks, and single-nutrient products can duplicate vitamin C, vitamin D, zinc, iron, vitamin A, or other ingredients.",
            "Interactions can be serious — Supplements can change medicine effectiveness, bleeding risk, sedation, blood pressure, glucose, transplant treatment, cancer treatment, and laboratory results.",
            "High amounts can cause harm — “Natural” does not mean harmless. Kidney stones, liver injury, nerve problems, bleeding, electrolyte changes, and other toxicity can occur with selected products or doses.",
            "Pregnancy, childhood, kidney disease, and liver disease require extra caution — Product safety and appropriate amounts may differ substantially.",
            "Injections and infusions are not ordinary dietary supplements — Prescription routes require clinical indication, product selection, administration, and monitoring.",
            "Do not replace established care — Supplements should not delay vaccination, testing, prescribed treatment, or urgent assessment for infection or immune disease.",
            "Stop-and-restart decisions are product-specific — Report suspected serious reactions and obtain clinician, pharmacist, poison-service, or emergency guidance as appropriate.",
            "Monitoring should match the reason — Symptoms, diet, medicine list, laboratory results, product amount, duration, benefit, and adverse effects should be reviewed together."
          ],
          "actionPath": {
            "supplements": [
              {
                "id": "immunity-supp-exact-product",
                "title": "Discuss the exact immune supplement product",
                "detail": "Bring the container or a clear label photo and state the reason for use."
              },
              {
                "id": "immunity-supp-overlap",
                "title": "Discuss overlapping ingredients",
                "detail": "Add amounts across multivitamins, single nutrients, powders, drinks, cold products, and fortified foods."
              },
              {
                "id": "immunity-supp-deficiency",
                "title": "Discuss whether a deficiency has been identified",
                "detail": "Testing and treatment depend on symptoms, diet, absorption, conditions, and medicines."
              }
            ],
            "helpfulTasks": [
              {
                "id": "immunity-supp-list",
                "title": "Prepare one supplement list",
                "detail": "Record brand, exact product, ingredients, amount per serving, servings used, start date, and reason."
              },
              {
                "id": "immunity-supp-response",
                "title": "Track benefit and adverse effects",
                "detail": "Record symptoms, infections, stomach effects, rash, bleeding, sleep, blood pressure, glucose, and laboratory changes."
              },
              {
                "id": "immunity-supp-surgery",
                "title": "Record upcoming surgery or procedures",
                "detail": "Tell the surgical, anesthesia, dental, and prescribing teams about every product."
              },
              {
                "id": "immunity-supp-storage",
                "title": "Review safe product storage",
                "detail": "Keep them in original containers and away from children and vulnerable adults."
              }
            ],
            "questions": [
              {
                "id": "immunity-supp-q-evidence",
                "title": "Ask what evidence supports the product for the goal",
                "detail": "Ask whether the evidence matches the ingredient, amount, population, and outcome."
              },
              {
                "id": "immunity-supp-q-interactions",
                "title": "Ask whether it could interact with medicines or treatment",
                "detail": "Review anticoagulants, diabetes and blood-pressure medicines, psychiatric medicines, transplant drugs, chemotherapy, and other supplements."
              },
              {
                "id": "immunity-supp-q-dose",
                "title": "Ask what amount and duration are appropriate, if any",
                "detail": "Dosing remains locked until clinically reviewed."
              },
              {
                "id": "immunity-supp-q-stop",
                "title": "Ask which reaction means the product should be stopped and help sought",
                "detail": "Use product-specific clinical and local poison or emergency guidance."
              }
            ],
            "labs": [
              {
                "id": "immunity-supp-lab-targeted",
                "title": "Discuss targeted testing before supplementation",
                "detail": "Testing may be useful when deficiency, excess, malabsorption, anemia, kidney or liver disease, or treatment interaction is suspected."
              },
              {
                "id": "immunity-supp-lab-followup",
                "title": "Discuss follow-up monitoring",
                "detail": "The nutrient, product, dose, duration, symptoms, and conditions determine what should be rechecked."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "supplement-safety",
          "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
          "editorialSourceIds": [
            "ODS_IMMUNE_FUNCTION",
            "FDA_SUPPLEMENT_101",
            "FDA_SUPPLEMENT_QA",
            "FDA_SUPPLEMENT_INTERACTIONS"
          ],
          "relatedIds": [
            "immunity",
            "supplement-interactions",
            "supplement-side-effects",
            "supplement-monitoring",
            "malnutrition",
            "supplement-emergency-safety"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "all supplement doses and duration",
              "pregnancy and childhood use",
              "kidney and liver disease",
              "cancer and transplant treatment",
              "probiotics during immune suppression",
              "surgery stop intervals",
              "toxicity thresholds",
              "adverse-reaction and poison-service actions"
            ]
          },
          "lockedDosing": {
            "status": "clinical-review-required",
            "display": false,
            "reason": "Dose, route, timing, duration, interactions, monitoring, age, pregnancy, and health conditions require clinician or pharmacist review."
          },
          "additionalResearchBatches": [
            "BATCH_08_SUPPLEMENT_LIBRARY"
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
          "title": "Blood-pressure ranges",
          "subtitle": "General adult office categories help organize readings, but diagnosis, home targets, pregnancy ranges, and treatment goals require clinical context.",
          "body": [
            "What the measurement represents — Systolic pressure is the upper number and reflects pressure when the heart contracts. Diastolic pressure is the lower number and reflects pressure while the heart relaxes between beats.",
            "General adult office reference — Normal is below 120 systolic and below 80 diastolic. Elevated is 120–129 systolic with diastolic below 80.",
            "High blood pressure categories — Stage 1 is 130–139 systolic or 80–89 diastolic. Stage 2 is 140 or higher systolic or 90 or higher diastolic. These categories do not replace individualized diagnosis or treatment decisions.",
            "Very high readings — Readings higher than 180 systolic and/or higher than 120 diastolic require prompt clinical guidance. Emergency symptoms require emergency services rather than repeated home checking.",
            "How it is measured — Accurate interpretation requires the correct cuff, supported posture, rest, no talking, and repeat measurements when requested. Home, clinic, and ambulatory measurements may differ.",
            "Diagnosis uses a pattern — High blood pressure usually has no symptoms. A clinician generally uses repeated, properly measured readings and the health context rather than one isolated value.",
            "Factors that change interpretation — Pain, anxiety, exercise, caffeine, nicotine, alcohol, a full bladder, temperature, illness, sleep loss, medicines, cuff size, arm position, pregnancy, and age can affect readings.",
            "Personal targets — Treatment targets can differ with cardiovascular risk, diabetes, kidney disease, frailty, falls, pregnancy, side effects, and clinician judgment.",
            "Low readings — A low number may be normal for some people. Dizziness, fainting, weakness, falls, dehydration, bleeding, infection, or medicine effects require review.",
            "Children and pregnancy — Adult categories should not be applied directly to children. Pregnancy and the postpartum period use separate criteria and urgent warning signs."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "bp-range-task-record",
                "title": "Record the top number, bottom number, pulse, time, and symptoms",
                "detail": "Avoid writing only “high” or “low”; the exact values and context matter."
              },
              {
                "id": "bp-range-task-pattern",
                "title": "Compare a series rather than one reading",
                "detail": "Use the measurement schedule requested by the clinician."
              },
              {
                "id": "bp-range-task-technique",
                "title": "Check cuff size and measurement technique",
                "detail": "Incorrect cuff size or position can distort the result."
              },
              {
                "id": "bp-range-task-plan",
                "title": "Write down personal targets and action thresholds",
                "detail": "Keep routine targets separate from urgent and emergency instructions."
              }
            ],
            "questions": [
              {
                "id": "bp-range-q-target",
                "title": "What office and home target is appropriate for me?",
                "detail": "Ask whether diabetes, kidney disease, pregnancy, falls, frailty, or medicine side effects change the target."
              },
              {
                "id": "bp-range-q-diagnosis",
                "title": "How will a high pattern be confirmed?",
                "detail": "Ask about repeat clinic readings, home monitoring, or ambulatory monitoring."
              },
              {
                "id": "bp-range-q-low",
                "title": "When is a low reading concerning for me?",
                "detail": "Discuss symptoms, hydration, illness, bleeding, and medicine timing."
              },
              {
                "id": "bp-range-q-action",
                "title": "Which readings or symptoms require a routine call, same-day review, or emergency care?",
                "detail": "Request a written plan with local contact instructions."
              }
            ],
            "labs": [
              {
                "id": "bp-range-monitor-home",
                "title": "Home or ambulatory blood-pressure pattern",
                "detail": "A clinician decides which method and schedule are appropriate."
              },
              {
                "id": "bp-range-monitor-risk",
                "title": "Cardiovascular and kidney risk review",
                "detail": "Blood pressure is interpreted with medical history, examination, medicines, kidney function, glucose, cholesterol, and other findings."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "normal-range",
          "researchBatch": "BATCH_04_BLOOD_PRESSURE",
          "editorialSourceIds": [
            "NHLBI_HIGH_BP_DIAGNOSIS",
            "AHA_BP_CATEGORIES",
            "FDA_HIGH_BP_SILENT_KILLER"
          ],
          "relatedIds": [
            "hypertension",
            "bp-home-monitoring",
            "bp-lifestyle",
            "bp-meds",
            "hypertension-emergency"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "all numeric categories",
              "diagnostic confirmation wording",
              "home and ambulatory thresholds",
              "individual treatment targets",
              "low-blood-pressure thresholds",
              "pregnancy, postpartum, and child ranges",
              "urgent and emergency action thresholds"
            ]
          }
        },
        {
          "id": "sugar-range",
          "title": "Glucose ranges",
          "subtitle": "Glucose readings must be interpreted by timing, test method, symptoms, medicines, pregnancy, and the person’s agreed target.",
          "body": [
            "What the measurement represents — A glucose result estimates the amount of glucose in blood at that moment. It may come from a laboratory sample, a fingerstick meter, or a continuous glucose monitor.",
            "Common treatment targets — Many nonpregnant adults with diabetes aim for 80–130 mg/dL before a meal and less than 180 mg/dL about one to two hours after a meal begins. Personal targets may be higher, lower, or timed differently.",
            "Low glucose reference — A value below 70 mg/dL is commonly treated as low in diabetes care. Symptoms, repeated episodes, and the person’s written plan also matter.",
            "Continuous monitoring — A common CGM target range for many people with diabetes is 70–180 mg/dL. Time-in-range goals are individualized and should not replace attention to severe lows or symptoms.",
            "Diagnosis versus daily targets — Diagnostic laboratory thresholds are not the same as home treatment targets. A clinician confirms diabetes using approved laboratory criteria and the clinical situation.",
            "How timing changes meaning — A fasting reading, a premeal reading, a post-meal reading, a bedtime reading, and a reading during illness answer different questions.",
            "Factors that change interpretation — Food, activity, stress, sleep, illness, steroids, insulin timing, meter technique, sensor lag, dehydration, anemia, kidney disease, pregnancy, and recent treatment changes can affect the result or its meaning.",
            "Monitoring frequency — The schedule depends on diabetes type, medicines, insulin use, pregnancy, symptoms, risk of low glucose, and whether treatment is changing.",
            "When readings are repeatedly high or low — Review the pattern with the diabetes team. Do not change insulin or medicine doses from a single general range.",
            "When to seek help — Follow the personal urgent thresholds. Severe low symptoms, repeated vomiting, deep or rapid breathing, fruity-smelling breath, severe dehydration, confusion, seizure, fainting, or inability to swallow require urgent or emergency action."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "sugar-range-task-label",
                "title": "Label every reading by timing",
                "detail": "Record fasting, before meal, after meal, bedtime, overnight, exercise, illness, or symptom timing."
              },
              {
                "id": "sugar-range-task-context",
                "title": "Record the context with the number",
                "detail": "Include food, activity, stress, sleep, medicines, insulin, and symptoms."
              },
              {
                "id": "sugar-range-task-meter",
                "title": "Review meter or sensor technique",
                "detail": "Check hand washing, strips, expiry, storage, site, sensor age, and the backup-check plan."
              },
              {
                "id": "sugar-range-task-targets",
                "title": "Write down personal target and action ranges",
                "detail": "Separate routine targets, low treatment threshold, same-day contact threshold, and emergency signs."
              }
            ],
            "questions": [
              {
                "id": "sugar-range-q-target",
                "title": "What are my targets before and after meals?",
                "detail": "Ask how pregnancy, age, complications, medicines, and hypoglycemia risk change the range."
              },
              {
                "id": "sugar-range-q-frequency",
                "title": "When and how often should I check?",
                "detail": "Ask which readings will actually change a care decision."
              },
              {
                "id": "sugar-range-q-device",
                "title": "When should I confirm a sensor result with a meter?",
                "detail": "Follow the specific device instructions and clinical plan."
              },
              {
                "id": "sugar-range-q-action",
                "title": "Which readings require routine review, a same-day call, or emergency help?",
                "detail": "Ask for written thresholds rather than relying on a general chart."
              }
            ],
            "labs": [
              {
                "id": "sugar-range-lab-glucose",
                "title": "Laboratory fasting or random glucose",
                "detail": "A laboratory result may be used for diagnosis or to clarify an unexpected home pattern."
              },
              {
                "id": "sugar-range-lab-ogtt",
                "title": "Oral glucose tolerance test",
                "detail": "This is used in selected diagnostic situations, including pregnancy, under clinician direction."
              },
              {
                "id": "sugar-range-lab-a1c",
                "title": "HbA1c",
                "detail": "This provides a longer-term estimate but can be misleading in some blood, kidney, liver, and pregnancy situations."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "normal-range",
          "researchBatch": "BATCH_03_DIABETES_GLUCOSE",
          "editorialSourceIds": [
            "NIDDK_MANAGING_DIABETES",
            "CDC_MANAGE_BLOOD_SUGAR",
            "CDC_MONITORING_BLOOD_SUGAR",
            "NIDDK_DIABETES_TESTS_DIAGNOSIS"
          ],
          "relatedIds": [
            "diabetes",
            "hba1c",
            "low-sugar-symptoms",
            "high-sugar-symptoms",
            "glucose-emergency"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "numeric targets",
              "CGM time-in-range goals",
              "diagnostic thresholds",
              "pregnancy targets",
              "child targets",
              "contact thresholds",
              "emergency instructions"
            ]
          }
        },
        {
          "id": "hba1c",
          "title": "HbA1c",
          "subtitle": "A laboratory test that estimates average glucose over about three months. It does not show every high, low, or day-to-day pattern.",
          "body": [
            "What the measurement represents — HbA1c measures the percentage of hemoglobin with glucose attached. Because red blood cells circulate for months, the result reflects a longer-term glucose pattern.",
            "General diagnostic reference — In laboratory testing, less than 5.7% is generally considered below the prediabetes range, 5.7% to 6.4% is in the prediabetes range, and 6.5% or higher is in the diabetes range. Diagnosis usually requires confirmation unless symptoms and glucose findings make the situation clear.",
            "General treatment reference — For many people with diabetes, a goal below 7% is commonly used. The appropriate goal may differ with age, pregnancy, diabetes duration, complications, other conditions, life expectancy, and risk of hypoglycemia.",
            "How it differs from daily glucose — HbA1c can look acceptable while frequent highs and lows are occurring. Meter or sensor patterns provide information that the average cannot show.",
            "Factors that can mislead the result — Iron-deficiency anemia, recent blood loss, transfusion, hemoglobin variants, kidney failure, liver disease, pregnancy, and conditions that change red-blood-cell lifespan can make HbA1c less reliable.",
            "Monitoring frequency — The schedule depends on whether goals are being met, treatment is stable, pregnancy is present, or therapy is changing. Ask which interval is appropriate.",
            "What a higher result may mean — Average glucose has generally been higher, but the cause may involve meals, medicines, insulin, illness, sleep, stress, access, or another health change.",
            "What a lower result may mean — Average glucose has generally been lower, but recurrent hypoglycemia, anemia, blood loss, or another factor can also affect interpretation.",
            "When to seek help — HbA1c alone is not an emergency test. Urgent action depends on current glucose, symptoms, ketones when relevant, hydration, consciousness, and the personal emergency plan.",
            "Use in planning — Review HbA1c together with glucose records, low-glucose episodes, medicines, blood counts when relevant, and the person’s goals."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "hba1c-task-trend",
                "title": "Record the HbA1c trend over time",
                "detail": "Add the date, result, treatment changes, illness, pregnancy, or anemia information that may affect interpretation."
              },
              {
                "id": "hba1c-task-compare",
                "title": "Compare HbA1c with meter or sensor patterns",
                "detail": "Look for frequent highs, lows, overnight changes, or large swings hidden by the average."
              },
              {
                "id": "hba1c-task-context",
                "title": "Prepare conditions that may affect the result",
                "detail": "Mention anemia, iron deficiency, blood loss, transfusion, kidney or liver disease, pregnancy, or a known hemoglobin variant."
              }
            ],
            "questions": [
              {
                "id": "hba1c-q-goal",
                "title": "What HbA1c goal is appropriate for me?",
                "detail": "Ask how low-glucose risk, pregnancy, age, complications, and other conditions affect the goal."
              },
              {
                "id": "hba1c-q-reliable",
                "title": "Could this HbA1c be misleading?",
                "detail": "Discuss anemia, iron deficiency, transfusion, kidney disease, liver disease, pregnancy, and hemoglobin variants."
              },
              {
                "id": "hba1c-q-frequency",
                "title": "How often should HbA1c be checked?",
                "detail": "The interval depends on stability, treatment changes, goals, and pregnancy."
              },
              {
                "id": "hba1c-q-disagreement",
                "title": "Why does HbA1c not match my home readings?",
                "detail": "Ask whether device data, testing technique, glucose variability, or a blood-related factor explains the difference."
              }
            ],
            "labs": [
              {
                "id": "hba1c-lab-repeat",
                "title": "Repeat laboratory HbA1c",
                "detail": "Confirmation or repeat testing may be appropriate when diagnosis or an unexpected result is being evaluated."
              },
              {
                "id": "hba1c-lab-glucose",
                "title": "Fasting, random, or oral glucose testing",
                "detail": "Alternative glucose tests may clarify diagnosis or disagreement with HbA1c."
              },
              {
                "id": "hba1c-lab-blood",
                "title": "CBC, iron studies, or hemoglobin evaluation",
                "detail": "These may be discussed when anemia, iron deficiency, blood loss, or a hemoglobin variant could affect interpretation."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "normal-range",
          "researchBatch": "BATCH_03_DIABETES_GLUCOSE",
          "editorialSourceIds": [
            "NIDDK_A1C_TEST",
            "NIDDK_DIABETES_TESTS_DIAGNOSIS",
            "NIDDK_MANAGING_DIABETES",
            "NIDDK_A1C_RACE_ETHNICITY"
          ],
          "relatedIds": [
            "diabetes",
            "sugar-range",
            "anemia",
            "iron-deficiency",
            "low-sugar-symptoms",
            "high-sugar-symptoms"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "diagnostic thresholds",
              "treatment targets",
              "monitoring interval",
              "pregnancy interpretation",
              "hemoglobin variant interpretation",
              "alternative test selection"
            ]
          }
        },
        {
          "id": "ldl",
          "title": "LDL cholesterol",
          "subtitle": "LDL is one part of a lipid profile. Lower levels generally reduce plaque-related risk, but the appropriate goal depends on the person’s full cardiovascular risk.",
          "body": [
            "What the measurement represents — LDL is a lipoprotein that carries cholesterol through the blood. Higher LDL can promote cholesterol buildup in artery walls.",
            "General reference — Many laboratory reports describe LDL below 100 mg/dL as an optimal or near-optimal general reference. People with established cardiovascular disease or very high risk may need a substantially lower individualized goal.",
            "How it is measured — LDL is usually reported from a blood lipid profile. It may be calculated or directly measured. Fasting is not always required, but the clinician or laboratory may request it for specific situations.",
            "Use the full profile — Total cholesterol, HDL, triglycerides, non-HDL cholesterol, and the clinical history help interpret LDL. One number does not show the whole cardiovascular risk.",
            "Factors that change interpretation — Recent illness, pregnancy, major weight change, diabetes control, thyroid, kidney or liver disease, alcohol, food pattern, medicines, genetics, and whether the sample was fasting can matter.",
            "A high result — Higher LDL is associated with plaque buildup and greater heart-attack and stroke risk over time. Very high or lifelong LDL and early heart disease in the family may require assessment for familial hypercholesterolemia.",
            "A low result — A low LDL result may be an intended treatment response. Unexpectedly low values may need interpretation with nutrition, illness, liver, thyroid, or other clinical information rather than automatic concern.",
            "Monitoring frequency — The schedule depends on age, baseline risk, prior heart or vascular disease, medicine changes, pregnancy, and whether the result will change management.",
            "When to seek help — LDL itself usually causes no urgent symptoms. Emergency symptoms such as chest pressure, severe breathlessness, fainting, or sudden neurologic change require urgent care regardless of the latest LDL value."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "ldl-task-results",
                "title": "Record LDL results with dates and context",
                "detail": "Include the full lipid profile, fasting status when known, illness, pregnancy, weight change, and medicine changes."
              },
              {
                "id": "ldl-task-family",
                "title": "Record early heart disease and high cholesterol in the family",
                "detail": "Include the age at heart attack, stroke, sudden death, or cholesterol diagnosis when known."
              },
              {
                "id": "ldl-task-treatment",
                "title": "Compare the result before and after the current plan",
                "detail": "Note diet changes, activity, tobacco status, adherence, side effects, and the exact medicine or dose without changing it independently."
              },
              {
                "id": "ldl-task-questions",
                "title": "Prepare questions before the lipid review",
                "detail": "Separate general laboratory ranges from the personal goal and expected treatment benefit."
              }
            ],
            "questions": [
              {
                "id": "ldl-q-goal",
                "title": "What LDL goal or percentage reduction fits my risk?",
                "detail": "Ask how prior cardiovascular disease, diabetes, kidney disease, blood pressure, smoking, age, and family history change the answer."
              },
              {
                "id": "ldl-q-repeat",
                "title": "When should this test be repeated?",
                "detail": "Ask whether fasting is needed and what treatment or lifestyle interval is being assessed."
              },
              {
                "id": "ldl-q-fh",
                "title": "Does this pattern suggest familial hypercholesterolemia?",
                "detail": "Mention lifelong high results, relatives with early heart disease, and any tendon or skin findings."
              },
              {
                "id": "ldl-q-additional",
                "title": "Would another lipid or risk test change the plan?",
                "detail": "Ask about non-HDL cholesterol, apolipoprotein B, lipoprotein(a), or other selected testing only when clinically useful."
              }
            ],
            "labs": [
              {
                "id": "ldl-lab-profile",
                "title": "Complete lipid profile",
                "detail": "Interpret LDL together with total cholesterol, HDL, and triglycerides."
              },
              {
                "id": "ldl-lab-secondary",
                "title": "Secondary-cause evaluation when indicated",
                "detail": "The history may lead to thyroid, glucose, kidney, liver, pregnancy, or medicine review."
              },
              {
                "id": "ldl-lab-selected",
                "title": "Selected additional lipid tests",
                "detail": "A clinician decides whether non-HDL cholesterol, apolipoprotein B, lipoprotein(a), or genetic assessment would change care."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "normal-range",
          "researchBatch": "BATCH_05_CHOLESTEROL_HEART",
          "editorialSourceIds": [
            "NHLBI_BLOOD_CHOLESTEROL",
            "NHLBI_BLOOD_CHOLESTEROL_DIAGNOSIS",
            "CDC_LDL_HDL_TRIGLYCERIDES",
            "CDC_FAMILIAL_HYPERCHOLESTEROLEMIA"
          ],
          "relatedIds": [
            "cholesterol",
            "heart-disease",
            "statin",
            "mediterranean-heart-diet",
            "cholesterol-lifestyle"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "all numeric ranges, targets, and treatment thresholds",
              "fasting and nonfasting interpretation",
              "percentage-reduction goals",
              "familial hypercholesterolemia criteria",
              "child, pregnancy, and older-adult interpretation",
              "additional lipid and genetic testing",
              "monitoring frequency"
            ]
          }
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
          "subtitle": "A lack of energy that can interfere with usual activities; it is a symptom, not a diagnosis.",
          "body": [
            "What fatigue means — Fatigue is weariness, low energy, or reduced stamina that can make usual physical or mental activities harder.",
            "How it may feel — A person may describe a heavy body, poor concentration, sleepiness, weakness, slower recovery, or needing more effort for ordinary tasks.",
            "Patterns to notice — Record when fatigue began, whether it is constant or comes and goes, the time of day it is worst, and whether rest restores energy.",
            "Sleep and recovery causes — Too little sleep, insomnia, sleep apnea, irregular schedules, overtraining, pain, or inadequate recovery can contribute.",
            "Nutrition and deficiency causes — Skipped meals, low energy intake, dehydration, iron deficiency, vitamin B12 deficiency, or other nutrition problems may contribute, but fatigue alone does not identify a deficiency.",
            "Medicine and substance causes — Sedating medicines, some antihistamines, pain medicines, alcohol, and other products can affect alertness or energy.",
            "Emotional-health causes — Depression, anxiety, chronic stress, grief, and burnout can produce real physical fatigue and deserve assessment when persistent or severe.",
            "Illness-related causes — Infection, diabetes, thyroid disease, anemia, kidney or liver disease, heart or lung disease, inflammatory conditions, pregnancy, and other conditions may be involved.",
            "Helpful observations — Note sleep quality, meals, fluids, activity, fever, pain, mood, bleeding, weight change, dizziness, breathlessness, and medicine timing.",
            "Food support — Regular balanced meals, adequate fluids when medically appropriate, and a varied diet can support steady energy, but food should not replace evaluation of persistent fatigue.",
            "Medical review — Fatigue lasting several weeks, repeatedly limiting daily life, or not improving with adequate sleep and nutrition should be discussed with a clinician.",
            "Seek urgent care if — Fatigue occurs with chest pain, severe or new shortness of breath, fainting, new one-sided weakness, confusion, heavy bleeding, black or bloody stool, or rapidly worsening illness."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "fatigue-food-regular-meals",
                "title": "Build regular balanced meals",
                "detail": "Pair a protein source with vegetables or fruit and a high-fiber carbohydrate so long gaps and skipped meals are less likely to worsen low energy."
              },
              {
                "id": "fatigue-food-hydration",
                "title": "Review hydration safely",
                "detail": "Track fluids and signs of dehydration, while following any fluid restriction given for heart, kidney, or liver conditions."
              },
              {
                "id": "fatigue-food-iron-pattern",
                "title": "Use iron-containing foods without assuming deficiency",
                "detail": "Include suitable meat, seafood, poultry, beans, lentils, fortified foods, or leafy vegetables as part of a varied diet; testing is needed when deficiency is suspected."
              },
              {
                "id": "fatigue-food-meal-pattern",
                "title": "Compare energy before and after meals",
                "detail": "Record whether fatigue worsens after skipped meals, very large meals, or long periods without food."
              }
            ],
            "helpfulTasks": [
              {
                "id": "fatigue-task-diary",
                "title": "Keep a seven-day fatigue diary",
                "detail": "Record energy level, activities, sleep, meals, fluids, caffeine, symptoms, and medicines."
              },
              {
                "id": "fatigue-task-sleep",
                "title": "Record sleep quality and waking time",
                "detail": "Include bedtime, waking time, awakenings, snoring, witnessed breathing pauses, morning headaches, and daytime sleepiness."
              },
              {
                "id": "fatigue-task-meals",
                "title": "Note whether fatigue changes before or after meals",
                "detail": "Record skipped meals, long gaps, appetite changes, and any glucose readings already recommended for you."
              },
              {
                "id": "fatigue-task-med-review",
                "title": "List every medicine and supplement",
                "detail": "Include prescriptions, over-the-counter products, antihistamines, pain medicines, vitamins, minerals, and herbal products."
              },
              {
                "id": "fatigue-task-associated",
                "title": "Track dizziness, breathlessness, pain, fever, or bleeding",
                "detail": "Record when associated symptoms occur and whether they limit walking, work, exercise, or usual activities."
              }
            ],
            "questions": [
              {
                "id": "fatigue-q-cause",
                "title": "What are the most likely causes of my fatigue?",
                "detail": "Ask how sleep, mood, medicines, diet, bleeding, infection, and chronic conditions affect the assessment."
              },
              {
                "id": "fatigue-q-urgent",
                "title": "Do any of my associated symptoms need urgent assessment?",
                "detail": "Mention chest pain, breathlessness, fainting, black or bloody stool, fever, weight loss, or neurologic symptoms."
              },
              {
                "id": "fatigue-q-sleep",
                "title": "Could a sleep problem be contributing?",
                "detail": "Discuss snoring, breathing pauses, insomnia, unrefreshing sleep, and excessive daytime sleepiness."
              },
              {
                "id": "fatigue-q-medicines",
                "title": "Could a medicine, supplement, alcohol, or other substance be contributing?",
                "detail": "Bring the complete list and note when each product is taken."
              },
              {
                "id": "fatigue-q-followup",
                "title": "What should I track, and when should I return if fatigue continues?",
                "detail": "Agree on symptoms, measurements, or time points that should trigger follow-up."
              }
            ],
            "labs": [
              {
                "id": "fatigue-lab-cbc",
                "title": "Complete blood count (CBC)",
                "detail": "May help identify anemia and provide information about red cells, white cells, and platelets."
              },
              {
                "id": "fatigue-lab-iron",
                "title": "Ferritin and iron studies",
                "detail": "May be discussed when blood loss, heavy periods, restricted diet, low iron intake, or an anemia pattern raises concern."
              },
              {
                "id": "fatigue-lab-thyroid",
                "title": "Thyroid testing",
                "detail": "May be considered when symptoms or history suggest thyroid disease."
              },
              {
                "id": "fatigue-lab-glucose",
                "title": "Glucose or HbA1c",
                "detail": "May be considered when diabetes symptoms, risk factors, or abnormal readings are present."
              },
              {
                "id": "fatigue-lab-metabolic",
                "title": "Kidney, liver, and electrolyte tests",
                "detail": "A clinician may select these based on symptoms, medicines, examination, and medical history."
              },
              {
                "id": "fatigue-lab-b12",
                "title": "Vitamin B12 or folate testing",
                "detail": "May be appropriate when diet, absorption problems, medicines, blood-cell pattern, or neurologic symptoms raise concern."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "symptom",
          "researchBatch": "BATCH_01_ENERGY_IRON",
          "editorialSourceIds": [
            "MEDLINEPLUS_FATIGUE_TOPIC",
            "MEDLINEPLUS_FATIGUE_ENCYCLOPEDIA"
          ],
          "relatedIds": [
            "iron-deficiency",
            "anemia",
            "iron-rich-diet",
            "iron-supplement",
            "constipation"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "redFlags",
              "tests",
              "emergencyInstructions"
            ]
          }
        },
        {
          "id": "low-sugar-symptoms",
          "title": "Low glucose symptoms",
          "subtitle": "Low glucose can affect thinking, coordination, and consciousness. It is most common with insulin or medicines that increase insulin release.",
          "body": [
            "What low glucose means — Hypoglycemia occurs when blood glucose falls below the range that is healthy for the person. In diabetes care, a reading below 70 mg/dL is commonly treated as low, but the personal action threshold may differ.",
            "How it may feel — Shaking, sweating, fast heartbeat, hunger, dizziness, weakness, headache, irritability, anxiety, blurred vision, confusion, or unusual behavior can occur.",
            "Severe symptoms — Trouble walking or speaking, inability to cooperate with treatment, seizure, loss of consciousness, or inability to swallow safely can indicate severe hypoglycemia.",
            "Patterns to notice — Record whether episodes occur overnight, before meals, after activity, after alcohol, during illness, or after a medicine or insulin change.",
            "Possible contributors — Too much insulin or another glucose-lowering medicine, a missed or delayed meal, less carbohydrate than expected, more activity than usual, alcohol, vomiting, poor intake, or changes in kidney or liver function may contribute.",
            "Safe observations — Check glucose when possible and compare the reading with symptoms. Follow the device instructions and the personal backup-check plan when a sensor result does not match how you feel.",
            "Immediate plan — Follow the written low-glucose plan from the diabetes team. A person who is unconscious, having a seizure, or unable to swallow should not be given food or drink by mouth.",
            "Glucagon discussion — Ask whether prescribed glucagon is appropriate, who should know how to use it, where it should be stored, and when emergency services should be called.",
            "After an episode — Record the reading, symptoms, food, activity, alcohol, illness, and medicine timing. Repeated lows require prompt review rather than repeated self-adjustment.",
            "Seek emergency help if — There is seizure, loss of consciousness, severe confusion, inability to swallow, serious injury, or failure to recover after the established emergency plan."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "low-glucose-food-carry",
                "title": "Carry the measured fast-acting carbohydrate in your personal plan",
                "detail": "Use the product and amount approved by the diabetes team. Do not substitute an unmeasured snack when precise treatment is required."
              },
              {
                "id": "low-glucose-food-followup",
                "title": "Plan the follow-up food step when one is part of your plan",
                "detail": "Some situations require a later meal or snack after the immediate low is corrected. Confirm this with the diabetes team."
              }
            ],
            "helpfulTasks": [
              {
                "id": "low-glucose-task-log",
                "title": "Record every low-glucose episode",
                "detail": "Include the glucose value, symptoms, meal timing, activity, alcohol, illness, and medicine or insulin timing."
              },
              {
                "id": "low-glucose-task-plan",
                "title": "Review the written low-glucose plan",
                "detail": "Confirm the action threshold, recheck timing, follow-up step, and when to call for help."
              },
              {
                "id": "low-glucose-task-supplies",
                "title": "Check emergency supplies",
                "detail": "Review fast-acting carbohydrate, meter or sensor supplies, medical identification, and prescribed glucagon expiry dates."
              },
              {
                "id": "low-glucose-task-driving",
                "title": "Prepare a driving and work-safety plan",
                "detail": "Discuss how to respond to symptoms before driving, operating machinery, working at height, or exercising alone."
              }
            ],
            "questions": [
              {
                "id": "low-glucose-q-trigger",
                "title": "What is most likely triggering my low readings?",
                "detail": "Review insulin, other medicines, meal timing, activity, alcohol, illness, and kidney or liver function."
              },
              {
                "id": "low-glucose-q-threshold",
                "title": "What glucose value should start my treatment plan?",
                "detail": "Ask for the personal threshold, exact treatment product, amount, recheck timing, and follow-up step."
              },
              {
                "id": "low-glucose-q-glucagon",
                "title": "Should I have prescribed glucagon?",
                "detail": "Ask which form is suitable and who should be trained to use it."
              },
              {
                "id": "low-glucose-q-unaware",
                "title": "Could I have reduced awareness of low glucose?",
                "detail": "Mention episodes without warning symptoms, overnight lows, or readings found only on monitoring."
              },
              {
                "id": "low-glucose-q-adjustment",
                "title": "Does my treatment plan need review?",
                "detail": "Do not change insulin or medicine doses without an agreed adjustment plan."
              }
            ],
            "labs": [
              {
                "id": "low-glucose-lab-data",
                "title": "Meter, sensor, or continuous glucose data review",
                "detail": "The diabetes team can compare timing, trends, and possible repeated patterns."
              },
              {
                "id": "low-glucose-lab-kidney",
                "title": "Kidney and liver function",
                "detail": "Changes in medicine clearance may be relevant when lows become more frequent or severe."
              },
              {
                "id": "low-glucose-lab-a1c",
                "title": "HbA1c and overall glucose pattern",
                "detail": "A low or moderate HbA1c can still occur with frequent glucose swings or hypoglycemia."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "symptom",
          "researchBatch": "BATCH_03_DIABETES_GLUCOSE",
          "editorialSourceIds": [
            "CDC_LOW_BLOOD_SUGAR",
            "CDC_LOW_BLOOD_SUGAR_TREATMENT",
            "NIDDK_LOW_BLOOD_GLUCOSE",
            "MEDLINEPLUS_HYPOGLYCEMIA"
          ],
          "relatedIds": [
            "diabetes",
            "insulin",
            "metformin",
            "sugar-range",
            "hba1c",
            "glucose-emergency"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "numeric action thresholds",
              "oral carbohydrate amount and timing",
              "glucagon instructions",
              "driving safety",
              "emergency instructions",
              "child and pregnancy adaptations"
            ]
          }
        },
        {
          "id": "high-sugar-symptoms",
          "title": "High glucose symptoms",
          "subtitle": "High glucose may cause thirst, frequent urination, blurred vision, fatigue, and dehydration, but some people have no clear symptoms.",
          "body": [
            "What high glucose means — Hyperglycemia occurs when blood glucose is above the person’s target range. A single home reading does not diagnose diabetes or explain the cause.",
            "How it may feel — Increased thirst, frequent urination, dry mouth, blurred vision, fatigue, headache, weakness, slow healing, or repeated infections may occur.",
            "Patterns to notice — Record whether readings rise after meals, overnight, during illness, after missed medicine, after a steroid medicine, during major stress, or after an insulin-delivery problem.",
            "Possible contributors — Diabetes, infection, dehydration, missed or insufficient medicine, damaged insulin, pump or infusion-set failure, some medicines, changes in food or activity, and stress hormones may contribute.",
            "Safe observations — Record glucose, symptoms, food, fluids, illness, ketone results when already advised, and medicine or insulin timing. Do not improvise a correction dose.",
            "Hydration support — Water may help replace fluid losses when there is no medical fluid restriction. Sugar-sweetened drinks can raise glucose further unless they are being used for a separate low-glucose plan.",
            "Ketone discussion — Ask when ketones should be checked, which method to use, and what result should trigger a same-day call or emergency assessment.",
            "Why urgent assessment matters — Very high glucose with dehydration can progress to diabetic ketoacidosis or a hyperosmolar emergency. Both require medical treatment.",
            "Seek urgent assessment if — High readings persist despite the established plan, illness prevents normal eating or drinking, ketones are present, or insulin delivery may have stopped.",
            "Seek emergency help if — There is repeated vomiting, abdominal pain, deep or rapid breathing, fruity-smelling breath, severe dehydration, increasing drowsiness, confusion, fainting, seizure, or inability to keep fluids down."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "high-glucose-food-water",
                "title": "Use water as the default drink when medically appropriate",
                "detail": "Follow any fluid restriction for heart, kidney, or liver disease."
              },
              {
                "id": "high-glucose-food-regular",
                "title": "Return to the agreed regular meal pattern",
                "detail": "Avoid reacting to one reading with extreme fasting or an unplanned large carbohydrate restriction."
              }
            ],
            "helpfulTasks": [
              {
                "id": "high-glucose-task-log",
                "title": "Track the high-glucose pattern",
                "detail": "Record readings, meals, fluids, symptoms, illness, stress, activity, and medicine or insulin timing."
              },
              {
                "id": "high-glucose-task-sickday",
                "title": "Review the written sick-day plan",
                "detail": "Confirm monitoring, hydration, ketone, medicine, and contact instructions before the next illness."
              },
              {
                "id": "high-glucose-task-insulin",
                "title": "Inspect insulin and delivery supplies",
                "detail": "Check the product, expiry, storage exposure, pen or pump setup, tubing, site, and backup plan without changing the dose independently."
              },
              {
                "id": "high-glucose-task-medlist",
                "title": "Prepare a complete medicine list",
                "detail": "Include steroids, over-the-counter products, supplements, and recent treatment changes."
              }
            ],
            "questions": [
              {
                "id": "high-glucose-q-call",
                "title": "What reading or symptom should trigger a same-day call?",
                "detail": "Ask for a written threshold and contact plan that fits the diabetes type and treatment."
              },
              {
                "id": "high-glucose-q-ketone",
                "title": "When should I check ketones?",
                "detail": "Ask which method to use, how to interpret the result, and what action is approved."
              },
              {
                "id": "high-glucose-q-correction",
                "title": "What is my approved correction plan?",
                "detail": "Insulin correction dosing requires individualized clinical instructions."
              },
              {
                "id": "high-glucose-q-cause",
                "title": "Could illness, medicine, insulin storage, or delivery failure be contributing?",
                "detail": "Bring the glucose record and all devices or medicines involved."
              },
              {
                "id": "high-glucose-q-hydration",
                "title": "How should I manage fluids during high glucose or illness?",
                "detail": "Ask about adjustments for heart, kidney, liver, pregnancy, or child care needs."
              }
            ],
            "labs": [
              {
                "id": "high-glucose-lab-glucose",
                "title": "Laboratory glucose and HbA1c",
                "detail": "These may help separate a persistent pattern from an isolated reading."
              },
              {
                "id": "high-glucose-lab-ketones",
                "title": "Blood or urine ketones",
                "detail": "A clinician decides when ketone testing is appropriate and how results should guide care."
              },
              {
                "id": "high-glucose-lab-metabolic",
                "title": "Electrolytes, kidney function, and acid-base assessment",
                "detail": "These may be needed when dehydration or a metabolic emergency is suspected."
              },
              {
                "id": "high-glucose-lab-infection",
                "title": "Testing for infection or another trigger",
                "detail": "Selection depends on symptoms, examination, medicines, and medical history."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "symptom",
          "researchBatch": "BATCH_03_DIABETES_GLUCOSE",
          "editorialSourceIds": [
            "CDC_DIABETES_SYMPTOMS",
            "CDC_DKA",
            "NIDDK_DIABETES_SYMPTOMS_CAUSES",
            "NIDDK_MANAGING_DIABETES"
          ],
          "relatedIds": [
            "diabetes",
            "insulin",
            "metformin",
            "sugar-range",
            "hba1c",
            "glucose-emergency"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "numeric escalation thresholds",
              "ketone instructions",
              "insulin correction language",
              "fluid advice",
              "exercise restrictions",
              "emergency instructions",
              "child and pregnancy adaptations"
            ]
          }
        },
        {
          "id": "headache",
          "title": "Headache",
          "subtitle": "Head pain can disrupt sleep, appear after poor sleep, or change with stress, meals, caffeine, medicines, illness, and other factors.",
          "body": [
            "What it is — Headache is a symptom, not one diagnosis. Common primary headache disorders include tension-type headache and migraine, while other headaches occur because of another condition.",
            "How it may feel — Pain may be pressure-like, tight, throbbing, stabbing, one-sided, or on both sides. Nausea, light or sound sensitivity, eye symptoms, nasal symptoms, neck pain, or neurologic symptoms may occur depending on the cause.",
            "Patterns to notice — Record when the headache begins, how quickly it reaches full intensity, location, severity, duration, associated symptoms, menstrual timing when relevant, and whether it wakes you or is present on waking.",
            "Possible contributors — Sleep changes, skipped meals, caffeine use or withdrawal, stress, dehydration, alcohol, infection, vision strain, blood-pressure changes, medicines, and frequent pain-medicine use may contribute.",
            "Sleep connection — Too little, too much, irregular, or interrupted sleep can trigger some headaches. Morning headache may also occur with sleep apnea, teeth grinding, medicine effects, or other causes and should not be assumed to have one explanation.",
            "Safe observations — Keep a headache diary with sleep, meals, fluids, caffeine, activity, medicines, and menstrual cycle when relevant. Record what helped and whether medicine was used repeatedly.",
            "Supportive actions — Use regular meals, hydration appropriate to your conditions, a steady sleep schedule, and planned breaks from prolonged screen or posture strain. Treatment depends on the headache type and medical history.",
            "Medicine review — Frequent use of some headache medicines can contribute to medication-overuse headache. Do not change prescribed treatment without discussing the pattern and frequency.",
            "Questions and tests to discuss — Diagnosis is often based on history and examination. Imaging or other tests are selected when the pattern, examination, age, medical history, or warning signs justify them.",
            "Seek prompt review if — Headaches are new, increasingly frequent, changing in pattern, waking you repeatedly, worse in the morning, occurring after age 50, or requiring pain medicine on many days.",
            "Seek urgent care if — The headache is sudden and severe, follows a head injury, occurs with weakness, speech or vision change, confusion, loss of consciousness, seizure, high fever with stiff neck, repeated vomiting, or severe one-eye pain with redness."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "headache-task-1",
                "title": "Keep a headache and sleep diary",
                "detail": "Record onset, intensity, duration, sleep, meals, fluids, caffeine, medicines, and associated symptoms."
              },
              {
                "id": "headache-task-2",
                "title": "Record urgent warning signs",
                "detail": "Seek urgent care for a sudden severe headache or new neurologic symptoms."
              },
              {
                "id": "headache-task-3",
                "title": "Count headache and medicine-use days",
                "detail": "Bring the monthly totals to a clinician or pharmacist."
              },
              {
                "id": "headache-task-4",
                "title": "Compare morning headache with sleep symptoms",
                "detail": "Note snoring, gasping, dry mouth, teeth grinding, and daytime sleepiness."
              }
            ],
            "questions": [
              {
                "id": "headache-q-1",
                "title": "What headache pattern best fits my symptoms?",
                "detail": "Ask what features support or argue against migraine, tension-type headache, medication overuse, or another cause."
              },
              {
                "id": "headache-q-2",
                "title": "Which warning signs require urgent care?",
                "detail": "Review the plan for sudden severe pain, neurologic symptoms, fever with stiff neck, injury, or repeated vomiting."
              },
              {
                "id": "headache-q-3",
                "title": "Could sleep, caffeine, medicines, blood pressure, or vision be contributing?",
                "detail": "Bring the diary and complete medicine list."
              },
              {
                "id": "headache-q-4",
                "title": "How often can I use my headache medicine safely?",
                "detail": "Ask about interactions, pregnancy, kidney or liver conditions, and medication-overuse risk."
              }
            ],
            "labs": [
              {
                "id": "headache-lab-1",
                "title": "Blood pressure measurement",
                "detail": "A clinician interprets the result with symptoms, medicines, and measurement conditions."
              },
              {
                "id": "headache-lab-2",
                "title": "Neurologic, eye, head, and neck examination",
                "detail": "The examination guides whether other testing is needed."
              },
              {
                "id": "headache-lab-3",
                "title": "Imaging when clinically indicated",
                "detail": "Imaging is not routine for every headache and is selected based on history, examination, and warning signs."
              },
              {
                "id": "headache-lab-4",
                "title": "Targeted laboratory or other tests",
                "detail": "Testing depends on suspected infection, inflammation, metabolic causes, pregnancy, or other clinical factors."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "symptom",
          "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
          "editorialSourceIds": [
            "MEDLINEPLUS_HEADACHE",
            "MEDLINEPLUS_HEADACHE_DANGER"
          ],
          "relatedIds": [
            "sleep",
            "insomnia",
            "sleep-apnea",
            "fatigue",
            "hypertension"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "emergency warning wording",
              "pain-medicine frequency language",
              "pregnancy medication cautions",
              "imaging indications"
            ]
          }
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
          "subtitle": "Cough, sore throat, congestion, fever, chills, body aches, headache, and fatigue can overlap across several respiratory infections.",
          "body": [
            "What it means — “Cold or flu-like illness” describes a symptom pattern, not one confirmed diagnosis. Common colds, influenza, COVID-19, RSV, and other infections can overlap.",
            "How it may feel — Symptoms can include cough, sore throat, runny or blocked nose, fever or feeling feverish, chills, headache, body aches, tiredness, reduced appetite, or stomach symptoms.",
            "Symptoms alone may not identify the cause — Testing, local circulation, exposure history, age, pregnancy, medical conditions, and immune status can change interpretation.",
            "Patterns to record — Note when symptoms began, temperature when relevant, breathing, hydration, urination, alertness, chest symptoms, exposure to illness, testing, and whether symptoms improve then worsen again.",
            "Higher-risk people may need earlier contact — Older adults, young children, pregnant people, people with chronic conditions, and people with weakened immunity may have a higher risk of complications.",
            "Testing and treatment are time-sensitive for some infections — Ask early whether testing or prescription antiviral treatment should be considered. Do not use leftover antibiotics or another person’s medicine.",
            "Supportive care is individualized — Rest, an approved fluid plan, and food as tolerated may help recovery. Kidney, heart, liver, diabetes, pregnancy, and child-specific plans can change what is safe.",
            "Reduce spread — Stay away from others while acutely ill according to current local guidance, improve indoor air when possible, cover coughs and sneezes, clean hands, and use added precautions around high-risk people.",
            "Review over-the-counter products — Multi-symptom products can duplicate ingredients or interact with blood-pressure medicines, anticoagulants, sedatives, diabetes treatment, or other products.",
            "Monitor the course — Many uncomplicated viral illnesses improve with time, but persistent fever, dehydration, worsening chronic disease, or a return of worse symptoms needs review.",
            "Seek urgent care for severe warning signs — Trouble breathing, persistent chest pain or pressure, confusion, inability to wake, seizure, severe weakness, blue or gray lips or face, severe dehydration, or rapidly worsening symptoms require urgent assessment.",
            "A personal plan overrides generic information — People receiving chemotherapy or immune-suppressing treatment should follow the temperature and contact instructions given by their treatment team."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "cold-flu-track-course",
                "title": "Track the illness course",
                "detail": "Record symptom start, temperature when relevant, breathing, fluids, urination, alertness, testing, and changes each day."
              },
              {
                "id": "cold-flu-risk-list",
                "title": "Record higher-risk factors",
                "detail": "List age, pregnancy, chronic conditions, immune suppression, recent treatment, and medicines."
              },
              {
                "id": "cold-flu-med-list",
                "title": "Review every symptom medicine",
                "detail": "Write the exact active ingredients and check for duplication, interactions, and age or condition cautions."
              },
              {
                "id": "cold-flu-spread-plan",
                "title": "Prepare a spread-reduction plan",
                "detail": "Use cleaner air, hand and respiratory hygiene, and practical separation from higher-risk people while ill."
              },
              {
                "id": "cold-flu-hydration-observation",
                "title": "Record fluid tolerance and urination",
                "detail": "Note vomiting, diarrhea, dry mouth, dizziness, reduced urination, or inability to keep fluids down."
              }
            ],
            "questions": [
              {
                "id": "cold-flu-q-testing",
                "title": "Ask whether testing for a specific infection is appropriate",
                "detail": "Ask how symptom timing, exposure, local activity, and risk factors affect testing."
              },
              {
                "id": "cold-flu-q-antiviral",
                "title": "Ask whether prescription antiviral treatment could be appropriate",
                "detail": "Ask promptly because timing, diagnosis, age, pregnancy, conditions, and medicines matter."
              },
              {
                "id": "cold-flu-q-medicine",
                "title": "Ask which fever, cough, pain, or congestion products are safe",
                "detail": "Review active ingredients, chronic conditions, pregnancy, age, and current medicines."
              },
              {
                "id": "cold-flu-q-urgent",
                "title": "Ask which symptoms require same-day or urgent assessment",
                "detail": "Use a clinician-provided plan for breathing symptoms, dehydration, fever, worsening disease, or immune suppression."
              }
            ],
            "labs": [
              {
                "id": "cold-flu-test-respiratory",
                "title": "Discuss respiratory infection testing",
                "detail": "A clinician may consider influenza, COVID-19, RSV, or other testing based on timing, risk, and local circulation."
              },
              {
                "id": "cold-flu-test-complications",
                "title": "Discuss tests for complications when indicated",
                "detail": "Oxygen measurement, chest evaluation, blood tests, or other studies depend on severity and examination findings."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
          "editorialSourceIds": [
            "CDC_FLU_SIGNS",
            "CDC_FLU_CARE",
            "CDC_RESPIRATORY_PREVENTION",
            "CDC_RESPIRATORY_HYGIENE"
          ],
          "relatedIds": [
            "immunity",
            "breathing-allergy-emergency",
            "bleeding-dehydration-emergency",
            "asthma",
            "diabetes",
            "cancer-treatment"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "antiviral selection and timing",
              "testing criteria",
              "fever thresholds",
              "child and pregnancy instructions",
              "over-the-counter product selection and doses",
              "isolation duration",
              "mask or respirator guidance",
              "emergency actions"
            ]
          }
        },
        {
          "id": "gastroenteritis",
          "title": "Vomiting / diarrhea",
          "subtitle": "Fluid loss, symptom patterns, food tolerance, medicine safety, and warning signs.",
          "body": [
            "What it means — Vomiting is forceful emptying of stomach contents. Diarrhea means loose or watery stools that occur more often than usual. They can happen together or separately.",
            "Common patterns — Record when symptoms started, how often they occur, whether liquids stay down, stool appearance, abdominal pain, fever, recent food or travel, sick contacts, and anyone else who became ill.",
            "Possible causes — Short-term causes include viral gastroenteritis, foodborne illness, medicine effects, alcohol, migraine, pregnancy, or another acute illness. Persistent or repeated symptoms may involve food intolerance, digestive disease, diabetes, or other conditions.",
            "Dehydration risk — Vomiting and diarrhea can remove water and electrolytes. Thirst, dry mouth, darker or reduced urine, dizziness, weakness, or increasing sleepiness may signal dehydration.",
            "Fluid support — Use frequent small sips when larger drinks trigger nausea. Oral rehydration products may be more suitable than plain water when fluid and electrolyte losses are substantial; the right product and amount depend on age, health conditions, and severity.",
            "Food tolerance — Fasting or a fixed restrictive diet is not routinely required. As appetite returns, use small portions of familiar foods and gradually return to a varied eating pattern while noting foods that clearly worsen symptoms.",
            "Medicine safety — Antibiotics, metformin, magnesium-containing products, laxatives, cancer treatments, and other medicines can contribute. Do not stop prescription medicines independently; ask for a written sick-day and missed-dose plan.",
            "Monitoring — Track fluid intake, urine pattern, temperature, glucose when relevant, symptom frequency, blood or black stool, pain, and whether usual medicines can be kept down.",
            "Tests to discuss — Depending on duration and severity, a clinician may consider examination, blood tests for dehydration or organ function, stool testing, pregnancy testing, or evaluation for another digestive condition.",
            "Seek urgent care if — There is blood or coffee-ground material in vomit, black or bloody stool, severe or worsening abdominal pain, a swollen rigid abdomen, fainting, confusion, severe dehydration, repeated inability to keep liquids down, breathing difficulty, or rapidly worsening symptoms."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "gastro-food-small-sips",
                "title": "Use small, frequent sips",
                "detail": "Record which fluids stay down. Ask whether an oral rehydration product is appropriate when losses are more than mild."
              },
              {
                "id": "gastro-food-small-meals",
                "title": "Restart with small familiar meals",
                "detail": "Use foods that are normally tolerated and expand variety as appetite returns instead of remaining on a narrow diet without clinical advice."
              },
              {
                "id": "gastro-food-trigger-log",
                "title": "Note foods and drinks that worsen symptoms",
                "detail": "Record timing rather than permanently excluding broad food groups after one episode."
              }
            ],
            "helpfulTasks": [
              {
                "id": "gastro-task-frequency",
                "title": "Track vomiting and stool frequency",
                "detail": "Include start time, appearance, blood, pain, fever, and whether symptoms are improving or worsening."
              },
              {
                "id": "gastro-task-hydration",
                "title": "Track hydration signs",
                "detail": "Record thirst, mouth dryness, urine frequency and color, dizziness, weakness, and alertness."
              },
              {
                "id": "gastro-task-exposures",
                "title": "Record recent exposures",
                "detail": "Note travel, restaurant meals, unsafe water, sick contacts, antibiotics, new medicines, pregnancy possibility, and similar illness in others."
              },
              {
                "id": "gastro-task-sick-day-list",
                "title": "Prepare the medicine sick-day list",
                "detail": "List diabetes, blood-pressure, kidney, diuretic, anti-inflammatory, and other medicines that may need individualized instructions during dehydration."
              }
            ],
            "questions": [
              {
                "id": "gastro-q-rehydration",
                "title": "Which fluid or oral rehydration option fits my situation?",
                "detail": "Ask about age, pregnancy, diabetes, kidney, heart, liver, and electrolyte considerations."
              },
              {
                "id": "gastro-q-medicines",
                "title": "Which medicines should I continue, pause, or review during vomiting or diarrhea?",
                "detail": "Use a clinician-approved sick-day plan rather than making changes independently."
              },
              {
                "id": "gastro-q-food",
                "title": "How should I return to usual meals?",
                "detail": "Ask whether any temporary food changes are needed and when to restore normal variety."
              },
              {
                "id": "gastro-q-review",
                "title": "When do duration, fever, pain, or stool changes require medical review?",
                "detail": "Clarify the plan for persistent symptoms, worsening symptoms, or high-risk household members."
              }
            ],
            "labs": [
              {
                "id": "gastro-lab-electrolytes",
                "title": "Electrolytes and kidney function to discuss",
                "detail": "These may be considered when dehydration is significant, symptoms persist, or kidney, heart, diabetes, or medicine risks are present."
              },
              {
                "id": "gastro-lab-stool",
                "title": "Stool testing to discuss",
                "detail": "Testing depends on duration, blood, fever, travel, immune status, outbreak concerns, and recent antibiotic use."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_06_DIGESTIVE_SUPPORT",
          "editorialSourceIds": [
            "NIDDK_DIARRHEA_DEFINITION",
            "NIDDK_DIARRHEA_CAUSES",
            "NIDDK_DIARRHEA_TREATMENT",
            "NIDDK_DIARRHEA_DIET",
            "NIDDK_VIRAL_GASTROENTERITIS_CAUSES",
            "NIDDK_VIRAL_GASTROENTERITIS_TREATMENT",
            "MEDLINEPLUS_NAUSEA_VOMITING_ADULTS",
            "MEDLINEPLUS_DEHYDRATION",
            "CDC_FOOD_SAFETY_REHYDRATION"
          ],
          "relatedIds": [
            "hydration-support",
            "meal-tolerance",
            "digestive-medicine-review",
            "constipation",
            "diabetes",
            "glucose-emergency"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "oralRehydrationAmounts",
              "medicineSickDayRules",
              "antidiarrhealUse",
              "antiemeticUse",
              "tests",
              "pregnancyAndChildGuidance",
              "redFlags",
              "emergencyInstructions"
            ]
          }
        },
        {
          "id": "constipation",
          "title": "Constipation",
          "subtitle": "Bowel pattern, stool form, fiber, fluids, movement, medicines, and warning signs.",
          "body": [
            "What it means — Constipation may involve fewer than three bowel movements a week, hard or lumpy stool, straining, painful passage, or a feeling that stool has not fully passed. Normal frequency differs between people.",
            "Common patterns — Symptoms may be short term or persistent. Bloating, abdominal discomfort, a change from the usual routine, or avoiding the bathroom because passing stool hurts may occur.",
            "Possible contributors — Low fiber intake, inadequate fluid intake, reduced movement, delaying the urge, travel, pregnancy, aging, pelvic-floor problems, diabetes, thyroid or neurologic conditions, and digestive disorders may contribute.",
            "Medicine and supplement links — Iron, calcium, opioid pain medicines, anticholinergic medicines, some antidepressants, anticonvulsants, and some antacids can contribute. Do not stop or change them without professional advice.",
            "Fiber support — Vegetables, fruit, oats, beans, lentils, nuts, seeds, and whole grains can increase fiber. Add fiber gradually because a rapid increase can worsen gas, bloating, or cramping.",
            "Fluid support — Suitable fluids help fiber work and may support stool softness. Heart, kidney, or liver disease, swallowing problems, pregnancy, and some medicines can require an individualized fluid plan.",
            "Movement and routine — Regular activity when safe, responding to the urge, allowing enough time, and trying a consistent bathroom routine may support bowel function.",
            "Treatment overview — A clinician or pharmacist can review whether a fiber product, osmotic laxative, stool-softening approach, stimulant, or another treatment is appropriate. Product choice and duration depend on the cause and health conditions.",
            "Monitoring and tests — A bowel diary and complete medicine list are often useful. Persistent, recurrent, or unexplained constipation may require examination, laboratory testing, imaging, colorectal evaluation, or pelvic-floor assessment depending on the history.",
            "Seek urgent care if — Constipation occurs with rectal bleeding, blood or black stool, constant or severe abdominal pain, inability to pass gas, repeated vomiting, fever, marked swelling, fainting, or unexplained weight loss."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "constipation-food-fiber",
                "title": "Increase fiber gradually",
                "detail": "Add vegetables, fruit, oats, beans, lentils, nuts, seeds, or whole grains in small steps and record symptoms."
              },
              {
                "id": "constipation-food-fluid",
                "title": "Pair higher fiber with suitable fluids",
                "detail": "Follow any fluid restriction or swallowing guidance given for heart, kidney, liver, or neurologic conditions."
              },
              {
                "id": "constipation-food-regular",
                "title": "Use regular meals when possible",
                "detail": "Eating can stimulate bowel activity; a repeatable meal and bathroom routine may help some people."
              },
              {
                "id": "constipation-food-review",
                "title": "Review foods before using a restrictive diet",
                "detail": "Avoid removing broad food groups unless a clear trigger or clinical reason has been identified."
              }
            ],
            "helpfulTasks": [
              {
                "id": "constipation-task-diary",
                "title": "Record bowel movements for seven days",
                "detail": "Note frequency, stool form, straining, pain, bleeding, bloating, urgency, and incomplete emptying."
              },
              {
                "id": "constipation-task-med-review",
                "title": "Review medicines and supplements",
                "detail": "List iron, calcium, pain medicines, antacids, antihistamines, bladder medicines, mood medicines, and all other products."
              },
              {
                "id": "constipation-task-fiber",
                "title": "Track fiber changes and symptoms",
                "detail": "Record foods added, approximate portions, fluid pattern, and whether gas, pain, or stool pattern changed."
              },
              {
                "id": "constipation-task-routine",
                "title": "Set a consistent bathroom routine",
                "detail": "Allow enough time, respond to the urge, and consider trying after a regular meal."
              },
              {
                "id": "constipation-task-movement",
                "title": "Add suitable movement",
                "detail": "Use walking or another safe activity unless symptoms or a medical condition limit exercise."
              }
            ],
            "questions": [
              {
                "id": "constipation-q-cause",
                "title": "Which factors are most likely contributing to my constipation?",
                "detail": "Discuss diet, fluids, activity, routine, medicines, supplements, pregnancy, and medical conditions."
              },
              {
                "id": "constipation-q-medicine",
                "title": "Could a medicine or supplement be causing this, and can the plan be adjusted safely?",
                "detail": "Do not stop prescription treatment, iron, or another supplement independently."
              },
              {
                "id": "constipation-q-treatment",
                "title": "Which short-term bowel treatment is appropriate for me?",
                "detail": "Ask about product type, duration, pregnancy, kidney function, medicines, and warning signs."
              },
              {
                "id": "constipation-q-review",
                "title": "When do persistent symptoms need examination or testing?",
                "detail": "Ask about the threshold for review and whether age, family history, anemia, bleeding, or weight loss changes the plan."
              }
            ],
            "labs": [
              {
                "id": "constipation-lab-blood",
                "title": "Blood tests to discuss",
                "detail": "Testing may be considered when thyroid, calcium, anemia, diabetes, kidney function, or another medical contributor is suspected."
              },
              {
                "id": "constipation-lab-evaluation",
                "title": "Further bowel evaluation to discuss",
                "detail": "Imaging, endoscopy, colorectal screening, or pelvic-floor testing depends on symptoms, examination, age, history, and warning signs."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_06_DIGESTIVE_SUPPORT",
          "additionalResearchBatches": [
            "BATCH_01_ENERGY_IRON"
          ],
          "editorialSourceIds": [
            "NIDDK_CONSTIPATION_DEFINITION",
            "NIDDK_CONSTIPATION_CAUSES",
            "NIDDK_CONSTIPATION_TREATMENT",
            "NIDDK_CONSTIPATION_DIET",
            "MEDLINEPLUS_DIETARY_FIBER",
            "MEDLINEPLUS_CONSTIPATION_SELFCARE"
          ],
          "relatedIds": [
            "fiber-support",
            "hydration-support",
            "digestive-medicine-review",
            "iron-supplement",
            "exercise-start-small",
            "gastroenteritis"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "fiberTargets",
              "fluidTargets",
              "laxatives",
              "tests",
              "pregnancyAndChildGuidance",
              "redFlags",
              "emergencyInstructions"
            ]
          }
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
          "subtitle": "A group of conditions in which blood glucose remains too high because the body does not make enough insulin, does not use insulin effectively, or both.",
          "body": [
            "What diabetes is — Glucose is an important energy source. Insulin helps glucose move from the blood into cells. Diabetes develops when this system cannot keep glucose in a healthy range.",
            "Main types — In type 1 diabetes, the immune system destroys insulin-producing cells and insulin is required. In type 2 diabetes, insulin resistance and reduced insulin production develop over time. Gestational diabetes begins during pregnancy. Other forms can result from genetic conditions, pancreatic disease, or medicines.",
            "Common symptoms — Frequent urination, increased thirst or hunger, unexplained weight loss, fatigue, blurred vision, slow healing, or repeated infections can occur. Type 2 diabetes may cause no obvious symptoms for years.",
            "Why diagnosis requires testing — Home meter or sensor readings can identify a pattern but do not by themselves establish a diagnosis. Laboratory testing and clinical context are used to confirm diabetes and its type.",
            "Risk and cause discussion — Family history, age, pregnancy history, body composition, activity, sleep, medicines, pancreatic disease, and other factors may affect risk. Type 1 diabetes is not caused by eating sugar.",
            "Expected course — Diabetes is a long-term condition. Glucose needs can change with growth, pregnancy, illness, stress, activity, food intake, kidney function, and medicine changes.",
            "Possible complications — Persistently high glucose can damage blood vessels and nerves and increase the risk of heart, kidney, eye, foot, dental, infection, and pregnancy problems. Severe low or high glucose can cause immediate emergencies.",
            "Home support — Use the agreed monitoring plan, take medicines as prescribed, build regular meals, stay active safely, protect sleep, inspect feet, attend eye and dental care, and keep a sick-day and emergency plan.",
            "Treatment overview — Education, food planning, activity, glucose monitoring, tablets, injectable medicines, insulin, or devices may be used. Treatment depends on diabetes type, other conditions, pregnancy, preferences, access, and response.",
            "Monitoring — HbA1c, glucose records, blood pressure, cholesterol, kidney function, urine albumin, eye health, foot health, dental health, vaccines, and medicine effects may be reviewed at different intervals.",
            "Seek urgent review if — Glucose is repeatedly outside the agreed range, lows are recurring, illness disrupts food or fluids, ketones are present, or insulin delivery is uncertain.",
            "Seek emergency help if — There is seizure, loss of consciousness, inability to swallow, severe confusion, deep or rapid breathing, repeated vomiting, fruity-smelling breath, severe dehydration, or rapidly worsening illness."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "diabetes-food-plate",
                "title": "Build a balanced diabetes plate",
                "detail": "Use non-starchy vegetables for about half the plate, a protein source for one quarter, and a suitable carbohydrate food for one quarter, then individualize portions."
              },
              {
                "id": "diabetes-food-carbs",
                "title": "Track carbohydrate timing and portions",
                "detail": "Compare similar meals with glucose patterns rather than labeling all carbohydrate foods as forbidden."
              },
              {
                "id": "diabetes-food-drinks",
                "title": "Make water the default drink",
                "detail": "Limit frequent sugar-sweetened drinks unless they are being used in an approved low-glucose treatment plan."
              },
              {
                "id": "diabetes-food-fiber",
                "title": "Choose higher-fiber carbohydrate foods more often",
                "detail": "Beans, lentils, whole grains, vegetables, and whole fruit can support meal quality when portions fit the treatment plan."
              }
            ],
            "helpfulTasks": [
              {
                "id": "diabetes-task-glucose",
                "title": "Track glucose using the agreed schedule",
                "detail": "Record timing, meals, activity, symptoms, illness, and medicines so readings can be interpreted in context."
              },
              {
                "id": "diabetes-task-sickday",
                "title": "Prepare a written sick-day plan",
                "detail": "Include monitoring, fluids, ketones when relevant, medicine instructions, and contact thresholds."
              },
              {
                "id": "diabetes-task-lowhigh",
                "title": "Prepare written low- and high-glucose plans",
                "detail": "Keep the action steps with supplies and share them with family, school, work, or caregivers when appropriate."
              },
              {
                "id": "diabetes-task-foot",
                "title": "Inspect feet regularly",
                "detail": "Look for cuts, blisters, redness, swelling, temperature change, or reduced sensation and report concerns promptly."
              },
              {
                "id": "diabetes-task-visits",
                "title": "Review the diabetes care schedule",
                "detail": "Check which eye, kidney, foot, dental, vaccine, blood pressure, cholesterol, and laboratory reviews are due."
              },
              {
                "id": "diabetes-task-medicines",
                "title": "Keep an accurate medicine and device list",
                "detail": "Include insulin types, doses in the clinical record, tablets, injections, supplements, meters, sensors, pumps, and allergies."
              }
            ],
            "questions": [
              {
                "id": "diabetes-q-type",
                "title": "What type of diabetes do I have, and is the cause clear?",
                "detail": "Ask whether additional testing or history is needed when the pattern is atypical."
              },
              {
                "id": "diabetes-q-targets",
                "title": "What are my personal glucose and HbA1c targets?",
                "detail": "Targets vary with age, pregnancy, complications, other conditions, and hypoglycemia risk."
              },
              {
                "id": "diabetes-q-monitoring",
                "title": "When should I check glucose, and how should I use the results?",
                "detail": "Ask how food, activity, illness, and medicines should be recorded."
              },
              {
                "id": "diabetes-q-lowhigh",
                "title": "What are my written plans for low and high glucose?",
                "detail": "Ask for exact action and emergency thresholds rather than relying on general internet advice."
              },
              {
                "id": "diabetes-q-complications",
                "title": "Which complication checks are due?",
                "detail": "Review kidney, eye, foot, dental, cardiovascular, nerve, and pregnancy-related care."
              },
              {
                "id": "diabetes-q-education",
                "title": "Would diabetes self-management education or dietitian support help?",
                "detail": "Ask about local or remote programs that fit language, culture, cost, and daily routine."
              }
            ],
            "labs": [
              {
                "id": "diabetes-lab-a1c",
                "title": "HbA1c",
                "detail": "Shows an estimated average glucose pattern over about three months, with important limitations."
              },
              {
                "id": "diabetes-lab-glucose",
                "title": "Fasting, random, or oral glucose testing",
                "detail": "The clinician selects the appropriate laboratory method for diagnosis or follow-up."
              },
              {
                "id": "diabetes-lab-kidney",
                "title": "Kidney function and urine albumin",
                "detail": "These help assess kidney health and medicine safety when appropriate."
              },
              {
                "id": "diabetes-lab-lipid",
                "title": "Lipid profile and blood pressure review",
                "detail": "Diabetes care includes cardiovascular risk, not glucose alone."
              },
              {
                "id": "diabetes-lab-eyefoot",
                "title": "Dilated eye examination and structured foot assessment",
                "detail": "The schedule depends on diabetes type, duration, pregnancy, symptoms, and previous findings."
              },
              {
                "id": "diabetes-lab-type",
                "title": "Tests that clarify diabetes type",
                "detail": "Autoantibodies, C-peptide, genetic testing, or pancreatic evaluation may be discussed when clinically indicated."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_03_DIABETES_GLUCOSE",
          "editorialSourceIds": [
            "NIDDK_DIABETES_OVERVIEW",
            "NIDDK_DIABETES_SYMPTOMS_CAUSES",
            "NIDDK_DIABETES_TESTS_DIAGNOSIS",
            "NIDDK_MANAGING_DIABETES",
            "CDC_DIABETES_BASICS"
          ],
          "relatedIds": [
            "low-sugar-symptoms",
            "high-sugar-symptoms",
            "diabetes-diet",
            "sugar-range",
            "hba1c",
            "metformin",
            "insulin",
            "glucose-emergency"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "diagnostic thresholds",
              "screening intervals",
              "complication screening schedule",
              "pregnancy and child guidance",
              "sick-day instructions",
              "emergency instructions",
              "treatment selection"
            ]
          }
        },
        {
          "id": "hypertension",
          "title": "Hypertension",
          "subtitle": "A repeated pattern of high blood pressure that often causes no symptoms but can damage the heart, brain, kidneys, eyes, and blood vessels over time.",
          "body": [
            "What it is — Blood pressure is the force of blood against artery walls. Hypertension means the pressure is repeatedly above the healthy range, not simply high during one stressful moment.",
            "Symptoms — Most people with hypertension feel no warning symptoms. Headache, dizziness, or tiredness have many causes and cannot confirm or exclude high blood pressure.",
            "How it develops — Primary hypertension usually develops from multiple influences such as age, family history, diet, activity, body weight, sleep, alcohol, tobacco, and other long-term factors.",
            "Secondary causes — Kidney disease, sleep apnea, endocrine conditions, pregnancy-related disorders, some medicines, stimulants, decongestants, pain relievers, hormonal products, supplements, and substances can contribute.",
            "Why the cause and pattern matter — Correct cuff size, repeated measurements, home or ambulatory readings, medicine history, and examination help separate persistent hypertension from temporary or setting-related elevation.",
            "Possible complications — Uncontrolled hypertension raises the risk of stroke, heart attack, heart failure, kidney disease, vision damage, cognitive problems, and other vascular complications.",
            "Home support — Use correct measurement technique, follow the requested monitoring schedule, use a DASH-style food pattern when appropriate, move regularly, protect sleep, avoid tobacco, and review alcohol and sodium.",
            "Treatment overview — Some people improve with lifestyle changes, while many need one or more medicines. Treatment choice depends on the blood-pressure pattern, overall cardiovascular risk, kidney function, pregnancy, side effects, and other conditions.",
            "Monitoring — Review home readings, symptoms, adherence, side effects, kidney function, electrolytes, urine albumin, glucose or HbA1c, cholesterol, and evidence of related conditions as clinically appropriate.",
            "Questions for the clinician — Ask about the personal target, confirmation method, possible causes, medicine class, monitoring schedule, side effects, pregnancy plans, and what counts as urgent.",
            "Red flags — Chest pain, severe breathing difficulty, sudden weakness or numbness, trouble speaking, severe headache, confusion, seizure, fainting, or vision change with a very high reading can signal an emergency. Pregnancy and postpartum warning signs need urgent assessment."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "hypertension-food-dash",
                "title": "Use a DASH-style eating pattern",
                "detail": "Emphasize vegetables, fruit, whole grains, beans, suitable dairy, fish or poultry, and unsalted nuts while reducing sodium-heavy processed foods."
              },
              {
                "id": "hypertension-food-labels",
                "title": "Compare sodium in packaged foods and sauces",
                "detail": "Check serving size and sodium per serving before choosing a practical substitute."
              },
              {
                "id": "hypertension-food-potassium",
                "title": "Discuss potassium-rich foods and salt substitutes",
                "detail": "Kidney disease and some blood-pressure medicines can make excess potassium unsafe."
              }
            ],
            "helpfulTasks": [
              {
                "id": "hypertension-task-technique",
                "title": "Review blood-pressure measurement technique",
                "detail": "Check device validation, cuff size, posture, rest, arm support, and no talking."
              },
              {
                "id": "hypertension-task-log",
                "title": "Keep the requested blood-pressure log",
                "detail": "Record readings, pulse, symptoms, medicine timing, sleep, pain, stress, caffeine, nicotine, alcohol, and activity."
              },
              {
                "id": "hypertension-task-medlist",
                "title": "Prepare a complete medicine and supplement list",
                "detail": "Include over-the-counter pain relievers, decongestants, stimulants, hormonal products, herbal products, and salt substitutes."
              },
              {
                "id": "hypertension-task-risk",
                "title": "List related health conditions and family history",
                "detail": "Include kidney disease, diabetes, cholesterol, heart disease, stroke, sleep apnea, pregnancy complications, and early cardiovascular disease."
              },
              {
                "id": "hypertension-task-actionplan",
                "title": "Write down routine, urgent, and emergency instructions",
                "detail": "Keep personal targets separate from emergency symptoms and local contact information."
              }
            ],
            "questions": [
              {
                "id": "hypertension-q-target",
                "title": "What blood-pressure target is appropriate for me?",
                "detail": "Ask whether the target differs at home and in the clinic."
              },
              {
                "id": "hypertension-q-confirm",
                "title": "How will the diagnosis or control pattern be confirmed?",
                "detail": "Ask about repeat office readings, home monitoring, or ambulatory monitoring."
              },
              {
                "id": "hypertension-q-cause",
                "title": "Could another condition, medicine, supplement, or substance be contributing?",
                "detail": "Review sleep apnea, kidney disease, pregnancy, pain medicines, decongestants, stimulants, hormones, and herbal products."
              },
              {
                "id": "hypertension-q-treatment",
                "title": "Which treatment options fit my overall risk and conditions?",
                "detail": "Ask how lifestyle, medicine classes, side effects, kidney function, and pregnancy plans affect the choice."
              },
              {
                "id": "hypertension-q-urgent",
                "title": "Which readings or symptoms require same-day or emergency care?",
                "detail": "Request a written, individualized plan."
              }
            ],
            "labs": [
              {
                "id": "hypertension-lab-kidney",
                "title": "Kidney function and electrolytes",
                "detail": "These may help assess related disease and medicine safety."
              },
              {
                "id": "hypertension-lab-urine",
                "title": "Urine albumin or protein assessment",
                "detail": "A clinician decides whether kidney-damage screening is appropriate."
              },
              {
                "id": "hypertension-lab-glucose",
                "title": "Glucose or HbA1c",
                "detail": "Diabetes and hypertension commonly affect cardiovascular and kidney risk together."
              },
              {
                "id": "hypertension-lab-lipids",
                "title": "Lipid profile",
                "detail": "Cholesterol results help assess overall cardiovascular risk."
              },
              {
                "id": "hypertension-lab-ecg",
                "title": "Heart assessment such as an electrocardiogram",
                "detail": "A clinician decides whether symptoms, examination, or history make this useful."
              },
              {
                "id": "hypertension-lab-secondary",
                "title": "Tests for a secondary cause",
                "detail": "Selected hormone, sleep, kidney, vascular, or medicine-related evaluation depends on the history and pattern."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_04_BLOOD_PRESSURE",
          "editorialSourceIds": [
            "NHLBI_HIGH_BP_OVERVIEW",
            "CDC_HIGH_BP_ABOUT",
            "NHLBI_HIGH_BP_DIAGNOSIS",
            "NHLBI_HIGH_BP_TREATMENT",
            "CDC_HIGH_BP_RISK_FACTORS",
            "CDC_MANAGING_HIGH_BP"
          ],
          "relatedIds": [
            "bp-range",
            "bp-home-monitoring",
            "hypertension-diet",
            "bp-lifestyle",
            "bp-meds",
            "hypertension-emergency",
            "sleep-apnea",
            "diabetes",
            "heart-disease"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "numeric diagnostic criteria",
              "individual targets",
              "secondary-hypertension workup",
              "pregnancy and postpartum wording",
              "child guidance",
              "urgent and emergency instructions"
            ]
          }
        },
        {
          "id": "cholesterol",
          "title": "High cholesterol",
          "subtitle": "High LDL cholesterol and other unhealthy lipid patterns can increase cardiovascular risk, usually without causing symptoms.",
          "body": [
            "What it is — Cholesterol is a waxy substance the body needs. It travels in the blood inside lipoproteins. A problem develops when LDL cholesterol or another atherogenic lipid pattern raises the chance of plaque building up in arteries.",
            "Symptoms — High cholesterol usually causes no symptoms. A blood test is needed to find it. Chest pain, stroke symptoms, or leg pain with walking may reflect vascular disease rather than a sensation caused by cholesterol itself.",
            "The main measurements — A lipid profile may include total cholesterol, LDL cholesterol, HDL cholesterol, and triglycerides. Non-HDL cholesterol and selected additional tests may also be used in some risk assessments.",
            "Causes and risk factors — Genetics, age, dietary pattern, physical inactivity, tobacco exposure, diabetes, kidney disease, thyroid disease, liver disease, pregnancy, body composition, alcohol, and some medicines can affect lipid levels.",
            "Familial hypercholesterolemia — Very high LDL, high cholesterol from a young age, tendon or skin findings, or a family history of early heart disease may suggest an inherited condition. Healthy habits remain important, but medicine is often also needed.",
            "Why overall risk matters — The same LDL result can lead to different treatment discussions depending on prior heart or vascular disease, diabetes, kidney disease, blood pressure, smoking, age, family history, pregnancy, and other risk factors.",
            "Evaluation — Review the full lipid profile, previous results, family history, medicines and supplements, food pattern, activity, tobacco, alcohol, and conditions that can cause secondary cholesterol changes.",
            "Home support — Use a Mediterranean- or DASH-aligned eating pattern, replace some saturated fats with unsaturated fats, add soluble-fiber foods, move regularly when safe, avoid tobacco, protect sleep, and take prescribed treatment consistently.",
            "Treatment overview — Some people can improve risk with lifestyle changes alone. Others need a statin or another cholesterol-lowering medicine. The treatment decision is based on expected cardiovascular benefit, safety, preference, access, and response.",
            "Monitoring — Repeat lipid testing and review of adherence, side effects, risk factors, and treatment response should follow an individualized schedule. One result should not be interpreted without the clinical context.",
            "Red flags — High cholesterol itself is not an emergency symptom. Seek urgent care for chest pressure, severe breathlessness, fainting, sudden weakness or numbness, trouble speaking, or other possible heart-attack or stroke symptoms."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "cholesterol-food-mediterranean",
                "title": "Build a Mediterranean-style meal pattern",
                "detail": "Use vegetables, fruit, whole grains, beans, nuts, seeds, fish, and suitable plant oils while limiting highly processed foods and excess saturated fat."
              },
              {
                "id": "cholesterol-food-soluble-fiber",
                "title": "Add a repeatable soluble-fiber food",
                "detail": "Examples include oats, beans, lentils, barley, and selected fruit; increase fiber gradually when needed."
              },
              {
                "id": "cholesterol-food-fat-swap",
                "title": "Compare saturated and unsaturated fat sources",
                "detail": "Try a practical swap such as olive or canola oil, nuts, seeds, avocado, or fish in place of butter, fatty meat, or coconut oil when suitable."
              }
            ],
            "helpfulTasks": [
              {
                "id": "cholesterol-task-results",
                "title": "Collect previous cholesterol results",
                "detail": "Record dates, fasting status when known, total cholesterol, LDL, HDL, triglycerides, and treatment changes."
              },
              {
                "id": "cholesterol-task-family",
                "title": "Prepare a three-generation heart-health family history",
                "detail": "Include high cholesterol, early heart attack, stroke, sudden death, and known familial hypercholesterolemia."
              },
              {
                "id": "cholesterol-task-products",
                "title": "List medicines and supplements that may affect lipids or treatment",
                "detail": "Include prescriptions, hormones, steroids, retinoids, immune medicines, herbal products, and exact statin or cholesterol-medicine details."
              },
              {
                "id": "cholesterol-task-food",
                "title": "Track common fat and fiber choices for seven days",
                "detail": "Record oils, butter, meat, dairy, fried foods, restaurant meals, whole grains, beans, fruit, vegetables, nuts, and seeds without judging one meal."
              },
              {
                "id": "cholesterol-task-activity",
                "title": "Record current activity and any limiting symptoms",
                "detail": "Note walking, aerobic activity, strength work, sitting time, chest discomfort, breathlessness, dizziness, palpitations, and recovery."
              }
            ],
            "questions": [
              {
                "id": "cholesterol-q-risk",
                "title": "What is my overall cardiovascular risk?",
                "detail": "Ask how age, family history, blood pressure, diabetes, kidney disease, tobacco, pregnancy, and prior vascular disease affect the plan."
              },
              {
                "id": "cholesterol-q-target",
                "title": "What LDL reduction or target is appropriate for me?",
                "detail": "Ask whether the plan uses a target level, percentage reduction, or both."
              },
              {
                "id": "cholesterol-q-fh",
                "title": "Could familial hypercholesterolemia be present?",
                "detail": "Mention very high or lifelong LDL and relatives with early heart disease or sudden death."
              },
              {
                "id": "cholesterol-q-treatment",
                "title": "Would lifestyle changes, a statin, or another medicine provide meaningful benefit?",
                "detail": "Discuss expected benefit, side effects, interactions, pregnancy plans, cost, and alternatives."
              },
              {
                "id": "cholesterol-q-monitoring",
                "title": "When should the lipid profile be repeated?",
                "detail": "Ask for a written schedule after treatment or major lifestyle changes."
              }
            ],
            "labs": [
              {
                "id": "cholesterol-lab-lipid",
                "title": "Lipid profile",
                "detail": "Total cholesterol, LDL, HDL, and triglycerides are interpreted together and in context."
              },
              {
                "id": "cholesterol-lab-secondary",
                "title": "Tests for secondary causes when indicated",
                "detail": "Thyroid, glucose, kidney, liver, pregnancy, and medicine-related evaluation depend on the history."
              },
              {
                "id": "cholesterol-lab-risk",
                "title": "Selected additional cardiovascular-risk tests",
                "detail": "A clinician may discuss non-HDL cholesterol, apolipoprotein B, lipoprotein(a), or other testing for specific situations."
              },
              {
                "id": "cholesterol-lab-statin",
                "title": "Medicine-safety tests when clinically indicated",
                "detail": "The exact tests and timing depend on the product, symptoms, liver history, interactions, and treatment plan."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_05_CHOLESTEROL_HEART",
          "editorialSourceIds": [
            "NHLBI_BLOOD_CHOLESTEROL",
            "CDC_LDL_HDL_TRIGLYCERIDES",
            "CDC_CHOLESTEROL_TREATMENT",
            "CDC_FAMILIAL_HYPERCHOLESTEROLEMIA"
          ],
          "relatedIds": [
            "ldl",
            "mediterranean-heart-diet",
            "cholesterol-lifestyle",
            "statin",
            "heart-disease",
            "hypertension",
            "diabetes",
            "bp-range",
            "sugar-range"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "numeric lipid categories and treatment targets",
              "cardiovascular risk calculation and treatment thresholds",
              "familial hypercholesterolemia criteria and genetic testing",
              "child and adolescent screening or treatment",
              "pregnancy and breastfeeding guidance",
              "secondary-cause workup",
              "additional lipid and imaging tests",
              "urgent cardiovascular symptom wording"
            ]
          }
        },
        {
          "id": "sleep-apnea",
          "title": "Sleep apnea",
          "subtitle": "Breathing stops and restarts repeatedly during sleep, reducing sleep quality and sometimes lowering oxygen levels.",
          "body": [
            "What it is — Sleep apnea is a sleep-related breathing disorder. Obstructive sleep apnea occurs when the upper airway repeatedly narrows or closes. Central sleep apnea occurs when breathing signals are disrupted.",
            "Common clues during sleep — Loud frequent snoring, gasping, choking, breathing that starts and stops, restless sleep, or repeated waking may occur. A person may not know this unless someone else notices.",
            "Daytime clues — Morning headache, dry mouth, unrefreshing sleep, concentration problems, irritability, and excessive daytime sleepiness can occur. These symptoms are not specific to sleep apnea.",
            "Risk factors — Risk varies with airway anatomy, body weight, age, family history, alcohol, smoking, nasal blockage, some medical conditions, and some medicines. Children may have different signs and risk factors.",
            "Why assessment matters — Untreated sleep apnea can affect attention, behavior, driving safety, blood pressure, heart and blood-vessel health, and glucose regulation.",
            "What evaluation may involve — A clinician reviews symptoms, medical history, medicines, airway features, and daytime function. A home or laboratory sleep study may be used when appropriate.",
            "Treatment overview — Options may include positive airway pressure such as CPAP, an oral device, selected procedures, and management of contributing factors. The appropriate option depends on the type and severity.",
            "Using prescribed therapy — PAP benefits depend on regular use. Mask leak, dryness, congestion, pressure discomfort, or bloating should be reviewed rather than silently stopping treatment.",
            "Supportive actions — Maintain healthy sleep habits, avoid smoking, review alcohol and sedating substances, and follow individualized advice about activity, weight, and sleep position.",
            "Monitoring — Discuss symptom response, device data when available, residual sleepiness, blood pressure, and whether repeat testing or equipment adjustment is needed.",
            "Seek prompt review if — There is severe daytime sleepiness, near-miss driving, worsening breathing symptoms, treatment intolerance, or concern that breathing stops during sleep.",
            "Seek urgent help if — The person is difficult to wake, has severe breathing difficulty while awake, becomes confused, or develops blue or gray lips or skin. Emergency wording requires local clinical review."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "sleep-apnea-task-1",
                "title": "Avoid driving when dangerously sleepy",
                "detail": "Arrange safer transport and discuss severe daytime sleepiness promptly."
              },
              {
                "id": "sleep-apnea-task-2",
                "title": "Record snoring, gasping, and witnessed breathing pauses",
                "detail": "Ask a household member for observations when appropriate and safe."
              },
              {
                "id": "sleep-apnea-task-3",
                "title": "Track morning and daytime symptoms",
                "detail": "Record morning headache, dry mouth, unrefreshing sleep, dozing, concentration, and mood."
              },
              {
                "id": "sleep-apnea-task-4",
                "title": "Review prescribed PAP or device problems",
                "detail": "Note mask leak, dryness, congestion, pressure discomfort, bloating, or difficulty using treatment."
              },
              {
                "id": "sleep-apnea-task-5",
                "title": "Prepare a medicine, alcohol, and sedative review",
                "detail": "Include prescription medicines, over-the-counter sleep aids, supplements, and substance use."
              }
            ],
            "questions": [
              {
                "id": "sleep-apnea-q-1",
                "title": "Do my symptoms justify a sleep study?",
                "detail": "Ask whether home testing or a laboratory study is more appropriate for the pattern."
              },
              {
                "id": "sleep-apnea-q-2",
                "title": "What type and severity of sleep apnea is present?",
                "detail": "Ask how the result affects treatment options and follow-up."
              },
              {
                "id": "sleep-apnea-q-3",
                "title": "Which treatment options fit my situation?",
                "detail": "Discuss PAP, oral devices, procedures, position, weight-related care, and contributing conditions."
              },
              {
                "id": "sleep-apnea-q-4",
                "title": "How should treatment response be monitored?",
                "detail": "Ask about symptoms, device data, repeat testing, equipment checks, and persistent sleepiness."
              }
            ],
            "labs": [
              {
                "id": "sleep-apnea-lab-1",
                "title": "Home or laboratory sleep study",
                "detail": "A clinician selects testing based on symptoms, medical history, and the possibility of other sleep disorders."
              },
              {
                "id": "sleep-apnea-lab-2",
                "title": "Oxygen and breathing assessment during sleep",
                "detail": "Measurements are interpreted as part of a complete sleep evaluation."
              },
              {
                "id": "sleep-apnea-lab-3",
                "title": "Cardiometabolic risk review",
                "detail": "Blood pressure, glucose, heart history, and other risks may be reviewed when clinically appropriate."
              },
              {
                "id": "sleep-apnea-lab-4",
                "title": "PAP download or equipment review",
                "detail": "For diagnosed sleep apnea, clinicians may review use, mask leak, pressure, and residual breathing events."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
          "editorialSourceIds": [
            "NHLBI_SLEEP_APNEA_OVERVIEW",
            "NHLBI_SLEEP_APNEA_SYMPTOMS",
            "NHLBI_SLEEP_APNEA_TREATMENT",
            "NHLBI_SLEEP_STUDIES"
          ],
          "relatedIds": [
            "sleep",
            "insomnia",
            "fatigue",
            "headache",
            "hypertension",
            "diabetes"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "emergency breathing wording",
              "driving-safety wording",
              "treatment selection",
              "PAP adverse-effect instructions",
              "sleep-study interpretation"
            ]
          }
        },
        {
          "id": "insomnia",
          "title": "Insomnia",
          "subtitle": "Difficulty falling asleep, staying asleep, or getting good-quality sleep despite enough time and an appropriate opportunity to sleep.",
          "body": [
            "What it is — Insomnia is a sleep disorder in which sleep difficulty affects daytime function even when there is enough time and a suitable environment for sleep.",
            "How it may feel — A person may take a long time to fall asleep, wake repeatedly, wake too early, or wake feeling unrefreshed. Daytime effects can include sleepiness, low energy, poor concentration, irritability, or worry about sleep.",
            "Patterns to notice — Record how often the problem occurs, how long it has lasted, workday and day-off schedules, naps, time awake in bed, and whether symptoms change with stress, travel, illness, pain, menopause, pregnancy, or shift work.",
            "Possible contributors — Stress, mood symptoms, pain, reflux, breathing problems, restless legs, medicines, caffeine, nicotine, alcohol, an irregular schedule, and another sleep disorder may contribute.",
            "Short-term and chronic patterns — Short-term insomnia may follow stress or schedule disruption. A clinician uses frequency, duration, and daytime impact to decide whether the pattern meets criteria for chronic insomnia.",
            "Safe observations — A one- to two-week sleep diary can help show bedtime, waking time, naps, caffeine or alcohol timing, exercise, medicine use, and daytime sleepiness.",
            "Supportive actions — Keep wake time steady, protect enough opportunity for sleep, use a quiet wind-down, and make the bedroom dark, quiet, and comfortably cool. These habits support sleep but do not replace assessment when symptoms persist.",
            "Treatment overview — Cognitive behavioral therapy for insomnia, often called CBT-I, is commonly recommended for long-term insomnia. Medicines or supplements require individualized review because benefits, risks, interactions, and next-day effects vary.",
            "Questions and tests to discuss — Ask whether another medical, mental-health, medicine, or sleep condition needs assessment. A sleep study is not automatically required for every insomnia pattern.",
            "Seek prompt review if — Sleep difficulty is persistent, is worsening, is linked to major mood change, causes dangerous daytime sleepiness, or occurs with snoring, gasping, breathing pauses, unusual nighttime behaviors, or severe pain.",
            "Seek urgent help if — There is severe breathing difficulty, inability to stay awake safely, sudden confusion, or thoughts of self-harm. Emergency wording requires local clinical review."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "insomnia-task-1",
                "title": "Keep a one- to two-week sleep diary",
                "detail": "Record sleep timing, time awake, naps, caffeine, alcohol, activity, medicines, and daytime effects."
              },
              {
                "id": "insomnia-task-2",
                "title": "Use a consistent wake time",
                "detail": "Keep workday and day-off timing reasonably close when possible."
              },
              {
                "id": "insomnia-task-3",
                "title": "Record time awake in bed",
                "detail": "Note whether worry, screens, pain, coughing, reflux, or leg discomfort is present."
              },
              {
                "id": "insomnia-task-4",
                "title": "Prepare a medicine and supplement review",
                "detail": "Include over-the-counter sleep aids, cold medicines, antihistamines, melatonin, caffeine, nicotine, and alcohol."
              },
              {
                "id": "insomnia-task-5",
                "title": "Avoid driving when dangerously sleepy",
                "detail": "Use safer transport and discuss severe daytime sleepiness promptly."
              }
            ],
            "questions": [
              {
                "id": "insomnia-q-1",
                "title": "What may be maintaining my insomnia?",
                "detail": "Ask about schedule, stress, pain, mood, breathing, restless legs, medicines, and substance use."
              },
              {
                "id": "insomnia-q-2",
                "title": "Would CBT-I be appropriate?",
                "detail": "Ask how to access an evidence-based program and how progress would be monitored."
              },
              {
                "id": "insomnia-q-3",
                "title": "Could another sleep disorder be contributing?",
                "detail": "Mention snoring, gasping, breathing pauses, leg sensations, unusual behaviors, or severe daytime sleepiness."
              },
              {
                "id": "insomnia-q-4",
                "title": "What are the risks and benefits of any proposed medicine or supplement?",
                "detail": "Ask about next-day impairment, interactions, pregnancy, older age, falls, and how long it would be used."
              }
            ],
            "labs": [
              {
                "id": "insomnia-lab-1",
                "title": "Clinical sleep history and physical examination",
                "detail": "A clinician decides which assessment is appropriate based on the pattern and associated symptoms."
              },
              {
                "id": "insomnia-lab-2",
                "title": "Sleep study when another sleep disorder is suspected",
                "detail": "Testing may be discussed when symptoms suggest sleep apnea, sleep-related movement, unusual behaviors, or another condition."
              },
              {
                "id": "insomnia-lab-3",
                "title": "Targeted tests for contributing conditions",
                "detail": "Laboratory testing is individualized rather than routine for every insomnia pattern."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
          "editorialSourceIds": [
            "NHLBI_INSOMNIA_OVERVIEW",
            "NHLBI_INSOMNIA_DIAGNOSIS",
            "NHLBI_INSOMNIA_TREATMENT"
          ],
          "relatedIds": [
            "sleep",
            "sleep-apnea",
            "restless-legs",
            "headache",
            "asthma",
            "sleep-schedule",
            "sleep-wind-down",
            "sleep-environment",
            "sleep-daylight-activity",
            "sleep-food-caffeine"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "medicine and supplement treatment wording",
              "self-harm emergency wording",
              "driving-safety wording",
              "diagnostic thresholds"
            ]
          }
        },
        {
          "id": "restless-legs",
          "title": "Restless legs syndrome",
          "subtitle": "An urge to move the legs, usually with uncomfortable sensations, that begins or worsens at rest and is often worse in the evening or at night.",
          "body": [
            "What it is — Restless legs syndrome is a neurological and sleep-related movement condition. The urge to move usually appears during rest and may improve temporarily with movement.",
            "How it may feel — People may describe crawling, pulling, aching, tingling, itching, throbbing, or another hard-to-name sensation. Symptoms can affect one or both legs and sometimes other areas.",
            "Pattern to notice — The timing matters: symptoms are usually worse while sitting or lying down, are often stronger in the evening or at night, and improve at least partly with walking or stretching.",
            "Sleep and daytime effects — Symptoms can delay sleep, cause repeated waking, and contribute to daytime sleepiness, fatigue, poor concentration, or irritability.",
            "Possible contributors — RLS may occur without a clear cause or may be associated with low iron stores, pregnancy, kidney disease, nerve conditions, or medicines. A medication review is important.",
            "Safe observations — Record the sensation, body area, time of day, duration, effect of movement, sleep loss, pregnancy status, kidney history, iron history, and all medicines and supplements.",
            "Supportive actions — Regular sleep timing, moderate activity, stretching, massage, warm or cool packs, and reducing identified triggers may help some people. Response varies.",
            "Iron and supplements — Iron should be discussed only when assessment supports it. Unnecessary iron can be harmful, interacts with medicines, and is dangerous in overdose, especially for children.",
            "Treatment overview — Clinicians first address contributors and may consider non-drug or prescription options based on severity, pregnancy, kidney function, other conditions, and prior treatment.",
            "Monitoring — Track sleep disruption, daytime function, symptom frequency, medicine effects, and whether symptoms start earlier in the day, become stronger, or spread.",
            "Seek prompt review if — Symptoms are frequent, disrupt sleep, begin during pregnancy, occur with kidney disease, follow a medicine change, or worsen during treatment.",
            "Seek urgent help if — Leg symptoms occur with sudden one-sided swelling, redness, severe pain, weakness, loss of bladder or bowel control, chest pain, or shortness of breath; these patterns may have another cause."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "restless-legs-task-1",
                "title": "Track leg sensations for seven days",
                "detail": "Record timing, rest, movement relief, sleep disruption, caffeine, alcohol, and medicine use."
              },
              {
                "id": "restless-legs-task-2",
                "title": "Prepare a medicine and supplement list",
                "detail": "Include antihistamines, nausea medicines, antidepressants, antipsychotics, and any iron products."
              },
              {
                "id": "restless-legs-task-3",
                "title": "Record iron, pregnancy, and kidney history",
                "detail": "Bring prior laboratory results when available."
              },
              {
                "id": "restless-legs-task-4",
                "title": "Compare gentle movement and comfort measures",
                "detail": "Record whether walking, stretching, massage, or warm or cool packs change symptoms."
              }
            ],
            "supplements": [
              {
                "id": "restless-legs-supp-1",
                "title": "Discuss iron only after appropriate assessment",
                "detail": "Do not self-start high-dose iron; dosing and monitoring require clinical review."
              }
            ],
            "questions": [
              {
                "id": "restless-legs-q-1",
                "title": "Should iron status be assessed?",
                "detail": "Ask which tests and interpretation are appropriate for this pattern."
              },
              {
                "id": "restless-legs-q-2",
                "title": "Could a medicine or another condition be contributing?",
                "detail": "Review pregnancy, kidney disease, nerve symptoms, and the full medicine list."
              },
              {
                "id": "restless-legs-q-3",
                "title": "Which non-drug and prescription options fit my situation?",
                "detail": "Ask about benefits, side effects, interactions, and monitoring."
              },
              {
                "id": "restless-legs-q-4",
                "title": "How will worsening or augmentation be recognized?",
                "detail": "Ask what changes in timing, intensity, or body area should be reported."
              }
            ],
            "labs": [
              {
                "id": "restless-legs-lab-1",
                "title": "Ferritin and iron studies",
                "detail": "A clinician decides which iron tests are appropriate and interprets them with the full clinical picture."
              },
              {
                "id": "restless-legs-lab-2",
                "title": "Kidney function when indicated",
                "detail": "Testing depends on history, examination, and associated symptoms."
              },
              {
                "id": "restless-legs-lab-3",
                "title": "Medication review",
                "detail": "This includes prescription, over-the-counter, and supplement products."
              },
              {
                "id": "restless-legs-lab-4",
                "title": "Sleep assessment when the pattern is unclear",
                "detail": "A sleep study is not required for every case but may be discussed when another sleep disorder is possible."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
          "editorialSourceIds": [
            "NINDS_RESTLESS_LEGS",
            "NHLBI_SLEEP_STUDIES"
          ],
          "relatedIds": [
            "sleep",
            "insomnia",
            "iron-deficiency",
            "anemia",
            "iron-supplement",
            "fatigue"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "iron thresholds and dosing",
              "prescription treatment options",
              "pregnancy treatment",
              "augmentation wording",
              "urgent neurologic and vascular warning wording"
            ]
          }
        },
        {
          "id": "asthma",
          "title": "Asthma at night",
          "subtitle": "Nighttime cough, wheeze, chest tightness, or shortness of breath can interrupt sleep and may indicate that asthma control needs review.",
          "body": [
            "What it is — Asthma is a chronic condition in which the airways become inflamed and narrow. Nocturnal asthma is not a separate type; it describes asthma symptoms that occur or worsen at night.",
            "How it may feel — Cough, wheeze, chest tightness, shortness of breath, repeated waking, difficulty returning to sleep, or needing a reliever medicine during the night may occur.",
            "Why nighttime symptoms matter — Asthma symptoms that wake a person can be a sign of poor control, exposure to a trigger during sleep, incorrect inhaler use, missed controller treatment, or another condition.",
            "Possible nighttime contributors — Allergens in bedding or the room, smoke, infection, cold or dry air, reflux, nasal symptoms, medicine issues, and sleep apnea may contribute.",
            "Patterns to notice — Record the time symptoms begin, cough, wheeze, chest tightness, reliever use, peak flow if prescribed, room exposures, sleep position, reflux symptoms, and whether symptoms occur with exercise or illness.",
            "Home support — Follow the written asthma action plan, use medicines exactly as prescribed, check inhaler and spacer technique, reduce known triggers safely, and keep prescribed reliever medicine accessible.",
            "Treatment overview — Asthma treatment is individualized and may include controller and reliever medicines. Dosing changes require clinical review rather than app guidance.",
            "Monitoring — Review nighttime waking, reliever use, activity limits, missed work or school, flare-ups, inhaler technique, medicine access, and lung-function results when used.",
            "Tests to discuss — Spirometry, peak-flow monitoring, bronchodilator response, allergy assessment, or other tests may be considered based on age and the clinical pattern.",
            "Questions for the clinician — Ask whether asthma is controlled, whether the written action plan is current, whether inhaler technique is correct, and whether another condition is worsening sleep.",
            "Seek prompt review if — Night symptoms are recurring, reliever medicine is needed more often, activity is limited, peak flow falls below the action-plan range, or treatment is not working as expected.",
            "Seek urgent help if — Breathing remains very hard or prescribed reliever treatment is not relieving an attack. Confusion, unusual drowsiness, or blue or gray lips or skin are emergency signs."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "asthma-task-1",
                "title": "Check inhaler and spacer technique",
                "detail": "Ask a clinician or pharmacist to watch the full technique."
              },
              {
                "id": "asthma-task-2",
                "title": "Review the written asthma action plan",
                "detail": "Confirm what to do for worsening symptoms and when emergency care is needed."
              },
              {
                "id": "asthma-task-3",
                "title": "Track nighttime symptoms and reliever use",
                "detail": "Record cough, wheeze, waking, reliever use, and peak flow if prescribed."
              },
              {
                "id": "asthma-task-4",
                "title": "Review bedroom and evening triggers",
                "detail": "Note smoke, fragrances, pets, dust, mold, cold air, reflux, and respiratory infection symptoms."
              },
              {
                "id": "asthma-task-5",
                "title": "Prepare a complete medicine list",
                "detail": "Include inhalers, tablets, over-the-counter products, and medicines that may affect breathing or sleep."
              }
            ],
            "questions": [
              {
                "id": "asthma-q-1",
                "title": "Are nighttime symptoms showing poor asthma control?",
                "detail": "Ask how control is assessed and which changes should be reported."
              },
              {
                "id": "asthma-q-2",
                "title": "Is my inhaler and spacer technique correct?",
                "detail": "Demonstrate the technique rather than relying on verbal description alone."
              },
              {
                "id": "asthma-q-3",
                "title": "Is my asthma action plan current?",
                "detail": "Confirm medicine roles, monitoring zones, and emergency steps."
              },
              {
                "id": "asthma-q-4",
                "title": "Could reflux, allergy, infection, or sleep apnea be contributing?",
                "detail": "Discuss symptoms and timing rather than assuming one trigger."
              }
            ],
            "labs": [
              {
                "id": "asthma-lab-1",
                "title": "Spirometry or peak-flow testing",
                "detail": "A clinician selects and interprets lung-function testing based on age and the clinical pattern."
              },
              {
                "id": "asthma-lab-2",
                "title": "Bronchodilator response when indicated",
                "detail": "This may help assess reversible airflow limitation."
              },
              {
                "id": "asthma-lab-3",
                "title": "Allergy or inflammation assessment when relevant",
                "detail": "Testing depends on history, examination, and treatment decisions."
              },
              {
                "id": "asthma-lab-4",
                "title": "Oxygen assessment during severe symptoms",
                "detail": "This is part of urgent clinical evaluation rather than routine home interpretation."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
          "editorialSourceIds": [
            "NHLBI_ASTHMA_SYMPTOMS",
            "NHLBI_ASTHMA_ACTION_PLAN",
            "NHLBI_ASTHMA_ATTACK",
            "NHLBI_ASTHMA_DIAGNOSIS"
          ],
          "relatedIds": [
            "sleep",
            "sleep-apnea",
            "insomnia",
            "headache"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "emergency action wording",
              "medication and action-plan instructions",
              "peak-flow thresholds",
              "child-specific guidance",
              "pregnancy guidance"
            ]
          }
        },
        {
          "id": "depression",
          "title": "Depression",
          "subtitle": "A mood disorder that can cause persistent low mood or loss of interest and affect sleep, appetite, energy, thinking, and daily function.",
          "body": [
            "What it is — Depression is different from a brief period of sadness. It can cause significant symptoms that affect feelings, thoughts, relationships, self-care, work, school, sleep, eating, and usual responsibilities.",
            "Common symptoms — Low or empty mood, loss of interest or pleasure, irritability, hopelessness, guilt, low energy, slowed or restless movement, sleep change, appetite or weight change, poor concentration, physical aches, and thoughts of death or suicide may occur. People do not all show the same pattern.",
            "Patterns and duration — Record when symptoms started, whether they are present most days, whether there are symptom-free periods, and how much daily function has changed. Major depression is clinically assessed using the full symptom pattern, duration, and impairment; one symptom alone does not establish the diagnosis.",
            "Causes and risk factors — Genetic, biological, environmental, and psychological factors may contribute. Grief, trauma, isolation, chronic stress, chronic pain, major illness, pregnancy or postpartum changes, menopause, alcohol or drug use, and family history may change risk.",
            "Medical and medicine contributors — Thyroid disease, anemia, sleep disorders, neurologic conditions, hormonal changes, infections, nutritional problems, chronic disease, medicines, supplements, alcohol, and other substances can produce or worsen similar symptoms. Evaluation may include a medical review.",
            "Why finding the pattern matters — Depression can occur alone or with anxiety, substance-use problems, chronic illness, pain, or another mental-health condition. A history of unusually elevated mood, very little need for sleep, impulsivity, or marked overactivity should be reported because it can change assessment and treatment.",
            "Treatment overview — Treatment may include psychotherapy, medication, or both. The choice depends on severity, safety, previous response, preferences, pregnancy, age, other conditions, access, and side-effect risks. Treatment may take time and should be reviewed rather than changed independently.",
            "Supportive home actions — Keep routines small and realistic. Protect sleep opportunity, regular meals, hydration, safe movement, medication consistency, and contact with supportive people. These actions may support recovery but do not replace professional care.",
            "Monitoring — Track mood, interest, sleep, appetite, energy, concentration, agitation or slowing, substance use, treatment adherence, side effects, and ability to complete usual tasks. Record any new or increasing thoughts of death, suicide, or self-harm.",
            "Questions and tests to discuss — A clinician may review safety, symptom history, bipolar symptoms, trauma, substances, medicines, pregnancy or postpartum status, and medical contributors. Blood tests are selected from the clinical pattern rather than ordered automatically.",
            "Red flags — Thoughts of suicide, a plan or access to means, inability to stay safe, severe self-neglect, psychosis, extreme agitation, dangerous behavior, or immediate threat to another person require urgent help through local emergency or crisis services."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "depression-task-pattern",
                "title": "Track mood and function for two weeks",
                "detail": "Track mood, interest, sleep, appetite, energy, concentration, activity, social contact, substance use, and ability to complete usual tasks."
              },
              {
                "id": "depression-task-support",
                "title": "Prepare a regular support contact",
                "detail": "Arrange a predictable check-in with a trusted person, clinician, peer service, or community support."
              },
              {
                "id": "depression-task-routine",
                "title": "Add a minimum daily routine",
                "detail": "Choose a realistic wake time, meal pattern, hydration cue, basic hygiene step, and manageable activity."
              },
              {
                "id": "depression-task-med-list",
                "title": "Prepare a full medication and substance list",
                "detail": "Include prescriptions, over-the-counter products, supplements, caffeine, nicotine, alcohol, cannabis, and other substances."
              },
              {
                "id": "depression-task-history",
                "title": "Record previous mood and treatment history",
                "detail": "Note earlier episodes, unusually high-energy periods, previous therapy or medicines, benefits, side effects, and family history."
              },
              {
                "id": "depression-task-safety",
                "title": "Prepare a clinician-reviewed safety plan",
                "detail": "List personal warning signs, safe contacts, local urgent resources, and steps to reduce access to means when appropriate."
              },
              {
                "id": "depression-task-med-safety",
                "title": "Review psychiatric medicine safety with the prescriber",
                "detail": "Discuss side effects, missed doses, pregnancy, or concerns with the prescriber or pharmacist before making changes."
              }
            ],
            "questions": [
              {
                "id": "depression-q-diagnosis",
                "title": "Does the pattern fit depression or another condition?",
                "detail": "Ask how duration, impairment, grief, bipolar symptoms, trauma, anxiety, substances, sleep, and medical causes affect the assessment."
              },
              {
                "id": "depression-q-treatment",
                "title": "Which treatment options fit my symptoms and preferences?",
                "detail": "Ask about psychotherapy, medication, combined care, expected response, access, culture, language, pregnancy, and other health conditions."
              },
              {
                "id": "depression-q-safety",
                "title": "How should suicide and self-harm risk be monitored?",
                "detail": "Ask what changes require urgent help and what family or trusted contacts should do."
              },
              {
                "id": "depression-q-side-effects",
                "title": "Which treatment side effects or early changes should I report?",
                "detail": "Ask about worsening agitation, sleep changes, mood elevation, sexual side effects, nausea, bleeding risk, withdrawal, and other medicine-specific concerns."
              },
              {
                "id": "depression-q-medical",
                "title": "Could sleep, thyroid disease, anemia, pain, hormones, medicines, or substances be contributing?",
                "detail": "Bring the symptom record and complete product list."
              },
              {
                "id": "depression-q-followup",
                "title": "When should response and safety be reviewed?",
                "detail": "Ask how progress, function, side effects, and safety will be assessed over time."
              }
            ],
            "labs": [
              {
                "id": "depression-lab-assessment",
                "title": "Clinical depression and safety assessment",
                "detail": "A clinician reviews symptoms, duration, function, suicide risk, bipolar symptoms, psychosis, trauma, substances, and medical history."
              },
              {
                "id": "depression-lab-thyroid",
                "title": "Thyroid testing when clinically indicated",
                "detail": "Thyroid disease can contribute to mood, energy, sleep, and concentration symptoms."
              },
              {
                "id": "depression-lab-cbc",
                "title": "CBC or iron-related testing when clinically indicated",
                "detail": "Anemia or iron deficiency may contribute to fatigue, breathlessness, dizziness, or poor concentration."
              },
              {
                "id": "depression-lab-other",
                "title": "Other medical or substance-related tests when indicated",
                "detail": "Selection depends on symptoms, medicines, pregnancy, nutrition, infection risk, organ function, and examination."
              },
              {
                "id": "depression-lab-monitoring",
                "title": "Treatment-specific monitoring",
                "detail": "A clinician selects follow-up based on the medicine, therapy, age, pregnancy status, conditions, and side-effect risks."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_07_MOOD_STRESS",
          "editorialSourceIds": [
            "NIMH_DEPRESSION",
            "NIMH_CARING_MENTAL_HEALTH",
            "NIMH_SUICIDE_WARNING_SIGNS",
            "CDC_MENTAL_HEALTH_OVERVIEW"
          ],
          "relatedIds": [
            "happiness",
            "anxiety",
            "chronic-stress",
            "sleep",
            "insomnia",
            "fatigue",
            "anemia",
            "iron-deficiency",
            "wellbeing-connection",
            "wellbeing-movement",
            "wellbeing-foundations"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "suicide and self-harm emergency actions",
              "psychosis and severe self-neglect wording",
              "bipolar screening wording",
              "medication selection and monitoring",
              "withdrawal and discontinuation wording",
              "pregnancy and postpartum guidance",
              "child and adolescent guidance",
              "substance-use pathways",
              "laboratory and referral thresholds"
            ]
          }
        },
        {
          "id": "anxiety",
          "title": "Anxiety disorders",
          "subtitle": "Conditions involving persistent fear, worry, panic, or avoidance that become difficult to control and interfere with daily life.",
          "body": [
            "What anxiety means — Anxiety is a mental and physical response that can occur during uncertainty or threat. Temporary anxiety is common. An anxiety disorder is considered when fear or worry is persistent, excessive for the situation, difficult to control, or disruptive.",
            "How it may feel — Racing or repetitive thoughts, dread, restlessness, irritability, muscle tension, trembling, sweating, nausea, diarrhea, dizziness, fast heartbeat, chest discomfort, shortness of breath, poor sleep, difficulty concentrating, panic, or avoidance may occur.",
            "Patterns to notice — Record triggers, worries, physical symptoms, panic episodes, avoidance, reassurance seeking, sleep, caffeine, alcohol or drug use, medicines, menstrual or hormonal changes, and the effect on work, school, relationships, driving, or leaving home.",
            "Different anxiety patterns — Generalized anxiety, panic disorder, social anxiety, phobias, obsessive-compulsive disorder, trauma-related conditions, health anxiety, and anxiety linked to substances or medical illness require different assessment. The app does not assign a diagnosis from one symptom.",
            "Possible contributors — Genetics, stressful or traumatic experiences, chronic illness, pain, sleep loss, thyroid problems, heart or lung symptoms, low glucose, anemia, stimulant medicines, decongestants, caffeine, nicotine, alcohol withdrawal, and other substances may contribute.",
            "Medical symptoms still need evaluation — New chest pain, fainting, severe breathlessness, irregular heartbeat, one-sided weakness, new speech difficulty, severe headache, low glucose, or another acute change should not be assumed to be anxiety.",
            "Treatment overview — Psychotherapy, medication, or both may be used. Cognitive behavioral therapy is commonly used for anxiety disorders. The choice depends on the anxiety pattern, severity, safety, preferences, pregnancy, age, other conditions, and medicine risks.",
            "Supportive actions — Sleep, reduced excessive caffeine, regular meals, safe movement, social support, and relaxation practices may reduce symptoms for some people when used with appropriate care. Avoidance may provide short relief but can strengthen fear over time; exposure-based work should be planned with a qualified clinician when needed.",
            "Monitoring — Track frequency, duration, avoidance, panic, sleep, substances, physical symptoms, function, treatment response, and side effects. Note whether symptoms are improving, stable, or spreading into more areas of life.",
            "Red flags — Immediate danger, suicidal thoughts, inability to stay safe, severe confusion, psychosis, dangerous substance withdrawal, or acute physical symptoms require urgent assessment through local emergency or crisis services."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "anxiety-task-pattern",
                "title": "Track an anxiety pattern",
                "detail": "Track triggers, thoughts, body symptoms, panic, avoidance, duration, sleep, caffeine, substances, and effect on daily activities."
              },
              {
                "id": "anxiety-task-grounding",
                "title": "Compare one safe grounding or breathing method",
                "detail": "Use a brief method during rising anxiety and stop if it worsens dizziness, panic, trauma symptoms, or breathing difficulty."
              },
              {
                "id": "anxiety-task-caffeine",
                "title": "Track caffeine and stimulant timing",
                "detail": "Record coffee, tea, energy drinks, nicotine, decongestants, stimulant medicines, and workout products without changing prescribed treatment independently."
              },
              {
                "id": "anxiety-task-sleep",
                "title": "Compare sleep and anxiety patterns",
                "detail": "Compare bedtime worry, night waking, total sleep opportunity, daytime sleepiness, and next-day anxiety."
              },
              {
                "id": "anxiety-task-avoidance",
                "title": "Record activities anxiety is limiting",
                "detail": "Record avoided places, conversations, travel, work, school, exercise, medical care, or social contact."
              },
              {
                "id": "anxiety-task-med-list",
                "title": "Prepare a medication and substance list",
                "detail": "Include prescriptions, over-the-counter products, supplements, alcohol, cannabis, and other substances."
              },
              {
                "id": "anxiety-task-support",
                "title": "Prepare a support contact",
                "detail": "Identify who can help during a panic episode, appointment, exposure plan, or safety concern."
              }
            ],
            "questions": [
              {
                "id": "anxiety-q-pattern",
                "title": "Which anxiety pattern best fits and what else should be ruled out?",
                "detail": "Ask about generalized anxiety, panic, social anxiety, phobias, trauma, obsessive symptoms, substances, and medical contributors."
              },
              {
                "id": "anxiety-q-therapy",
                "title": "Which psychotherapy is appropriate?",
                "detail": "Ask about cognitive behavioral therapy, exposure-based approaches, acceptance-based therapy, trauma-informed care, and accessibility."
              },
              {
                "id": "anxiety-q-medication",
                "title": "What are the benefits and risks of medication options?",
                "detail": "Ask about expected timing, side effects, sedation, driving, dependence, withdrawal, alcohol, pregnancy, and interactions."
              },
              {
                "id": "anxiety-q-physical",
                "title": "Which physical symptoms need medical testing?",
                "detail": "Describe chest symptoms, fainting, breathlessness, palpitations, glucose changes, thyroid symptoms, anemia history, and neurologic changes."
              },
              {
                "id": "anxiety-q-sleep",
                "title": "Could sleep loss or a sleep disorder be worsening anxiety?",
                "detail": "Mention insomnia, snoring, gasping, restless legs, nightmares, and daytime sleepiness."
              },
              {
                "id": "anxiety-q-urgent",
                "title": "What changes require urgent help?",
                "detail": "Ask about suicidality, inability to function, severe panic, substance withdrawal, psychosis, and acute physical warning signs."
              }
            ],
            "labs": [
              {
                "id": "anxiety-lab-assessment",
                "title": "Clinical anxiety and safety assessment",
                "detail": "A clinician reviews the symptom pattern, duration, impairment, panic, avoidance, trauma, substances, mood symptoms, and safety."
              },
              {
                "id": "anxiety-lab-physical",
                "title": "Physical examination and targeted testing when indicated",
                "detail": "Testing may be considered for thyroid, glucose, anemia, heart rhythm, lung symptoms, medicines, substances, pregnancy, or other contributors."
              },
              {
                "id": "anxiety-lab-monitoring",
                "title": "Treatment-specific monitoring",
                "detail": "Follow-up depends on the therapy or medicine, side effects, driving or fall risk, pregnancy, age, and other conditions."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_07_MOOD_STRESS",
          "editorialSourceIds": [
            "NIMH_GAD",
            "NIMH_ANXIETY_OVERVIEW",
            "NIMH_STRESS_ANXIETY",
            "NIMH_CARING_MENTAL_HEALTH",
            "NCCIH_RELAXATION",
            "NIMH_SUICIDE_WARNING_SIGNS"
          ],
          "relatedIds": [
            "happiness",
            "depression",
            "chronic-stress",
            "sleep",
            "insomnia",
            "headache",
            "low-sugar-symptoms",
            "wellbeing-relaxation",
            "wellbeing-movement",
            "wellbeing-foundations"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "emergency differentiation from cardiac neurologic respiratory and glucose conditions",
              "suicide and self-harm wording",
              "panic and breathing instructions",
              "exposure-therapy wording",
              "benzodiazepine dependence and withdrawal wording",
              "medication selection and dosing",
              "pregnancy child and older-adult guidance",
              "substance withdrawal pathways",
              "test and referral thresholds"
            ]
          }
        },
        {
          "id": "chronic-stress",
          "title": "Chronic stress",
          "subtitle": "Long-lasting or repeated stress that begins to affect emotional health, physical symptoms, behavior, relationships, or daily function.",
          "body": [
            "What stress is — Stress is the brain and body response to a challenge or demand. Short-term stress can help a person react or focus. Chronic stress continues for a long period or returns so often that recovery time becomes limited.",
            "How it may feel — Worry, irritability, sadness, anger, numbness, feeling overwhelmed, poor concentration, indecision, muscle tension, headache, stomach symptoms, sleep problems, appetite change, fatigue, fast heartbeat, or reduced interest may occur.",
            "Common contexts — Work, caregiving, money, housing, discrimination, unsafe relationships, chronic illness, pain, grief, trauma, uncertainty, social isolation, legal problems, and repeated crises can contribute. Some stressors cannot be solved by individual coping skills alone.",
            "Stress versus anxiety — Stress often has an identifiable pressure. Anxiety may remain when no immediate threat is present. Persistent avoidance, panic, uncontrollable worry, or impairment may indicate an anxiety disorder and should be assessed.",
            "Patterns to notice — Record stressors, body symptoms, sleep, meals, movement, social contact, alcohol or drug use, coping responses, blood pressure or glucose when already clinically advised, and the effect on work, care, relationships, and safety.",
            "Health links — Ongoing stress can worsen sleep, headaches, digestive symptoms, pain, asthma, blood-pressure control, glucose management, depression, anxiety, and substance use. These symptoms still require appropriate medical evaluation rather than being attributed to stress automatically.",
            "Supportive actions — Reduce avoidable demands where possible, protect basic routines, use realistic goals, schedule recovery time, seek practical and social support, and try a safe relaxation practice. Workplace, financial, legal, housing, or safeguarding help may be more relevant than another self-care task.",
            "Treatment and support — Counseling, psychotherapy, support groups, social services, occupational resources, and treatment for depression, anxiety, trauma, sleep problems, substance use, or physical illness may be appropriate depending on the pattern.",
            "Monitoring — Watch for worsening function, more avoidance, increasing alcohol or drug use, dangerous driving, missed medicines or appointments, conflict, severe insomnia, panic, hopelessness, or symptoms that no longer improve after the stressor passes.",
            "Red flags — Immediate danger, abuse, suicidal thoughts, inability to stay safe, psychosis, severe confusion, dangerous substance withdrawal, or acute physical warning signs require urgent help through the appropriate local service."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "stress-task-map",
                "title": "Record current stressors and what is controllable",
                "detail": "Separate urgent safety needs, practical problems, responsibilities, and pressures that cannot be changed immediately."
              },
              {
                "id": "stress-task-symptoms",
                "title": "Track stress and body symptoms for seven days",
                "detail": "Record sleep, headache, digestion, pain, breathing, mood, concentration, appetite, substances, and daily function."
              },
              {
                "id": "stress-task-recovery",
                "title": "Add one repeatable recovery period",
                "detail": "Protect a brief time for movement, relaxation, prayer, music, nature, or another safe activity that is realistic."
              },
              {
                "id": "stress-task-priority",
                "title": "Prepare one next step and one task to delay",
                "detail": "Reduce overload by deciding what matters now and what can wait."
              },
              {
                "id": "stress-task-support",
                "title": "Prepare practical and emotional support options",
                "detail": "List people, workplace resources, financial or legal services, community organizations, or health professionals who may address the actual stressor."
              },
              {
                "id": "stress-task-substances",
                "title": "Track alcohol, nicotine, caffeine, cannabis, and other substance use",
                "detail": "Notice whether use is increasing or worsening sleep, anxiety, mood, blood pressure, glucose, or safety."
              },
              {
                "id": "stress-task-boundaries",
                "title": "Review one boundary or repeated demand",
                "detail": "Identify a request, interaction, or routine that needs a limit, delegation, or safeguarding discussion."
              }
            ],
            "questions": [
              {
                "id": "stress-q-medical",
                "title": "Which symptoms could be stress-related and which need medical evaluation?",
                "detail": "Ask about headache, chest symptoms, breathing, digestion, pain, sleep, blood pressure, glucose, and medicine effects."
              },
              {
                "id": "stress-q-mental",
                "title": "Could depression, anxiety, trauma, or another mental-health condition be contributing?",
                "detail": "Describe duration, avoidance, panic, low mood, hopelessness, intrusive memories, and functional change."
              },
              {
                "id": "stress-q-support",
                "title": "Which therapy, social, workplace, or community supports are available?",
                "detail": "Ask about practical resources as well as counseling."
              },
              {
                "id": "stress-q-sleep",
                "title": "How should sleep problems be assessed?",
                "detail": "Discuss insomnia, schedule, nightmares, snoring, gasping, restless legs, substances, and daytime function."
              },
              {
                "id": "stress-q-substance",
                "title": "How should increasing alcohol or drug use be addressed safely?",
                "detail": "Ask about withdrawal risk, treatment options, and urgent warning signs."
              },
              {
                "id": "stress-q-safety",
                "title": "What should I do if the situation becomes unsafe?",
                "detail": "Ask about abuse, violence, suicidal thoughts, severe agitation, psychosis, or inability to care for basic needs."
              }
            ],
            "labs": [
              {
                "id": "stress-lab-assessment",
                "title": "Clinical mental-health and safety assessment when indicated",
                "detail": "A clinician reviews stressors, function, depression, anxiety, trauma, substances, sleep, and immediate safety."
              },
              {
                "id": "stress-lab-medical",
                "title": "Targeted medical evaluation for physical symptoms",
                "detail": "Tests depend on the symptom pattern and may involve heart, lung, glucose, thyroid, anemia, pain, sleep, or medicine review."
              },
              {
                "id": "stress-lab-substance",
                "title": "Substance-use assessment when relevant",
                "detail": "Withdrawal and treatment planning require individualized clinical review."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_07_MOOD_STRESS",
          "editorialSourceIds": [
            "CDC_MANAGING_STRESS",
            "NIMH_STRESS_ANXIETY",
            "NIMH_CARING_MENTAL_HEALTH",
            "NCCIH_RELAXATION",
            "CDC_SOCIAL_CONNECTION",
            "CDC_MENTAL_HEALTH_OVERVIEW"
          ],
          "relatedIds": [
            "happiness",
            "depression",
            "anxiety",
            "sleep",
            "insomnia",
            "headache",
            "gastroenteritis",
            "hypertension",
            "diabetes",
            "asthma",
            "wellbeing-connection",
            "wellbeing-relaxation",
            "wellbeing-goals",
            "wellbeing-foundations"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "suicide abuse violence and safeguarding pathways",
              "substance withdrawal wording",
              "acute physical red-flag differentiation",
              "workplace and legal resource localization",
              "trauma-specific wording",
              "child pregnancy and older-adult adaptations",
              "test and referral thresholds"
            ]
          }
        },
        {
          "id": "immune-deficiency",
          "title": "Immune deficiency",
          "subtitle": "A problem in one or more parts of the immune system that can increase the risk of repeated, severe, unusual, or difficult-to-treat infections.",
          "body": [
            "What it is — Immune deficiency means part of the immune response does not work normally. The affected part may involve antibodies, immune cells, complement, barriers, or several systems.",
            "Primary and acquired forms differ — Primary immune deficiencies are usually linked to genetic changes. Acquired immune suppression can result from illness, malnutrition, medicines, cancer treatment, transplant treatment, or other causes.",
            "Infection patterns matter — Clinicians consider the number, type, severity, location, organism, treatment response, complications, and recovery time rather than counting ordinary colds alone.",
            "Possible clues — Repeated pneumonia or sinus infections, deep infections, unusual organisms, persistent fungal infection, poor growth, unexplained weight loss, chronic diarrhea, poor wound healing, or a strong family history may raise concern.",
            "Other conditions can look similar — Asthma, allergy, structural airway problems, diabetes, smoking exposure, swallowing problems, cystic fibrosis, and repeated community exposure can also cause frequent respiratory illness.",
            "Evaluation starts with a detailed history — Bring infection records, culture results, imaging, hospitalizations, antibiotics, vaccine history, family history, growth or weight changes, and a complete medicine list.",
            "Testing is targeted — A clinician may consider a blood count with differential, immunoglobulin levels, response to prior vaccines, infection testing, HIV testing when appropriate, complement studies, or specialist genetic and immune testing.",
            "Treatment depends on the cause — Management may include treating infections, vaccination planning, immunoglobulin replacement, preventive medicines, avoiding selected exposures, or changing immune-suppressing treatment. These are specialist decisions.",
            "Prevention must be individualized — Some people need specific vaccine, food-safety, travel, household-contact, school, work, or exposure guidance. Live vaccines may be inappropriate in selected immune conditions.",
            "Monitoring includes both infection and treatment effects — Track infections, blood counts, immunoglobulins or other markers when ordered, growth or weight, medicine effects, and organ complications.",
            "Urgent review may be needed — Fever or rapidly worsening symptoms during significant immune suppression, severe breathing difficulty, confusion, dehydration, or signs of sepsis require prompt assessment using the personal care plan."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "immune-deficiency-infection-history",
                "title": "Prepare an infection history",
                "detail": "Record dates, sites, organisms when known, antibiotics, hospitalizations, complications, and time to recovery."
              },
              {
                "id": "immune-deficiency-family-history",
                "title": "Prepare a family history",
                "detail": "Include severe childhood infections, unexplained deaths, known immune disorders, and autoimmune disease."
              },
              {
                "id": "immune-deficiency-vaccine-record",
                "title": "Prepare a vaccination record",
                "detail": "Bring known vaccines, dates, reactions, and any measured responses."
              },
              {
                "id": "immune-deficiency-medicine-list",
                "title": "Record immune-changing medicines",
                "detail": "Include steroids, biologics, chemotherapy, transplant medicines, and supplements."
              },
              {
                "id": "immune-deficiency-safety-plan",
                "title": "Prepare the specialist contact plan",
                "detail": "Record the treatment-team instructions for fever, exposure, travel, vaccines, and urgent symptoms."
              }
            ],
            "questions": [
              {
                "id": "immune-deficiency-q-pattern",
                "title": "Ask whether the infection pattern suggests immune deficiency",
                "detail": "Ask which features are concerning and which alternative explanations should be considered."
              },
              {
                "id": "immune-deficiency-q-specialist",
                "title": "Ask whether allergy/immunology or infectious-disease referral is appropriate",
                "detail": "Ask what referral criteria apply."
              },
              {
                "id": "immune-deficiency-q-vaccine",
                "title": "Ask which vaccines and household precautions are appropriate",
                "detail": "Discuss live vaccines, timing, travel, household contacts, and treatment effects."
              },
              {
                "id": "immune-deficiency-q-treatment",
                "title": "Ask which treatment and monitoring options fit the confirmed cause",
                "detail": "Ask about benefits, risks, infection prevention, organ monitoring, and long-term follow-up."
              }
            ],
            "labs": [
              {
                "id": "immune-deficiency-lab-cbc",
                "title": "Discuss a blood count with differential",
                "detail": "This can help assess white-cell numbers and patterns alongside anemia and platelets."
              },
              {
                "id": "immune-deficiency-lab-immunoglobulins",
                "title": "Discuss immunoglobulin and antibody-response testing",
                "detail": "Testing depends on the infection pattern, age, vaccine history, and specialist assessment."
              },
              {
                "id": "immune-deficiency-lab-targeted",
                "title": "Discuss targeted infection, complement, HIV, or genetic testing",
                "detail": "These are considered only when the history and examination support them."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
          "editorialSourceIds": [
            "NIAID_PIDD_OVERVIEW",
            "NIAID_PIDD_DOCTOR",
            "NIAID_PIDD_GENETICS",
            "NIAID_IMMUNE_OVERVIEW"
          ],
          "relatedIds": [
            "immunity",
            "cold-flu",
            "malnutrition",
            "cancer-treatment",
            "autoimmune-disease",
            "breathing-allergy-emergency"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "live-vaccine guidance",
              "immunoglobulin therapy",
              "preventive antimicrobial treatment",
              "genetic testing and counseling",
              "HIV testing consent and interpretation",
              "fever thresholds and emergency plans",
              "pregnancy and childhood adaptations"
            ]
          }
        },
        {
          "id": "autoimmune-disease",
          "title": "Autoimmune disease",
          "subtitle": "A group of conditions in which immune responses mistakenly target healthy cells, tissues, or organs.",
          "body": [
            "What it is — Autoimmune disease occurs when immune tolerance breaks down and the immune system reacts against the body’s own tissues.",
            "There are many different diseases — Autoimmune conditions can affect joints, skin, thyroid, gut, nerves, blood cells, kidneys, lungs, or several organs. One summary cannot represent every condition.",
            "Symptoms vary — Fatigue, pain, swelling, stiffness, rash, dry eyes or mouth, fever, numbness, weakness, digestive symptoms, or organ-specific problems may occur, but none is diagnostic by itself.",
            "Patterns may change over time — Some conditions flare and improve. Record duration, triggers, functional effect, associated symptoms, and objective changes rather than relying on one difficult day.",
            "Diagnosis usually uses several kinds of information — History, examination, family history, blood or urine tests, imaging, tissue testing, and specialist assessment may be combined. A positive antibody test alone may not establish disease.",
            "Treatment is disease-specific — Clinicians may use anti-inflammatory, immune-modifying, biologic, or organ-specific treatment to control symptoms, prevent damage, and preserve function.",
            "Treatment can change infection risk — Steroids and other immune-modifying medicines may require infection screening, vaccination planning, laboratory monitoring, and rapid contact for selected symptoms.",
            "Lifestyle support does not replace treatment — Sleep, movement, nutrition, smoking avoidance, stress support, and pacing can support health and function but do not cure autoimmune disease.",
            "Monitoring looks for disease activity and treatment effects — The plan may include symptoms, function, blood counts, liver or kidney tests, inflammatory markers, imaging, eye checks, or other organ-specific monitoring.",
            "Special situations require planning — Pregnancy, surgery, travel, vaccination, infection exposure, and medication changes should be discussed with the treating team.",
            "Seek prompt review for serious change — New weakness, severe breathing symptoms, chest pain, confusion, major bleeding, severe dehydration, sudden vision loss, or rapidly worsening organ symptoms need urgent assessment."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "autoimmune-symptom-timeline",
                "title": "Prepare a symptom timeline",
                "detail": "Record onset, duration, flares, function, fever, rash, joint swelling, neurologic symptoms, and treatments tried."
              },
              {
                "id": "autoimmune-photo-record",
                "title": "Record visible changes with dated photos when appropriate",
                "detail": "Date rashes, swelling, color changes, or mouth ulcers without delaying assessment."
              },
              {
                "id": "autoimmune-family-history",
                "title": "Prepare a family history",
                "detail": "Include autoimmune, thyroid, inflammatory bowel, neurologic, and rheumatologic conditions."
              },
              {
                "id": "autoimmune-medicine-list",
                "title": "Record medicines and supplements",
                "detail": "Include steroids, biologics, pain medicines, herbal products, and recent changes."
              },
              {
                "id": "autoimmune-monitoring-plan",
                "title": "Record the monitoring schedule",
                "detail": "Keep laboratory, imaging, eye, bone, infection-screening, and vaccination plans together."
              }
            ],
            "questions": [
              {
                "id": "autoimmune-q-differential",
                "title": "Ask what other conditions could explain the symptoms",
                "detail": "Ask how infection, deficiency, endocrine disease, medicine effects, and other causes are being considered."
              },
              {
                "id": "autoimmune-q-tests",
                "title": "Ask how each test should be interpreted",
                "detail": "Ask what a positive or negative result means in the context of symptoms and examination findings."
              },
              {
                "id": "autoimmune-q-specialist",
                "title": "Ask which specialist should coordinate care",
                "detail": "Clarify who monitors disease activity, medicines, organ risks, and urgent changes."
              },
              {
                "id": "autoimmune-q-infection",
                "title": "Ask how treatment changes infection and vaccination planning",
                "detail": "Ask about screening, exposure, travel, vaccines, fever, and medicine-holding instructions."
              },
              {
                "id": "autoimmune-q-pregnancy",
                "title": "Ask what planning is needed for pregnancy, surgery, or procedures",
                "detail": "Review medicine safety and timing with the relevant specialists before changes."
              }
            ],
            "labs": [
              {
                "id": "autoimmune-lab-basic",
                "title": "Discuss basic blood and urine assessment",
                "detail": "A clinician may consider blood count, kidney, liver, urine, or inflammatory testing based on symptoms."
              },
              {
                "id": "autoimmune-lab-targeted",
                "title": "Discuss targeted antibody or organ-specific tests",
                "detail": "Testing should be selected and interpreted for the suspected disease rather than used as a broad screening panel."
              },
              {
                "id": "autoimmune-lab-treatment",
                "title": "Discuss treatment-safety monitoring",
                "detail": "The medicine and disease determine infection screening, blood tests, imaging, eye checks, or other follow-up."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
          "editorialSourceIds": [
            "NIAID_AUTOIMMUNE_OVERVIEW",
            "NIAID_AUTOIMMUNE_TREATMENT",
            "MEDLINEPLUS_AUTOIMMUNE"
          ],
          "relatedIds": [
            "immunity",
            "arthritis",
            "fatigue",
            "anemia",
            "immune-deficiency",
            "cancer-treatment",
            "medication-emergency-safety"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "disease-specific diagnosis and criteria",
              "antibody interpretation",
              "immunosuppressive medicine selection and holding",
              "infection screening",
              "vaccination timing",
              "pregnancy and surgery management",
              "organ-specific emergency instructions"
            ]
          }
        },
        {
          "id": "malnutrition",
          "title": "Malnutrition or nutrient deficiency",
          "subtitle": "Too little energy, protein, or specific nutrients—or difficulty using them—can affect immunity, healing, strength, growth, and organ function.",
          "body": [
            "What it is — Malnutrition means the body is not receiving or using enough energy, protein, or the right balance of nutrients to maintain health.",
            "It is not always caused by food scarcity — Poor appetite, swallowing or dental problems, nausea, diarrhea, malabsorption, dementia, depression, alcohol use, cancer, chronic disease, medicines, disability, and difficulty shopping or cooking can contribute.",
            "Risk can occur at any body size — Weight alone does not rule malnutrition in or out. Rapid or unplanned change, loss of muscle, low intake, and reduced function matter.",
            "Possible clues — Unplanned weight loss, weakness, fatigue, dizziness, poor wound healing, frequent infections, mouth changes, hair or skin changes, swelling, reduced grip or mobility, or poor growth may appear.",
            "Immune and recovery effects — Inadequate energy, protein, vitamins, or minerals can weaken physical barriers, immune responses, muscle function, healing, and recovery from illness or surgery.",
            "Assessment looks for the cause — A clinician or dietitian may review usual intake, weight trend, function, food access, swallowing, dental health, digestive symptoms, medicines, alcohol, and chronic conditions.",
            "Testing is targeted — Blood tests can support evaluation for anemia, electrolyte changes, organ function, inflammation, or specific deficiencies, but no single laboratory value diagnoses all malnutrition.",
            "Food support should fit the barrier — Small frequent meals, energy- and protein-dense foods, texture changes, oral nutrition products, or culturally appropriate fortified foods may be considered based on the cause and medical needs.",
            "Refeeding can require supervision — People with severe or prolonged undernutrition may need carefully monitored nutrition because rapid replacement can cause dangerous electrolyte shifts.",
            "Supplements are not a complete solution — A multivitamin or targeted nutrient may help selected deficiencies but can interact with medicines, duplicate ingredients, or miss the underlying problem.",
            "Seek prompt assessment for serious change — Inability to eat or drink, repeated vomiting, severe diarrhea, confusion, fainting, severe weakness, dehydration, swelling with breathing difficulty, or rapid deterioration requires urgent review."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "malnutrition-food-small-frequent",
                "title": "Prepare small, frequent eating opportunities",
                "detail": "Choose foods that are tolerated and energy- or protein-dense when full meals are difficult."
              },
              {
                "id": "malnutrition-food-protein",
                "title": "Add a suitable protein source",
                "detail": "Examples can include eggs, dairy or alternatives, beans, lentils, fish, poultry, meat, tofu, or a prescribed nutrition product."
              },
              {
                "id": "malnutrition-food-fortify",
                "title": "Add energy or protein to familiar foods when appropriate",
                "detail": "Add suitable ingredients that increase energy or protein without greatly increasing volume."
              },
              {
                "id": "malnutrition-food-texture",
                "title": "Review texture and temperature needs",
                "detail": "Use the swallowing, dental, nausea, or mouth-soreness plan recommended by the clinical team."
              }
            ],
            "helpfulTasks": [
              {
                "id": "malnutrition-weight-log",
                "title": "Record weight and clothing-fit changes",
                "detail": "Use the same scale and conditions when possible, but do not delay care for rapid decline."
              },
              {
                "id": "malnutrition-intake-log",
                "title": "Record a three-day food and fluid history",
                "detail": "Include portion, tolerance, vomiting, diarrhea, swallowing, pain, and access barriers."
              },
              {
                "id": "malnutrition-function-log",
                "title": "Record strength and function",
                "detail": "Note walking, stairs, lifting, falls, grip, fatigue, and ability to shop, cook, and eat."
              },
              {
                "id": "malnutrition-barriers",
                "title": "Record barriers to eating",
                "detail": "Include cost, transport, isolation, dental problems, taste change, mood, medicines, and caregiving needs."
              },
              {
                "id": "malnutrition-referral",
                "title": "Prepare for dietitian assessment",
                "detail": "Bring weight history, diagnoses, medicines, supplements, food record, and goals."
              }
            ],
            "supplements": [
              {
                "id": "malnutrition-supp-review",
                "title": "Discuss targeted nutrition supplements",
                "detail": "Review the exact reason, product, dose, interactions, swallowing ability, kidney or liver disease, diabetes, and refeeding risk."
              }
            ],
            "questions": [
              {
                "id": "malnutrition-q-cause",
                "title": "Ask what is driving the nutrition problem",
                "detail": "Ask how intake, absorption, disease, medicines, mood, swallowing, dental health, and access are being assessed."
              },
              {
                "id": "malnutrition-q-dietitian",
                "title": "Ask whether a registered dietitian or swallowing assessment would help",
                "detail": "Ask what referral and urgency are appropriate."
              },
              {
                "id": "malnutrition-q-plan",
                "title": "Ask what food, fluid, texture, and supplement plan is safest",
                "detail": "Clarify goals, monitoring, and when the plan should change."
              },
              {
                "id": "malnutrition-q-refeeding",
                "title": "Ask whether restarting nutrition creates refeeding risk",
                "detail": "Ask whether supervised refeeding and electrolyte monitoring are needed."
              },
              {
                "id": "malnutrition-q-redflags",
                "title": "Ask which changes require urgent contact",
                "detail": "Use a personalized plan for inability to eat or drink, rapid decline, confusion, swelling, or severe weakness."
              }
            ],
            "labs": [
              {
                "id": "malnutrition-lab-basic",
                "title": "Discuss blood count, electrolytes, kidney, and liver tests",
                "detail": "These may help identify complications or contributing disease."
              },
              {
                "id": "malnutrition-lab-deficiency",
                "title": "Discuss targeted nutrient testing",
                "detail": "Iron, vitamin B12, folate, vitamin D, or other tests depend on symptoms, diet, absorption, and medical history."
              },
              {
                "id": "malnutrition-lab-refeeding",
                "title": "Discuss refeeding-risk monitoring",
                "detail": "Electrolytes and clinical observation may be required when severe or prolonged undernutrition is present."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
          "editorialSourceIds": [
            "MEDLINEPLUS_MALNUTRITION",
            "MEDLINEPLUS_MALNUTRITION_ENCYCLOPEDIA",
            "ODS_IMMUNE_FUNCTION"
          ],
          "relatedIds": [
            "immunity",
            "fatigue",
            "anemia",
            "iron-deficiency",
            "b12",
            "vitamin-d",
            "meal-tolerance",
            "digestive-medicine-review"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "malnutrition diagnostic criteria",
              "weight-loss thresholds",
              "oral nutrition product selection",
              "tube or parenteral nutrition",
              "texture and swallowing plans",
              "refeeding risk and electrolyte treatment",
              "child, pregnancy, kidney, liver, diabetes, and cancer adaptations"
            ]
          }
        },
        {
          "id": "cancer-treatment",
          "title": "Cancer treatment or immune suppression",
          "subtitle": "Cancer and some treatments can lower infection defenses, change blood counts, affect nutrition, and require a treatment-team-specific safety plan.",
          "body": [
            "Why risk changes — Chemotherapy, radiation to selected areas, stem-cell transplant, high-dose steroids, some biologic medicines, and other treatments can reduce white cells or alter immune function.",
            "Neutropenia is one important pattern — A low neutrophil count can make infection harder to control and can reduce the usual redness, swelling, or pus response.",
            "Fever can be the first or only sign — Follow the exact temperature threshold and contact instructions provided by the oncology or transplant team. Do not wait for a routine appointment.",
            "Risk varies during the treatment cycle — The medicine, dose, timing, blood-count pattern, central line, surgery, organ function, and prior infections all matter.",
            "Possible infection signs extend beyond fever — Chills, cough, sore throat, diarrhea, painful urination, mouth sores, new rash, line-site redness, confusion, or rapidly worsening weakness should be reported according to the personal plan.",
            "Prevention is individualized — Hand hygiene, food safety, dental and mouth care, central-line care, exposure reduction, vaccination planning, and household precautions should come from the treatment team.",
            "Do not start antibiotics or supplements independently — They may interact with treatment, mask infection, affect bleeding, or create kidney, liver, or laboratory problems.",
            "Nutrition and hydration need active support — Taste change, nausea, mouth pain, diarrhea, constipation, swallowing difficulty, and fatigue can reduce intake and should be addressed early.",
            "Activity should match symptoms and blood counts — Light movement may support function when approved, but fever, dizziness, severe fatigue, bleeding, chest symptoms, or breathing difficulty require reassessment.",
            "Monitoring may include blood counts and organ tests — The schedule depends on treatment and complications. Keep results and team instructions together.",
            "Urgent symptoms require the treatment team or emergency services — Severe breathing difficulty, confusion, uncontrolled bleeding, seizure, fainting, severe dehydration, or rapidly worsening symptoms need immediate assessment."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "cancer-treatment-contact-card",
                "title": "Prepare the treatment-team contact card",
                "detail": "Record daytime, after-hours, emergency, and local service instructions."
              },
              {
                "id": "cancer-treatment-temperature-plan",
                "title": "Prepare the personal temperature plan",
                "detail": "Use only the threshold and method supplied by the oncology or transplant team."
              },
              {
                "id": "cancer-treatment-cycle-log",
                "title": "Track treatment cycle and symptoms",
                "detail": "Record treatment dates, expected low-count periods, temperature, symptoms, intake, line changes, and medicines."
              },
              {
                "id": "cancer-treatment-med-list",
                "title": "Prepare one complete product list",
                "detail": "Include prescription, over-the-counter, herbal, vitamin, mineral, and nutrition products."
              },
              {
                "id": "cancer-treatment-food-fluid",
                "title": "Record food and fluid barriers",
                "detail": "Note nausea, vomiting, diarrhea, constipation, mouth pain, swallowing, taste change, and weight changes."
              },
              {
                "id": "cancer-treatment-prevention-plan",
                "title": "Review infection-prevention instructions",
                "detail": "Clarify hand hygiene, visitors, food safety, dental care, masks, travel, vaccines, pets, and central-line care."
              }
            ],
            "questions": [
              {
                "id": "cancer-treatment-q-fever",
                "title": "Ask what temperature or symptom requires immediate contact",
                "detail": "Write the exact treatment-team instruction and where to call after hours."
              },
              {
                "id": "cancer-treatment-q-counts",
                "title": "Ask when blood counts are expected to be lowest",
                "detail": "Ask how counts affect work, travel, activity, food safety, procedures, and exposure."
              },
              {
                "id": "cancer-treatment-q-vaccine",
                "title": "Ask which vaccines and timing are appropriate",
                "detail": "Review live vaccines, household contacts, travel, and timing around treatment."
              },
              {
                "id": "cancer-treatment-q-nutrition",
                "title": "Ask how nutrition and hydration problems should be managed",
                "detail": "Ask about anti-nausea treatment, mouth care, diarrhea, constipation, swallowing, and dietitian support."
              },
              {
                "id": "cancer-treatment-q-products",
                "title": "Ask which medicines and supplements must be reviewed before use",
                "detail": "Include pain, fever, cold, herbal, vitamin, mineral, and probiotic products."
              }
            ],
            "labs": [
              {
                "id": "cancer-treatment-lab-cbc",
                "title": "Track the ordered blood count and differential",
                "detail": "Review neutrophils, hemoglobin, and platelets using the treatment-team interpretation."
              },
              {
                "id": "cancer-treatment-lab-organs",
                "title": "Track kidney, liver, electrolyte, and other treatment tests",
                "detail": "The regimen and symptoms determine the schedule."
              },
              {
                "id": "cancer-treatment-lab-infection",
                "title": "Discuss infection testing when symptoms occur",
                "detail": "Cultures, respiratory tests, imaging, or other studies depend on the presentation and treatment plan."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
          "editorialSourceIds": [
            "NCI_INFECTION_NEUTROPENIA",
            "NCI_TREATMENT_SIDE_EFFECTS",
            "NCI_INFECTION_DEFINITION"
          ],
          "relatedIds": [
            "immunity",
            "cold-flu",
            "immune-deficiency",
            "malnutrition",
            "bleeding-dehydration-emergency",
            "medication-emergency-safety"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "temperature thresholds",
              "neutrophil thresholds",
              "antimicrobial treatment and prophylaxis",
              "growth-factor treatment",
              "food-safety restrictions",
              "central-line care",
              "vaccine timing",
              "medicine holding",
              "emergency transport and first aid"
            ]
          }
        },
        {
          "id": "iron-deficiency",
          "title": "Iron deficiency",
          "subtitle": "Low iron stores that can impair red-blood-cell production; it may exist before iron-deficiency anemia develops.",
          "body": [
            "What iron deficiency means — The body has too little available or stored iron for its needs.",
            "Why iron matters — Iron is part of hemoglobin, the red-blood-cell protein that carries oxygen, and it also supports muscle and cellular functions.",
            "How deficiency develops — Iron can become low through blood loss, inadequate intake, increased needs, or reduced absorption.",
            "Higher-risk situations — Heavy menstrual bleeding, pregnancy, gastrointestinal bleeding, frequent blood donation, restrictive diets, endurance training, digestive disease, and stomach or intestinal surgery may increase risk.",
            "Symptoms that may appear — Fatigue, weakness, headache, dizziness, pale skin, cold hands or feet, breathlessness, reduced exercise tolerance, or unusual cravings can occur, but symptoms alone cannot confirm deficiency.",
            "Iron deficiency versus iron-deficiency anemia — Iron stores may be low before hemoglobin falls. Iron-deficiency anemia means iron deficiency has progressed enough to reduce healthy red-blood-cell or hemoglobin production.",
            "Why the cause matters — Replacing iron without identifying blood loss, poor absorption, or another cause can delay necessary care.",
            "Food support — Heme iron comes from animal foods; nonheme iron comes from plant and fortified foods. Vitamin C–rich foods can support absorption of nonheme iron.",
            "Supplement discussion — Oral or intravenous iron may be considered after assessment. The form, route, timing, and duration depend on the cause, severity, tolerance, and response.",
            "Monitoring — A clinician may follow symptoms, CBC, ferritin, and other iron measures and decide whether investigation for bleeding or malabsorption is needed.",
            "Seek prompt assessment if — There is chest pain, fainting, severe breathlessness, rapid worsening, pregnancy with significant symptoms, heavy bleeding, vomiting blood, or black or bloody stool."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "iron-deficiency-food-heme",
                "title": "Include suitable heme iron sources",
                "detail": "Lean meat, poultry, and seafood provide heme iron; choices should also fit heart, kidney, allergy, pregnancy, and cultural needs."
              },
              {
                "id": "iron-deficiency-food-nonheme",
                "title": "Include plant or fortified iron sources",
                "detail": "Beans, lentils, tofu, fortified cereals or breads, peas, nuts, seeds, and leafy vegetables can contribute nonheme iron."
              },
              {
                "id": "iron-deficiency-food-vitc",
                "title": "Pair plant iron with vitamin C",
                "detail": "Use tomato, peppers, citrus, strawberries, or another vitamin C–rich food in the same meal."
              },
              {
                "id": "iron-deficiency-food-timing",
                "title": "Discuss food and medicine timing if using an iron product",
                "detail": "Tea, coffee, calcium, antacids, and some medicines can affect absorption or timing; obtain product-specific advice."
              }
            ],
            "helpfulTasks": [
              {
                "id": "iron-deficiency-task-symptoms",
                "title": "Track fatigue, dizziness, breathlessness, and exercise tolerance",
                "detail": "Note changes over time and whether symptoms interfere with usual activities."
              },
              {
                "id": "iron-deficiency-task-bloodloss",
                "title": "Record possible sources of blood loss",
                "detail": "Include heavy periods, gastrointestinal symptoms, blood donation, surgery, injury, and any black or bloody stool."
              },
              {
                "id": "iron-deficiency-task-diet",
                "title": "Prepare a three-day food record",
                "detail": "Include fortified foods, animal foods, legumes, tea, coffee, calcium products, and restrictive diet patterns."
              },
              {
                "id": "iron-deficiency-task-treatment",
                "title": "Track treatment tolerance and follow-up dates",
                "detail": "Record stomach effects, constipation, missed doses, infusions, and the monitoring plan without changing treatment independently."
              }
            ],
            "supplements": [
              {
                "id": "iron-deficiency-supp-discuss",
                "title": "Discuss iron supplementation only after assessment",
                "detail": "Unnecessary iron can be harmful. Route and dosing require clinical review, especially in pregnancy, childhood, chronic disease, or possible iron overload."
              }
            ],
            "questions": [
              {
                "id": "iron-deficiency-q-cause",
                "title": "What is the likely cause of my iron deficiency?",
                "detail": "Ask whether blood loss, diet, absorption, pregnancy, inflammation, or another condition is most likely."
              },
              {
                "id": "iron-deficiency-q-anemia",
                "title": "Do I also have anemia?",
                "detail": "Ask how hemoglobin, red-cell indices, ferritin, and other results fit together."
              },
              {
                "id": "iron-deficiency-q-investigation",
                "title": "Do I need evaluation for bleeding or poor absorption?",
                "detail": "The answer depends on age, sex, symptoms, menstrual history, gastrointestinal history, and test results."
              },
              {
                "id": "iron-deficiency-q-treatment",
                "title": "Which treatment route and monitoring plan fit my situation?",
                "detail": "Discuss oral versus intravenous treatment, expected response, side effects, interactions, and follow-up."
              },
              {
                "id": "iron-deficiency-q-return",
                "title": "Which symptoms or results should trigger earlier review?",
                "detail": "Clarify the plan for worsening breathlessness, fainting, chest pain, bleeding, pregnancy, or poor treatment tolerance."
              }
            ],
            "labs": [
              {
                "id": "iron-deficiency-lab-cbc",
                "title": "Complete blood count with red-cell indices",
                "detail": "Helps determine whether anemia is present and describes the red-cell pattern."
              },
              {
                "id": "iron-deficiency-lab-ferritin",
                "title": "Ferritin",
                "detail": "Often used to assess iron stores, but inflammation and other conditions can affect interpretation."
              },
              {
                "id": "iron-deficiency-lab-iron",
                "title": "Iron studies, such as transferrin saturation or TIBC",
                "detail": "May help clarify iron availability and the pattern of deficiency."
              },
              {
                "id": "iron-deficiency-lab-retic",
                "title": "Reticulocyte count when appropriate",
                "detail": "May help assess the bone marrow response in an anemia evaluation."
              },
              {
                "id": "iron-deficiency-lab-cause",
                "title": "Tests for blood loss or malabsorption when indicated",
                "detail": "A clinician may discuss stool testing, endoscopy, colon evaluation, celiac testing, or other investigations based on risk and symptoms."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_01_ENERGY_IRON",
          "editorialSourceIds": [
            "ODS_IRON_HP",
            "NHLBI_IRON_DEFICIENCY_ANEMIA",
            "NHLBI_ANEMIA_DIAGNOSIS"
          ],
          "relatedIds": [
            "fatigue",
            "anemia",
            "iron-rich-diet",
            "iron-supplement",
            "constipation"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "supplementDosing",
              "tests",
              "redFlags",
              "emergencyInstructions"
            ]
          }
        },
        {
          "id": "arthritis",
          "title": "Arthritis or chronic joint pain",
          "subtitle": "Joint pain, swelling, stiffness, or reduced movement can affect activity and daily function.",
          "body": [
            "Appropriate movement often remains useful, but the type and load may need modification.",
            "Hot, severely swollen joints, fever, recent injury, or sudden inability to bear weight need prompt assessment."
          ],
          "actionPath": {
            "questions": [
              {
                "id": "arthritis-q-1",
                "title": "What type of arthritis is most likely?",
                "detail": ""
              },
              {
                "id": "arthritis-q-2",
                "title": "Which exercises are safe?",
                "detail": ""
              },
              {
                "id": "arthritis-q-3",
                "title": "Do I need imaging, inflammation tests, or medication monitoring?",
                "detail": ""
              }
            ]
          },
          "contentStatus": "placeholder",
          "contentTemplate": "condition",
          "researchBatch": null,
          "editorialSourceIds": [],
          "relatedIds": [
            "exercise",
            "exercise-start-small",
            "exercise-aerobic",
            "exercise-strength",
            "exercise-sit-less",
            "exercise-recovery"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "fullPathwayResearch",
              "numericTargets",
              "contraindications",
              "conditionAdaptations",
              "pregnancyChildOlderAdultGuidance",
              "urgentInstructions"
            ]
          }
        },
        {
          "id": "heart-disease",
          "title": "Heart disease",
          "subtitle": "Heart disease includes several conditions. This page focuses on coronary heart disease while directing symptoms and testing to individualized clinical care.",
          "body": [
            "What it is — Heart disease is a broad term for problems affecting the heart. Coronary heart disease develops when the arteries supplying the heart cannot deliver enough oxygen-rich blood, often because plaque narrows or blocks blood flow.",
            "Common symptoms — Chest pressure or discomfort, breathlessness, unusual fatigue, palpitations, dizziness, nausea, sweating, or reduced exercise tolerance may occur. Some people have no symptoms until a heart attack or another complication.",
            "Symptoms can differ — Women, older adults, and people with diabetes may have less typical symptoms. New jaw, back, upper-abdominal, or arm discomfort, strong fatigue, or breathlessness still requires appropriate assessment.",
            "Causes and risk factors — Cholesterol-related plaque is a major cause of coronary disease. High blood pressure, diabetes, tobacco, kidney disease, inflammation, age, family history, inactivity, and other factors can increase risk.",
            "Expected course — Coronary disease may progress slowly or become unstable if plaque ruptures and a clot forms. Symptoms, function, and risk can improve with coordinated treatment, but follow-up remains important.",
            "Possible complications — Angina, heart attack, heart failure, rhythm problems, cardiac arrest, stroke, and reduced quality of life can occur depending on the disease type and severity.",
            "Home support — Take prescribed medicines consistently, avoid tobacco, use a heart-healthy food pattern, move at the advised level, protect sleep, manage blood pressure and glucose, and keep an emergency symptom plan visible.",
            "Treatment overview — Care may include lifestyle changes, statins and other medicines, antiplatelet or blood-pressure treatment, procedures, surgery, or cardiac rehabilitation. The exact plan depends on diagnosis and risk.",
            "Monitoring — Review symptoms, activity tolerance, blood pressure, lipids, glucose, kidney function, medicine effects, heart rhythm, and test results according to the treating team’s plan.",
            "Questions for the clinician — Ask the exact diagnosis, which symptoms are urgent, safe activity, cardiac rehabilitation, medicine purpose, treatment goals, and which tests or follow-up appointments are due.",
            "Red flags — Call emergency services for chest pressure or pain, severe breathlessness, fainting, sudden sweating with weakness or nausea, or new stroke symptoms. Do not drive yourself when emergency transport is advised."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "heart-food-pattern",
                "title": "Use a Mediterranean- or DASH-aligned eating pattern",
                "detail": "Build the pattern around vegetables, fruit, whole grains, beans, nuts, suitable fish or lean protein, and unsaturated fats while limiting sodium and excess saturated fat."
              },
              {
                "id": "heart-food-label",
                "title": "Compare sodium and saturated fat on common packaged foods",
                "detail": "Check serving size, sodium, saturated fat, added sugar, and ingredients before choosing a realistic swap."
              }
            ],
            "helpfulTasks": [
              {
                "id": "heart-task-diagnosis",
                "title": "Write down the exact heart diagnosis",
                "detail": "Include coronary disease, prior heart attack, heart failure, rhythm problem, valve disease, or procedure when known."
              },
              {
                "id": "heart-task-symptoms",
                "title": "Track symptoms and what was happening when they began",
                "detail": "Record chest discomfort, breathlessness, fatigue, palpitations, dizziness, nausea, sweating, duration, triggers, and recovery."
              },
              {
                "id": "heart-task-medicines",
                "title": "Prepare a complete medicine and supplement list",
                "detail": "Include prescription medicines, over-the-counter pain or cold products, vitamins, herbal products, and missed doses."
              },
              {
                "id": "heart-task-emergency",
                "title": "Keep the emergency symptom plan visible",
                "detail": "Record local emergency instructions, allergies, medicines, diagnoses, and the person to contact."
              },
              {
                "id": "heart-task-activity",
                "title": "Record activity tolerance and limits",
                "detail": "Note what level causes symptoms and whether cardiac rehabilitation or an individualized plan has been offered."
              }
            ],
            "questions": [
              {
                "id": "heart-q-diagnosis",
                "title": "What exact type of heart disease do I have?",
                "detail": "Ask whether the problem involves coronary arteries, heart muscle, valves, rhythm, or another structure."
              },
              {
                "id": "heart-q-urgent",
                "title": "Which symptoms require emergency action?",
                "detail": "Request a written plan for chest symptoms, breathlessness, fainting, palpitations, and stroke signs."
              },
              {
                "id": "heart-q-activity",
                "title": "What activity level is safe, and would cardiac rehabilitation help?",
                "detail": "Discuss current symptoms, recent procedures, mobility, falls, and treatment stability."
              },
              {
                "id": "heart-q-medicines",
                "title": "What is the purpose of each heart medicine?",
                "detail": "Ask about benefit, common side effects, serious warnings, missed-dose instructions, and interactions."
              },
              {
                "id": "heart-q-monitoring",
                "title": "Which monitoring and follow-up tests are due?",
                "detail": "Ask about blood pressure, lipids, glucose, kidney function, electrocardiogram, imaging, and specialist follow-up."
              }
            ],
            "labs": [
              {
                "id": "heart-lab-lipids",
                "title": "Lipid profile and cardiovascular-risk review",
                "detail": "Cholesterol results are interpreted with the diagnosis, treatment, and other risk factors."
              },
              {
                "id": "heart-lab-bp-glucose",
                "title": "Blood pressure, glucose or HbA1c, and kidney function",
                "detail": "These conditions often affect heart risk and medicine safety together."
              },
              {
                "id": "heart-lab-ecg",
                "title": "Electrocardiogram or rhythm assessment when indicated",
                "detail": "Symptoms, examination, and history determine whether this is useful."
              },
              {
                "id": "heart-lab-imaging",
                "title": "Heart or artery imaging when indicated",
                "detail": "The clinician decides whether an echocardiogram, stress test, coronary imaging, or another test is appropriate."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_05_CHOLESTEROL_HEART",
          "editorialSourceIds": [
            "NHLBI_CORONARY_HEART_DISEASE",
            "MEDLINEPLUS_HEART_DISEASE"
          ],
          "relatedIds": [
            "cholesterol",
            "ldl",
            "statin",
            "mediterranean-heart-diet",
            "cholesterol-lifestyle",
            "hypertension",
            "diabetes",
            "bp-meds"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "diagnosis-specific treatment",
              "all emergency instructions and transport advice",
              "activity clearance and cardiac rehabilitation referral",
              "antiplatelet, anticoagulant, antianginal, and other medicine guidance",
              "procedure and surgery pathways",
              "pregnancy and child guidance",
              "diagnostic test selection and interpretation"
            ]
          }
        },
        {
          "id": "anemia",
          "title": "Anemia",
          "subtitle": "A lower-than-normal amount of healthy red blood cells or hemoglobin, reducing oxygen delivery to body tissues.",
          "body": [
            "What anemia is — Anemia develops when the blood has too few healthy red blood cells or too little hemoglobin.",
            "How oxygen delivery is affected — Hemoglobin carries oxygen from the lungs to tissues; lower oxygen delivery can make ordinary activity feel harder.",
            "Common symptoms — Fatigue, weakness, pale skin, headache, dizziness, coldness, breathlessness, palpitations, or reduced exercise tolerance may occur.",
            "Major categories — Anemia can result from blood loss, reduced red-blood-cell production, increased red-blood-cell breakdown, or inherited blood conditions.",
            "Possible causes — Iron, vitamin B12, or folate deficiency; bleeding; inflammation; kidney disease; cancer; autoimmune disease; medicines; bone-marrow disorders; and inherited conditions are examples.",
            "Why finding the cause matters — Iron deficiency is common, but iron does not treat every anemia and may be harmful when it is not needed.",
            "Evaluation overview — History, examination, CBC, red-cell indices, and selected tests help identify the type and cause. Some people need assessment for bleeding or referral to a blood specialist.",
            "Treatment overview — Treatment targets the cause and may involve nutrient replacement, medicine changes, treatment of bleeding or chronic disease, procedures, or transfusion in selected situations.",
            "Monitoring — Follow-up may assess symptoms, hemoglobin, red-cell indices, reticulocytes, nutrient measures, kidney function, and response to treatment.",
            "Seek urgent care if — Anemia symptoms include chest pain, severe or new breathlessness, fainting, confusion, rapid heartbeat with weakness, major bleeding, vomiting blood, or black or bloody stool."
          ],
          "actionPath": {
            "foodIdeas": [
              {
                "id": "anemia-food-confirm-type",
                "title": "Match food support to the confirmed anemia type",
                "detail": "Iron-rich foods may help iron deficiency, while vitamin B12, folate, protein, or other support may be relevant for different causes."
              },
              {
                "id": "anemia-food-balanced",
                "title": "Use a varied eating pattern while the cause is assessed",
                "detail": "Include suitable protein foods, vegetables, fruit, whole grains, legumes, and fortified foods unless a medical condition requires a different plan."
              }
            ],
            "helpfulTasks": [
              {
                "id": "anemia-task-symptoms",
                "title": "Track fatigue, breathlessness, dizziness, palpitations, and activity limits",
                "detail": "Record severity, timing, and whether symptoms are worsening."
              },
              {
                "id": "anemia-task-bleeding",
                "title": "Record possible bleeding or blood-loss history",
                "detail": "Include heavy periods, gastrointestinal symptoms, surgery, injury, blood donation, and dark or bloody stool."
              },
              {
                "id": "anemia-task-history",
                "title": "Prepare diet, medicine, family, and chronic-disease history",
                "detail": "Include kidney disease, inflammatory disease, cancer treatment, alcohol use, restrictive diets, and inherited blood disorders."
              },
              {
                "id": "anemia-task-results",
                "title": "Keep copies of blood results and compare trends",
                "detail": "Record dates and values without interpreting a single result outside its clinical context."
              }
            ],
            "supplements": [
              {
                "id": "anemia-supp-confirmed",
                "title": "Discuss only the nutrient shown to be deficient",
                "detail": "Iron, vitamin B12, and folate are not interchangeable; treatment depends on the anemia type and cause."
              }
            ],
            "questions": [
              {
                "id": "anemia-q-type",
                "title": "What type of anemia do I have?",
                "detail": "Ask how the CBC, red-cell size, reticulocyte count, and other tests support the classification."
              },
              {
                "id": "anemia-q-cause",
                "title": "What is the most likely cause?",
                "detail": "Discuss bleeding, nutrition, kidney disease, inflammation, medicines, inherited conditions, and bone-marrow problems as appropriate."
              },
              {
                "id": "anemia-q-tests",
                "title": "Which tests or investigations are needed before treatment?",
                "detail": "Ask which results are essential and whether bleeding or absorption needs evaluation."
              },
              {
                "id": "anemia-q-treatment",
                "title": "What treatment response should we expect and monitor?",
                "detail": "Clarify symptoms, laboratory targets, timing, side effects, and follow-up."
              },
              {
                "id": "anemia-q-urgent",
                "title": "Which symptoms require urgent care?",
                "detail": "Confirm the plan for chest pain, fainting, severe breathlessness, rapid worsening, or active bleeding."
              }
            ],
            "labs": [
              {
                "id": "anemia-lab-cbc",
                "title": "Complete blood count with red-cell indices",
                "detail": "Measures hemoglobin and describes red-cell size and other blood-cell counts."
              },
              {
                "id": "anemia-lab-retic",
                "title": "Reticulocyte count",
                "detail": "May help show whether the bone marrow is increasing red-blood-cell production."
              },
              {
                "id": "anemia-lab-iron",
                "title": "Ferritin and iron studies",
                "detail": "Help assess whether iron deficiency or altered iron use may be involved."
              },
              {
                "id": "anemia-lab-b12",
                "title": "Vitamin B12 and folate when indicated",
                "detail": "May be discussed based on blood-cell pattern, diet, absorption, medicines, or neurologic symptoms."
              },
              {
                "id": "anemia-lab-kidney",
                "title": "Kidney, liver, inflammation, or hemolysis tests when indicated",
                "detail": "Selection depends on history, examination, and the suspected anemia category."
              },
              {
                "id": "anemia-lab-bleeding",
                "title": "Evaluation for blood loss when indicated",
                "detail": "A clinician may discuss stool testing, gynecologic assessment, endoscopy, colon evaluation, or other investigations."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "condition",
          "researchBatch": "BATCH_01_ENERGY_IRON",
          "editorialSourceIds": [
            "NHLBI_ANEMIA_OVERVIEW",
            "NHLBI_ANEMIA_CAUSES",
            "NHLBI_ANEMIA_DIAGNOSIS",
            "NHLBI_ANEMIA_TREATMENT"
          ],
          "relatedIds": [
            "fatigue",
            "iron-deficiency",
            "iron-rich-diet",
            "iron-supplement"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "treatment",
              "tests",
              "redFlags",
              "emergencyInstructions"
            ]
          }
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
          "subtitle": "A prescription biguanide medicine commonly used for type 2 diabetes. It lowers liver glucose output and helps the body use insulin more effectively.",
          "body": [
            "Purpose and class — Metformin is a biguanide glucose-lowering medicine. It is used mainly for type 2 diabetes and may be combined with other medicines or insulin.",
            "How it is generally used — Immediate-release and extended-release products are available. The exact product, timing, and dose must follow the prescription and product instructions.",
            "Expected response — Glucose and HbA1c may improve over time. Metformin controls glucose but does not cure diabetes.",
            "Common side effects — Nausea, diarrhea, stomach discomfort, gas, reduced appetite, or a metallic taste can occur, especially after starting or increasing treatment.",
            "Low-glucose risk — Metformin alone does not commonly cause hypoglycemia. Risk can rise when it is combined with insulin or another medicine that lowers glucose, or when illness and poor intake are present.",
            "Kidney and illness caution — Kidney function affects metformin clearance. Dehydration, severe infection, shock, low oxygen states, or acute kidney injury can increase risk and require urgent medicine review.",
            "Rare serious warning — Metformin-associated lactic acidosis is rare but serious. Severe weakness, unusual sleepiness, persistent vomiting, abdominal pain, breathing difficulty, feeling cold, dizziness, or a slow or irregular heartbeat require urgent assessment.",
            "Procedures and contrast — Tell the clinician about metformin before surgery, prolonged fasting, or imaging with injected contrast. Temporary interruption and restart timing must be directed by the treating team.",
            "Alcohol and interactions — Excess alcohol can increase risk. Review prescription medicines, over-the-counter products, and supplements with a pharmacist or clinician.",
            "Vitamin B12 — Long-term use may lower vitamin B12 in some people. New anemia, numbness, tingling, balance problems, mouth soreness, or unexplained fatigue should be discussed.",
            "Pregnancy, children, kidney, and liver — Use and monitoring differ by age, pregnancy, kidney function, liver disease, and other conditions. These decisions require clinical review.",
            "Dosing requires clinical review — No starting dose, increase schedule, maximum dose, missed-dose instruction, or stop/restart instruction is displayed in this app."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "metformin-task-product",
                "title": "Record the exact metformin product",
                "detail": "Include immediate-release or extended-release wording, tablet strength, prescription directions, and pharmacy label."
              },
              {
                "id": "metformin-task-effects",
                "title": "Track stomach side effects and hydration",
                "detail": "Record timing, severity, food intake, vomiting, diarrhea, and whether the medicine can be kept down."
              },
              {
                "id": "metformin-task-procedures",
                "title": "Flag metformin before procedures or contrast imaging",
                "detail": "Ask the treating team for exact hold and restart instructions."
              },
              {
                "id": "metformin-task-sickday",
                "title": "Review the sick-day medicine plan",
                "detail": "Clarify what to do with vomiting, diarrhea, dehydration, severe infection, reduced intake, or kidney concerns."
              }
            ],
            "supplements": [
              {
                "id": "metformin-supp-b12",
                "title": "Vitamin B12 assessment to discuss",
                "detail": "Testing or supplementation may be considered with long-term use, anemia, neurologic symptoms, restricted intake, or absorption problems. Do not self-treat without review."
              }
            ],
            "questions": [
              {
                "id": "metformin-q-benefit",
                "title": "What benefit should I expect, and when will it be assessed?",
                "detail": "Ask which glucose or HbA1c change is realistic and when follow-up is planned."
              },
              {
                "id": "metformin-q-sideeffects",
                "title": "Which stomach effects are expected, and which require review?",
                "detail": "Ask what to do if symptoms prevent eating, drinking, or taking medicines."
              },
              {
                "id": "metformin-q-kidney",
                "title": "How often should kidney function be checked?",
                "detail": "The interval depends on baseline function, age, illness, and other medicines."
              },
              {
                "id": "metformin-q-procedure",
                "title": "What should I do before surgery or contrast imaging?",
                "detail": "Request exact stop and restart instructions from the treating team."
              },
              {
                "id": "metformin-q-b12",
                "title": "Should vitamin B12 or a blood count be checked?",
                "detail": "Mention fatigue, anemia, numbness, tingling, balance change, or mouth symptoms."
              },
              {
                "id": "metformin-q-alcohol",
                "title": "What alcohol limit is safe with my health conditions?",
                "detail": "Discuss liver disease, kidney disease, poor intake, and binge drinking risk."
              }
            ],
            "labs": [
              {
                "id": "metformin-lab-kidney",
                "title": "Kidney function and estimated filtration rate",
                "detail": "These are used to assess medicine safety and changes during illness."
              },
              {
                "id": "metformin-lab-glucose",
                "title": "Glucose records and HbA1c",
                "detail": "These help assess response without changing the prescription independently."
              },
              {
                "id": "metformin-lab-b12",
                "title": "Vitamin B12 and blood count when indicated",
                "detail": "Long-term use or compatible symptoms may prompt assessment."
              }
            ]
          },
          "lockedDosing": {
            "status": "clinical-review-required",
            "display": false,
            "reason": "Product, kidney function, age, pregnancy, other medicines, and clinical response determine dosing."
          },
          "contentStatus": "researched",
          "contentTemplate": "medication",
          "researchBatch": "BATCH_03_DIABETES_GLUCOSE",
          "editorialSourceIds": [
            "NIDDK_INSULIN_MEDICINES",
            "MEDLINEPLUS_METFORMIN",
            "FDA_METFORMIN_LABEL"
          ],
          "relatedIds": [
            "diabetes",
            "sugar-range",
            "hba1c",
            "low-sugar-symptoms",
            "high-sugar-symptoms",
            "insulin",
            "glucose-emergency",
            "b12",
            "medication-emergency-safety"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "all dosing",
              "kidney thresholds",
              "contrast hold and restart",
              "sick-day hold instructions",
              "lactic acidosis emergency wording",
              "pregnancy and child use",
              "drug interactions",
              "vitamin B12 monitoring interval"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_09_EMERGENCY_SAFETY"
          ]
        },
        {
          "id": "insulin",
          "title": "Insulin",
          "subtitle": "A prescription hormone medicine that moves glucose into cells and limits excess glucose production. It is essential for type 1 diabetes and used in many other diabetes situations.",
          "body": [
            "Purpose and class — Insulin replaces or supplements the insulin the body cannot make or use effectively.",
            "Who may need it — Everyone with type 1 diabetes needs insulin. Some people with type 2 diabetes, gestational diabetes, pancreatic disease, severe illness, or other diabetes forms also use it.",
            "Common forms — Insulins are grouped by how quickly they begin working and how long they last. Rapid-, short-, intermediate-, long-, and ultra-long-acting products have different roles and are not interchangeable without clinical direction.",
            "Delivery — Insulin may be given by syringe, pen, pump, or selected automated delivery systems. Correct product identification, technique, site rotation, device setup, and backup supplies matter.",
            "Expected response — Glucose patterns should move toward the agreed range while severe lows and excessive swings are minimized.",
            "Common side effects — Hypoglycemia, weight gain, redness or itching, skin thickening, lumps, or indentations at injection sites can occur.",
            "Serious risks — Too much insulin, delayed food, unexpected activity, alcohol, kidney changes, or dosing errors can cause severe hypoglycemia. Interrupted insulin delivery can cause dangerous high glucose and ketones, especially in type 1 diabetes.",
            "Food and activity interactions — Meal timing, carbohydrate amount, exercise, illness, stress, and alcohol can change insulin needs. Use the written adjustment plan rather than guessing.",
            "Storage and product checks — Follow the specific label for refrigeration, in-use temperature, expiry after opening, and travel. Do not freeze insulin or expose it to excessive heat or direct sunlight.",
            "Safety — Never share an insulin pen, cartridge, syringe, needle, lancet, or personal fingerstick device. Check the insulin name and concentration before every use.",
            "Pregnancy, children, kidney, and liver — Insulin can be used across many situations, but targets, doses, supervision, and monitoring require individualized clinical care.",
            "Dosing requires clinical review — No dose, correction factor, carbohydrate ratio, basal adjustment, missed-dose instruction, mixing instruction, or pump setting is displayed in this app."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "insulin-task-list",
                "title": "Record each insulin separately",
                "detail": "Write the exact name, concentration, device, prescription timing, and clinical purpose."
              },
              {
                "id": "insulin-task-technique",
                "title": "Review injection or pump technique",
                "detail": "Check site rotation, needle or set changes, priming, skin changes, device alarms, and disposal."
              },
              {
                "id": "insulin-task-lowplan",
                "title": "Prepare the low-glucose plan and supplies",
                "detail": "Keep the approved fast-acting carbohydrate, monitoring supplies, identification, and prescribed glucagon available."
              },
              {
                "id": "insulin-task-backup",
                "title": "Prepare a delivery-failure backup plan",
                "detail": "Ask what to do for a damaged pen, empty cartridge, pump alarm, blocked tubing, site failure, heat exposure, or lost supplies."
              },
              {
                "id": "insulin-task-storage",
                "title": "Check storage and travel conditions",
                "detail": "Record opening dates and follow the product-specific temperature and expiry instructions."
              }
            ],
            "questions": [
              {
                "id": "insulin-q-role",
                "title": "What is the role of each insulin I use?",
                "detail": "Ask which product covers meals, background needs, corrections, illness, or pump delivery."
              },
              {
                "id": "insulin-q-low",
                "title": "What is my exact low-glucose plan?",
                "detail": "Ask for treatment amount, recheck timing, follow-up food, glucagon, and emergency steps."
              },
              {
                "id": "insulin-q-high",
                "title": "What is my high-glucose and ketone plan?",
                "detail": "Ask when to check ketones, use a correction, change a pump site, call the team, or seek emergency care."
              },
              {
                "id": "insulin-q-missed",
                "title": "What should I do for a late or missed dose?",
                "detail": "The answer depends on insulin type, meal timing, glucose, ketones, and time since the missed dose."
              },
              {
                "id": "insulin-q-activity",
                "title": "How should meals and activity be matched with insulin?",
                "detail": "Ask about planned and unplanned exercise, shift work, fasting, alcohol, and illness."
              },
              {
                "id": "insulin-q-storage",
                "title": "How should this exact product be stored and discarded?",
                "detail": "Bring the pen, vial, cartridge, pump, and manufacturer instructions."
              }
            ],
            "labs": [
              {
                "id": "insulin-lab-data",
                "title": "Meter, sensor, or continuous glucose data",
                "detail": "Review time patterns, lows, highs, meal timing, activity, and delivery events."
              },
              {
                "id": "insulin-lab-a1c",
                "title": "HbA1c",
                "detail": "Use the average together with glucose variability and hypoglycemia history."
              },
              {
                "id": "insulin-lab-kidney",
                "title": "Kidney and liver function",
                "detail": "Changes can alter insulin needs and hypoglycemia risk."
              },
              {
                "id": "insulin-lab-ketones",
                "title": "Ketone testing plan",
                "detail": "The clinician determines who needs supplies and how results should guide urgent action."
              }
            ]
          },
          "lockedDosing": {
            "status": "clinical-review-required",
            "display": false,
            "reason": "Insulin dosing depends on the exact product, diabetes type, glucose pattern, food, activity, illness, pregnancy, devices, and clinician-approved algorithms."
          },
          "contentStatus": "researched",
          "contentTemplate": "medication",
          "researchBatch": "BATCH_03_DIABETES_GLUCOSE",
          "editorialSourceIds": [
            "NIDDK_INSULIN_MEDICINES",
            "MEDLINEPLUS_HUMAN_INSULIN",
            "CDC_TYPE1_DIABETES",
            "CDC_INJECTION_SAFETY",
            "CDC_DIABETES_HEAT"
          ],
          "relatedIds": [
            "diabetes",
            "sugar-range",
            "hba1c",
            "low-sugar-symptoms",
            "high-sugar-symptoms",
            "metformin",
            "glucose-emergency",
            "medication-emergency-safety"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "all dosing and algorithms",
              "insulin interchangeability",
              "meal and exercise adjustment",
              "pump failure instructions",
              "storage duration",
              "pregnancy and child guidance",
              "ketone instructions",
              "glucagon and emergency instructions"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_09_EMERGENCY_SAFETY"
          ]
        },
        {
          "id": "bp-meds",
          "title": "Blood pressure medicines",
          "subtitle": "Medication classes lower blood pressure in different ways; selection, combinations, monitoring, and dosing require clinician review.",
          "body": [
            "Purpose and classes — Blood-pressure medicines reduce pressure and cardiovascular risk. Common groups include thiazide-type diuretics, ACE inhibitors, angiotensin receptor blockers, calcium-channel blockers, beta blockers, and other medicines used for specific conditions.",
            "General use — The best medicine depends on the blood-pressure pattern, age, pregnancy, kidney function, diabetes, heart disease, other conditions, side effects, interactions, access, and response. Many people need more than one medicine.",
            "Consistency — Take the exact product as prescribed. Do not skip, double, split, crush, stop, or change timing unless the label and clinician or pharmacist instructions allow it.",
            "Common effects — Depending on the class, effects may include dizziness, lightheadedness, tiredness, frequent urination, ankle swelling, cough, headache, constipation, changes in heart rate, or sexual side effects.",
            "Laboratory effects — Some medicines can change kidney function, sodium, potassium, or other electrolytes. The need and timing of blood tests vary by class and health status.",
            "Serious warnings — Fainting, severe weakness, facial or throat swelling, difficulty breathing, chest pain, very slow or fast heartbeat, severe dehydration, confusion, or a severe skin reaction require prompt assessment.",
            "Interactions — Over-the-counter pain relievers, decongestants, stimulants, lithium, other blood-pressure medicines, alcohol, supplements, potassium products, and salt substitutes can matter. Grapefruit interacts with selected products, not every class.",
            "Pregnancy and breastfeeding — Some blood-pressure medicines can harm a pregnancy or are unsuitable while breastfeeding. Pregnancy plans, a positive test, or postpartum symptoms require prompt product-specific review.",
            "Kidney and liver cautions — Kidney disease, renal-artery disease, dehydration, vomiting, diarrhea, liver disease, and older age can change medicine choice, dose, or monitoring.",
            "Children and older adults — Dosing and targets are not adult defaults. Falls, frailty, cognition, swallowing, caregiving, and adherence supports may affect the plan.",
            "Monitoring — Track blood pressure, pulse when relevant, symptoms, swelling, weight changes, adherence, and side effects. Review kidney function and electrolytes when the class requires it.",
            "Questions for the clinician or pharmacist — Ask the class and purpose, expected response, timing, missed-dose plan, interactions, pregnancy cautions, sick-day instructions, monitoring, and which symptoms need urgent care."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "bp-meds-task-list",
                "title": "Record each medicine name, strength, form, and timing",
                "detail": "Include combination products and the reason each medicine was prescribed."
              },
              {
                "id": "bp-meds-task-log",
                "title": "Track blood pressure, pulse, symptoms, and medicine timing",
                "detail": "Record dizziness, fainting, swelling, cough, fatigue, urination changes, and missed doses."
              },
              {
                "id": "bp-meds-task-otc",
                "title": "Review over-the-counter medicines and supplements",
                "detail": "Include pain relievers, cold medicines, decongestants, stimulants, herbal products, potassium, and salt substitutes."
              },
              {
                "id": "bp-meds-task-refill",
                "title": "Check refill access and adherence barriers",
                "detail": "Note cost, pharmacy access, swallowing, side effects, memory, work schedule, and caregiving needs."
              },
              {
                "id": "bp-meds-task-pregnancy",
                "title": "Record pregnancy, breastfeeding, or pregnancy plans",
                "detail": "Some classes require prompt replacement or specialist review."
              },
              {
                "id": "bp-meds-task-do-not-stop",
                "title": "Do not stop or double a medicine independently",
                "detail": "Use the product-specific missed-dose and sick-day plan from the clinician or pharmacist."
              }
            ],
            "questions": [
              {
                "id": "bp-meds-q-class",
                "title": "Which class is this medicine and why was it selected?",
                "detail": "Ask whether it also treats heart disease, kidney disease, rhythm problems, or another condition."
              },
              {
                "id": "bp-meds-q-target",
                "title": "What response and blood-pressure target are expected?",
                "detail": "Ask when to report readings that remain high or become too low."
              },
              {
                "id": "bp-meds-q-sideeffects",
                "title": "Which common and serious side effects apply to this exact product?",
                "detail": "Ask how dizziness, swelling, cough, pulse changes, or laboratory changes should be handled."
              },
              {
                "id": "bp-meds-q-missed",
                "title": "What is the missed-dose, vomiting, diarrhea, fasting, and procedure plan?",
                "detail": "The answer varies by product and must not be guessed."
              },
              {
                "id": "bp-meds-q-interactions",
                "title": "Which medicines, supplements, foods, or salt substitutes interact?",
                "detail": "Bring every prescription, over-the-counter product, supplement, and beverage habit."
              },
              {
                "id": "bp-meds-q-pregnancy",
                "title": "Is this medicine safe with pregnancy or breastfeeding?",
                "detail": "Request product-specific advice before conception when possible and prompt review after a positive pregnancy test."
              },
              {
                "id": "bp-meds-q-monitoring",
                "title": "Which blood tests and follow-up readings are needed?",
                "detail": "Ask when kidney function, sodium, potassium, pulse, or other monitoring should occur."
              }
            ],
            "labs": [
              {
                "id": "bp-meds-lab-kidney",
                "title": "Kidney function",
                "detail": "Some classes require baseline and follow-up kidney assessment."
              },
              {
                "id": "bp-meds-lab-electrolytes",
                "title": "Sodium, potassium, and other electrolytes",
                "detail": "The relevant tests and timing depend on the medicine class and health status."
              },
              {
                "id": "bp-meds-lab-home",
                "title": "Home blood-pressure and pulse log",
                "detail": "Review technique, adherence, symptoms, and the full pattern."
              },
              {
                "id": "bp-meds-lab-other",
                "title": "Class-specific monitoring",
                "detail": "A clinician may review heart rate, weight, edema, uric acid, glucose, or other measures depending on the medicine."
              }
            ]
          },
          "lockedDosing": {
            "status": "clinical-review-required",
            "display": false,
            "reason": "Dose, titration, combinations, missed-dose instructions, sick-day holds, and treatment targets depend on the exact medicine, health conditions, laboratory results, pregnancy status, and clinician-approved plan."
          },
          "contentStatus": "researched",
          "contentTemplate": "medication",
          "researchBatch": "BATCH_04_BLOOD_PRESSURE",
          "editorialSourceIds": [
            "NHLBI_HIGH_BP_TREATMENT",
            "FDA_HYPERTENSION_MEDICINES",
            "MEDLINEPLUS_BP_MEDICINES",
            "MEDLINEPLUS_MEDICINE_RELATED_HTN"
          ],
          "relatedIds": [
            "hypertension",
            "bp-range",
            "bp-home-monitoring",
            "bp-lifestyle",
            "hypertension-diet",
            "hypertension-emergency",
            "heart-disease",
            "medication-emergency-safety"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "all dosing and titration",
              "medicine selection and combinations",
              "missed-dose instructions",
              "sick-day and procedure holds",
              "pregnancy and breastfeeding guidance",
              "kidney and liver adjustments",
              "class-specific interactions",
              "laboratory timing",
              "urgent adverse-effect wording"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_09_EMERGENCY_SAFETY"
          ]
        },
        {
          "id": "statin",
          "title": "Statin",
          "subtitle": "A prescription cholesterol-lowering medicine used to reduce LDL and cardiovascular risk when the expected benefit outweighs the risks.",
          "body": [
            "Purpose and class — Statins reduce cholesterol production in the liver and increase removal of LDL from the blood. They can lower the risk of heart attack and stroke in people likely to benefit.",
            "General use — Several statin products and strengths are available. Choice and intensity depend on cardiovascular risk, LDL pattern, age, pregnancy, liver and kidney health, interactions, tolerance, and treatment goals.",
            "Expected response — The lipid profile is usually reassessed after starting or changing treatment. Benefit is judged by LDL reduction, adherence, tolerance, and long-term cardiovascular-risk reduction.",
            "Common side effects — Headache, nausea, digestive symptoms, constipation, diarrhea, or muscle aches may occur. Many people take statins without significant side effects.",
            "Muscle warning — New unexplained muscle pain, tenderness, weakness, fever, or dark urine should be reported promptly. Severe symptoms require urgent assessment, especially with interacting medicines or acute illness.",
            "Liver and glucose effects — Liver-enzyme changes can occur, while serious liver injury is rare. Statins may slightly increase glucose or diabetes risk in people already predisposed, but the cardiovascular benefit may still be greater.",
            "Interactions — Other cholesterol medicines, selected antibiotics or antifungals, transplant medicines, HIV medicines, colchicine, grapefruit with some products, alcohol, and supplements can matter. Interaction rules are product-specific.",
            "Pregnancy and breastfeeding — Tell the clinician promptly about pregnancy, pregnancy plans, or breastfeeding. FDA advises that most pregnant patients should stop statins, while a small very-high-risk group may need individualized specialist decisions. Breastfeeding is not recommended when statin treatment is required.",
            "Kidney, liver, and older-adult cautions — Active liver disease, severe illness, kidney impairment, frailty, thyroid disease, and interacting medicines can change product choice, dose, or monitoring.",
            "Do not stop independently — Stopping may remove cardiovascular protection. Contact the prescriber or pharmacist for side effects, pregnancy, missed doses, surgery, acute illness, or access problems.",
            "Monitoring — Review the lipid profile, adherence, muscle symptoms, new medicines, pregnancy status, glucose risk, and liver tests when clinically indicated.",
            "Dosing requires clinical review — No product selection, starting dose, intensity, maximum dose, timing change, missed-dose instruction, interaction adjustment, or stop/restart instruction is displayed in this app."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "statin-task-product",
                "title": "Record the exact statin product and prescription",
                "detail": "Include generic and brand name, strength, timing, combination products, and the treatment reason."
              },
              {
                "id": "statin-task-symptoms",
                "title": "Track new muscle or digestive symptoms",
                "detail": "Record location, severity, timing, weakness, fever, dark urine, exercise changes, illness, and new medicines."
              },
              {
                "id": "statin-task-interactions",
                "title": "Review every medicine and supplement for interactions",
                "detail": "Include antibiotics, antifungals, HIV or transplant medicines, colchicine, other cholesterol products, herbal products, and grapefruit intake."
              },
              {
                "id": "statin-task-pregnancy",
                "title": "Record pregnancy plans, pregnancy, or breastfeeding",
                "detail": "Contact the prescriber promptly for product-specific advice rather than stopping or continuing by assumption."
              },
              {
                "id": "statin-task-adherence",
                "title": "Identify refill or adherence barriers",
                "detail": "Note cost, access, side effects, work schedule, swallowing, memory, and uncertainty about benefit."
              }
            ],
            "questions": [
              {
                "id": "statin-q-benefit",
                "title": "What cardiovascular benefit is expected for me?",
                "detail": "Ask how prior heart disease, diabetes, kidney disease, LDL, age, and other risk factors affect the benefit."
              },
              {
                "id": "statin-q-response",
                "title": "What LDL reduction or target should this statin achieve?",
                "detail": "Ask when the lipid profile will be repeated and how adherence will be assessed."
              },
              {
                "id": "statin-q-sideeffects",
                "title": "Which muscle, liver, or other symptoms should I report?",
                "detail": "Ask what needs routine review, prompt review, or urgent assessment."
              },
              {
                "id": "statin-q-interactions",
                "title": "Which medicines, foods, or supplements interact with this exact product?",
                "detail": "Interaction rules differ among statins and combinations."
              },
              {
                "id": "statin-q-pregnancy",
                "title": "What is the plan for pregnancy or breastfeeding?",
                "detail": "Request individualized advice before conception when possible and prompt review after a positive pregnancy test."
              },
              {
                "id": "statin-q-alternative",
                "title": "What are the options if LDL response or tolerance is not adequate?",
                "detail": "Ask about adherence, product changes, dose changes, or non-statin medicines without changing treatment independently."
              }
            ],
            "labs": [
              {
                "id": "statin-lab-lipid",
                "title": "Lipid profile",
                "detail": "Used to assess LDL response and whether the treatment plan is working as intended."
              },
              {
                "id": "statin-lab-liver",
                "title": "Liver tests when clinically indicated",
                "detail": "Baseline or symptom-triggered testing depends on history, product labeling, and clinical judgment."
              },
              {
                "id": "statin-lab-ck",
                "title": "Creatine kinase when significant muscle symptoms or special risk is present",
                "detail": "Routine testing is not the same as symptom-based assessment."
              },
              {
                "id": "statin-lab-secondary",
                "title": "Tests for contributing conditions when indicated",
                "detail": "Thyroid, kidney, liver, glucose, and interaction review may be relevant."
              }
            ]
          },
          "lockedDosing": {
            "status": "clinical-review-required",
            "display": false,
            "reason": "The exact product, treatment intensity, cardiovascular risk, LDL response, interactions, pregnancy status, liver and kidney function, symptoms, and clinician-approved plan determine dosing."
          },
          "contentStatus": "researched",
          "contentTemplate": "medication",
          "researchBatch": "BATCH_05_CHOLESTEROL_HEART",
          "editorialSourceIds": [
            "MEDLINEPLUS_STATINS",
            "FDA_STATIN_PREGNANCY",
            "CDC_CHOLESTEROL_TREATMENT"
          ],
          "relatedIds": [
            "cholesterol",
            "ldl",
            "heart-disease",
            "mediterranean-heart-diet",
            "cholesterol-lifestyle",
            "medication-emergency-safety"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "all products, doses, intensity categories, and timing",
              "treatment indications, thresholds, and target reductions",
              "missed-dose, stop, restart, surgery, and acute-illness instructions",
              "muscle and liver adverse-effect escalation",
              "drug, food, and supplement interactions",
              "pregnancy and breastfeeding decisions",
              "child, older-adult, kidney, liver, and frailty adjustments",
              "laboratory timing and non-statin treatment options"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_09_EMERGENCY_SAFETY"
          ]
        },
        {
          "id": "digestive-medicine-review",
          "title": "Medication and supplement digestive review",
          "subtitle": "A structured review of products that may contribute to constipation, diarrhea, nausea, or vomiting.",
          "body": [
            "Purpose — Medicines and supplements can improve health while also changing bowel movement, nausea, appetite, or fluid balance. A structured review helps identify timing patterns without stopping treatment independently.",
            "Constipation contributors — Iron, calcium, opioid pain medicines, anticholinergic medicines, some antidepressants, anticonvulsants, and some antacids may contribute in some people.",
            "Diarrhea contributors — Antibiotics, metformin, magnesium-containing antacids or supplements, laxatives, some cancer treatments, and liquid products containing sugar alcohols may contribute.",
            "Nausea or vomiting contributors — Many medicines can cause stomach symptoms, particularly after starting, increasing, combining products, or taking them differently from the prescribed instructions.",
            "Timing matters — Record the symptom start date, product start or dose-change date, timing with meals, missed doses, recent antibiotics, and whether symptoms improve or worsen between doses.",
            "Do not stop independently — Abruptly stopping insulin, blood-pressure medicines, steroids, seizure medicines, psychiatric medicines, anticoagulants, or other treatment can be dangerous. Use a clinician or pharmacist plan.",
            "Sick-day planning — Vomiting, diarrhea, dehydration, fever, fasting, or reduced intake may change the safety of some diabetes, kidney, blood-pressure, diuretic, or anti-inflammatory medicines.",
            "Interaction review — Include prescription medicines, over-the-counter products, vitamins, minerals, herbs, powders, teas, gummies, and products used only occasionally.",
            "Monitoring — A clinician may review hydration, kidney function, electrolytes, blood count, glucose, thyroid status, stool testing, or other tests depending on symptoms and products.",
            "Dosing requires clinical review — This app does not provide start, stop, dose-change, missed-dose, laxative, antidiarrheal, antiemetic, or sick-day instructions."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "digestive-med-task-list",
                "title": "Create one complete product list",
                "detail": "Include prescriptions, nonprescription medicines, iron, calcium, magnesium, fiber products, herbs, powders, gummies, and occasional products."
              },
              {
                "id": "digestive-med-task-timing",
                "title": "Compare symptoms with product timing",
                "detail": "Record starts, dose changes, meals, missed doses, antibiotics, bowel treatments, and symptom onset."
              },
              {
                "id": "digestive-med-task-labels",
                "title": "Check nonprescription labels",
                "detail": "Look for magnesium, iron, calcium, laxatives, sugar alcohols, caffeine, and duplicate ingredients to discuss with a pharmacist."
              },
              {
                "id": "digestive-med-task-sickday",
                "title": "Request a written sick-day plan",
                "detail": "Clarify what to do during vomiting, diarrhea, dehydration, fever, fasting, or reduced intake."
              }
            ],
            "questions": [
              {
                "id": "digestive-med-q-cause",
                "title": "Could one of my medicines or supplements be contributing?",
                "detail": "Ask whether timing, formulation, dose, combination, or another cause is more likely."
              },
              {
                "id": "digestive-med-q-change",
                "title": "Can the plan be adjusted safely without losing treatment benefit?",
                "detail": "Discuss alternatives, timing, formulation, supportive treatment, and monitoring rather than stopping independently."
              },
              {
                "id": "digestive-med-q-otc",
                "title": "Which over-the-counter bowel or nausea product is safe for me?",
                "detail": "Ask about age, pregnancy, kidney function, bleeding risk, fever, blood in stool, interactions, and duration."
              },
              {
                "id": "digestive-med-q-sickday",
                "title": "What is my written vomiting, diarrhea, dehydration, and missed-dose plan?",
                "detail": "Make the instructions product-specific and include when to call the clinic or seek urgent care."
              }
            ],
            "labs": [
              {
                "id": "digestive-med-lab-review",
                "title": "Monitoring tests to discuss",
                "detail": "Electrolytes, kidney function, glucose, blood count, thyroid tests, stool tests, or other monitoring depends on symptoms and medicines."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "medication",
          "researchBatch": "BATCH_06_DIGESTIVE_SUPPORT",
          "editorialSourceIds": [
            "NIDDK_CONSTIPATION_CAUSES",
            "NIDDK_CONSTIPATION_TREATMENT",
            "NIDDK_DIARRHEA_CAUSES",
            "MEDLINEPLUS_NAUSEA_VOMITING_ADULTS"
          ],
          "relatedIds": [
            "gastroenteritis",
            "constipation",
            "hydration-support",
            "fiber-support",
            "meal-tolerance",
            "metformin",
            "iron-supplement",
            "medication-emergency-safety"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "productLists",
              "doseChanges",
              "stopRestartInstructions",
              "missedDoseInstructions",
              "sickDayRules",
              "otcProducts",
              "pregnancyChildKidneyLiverGuidance",
              "monitoring"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_01_ENERGY_IRON",
            "BATCH_09_EMERGENCY_SAFETY"
          ],
          "lockedDosing": {
            "status": "clinical-review-required",
            "display": false,
            "reason": "Start, stop, dose change, missed-dose, sick-day, interaction, and monitoring instructions require product-specific clinical review."
          }
        }
      ]
    },
    {
      "id": "er",
      "title": "Urgent help",
      "icon": "🚨",
      "subtitle": "Red flags and emergency guidance.",
      "items": [
        {
          "id": "glucose-emergency",
          "title": "Glucose emergency guidance",
          "subtitle": "Severe low glucose and diabetic ketoacidosis or hyperosmolar warning signs require immediate action. This page supports a clinician-approved emergency plan.",
          "body": [
            "Purpose — This page identifies patterns that may require emergency help. It does not replace the person’s written diabetes plan or local emergency services.",
            "Severe low glucose — Seizure, loss of consciousness, inability to swallow, severe confusion, or inability to cooperate with treatment can indicate severe hypoglycemia.",
            "Oral safety — Do not give food or drink by mouth to a person who is unconscious, having a seizure, or unable to swallow safely.",
            "Glucagon — Use prescribed glucagon only according to the approved plan and device instructions. Call emergency services as directed, especially when recovery is incomplete or the situation is severe.",
            "Dangerous high glucose — Diabetic ketoacidosis can occur when the body does not have enough insulin. It is more common in type 1 diabetes but can occur in type 2 diabetes.",
            "High-glucose warning signs — Repeated vomiting, abdominal pain, deep or rapid breathing, fruity-smelling breath, severe thirst or urination, marked weakness, increasing drowsiness, confusion, dehydration, or fainting require urgent assessment.",
            "Insulin-delivery failure — A pump, infusion-set, pen, storage, or supply problem can interrupt insulin. Follow the approved backup and ketone plan and seek urgent help when insulin delivery is uncertain.",
            "Hyperosmolar emergency — Very high glucose with profound dehydration, confusion, drowsiness, seizure, or loss of consciousness can be life-threatening even without obvious ketone symptoms.",
            "What to bring — Take the medicine list, insulin products, devices, glucose or sensor record, ketone result when available, allergies, recent food and fluid history, and the last known medicine or insulin times.",
            "Do not drive yourself if — Consciousness, vision, coordination, judgment, breathing, or the ability to respond safely is impaired. Use local emergency services.",
            "After recovery — Severe or unexplained episodes require prompt review of medicines, insulin, devices, food, activity, alcohol, illness, kidney function, and the written emergency plan."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "glucose-emergency-task-plan",
                "title": "Prepare a one-page glucose emergency plan",
                "detail": "Include personal low and high thresholds, approved treatment, glucagon, ketones, emergency contacts, and local emergency number."
              },
              {
                "id": "glucose-emergency-task-train",
                "title": "Train the people who may need to help",
                "detail": "Review recognition, oral safety, glucagon device use when prescribed, and when to call emergency services."
              },
              {
                "id": "glucose-emergency-task-kit",
                "title": "Check the emergency kit monthly",
                "detail": "Review glucose treatment, glucagon expiry, ketone supplies, meter or sensor backup, batteries, insulin, needles, identification, and contact information."
              },
              {
                "id": "glucose-emergency-task-backup",
                "title": "Prepare an insulin-delivery backup",
                "detail": "Keep clinician-approved instructions and supplies for pump, pen, vial, heat, travel, power, or loss problems."
              }
            ],
            "questions": [
              {
                "id": "glucose-emergency-q-low",
                "title": "What exactly should others do for severe low glucose?",
                "detail": "Ask for oral safety, glucagon, positioning, monitoring, and emergency-call instructions."
              },
              {
                "id": "glucose-emergency-q-ketone",
                "title": "When should ketones be checked and what result is urgent?",
                "detail": "Ask for written blood or urine ketone guidance."
              },
              {
                "id": "glucose-emergency-q-high",
                "title": "Which high-glucose symptoms require emergency care?",
                "detail": "Clarify vomiting, breathing, hydration, consciousness, pregnancy, child, and pump-failure situations."
              },
              {
                "id": "glucose-emergency-q-after",
                "title": "What follow-up is needed after a severe episode?",
                "detail": "Ask about medicine, device, kidney, illness, education, driving, work, and caregiver review."
              }
            ],
            "labs": [
              {
                "id": "glucose-emergency-lab-glucose",
                "title": "Immediate glucose confirmation when it does not delay treatment",
                "detail": "Emergency teams select the appropriate bedside or laboratory method."
              },
              {
                "id": "glucose-emergency-lab-ketone",
                "title": "Blood or urine ketones",
                "detail": "Ketone results can support assessment of diabetic ketoacidosis."
              },
              {
                "id": "glucose-emergency-lab-metabolic",
                "title": "Electrolytes, kidney function, blood gases, and acid-base testing",
                "detail": "These may be used in emergency evaluation of severe high glucose or dehydration."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "emergency",
          "researchBatch": "BATCH_03_DIABETES_GLUCOSE",
          "editorialSourceIds": [
            "CDC_LOW_BLOOD_SUGAR_TREATMENT",
            "CDC_DKA",
            "NIDDK_LOW_BLOOD_GLUCOSE",
            "NIDDK_MANAGING_DIABETES",
            "FDA_DIABETES_DEVICE_ALERTS"
          ],
          "relatedIds": [
            "diabetes",
            "low-sugar-symptoms",
            "high-sugar-symptoms",
            "insulin",
            "metformin",
            "sugar-range",
            "er-red-flags"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "all emergency instructions",
              "local emergency number",
              "glucagon steps",
              "oral carbohydrate treatment",
              "ketone thresholds",
              "pump failure algorithm",
              "driving instructions",
              "child and pregnancy guidance"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_09_EMERGENCY_SAFETY"
          ]
        },
        {
          "id": "hypertension-emergency",
          "title": "Urgent blood-pressure symptoms",
          "subtitle": "A very high reading must be interpreted with symptoms, pregnancy status, measurement quality, and the written clinical action plan.",
          "body": [
            "Purpose — This page helps separate a concerning number from symptoms that may signal stroke, heart attack, aortic disease, heart failure, seizure, or another emergency. It does not replace emergency services.",
            "Check safety first — If severe symptoms are present, call local emergency services. Do not delay care to repeat the reading, search the app, take an extra dose, or drive yourself.",
            "Emergency symptoms — Chest pain; severe shortness of breath; sudden weakness or numbness; facial droop; trouble speaking; severe sudden headache; confusion; seizure; fainting; sudden vision change; or severe chest, back, or abdominal pain require emergency assessment.",
            "Very high reading without emergency symptoms — A reading higher than 180 systolic and/or higher than 120 diastolic requires prompt clinician guidance. Follow the written plan and confirm technique only when it is safe to do so.",
            "Repeat measurement safely — If there are no emergency symptoms and the plan allows, sit quietly, use the correct cuff and position, and repeat after a brief interval. Record both readings; do not keep checking repeatedly for reassurance.",
            "Medicines — Do not take an extra dose, borrow medicine, or stop treatment unless the clinician-approved plan gives that exact instruction. Missed-dose actions differ by product.",
            "Pregnancy and postpartum — A worsening headache, vision change, trouble breathing, chest or upper-abdominal pain, nausea or vomiting, sudden swelling, seizure, or a blood-pressure spike during pregnancy or after birth requires urgent medical care.",
            "Low blood pressure can also be urgent — Fainting, shock symptoms, severe bleeding, dehydration, infection, allergic reaction, chest pain, or breathing difficulty with a low reading require urgent assessment.",
            "What to bring — Bring the medicine list, allergies, pregnancy status, recent readings, monitor if practical, medical conditions, and the time symptoms began. Do not delay transport to collect these items.",
            "After urgent review — Ask for a written plan covering home targets, medicine timing, follow-up, repeat laboratory tests, and which symptoms or readings require emergency care."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "bp-emergency-task-plan",
                "title": "Keep a written blood-pressure action plan",
                "detail": "Include routine targets, who to call, same-day thresholds, emergency symptoms, and local emergency instructions."
              },
              {
                "id": "bp-emergency-task-meds",
                "title": "Keep an updated medicine and allergy list",
                "detail": "Include the last dose time and any recent missed doses or changes."
              },
              {
                "id": "bp-emergency-task-device",
                "title": "Record the monitor and cuff details",
                "detail": "Do not delay emergency care to retrieve the device."
              },
              {
                "id": "bp-emergency-task-pregnancy",
                "title": "Record pregnancy or postpartum status",
                "detail": "High blood pressure can become urgent during pregnancy and after delivery."
              }
            ],
            "questions": [
              {
                "id": "bp-emergency-q-now",
                "title": "What should I do right now?",
                "detail": "Use emergency services for severe symptoms rather than waiting for an online response."
              },
              {
                "id": "bp-emergency-q-extra",
                "title": "Should I take an extra or missed dose?",
                "detail": "Only follow product-specific instructions from the clinician or pharmacist."
              },
              {
                "id": "bp-emergency-q-followup",
                "title": "What follow-up is required after this episode?",
                "detail": "Ask about medicine review, laboratory tests, home monitoring, and specialist care."
              },
              {
                "id": "bp-emergency-q-pregnancy",
                "title": "Could this be a pregnancy or postpartum hypertensive disorder?",
                "detail": "Urgent obstetric assessment may be needed during pregnancy or after birth."
              }
            ]
          },
          "contentStatus": "researched",
          "contentTemplate": "blood-pressure-emergency",
          "researchBatch": "BATCH_04_BLOOD_PRESSURE",
          "editorialSourceIds": [
            "NHLBI_HIGH_BP_LIVING",
            "FDA_HIGH_BP_SILENT_KILLER",
            "AHA_BP_CATEGORIES",
            "NHLBI_BP_PREGNANCY",
            "ACOG_PREECLAMPSIA"
          ],
          "relatedIds": [
            "hypertension",
            "bp-range",
            "bp-home-monitoring",
            "bp-meds",
            "heart-disease",
            "headache",
            "er-red-flags"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "all numeric urgent thresholds",
              "repeat-measurement interval",
              "same-day versus emergency pathways",
              "medicine actions",
              "pregnancy and postpartum thresholds",
              "transport guidance",
              "local emergency number",
              "low-blood-pressure emergency wording"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_09_EMERGENCY_SAFETY"
          ]
        },
        {
          "id": "er-red-flags",
          "title": "Emergency red flags",
          "subtitle": "Recognize severe or rapidly worsening symptoms, call local emergency services, and avoid delaying care.",
          "body": [
            "Purpose — This page groups broad warning signs that can require emergency assessment. It does not diagnose the cause or replace local emergency services.",
            "Breathing and circulation — Severe trouble breathing, blue or gray lips or skin, chest pressure or pain, fainting, signs of shock, or rapidly worsening weakness can be emergencies.",
            "Brain and consciousness — Sudden one-sided weakness or numbness, facial droop, trouble speaking, sudden vision loss, a severe sudden headache, seizure, new confusion, inability to wake normally, or loss of consciousness require urgent action.",
            "Allergic reaction — Swelling of the lips, tongue, face, or throat; trouble breathing or swallowing; widespread hives with dizziness; weak pulse; fainting; or rapidly worsening symptoms may indicate anaphylaxis.",
            "Bleeding, vomiting, and dehydration — Uncontrolled bleeding, vomiting blood, black or bloody stool, repeated inability to keep liquids down, minimal urine, severe dehydration, or severe abdominal pain can require emergency care.",
            "Medicines, supplements, and poisoning — Suspected overdose, accidental child ingestion, a serious reaction, the wrong product or dose, or a dangerous interaction needs immediate expert guidance. Do not wait for symptoms when a poisoning exposure is possible.",
            "Do not delay care — Do not search the app, repeat measurements for reassurance, take extra medicine, give food or drink to someone who cannot swallow safely, or drive when breathing, consciousness, vision, coordination, or judgment is impaired.",
            "Prepare for responders — Note when symptoms began, the medicine and supplement list, allergies, diagnoses, pregnancy status, recent readings, possible exposures, and any clinician-approved emergency plan.",
            "Local instructions matter — Emergency numbers, poison services, crisis services, transport advice, and condition-specific actions must be adapted to the user’s location and clinical plan."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "er-red-flags-task-contacts",
                "title": "Record local emergency and poison-service contacts",
                "detail": "Keep the correct local numbers with the printed plan and phone contacts."
              },
              {
                "id": "er-red-flags-task-list",
                "title": "Keep one current medicine, supplement, and allergy list",
                "detail": "Include exact product names, strengths when known, routes, last doses, and important diagnoses."
              },
              {
                "id": "er-red-flags-task-onset",
                "title": "Record when severe symptoms started",
                "detail": "Use the first known time for stroke-like, chest, breathing, seizure, bleeding, or consciousness changes."
              },
              {
                "id": "er-red-flags-task-transport",
                "title": "Prepare a safe transport plan",
                "detail": "Clarify when emergency transport is needed and who can support dependents or bring essential records."
              }
            ],
            "questions": [
              {
                "id": "er-red-flags-q-now",
                "title": "Which symptoms mean I should call emergency services immediately?",
                "detail": "Ask for condition-specific warning signs and local instructions."
              },
              {
                "id": "er-red-flags-q-drive",
                "title": "When should I avoid driving myself?",
                "detail": "Clarify breathing, consciousness, vision, coordination, severe pain, and treatment-related risks."
              },
              {
                "id": "er-red-flags-q-bring",
                "title": "What information should I bring or send with the patient?",
                "detail": "Ask about medicine lists, allergies, devices, pregnancy status, readings, and symptom-onset time."
              },
              {
                "id": "er-red-flags-q-plan",
                "title": "Which emergency plans should be written in advance?",
                "detail": "Discuss diabetes, asthma, allergy, seizure, heart, blood-pressure, mental-health, and poisoning plans when relevant."
              }
            ]
          },
          "relatedIds": [
            "heart-stroke-emergency",
            "breathing-allergy-emergency",
            "seizure-consciousness-emergency",
            "bleeding-dehydration-emergency",
            "medication-emergency-safety",
            "supplement-emergency-safety",
            "glucose-emergency",
            "hypertension-emergency"
          ],
          "contentStatus": "researched",
          "researchBatch": "BATCH_09_EMERGENCY_SAFETY",
          "editorialSourceIds": [
            "MEDLINEPLUS_RECOGNIZING_EMERGENCIES",
            "MEDLINEPLUS_ER_ADULT",
            "CDC_HEART_ATTACK",
            "CDC_STROKE_SIGNS",
            "MEDLINEPLUS_ANAPHYLAXIS",
            "CDC_SEIZURE_FIRST_AID",
            "FDA_SIDE_EFFECTS",
            "FDA_DRUG_INTERACTIONS",
            "FDA_PATIENT_LABELING",
            "ODS_SUPPLEMENT_SAFETY",
            "HRSA_POISON_HELP"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "all emergency wording",
              "local emergency and poison-service numbers",
              "transport and driving guidance",
              "oral-safety and positioning instructions",
              "pregnancy, child, older-adult, disability, and safeguarding adaptations"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_04_BLOOD_PRESSURE"
          ],
          "contentTemplate": "emergency-safety"
        },
        {
          "id": "heart-stroke-emergency",
          "title": "Heart attack and stroke warning signs",
          "subtitle": "Sudden chest, breathing, neurologic, or circulation symptoms require immediate emergency assessment.",
          "body": [
            "Purpose — Heart attack and stroke are time-sensitive emergencies. Symptoms can vary, and uncertainty should not delay calling local emergency services.",
            "Possible heart-attack signs — Chest pain, pressure, squeezing, fullness, or discomfort may occur with shortness of breath, sweating, nausea, lightheadedness, unusual weakness, or discomfort in the arm, shoulder, back, neck, or jaw.",
            "Possible stroke signs — Sudden facial droop, one-sided weakness or numbness, trouble speaking or understanding, sudden vision change, sudden loss of balance or coordination, or a sudden severe headache can indicate stroke.",
            "Act on the time — Record when the person was last known well or when symptoms first appeared. Do not wait to see whether symptoms disappear.",
            "Do not self-treat from the app — Do not take aspirin, extra blood-pressure medicine, or another product unless the local emergency dispatcher or clinician-approved plan gives that instruction.",
            "Transport — Use emergency transport when advised. Do not drive yourself when symptoms, judgment, vision, coordination, or consciousness may be impaired.",
            "What to bring — Provide allergies, medicines and supplements, diagnoses, recent procedures, bleeding risks, pregnancy status, and the symptom-onset time.",
            "After transient symptoms — Symptoms that resolve can still require urgent assessment because a transient ischemic attack or intermittent cardiac problem may precede a major event."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "heart-stroke-task-fast",
                "title": "Write down the stroke FAST signs and local emergency number",
                "detail": "Keep the prompt visible for household members or caregivers."
              },
              {
                "id": "heart-stroke-task-onset",
                "title": "Record the last-known-well or symptom-onset time",
                "detail": "This information can affect emergency evaluation and treatment decisions."
              },
              {
                "id": "heart-stroke-task-list",
                "title": "Keep heart, stroke, bleeding, and medicine history current",
                "detail": "Include anticoagulants, antiplatelet medicines, recent procedures, allergies, and prior events."
              }
            ],
            "questions": [
              {
                "id": "heart-stroke-q-signs",
                "title": "Which heart or stroke symptoms require immediate emergency action?",
                "detail": "Ask about atypical symptoms and personal risk factors."
              },
              {
                "id": "heart-stroke-q-medicine",
                "title": "Should any medicine be used before help arrives?",
                "detail": "Only follow local emergency or clinician-approved instructions."
              },
              {
                "id": "heart-stroke-q-transport",
                "title": "When is ambulance transport safer than private transport?",
                "detail": "Clarify local guidance and barriers to access."
              }
            ]
          },
          "relatedIds": [
            "heart-disease",
            "hypertension",
            "cholesterol",
            "hypertension-emergency",
            "er-red-flags"
          ],
          "contentStatus": "researched",
          "contentTemplate": "emergency-safety",
          "researchBatch": "BATCH_09_EMERGENCY_SAFETY",
          "editorialSourceIds": [
            "CDC_HEART_ATTACK",
            "CDC_STROKE_SIGNS",
            "MEDLINEPLUS_RECOGNIZING_EMERGENCIES"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "all symptom thresholds and emergency actions",
              "aspirin or medicine instructions",
              "transport advice",
              "pregnancy and child adaptations"
            ]
          }
        },
        {
          "id": "breathing-allergy-emergency",
          "title": "Severe breathing and allergic reactions",
          "subtitle": "Severe breathing difficulty, airway swelling, or rapidly worsening allergy symptoms can become life-threatening.",
          "body": [
            "Purpose — This page groups severe breathing and allergic warning signs. It does not identify the cause or replace an asthma or allergy action plan.",
            "Emergency breathing signs — Severe shortness of breath, inability to speak normally, marked chest tightness, exhaustion, confusion, unusual drowsiness, blue or gray lips or skin, or collapse require emergency help.",
            "Possible anaphylaxis — Swelling of the lips, tongue, face, or throat; trouble swallowing; wheezing; widespread hives; vomiting with dizziness; weak pulse; fainting; or rapidly worsening symptoms after a food, medicine, supplement, sting, or exposure can indicate anaphylaxis.",
            "Use prescribed rescue treatment only as trained — Follow the person’s clinician-approved inhaler, epinephrine, or other emergency plan and device instructions. Do not rely on the app for product selection, dose, or administration technique.",
            "Call emergency services — Severe symptoms can recur or worsen after initial improvement. Emergency assessment may still be needed after prescribed rescue treatment.",
            "Oral safety — Do not give food, drink, or tablets to a person who is unconscious, having a seizure, vomiting repeatedly, or unable to swallow safely.",
            "Possible triggers — Bring the suspected food, medicine, supplement, insect, chemical, or product label when safe to do so. Record the exposure time and symptom sequence.",
            "Do not leave the person alone — Monitor breathing and responsiveness while following dispatcher or trained first-aid instructions."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "breathing-allergy-task-plan",
                "title": "Keep the approved asthma or allergy action plan visible",
                "detail": "Include exact rescue products, device location, expiry checks, and emergency contacts."
              },
              {
                "id": "breathing-allergy-task-train",
                "title": "Train household or workplace helpers",
                "detail": "Review recognition, device use when prescribed, emergency calling, and oral safety."
              },
              {
                "id": "breathing-allergy-task-trigger",
                "title": "Record suspected triggers and reaction timing",
                "detail": "Include foods, medicines, supplements, stings, exercise, infections, and environmental exposures."
              }
            ],
            "questions": [
              {
                "id": "breathing-allergy-q-action",
                "title": "What exact signs mean emergency action?",
                "detail": "Ask how to distinguish routine symptoms from severe breathing difficulty or anaphylaxis."
              },
              {
                "id": "breathing-allergy-q-device",
                "title": "How should the prescribed rescue device be used?",
                "detail": "Request hands-on training and a written plan."
              },
              {
                "id": "breathing-allergy-q-after",
                "title": "What follow-up is needed after a severe reaction?",
                "detail": "Ask about observation, trigger evaluation, replacement devices, and referral."
              }
            ]
          },
          "relatedIds": [
            "asthma",
            "supplement-side-effects",
            "supplement-emergency-safety",
            "medication-emergency-safety",
            "er-red-flags"
          ],
          "contentStatus": "researched",
          "contentTemplate": "emergency-safety",
          "researchBatch": "BATCH_09_EMERGENCY_SAFETY",
          "editorialSourceIds": [
            "MEDLINEPLUS_ANAPHYLAXIS",
            "MEDLINEPLUS_RECOGNIZING_EMERGENCIES",
            "FDA_PATIENT_LABELING"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "epinephrine, inhaler, and rescue-product instructions",
              "positioning and first aid",
              "observation duration",
              "local emergency actions",
              "pregnancy and child adaptations"
            ]
          }
        },
        {
          "id": "seizure-consciousness-emergency",
          "title": "Seizure, fainting, and altered consciousness",
          "subtitle": "Protect the person from injury, monitor breathing, and use emergency services when recovery is delayed or warning signs are present.",
          "body": [
            "Purpose — Seizure, fainting, confusion, and loss of consciousness have many possible causes. New, prolonged, repeated, injured, or poorly recovering episodes require urgent assessment.",
            "During a seizure — Protect the person from nearby hazards, place something soft under the head when practical, loosen restrictive clothing, and time the event. Do not restrain the person or put anything in the mouth.",
            "Call emergency services when — A seizure lasts longer than the person’s approved action-plan limit, another seizure follows without full recovery, breathing or waking is difficult, injury occurs, the seizure happens in water, or it is a first known seizure.",
            "Fainting and unresponsiveness — Call emergency services when the person does not wake promptly, has chest pain, trouble breathing, major bleeding, pregnancy, diabetes, injury, persistent confusion, or another severe symptom.",
            "Oral safety — Do not give food, drink, or medicine by mouth until the person is fully alert and can swallow safely.",
            "Possible contributors — Glucose problems, heart rhythm problems, stroke, infection, dehydration, bleeding, medicines, overdose, pregnancy complications, and neurologic conditions require clinical evaluation.",
            "What to observe — Record the start and end time, movements, breathing, color change, injury, recovery, possible trigger, medicine adherence, glucose result when relevant, and whether the person returned to usual behavior.",
            "Follow the written plan — Use prescribed rescue medicine only according to the clinician-approved seizure or glucose plan and training."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "seizure-task-time",
                "title": "Learn how to time and describe an episode",
                "detail": "Record start, end, movements, awareness, breathing, injury, and recovery."
              },
              {
                "id": "seizure-task-plan",
                "title": "Keep condition-specific action plans accessible",
                "detail": "Include seizure, glucose, allergy, and cardiac plans when relevant."
              },
              {
                "id": "seizure-task-safety",
                "title": "Review household and workplace injury prevention",
                "detail": "Address water, heights, driving, machinery, bathing, and supervision needs with a clinician."
              }
            ],
            "questions": [
              {
                "id": "seizure-q-call",
                "title": "Which episode features require emergency services?",
                "detail": "Ask about duration, recurrence, injury, pregnancy, water, breathing, and recovery."
              },
              {
                "id": "seizure-q-rescue",
                "title": "Is rescue medicine prescribed, and who should be trained?",
                "detail": "Request product-specific training and written instructions."
              },
              {
                "id": "seizure-q-evaluation",
                "title": "What evaluation is needed after fainting, confusion, or a first seizure?",
                "detail": "Ask about cardiac, neurologic, glucose, medicine, and injury assessment."
              }
            ]
          },
          "relatedIds": [
            "glucose-emergency",
            "heart-stroke-emergency",
            "er-red-flags"
          ],
          "contentStatus": "researched",
          "contentTemplate": "emergency-safety",
          "researchBatch": "BATCH_09_EMERGENCY_SAFETY",
          "editorialSourceIds": [
            "CDC_SEIZURE_FIRST_AID",
            "MEDLINEPLUS_RECOGNIZING_EMERGENCIES",
            "MEDLINEPLUS_ER_ADULT"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "seizure duration thresholds",
              "rescue medicine instructions",
              "positioning and first aid",
              "driving and activity restrictions",
              "pregnancy and child adaptations"
            ]
          }
        },
        {
          "id": "bleeding-dehydration-emergency",
          "title": "Severe bleeding and dehydration",
          "subtitle": "Heavy bleeding, shock signs, or inability to replace fluid losses can require urgent emergency treatment.",
          "body": [
            "Purpose — This page groups severe bleeding and dehydration warning signs. The underlying cause may be injury, gastrointestinal bleeding, pregnancy complication, infection, medicine effect, or another condition.",
            "Bleeding red flags — Uncontrolled bleeding, vomiting blood, coughing blood, black or bloody stool, heavy vaginal bleeding with weakness or pain, or bleeding with fainting, confusion, pale clammy skin, or breathing difficulty requires emergency assessment.",
            "Dehydration red flags — Repeated inability to keep liquids down, minimal urine, severe weakness, confusion, fainting, rapid breathing, shock signs, or worsening illness can indicate severe dehydration.",
            "Higher-risk situations — Infants, children, older adults, pregnancy or postpartum status, kidney or heart disease, diabetes, immune suppression, anticoagulants, and recent surgery can lower the threshold for urgent review.",
            "Do not delay — Do not rely on oral fluids when swallowing is unsafe, vomiting is persistent, consciousness is impaired, or severe bleeding or shock signs are present.",
            "Medicine review — Bring anticoagulants, antiplatelet medicines, diuretics, diabetes medicines, laxatives, supplements, and recent dose information. Do not stop or add medicine without emergency or clinician guidance.",
            "What to record — Note the amount and appearance of blood or fluid loss, stool or vomit changes, urine output, fever, pain, pregnancy status, recent travel or antibiotics, and symptom onset.",
            "After stabilization — Follow-up should address the cause, medicine safety, kidney function, anemia risk, and prevention of recurrence."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "bleeding-task-list",
                "title": "Record medicines and supplements that affect bleeding or fluid balance",
                "detail": "Include anticoagulants, antiplatelets, NSAIDs, diuretics, laxatives, and herbal products."
              },
              {
                "id": "bleeding-task-output",
                "title": "Track vomiting, diarrhea, urine, and visible blood when safe",
                "detail": "Do not delay emergency care to complete a diary."
              },
              {
                "id": "bleeding-task-risk",
                "title": "Record pregnancy, recent procedures, kidney disease, and prior bleeding",
                "detail": "Keep this information with the emergency plan."
              }
            ],
            "questions": [
              {
                "id": "bleeding-q-urgent",
                "title": "Which bleeding or dehydration signs require emergency care?",
                "detail": "Ask for individualized thresholds and higher-risk situations."
              },
              {
                "id": "bleeding-q-meds",
                "title": "What should happen with medicines during acute fluid loss or bleeding?",
                "detail": "Product-specific instructions require clinical review."
              },
              {
                "id": "bleeding-q-followup",
                "title": "What follow-up tests are needed after stabilization?",
                "detail": "Ask about blood count, kidney function, electrolytes, source evaluation, and medicine review."
              }
            ]
          },
          "relatedIds": [
            "gastroenteritis",
            "constipation",
            "hydration-support",
            "anemia",
            "medication-emergency-safety",
            "er-red-flags"
          ],
          "contentStatus": "researched",
          "contentTemplate": "emergency-safety",
          "researchBatch": "BATCH_09_EMERGENCY_SAFETY",
          "editorialSourceIds": [
            "MEDLINEPLUS_ER_ADULT",
            "MEDLINEPLUS_RECOGNIZING_EMERGENCIES"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "bleeding amount thresholds",
              "oral rehydration instructions",
              "medicine holds",
              "pregnancy and child guidance",
              "transport and emergency actions"
            ]
          }
        },
        {
          "id": "medication-emergency-safety",
          "title": "Medication emergency warnings",
          "subtitle": "Serious reactions, overdose, duplicate dosing, abrupt withdrawal, or dangerous interactions need rapid expert assessment.",
          "body": [
            "Purpose — This page helps organize medication emergencies. It does not replace the product label, prescriber, pharmacist, poison service, or local emergency services.",
            "Call emergency services for — Severe trouble breathing, facial or throat swelling, collapse, seizure, loss of consciousness, severe confusion, chest pain, stroke signs, uncontrolled bleeding, or another life-threatening reaction.",
            "Possible overdose or wrong dose — Contact the appropriate poison or emergency service promptly. Do not wait for symptoms and do not induce vomiting unless a qualified service gives that instruction.",
            "Serious adverse effects — A reaction may be serious when it is life-threatening, causes hospitalization, disability, major organ injury, a birth defect, or another medically important event.",
            "Interactions and duplicate ingredients — Prescription medicines, over-the-counter products, combination cold or pain products, alcohol, recreational substances, and supplements can change effects or create duplicate dosing.",
            "Do not stop abruptly by assumption — Some medicines can cause dangerous withdrawal or loss of disease control. Emergency clinicians or the prescriber should guide stop, restart, missed-dose, and replacement decisions.",
            "Bring exact product information — Keep the container, label, blister pack, device, pharmacy record, strength, route, last dose, possible amount taken, and timing available.",
            "After immediate care — Report and review serious reactions through the locally appropriate system, update allergy and adverse-reaction records, and revise the medication plan."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "med-emergency-task-list",
                "title": "Maintain one exact medication list",
                "detail": "Include prescriptions, over-the-counter products, combination ingredients, strengths, routes, and last doses."
              },
              {
                "id": "med-emergency-task-storage",
                "title": "Store medicines to reduce mix-ups and child access",
                "detail": "Keep products in labeled containers and separate look-alike or high-risk medicines."
              },
              {
                "id": "med-emergency-task-poison",
                "title": "Record the locally appropriate poison-service contact",
                "detail": "Keep it with household emergency contacts; localization is required."
              },
              {
                "id": "med-emergency-task-reaction",
                "title": "Document serious reactions after urgent care",
                "detail": "Record the exact product, timing, symptoms, treatment, and clinician conclusion."
              }
            ],
            "questions": [
              {
                "id": "med-emergency-q-reaction",
                "title": "Which reactions require emergency care versus prompt prescriber contact?",
                "detail": "Ask for product-specific red flags."
              },
              {
                "id": "med-emergency-q-missed",
                "title": "What are the exact missed-dose and accidental-double-dose instructions?",
                "detail": "These differ by product and must not be generalized."
              },
              {
                "id": "med-emergency-q-withdrawal",
                "title": "Which medicines must not be stopped abruptly?",
                "detail": "Request a written plan for access problems, illness, surgery, or side effects."
              },
              {
                "id": "med-emergency-q-report",
                "title": "How should a serious reaction be documented and reported?",
                "detail": "Use the locally appropriate medication-safety system."
              }
            ]
          },
          "relatedIds": [
            "metformin",
            "insulin",
            "bp-meds",
            "statin",
            "digestive-medicine-review",
            "supplement-emergency-safety",
            "er-red-flags"
          ],
          "contentStatus": "researched",
          "contentTemplate": "emergency-safety",
          "researchBatch": "BATCH_09_EMERGENCY_SAFETY",
          "editorialSourceIds": [
            "FDA_SIDE_EFFECTS",
            "FDA_DRUG_INTERACTIONS",
            "FDA_PATIENT_LABELING",
            "FDA_MEDWATCH",
            "HRSA_POISON_HELP"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "all product-specific emergency symptoms",
              "overdose and poison instructions",
              "missed-dose, double-dose, stop, restart, and withdrawal instructions",
              "reporting pathways",
              "pregnancy and child guidance"
            ]
          }
        },
        {
          "id": "supplement-emergency-safety",
          "title": "Supplement emergency warnings",
          "subtitle": "Supplements can cause serious reactions, toxicity, interactions, contamination, and accidental poisoning.",
          "body": [
            "Purpose — This page applies emergency safety principles to vitamins, minerals, herbs, performance products, gummies, powders, drinks, and prescription nutrient products.",
            "Call emergency services for — Severe trouble breathing, facial or throat swelling, collapse, seizure, loss of consciousness, severe confusion, chest pain, stroke signs, uncontrolled bleeding, or another life-threatening reaction.",
            "Possible overdose or child ingestion — Contact the appropriate poison or emergency service promptly. Iron-containing products are particularly dangerous in accidental childhood overdose.",
            "Natural does not mean harmless — High amounts, multiple products, concentrated extracts, contaminated products, and use instead of prescribed care can cause serious harm.",
            "Interactions — Supplements can increase bleeding, change sedation, blood pressure, glucose, heart rhythm, transplant or HIV treatment, anesthesia response, and the effect of many prescription medicines.",
            "Bring the product — Keep the original container, Supplement Facts panel, lot number, receipt when available, amount used, timing, route, and all other medicines and supplements.",
            "Do not use injections sold as supplements — Injected or infused nutrients are prescription or clinical products and require professional assessment, sterile handling, product verification, and reaction monitoring.",
            "After immediate care — Update the supplement list, document the reaction, review duplicate ingredients, and use the locally appropriate adverse-event or product-quality reporting system."
          ],
          "actionPath": {
            "helpfulTasks": [
              {
                "id": "supp-emergency-task-inventory",
                "title": "Keep a complete supplement inventory",
                "detail": "Include multivitamins, single nutrients, herbs, powders, gummies, drinks, fortified products, and injections or infusions."
              },
              {
                "id": "supp-emergency-task-label",
                "title": "Keep original labels and lot numbers",
                "detail": "This helps poison, clinical, and product-quality assessment."
              },
              {
                "id": "supp-emergency-task-storage",
                "title": "Lock iron and other high-risk products away from children",
                "detail": "Use child-resistant storage and avoid unlabeled containers."
              },
              {
                "id": "supp-emergency-task-review",
                "title": "Review supplements before surgery, pregnancy, or new medicines",
                "detail": "Do not apply one universal stop interval; obtain product-specific advice."
              }
            ],
            "questions": [
              {
                "id": "supp-emergency-q-redflags",
                "title": "Which symptoms from this exact product require emergency care?",
                "detail": "Ask about allergy, bleeding, liver injury, heart rhythm, glucose, neurologic, and toxicity signs."
              },
              {
                "id": "supp-emergency-q-overdose",
                "title": "What should happen after an accidental extra amount or child ingestion?",
                "detail": "Use local poison and emergency guidance; do not wait for symptoms."
              },
              {
                "id": "supp-emergency-q-interactions",
                "title": "Which medicines or procedures interact with this product?",
                "detail": "Review the exact ingredients, amount, route, and timing."
              },
              {
                "id": "supp-emergency-q-report",
                "title": "How should a serious supplement reaction or product problem be reported?",
                "detail": "Use the locally appropriate safety-reporting system."
              }
            ]
          },
          "relatedIds": [
            "iron-supplement",
            "b12",
            "vitamin-d",
            "supplement-routes",
            "supplement-side-effects",
            "supplement-interactions",
            "supplement-monitoring",
            "medication-emergency-safety",
            "er-red-flags"
          ],
          "contentStatus": "researched",
          "contentTemplate": "emergency-safety",
          "researchBatch": "BATCH_09_EMERGENCY_SAFETY",
          "editorialSourceIds": [
            "ODS_SUPPLEMENT_SAFETY",
            "FDA_SUPPLEMENT_SAFETY",
            "FDA_SIDE_EFFECTS",
            "FDA_MEDWATCH",
            "HRSA_POISON_HELP"
          ],
          "clinicalReview": {
            "status": "clinical-review-required",
            "fields": [
              "all overdose and poison instructions",
              "severe reaction and anaphylaxis actions",
              "product-specific toxicity and interactions",
              "surgery and pregnancy guidance",
              "reporting and recall actions"
            ]
          },
          "additionalResearchBatches": [
            "BATCH_08_SUPPLEMENT_LIBRARY"
          ]
        }
      ]
    }
  ],
  "plan": {
    "title": "Your Plan",
    "subtitle": "See the full picture first, open any core for details, or bring everything together in Your SHINE Path.",
    "privacy": "Stored locally on this device. Do not enter names, ID numbers, phone numbers, or other private identifying information.",
    "cores": [
      {
        "id": "daily",
        "title": "Daily Foundation",
        "icon": "☀️",
        "color": "red",
        "description": "SHINE lessons, prevention habits, recovery supports, and lifestyle routines you want to keep visible."
      },
      {
        "id": "food",
        "title": "Food & Diet",
        "icon": "🍽️",
        "color": "gold",
        "description": "Diet guidance and food items selected through the Diet Builder."
      },
      {
        "id": "treatment",
        "title": "Medications & Supplements",
        "icon": "💊",
        "color": "violet",
        "description": "Supplements and medications to review by purpose, route, side effects, interactions, and monitoring."
      },
      {
        "id": "doctor",
        "title": "Doctor & Health",
        "icon": "🩺",
        "color": "blue",
        "description": "Symptoms, conditions, emergency topics, and questions for the doctor."
      }
    ],
    "coreNotes": {
      "daily": "Add a note about the routines you want to focus on.",
      "food": "Add a note about meals, preferences, access, or questions.",
      "treatment": "Add a note about what you need to confirm with a clinician or pharmacist.",
      "doctor": "Add a note about symptoms, appointments, or what you want to ask."
    },
    "overview": {
      "title": "Your plan at a glance",
      "intro": "A single overview of the habits, food choices, treatment items, health topics, tasks, and questions you have saved.",
      "detailsButton": "Open Your SHINE Path",
      "backButton": "Back to plan overview",
      "empty": "Your plan is still empty. Add items from SHINE, HEAL, or DR to build it.",
      "totalLabel": "Total saved items",
      "coreButton": "Open core"
    },
    "shinePath": {
      "title": "Your SHINE Path",
      "subtitle": "Everything you chose, connected into one clear path forward.",
      "eyebrow": "YOUR COMPLETE PATH",
      "summaryTitle": "Your path, connected",
      "connectedLabel": "connected plan items",
      "ariaLabel": "Your combined SHINE Path infographic",
      "infographicEyebrow": "YOUR PATH AT A GLANCE",
      "infographicTitle": "Four parts working together",
      "infographicIntro": "Each color is one Plan Core. SHINE at the center connects daily foundations, food and hydration, treatment safety, symptom tracking, urgent warning signs, and preparation for clinical care.",
      "hubLabel": "YOUR PATH",
      "hubCountLabel": "connected choices",
      "savedLabel": "saved",
      "coreListEyebrow": "YOUR FOUR PLAN CORES",
      "coreListTitle": "Open each part of your path",
      "coreListIntro": "The infographic gives the whole picture. These cards keep each part clear and usable.",
      "finishTitle": "One path. Your choices. A clearer next step.",
      "finishText": "Your Plan keeps each core organized, while Your SHINE Path shows how daily foundations, food and hydration, treatment safety, monitoring, symptoms, urgent warning signs, and clinical questions work together.",
      "empty": "Your SHINE Path will appear as you add teaching, habits, food choices, supplements, medications, health topics, tasks, and doctor questions.",
      "backButton": "Back to Plan Overview",
      "printButton": "Print Your SHINE Path",
      "openCoreButton": "Open Core Details",
      "moreLabel": "more",
      "stages": [
        {
          "id": "daily",
          "step": "01",
          "verb": "IGNITE",
          "title": "Build Your Foundation",
          "coreTitle": "Daily Foundation",
          "icon": "☀️",
          "color": "red",
          "description": "Your SHINE teaching, emotional-well-being supports, immunity and prevention habits, recovery supports, and everyday actions.",
          "sentenceLead": "strengthening sleep, emotional well-being, connection, movement, infection prevention, and recovery with"
        },
        {
          "id": "food",
          "step": "02",
          "verb": "NOURISH",
          "title": "Fuel Your Light",
          "coreTitle": "Food & Diet",
          "icon": "🍽️",
          "color": "gold",
          "description": "Your food variety, balanced meals, hydration, practical weekly planning, Diet Builder choices, and condition-specific diet guidance.",
          "sentenceLead": "fueling your body and organizing food variety, balanced meals, hydration, practical planning, and condition-supporting choices with"
        },
        {
          "id": "treatment",
          "step": "03",
          "verb": "SUPPORT",
          "title": "Protect Your Progress",
          "coreTitle": "Medications & Supplements",
          "icon": "💊",
          "color": "violet",
          "description": "Medication and supplement purpose, route, side effects, interactions, monitoring, and safety items to remember or discuss.",
          "sentenceLead": "organizing medicine and supplement purpose, route, side effects, interactions, monitoring, and follow-up discussions around"
        },
        {
          "id": "doctor",
          "step": "04",
          "verb": "NAVIGATE",
          "title": "Prepare Your Care",
          "coreTitle": "Doctor & Health",
          "icon": "🩺",
          "color": "blue",
          "description": "Your symptoms, conditions, urgent warning signs, emergency topics, tests, support needs, tasks, and clinician questions.",
          "sentenceLead": "preparing care around symptoms, conditions, urgent warning signs, emergency topics, safety plans, tests, and questions including"
        }
      ]
    },
    "printSafety": {
      "title": "Emergency safety",
      "text": "This printout is an educational planning aid, not an emergency plan. For severe or rapidly worsening symptoms, use local emergency services. Do not delay care, drive when impaired, or start, stop, double, or change medicines or supplements from this printout alone.",
      "followUp": "Keep local emergency and poison-service contacts plus clinician-approved condition-specific instructions with the plan.",
      "contentStatus": "researched",
      "researchBatch": "BATCH_09_EMERGENCY_SAFETY",
      "clinicalReview": {
        "status": "clinical-review-required",
        "fields": [
          "local emergency and poison-service localization",
          "transport wording",
          "condition-specific emergency actions"
        ]
      }
    }
  },
  "dietBuilder": {
    "title": "Diet Builder",
    "subtitle": "Choose one or more diet types or timing needs, filter the local food library, and add individual items to Your Plan.",
    "notice": "This is an educational filter, not a personalized prescription. Kidney, heart, liver, or digestive disease; pregnancy; diabetes medicines; allergies; swallowing problems; eating disorders; malnutrition risk; and medication interactions may require an individualized plan.",
    "focusTitle": "1. Choose the type of diet you want",
    "mealTitle": "2. Choose when it fits",
    "resultTitle": "3. Choose items for Your Plan",
    "matchModes": [
      {
        "id": "all",
        "label": "Match all selected focuses"
      },
      {
        "id": "any",
        "label": "Match any selected focus"
      }
    ],
    "focusOptions": [
      {
        "id": "balanced",
        "label": "Balanced everyday eating",
        "icon": "⚖️",
        "description": "Flexible meals built from vegetables or fruit, a protein source, a whole grain or other high-fiber carbohydrate, suitable healthy fats, and water or another appropriate drink. Portions and restrictions remain individualized.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
        "editorialSourceIds": [
          "USDA_DGA_2025_2030",
          "USDA_MYPLATE",
          "CDC_HEALTHY_EATING_TIPS",
          "NIDDK_HEALTHY_EATING_LIFE"
        ]
      },
      {
        "id": "blood-sugar",
        "label": "Diabetes-friendly",
        "icon": "🩸",
        "description": "Meals and snacks that can fit a diabetes-supporting plate pattern with visible carbohydrate portions, vegetables, protein, fiber, and less added sugar. Individual insulin and medicine matching still applies.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_03_DIABETES_GLUCOSE",
        "editorialSourceIds": [
          "NIDDK_HEALTHY_LIVING_DIABETES",
          "CDC_DIABETES_MEAL_PLANNING"
        ]
      },
      {
        "id": "blood-pressure",
        "label": "DASH / lower sodium",
        "icon": "❤️",
        "description": "Meals and snacks that can fit a DASH-style pattern with vegetables or fruit, whole grains, beans, suitable dairy, lean protein, unsalted nuts, and lower-sodium preparation. Kidney disease and some medicines require potassium review.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_04_BLOOD_PRESSURE",
        "editorialSourceIds": [
          "NHLBI_DASH_EATING_PLAN",
          "NHLBI_DASH_LABEL_GUIDE",
          "NHLBI_HIGH_BP_TREATMENT"
        ]
      },
      {
        "id": "heart",
        "label": "Mediterranean / heart health",
        "icon": "🫀",
        "description": "Plant-forward meals with vegetables or fruit, whole grains, beans, nuts, seeds, fish or suitable lean protein, and unsaturated fats, while limiting excess saturated fat, sodium, added sugar, and highly processed foods.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_05_CHOLESTEROL_HEART",
        "editorialSourceIds": [
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE",
          "NHLBI_BLOOD_CHOLESTEROL_CAUSES"
        ]
      },
      {
        "id": "iron",
        "label": "Iron support",
        "icon": "🔴",
        "description": "Foods that provide heme, nonheme, or fortified iron, or that help build a vitamin-C-paired iron-focused meal.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_01_ENERGY_IRON",
        "editorialSourceIds": [
          "ODS_IRON_CONSUMER",
          "ODS_IRON_HP"
        ]
      },
      {
        "id": "immune-variety",
        "label": "Immune-supporting variety",
        "icon": "🛡️",
        "description": "Varied meals with a suitable protein source and plant foods that support adequate nutrient intake. This filter does not claim to prevent or treat infection.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
        "editorialSourceIds": [
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ]
      },
      {
        "id": "sleep-support",
        "label": "Sleep routine support",
        "icon": "🌙",
        "description": "Meals or snacks that can fit earlier-evening timing or a small hunger-based snack. Food does not diagnose or treat insomnia or sleep apnea.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
        "editorialSourceIds": [
          "NHLBI_HEALTHY_SLEEP_HABITS",
          "NHLBI_INSOMNIA_TREATMENT"
        ]
      },
      {
        "id": "fiber",
        "label": "High fiber",
        "icon": "🌾",
        "description": "Beans, lentils, vegetables, fruit, nuts, and whole grains.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_06_DIGESTIVE_SUPPORT",
        "editorialSourceIds": [
          "NIDDK_CONSTIPATION_DIET",
          "MEDLINEPLUS_DIETARY_FIBER"
        ]
      },
      {
        "id": "bowel-support",
        "label": "Bowel regularity",
        "icon": "🌾",
        "description": "Meals with gradual food-based fiber that may support bowel regularity. Increase fiber slowly and pair it with the approved fluid plan.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_06_DIGESTIVE_SUPPORT",
        "editorialSourceIds": [
          "NIDDK_CONSTIPATION_DIET",
          "NIDDK_CONSTIPATION_TREATMENT",
          "MEDLINEPLUS_DIETARY_FIBER",
          "MEDLINEPLUS_SOLUBLE_INSOLUBLE_FIBER"
        ],
        "additionalResearchBatches": [
          "BATCH_01_ENERGY_IRON"
        ]
      },
      {
        "id": "meal-tolerance",
        "label": "Meal tolerance",
        "icon": "🥣",
        "description": "Small, familiar meals that may be easier to rebuild after nausea, vomiting, or diarrhea. This is not a fixed restrictive diet.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_06_DIGESTIVE_SUPPORT",
        "editorialSourceIds": [
          "NIDDK_DIARRHEA_DIET",
          "NIDDK_DIARRHEA_TREATMENT",
          "NIDDK_VIRAL_GASTROENTERITIS_TREATMENT",
          "MEDLINEPLUS_NAUSEA_VOMITING_ADULTS"
        ]
      },
      {
        "id": "protein",
        "label": "Higher protein",
        "icon": "💪",
        "description": "Meals or snacks with a clear protein source.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
        "editorialSourceIds": [
          "USDA_DGA_2025_2030",
          "USDA_MYPLATE"
        ]
      },
      {
        "id": "vegetarian",
        "label": "Vegetarian",
        "icon": "🌿",
        "description": "Items without meat, poultry, or fish.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
        "editorialSourceIds": [
          "USDA_DGA_2025_2030",
          "USDA_MYPLATE"
        ]
      }
    ],
    "mealOptions": [
      {
        "id": "all",
        "label": "Any time"
      },
      {
        "id": "breakfast",
        "label": "Breakfast"
      },
      {
        "id": "main",
        "label": "Main meal"
      },
      {
        "id": "snack",
        "label": "Snack"
      },
      {
        "id": "evening",
        "label": "Evening"
      }
    ],
    "items": [
      {
        "id": "oats-berries-nuts",
        "title": "Oats with berries and unsalted nuts",
        "subtitle": "A whole-grain breakfast with fruit, fiber, and a small source of unsaturated fat.",
        "focus": [
          "balanced",
          "blood-sugar",
          "heart",
          "fiber",
          "vegetarian",
          "blood-pressure",
          "bowel-support",
          "immune-variety"
        ],
        "meals": [
          "breakfast"
        ],
        "roles": [
          "whole grain",
          "fruit",
          "healthy fat"
        ],
        "why": "Breakfast built from a whole grain, fruit, and unsalted nuts.",
        "caution": "Choose plain oats and unsalted nuts; review portions for glucose goals and potassium or phosphorus for kidney disease.",
        "learnId": "diabetes-diet",
        "additionalResearchBatches": [
          "BATCH_01_ENERGY_IRON",
          "BATCH_03_DIABETES_GLUCOSE",
          "BATCH_05_CHOLESTEROL_HEART",
          "BATCH_06_DIGESTIVE_SUPPORT",
          "BATCH_10_IMMUNITY_INFECTION"
        ],
        "editorialSourceIds": [
          "NIDDK_HEALTHY_LIVING_DIABETES",
          "CDC_DIABETES_MEAL_PLANNING",
          "NHLBI_DASH_EATING_PLAN",
          "NHLBI_DASH_LABEL_GUIDE",
          "NHLBI_HIGH_BP_TREATMENT",
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE",
          "NIDDK_CONSTIPATION_DIET",
          "NIDDK_CONSTIPATION_TREATMENT",
          "MEDLINEPLUS_DIETARY_FIBER",
          "MEDLINEPLUS_SOLUBLE_INSOLUBLE_FIBER",
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ],
        "diabetesMealRole": "Can fit a balanced diabetes plate or planned snack when the carbohydrate amount and timing match the individual treatment plan.",
        "contentStatus": "researched",
        "dashMealRole": "Can fit a DASH-style lower-sodium pattern when prepared with minimally processed ingredients and suitable portions.",
        "researchBatch": "BATCH_04_BLOOD_PRESSURE",
        "mediterraneanMealRole": "Can fit a Mediterranean-style heart-health pattern when prepared with minimally processed ingredients, suitable portions, and appropriate sodium and saturated-fat choices.",
        "digestiveMealRole": "Oats, fruit, and nuts can add food-based fiber; increase the portion gradually if the current diet is low in fiber.",
        "immuneMealRole": "Can support nutrient variety when the protein, plant foods, portion, food safety, allergies, and condition-specific restrictions fit the individual plan."
      },
      {
        "id": "plain-yogurt-berries",
        "title": "Plain yogurt with berries and nuts",
        "subtitle": "A simple breakfast or snack with protein, fruit, and optional healthy fat.",
        "focus": [
          "balanced",
          "blood-sugar",
          "heart",
          "protein",
          "vegetarian",
          "sleep-support",
          "blood-pressure",
          "immune-variety"
        ],
        "meals": [
          "breakfast",
          "snack",
          "evening"
        ],
        "roles": [
          "protein",
          "fruit",
          "healthy fat"
        ],
        "why": "Plain yogurt, fruit, and unsalted nuts provide calcium, protein, and a lower-sodium snack or breakfast.",
        "caution": "Choose unsweetened yogurt; adapt for milk allergy, lactose intolerance, kidney disease, or fluid restrictions.",
        "learnId": "nutrition-plate",
        "sleepTiming": "Can fit an earlier evening meal or a small snack when hunger is affecting sleep; not a sleep treatment.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
        "editorialSourceIds": [
          "NHLBI_HEALTHY_SLEEP_HABITS",
          "NHLBI_INSOMNIA_TREATMENT",
          "NIDDK_HEALTHY_LIVING_DIABETES",
          "CDC_DIABETES_MEAL_PLANNING",
          "NHLBI_DASH_EATING_PLAN",
          "NHLBI_DASH_LABEL_GUIDE",
          "NHLBI_HIGH_BP_TREATMENT",
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE",
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ],
        "additionalResearchBatches": [
          "BATCH_03_DIABETES_GLUCOSE",
          "BATCH_04_BLOOD_PRESSURE",
          "BATCH_05_CHOLESTEROL_HEART",
          "BATCH_10_IMMUNITY_INFECTION"
        ],
        "diabetesMealRole": "Can fit a balanced diabetes plate or planned snack when the carbohydrate amount and timing match the individual treatment plan.",
        "dashMealRole": "Can fit a DASH-style lower-sodium pattern when prepared with minimally processed ingredients and suitable portions.",
        "mediterraneanMealRole": "Can fit a Mediterranean-style heart-health pattern when prepared with minimally processed ingredients, suitable portions, and appropriate sodium and saturated-fat choices.",
        "immuneMealRole": "Can support nutrient variety when the protein, plant foods, portion, food safety, allergies, and condition-specific restrictions fit the individual plan."
      },
      {
        "id": "egg-vegetable-plate",
        "title": "Egg and vegetable meal",
        "subtitle": "A protein-centered meal with some iron and a variety of vegetables.",
        "focus": [
          "balanced",
          "blood-sugar",
          "iron",
          "protein",
          "vegetarian",
          "immune-variety"
        ],
        "meals": [
          "breakfast",
          "main"
        ],
        "roles": [
          "egg protein",
          "iron source",
          "vegetable",
          "vitamin C source"
        ],
        "why": "Eggs provide protein and some iron. Vegetables such as peppers or tomatoes can add vitamin C and meal volume.",
        "caution": "Preparation matters. Limit processed meat, excess salt, and large amounts of butter when heart or blood-pressure goals apply.",
        "learnId": "iron-rich-diet",
        "ironSourceType": "mixed or modest",
        "proteinTag": "egg protein",
        "vegetarian": true,
        "mealType": [
          "breakfast",
          "main"
        ],
        "dietTags": [
          "balanced",
          "blood-sugar",
          "iron",
          "protein",
          "vegetarian"
        ],
        "contentStatus": "researched",
        "researchBatch": "BATCH_01_ENERGY_IRON",
        "editorialSourceIds": [
          "ODS_IRON_HP",
          "NHLBI_IRON_DEFICIENCY_ANEMIA",
          "NIDDK_HEALTHY_LIVING_DIABETES",
          "CDC_DIABETES_MEAL_PLANNING",
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ],
        "additionalResearchBatches": [
          "BATCH_03_DIABETES_GLUCOSE",
          "BATCH_10_IMMUNITY_INFECTION"
        ],
        "diabetesMealRole": "Can fit a balanced diabetes plate or planned snack when the carbohydrate amount and timing match the individual treatment plan.",
        "immuneMealRole": "Can support nutrient variety when the protein, plant foods, portion, food safety, allergies, and condition-specific restrictions fit the individual plan."
      },
      {
        "id": "fortified-cereal-fruit",
        "title": "Iron-fortified cereal with vitamin-C-rich fruit",
        "subtitle": "A breakfast combining fortified nonheme iron with a vitamin C source.",
        "focus": [
          "iron",
          "fiber",
          "vegetarian"
        ],
        "meals": [
          "breakfast"
        ],
        "roles": [
          "whole grain",
          "fortified iron source",
          "fruit",
          "vitamin C source"
        ],
        "why": "Fortified cereal can provide nonheme iron. Vitamin-C-rich fruit can support absorption; use the label to compare iron, serving size, added sugar, and sodium.",
        "caution": "Fortification levels vary. Portion and carbohydrate needs may require adjustment for diabetes medicines or other conditions.",
        "learnId": "iron-rich-diet",
        "ironSourceType": "nonheme fortified",
        "proteinTag": "variable",
        "vegetarian": true,
        "mealType": [
          "breakfast"
        ],
        "dietTags": [
          "iron",
          "fiber",
          "vegetarian"
        ],
        "contentStatus": "researched",
        "researchBatch": "BATCH_01_ENERGY_IRON",
        "editorialSourceIds": [
          "ODS_IRON_HP",
          "NHLBI_IRON_DEFICIENCY_ANEMIA"
        ]
      },
      {
        "id": "lentil-vegetable-soup",
        "title": "Lentils with tomato and peppers",
        "subtitle": "A plant-based main meal with nonheme iron, plant protein, fiber, and vitamin C.",
        "focus": [
          "balanced",
          "blood-sugar",
          "blood-pressure",
          "heart",
          "iron",
          "fiber",
          "protein",
          "vegetarian",
          "bowel-support",
          "immune-variety"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "legume",
          "plant protein",
          "nonheme iron source",
          "vitamin C source"
        ],
        "why": "Lentils, vegetables, and herbs provide fiber and plant protein in a DASH-style main meal.",
        "caution": "Use lower-sodium broth or water, rinse canned ingredients when suitable, and increase fiber gradually.",
        "learnId": "iron-rich-diet",
        "ironSourceType": "nonheme",
        "proteinTag": "plant protein",
        "vegetarian": true,
        "mealType": [
          "main"
        ],
        "dietTags": [
          "balanced",
          "blood-sugar",
          "blood-pressure",
          "heart",
          "iron",
          "fiber",
          "protein",
          "vegetarian"
        ],
        "contentStatus": "researched",
        "researchBatch": "BATCH_01_ENERGY_IRON",
        "editorialSourceIds": [
          "ODS_IRON_HP",
          "NHLBI_IRON_DEFICIENCY_ANEMIA",
          "NIDDK_HEALTHY_LIVING_DIABETES",
          "CDC_DIABETES_MEAL_PLANNING",
          "NHLBI_DASH_EATING_PLAN",
          "NHLBI_DASH_LABEL_GUIDE",
          "NHLBI_HIGH_BP_TREATMENT",
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE",
          "NIDDK_CONSTIPATION_DIET",
          "NIDDK_CONSTIPATION_TREATMENT",
          "MEDLINEPLUS_DIETARY_FIBER",
          "MEDLINEPLUS_SOLUBLE_INSOLUBLE_FIBER",
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ],
        "additionalResearchBatches": [
          "BATCH_03_DIABETES_GLUCOSE",
          "BATCH_04_BLOOD_PRESSURE",
          "BATCH_05_CHOLESTEROL_HEART",
          "BATCH_06_DIGESTIVE_SUPPORT",
          "BATCH_10_IMMUNITY_INFECTION"
        ],
        "diabetesMealRole": "Can fit a balanced diabetes plate or planned snack when the carbohydrate amount and timing match the individual treatment plan.",
        "dashMealRole": "Can fit a DASH-style lower-sodium pattern when prepared with minimally processed ingredients and suitable portions.",
        "mediterraneanMealRole": "Can fit a Mediterranean-style heart-health pattern when prepared with minimally processed ingredients, suitable portions, and appropriate sodium and saturated-fat choices.",
        "digestiveMealRole": "Lentils and vegetables provide fiber; use a smaller starting portion when gas or bloating is a concern.",
        "immuneMealRole": "Can support nutrient variety when the protein, plant foods, portion, food safety, allergies, and condition-specific restrictions fit the individual plan."
      },
      {
        "id": "chickpea-salad",
        "title": "Chickpea and pepper salad",
        "subtitle": "A vegetarian meal with nonheme iron, plant protein, fiber, and vitamin C.",
        "focus": [
          "balanced",
          "blood-sugar",
          "heart",
          "iron",
          "fiber",
          "protein",
          "vegetarian",
          "bowel-support"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "legume",
          "plant protein",
          "nonheme iron source",
          "vitamin C source",
          "vegetable"
        ],
        "why": "Chickpeas provide nonheme iron and plant protein. Peppers add vitamin C, and olive oil can fit a Mediterranean-style pattern.",
        "caution": "Rinse canned chickpeas to reduce sodium and keep salty cheese or dressings moderate. Increase fiber gradually if needed.",
        "learnId": "iron-rich-diet",
        "ironSourceType": "nonheme",
        "proteinTag": "plant protein",
        "vegetarian": true,
        "mealType": [
          "main"
        ],
        "dietTags": [
          "balanced",
          "blood-sugar",
          "heart",
          "iron",
          "fiber",
          "protein",
          "vegetarian"
        ],
        "contentStatus": "researched",
        "researchBatch": "BATCH_01_ENERGY_IRON",
        "editorialSourceIds": [
          "ODS_IRON_HP",
          "NHLBI_IRON_DEFICIENCY_ANEMIA",
          "NIDDK_HEALTHY_LIVING_DIABETES",
          "CDC_DIABETES_MEAL_PLANNING",
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE",
          "NIDDK_CONSTIPATION_DIET",
          "NIDDK_CONSTIPATION_TREATMENT",
          "MEDLINEPLUS_DIETARY_FIBER",
          "MEDLINEPLUS_SOLUBLE_INSOLUBLE_FIBER"
        ],
        "additionalResearchBatches": [
          "BATCH_03_DIABETES_GLUCOSE",
          "BATCH_05_CHOLESTEROL_HEART",
          "BATCH_06_DIGESTIVE_SUPPORT"
        ],
        "diabetesMealRole": "Can fit a balanced diabetes plate or planned snack when the carbohydrate amount and timing match the individual treatment plan.",
        "mediterraneanMealRole": "Can fit a Mediterranean-style heart-health pattern when prepared with minimally processed ingredients, suitable portions, and appropriate sodium and saturated-fat choices.",
        "digestiveMealRole": "Chickpeas and vegetables provide fiber; increase gradually and adapt raw vegetables if they worsen symptoms."
      },
      {
        "id": "grilled-fish-vegetables-grain",
        "title": "Grilled fish, vegetables, and a whole grain",
        "subtitle": "A main meal combining lean protein, vegetables, and a quality carbohydrate.",
        "focus": [
          "balanced",
          "blood-sugar",
          "blood-pressure",
          "heart",
          "protein",
          "immune-variety"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "protein",
          "vegetable",
          "whole grain"
        ],
        "why": "Fish, vegetables, and a whole grain create a DASH-style plate with lean protein and fiber.",
        "caution": "Avoid heavily salted marinades, sauces, and processed fish; review mercury advice during pregnancy.",
        "learnId": "hypertension-diet",
        "additionalResearchBatches": [
          "BATCH_03_DIABETES_GLUCOSE",
          "BATCH_05_CHOLESTEROL_HEART",
          "BATCH_10_IMMUNITY_INFECTION"
        ],
        "editorialSourceIds": [
          "NIDDK_HEALTHY_LIVING_DIABETES",
          "CDC_DIABETES_MEAL_PLANNING",
          "NHLBI_DASH_EATING_PLAN",
          "NHLBI_DASH_LABEL_GUIDE",
          "NHLBI_HIGH_BP_TREATMENT",
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE",
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ],
        "diabetesMealRole": "Can fit a balanced diabetes plate or planned snack when the carbohydrate amount and timing match the individual treatment plan.",
        "contentStatus": "researched",
        "dashMealRole": "Can fit a DASH-style lower-sodium pattern when prepared with minimally processed ingredients and suitable portions.",
        "researchBatch": "BATCH_04_BLOOD_PRESSURE",
        "mediterraneanMealRole": "Can fit a Mediterranean-style heart-health pattern when prepared with minimally processed ingredients, suitable portions, and appropriate sodium and saturated-fat choices.",
        "immuneMealRole": "Can support nutrient variety when the protein, plant foods, portion, food safety, allergies, and condition-specific restrictions fit the individual plan."
      },
      {
        "id": "chicken-brown-rice-plate",
        "title": "Chicken, vegetables, and brown rice plate",
        "subtitle": "A repeatable plate pattern with lean protein, non-starchy vegetables, and a whole grain.",
        "focus": [
          "balanced",
          "blood-sugar",
          "protein",
          "sleep-support",
          "blood-pressure",
          "immune-variety"
        ],
        "meals": [
          "main",
          "evening"
        ],
        "roles": [
          "protein",
          "vegetable",
          "whole grain"
        ],
        "why": "Unprocessed poultry, vegetables, and brown rice can fit a balanced lower-sodium plate.",
        "caution": "Avoid processed chicken, salty seasoning packets, and large portions when another condition changes protein or carbohydrate needs.",
        "learnId": "diabetes-diet",
        "sleepTiming": "Can fit an earlier evening meal or a small snack when hunger is affecting sleep; not a sleep treatment.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
        "editorialSourceIds": [
          "NHLBI_HEALTHY_SLEEP_HABITS",
          "NHLBI_INSOMNIA_TREATMENT",
          "NIDDK_HEALTHY_LIVING_DIABETES",
          "CDC_DIABETES_MEAL_PLANNING",
          "NHLBI_DASH_EATING_PLAN",
          "NHLBI_DASH_LABEL_GUIDE",
          "NHLBI_HIGH_BP_TREATMENT",
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ],
        "additionalResearchBatches": [
          "BATCH_03_DIABETES_GLUCOSE",
          "BATCH_04_BLOOD_PRESSURE",
          "BATCH_10_IMMUNITY_INFECTION"
        ],
        "diabetesMealRole": "Can fit a balanced diabetes plate or planned snack when the carbohydrate amount and timing match the individual treatment plan.",
        "dashMealRole": "Can fit a DASH-style lower-sodium pattern when prepared with minimally processed ingredients and suitable portions.",
        "immuneMealRole": "Can support nutrient variety when the protein, plant foods, portion, food safety, allergies, and condition-specific restrictions fit the individual plan."
      },
      {
        "id": "bean-vegetable-bowl",
        "title": "White beans with lemon and vegetables",
        "subtitle": "A flexible plant meal with nonheme iron, fiber, plant protein, and a vitamin C pairing.",
        "focus": [
          "balanced",
          "blood-sugar",
          "heart",
          "iron",
          "fiber",
          "protein",
          "vegetarian",
          "blood-pressure",
          "immune-variety"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "legume",
          "plant protein",
          "nonheme iron source",
          "vitamin C source",
          "vegetable"
        ],
        "why": "Beans with vegetables provide plant protein, fiber, and potassium in a DASH-style meal.",
        "caution": "Rinse canned beans when suitable; kidney disease or some medicines may require potassium limits.",
        "learnId": "iron-rich-diet",
        "ironSourceType": "nonheme",
        "proteinTag": "plant protein",
        "vegetarian": true,
        "mealType": [
          "main"
        ],
        "dietTags": [
          "balanced",
          "blood-sugar",
          "heart",
          "iron",
          "fiber",
          "protein",
          "vegetarian"
        ],
        "contentStatus": "researched",
        "researchBatch": "BATCH_01_ENERGY_IRON",
        "editorialSourceIds": [
          "ODS_IRON_HP",
          "NHLBI_IRON_DEFICIENCY_ANEMIA",
          "NIDDK_HEALTHY_LIVING_DIABETES",
          "CDC_DIABETES_MEAL_PLANNING",
          "NHLBI_DASH_EATING_PLAN",
          "NHLBI_DASH_LABEL_GUIDE",
          "NHLBI_HIGH_BP_TREATMENT",
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE",
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ],
        "additionalResearchBatches": [
          "BATCH_03_DIABETES_GLUCOSE",
          "BATCH_04_BLOOD_PRESSURE",
          "BATCH_05_CHOLESTEROL_HEART",
          "BATCH_10_IMMUNITY_INFECTION"
        ],
        "diabetesMealRole": "Can fit a balanced diabetes plate or planned snack when the carbohydrate amount and timing match the individual treatment plan.",
        "dashMealRole": "Can fit a DASH-style lower-sodium pattern when prepared with minimally processed ingredients and suitable portions.",
        "mediterraneanMealRole": "Can fit a Mediterranean-style heart-health pattern when prepared with minimally processed ingredients, suitable portions, and appropriate sodium and saturated-fat choices.",
        "immuneMealRole": "Can support nutrient variety when the protein, plant foods, portion, food safety, allergies, and condition-specific restrictions fit the individual plan."
      },
      {
        "id": "spinach-lentil-tomato-stew",
        "title": "Spinach with beans and tomatoes",
        "subtitle": "A plant meal combining nonheme iron sources with a vitamin C source.",
        "focus": [
          "heart",
          "iron",
          "fiber",
          "protein",
          "vegetarian",
          "immune-variety"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "leafy vegetable",
          "legume",
          "plant protein",
          "nonheme iron source",
          "vitamin C source"
        ],
        "why": "Spinach and beans provide nonheme iron. Tomatoes provide vitamin C and help form a practical mixed dish.",
        "caution": "People with specific kidney restrictions or medicines affected by vitamin K may need individualized advice.",
        "learnId": "iron-rich-diet",
        "ironSourceType": "nonheme",
        "proteinTag": "plant protein",
        "vegetarian": true,
        "mealType": [
          "main"
        ],
        "dietTags": [
          "heart",
          "iron",
          "fiber",
          "protein",
          "vegetarian"
        ],
        "contentStatus": "researched",
        "researchBatch": "BATCH_01_ENERGY_IRON",
        "editorialSourceIds": [
          "ODS_IRON_HP",
          "NHLBI_IRON_DEFICIENCY_ANEMIA",
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE",
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ],
        "mediterraneanMealRole": "Can fit a Mediterranean-style heart-health pattern when prepared with minimally processed ingredients, suitable portions, and appropriate sodium and saturated-fat choices.",
        "additionalResearchBatches": [
          "BATCH_05_CHOLESTEROL_HEART",
          "BATCH_10_IMMUNITY_INFECTION"
        ],
        "immuneMealRole": "Can support nutrient variety when the protein, plant foods, portion, food safety, allergies, and condition-specific restrictions fit the individual plan."
      },
      {
        "id": "lean-meat-pepper-plate",
        "title": "Lean meat with a vegetable-rich meal",
        "subtitle": "A heme-iron and protein source paired with vegetables.",
        "focus": [
          "balanced",
          "iron",
          "protein"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "animal protein",
          "heme iron source",
          "vegetable",
          "vitamin C source"
        ],
        "why": "Lean meat provides heme iron and protein. Peppers, tomatoes, or other vegetables can add vitamin C and meal variety.",
        "caution": "Choose lean, minimally processed meat and moderate portions. Avoid heavily salted preparation for heart or blood-pressure goals.",
        "learnId": "iron-rich-diet",
        "ironSourceType": "heme",
        "proteinTag": "animal protein",
        "vegetarian": false,
        "mealType": [
          "main"
        ],
        "dietTags": [
          "balanced",
          "iron",
          "protein"
        ],
        "contentStatus": "researched",
        "researchBatch": "BATCH_01_ENERGY_IRON",
        "editorialSourceIds": [
          "ODS_IRON_HP",
          "NHLBI_IRON_DEFICIENCY_ANEMIA"
        ]
      },
      {
        "id": "tuna-bean-salad",
        "title": "Tuna with whole-grain bread and vegetables",
        "subtitle": "An animal-protein meal with some iron, whole-grain carbohydrate, and vegetables.",
        "focus": [
          "balanced",
          "blood-sugar",
          "heart",
          "iron",
          "fiber",
          "protein",
          "immune-variety"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "fish protein",
          "iron source",
          "whole grain",
          "vegetable"
        ],
        "why": "Tuna provides protein and some iron. Whole-grain bread and vegetables create a more complete meal.",
        "caution": "Choose lower-sodium tuna when possible. Pregnancy or frequent fish intake may require species-specific mercury guidance.",
        "learnId": "iron-rich-diet",
        "ironSourceType": "heme and nonheme mix",
        "proteinTag": "fish protein",
        "vegetarian": false,
        "mealType": [
          "main"
        ],
        "dietTags": [
          "balanced",
          "blood-sugar",
          "heart",
          "iron",
          "fiber",
          "protein"
        ],
        "contentStatus": "researched",
        "researchBatch": "BATCH_01_ENERGY_IRON",
        "editorialSourceIds": [
          "ODS_IRON_HP",
          "NHLBI_IRON_DEFICIENCY_ANEMIA",
          "NIDDK_HEALTHY_LIVING_DIABETES",
          "CDC_DIABETES_MEAL_PLANNING",
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE",
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ],
        "additionalResearchBatches": [
          "BATCH_03_DIABETES_GLUCOSE",
          "BATCH_05_CHOLESTEROL_HEART",
          "BATCH_10_IMMUNITY_INFECTION"
        ],
        "diabetesMealRole": "Can fit a balanced diabetes plate or planned snack when the carbohydrate amount and timing match the individual treatment plan.",
        "mediterraneanMealRole": "Can fit a Mediterranean-style heart-health pattern when prepared with minimally processed ingredients, suitable portions, and appropriate sodium and saturated-fat choices.",
        "immuneMealRole": "Can support nutrient variety when the protein, plant foods, portion, food safety, allergies, and condition-specific restrictions fit the individual plan."
      },
      {
        "id": "hummus-vegetables",
        "title": "Hummus with vegetable sticks",
        "subtitle": "A practical snack built from legumes and non-starchy vegetables.",
        "focus": [
          "heart",
          "fiber",
          "protein",
          "vegetarian",
          "sleep-support"
        ],
        "meals": [
          "snack",
          "evening"
        ],
        "roles": [
          "legume",
          "vegetable"
        ],
        "why": "Hummus contributes chickpeas and tahini; vegetables add crunch, fiber, and volume.",
        "caution": "Use a portion that fits hunger and energy needs. Commercial hummus varies in sodium, and reflux or digestive symptoms may require a different choice.",
        "learnId": "nutrition-plate",
        "sleepTiming": "Can fit an earlier evening meal or a small snack when hunger is affecting sleep; not a sleep treatment.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
        "editorialSourceIds": [
          "NHLBI_HEALTHY_SLEEP_HABITS",
          "NHLBI_INSOMNIA_TREATMENT",
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE"
        ],
        "mediterraneanMealRole": "Can fit a Mediterranean-style heart-health pattern when prepared with minimally processed ingredients, suitable portions, and appropriate sodium and saturated-fat choices.",
        "additionalResearchBatches": [
          "BATCH_05_CHOLESTEROL_HEART"
        ]
      },
      {
        "id": "fruit-unsalted-nuts",
        "title": "Whole fruit with unsalted nuts",
        "subtitle": "A portable snack combining fruit, fiber, and unsaturated fat.",
        "focus": [
          "balanced",
          "blood-sugar",
          "heart",
          "fiber",
          "vegetarian",
          "sleep-support",
          "blood-pressure",
          "immune-variety"
        ],
        "meals": [
          "snack",
          "evening"
        ],
        "roles": [
          "fruit",
          "healthy fat"
        ],
        "why": "Whole fruit with unsalted nuts is a simple DASH-style snack with fiber and unsaturated fat.",
        "caution": "Use unsalted nuts and a planned portion; adapt for allergies, swallowing risk, kidney disease, or glucose goals.",
        "learnId": "nutrition-plate",
        "sleepTiming": "Can fit an earlier evening meal or a small snack when hunger is affecting sleep; not a sleep treatment.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
        "editorialSourceIds": [
          "NHLBI_HEALTHY_SLEEP_HABITS",
          "NHLBI_INSOMNIA_TREATMENT",
          "NIDDK_HEALTHY_LIVING_DIABETES",
          "CDC_DIABETES_MEAL_PLANNING",
          "NHLBI_DASH_EATING_PLAN",
          "NHLBI_DASH_LABEL_GUIDE",
          "NHLBI_HIGH_BP_TREATMENT",
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE",
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ],
        "additionalResearchBatches": [
          "BATCH_03_DIABETES_GLUCOSE",
          "BATCH_04_BLOOD_PRESSURE",
          "BATCH_05_CHOLESTEROL_HEART",
          "BATCH_10_IMMUNITY_INFECTION"
        ],
        "diabetesMealRole": "Can fit a balanced diabetes plate or planned snack when the carbohydrate amount and timing match the individual treatment plan.",
        "dashMealRole": "Can fit a DASH-style lower-sodium pattern when prepared with minimally processed ingredients and suitable portions.",
        "mediterraneanMealRole": "Can fit a Mediterranean-style heart-health pattern when prepared with minimally processed ingredients, suitable portions, and appropriate sodium and saturated-fat choices.",
        "immuneMealRole": "Can support nutrient variety when the protein, plant foods, portion, food safety, allergies, and condition-specific restrictions fit the individual plan."
      },
      {
        "id": "laban-cucumber-herbs",
        "title": "Plain laban or yogurt with cucumber and herbs",
        "subtitle": "A cooling snack or side with protein and minimal added sugar.",
        "focus": [
          "balanced",
          "blood-pressure",
          "protein",
          "vegetarian",
          "sleep-support"
        ],
        "meals": [
          "snack",
          "main",
          "evening"
        ],
        "roles": [
          "protein",
          "vegetable"
        ],
        "why": "Plain laban or yogurt with cucumber and herbs provides protein and calcium without relying on added sugar.",
        "caution": "Choose a lower-sodium plain product and avoid adding large amounts of salt; adapt for milk allergy or fluid restrictions.",
        "learnId": "hypertension-diet",
        "sleepTiming": "Can fit an earlier evening meal or a small snack when hunger is affecting sleep; not a sleep treatment.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_02_SLEEP_DAYTIME_FUNCTION",
        "editorialSourceIds": [
          "NHLBI_HEALTHY_SLEEP_HABITS",
          "NHLBI_INSOMNIA_TREATMENT",
          "NHLBI_DASH_EATING_PLAN",
          "NHLBI_DASH_LABEL_GUIDE",
          "NHLBI_HIGH_BP_TREATMENT"
        ],
        "dashMealRole": "Can fit a DASH-style lower-sodium pattern when prepared with minimally processed ingredients and suitable portions.",
        "additionalResearchBatches": [
          "BATCH_04_BLOOD_PRESSURE"
        ]
      },
      {
        "id": "avocado-wholegrain-toast",
        "title": "Avocado on whole-grain toast",
        "subtitle": "A whole-grain meal or snack with fiber and unsaturated fat.",
        "focus": [
          "balanced",
          "heart",
          "fiber",
          "vegetarian"
        ],
        "meals": [
          "breakfast",
          "snack"
        ],
        "roles": [
          "whole grain",
          "healthy fat"
        ],
        "why": "Whole-grain bread adds fiber and avocado adds unsaturated fat. Add vegetables or a protein source for a fuller meal.",
        "caution": "Check bread sodium and portion size, especially when combining it with other carbohydrate foods.",
        "learnId": "nutrition-plate",
        "mediterraneanMealRole": "Can fit a Mediterranean-style heart-health pattern when prepared with minimally processed ingredients, suitable portions, and appropriate sodium and saturated-fat choices.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_05_CHOLESTEROL_HEART",
        "editorialSourceIds": [
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE"
        ]
      },
      {
        "id": "oats-berries-walnuts",
        "title": "Oats with berries and walnuts",
        "subtitle": "A whole-grain breakfast with soluble fiber, fruit, and unsaturated fat.",
        "focus": [
          "balanced",
          "heart",
          "fiber",
          "vegetarian"
        ],
        "meals": [
          "breakfast"
        ],
        "roles": [
          "whole grain",
          "fruit",
          "healthy fat"
        ],
        "why": "Oats provide soluble fiber, berries add fruit, and walnuts provide unsaturated fat in a practical Mediterranean-style breakfast.",
        "caution": "Choose unsweetened oats and a suitable portion. Adapt for nut allergy, swallowing risk, kidney disease, or diabetes meal planning.",
        "learnId": "mediterranean-heart-diet",
        "mediterraneanMealRole": "Whole grain, fruit, and unsaturated fat support a plant-forward heart-health pattern.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_05_CHOLESTEROL_HEART",
        "editorialSourceIds": [
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE",
          "NHLBI_BLOOD_CHOLESTEROL_CAUSES"
        ]
      },
      {
        "id": "lentil-tomato-herb-bowl",
        "title": "Lentil, tomato, cucumber, and herb bowl",
        "subtitle": "A plant-forward main meal with legumes, vegetables, fiber, and olive oil.",
        "focus": [
          "balanced",
          "blood-sugar",
          "blood-pressure",
          "heart",
          "fiber",
          "protein",
          "vegetarian",
          "immune-variety"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "legume",
          "plant protein",
          "vegetable",
          "healthy fat"
        ],
        "why": "Lentils provide plant protein and fiber; tomatoes, cucumber, herbs, lemon, and olive oil build a Mediterranean-style meal.",
        "caution": "Rinse canned lentils and compare sodium. Kidney disease, digestive symptoms, or diabetes treatment may require portion and potassium review.",
        "learnId": "mediterranean-heart-diet",
        "mediterraneanMealRole": "Legumes, vegetables, herbs, and olive oil fit a plant-forward heart-health pattern.",
        "diabetesMealRole": "Can fit a balanced diabetes plate when the lentil and other carbohydrate portions match the individual treatment plan.",
        "dashMealRole": "Can fit a DASH-style pattern when sodium is controlled and potassium is appropriate.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_05_CHOLESTEROL_HEART",
        "additionalResearchBatches": [
          "BATCH_03_DIABETES_GLUCOSE",
          "BATCH_04_BLOOD_PRESSURE",
          "BATCH_10_IMMUNITY_INFECTION"
        ],
        "editorialSourceIds": [
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE",
          "NIDDK_HEALTHY_LIVING_DIABETES",
          "NHLBI_DASH_EATING_PLAN",
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ],
        "immuneMealRole": "Can support nutrient variety when the protein, plant foods, portion, food safety, allergies, and condition-specific restrictions fit the individual plan."
      },
      {
        "id": "fish-barley-vegetables",
        "title": "Grilled fish with vegetables and barley",
        "subtitle": "A heart-focused main meal with fish protein, vegetables, and a whole grain.",
        "focus": [
          "balanced",
          "blood-sugar",
          "blood-pressure",
          "heart",
          "fiber",
          "protein"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "fish protein",
          "vegetable",
          "whole grain"
        ],
        "why": "Fish, vegetables, and barley create a Mediterranean-style plate with protein, fiber, and a whole-grain carbohydrate.",
        "caution": "Avoid heavily salted marinades and processed fish. Pregnancy or frequent fish intake requires species-specific mercury guidance.",
        "learnId": "mediterranean-heart-diet",
        "mediterraneanMealRole": "Fish, vegetables, and whole grains fit a Mediterranean-style heart-health pattern.",
        "diabetesMealRole": "Can fit a balanced diabetes plate when the barley portion matches the individual treatment plan.",
        "dashMealRole": "Can fit a lower-sodium DASH-style pattern with minimally processed fish and suitable preparation.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_05_CHOLESTEROL_HEART",
        "additionalResearchBatches": [
          "BATCH_03_DIABETES_GLUCOSE",
          "BATCH_04_BLOOD_PRESSURE"
        ],
        "editorialSourceIds": [
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE",
          "NIDDK_HEALTHY_LIVING_DIABETES",
          "NHLBI_DASH_EATING_PLAN"
        ]
      },
      {
        "id": "hummus-vegetable-wholegrain-wrap",
        "title": "Hummus and vegetable whole-grain wrap",
        "subtitle": "A portable plant meal with legumes, vegetables, and a whole grain.",
        "focus": [
          "balanced",
          "heart",
          "fiber",
          "protein",
          "vegetarian"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "legume",
          "vegetable",
          "whole grain",
          "plant protein"
        ],
        "why": "Hummus, vegetables, and a whole-grain wrap create a practical Mediterranean-style meal with fiber and plant protein.",
        "caution": "Commercial hummus and wraps vary in sodium. Adapt for sesame allergy, reflux, gluten needs, or carbohydrate goals.",
        "learnId": "mediterranean-heart-diet",
        "mediterraneanMealRole": "Legumes, vegetables, and whole grains fit a plant-forward heart-health pattern.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_05_CHOLESTEROL_HEART",
        "editorialSourceIds": [
          "AHA_MEDITERRANEAN_DIET",
          "AHA_DIET_LIFESTYLE"
        ]
      },
      {
        "id": "oatmeal-banana-tolerance",
        "title": "Oatmeal with banana",
        "subtitle": "A small familiar breakfast that can be adjusted as appetite and bowel tolerance return.",
        "focus": [
          "balanced",
          "bowel-support",
          "meal-tolerance",
          "fiber",
          "vegetarian"
        ],
        "meals": [
          "breakfast",
          "snack"
        ],
        "roles": [
          "whole grain",
          "fruit",
          "soluble fiber"
        ],
        "why": "A small portion combines a familiar carbohydrate with fruit and can be expanded with protein or other foods as tolerance improves.",
        "caution": "Oats add fiber, so use a smaller portion during active diarrhea or when fiber worsens symptoms. Review carbohydrate needs for diabetes.",
        "learnId": "meal-tolerance",
        "digestiveMealRole": "Can fit a gradual return to eating; portion and fiber level should follow current symptoms rather than a fixed recovery diet.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_06_DIGESTIVE_SUPPORT",
        "editorialSourceIds": [
          "NIDDK_DIARRHEA_DIET",
          "NIDDK_DIARRHEA_TREATMENT",
          "NIDDK_VIRAL_GASTROENTERITIS_TREATMENT",
          "MEDLINEPLUS_NAUSEA_VOMITING_ADULTS",
          "NIDDK_CONSTIPATION_DIET",
          "NIDDK_CONSTIPATION_TREATMENT",
          "MEDLINEPLUS_DIETARY_FIBER",
          "MEDLINEPLUS_SOLUBLE_INSOLUBLE_FIBER"
        ],
        "additionalResearchBatches": [
          "BATCH_01_ENERGY_IRON"
        ]
      },
      {
        "id": "rice-egg-cooked-vegetables",
        "title": "Rice, egg, and cooked vegetables",
        "subtitle": "A simple main meal with carbohydrate, protein, and a gradually expandable vegetable portion.",
        "focus": [
          "balanced",
          "blood-sugar",
          "protein",
          "meal-tolerance"
        ],
        "meals": [
          "main",
          "evening"
        ],
        "roles": [
          "carbohydrate",
          "egg protein",
          "cooked vegetable"
        ],
        "why": "The meal can start small and become more balanced as appetite returns, without relying on a prolonged narrow diet.",
        "caution": "Use safe food handling and adapt rice portions for glucose goals. Severe vomiting or dehydration requires medical assessment, not only diet changes.",
        "learnId": "meal-tolerance",
        "digestiveMealRole": "A small familiar meal that can be expanded as nausea, vomiting, or diarrhea improves.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_06_DIGESTIVE_SUPPORT",
        "editorialSourceIds": [
          "NIDDK_DIARRHEA_DIET",
          "NIDDK_DIARRHEA_TREATMENT",
          "NIDDK_VIRAL_GASTROENTERITIS_TREATMENT",
          "MEDLINEPLUS_NAUSEA_VOMITING_ADULTS"
        ],
        "diabetesMealRole": "Can fit a planned meal when the rice portion and timing match the individual diabetes treatment plan.",
        "additionalResearchBatches": [
          "BATCH_03_DIABETES_GLUCOSE"
        ]
      },
      {
        "id": "chicken-tofu-noodle-soup",
        "title": "Chicken or tofu noodle soup with cooked vegetables",
        "subtitle": "A fluid-containing meal with protein, carbohydrate, and soft vegetables.",
        "focus": [
          "balanced",
          "protein",
          "meal-tolerance"
        ],
        "meals": [
          "main",
          "evening"
        ],
        "roles": [
          "fluid-containing meal",
          "protein",
          "carbohydrate",
          "cooked vegetable"
        ],
        "why": "A small bowl may be easier to tolerate than a large meal and can support the return to a more complete eating pattern.",
        "caution": "Commercial soup can be high in sodium and is not a substitute for oral rehydration when fluid and electrolyte losses are significant.",
        "learnId": "meal-tolerance",
        "digestiveMealRole": "A small fluid-containing meal for gradual return to eating; not a replacement for a clinician-directed rehydration plan.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_06_DIGESTIVE_SUPPORT",
        "editorialSourceIds": [
          "NIDDK_DIARRHEA_DIET",
          "NIDDK_DIARRHEA_TREATMENT",
          "NIDDK_VIRAL_GASTROENTERITIS_TREATMENT",
          "MEDLINEPLUS_NAUSEA_VOMITING_ADULTS",
          "MEDLINEPLUS_DEHYDRATION",
          "MEDLINEPLUS_FLUID_ELECTROLYTE_BALANCE",
          "CDC_FOOD_SAFETY_REHYDRATION"
        ]
      },
      {
        "id": "pear-oats-yogurt-bowl",
        "title": "Pear and oats with plain yogurt or a suitable alternative",
        "subtitle": "A fiber-focused breakfast or snack with fruit, whole grain, and optional protein.",
        "focus": [
          "balanced",
          "bowel-support",
          "fiber",
          "vegetarian",
          "protein"
        ],
        "meals": [
          "breakfast",
          "snack"
        ],
        "roles": [
          "fruit",
          "whole grain",
          "protein",
          "fiber"
        ],
        "why": "Pear and oats add food-based fiber, while yogurt or an alternative can add protein.",
        "caution": "Increase fiber gradually. Adapt for lactose intolerance, milk allergy, swallowing needs, kidney disease, and glucose goals.",
        "learnId": "fiber-support",
        "digestiveMealRole": "A gradual food-based fiber option for bowel regularity when dairy or alternatives are tolerated.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_06_DIGESTIVE_SUPPORT",
        "editorialSourceIds": [
          "NIDDK_CONSTIPATION_DIET",
          "NIDDK_CONSTIPATION_TREATMENT",
          "MEDLINEPLUS_DIETARY_FIBER",
          "MEDLINEPLUS_SOLUBLE_INSOLUBLE_FIBER"
        ],
        "additionalResearchBatches": [
          "BATCH_01_ENERGY_IRON"
        ]
      },
      {
        "id": "white-bean-cooked-vegetable-bowl",
        "title": "White beans with cooked vegetables and whole grain",
        "subtitle": "A plant-based main meal with fiber, protein, and a flexible grain portion.",
        "focus": [
          "balanced",
          "blood-sugar",
          "blood-pressure",
          "heart",
          "bowel-support",
          "fiber",
          "protein",
          "vegetarian",
          "immune-variety"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "legume",
          "plant protein",
          "cooked vegetable",
          "whole grain"
        ],
        "why": "Beans, vegetables, and whole grain can build a repeatable fiber-rich meal.",
        "caution": "Start with a smaller bean portion if gas or bloating is common. Rinse canned beans when suitable and adapt potassium, phosphorus, sodium, and carbohydrate for other conditions.",
        "learnId": "fiber-support",
        "digestiveMealRole": "A gradual fiber-building meal for bowel regularity, not an acute-diarrhea meal when fiber worsens symptoms.",
        "contentStatus": "researched",
        "researchBatch": "BATCH_06_DIGESTIVE_SUPPORT",
        "editorialSourceIds": [
          "NIDDK_CONSTIPATION_DIET",
          "NIDDK_CONSTIPATION_TREATMENT",
          "MEDLINEPLUS_DIETARY_FIBER",
          "MEDLINEPLUS_SOLUBLE_INSOLUBLE_FIBER",
          "NHLBI_DASH_EATING_PLAN",
          "AHA_MEDITERRANEAN_DIET",
          "NIDDK_HEALTHY_LIVING_DIABETES",
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ],
        "dashMealRole": "Can fit a DASH-style pattern when prepared with lower-sodium ingredients and individualized potassium guidance.",
        "mediterraneanMealRole": "Beans, vegetables, and whole grains fit a plant-forward Mediterranean-style pattern.",
        "diabetesMealRole": "Can fit a diabetes-supporting plate when the bean and grain carbohydrate portions match the treatment plan.",
        "additionalResearchBatches": [
          "BATCH_01_ENERGY_IRON",
          "BATCH_03_DIABETES_GLUCOSE",
          "BATCH_04_BLOOD_PRESSURE",
          "BATCH_05_CHOLESTEROL_HEART",
          "BATCH_10_IMMUNITY_INFECTION"
        ],
        "immuneMealRole": "Can support nutrient variety when the protein, plant foods, portion, food safety, allergies, and condition-specific restrictions fit the individual plan."
      },
      {
        "id": "salmon-sweet-potato-greens",
        "title": "Salmon, sweet potato, and greens",
        "subtitle": "A protein-centered main meal with vegetables and a quality carbohydrate.",
        "focus": [
          "balanced",
          "heart",
          "protein",
          "immune-variety"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "fish",
          "protein",
          "vegetable",
          "quality carbohydrate"
        ],
        "why": "Combines a suitable protein source with two plant-food groups in one practical meal.",
        "caution": "Adapt fish choice, food safety, potassium, carbohydrate, sodium, allergy, pregnancy, and immune-suppression guidance.",
        "learnId": "immunity-food-variety",
        "contentStatus": "researched",
        "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
        "editorialSourceIds": [
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ],
        "immuneMealRole": "Supports a varied meal pattern without claiming infection prevention."
      },
      {
        "id": "tofu-broccoli-brown-rice",
        "title": "Tofu, broccoli, and brown rice",
        "subtitle": "A vegetarian main meal with plant protein, vegetables, and whole grain.",
        "focus": [
          "balanced",
          "blood-sugar",
          "heart",
          "protein",
          "vegetarian",
          "immune-variety"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "tofu",
          "plant protein",
          "vegetable",
          "whole grain"
        ],
        "why": "Builds variety from plant protein, vegetables, and whole grain.",
        "caution": "Review soy allergy, carbohydrate portions, sodium in sauces, food safety, and kidney or treatment-specific restrictions.",
        "learnId": "immunity-food-variety",
        "contentStatus": "researched",
        "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
        "editorialSourceIds": [
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION",
          "NIDDK_HEALTHY_LIVING_DIABETES",
          "AHA_MEDITERRANEAN_DIET"
        ],
        "immuneMealRole": "Supports nutrient variety when portions and restrictions fit the individual plan.",
        "additionalResearchBatches": [
          "BATCH_03_DIABETES_GLUCOSE",
          "BATCH_05_CHOLESTEROL_HEART"
        ]
      },
      {
        "id": "yogurt-fruit-seed-bowl",
        "title": "Plain yogurt or fortified alternative with fruit and seeds",
        "subtitle": "A breakfast or snack with protein, fruit, and a small seed portion.",
        "focus": [
          "balanced",
          "protein",
          "vegetarian",
          "immune-variety"
        ],
        "meals": [
          "breakfast",
          "snack"
        ],
        "roles": [
          "dairy or fortified alternative",
          "protein",
          "fruit",
          "seed"
        ],
        "why": "Adds variety through a protein food, fruit, and seeds.",
        "caution": "Choose a pasteurized product and adapt added sugar, allergy, lactose, swallowing, kidney, pregnancy, and severe immune-suppression guidance.",
        "learnId": "immunity-food-variety",
        "contentStatus": "researched",
        "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
        "editorialSourceIds": [
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ],
        "immuneMealRole": "Supports adequate intake and variety without claiming probiotic treatment or infection prevention."
      },
      {
        "id": "chicken-bean-vegetable-stew",
        "title": "Chicken, beans, and vegetable stew",
        "subtitle": "A main meal combining animal and plant protein with vegetables.",
        "focus": [
          "balanced",
          "protein",
          "fiber",
          "immune-variety"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "poultry",
          "legume",
          "protein",
          "vegetable"
        ],
        "why": "Combines several food groups in one familiar meal.",
        "caution": "Cook poultry thoroughly, use lower-sodium ingredients when needed, increase beans gradually, and adapt kidney, digestive, allergy, and immune-suppression guidance.",
        "learnId": "immunity-food-variety",
        "contentStatus": "researched",
        "researchBatch": "BATCH_10_IMMUNITY_INFECTION",
        "editorialSourceIds": [
          "ODS_IMMUNE_FUNCTION",
          "MEDLINEPLUS_MALNUTRITION"
        ],
        "immuneMealRole": "Supports protein and plant-food variety within individualized food-safety guidance."
      },
      {
        "id": "peanut-butter-banana-wholegrain-toast",
        "title": "Whole-grain toast with banana and nut or seed butter",
        "subtitle": "A simple breakfast or snack combining whole grain, fruit, and a protein-containing spread.",
        "focus": [
          "balanced",
          "fiber",
          "protein",
          "vegetarian"
        ],
        "meals": [
          "breakfast",
          "snack"
        ],
        "roles": [
          "whole grain",
          "fruit",
          "nut or seed",
          "protein"
        ],
        "why": "Uses familiar shelf-stable foods to combine carbohydrate, fiber, and a protein-containing spread.",
        "caution": "Review peanut or seed allergy, choking or swallowing risk, added sugar and sodium in spreads, carbohydrate portions, and kidney needs.",
        "learnId": "nutrition-plate",
        "contentStatus": "researched",
        "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
        "editorialSourceIds": [
          "USDA_DGA_2025_2030",
          "CDC_HEALTHY_EATING_TIPS",
          "FDA_FOOD_ALLERGIES"
        ],
        "nutritionMealRole": "A low-preparation balanced option that can be adapted to preference and allergy needs."
      },
      {
        "id": "bean-sweet-potato-vegetable-plate",
        "title": "Beans, sweet potato, and vegetables",
        "subtitle": "A plant-based main meal with legumes, a starchy vegetable, and non-starchy vegetables.",
        "focus": [
          "balanced",
          "blood-sugar",
          "blood-pressure",
          "heart",
          "fiber",
          "protein",
          "vegetarian",
          "immune-variety"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "legume",
          "starchy vegetable",
          "vegetable",
          "plant protein"
        ],
        "why": "Combines fiber-rich carbohydrate, plant protein, and vegetables in one flexible plate.",
        "caution": "Increase beans gradually, compare sodium in canned beans, adapt carbohydrate portions, and review potassium or kidney restrictions.",
        "learnId": "nutrition-plate",
        "contentStatus": "researched",
        "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
        "editorialSourceIds": [
          "USDA_DGA_2025_2030",
          "CDC_HEALTHY_EATING_TIPS",
          "NIDDK_HEALTHY_LIVING_DIABETES"
        ],
        "nutritionMealRole": "A budget-aware plant meal that supports variety and balanced meal building.",
        "additionalResearchBatches": [
          "BATCH_03_DIABETES_GLUCOSE"
        ]
      },
      {
        "id": "wholegrain-pasta-beans-vegetables",
        "title": "Whole-grain pasta with beans and vegetables",
        "subtitle": "A flexible mixed meal using whole grain, legumes, vegetables, and a simple sauce.",
        "focus": [
          "balanced",
          "heart",
          "fiber",
          "protein",
          "vegetarian"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "whole grain",
          "legume",
          "vegetable",
          "plant protein"
        ],
        "why": "Shows how a familiar mixed dish can include several food groups without requiring a separate plate layout.",
        "caution": "Compare sodium and added sugar in sauces, adapt gluten or wheat allergy needs, increase fiber gradually, and adjust carbohydrate portions for diabetes.",
        "learnId": "nutrition-plan",
        "contentStatus": "researched",
        "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
        "editorialSourceIds": [
          "USDA_DGA_2025_2030",
          "FDA_NUTRITION_FACTS_LABEL",
          "FDA_FOOD_ALLERGIES"
        ],
        "nutritionMealRole": "A repeatable pantry meal that can use frozen or canned ingredients."
      },
      {
        "id": "vegetable-omelet-wholegrain-fruit",
        "title": "Vegetable omelet with whole-grain bread and fruit",
        "subtitle": "A breakfast or main meal combining eggs, vegetables, whole grain, and fruit.",
        "focus": [
          "balanced",
          "protein",
          "fiber",
          "vegetarian"
        ],
        "meals": [
          "breakfast",
          "main"
        ],
        "roles": [
          "egg",
          "protein",
          "vegetable",
          "whole grain",
          "fruit"
        ],
        "why": "Combines several food groups in a meal that can be adapted to available vegetables and cultural flavors.",
        "caution": "Review egg allergy, sodium in cheese or processed fillings, food safety, carbohydrate portions, and individual cholesterol or kidney guidance.",
        "learnId": "nutrition-variety",
        "contentStatus": "researched",
        "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
        "editorialSourceIds": [
          "USDA_DGA_2025_2030",
          "FDA_FOOD_ALLERGIES"
        ],
        "nutritionMealRole": "A flexible meal for using leftover vegetables and familiar seasonings."
      },
      {
        "id": "chicken-roasted-vegetables-potato",
        "title": "Chicken, roasted vegetables, and potato",
        "subtitle": "A simple main meal with lean protein, vegetables, and a starchy carbohydrate.",
        "focus": [
          "balanced",
          "blood-pressure",
          "protein",
          "immune-variety"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "poultry",
          "protein",
          "vegetable",
          "starchy vegetable"
        ],
        "why": "Uses a repeatable sheet-pan structure that can be prepared in batches and adapted with different vegetables.",
        "caution": "Cook poultry safely, limit salty seasonings or processed sauces, adapt potato portions for diabetes, and review potassium or kidney restrictions.",
        "learnId": "nutrition-plan",
        "contentStatus": "researched",
        "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
        "editorialSourceIds": [
          "USDA_DGA_2025_2030",
          "CDC_HEALTHY_EATING_TIPS"
        ],
        "nutritionMealRole": "A batch-cooking meal that can support weekly planning and leftovers."
      },
      {
        "id": "tofu-vegetable-wholegrain-wrap",
        "title": "Tofu and vegetable whole-grain wrap",
        "subtitle": "A portable plant-protein meal with vegetables and a whole-grain wrap.",
        "focus": [
          "balanced",
          "heart",
          "protein",
          "fiber",
          "vegetarian",
          "immune-variety"
        ],
        "meals": [
          "main"
        ],
        "roles": [
          "soy",
          "plant protein",
          "vegetable",
          "whole grain"
        ],
        "why": "Provides a portable mixed meal and another protein option for food variety.",
        "caution": "Review soy or wheat allergy, sodium in wraps and sauces, swallowing needs, carbohydrate portions, and kidney or treatment restrictions.",
        "learnId": "nutrition-variety",
        "contentStatus": "researched",
        "researchBatch": "BATCH_12_NUTRITION_HEALTHY_EATING",
        "editorialSourceIds": [
          "USDA_DGA_2025_2030",
          "FDA_NUTRITION_FACTS_LABEL",
          "FDA_FOOD_ALLERGIES"
        ],
        "nutritionMealRole": "A portable vegetarian option that can use fresh or cooked vegetables."
      }
    ]
  }
};
