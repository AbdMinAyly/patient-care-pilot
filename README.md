# Patient Care v043 — Sleep HEAL Wizard

This release adds the first GIGATON planning wizard to the v042 quality-reviewed baseline. The pilot is limited to the SHINE Sleep page. Sections 1–5, all other health pathways, the central SHINE Path design, navigation, Diet Builder, localStorage key, offline operation, and the existing manual Action Path remain available.

## Sleep Wizard flow

1. Health considerations
2. Sleep and work pattern
3. Current sleep pattern
4. Daily-life factors
5. Categorized HEAL action options

The wizard can account for diabetes or glucose concerns, hypertension, asthma or nighttime breathing symptoms, anxiety or stress, pain or headache, restless legs, regular or irregular schedules, night work, rotating work, split sleep, caregiving interruptions, sleep symptoms, bedroom factors, caffeine, food timing, naps, alcohol, medicines, and supplements.

## Recommendation behavior

- Recommendations reuse existing researched Sleep and HEAL Action Path tasks.
- No new diagnosis, prescription, dosing, emergency, or treatment claims are introduced.
- Results are grouped into routine and timing, bedroom and wind-down, daylight and alertness, food and drinks, and tracking and preparation.
- Users add actions individually or use `Add all shown actions`.
- Wizard choices and selected tasks are stored locally in the existing profile.
- Tasks enter the same Your Plan and SHINE Path system as manually selected tasks.
- Manual Sleep task selection remains directly below the wizard.

## Files updated

- `data/content.js`
- `data/schema.json`
- `app.js`
- `styles.css`
- `docs/product/V043_SLEEP_HEAL_WIZARD.md`
- `PATIENT_CARE_CORE.md` and its `docs/` copy
- `PATIENT_CARE_SHARED_LANGUAGE.md` and its `docs/` copy
- `README.md`
- `VERSION.txt`
- `index.html`
- `upload_to_github.cmd`
- `patient-care-v043-standalone-mobile.html`

No online dependencies or visible source links are added.

## GitHub uploader

`upload_to_github.cmd` can run from a temporary extracted package. On its first run, it locates or asks for the actual Patient Care Git repository, copies the package files into that repository, commits the package paths, and pushes the current branch to `origin`.

The selected repository path is saved locally at `%LOCALAPPDATA%\PatientCare\github-repository.txt` so later packages can upload without asking again. A repository path can also be supplied as the first command-line argument or through the `PATIENT_CARE_REPO` environment variable.
