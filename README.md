# Patient Care Pilot v005 — SHINE + HEAL Simple Safe Build

This is a static GitHub Pages prototype for the Patient Care Pilot app.

## What changed in v005

v005 is built around a guided product experience, not a generic article library:

- **SHINE first**: Sleep, Happiness, Immunity, Nutrition, Exercise.
- **HEAL second**: clinical guidance with search, symptoms, conditions, medication/supplement safety, side effects, and emergency access.
- **Hidden health graph**: the graph powers curated next-step cards only. There is no visible graph explorer.
- **My Health Map**: local-only saved area with SHINE Plan and HEAL Summary.
- **Doctor Summary**: HEAL items and doctor questions can be printed.
- **Safety gates**: dosing is fail-closed. Medication/supplement dosing stays locked unless explicitly approved.

## Sample flow included

The small v005 data set validates the core graph behavior:

```text
Sleep / Fatigue
→ Iron deficiency
→ Iron supplement
→ Constipation side effect
→ Hydration / Fiber / Walking
→ Nutrition / Exercise support
→ My Health Map
→ Print SHINE Plan / Doctor Summary
```

## Local preview

Open `index.html` directly, or run:

```cmd
open_local_preview.cmd
```

This build uses JavaScript data files instead of JSON fetch requests, so it works from `file://` without a local server.

## Deploy

This ZIP includes `upload_to_github.cmd`. The existing `deploy_latest_zip.cmd` script can extract this ZIP and run the uploader.

Repository target inside uploader:

```text
https://github.com/AbdMinAyly/patient-care-pilot.git
```

The uploader does not contain tokens.

## Privacy

The app uses `localStorage` only. There is no backend, login, database, or PHI storage system. My Health Map warns users not to enter names, phone numbers, ID numbers, or private identifying details.

## Clinical safety

This app is educational. It does not diagnose, prescribe, or replace a qualified clinician. Medication dosing and emergency guidance are safety-gated. Doctor Summary prints locked dosing as:

```text
Dosing not provided — clinician review required.
```
