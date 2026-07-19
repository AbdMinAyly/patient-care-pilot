# Patient Care — Mandatory Edit Rules

> **STOP: IF YOU HAVE NOT ALREADY READ THIS RULE FILE, READ IT IN FULL BEFORE EDITING ANY PROJECT FILE.**

This file is the repository-wide editing contract for Patient Care. It applies to every future edit, regardless of which tool, assistant, developer, or workflow performs the change.

## 1. Mandatory pre-edit procedure

Before changing any file:

1. Read this entire file.
2. Inspect the current `main` branch and confirm the actual current version from `VERSION.txt`, release metadata, and application content.
3. Never choose a release by branch name alone.
4. Identify every file that will change and verify that each change belongs to the requested scope.
5. Preserve a recoverable copy or commit before destructive restructuring.
6. Do not delete branches, commits, releases, backups, or repositories until the latest working implementation has been positively verified.
7. Run the applicable validation and regression checks before declaring the work complete.

## 2. Required notice in edited files

Every edited file that supports comments must contain this notice near the top, using valid syntax for that file type:

`IF YOU HAVE NOT ALREADY READ PATIENT_CARE_EDIT_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.`

Use the appropriate comment form:

- JavaScript: `// ...`
- CSS: `/* ... */`
- HTML: `<!-- ... -->`
- Markdown: `<!-- ... -->`
- Windows batch: `REM ...`
- YAML: `# ...`

Do not insert comments into strict JSON or plain data files when comments would make the file invalid. Files such as `data/schema.json` and `VERSION.txt` remain fully governed by this rules file even though they cannot safely contain the notice.

## 3. Repository workflow

- Treat the repository as one pilot application with `main` as the single live source unless the owner explicitly instructs otherwise at the time of the edit.
- Do not create branches, forks, pull requests, tags, releases, or parallel deployments unless the owner explicitly requests them after reading the current repository state.
- Never merge automatically.
- Never reset `main`, force-push, or delete refs based only on a version-like branch name.
- Verify the actual file contents and commit ancestry before moving or deleting anything.

## 4. Clinical and content preservation

1. Preserve all researched patient-facing content.
2. Do not rewrite, remove, reinterpret, approve, or weaken clinical claims unless explicitly authorized through the clinical-review process.
3. Do not change `editorialSourceIds`, `researchBatch`, `additionalResearchBatches`, `clinicalReview`, `lockedDosing`, `contentStatus`, or `relatedIds`, except for explicitly requested release metadata changes.
4. Keep medication and supplement dosing hidden.
5. Do not expose doses, schedules, infusion rates, treatment durations, monitoring thresholds, or prescribing instructions.
6. Do not turn placeholders into researched content without the required evidence and review state.
7. Preserve warning, urgent-help, and emergency teaching visibility.
8. Do not create diagnostic language, symptom-to-diagnosis claims, laboratory interpretation, or treatment-selection logic.

## 5. Compatibility and architecture

Preserve:

- localStorage key: `pc_pilot_v022_profile`
- profile version: `22`
- existing saved-data compatibility
- offline operation
- dependency-free operation
- existing Plan task IDs and synchronization
- existing SHINE Focus behavior and limits
- existing Sleep Wizard selections and task references
- existing print safety behavior

File ownership rules:

- Patient-facing labels, aliases, guide configuration, and content data belong in `data/content.js`.
- Rendering, routing, validation, scoring, and behavior belong in `app.js`.
- Visual styling belongs in `styles.css`.
- The application shell belongs in `index.html`.
- Schema and release metadata belong in `data/schema.json` and the existing metadata files.
- Do not generate a standalone combined HTML build.

## 6. Offline and dependency restrictions

Do not add:

- remote scripts
- remote APIs
- remote fonts
- remote images
- remote stylesheets
- analytics or tracking services
- backend services
- authentication
- patient accounts
- prescribing logic
- QR codes unless separately authorized
- schedule builders unless separately authorized

All search, ranking, guides, validation, and navigation must run locally and deterministically.

## 7. Find and Guide safety pattern

Find and Guide features must follow these rules:

- Find locates existing visible researched education; it does not diagnose symptoms or select treatment.
- Search ranking must be deterministic and local.
- Exact titles and safe aliases outrank body-text matches.
- Results must be deduplicated by entity ID with stable ordering.
- Placeholders must remain excluded.
- Urgent-help content must never be hidden or demoted by SHINE Focus.
- SHINE Focus may provide only secondary context or a small tie-breaker.
- Guides may organize existing researched pages and existing Action Path tasks only.
- Guides must not create new clinical instructions, interpret tests, choose treatment, or collect identifying information.
- No action is saved without an explicit user click.

## 8. Alias and reference validation

Any search alias or guide reference must fail closed when invalid.

Validate that:

- normalized alias terms are unique
- every alias target exists
- every target is visible and non-placeholder
- broad symptoms are not mapped directly to diagnoses when an appropriate symptom page exists
- symptoms are not mapped directly to medication pages
- laboratory terms are not mapped directly to treatment recommendations
- every guide entity target exists and is non-placeholder
- every guide task reference resolves to a valid item, group, and task ID
- every configured result limit is a positive integer

Use the existing content-error screen for validation failures.

## 9. User-interface constraints

- Keep the existing color system.
- Do not add a permanent fifth bottom-navigation item.
- Keep desktop reading width approximately 760–860 px.
- Keep touch targets at least 44 px.
- Maintain visible keyboard focus.
- Support 320 px width.
- Avoid excessive shadows and large new hero sections.
- Respect `prefers-reduced-motion`.
- Do not rely on color alone to communicate result type, safety, status, or focus relevance.

## 10. Sleep Wizard constraints

- Preserve current wizard logic, selections, task IDs, Plan synchronization, persistence, modal focus, and reopen behavior.
- Presentation may cap primary matched actions, but hidden actions must remain individually available.
- Bulk-add controls may add only the actions visibly presented by that control.
- Do not silently add all matches.

## 11. Iron Learning Guide constraints

The Iron Learning Guide is navigation only.

It must not:

- ask for laboratory values
- interpret ferritin, hemoglobin, transferrin, or related results
- diagnose iron deficiency or anemia
- select oral versus injection or infusion treatment
- show dose, schedule, infusion rate, duration, or monitoring thresholds
- create new medical instructions
- collect identifying information

It may reference only existing researched entities and valid existing Action Path tasks.

## 12. Release and documentation integrity

When changing the release:

- update all required release metadata consistently
- keep `PATIENT_CARE_CORE.md` and `docs/PATIENT_CARE_CORE.md` byte-for-byte identical
- create the required product note
- document preserved behavior, deferrals, failed checks, and unavailable checks honestly
- do not claim a check passed unless it actually ran and passed

## 13. Mandatory verification

At minimum, run when applicable:

```text
node --check app.js
node -e "global.window={};require('./data/content.js');console.log(window.PATIENT_CARE_CONTENT.meta.contentVersion)"
node -e "JSON.parse(require('fs').readFileSync('data/schema.json','utf8'));console.log('schema ok')"
git diff --check
```

Also verify:

- core specification copies are identical
- no external scripts, styles, fonts, images, or network requests were added
- no dosing text was exposed
- no placeholder became researched
- no editorial source registration changed unintentionally
- all requested routes load directly
- keyboard and back navigation work
- mobile layouts work at 320×700, 390×844, and 1024×768
- print behavior remains safe
- there are no console errors or error overlays
- relevant prior-release regression tests still pass

## 14. Destructive-action prohibition

Before deleting or replacing any version, branch, commit, repository, deployment, or backup:

1. Verify the candidate latest version by inspecting its actual files.
2. Confirm it contains the requested functionality.
3. Confirm it has a recoverable commit or backup.
4. Compare it against the current live version.
5. Obtain explicit owner authorization for the destructive action.

A branch name is not proof that its contents match that version.

## 15. Authority and conflicts

- This file is the default global rule set.
- A new explicit owner instruction may change scope or workflow, but clinical safety, data preservation, truthful verification, and destructive-action safeguards remain in force unless the owner clearly and specifically replaces them.
- When instructions conflict, stop destructive actions and preserve data while resolving the conflict.
