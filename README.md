# Patient Care v045 — Clarity Pass

This release reduces default-screen overload while preserving the complete researched content library and all clinical safety controls.

## Main changes

- Ordinary HEAL and DR pages now open with an **At a glance** view.
- Full teaching remains available through **Read full teaching details**.
- Warning-oriented existing teaching is repeated in a visible **Important** notice.
- Action Path groups use compact native disclosure controls.
- Placeholder content is excluded from normal lists and search.
- Exercise remains visible in SHINE as **Coming soon**.
- Detail pages include clear back links.
- The duplicate generic doctor-question button was removed.
- Plan routes and task counts were corrected.
- JSON backup appears once under Plan Overview options.
- Your SHINE Path remains available as an optional visualization.

## Preserved

- All researched medical and public-health content
- Sleep HEAL Wizard and saved selections
- Diet Builder
- SHINE Path design
- Bottom navigation
- `pc_pilot_v022_profile` localStorage compatibility
- Profile version 22
- Offline operation
- Clinical-review queues and medication/supplement dosing locks

## Deferred

- QR codes
- Patient schedule builders
- Backend services
- Authentication
- New clinical pathways
- Standalone HTML generation

## Files

- `index.html` — application shell
- `styles.css` — established visual system
- `clarity-v045.css` — v045 presentation overrides
- `app.js` — established rendering and behavior
- `clarity-v045.js` — v045 clarity behavior
- `data/content.js` — patient-facing content
- `data/schema.json` — content schema and release metadata
- `open_local_preview.cmd` — local preview helper
- `upload_to_github.cmd` — Windows upload helper
- `VERSION.txt` — release version
- `docs/product/V045_CLARITY_PASS.md` — implementation record

## Preview

Run `open_local_preview.cmd`, or open `index.html` directly in a modern browser.

## Safety

Patient Care is educational only. It does not diagnose, prescribe, or replace clinical assessment. Do not publish patient-identifying information.
