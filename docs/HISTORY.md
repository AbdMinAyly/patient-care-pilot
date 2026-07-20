<!-- IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE. -->

# Patient Care History

This is the single repository history file. It consolidates prior release notes, research-batch records, source-register notes, and quality-review summaries. Detailed clinical source identifiers and entity-level metadata remain authoritative in `data/content.js` and `data/schema.json`.


## Current release

### v047 — Find and Guide

- Added `#/find`, a deterministic offline search across visible researched SHINE, HEAL, DR, and Diet Builder food content.
- Added practical aliases with fail-closed validation and stable local scoring.
- Kept SHINE Focus as a secondary tie-breaker only; exact matches and urgent-help visibility remain primary.
- Capped Sleep Wizard results at three primary actions, with additional matches under More matched actions.
- Added `#/guide/iron`, a non-diagnostic navigation guide that reuses existing pages and Action Path tasks.
- Added no clinical claims, editorial sources, dosing, QR codes, schedule builder, backend, authentication, or prescribing logic.
- Preserved localStorage key `pc_pilot_v022_profile`, profile version 22, and existing saved-data compatibility.

## Previous current release

### v046 — SHINE Focus Foundation

- SHINE topics became selectable browsing focuses rather than saved Plan items.
- One primary focus and one optional secondary focus are supported.
- A third focus requires explicit replacement.
- Typed SHINE-to-HEAL and SHINE-to-DR relationships provide concise relevance badges and borders.
- Focus context appears across HEAL, DR, Diet Builder, Your Plan, and Your SHINE Path without hiding the complete library.
- Legacy `shine` selections remain preserved; new focus choices use `shineFocus`.
- SHINE Focus does not increase Plan totals or appear as a saved Plan row.
- Clear Plan preserves SHINE Focus and Sleep Wizard selections.
- v045 progressive disclosure, safety behavior, dosing locks, and Plan routing remain intact.

Verification recorded for v046 included JavaScript syntax, content evaluation, JSON parsing, whitespace checks, saved-data compatibility, clinical-content preservation, responsive layouts, print behavior, no console errors, and no external requests. Automated Chromium verification recorded 122 passing assertions and no failures.

Deferred after v046: Unified Find, Iron Learning Guide, QR codes, patient schedules, backend services, authentication, and prescribing logic.

## Release history

### v045 — Clarity Pass

- Integrated progressive disclosure into the main application.
- Added visible At a glance and Important sections using existing teaching.
- Preserved urgent and emergency wording and kept emergency teaching expanded.
- Converted Action Path groups to compact disclosure controls while preserving task IDs and saved-task behavior.
- Excluded placeholders from ordinary lists, search, and relationships.
- Kept Exercise visible as Coming soon and unavailable.
- Added detail-page back links and route-heading focus.
- Removed the duplicate generic doctor-question control.
- Corrected Plan Details and SHINE Path routing.
- Corrected task-core counting and rendering.
- Added a three-item Next Actions preview.
- Limited JSON backup to Plan Overview.
- Added print expansion for complete teaching and Action Path content while preserving safety and dosing locks.

Verification recorded 157 passing browser and print assertions with no failures. All researched patient-facing content, editorial source IDs, research batches, content statuses, clinical-review metadata, related IDs, dosing locks, Sleep Wizard behavior, Diet Builder, SHINE Path, bottom navigation, localStorage key, profile version, and offline operation were preserved.

### Earlier controlled development

The application evolved through earlier pilot versions culminating in v043 and v044 before the v045 clarity work. Git commit history remains the detailed chronological record for those earlier implementation changes.

## Research register

The following completed research batches were previously stored as separate documents and are now indexed here:

1. **Batch 01 — Energy and Iron**: fatigue, anemia, iron deficiency, iron supplementation, and related patient education.
2. **Batch 02 — Sleep and Daytime Function**: insomnia, sleep apnea, restless legs, sleep hygiene, and daytime effects.
3. **Batch 03 — Diabetes and Glucose**: glucose symptoms, HbA1c, diabetes education, monitoring, and related support.
4. **Batch 04 — Blood Pressure**: hypertension, blood-pressure ranges, home monitoring, and cardiovascular context.
5. **Batch 05 — Cholesterol and Heart**: cholesterol, heart-health education, cardiovascular conditions, and related support.
6. **Batch 06 — Digestive Support**: constipation, gastroenteritis, hydration support, and related digestive education.
7. **Batch 07 — Mood and Stress**: mood, anxiety, stress, emotional health, and safe support language.
8. **Batch 08 — Supplement Library**: supplement education with dosing locked and hidden pending clinical review.
9. **Batch 09 — Emergency Safety**: urgent-help content, red flags, emergency wording, and escalation visibility.
10. **Batch 10 — Immunity and Infection**: infection, immunity, acute illness support, and safety guidance.
11. **Batch 11 — Controlled expansion**: additional researched library coverage recorded in release metadata and entity-level research fields.
12. **Batch 12 — Nutrition and Healthy Eating**: Diet Builder foods, nutrition patterns, and healthy-eating support.
13. **Batch 13 — Clinical Consistency Review**: cross-library consistency, wording alignment, safety review, and metadata checks.

## Source and metadata policy

The source register previously maintained under `docs/research/SOURCE_INDEX.md` has been consolidated into this policy section.

- Entity-level `editorialSourceIds` in `data/content.js` are the authoritative source assignments.
- `researchBatch` and `additionalResearchBatches` are the authoritative batch links.
- `contentStatus` determines whether an entity is researched or placeholder.
- `clinicalReview` remains required for clinical claims and controlled fields.
- `lockedDosing` remains required for medication and supplement entries and must keep dosing hidden.
- `relatedIds` and typed SHINE relationship fields remain the authoritative relationship graph.
- Source registrations and completed research metadata must not be changed during ordinary UI or navigation work.

## Quality and clinical consistency

The former v042 clinical-consistency report and Batch 13 review are consolidated here.

Quality controls include:

- consistent patient-facing wording across related pages
- visible urgent and emergency teaching
- no exposed medication or supplement dosing
- placeholders excluded from normal discovery
- stable entity and task identifiers
- valid relationship targets
- clinical-review queues retained
- editorial-source IDs retained
- no remote dependencies or patient-facing reference links
- responsive and print behavior checked for safety visibility

Clinical consistency review does not constitute clinical approval. Items marked `clinical-review-required` remain in that state until separately approved.

## Documentation consolidation — July 19, 2026

The repository documentation was reduced to one rules/foundation file and one history file.

Consolidated into `PATIENT_CARE_RULES.md`:

- `PATIENT_CARE_EDIT_RULES.md`
- `PATIENT_CARE_CORE.md`
- `PATIENT_CARE_SHARED_LANGUAGE.md`
- `CONTENT_EDITING_GUIDE.txt`
- duplicate copies under `docs/`

Consolidated into this file:

- release notes under `docs/product/`
- research batches and source index under `docs/research/`
- quality reports under `docs/quality/`

The obsolete legacy `data.js` file was identified for removal because the live application uses `data/content.js` and `window.PATIENT_CARE_CONTENT`.

## Deferred roadmap

The following remain deferred unless explicitly requested:

- Unified Find and deterministic aliases
- Iron Learning Guide
- QR codes
- patient schedule builders
- backend services
- authentication and patient accounts
- prescribing logic
- treatment-selection logic
- standalone bundled HTML

### v047 polish pass

- Preserved Find queries, result expansion, and return position while opening topics.
- Added origin-aware Back behavior for Find and the Iron Learning Guide.
- Simplified result density, added result counts, clear search, and neutral match explanations.
- Replaced repeated Iron Guide links with one contextual guide card.
- Made food-result destinations open and highlight the selected Diet Builder item.
- Clarified Read, Food idea, and Plan action recommendation types.
- Added an Iron Guide empty state and persistent selected-intent context.
- Restored Sleep Wizard category context and moved the explicit three-action add control before additional matches.
- Refined neutral safety notices, narrow-screen actions, badges, and spacing.

### Navigation UI cleanup

- Removed the unintended visible outline around programmatically focused page headings while retaining route-change focus for accessibility.
- Reused and restyled the existing `detail-back` pattern instead of adding another navigation component.
- HEAL detail pages now return directly to the main HEAL page.
- No new permanent files, routes, dependencies, clinical content, or saved-data fields were added.


### Hierarchical back navigation

- Back controls now move up exactly one menu level.
- HEAL and DR detail pages return to their section, not directly to the home screen.
- Diet guidance returns to Diet; Diet returns to HEAL.
- All back controls use one shared icon-and-label component with no raw arrow text.


### Guided homes and Shinopedia

- SHINE now begins with a three-question priority wizard that suggests one primary and one secondary visible researched focus.
- HEAL now presents Diet, Routine, and deferred Exercise builders instead of the full section library.
- DR now begins with an optional medical-profile selector and reveals only relevant support builders.
- Shinopedia is the dedicated full-library tab for SHINE, HEAL, DR, urgent, medication, supplement, tracking, task, and question destinations.
- Existing content, IDs, routes, profile version 22, storage key, dosing locks, placeholder exclusion, and offline behavior remain unchanged.
- The standalone Sleep Wizard is no longer shown; sleep support is reached through SHINE priority and the HEAL Routine builder.

- Verification fixes ensure Medical Profile saves return to DR, filtered Shinopedia views return one level to Shinopedia, and Shinopedia remains the active navigation context for utility pages.


### Progressive reveal entry flow

- SHINE shows only the priority setup until a primary focus is saved.
- HEAL shows only Start Your Diet until the Diet setup is completed.
- Diet answers are stored once inside the existing guided profile and may create DR suggestions.
- Medical findings are never migrated silently; DR requires explicit confirmation before revealing support cards.
- Confirmed iron deficiency reveals existing Iron Support while dosing and schedule generation remain locked.
- Shinopedia remains the deliberate full-library view.


### SHINE first-entry gate

- SHINE now remains on a single Choose Your Priority action until the new priority wizard is explicitly completed.
- Legacy SHINE focus selections no longer bypass the progressive-reveal entry screen.


### Full local-data reset

- Replaced the limited Clear Plan action with one Clear All Data control in Your Plan.
- The reset removes the entire `pc_pilot_v022_profile` record, including wizard completion, guided profile answers, priorities, Diet setup, DR confirmations, saved topics, tasks, questions, notes, and food selections.
- A destructive confirmation is required before deletion.
- After confirmation, the app returns to the initial SHINE priority screen.


### SHINE guiding-light welcome

- Replaced the first-entry SHINE placeholder with a responsive guiding-light welcome screen.
- The screen displays the SHINE wordmark, “Your guiding light,” the five SHINE meanings, and one priority-wizard button only.
- The design is implemented with accessible HTML and CSS rather than an unresponsive image hotspot.

### GitHub Pages deployment retrigger

- Added a direct user-authored `main` commit after the SHINE welcome implementation so GitHub Pages can detect and publish the newest branch state.
- No application behavior, clinical content, saved data, routes, dependencies, or release metadata changed in this deployment-only commit.


### SHINE focused introduction polish

- Hid the global bottom navigation while the first-entry SHINE welcome is visible.
- Added a Skip for now link that appears after two seconds and opens Shinopedia.
- Added reduced-motion-safe entrance, logo, label, and action animations.
- Replaced decorative acronym symbols with clearer sleep, happiness, immunity, nutrition, and exercise icons.


### DR health-profile onboarding

- Added a focused blue DR welcome and a local profile form for age, gender, selected chronic conditions, height, weight, BMI, and known B12, vitamin D, or iron deficiency.
- BMI is displayed as a calculation only without diagnosis or category interpretation.
- Iron deficiency continues through explicit confirmation; no dosing, treatment selection, or laboratory interpretation was added.
