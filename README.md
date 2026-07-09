# Patient Care Pilot

This is a GitHub-only static website pilot.

## Current direction

No Google Sheets.  
No AppSheet.  
No Apps Script.  
The repository itself is the source of truth for this pilot.

## Files

- `index.html` — page layout
- `styles.css` — visual design
- `data.js` — pilot content
- `app.js` — rendering, search, filters, detail pages
- `upload_to_github.cmd` — Windows upload script

## How to publish with GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings > Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main`.
5. Folder: `/ root`.
6. Save.

The site should appear at:

```text
https://AbdMinAyly.github.io/patient-care-pilot/
```

## How to edit content

Edit `data.js`.

Add or change objects under:

- `pages`
- `blocks`
- `redFlags`

Keep the current structure until the pilot design is approved.

## Safety note

This pilot is educational only. Do not publish patient data. Medical content should be clinically reviewed before real public use.
