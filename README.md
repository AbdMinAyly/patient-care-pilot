# Patient Care v020 — Complete SHINE, Local Editable Content

Base version: v019.

## Pattern change applied

All five SHINE topics now use the same complete structure:

1. Why the topic matters
2. How the topic helps SHINE
3. How weakness in the topic affects SHINE
4. Good habits linking to HEAL
5. Common conditions linking to DR

Happiness, Immunity, Nutrition, and Exercise now have the same information depth and page structure as Sleep.

## Content architecture

Patient-facing information is stored in:

`data/content.js`

Application behavior is stored in:

`app.js`

Visual design is stored in:

`styles.css`

The application shell is stored in:

`index.html`

## Local-only

The runtime has no online dependencies and no patient-facing external links.
Open `index.html` directly.

## Admin-ready foundation

A future Admin Mode can edit the same Content Records and export an updated local content file.
Directly replacing a local file requires explicit browser permission and is not consistently available on mobile.

## Intentionally preserved

- four-mode bottom navigation
- white/red/yellow/blue visual direction
- Summary behavior and localStorage
- SHINE inline links
- HEAL and DR rendering
- no visible graph
