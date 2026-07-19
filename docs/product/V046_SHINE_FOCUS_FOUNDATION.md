# v046 SHINE Focus Foundation

## Baseline

Patient Care v045 — Clarity Pass.

## Product change

SHINE is now a browsing lens rather than a saved Plan item. A user may choose one primary focus and one optional secondary focus. Starting with one focus is explicitly recommended so the interface remains manageable.

## Implemented

- Added optional `profile.shineFocus` while preserving the localStorage key and profile version 22.
- Preserved the legacy `profile.shine` array without writing new selections to it.
- Migrated up to two valid legacy SHINE selections into the active focus view when an explicit focus is absent.
- Added deliberate replacement when a third focus is chosen.
- Kept placeholder Exercise unavailable as a focus.
- Built focus relevance only from existing typed `healLinks` and `drLinks` relationships.
- Added one relationship badge and border per matching HEAL or DR card, search result, and detail page.
- Added compact focus context to HEAL, DR, Diet Builder, Plan, and SHINE Path.
- Removed SHINE lessons from Plan totals, Daily Foundation rows, and SHINE Path saved-item lists.
- Preserved SHINE-generated Action Path tasks and Sleep Wizard actions in Your Plan.
- Clearing Plan items preserves SHINE focus, legacy SHINE data, and Sleep Wizard selections.
- No percentage, completion score, streak, diagnosis, or treatment recommendation is generated.

## Preserved

- All researched patient-facing teaching
- Editorial source IDs and research batches
- Content statuses and related IDs
- Clinical-review queues
- Medication and supplement dosing locks
- Sleep Wizard selections and task synchronization
- Diet Builder content and matching logic
- `pc_pilot_v022_profile`
- Profile version 22
- Offline, dependency-free operation

## Deferred

- Focus-aware HEAL and DR home shortlists
- Focus-aware Diet Builder suggestions
- Unified Find and Iron Learning Guide
- Manual weekly focus review
- QR codes
- Patient schedules
- Backend and authentication
- Prescribing logic
- Standalone HTML build
