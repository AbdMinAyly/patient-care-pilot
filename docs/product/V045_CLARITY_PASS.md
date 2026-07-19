# v045 Clarity Pass

## Baseline

Patient Care v044 — Focused Sleep HEAL Wizard.

## Scope

This release changes presentation and navigation only. It does not change researched clinical claims, source registrations, content status, clinical-review queues, related-content metadata, or medication and supplement dosing locks.

## Changes

- Full researched content is retained through progressive disclosure.
- Ordinary HEAL and DR pages show a short initial view with the first two existing teaching points.
- Existing warning-oriented teaching is repeated in a visible Important notice without rewriting it.
- Full teaching remains available through a native disclosure control.
- Emergency teaching remains open by default.
- Action Path groups use compact disclosure controls while preserving task IDs and saved-task behavior.
- Placeholder entities are hidden from normal HEAL and DR discovery.
- Exercise remains in the SHINE sequence as a non-clickable Coming soon card.
- Detail pages include visible back links.
- The duplicate generic doctor-question control was removed.
- Plan routes now separate detailed saved items from the SHINE Path visualization.
- Saved tasks are counted in their actual Daily, Food, Treatment, or Doctor core.
- JSON backup is available once from Plan Overview.
- Print styles expose complete teaching and Action Path content while preserving safety notices.

## Preserved

- All researched patient-facing content
- All editorial source IDs and research batches
- Sleep Wizard behavior and local selections
- Diet Builder
- SHINE Path visual design
- Bottom navigation
- `pc_pilot_v022_profile`
- Profile version 22
- Offline operation
- Clinical-review and safety locks

## Not included

- No new medical content
- No new editorial sources
- No QR codes
- No patient schedule builder
- No backend
- No authentication
- No new clinical pathway
- No standalone HTML build

## Implementation note

The v045 clarity behavior and styling are isolated in `clarity-v045.js` and `clarity-v045.css`. This prevents accidental modification of the large researched content store and allows the release to remain a controlled presentation-only change.
