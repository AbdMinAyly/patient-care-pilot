# Patient Care — Rules and Foundation

> **STOP: IF YOU HAVE NOT ALREADY READ THIS FILE, READ IT IN FULL BEFORE EDITING ANY PROJECT FILE.**

This is the single repository-wide source of truth for Patient Care. It replaces the previous edit-rules, core, shared-language, and content-editing documents.

## 1. Mandatory pre-edit procedure

Before changing any file:

1. Read this entire file.
2. Inspect `main` and confirm the actual current version from `VERSION.txt`, `data/content.js`, `data/schema.json`, and the application title.
3. Never select or replace a release by branch name alone.
4. Identify the exact files and behavior in scope.
5. Preserve a recoverable commit before destructive restructuring.
6. Do not delete branches, commits, releases, backups, or repositories until the latest working implementation has been positively verified.
7. Run the applicable validation and regression checks before declaring completion.

## 2. Required notice in edited files

Every edited file that safely supports comments must contain this notice near the top using valid syntax:

`IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.`

Use `//` for JavaScript, `/* */` for CSS, `<!-- -->` for HTML and Markdown, `REM` for Windows batch, and `#` for YAML. Do not place comments in strict JSON or plain data files when that would make them invalid. `data/schema.json` and `VERSION.txt` are still governed by this file.

## 3. Product foundation

Patient Care is an offline, dependency-free patient-education and personal-planning application organized around SHINE, HEAL, DR, Diet Builder, and Your Plan.

The product must remain educational. It must not diagnose, interpret laboratory results, prescribe treatment, select medication, expose hidden dosing, or replace clinical assessment.

When a requested change defines a reusable pattern, apply it consistently to logically equivalent areas unless the request explicitly limits the scope.

## 4. File responsibilities

- `index.html`: application shell and local asset loading only.
- `styles.css`: visual styling, responsive behavior, print styling, and focus states.
- `app.js`: rendering, routing, validation, state behavior, and interactions.
- `data/content.js`: patient-facing labels, teaching, aliases, relationships, guide configuration, Action Path content, and release metadata.
- `data/schema.json`: schema and structured release metadata.
- `VERSION.txt`: current release identifier.
- `README.md`: short project entry point only.
- `docs/HISTORY.md`: the single release, research, quality, and change-history record.

For normal content changes, prefer `data/content.js`. Do not move patient-facing labels into rendering code.

## 5. Clinical and content protections

Preserve all researched patient-facing content unless the user explicitly supplies approved replacement wording.

Do not rewrite, remove, reinterpret, or approve clinical claims. Do not change `editorialSourceIds`, `researchBatch`, `additionalResearchBatches`, `clinicalReview`, `lockedDosing`, `contentStatus`, or `relatedIds` except when release metadata explicitly requires it.

Medication and supplement dosing must remain hidden. Dosing locks must remain `clinical-review-required` with display disabled unless separately approved through a clinical-review process.

Urgent and emergency teaching must remain visible and must never be demoted by personalization, search context, or SHINE Focus.

Placeholders must remain excluded from ordinary lists, search, guides, and relationship cards. Exercise remains unavailable until researched content replaces its placeholder state.

## 6. Saved-data compatibility

Preserve:

- localStorage key `pc_pilot_v022_profile`
- profile version `22`
- existing saved-data compatibility
- stable item IDs, task IDs, task keys, and route IDs

Do not create a profile migration unless strictly required and explicitly validated.

## 7. SHINE Focus rules

Preserve the established behavior:

- one primary focus
- one optional secondary focus
- maximum two focuses
- explicit replacement before adding a third
- SHINE Focus is browsing context, not a Plan item
- focus does not affect Plan counts
- Clear Plan preserves SHINE Focus and Sleep Wizard selections
- typed `healLinks`, `drLinks`, and Diet Builder metadata are the only valid relationship sources

Do not infer medical relationships from body text.

## 8. Offline and dependency rules

The application must remain fully offline and dependency-free.

Do not add remote scripts, APIs, fonts, images, stylesheets, analytics, services, or patient-facing external links. Do not add a backend, authentication, patient accounts, prescribing logic, QR codes, or schedule builders unless a later approved scope explicitly changes these rules.

## 9. Safety patterns for search and guides

Search must be deterministic and local. It may help users locate existing education, but it must not diagnose symptoms, rank likely diagnoses, interpret tests, or recommend treatment.

Guides may organize existing researched pages and Action Path tasks. They must not create new medical instructions, display dosing or treatment schedules, interpret laboratory values, or select treatment routes.

SHINE Focus may provide secondary context only. Exact matches, safe aliases, urgent-help visibility, and safety rules always take priority.

## 10. Content editing rules

Keep every published ID stable. Edit text carefully without breaking object structure. Every linked ID must exist in the same content store. Do not add arbitrary JavaScript functions to `data/content.js`.

The content file remains JavaScript rather than JSON so the app can load from `file://` without a local server. A browser cannot silently overwrite local files; exported edits require explicit replacement.

## 11. Accessibility and design

Preserve visible keyboard focus, semantic controls, readable line lengths, minimum 44px touch targets, 320px usability, reduced-motion support, and existing print safety behavior.

Do not add excessive shadows, large decorative hero sections, or permanent navigation items without explicit approval.

## 12. Validation

At minimum, run applicable checks for:

- `node --check app.js`
- content evaluation from `data/content.js`
- JSON parse of `data/schema.json`
- `git diff --check`
- absence of external dependencies and remote requests
- hidden dosing protections
- placeholder exclusion
- stable saved-data keys and task references
- mobile layouts and print behavior when UI changes
- no console errors or content-error overlay

Validation must fail closed using the existing content-error screen when required configuration or references are invalid.

## 13. Repository workflow

This pilot uses one repository and one active branch: `main`. Make requested edits directly to `main` unless the user explicitly requests another workflow. Do not create branches, pull requests, forks, clones, releases, or version repositories without explicit instruction.

Git history remains the recovery mechanism. Do not rewrite or flatten history merely to make the repository look cleaner.
