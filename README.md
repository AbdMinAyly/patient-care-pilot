# SHINE Patient Care Pilot

This is the second pilot version of the patient care site.

## Core idea

The app has two modes.

### Mode 1: SHINE

This is the first screen before any disease, symptom, medication, or emergency content.

SHINE means:

- **S**leep
- **H**appiness
- **I**mmunity
- **N**utrition
- **E**xercise

Each item opens into advice and connects to the other items. The goal is not five separate pages. The goal is one combined lifestyle system.

### Mode 2: Patient Mode

This is the secondary medical-support mode. It includes:

- symptoms
- conditions
- chronic care
- emergency
- medications, dosing, and safety
- special circumstances

The theme color changes when switching modes so the user understands they moved from wellness-first content into clinical-support content.

## Files

- `index.html` — app shell
- `styles.css` — two-mode theme and layout
- `data.js` — content source
- `app.js` — app behavior
- `upload_to_github.cmd` — Windows upload script
- `open_local_preview.cmd` — local preview helper

## Upload

Run:

```cmd
upload_to_github.cmd
```

The script uses local Git authentication. It does not store or contain a token.
