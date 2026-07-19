# Patient Care v046 — SHINE Focus Foundation

Patient Care is an offline, dependency-free SHINE + HEAL + DR teaching and planning application.

## v046 changes

- SHINE topics are now selectable browsing focuses rather than saved Plan items.
- One primary focus is recommended; one optional secondary focus may be added.
- A third focus requires an explicit replacement choice.
- Direct SHINE-to-HEAL relationships receive a single **Supports [focus]** badge and border.
- Direct SHINE-to-DR relationships receive a single **Can affect [focus]** badge and border.
- Focus context appears across HEAL, DR, Diet Builder, Your Plan, and Your SHINE Path without hiding the complete library.
- Legacy `shine` selections remain preserved for compatibility; new focus choices use `shineFocus`.
- SHINE focus does not increase Plan totals or appear as a saved Plan row.
- Clearing Your Plan preserves SHINE focus and Sleep Wizard selections.
- All v045 progressive-disclosure, safety, dosing-lock, and Plan-routing behavior remains intact.

## Files

- `index.html` — application shell
- `styles.css` — visual design
- `app.js` — rendering and behavior
- `data/content.js` — editable patient-facing content and labels
- `data/schema.json` — content schema and release metadata
- `open_local_preview.cmd` — local preview helper
- `upload_to_github.cmd` — Windows upload helper
- `VERSION.txt` — current release
- `PATIENT_CARE_CORE.md` — source-of-truth product specification
- `PATIENT_CARE_SHARED_LANGUAGE.md` — controlled product language
- `docs/` — mirrored specifications, research registers, quality reports, and product records

No standalone HTML file is included in this release.

## Preview

Run `open_local_preview.cmd`, or serve the folder with a local HTTP server and open `index.html`.

## Safety

Patient Care is educational only. A SHINE focus changes navigation emphasis; it does not diagnose a condition, measure health improvement, prescribe treatment, or replace clinical assessment. Do not publish patient-identifying information.
