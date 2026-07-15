# Patient Care Shared Language & Infrastructure Vocabulary

This document is the permanent vocabulary for product design, content, UI, data, safety, and development.

It exists so short or rough instructions can still be interpreted consistently.

## Core Interpretation Rule

When a requested change describes a reusable pattern, apply it to every logically equivalent area unless the request explicitly limits it.

Examples:

- A new medication card pattern should apply to all medication pages.
- A new supplement warning pattern should apply to all supplement pages.
- A new diet-item design should apply across all diet plans.
- A change to the positive SHINE relationship card should be reviewed against the negative SHINE relationship card.
- A navigation fix must be tested in all four modes.

A pattern change does not mean redesigning unrelated parts.

---

# 1. Main Product Areas

## Mode

One of the four permanent app areas:

- **SHINE** — wellness teaching
- **HEAL** — practical health support
- **DR** — symptoms, conditions, medications, and emergency guidance
- **Summary** — saved items, questions, print, and export

## SHINE

SHINE is teaching, not a plan.

- **S — Sleep**
- **H — Happiness**
- **I — Immunity**
- **N — Nutrition**
- **E — Exercise**

## HEAL

HEAL contains practical support topics:

- Diet
- Lifestyle
- Supplements
- Normal Ranges

## DR

DR contains medical education and doctor-preparation topics:

- Symptoms
- Acute Conditions
- Chronic Conditions
- Medications
- ER / Emergency

## Summary

The fourth mode where saved items are organized.

---

# 2. Navigation Terms

## Bottom Navigation

The permanent four-button bar:

**SHINE | HEAL | DR | Summary**

## Mode Home

The first screen inside a mode.

Examples:

- SHINE Home
- HEAL Home
- DR Home
- Summary Home

## Topic Grid

The group of Topic Cards shown on a Mode Home.

## Topic Card

A card that opens a Topic Page.

## Back Action

Returns the user to the previous logical page without changing the active mode incorrectly.

## Active Mode

The mode currently selected in the bottom navigation.

## Route

The internal destination used to open a mode or topic.

Examples:

- SHINE Home route
- Sleep route
- HEAL Diet route
- DR Insomnia route
- Summary route

---

# 3. Top and Page Layout Terms

## Hero

The large colored card at the top of a mode.

- SHINE Hero — red
- HEAL Hero — yellow
- DR Hero — blue
- Summary Hero — dark neutral

The Hero contains:

- mode name
- one or two short explanatory lines
- no duplicate mode buttons

## Topic Header

The title area at the top of a Topic Page.

## Content Card

A major white section inside a Topic Page.

## Section Heading

The title inside a Content Card.

## Supporting Text

Short explanatory text under a heading.

## Content Block

A smaller structured unit within a Content Card.

## Bordered Sentence Block

One icon and one meaningful sentence inside a bordered block.

## Inline Link

A clickable word or phrase inside a sentence.

## Inline SHINE Link

A SHINE word that is:

- bold
- red
- underlined
- clickable

## Pill

A small rounded label or action.

Use sparingly.

## Badge

A small status indicator.

Examples:

- Safety badge
- Review badge
- Emergency badge
- Locked badge

## CTA

The primary action on a page.

Examples:

- Add to Summary
- Save Question
- Discuss With Doctor
- Print Summary

---

# 4. SHINE Page Structure

Every SHINE topic follows a common structure.

## Why Card

Explains:

- why the topic matters
- what it does in the body
- why the user should care
- practical context

## Helps SHINE Card

Shows how the topic supports other SHINE areas.

Example:

**How Sleep helps SHINE**

Uses:

- icon
- bordered sentence block
- inline SHINE link
- specific explanation

## Hurts SHINE Card

Shows how weakness in the topic may negatively affect other SHINE areas.

Example:

**How poor Sleep hurts SHINE**

The Helps SHINE and Hurts SHINE cards are equivalent sections and should normally share the same visual pattern.

## HEAL Habits Card

The yellow bridge from SHINE to HEAL.

Example:

**Good habits that can improve Sleep**

## DR Conditions Card

The section showing common conditions that may affect the SHINE topic.

Example:

**Common conditions that can disrupt Sleep**

## SHINE Connection

A meaningful relationship between SHINE topics.

Examples:

- Sleep → Happiness
- Sleep → Nutrition
- Nutrition → Immunity
- Exercise → Happiness

## Positive SHINE Relationship

A relationship describing how one SHINE topic supports another.

## Negative SHINE Relationship

A relationship describing how weakness in one SHINE topic may negatively affect another.

---

# 5. HEAL Content Terms

## Diet

Condition-specific or goal-specific food guidance.

Examples:

- Diabetes Diet
- Hypertension Diet
- Iron-Rich Diet
- Constipation Diet
- Cholesterol Diet

## Diet Plan

A structured set of food recommendations for a condition, goal, or period.

A Diet Plan may include:

- purpose
- foods to emphasize
- foods to limit
- meal examples
- timing guidance
- cautions
- related conditions
- saved Diet Items

## Diet Item

A single food, meal, ingredient, or practical food action inside a Diet Plan.

Examples:

- oats
- lentils
- leafy greens
- reduce salt
- add fiber
- drink water with meals

## Food Group

A category of foods.

Examples:

- vegetables
- fruits
- whole grains
- proteins
- dairy
- fats

## Meal Example

A sample breakfast, lunch, dinner, or snack.

## Food Swap

A practical replacement.

Example:

- replace fried food with grilled food

## Portion Guidance

General educational information about serving size or meal balance.

## Food Caution

A warning about a food or pattern that may not be suitable in certain conditions.

## Diet Goal

The main intended outcome of a Diet Plan.

Examples:

- improve iron intake
- reduce sodium
- increase fiber
- support glucose control

## Lifestyle

Non-medication health habits.

Examples:

- sleep schedule
- stress reduction
- hydration
- physical activity
- smoking cessation
- sunlight exposure

## Lifestyle Plan

A structured set of habits for a goal or condition.

## Lifestyle Item

One practical habit within a Lifestyle Plan.

Examples:

- walk after meals
- keep a regular bedtime
- drink water regularly
- practice slow breathing

## Normal Range

An educational reference range for a measurement.

Examples:

- blood pressure
- fasting glucose
- HbA1c
- LDL cholesterol

## Target Range

A goal range that may depend on individual clinical context.

## Measurement

A value recorded or discussed.

Examples:

- BP 128/78
- fasting glucose 110 mg/dL
- HbA1c 6.4%

## Unit

The measurement unit.

Examples:

- mmHg
- mg/dL
- mmol/L
- percent

## Range Context

The explanation that a range may vary by age, pregnancy, disease, or clinician plan.

---

# 6. Exercise and Physical Activity Terms

## Exercise

Planned physical activity intended to improve health or fitness.

## Physical Activity

Any body movement that uses energy.

## Exercise Plan

A structured collection of exercises or activity goals.

## Exercise Item

One activity inside an Exercise Plan.

Examples:

- walking
- stretching
- squats
- cycling
- resistance-band exercise

## Exercise Type

A category of movement.

Examples:

- aerobic
- strength
- flexibility
- balance
- mobility

## Exercise Session

One planned period of activity.

## Duration

How long an activity lasts.

## Frequency

How often an activity is done.

## Intensity

How hard the activity feels.

Examples:

- light
- moderate
- vigorous

## Progression

A gradual increase in duration, frequency, or intensity.

## Exercise Caution

A warning that an activity may need modification or clinician advice.

## Exercise Contraindication

A situation where a specific exercise should be avoided or medically reviewed.

## Movement Break

A short period of movement that interrupts prolonged sitting.

## Recovery

Rest and support after exercise.

---

# 7. Supplement Terms

## Supplement

A non-prescription product used to add nutrients or other substances.

Examples:

- iron
- vitamin B12
- vitamin D
- calcium

## Supplement Page

A Topic Page dedicated to one supplement.

## Supplement Form

The physical form.

Examples:

- tablet
- capsule
- liquid
- injection

## Supplement Route

How it is taken.

Examples:

- oral
- injection
- topical

## Supplement Schedule

When and how often it is taken.

## Supplement Dose

The amount taken at one time.

## Supplement Dosing

The full set of dose-related instructions.

## Supplement Benefit

The intended educational benefit.

## Supplement Side Effect

An unwanted effect associated with a supplement.

## Supplement Interaction

A possible interaction with medication, food, or another supplement.

## Supplement Contraindication

A situation where the supplement may be unsafe.

## Supplement Caution

A reason to seek clinician or pharmacist advice before use.

## Supplement Monitoring

Tests or symptoms that may need follow-up.

Examples:

- iron studies
- vitamin D level
- B12 level
- constipation monitoring

## Oral vs Injection Comparison

A structured comparison between oral and injectable forms.

## Expected Response

What the user may notice over time, without guaranteeing an outcome.

## Clinical Review Required

The supplement information cannot be presented as a personalized instruction without clinician review.

---

# 8. Medication Terms

## Medication

A drug used to prevent, manage, or treat a condition.

## Medication Page

A Topic Page dedicated to one medication or medication class.

## Generic Name

The standard drug name.

Example:

- metformin

## Brand Name

A commercial product name.

## Local Brand Name

A brand available in a specific country or market.

## Medication Class

A group of medications with a similar purpose or mechanism.

Examples:

- statin
- ACE inhibitor
- insulin
- proton-pump inhibitor

## Indication

The reason a medication is used.

## Medication Form

The physical form.

Examples:

- tablet
- capsule
- syrup
- inhaler
- injection

## Route

How the medication enters the body.

Examples:

- oral
- inhaled
- injected
- topical

## Dose

The amount taken at one time.

## Dosing

The complete instructions involving:

- amount
- unit
- route
- frequency
- timing
- duration
- population restrictions

## Dosing Status

The safety state of dosing content.

Allowed states:

- locked
- draft
- approved

## Frequency

How often a medication is taken.

Examples:

- once daily
- twice daily
- every 8 hours

## Timing

When it is taken.

Examples:

- with food
- before food
- at bedtime

## Duration

How long treatment is used.

## Missed Dose Guidance

General educational guidance about what to do when a dose is missed.

This must be safety-reviewed.

## Medication Side Effect

An unwanted effect associated with a medication.

## Common Side Effect

A more frequently reported side effect.

## Serious Side Effect

A potentially dangerous effect requiring urgent medical attention.

## Contraindication

A situation where a medication should not be used.

## Precaution

A situation requiring extra care or monitoring.

## Drug Interaction

A medication-to-medication interaction.

## Food Interaction

A medication-to-food interaction.

## Supplement Interaction

A medication-to-supplement interaction.

## Pregnancy Caution

A warning related to pregnancy or breastfeeding.

## Child Caution

A warning related to pediatric use.

## Kidney Caution

A warning related to reduced kidney function.

## Liver Caution

A warning related to liver disease.

## Monitoring Requirement

A test or clinical check that may be needed.

Examples:

- kidney function
- liver enzymes
- blood pressure
- blood glucose

## Medication Warning

A prominent safety message.

## Discuss With Clinician

A CTA used when information should not be acted on independently.

---

# 9. DR Terms

## Symptom

Something a person feels or notices.

Examples:

- fatigue
- headache
- cough
- dizziness

## Symptom Page

A page explaining one symptom.

## Symptom Pattern

How a symptom behaves.

Examples:

- sudden
- persistent
- recurrent
- after meals
- at night

## Symptom Severity

How intense or disruptive it is.

## Symptom Duration

How long it has been present.

## Possible Cause

A condition or factor that may explain a symptom.

## Red Flag

A sign that may require urgent assessment.

## Acute Condition

A condition that begins suddenly or lasts a relatively short time.

## Chronic Condition

A long-term condition requiring ongoing care or monitoring.

## Condition Page

A page explaining one condition.

## Expected Course

What commonly happens over time.

## Complication

A problem that may develop because of a condition.

## Home Care

General supportive steps that may help.

## When to See a Doctor

Guidance on seeking non-emergency medical care.

## ER / Emergency

Urgent guidance for potentially dangerous situations.

## Emergency Banner

The highest-priority warning shown on emergency content.

## Emergency Action

A clear immediate action.

Examples:

- call local emergency services
- seek urgent care
- do not drive yourself

## Doctor Question

A question saved for discussion with a clinician.

## Doctor Summary

The printable, user-curated summary.

---

# 10. Relationship Terms

## Relationship

A typed connection between two topics.

## Relationship Type

The meaning of the connection.

Approved relationship types may include:

- supports
- worsens
- improves
- possible_cause
- symptom_of
- may_cause
- treated_by
- side_effect
- contraindicated_with
- interacts_with
- needs_monitoring
- emergency_if
- related_shine
- heal_bridge
- dr_bridge
- acute_can_become_chronic
- chronic_can_cause_symptom

## Source Node

The topic where a relationship begins.

## Target Node

The topic where the relationship points.

## One-Hop Link

A direct relationship from the current topic to one other topic.

The visible UI should normally use one-hop links only.

## Relationship Block

A visible sentence or card generated from a relationship.

## Curated Relationship

A relationship selected because it is useful and understandable to the user.

## Hidden Graph

The internal relationship system.

It is never shown as a visual node graph.

---

# 11. Summary and Saved Data Terms

## Saved Item

Any topic or action added to Summary.

## Saved Lifestyle Item

A saved Lifestyle Item.

## Saved Diet Item

A saved Diet Item.

## Saved Supplement

A saved Supplement.

## Saved Medication

A saved Medication.

## Saved Symptom

A saved Symptom.

## Saved Condition

A saved Acute or Chronic Condition.

## Saved Question

A Doctor Question stored in Summary.

## Note

Free text attached to a Saved Item.

## Summary Section

A category in Summary.

Recommended sections:

- Lifestyle
- Diet
- Supplements
- Medications
- Symptoms
- Acute Conditions
- Chronic Conditions
- Questions for Doctor

## Print Summary

A printable output.

## JSON Backup

A downloadable backup of local data.

## Clear Summary

Deletes saved local data after confirmation.

## Local Profile

The complete localStorage object.

## Profile Version

The schema version of the Local Profile.

## Migration

A controlled update from an older Profile Version to a newer one.

---

# 12. Safety Terms

## Safety Level

The level of caution needed.

Suggested values:

- green
- yellow
- red
- locked

## Review Level

The level of editorial or clinical approval.

Suggested values:

- general
- content_review
- clinical_review_required
- approved

## Fail-Closed

If data is missing, invalid, or uncertain, sensitive clinical content stays hidden.

## Locked Content

Content not shown until it has explicit approval.

## Clinical Gate

The rule controlling whether sensitive content can display.

## Dosing Gate

The specific Clinical Gate for medication or supplement dosing.

## Emergency Gate

The safety control for emergency instructions.

## Safety Notice

A short user-facing warning.

## Educational Disclaimer

Explains that the app teaches and does not diagnose or prescribe.

## Patient-Curated

Information selected by the user, not entered or verified by a clinician.

## PHI Warning

A warning not to enter private identifying health information.

## PII Warning

A warning not to enter names, phone numbers, IDs, or email addresses.

---

# 13. Content Quality Terms

## Researched Content

Content based on reliable medical or public-health sources.

## Generic Content

Vague filler that could apply to almost anything.

Avoid it.

## Patient-Friendly

Clear enough for a non-specialist without losing accuracy.

## Clinical Accuracy

Medical correctness supported by appropriate sources and review.

## Actionable Teaching

Information that explains what the user can understand, notice, or discuss next.

## Purposeful Link

A link that explains why the destination matters.

## Content Density

How much information appears on one screen.

## Scannability

How easily the user can find key points.

## Content Hierarchy

The order of importance within a page.

## Plain Language

Simple wording without unnecessary medical jargon.

## Medical Term

A technical term that may need explanation.

## Definition Line

A short explanation of a Medical Term.

## Source Note

A brief note identifying the source basis for researched content.

---

# 14. Design Terms

## Mode Color

- SHINE — red / maroon
- HEAL — yellow / gold
- DR — blue
- Summary — dark neutral

## Filled Hero

A Hero using the full mode color.

## White Content Card

A white card with clear border and restrained shadow.

## Accent Border

A border using the mode color.

## Icon Block

A visual block beginning with an icon.

## Empty State

The screen shown when a Summary Section has no saved items.

## Compact Layout

A layout with less vertical space but still readable.

## Spacious Layout

A layout with more breathing room.

## Mobile-First

Designed first for a phone-sized screen.

## Responsive

Adapts to different screen sizes.

## Sticky Bottom Bar

The Bottom Navigation remains visible during scrolling.

## Bottom Safe Area

Extra page spacing so the Sticky Bottom Bar does not cover content.

## Theme Consistency

Equivalent elements use the correct mode color and style.

---

# 15. Change-Control Terms

## Baseline

The stable version used as the reference.

## Stable Version

A version confirmed to work and look correct.

## Experimental Version

A version allowed to test larger ideas.

## Controlled Change

Change the requested feature and preserve unrelated working areas.

## Pattern Change

Apply a reusable change to all equivalent sections.

## One-Off Change

Apply a change only to one exact place.

Use only when explicitly requested.

## Equivalent Sections

Sections with the same role.

Examples:

- Helps SHINE and Hurts SHINE
- all Medication Pages
- all Supplement Pages
- all Diet Plans
- all Exercise Plans
- all four mode Heroes
- all four bottom-navigation buttons

## Apply the Pattern

Use the same change across equivalent sections.

## Preserve

Do not alter the named area.

## No Redesign

Do not change unrelated layout, color, or structure.

## Content-Only Change

Change content without changing UI structure.

## UI-Only Change

Change visual styling without changing content structure.

## Structure Change

Change order, grouping, or number of sections.

## Data Change

Change topic data or relationships without changing UI.

## Bug Fix

Repair behavior while preserving intended design.

## Clean Pass

Remove:

- redundancy
- repeated headings
- unnecessary cards
- inconsistent spacing
- duplicate buttons
- unclear labels
- generic text
- broken links

A Clean Pass is not a redesign.

## Regression

Something that worked before but breaks after a new change.

## Regression Check

Test all previously working functions after a change.

---

# 16. Coding and Infrastructure Terms

## App Shell

The permanent page structure containing:

- header area
- page mount area
- bottom navigation

## Renderer

A function that turns data into visible UI.

Examples:

- renderShineTopic()
- renderMedicationPage()
- renderDietPlan()
- renderSummary()

## Component

A reusable UI element.

Examples:

- Hero
- Topic Card
- Relationship Block
- Safety Badge
- Add to Summary button

## Data Model

The agreed structure used to store topic information.

## Entity

A structured data object.

Examples:

- Medication entity
- Supplement entity
- Diet Plan entity
- Exercise Item entity
- Symptom entity

## Entity Type

The category of an Entity.

## Schema

The required fields and allowed values for an Entity.

## Schema Version

The version number of the Schema.

## Validation

Checking that data follows the Schema.

## Data File

A file containing content data.

## Relationship File

The file containing graph relationships.

## Configuration

Settings controlling app behavior and mode labels.

## Router

The code that opens the correct page.

## State

The current mode, route, and saved-data condition.

## localStorage

The browser storage used for Summary data.

## Profile Manager

The code that loads, saves, clears, and migrates the Local Profile.

## Safety Utility

Reusable code for safety gates and badges.

## Search Index

A prepared list used to search topics efficiently.

## Search Result

One matching topic shown in HEAL or DR search.

## Print Template

A dedicated layout for printing.

## Export Function

The code that creates a JSON Backup.

## Import Function

The code that restores a validated JSON Backup.

## Standalone Build

One HTML file containing the whole app.

Only create when explicitly requested.

## Standard Build

The normal multi-file app package.

## ZIP Build

The packaged release.

## Preview Build

A local version opened for testing.

## Deployment Build

The version prepared for GitHub Pages.

---

# 17. File and Folder Terms

## Root Folder

`C:\Users\abdim\OneDrive\Documents\Test`

## Versions Folder

`C:\Users\abdim\OneDrive\Documents\Test\Versions`

## Core Specification

`PATIENT_CARE_CORE.md`

## Shared Language

`PATIENT_CARE_SHARED_LANGUAGE.md`

## Version ZIP

A numbered file such as:

`patient-care-v020.zip`

## Preview BAT

The script used to open a local preview.

## Deploy BAT

The script used to publish a build.

## Source of Truth

The combination of:

1. Core Specification
2. Shared Language
3. latest Stable Version
4. current explicit user instruction

---

# 18. Testing Terms

## Navigation Test

Verify all four modes open correctly.

## Topic Test

Verify every Topic Card opens the correct Topic Page.

## Inline Link Test

Verify Inline SHINE Links open the correct SHINE topic.

## HEAL Bridge Test

Verify yellow bridge links open HEAL content.

## DR Bridge Test

Verify condition links open DR content.

## Summary Test

Verify add, remove, note, print, export, and clear.

## Safety Test

Verify locked content remains hidden.

## Dosing Test

Verify unapproved dosing never displays.

## Mobile Test

Verify layout on narrow screens.

## Desktop Test

Verify layout on wider screens.

## Visual Test

Verify spacing, colors, borders, and hierarchy.

## Content Check

Verify:

- factual accuracy
- patient-friendly wording
- no generic filler
- no repeated sentence patterns
- correct mode placement

## Link Integrity Check

Verify every relationship target exists.

## JavaScript Syntax Check

Verify the app has no syntax errors.

## Release Checklist

The final collection of tests required before delivery.

---

# 19. Short Commands We Can Use

## Product and Layout

- **Fix the Hero**
- **Fix the Topic Grid**
- **Fix Card 1**
- **Fix Card 2**
- **Fix Card 3**
- **Yellow bridge**
- **Blue conditions**
- **Make it inline**
- **Make it a block**
- **Clean pass**
- **No redesign**
- **Back to baseline**

## Content

- **Content only**
- **Make it researched**
- **Remove generic text**
- **Add more detail**
- **Make it patient-friendly**
- **Add source note**
- **Shorten without losing meaning**

## Medication and Supplement

- **Add Medication Page**
- **Add Supplement Page**
- **Add dosing gate**
- **Lock dosing**
- **Add side effects**
- **Add contraindications**
- **Add interactions**
- **Add monitoring**
- **Add local brands**
- **Compare oral vs injection**

## Diet and Lifestyle

- **Add Diet Plan**
- **Add Diet Item**
- **Add Food Swap**
- **Add Meal Example**
- **Add Lifestyle Plan**
- **Add Lifestyle Item**
- **Add Normal Range**

## Exercise

- **Add Exercise Plan**
- **Add Exercise Item**
- **Add frequency**
- **Add duration**
- **Add intensity**
- **Add caution**

## DR

- **Add Symptom Page**
- **Add Acute Condition**
- **Add Chronic Condition**
- **Add red flags**
- **Add ER guidance**
- **Add doctor questions**

## Change Control

- **Apply the pattern**
- **One place only**
- **Preserve the rest**
- **UI only**
- **Structure only**
- **Data only**
- **Regression check**
- **Full release check**

---

# 20. Final Interpretation Rules

When an instruction is incomplete or abbreviated:

1. identify the Entity or UI area being discussed
2. apply the terminology in this document
3. check the Core Specification
4. start from the latest Stable Version
5. decide whether the request is a Pattern Change or One-Off Change
6. preserve unrelated working areas
7. test equivalent sections
8. run a Regression Check before release

When a reusable improvement is requested, apply it consistently to equivalent:

- SHINE topics
- Diet Plans
- Diet Items
- Lifestyle Plans
- Exercise Plans
- Exercise Items
- Supplement Pages
- Medication Pages
- Symptom Pages
- Acute Condition Pages
- Chronic Condition Pages
- Summary Sections
- safety gates
- navigation controls
- print/export layouts

Do not silently invent new product structure.

Do not apply a narrow request only once when the same pattern clearly belongs elsewhere.

Do not use a Pattern Change as an excuse to redesign unrelated parts.


# 21. Editable Content and Admin Terms

## Content Store

The data-only file containing all editable patient-facing information.

Current file:

`data/content.js`

## Hard-Coded Content

Patient-facing information written directly inside `app.js` or `index.html`.

Hard-coded content should be avoided.

## Content Record

One editable entity inside the Content Store.

Examples:

- SHINE Topic Record
- Diet Plan Record
- Diet Item Record
- Lifestyle Plan Record
- Lifestyle Item Record
- Exercise Plan Record
- Exercise Item Record
- Supplement Record
- Medication Record
- Symptom Record
- Acute Condition Record
- Chronic Condition Record
- Normal Range Record
- Emergency Record
- Relationship Record

## Admin Mode

A future editing interface that changes Content Records without requiring the user to edit application code.

## Content Export

A local file produced by Admin Mode containing updated content.

## Content Import

Loading and validating an exported content file.

## Publish Content

Replacing the deployed Content Store with an approved Content Export.

## Local-Only

The app can open and function without internet access or remote assets.

## Local Asset

A font, image, script, stylesheet, or data file included inside the app package.

## Remote Dependency

A file or service loaded from the internet.

Core operation should not require Remote Dependencies.

## File Overwrite Permission

Explicit browser permission required before an admin editor can directly replace a local file. This is not supported consistently on all phones.

## Admin-Ready

Content, schema, validation, and export rules are separated cleanly enough that Admin Mode can be added later without rewriting the app.

## Pattern Rule for Editable Content

When a new editable field is added to one entity type, inspect every equivalent entity type and renderer.

Examples:

- A new dosing status field applies to medications and supplements.
- A new Diet Item structure applies to every Diet Plan.
- A new Exercise Item caution field applies to all Exercise Plans.
- A new safety badge field must be supported by the Content Store, renderer, Summary, print view, and Admin Mode.


# v021 Added Terms

## Diet Builder
The HEAL interface that filters the local Diet Item library.

## Diet Focus
A selectable filter describing the user's current food goal.

Examples: Blood sugar, Blood pressure, Heart health, Iron support, High fiber.

## Meal Slot
The time or role where a Diet Item may fit: Breakfast, Main meal, or Snack.

## Match All
Show only Diet Items matching every selected Diet Focus.

## Match Any
Show Diet Items matching at least one selected Diet Focus.

## Your Plan
The fourth app mode, formerly Summary.

## Plan Core
A major structured area inside Your Plan.

- Daily Foundation
- Food & Diet
- Medications & Supplements
- Doctor & Health

## Plan Note
A local note attached to one Plan Core.

## Food Focus Summary
A compact view of the most common Diet Focus tags among selected Diet Items.


## Action Path Pattern

**Action Path** means the reusable next-step task area available across SHINE, HEAL, and DR.

**Action Group** means one category inside an Action Path:
- Food Ideas
- Helpful Tasks
- Supplements to Discuss
- Doctor Questions
- Labs or Tests to Discuss

**Task Card** means one saveable task inside an Action Group.

**Pattern command: “Apply Action Paths everywhere”**
Review every applicable entity type and add only the groups that make sense. Do not force food, supplements, or tests onto topics where they are irrelevant.


## Your Plan Overview Terms

**Plan Overview** — the first Your Plan screen summarizing everything saved.

**Overall Summary** — the total count and high-level breakdown across all Plan Cores.

**Core Overview Card** — a compact card showing one core's title, description, total, and category breakdown.

**Core Detail View** — the full detailed content for one Plan Core.

**All Core Details** — the detailed view containing every Plan Core.

**Open Core** — opens one Core Detail View.

**View All Core Details** — opens the full detailed plan.

**Back to Plan Overview** — returns to the overall summary.

Pattern rule:
Every Plan Core must have an overview representation and a detailed representation. The overview summarizes; the detail view contains editable notes, saved rows, and actions.


## Your SHINE Path Terms

**Your SHINE Path** — the merged infographic showing how all saved Plan Cores work together.

**Path Stage** — one of the four connected parts of Your SHINE Path.

**IGNITE** — the Daily Foundation stage.

**NOURISH** — the Food & Diet stage.

**SUPPORT** — the Medications & Supplements stage.

**NAVIGATE** — the Doctor & Health stage.

**Path Sentence** — the generated one-sentence explanation of the user's current combined plan.

**Path Item** — one saved item shown inside a Path Stage.

**Open Your SHINE Path** — opens the combined infographic.

**Print Your SHINE Path** — prints the combined infographic.

Controlled-change rule:
Your SHINE Path replaces only the previous “View All Core Details” concept. Plan Overview and individual Core Detail Views remain.

## Guided builder language

Use:

- Build your next steps
- Health considerations
- Sleep and work pattern
- What happens with your sleep?
- Daily-life factors
- Your matched HEAL actions
- Add to plan
- Or choose tasks manually

Safety line:

> This wizard organizes educational options. It does not diagnose a sleep disorder or replace individualized medical advice.

Do not use:

- Your diagnosis
- Your prescribed routine
- The treatment you need
- Guaranteed sleep improvement

