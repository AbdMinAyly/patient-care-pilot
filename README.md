<!-- IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE. -->

## Instructions for any assistant or developer

Before making any change, read `PATIENT_CARE_RULES.md` in full.

Then inspect the current repository state and complete the task requested in the active prompt. Treat that task as the scope of work, while applying the rules and protections in `PATIENT_CARE_RULES.md` globally.

For every task:

1. Work directly on the existing `main` branch unless the user explicitly instructs otherwise.
2. Verify the current implementation before editing. Do not rely on old branch names, release names, chat memory, or assumptions.
3. Change only what the task requires. Do not redesign, reorganize, rename, or delete unrelated files or behavior.
4. Preserve all researched patient-facing content, clinical metadata, safety wording, hidden dosing protections, IDs, saved-data compatibility, and offline operation unless the task explicitly and safely requires a compatible change.
5. Keep responsibilities separated:
   - `index.html` for the application shell
   - `styles.css` for presentation
   - `app.js` for rendering and behavior
   - `data/content.js` for patient-facing content, labels, aliases, and configuration
   - `data/schema.json` for schema and release metadata
6. Do not add external dependencies, remote assets, APIs, authentication, a backend, prescribing logic, diagnostic logic, or patient-identifying data unless explicitly authorized.
7. Add the required rules-file notice to every edited file that safely supports comments.
8. Validate the complete result, including syntax, data integrity, affected routes, responsive behavior, accessibility, print behavior, persistence, and regressions relevant to the task.
9. Report exactly what changed, what was preserved, which checks passed, and any checks that could not be completed.
10. Never claim a task is complete until the edited repository has been verified against both the active prompt and `PATIENT_CARE_RULES.md`.

The active task prompt defines what to build. `PATIENT_CARE_RULES.md` defines how it must be built safely and consistently.

# Patient Care

Patient Care v047 is an offline, dependency-free SHINE + HEAL + DR teaching and planning application with unified Find and a non-diagnostic Iron Learning Guide.

## Run

Use `open_local_preview.cmd`, or serve this folder with any local static HTTP server and open `index.html`.

## Main files

- `index.html` — application shell
- `styles.css` — visual design
- `app.js` — rendering and behavior
- `data/content.js` — patient-facing content and labels
- `data/schema.json` — content schema and release metadata
- `VERSION.txt` — current release
- `PATIENT_CARE_RULES.md` — mandatory rules and product foundation
- `docs/HISTORY.md` — release, research, source, and quality history

## Safety

Patient Care is educational only. It does not diagnose, prescribe, interpret laboratory results, select treatment, or replace clinical assessment. Medication and supplement dosing remains hidden pending clinical review. Do not publish patient-identifying information.
