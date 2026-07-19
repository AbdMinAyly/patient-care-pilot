# PATIENT CARE CORE

**Project source of truth for product vision, information architecture, UI, content, safety, coding, packaging, and testing**

Version: 1.0  
Status: Active baseline  
Baseline reference: v012 and later controlled refinements  

---

## IMPORTANT FOR EVERY FUTURE BUILD

Read this document before editing the application.

Preserve the established product structure and design system. Apply reusable changes consistently across equivalent sections. Do not redesign unrelated areas. When uncertain, choose continuity over invention.

This file is the project’s persistent specification. Chat memory is not the source of truth; this document is.

---

# 1. Product Vision

Patient Care is a **LIFE + HEALTH teaching and navigation system**.

It is designed to help people:

- understand healthy living
- understand symptoms, conditions, medications, supplements, diets, and normal ranges
- see useful relationships between topics
- prepare better questions for a doctor
- save relevant information into a clear summary

It is not:

- a diagnosis tool
- a prescription tool
- a generic article library
- a visual graph explorer
- a replacement for a clinician
- a personal medical record system

The user-facing experience must remain simple while the relationship system underneath can be powerful.

Core principle:

> **Simple on the surface. Connected underneath.**

Every screen should help answer:

> **What should I understand or do next?**

---

# 2. Main Product Structure

The application has four permanent modes:

1. SHINE
2. HEAL
3. DR
4. Summary

The permanent bottom navigation is:

```text
SHINE | HEAL | DR | Summary
```

Each mode has a separate purpose and tone.

---

## 2.1 SHINE

SHINE is educational wellness teaching.

```text
S — Sleep
H — Happiness
I — Immunity
N — Nutrition
E — Exercise
```

SHINE is not called a plan.

SHINE teaches:

- why each area matters
- how each area affects the rest of SHINE
- what improves it
- what weakens it
- when a health condition may be affecting it

SHINE may link internally to other SHINE topics through meaningful inline text.

SHINE may also bridge to:

- HEAL for habits, routines, diets, supplements, and normal ranges
- DR for symptoms or conditions that may require clinical review

---

## 2.2 HEAL

HEAL contains practical health-support teaching.

Primary areas:

- Diet
- Lifestyle
- Supplements
- Normal vital and laboratory ranges

Examples:

- blood pressure
- blood glucose
- HbA1c
- cholesterol
- LDL
- fasting glucose
- post-meal glucose
- bedtime glucose
- low blood sugar guidance
- condition-specific diets
- supplement education
- daily routines that support health

HEAL should feel practical, calm, and structured.

---

## 2.3 DR

DR contains medical education and doctor-preparation content.

Primary areas:

- Symptoms
- Acute conditions
- Chronic conditions
- Medications
- ER / emergency guidance

Use the label:

```text
Chronic
```

Do not use:

```text
Chronic / Big 3
```

DR should make clear when information is educational, when clinician review is needed, and when emergency action may be necessary.

---

## 2.4 Summary

Summary stores what the user selected from the application.

Recommended sections:

- Lifestyle
- Diet
- Supplements
- Medications
- Symptoms
- Acute conditions
- Chronic conditions
- Questions for Doctor

Available actions:

- remove item
- add note
- save doctor question
- print summary
- download JSON backup
- clear saved data

The Summary is user-curated educational information. It is not a diagnosis, prescription, or official medical record.

---

# 3. Navigation Foundation

The bottom navigation is the only permanent mode switcher.

Rules:

- Always visible on mobile and desktop.
- SHINE opens SHINE.
- HEAL opens HEAL.
- DR opens DR.
- Summary opens Summary.
- Every button must have a separate route and handler.
- The active mode must be visually clear.
- Detail pages keep the bottom navigation visible.
- Do not repeat these four mode buttons at the top.
- Do not place duplicate mode buttons inside hero cards.
- Bottom navigation must not cover page content.

Preferred route model:

```text
#/shine
#/shine/sleep
#/shine/happiness
#/shine/immunity
#/shine/nutrition
#/shine/exercise

#/heal
#/heal/diet/:id
#/heal/lifestyle/:id
#/heal/supplement/:id
#/heal/range/:id

#/dr
#/dr/symptom/:id
#/dr/acute/:id
#/dr/chronic/:id
#/dr/medication/:id
#/dr/er/:id

#/summary
```

---

# 4. Visual Foundation

The application is primarily white.

Mode colors:

```text
SHINE   = deep red / maroon
HEAL    = yellow / gold
DR      = blue
Summary = dark neutral
```

## 4.1 Hero cards

Hero cards should:

- be filled with the mode color
- show a large mode title
- include one or two short explanatory lines
- avoid buttons that duplicate the bottom navigation
- avoid unnecessary decorative elements

## 4.2 Content cards

Content cards should:

- use a white background by default
- use a clear border
- use moderate rounded corners
- have generous but controlled spacing
- use minimal shadow
- avoid excessive nested cards
- keep headings clear and concise

## 4.3 Overall visual character

The interface should feel:

- clean
- strong
- readable
- mobile-first
- mostly white
- not pale
- not childish
- not crowded
- not overly clinical in SHINE
- not overly decorative in DR

## 4.4 Inline topic links

Inline linked words must be:

- bold
- underlined
- colored using the source mode color
- clearly clickable
- keyboard accessible

Example inside SHINE:

```text
Better sleep supports emotional regulation and helps Happiness.
```

`Happiness` should be red, bold, underlined, and clickable.

---

# 5. Unified SHINE Topic Structure

Every SHINE topic should follow the same structure.

The content should be detailed, researched, and patient-friendly.

Example for Sleep:

---

## Card 1 — Why Sleep matters

This card explains:

- what sleep does in the body
- why sleep quality matters
- why sleep duration matters
- how sleep affects daily functioning
- practical foundational advice

The content must use real, researched information. Avoid generic filler.

---

## Card 2 — How Sleep helps SHINE

Use individual bordered sentence blocks.

Each block should include:

- an icon at the beginning
- one specific explanatory sentence
- one or more inline clickable SHINE words
- no separate button row

Example structure:

```text
🧠 Sufficient sleep supports emotional regulation, attention, and coping, strengthening Happiness.

🍽 Sleep influences appetite signalling and glucose regulation, connecting it with Nutrition.

🏃 Sleep supports reaction time, recovery, and physical performance, strengthening Exercise.

🛡 Sleep supports normal immune defence and recovery, connecting it with Immunity.
```

Do not repeat the same sentence opening such as:

```text
Good Sleep helps Happiness because...
```

Use natural, specific wording instead.

---

## Card 3 — How poor Sleep hurts SHINE

Use the same visual pattern as Card 2:

- icon
- bordered sentence block
- inline clickable SHINE word
- specific explanation

A structural or visual change made to Card 2 should normally also be applied to Card 3.

Example structure:

```text
🧠 Poor sleep can reduce emotional control and stress tolerance, weakening Happiness.

🍽 Sleep loss can disrupt appetite signalling and make food choices less stable, affecting Nutrition.

🏃 Fatigue and slower reaction time can reduce performance and consistency in Exercise.

🛡 Repeated sleep loss can interfere with normal immune response and recovery, affecting Immunity.
```

---

## Card 4 — Good habits that can improve the topic

This is a HEAL bridge and should use the yellow theme.

For Sleep, examples include:

- steady sleep schedule
- wind-down and screen routine
- bedroom environment
- daylight and daily movement
- evening food, caffeine, and alcohol habits

Each item can open a detailed HEAL page.

The card should communicate the bridge naturally. Do not include developer-style explanations.

---

## Card 5 — Common conditions that can affect the topic

This card connects to DR.

For Sleep, examples include:

- insomnia
- sleep apnea
- restless legs syndrome
- asthma
- headache or pain

Preferred heading:

```text
Common conditions that can disrupt sleep
```

Do not write:

```text
These leave SHINE and open DR mode.
```

The design and destination already communicate that.

---

# 6. SHINE Topic Coverage

The unified structure should eventually apply to:

- Sleep
- Happiness
- Immunity
- Nutrition
- Exercise

Each topic should include:

1. Why it matters
2. How it helps SHINE
3. How weakness in that area hurts SHINE
4. Habits that can improve it
5. Common conditions that can affect it

Only include cross-links that are accurate, useful, and supported.

Do not force every topic to link to all five SHINE pillars unless the relationship is meaningful.

---

# 7. Relationship Rules

The hidden relationship system is central to the product.

Users should not see a graph explorer.

They should see:

- inline links
- contextual cards
- clear next steps
- meaningful labels

---

## 7.1 Within SHINE

SHINE topics may link to other SHINE topics through inline text.

Examples:

```text
Sleep ↔ Happiness
Sleep ↔ Immunity
Sleep ↔ Nutrition
Sleep ↔ Exercise
Nutrition ↔ Immunity
Exercise ↔ Happiness
```

Only create a relationship when it is medically or behaviorally reasonable and useful.

---

## 7.2 SHINE to HEAL

SHINE may connect to HEAL through improvement habits, routines, diet, supplement, or normal-range cards.

Examples:

```text
Good habits that can improve Sleep
Diet approaches that support Nutrition
Lifestyle steps that support Exercise
```

These should use HEAL’s yellow visual language.

---

## 7.3 SHINE to DR

SHINE may connect to DR through symptoms or conditions that commonly affect the topic.

Examples:

```text
Common conditions that can disrupt Sleep
Symptoms that may affect Exercise
Conditions that may affect Nutrition
```

These should use DR’s blue visual language.

---

## 7.4 No generic link dumping

Do not create sections titled:

- Related articles
- See also
- More content
- Other topics

Every connection must explain why it matters.

Prefer purpose-driven labels such as:

- How this supports SHINE
- How this can weaken SHINE
- Habits that may help
- Common conditions that can affect this
- Discuss with a clinician
- Questions to ask your doctor

---

# 8. Content Standard

All content must be:

- specific
- researched
- patient-friendly
- useful
- structured
- non-repetitive
- proportionate to the topic

Avoid:

- generic motivational filler
- empty statements
- textbook history
- repetitive sentence templates
- overexplaining navigation
- unsupported medical claims
- overly long unbroken paragraphs
- content that sounds diagnostic or prescriptive

Each topic should answer:

- Why does this matter?
- What does it affect?
- What can improve it?
- What can worsen it?
- When may a medical condition be involved?
- What should the user explore next?

Medical and public-health content should be checked against reliable sources before publication.

Preferred source types:

- government health agencies
- major public-health institutions
- professional medical organizations
- peer-reviewed reviews or guidelines
- trusted hospital or academic medical sources when primary guidance is unavailable

---

# 9. Consistency Rule

This is a core project rule:

> **When a requested change represents a reusable structural or visual pattern, apply it consistently to all equivalent sections unless the request explicitly limits it.**

Examples:

- If “How Sleep helps SHINE” changes to bordered icon blocks, “How poor Sleep hurts SHINE” should use the matching design.
- If one SHINE topic receives the unified five-card structure, the same pattern should guide the other SHINE topics.
- If a navigation bug is fixed in one mode, test all four bottom navigation buttons.
- If a card style changes, inspect equivalent cards in other modes.
- If inline link styling changes, test every inline relationship using that renderer.

Do not extend a request into unrelated redesigns.

---

# 10. Controlled-Change Rule

Version 12 established the preferred visual and structural baseline.

Future versions should preserve that direction unless the user explicitly requests a redesign.

For every update:

1. Start from the latest stable version.
2. Preserve working layout and content.
3. Change the requested feature.
4. Apply it to logically equivalent areas.
5. Do not redesign unrelated modes.
6. Test navigation and content links.
7. Create a new numbered version.
8. State exactly what changed.
9. State what was intentionally not changed.

When uncertain, return to the established v012-style structure rather than inventing a new design.

---

# 11. Coding Foundation

The app should avoid one-off hard-coded behavior.

Even when packaged as a single standalone HTML file, the internal JavaScript should remain organized into clear sections.

Recommended internal architecture:

```text
App configuration
Mode configuration
Theme tokens
Topic data
Relationship data
Reusable renderers
Router
Saved-summary state
Print/export functions
Validation
```

---

## 11.1 Reusable renderers

Recommended functions:

```text
renderModeHome()
renderShineTopic()
renderHealTopic()
renderDrTopic()
renderSummary()
renderConnectionBlock()
renderConditionCards()
renderHabitCards()
renderInlineTopicLink()
renderHero()
renderBottomNavigation()
```

The same renderer should be reused for equivalent sections.

---

## 11.2 Route handling

Routes must distinguish:

- SHINE home
- SHINE topic
- HEAL home
- HEAL topic
- DR home
- DR topic
- Summary

Route parsing must fail safely.

If the hash is missing or malformed:

```text
Default to #/shine
```

Do not pass undefined route values into render functions.

---

## 11.3 Event handling

Use explicit handlers or data attributes.

Avoid brittle global click logic that can make multiple buttons open the same destination.

Recommended pattern:

```html
<button data-route="#/heal">HEAL</button>
```

```javascript
button.addEventListener('click', () => {
  location.hash = button.dataset.route;
});
```

Test every route after changes.

---

# 12. Data Structure

A SHINE topic should contain fields similar to:

```javascript
{
  id: "sleep",
  mode: "shine",
  title: "Sleep",
  summary: "...",
  whyItMatters: [],
  positiveConnections: [],
  negativeConnections: [],
  improvementHabits: [],
  relatedConditions: []
}
```

A connection should include its purpose:

```javascript
{
  target: "nutrition",
  icon: "🍽",
  text: "Sleep influences appetite signalling and glucose regulation...",
  relationship: "supports"
}
```

A HEAL bridge item should contain:

```javascript
{
  id: "steady-sleep-schedule",
  mode: "heal",
  category: "lifestyle",
  title: "Steady sleep schedule",
  summary: "...",
  content: []
}
```

A DR condition item should contain:

```javascript
{
  id: "sleep-apnea",
  mode: "dr",
  category: "chronic",
  title: "Sleep apnea",
  summary: "...",
  redFlags: [],
  clinicianReview: true
}
```

Stable IDs must not change between versions without a migration plan.

---

# 13. Safety Foundation

Clinical content must fail safely.

Rules:

- The app does not diagnose.
- The app does not prescribe.
- Dosing remains hidden unless explicitly clinically approved.
- Missing or malformed approval data must block dosing.
- Emergency warnings must be prominent.
- Unapproved dosing must never appear in printed summaries.
- Normal ranges must include appropriate context.
- Medication and supplement content must clearly distinguish education from instructions.
- Conditions should not be presented as confirmed diagnoses.
- “Possible cause” and similar relationships must use cautious language.

Preferred dosing rule:

```javascript
if (node.dosing?.status !== "approved") {
  showLockedDosingNotice();
}
```

Do not use a fail-open check.

---

## 13.1 Safety levels

Recommended values:

```text
green  = general education / lifestyle
 yellow = caution / discuss with clinician
 red    = urgent or emergency warning
 locked = clinical review required
```

## 13.2 Review levels

Recommended values:

```text
general
clinical
approved
doctor_only
```

Unknown values should default to the safest state.

---

# 14. Summary Foundation

The Summary should organize saved material, not simply list everything together.

Recommended data shape:

```javascript
{
  version: 1,
  lastUpdated: "date",
  lifestyle: [],
  diet: [],
  supplements: [],
  medications: [],
  symptoms: [],
  acuteConditions: [],
  chronicConditions: [],
  questionsForDoctor: [],
  notes: []
}
```

Summary functions:

- add item
- remove item
- edit note
- save question
- print summary
- download JSON
- clear all

Privacy notice:

```text
Saved locally on this device only. Do not enter names, ID numbers, phone numbers, or other private identifying details.
```

---

# 15. Print and Export Rules

The application should support:

- Print SHINE teaching or selected lifestyle material when relevant
- Print Doctor Summary
- Download JSON backup

Print layouts should:

- remove navigation
- remove interactive controls
- use black text on white background
- show clear headings
- avoid overflowing notes
- exclude unapproved dosing
- include a disclaimer that the content is user-curated educational information

---

# 16. Mobile and Accessibility Rules

The app is mobile-first.

Requirements:

- bottom navigation remains visible
- bottom navigation does not cover content
- touch targets are large
- text is readable without zoom
- inline links are clearly visible
- color is not the only status indicator
- keyboard navigation works on desktop
- focus states are visible
- semantic headings are used
- buttons and links have accessible labels
- reduced-motion preferences are respected
- contrast remains readable in all four themes

Preferred touch target:

```text
At least 44–48 px
```

---

# 17. Packaging Rules

Default builds should use the normal application structure.

A standalone HTML file should be created only when explicitly requested.

Every ZIP should include:

```text
index.html
README.md
VERSION.txt
upload_to_github.cmd
```

When standalone is requested, also include:

```text
patient-care-v###-standalone.html
```

The ZIP should open correctly from:

- Windows local preview
- GitHub Pages
- phone file browser when standalone was requested

No tokens, passwords, or private credentials may be included.

---

# 18. Preview and Deployment Rules

The preview script should:

- select the highest version number, not only the latest file timestamp
- stop or avoid stale local preview servers
- extract into a fresh temporary folder
- clearly display the selected ZIP
- open the correct `index.html`
- use a cache-busting URL when serving locally

The deployment script should:

- deploy only the selected version
- avoid uploading temporary files
- preserve Git history
- avoid embedding secrets
- report whether changes were pushed

---

# 19. Testing Checklist

Before delivering every version:

```text
□ SHINE button opens SHINE
□ HEAL button opens HEAL
□ DR button opens DR
□ Summary button opens Summary
□ Active mode styling is correct
□ All category cards open the correct pages
□ Inline SHINE links work
□ Positive SHINE connection blocks work
□ Negative SHINE connection blocks work
□ HEAL bridge links work
□ DR condition links work
□ Back navigation works
□ Bottom bar remains visible
□ Bottom bar does not cover content
□ Saved items persist
□ Remove item works
□ Questions for Doctor save correctly
□ Print works
□ JSON export works
□ No unapproved dosing appears
□ No old headings remain
□ No accidental duplicate buttons remain
□ No JavaScript syntax errors
□ No missing node IDs
□ No broken relationship targets
□ Standalone file opens directly when requested
□ Desktop layout works
□ Mobile layout works
```

---

# 20. Version Discipline

Each build summary must state:

- base version used
- exact changes made
- equivalent areas also updated
- what was intentionally not changed
- testing completed

Version naming example:

```text
patient-care-v020-description.zip
patient-care-v020-description.html
```

Never overwrite a stable older version.

---

# 21. Current Preferred SHINE Page Pattern

For all future SHINE work, use this order:

```text
Hero
1. Why [topic] matters
2. How [topic] helps SHINE
3. How weak/poor [topic] hurts SHINE
4. Good habits that can improve [topic]
5. Common conditions that can affect [topic]
Bottom navigation
```

Connection cards use:

```text
Icon + bordered sentence block + inline linked SHINE word
```

Do not use separate relationship buttons inside Card 2 or Card 3.

Card 4 uses HEAL yellow.

Card 5 uses DR blue.

---

# 22. Final Decision Rules

When making a future change, ask internally:

1. Is this a one-off content edit or a reusable pattern?
2. Which equivalent sections should also receive the change?
3. Does this preserve the v012 visual baseline?
4. Does this introduce unnecessary redesign?
5. Does it make the app clearer, safer, or more useful?
6. Have all four navigation modes been tested?
7. Are the medical claims researched and phrased cautiously?

Priority order:

```text
1. User clarity
2. Safety
3. Consistency
4. Content quality
5. Mobile usability
6. Visual polish
7. Additional features
```

---

# 23. Core Product Sentence

Use this sentence to judge future decisions:

> **Patient Care is a guided SHINE + HEAL + DR teaching system that connects healthy living, practical health support, medical education, and a doctor-ready summary without overwhelming the user.**



## 18. Editable Content and Local-Only Infrastructure

All patient-facing teaching content must live outside application logic.

Required separation:

```text
data/content.js = editable content
app.js = rendering and behavior only
styles.css = visual design only
index.html = application shell only
```

Do not hard-code topic teaching, medication information, supplement information, diet plans, exercise plans, normal ranges, symptoms, conditions, or relationship text inside `app.js` or `index.html`.

`data/content.js` is a data-only file. It may contain text, arrays, IDs, safety fields, and relationships, but no application functions.

The app must work locally with no internet connection:

- no external fonts required
- no remote scripts required
- no remote stylesheets required
- no remote images required for core operation
- no patient-facing online links unless explicitly approved later

A future Admin Mode must edit Content Records rather than application code. In a static browser app, Admin Mode can edit content in memory and export an updated local content file. Directly overwriting a local file requires explicit browser permission and is not supported consistently on all mobile browsers. Publishing to GitHub also requires a separate authenticated publishing step.

This rule applies to every content entity:

- SHINE Topic
- Diet Plan and Diet Item
- Lifestyle Plan and Lifestyle Item
- Exercise Plan and Exercise Item
- Supplement
- Medication
- Symptom
- Acute Condition
- Chronic Condition
- Normal Range
- Emergency Item
- Relationship text
- Summary labels


# v021 Plan and Diet Builder Principle

Summary is now **Your Plan**.

Your Plan is organized into four cores:

1. Daily Foundation
2. Food & Diet
3. Medications & Supplements
4. Doctor & Health

Diet is entity-based. A Diet Item is stored once with reusable metadata and can appear under multiple diet focuses. Filters assemble a useful view without duplicating separate food records for every condition.

Diet filters are educational, local, editable, and never presented as a personalized prescription.

All patient-facing Diet Builder labels, filter definitions, Diet Items, cautions, and Plan Core labels must remain in `data/content.js`, not in application logic.


## Action Path Pattern — v023

The Action Path is now a cross-product pattern, not a DR-only feature.

It may appear on:
- SHINE topics
- HEAL diet items
- HEAL lifestyle items
- HEAL supplement items
- HEAL normal-range items
- DR symptoms
- DR acute conditions
- DR chronic conditions
- DR medications
- DR emergency items

Available groups:
- Food ideas that may help
- Helpful tasks
- Supplements to discuss
- Questions to ask your doctor
- Labs or tests to discuss

Each topic displays only relevant groups. Empty or inappropriate groups remain hidden.
All tasks are editable in `data/content.js`; the renderer contains no patient-facing task text.


## Your Plan Overview Pattern — v024

Your Plan opens to an overview before showing detailed core content.

The overview must show:
- total saved-item count
- all Plan Cores
- count and category breakdown for each core
- a button to open each individual core
- one button to view all core details

Detailed content must not be repeated on the overview screen.
Each core uses the same pattern:
1. overview card
2. count and breakdown
3. Open Core action
4. dedicated detailed view
5. Back to Plan Overview action

This is a pattern change for every present and future Plan Core.


## Your SHINE Path — v025

Your SHINE Path is the signature combined view of Your Plan.

It is not a stack of all detailed Plan Cores. It is a single infographic that merges the user's saved information into four connected stages:

1. IGNITE — Build Your Foundation
2. NOURISH — Fuel Your Light
3. SUPPORT — Protect Your Progress
4. NAVIGATE — Prepare Your Care

Rules:
- Your Plan remains the fourth main mode.
- Plan Overview remains the entry screen.
- Individual Open Core buttons remain.
- “View All Core Details” is replaced with “Open Your SHINE Path.”
- The path is generated only from items the user actually saved.
- The path includes a generated one-sentence overview.
- Each stage links back to its detailed Plan Core.
- The visual path must work on mobile, desktop, print, and standalone HTML.
- All labels and stage wording remain editable in `data/content.js`.

## Your SHINE Path Infographic Pattern — v026

The combined Your SHINE Path view uses an infographic-first pattern rather than a vertical step timeline.

Rules:
- Keep the four-color visual language across Daily Foundation, Food & Diet, Medications & Supplements, and Doctor & Health.
- Show a central hub that represents the user's complete connected path.
- Place all four Plan Cores around the hub as clearly connected infographic nodes.
- Keep the generated path sentence visible as a visual summary ribbon.
- Retain the four individual core cards below the infographic for readable saved-item detail.
- Every node and core card must link to the corresponding detailed Plan Core.
- The infographic must remain readable on mobile, desktop, print, and standalone HTML.
- Keep all patient-facing labels editable in `data/content.js`.
- Do not redesign SHINE, HEAL, DR, Plan Overview, or individual Core Detail pages as part of this change.

## Modern Your SHINE Path Pattern — v027

v027 supersedes the presentation geometry of the v026 infographic while preserving its information architecture and all patient-facing content.

Rules:
- Keep the four-color visual language across Daily Foundation, Food & Diet, Medications & Supplements, and Doctor & Health.
- Present the combined path as a modern infographic canvas rather than a dropdown, plain list, or traditional vertical stepper.
- Keep one connected-path hub showing the total number of saved choices.
- Connect all four Plan Cores with a continuous multicolor route.
- Use modular route cards with visible stage numbers, icons, labels, and saved-item counts.
- Use a horizontal route on wide screens and a vertical route on mobile.
- Keep the generated path sentence visible as the summary ribbon.
- Retain the four individual core cards below the infographic for readable saved-item detail.
- Every route card and individual core card must link to the corresponding detailed Plan Core.
- Keep motion subtle and honor `prefers-reduced-motion`.
- The view must remain readable on mobile, desktop, print, and standalone HTML.
- Do not change patient-facing wording or data as part of this pattern update.
- Do not redesign SHINE, HEAL, DR, Plan Overview, or individual Core Detail pages as part of this change.
## SHINE-Centered Convergence Pattern — v028

v028 supersedes only the v027 infographic geometry while preserving all patient-facing wording, content, saved data, navigation, and detailed Plan Core cards.

Rules:
- Place a circular SHINE hub at the visual center of the combined path.
- Arrange all four Plan Cores around the SHINE hub.
- Show each Plan Core color flowing inward and visually merging at SHINE.
- Keep stage numbers, icons, labels, and live saved-item counts on the surrounding nodes.
- Keep the generated summary ribbon and the one-by-one detailed core cards below.
- Maintain readable desktop, mobile, print, and standalone presentations.
- Keep motion subtle and honor `prefers-reduced-motion`.
- Do not change patient-facing wording or redesign any screen outside Your SHINE Path.


## Restored Central SHINE Flow Pattern — v029

v029 restores the light circular central-flow composition for the combined Your SHINE Path infographic. SHINE remains the center hub, while the four Plan Core color streams converge inward. All patient-facing content, saved-data behavior, navigation, and screens outside this infographic remain unchanged.
---

# 18. Guided HEAL Wizards

Guided HEAL Wizards may be added to a SHINE topic when the existing content supports a connected planning flow.

Pilot rule for v044:

- The wizard is available only on SHINE Sleep.
- Existing teaching sections remain unchanged.
- The wizard is the final guided next-step pattern on the Sleep page.
- Do not duplicate the full manual Action Path on the Sleep page. Manual exploration remains available through HEAL search and HEAL topic pages.
- Wizard selections are not diagnoses or medical-record fields.
- Recommendations must reuse existing researched Action Path tasks rather than create conflicting duplicate instructions.
- Recommendations may be filtered by relevant conditions, schedules, symptoms or patterns, and daily-life circumstances.
- Every recommended action remains optional and must be added deliberately to Your Plan.
- Wizard tasks must continue to appear in the existing Your Plan and SHINE Path outputs.
- No dosing, prescribing, emergency threshold, or individualized treatment decision may be generated by a wizard.
## Progressive Disclosure Pattern — v045

Detailed content remains complete in data/content.js. Normal pages show a short initial view, visible safety information, and compact next-step choices. Full teaching and secondary Action Path groups remain available on demand. Emergency and dosing-lock content must never be hidden by this pattern.

---

# SHINE Focus Pattern — v046

SHINE is a browsing and teaching focus, not a saved Plan item.

Rules:

- Recommend one primary SHINE focus so next steps remain manageable.
- Permit one optional secondary focus; never silently replace a selected focus.
- Do not permit placeholder topics to become active focuses.
- Keep legacy `shine` profile data for compatibility, but store new focus choices in `shineFocus`.
- A SHINE focus does not increase Plan totals, appear as a Plan row, or count as health progress.
- Continue saving deliberately chosen HEAL, DR, Diet Builder, Action Path, and Wizard items to Your Plan.
- Highlight only direct typed SHINE-to-HEAL and SHINE-to-DR relationships. Do not infer support or risk from body text or generic `relatedIds`.
- Use at most one relationship badge on a card.
- Focus may bring relevant content forward, but it must not hide the complete library or reduce the visibility of urgent content.
- Do not generate percentages, completion claims, diagnosis, treatment selection, or prescribing logic from focus activity.
