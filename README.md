# Patient Care GitHub Pages Pilot

This is a free static website pilot for the Patient Care project.

## What it does

- Renders patient education cards from CSV data.
- Uses Healthy Living first, then Diet, Monitoring, Symptoms, Conditions, Chronic Care, Emergency, Medication Safety, and Special Circumstances.
- Includes Arabic placeholders but does not translate yet.
- Does not collect patient data.

## First run: easiest path

1. Create a public GitHub repository.
2. Upload every file in this folder to the repository root.
3. Go to repository Settings > Pages.
4. Under Build and deployment, choose Deploy from a branch.
5. Choose branch `main` and folder `/root`.
6. Save.
7. Wait for GitHub Pages to publish the site.

## Updating content now

For the pilot, edit the CSV files in the `/data` folder.

## Later: live Google Sheet mode

1. In Google Sheets, open the source sheet.
2. Use File > Share > Publish to web.
3. Publish the specific tabs as CSV:
   - 03_PAGES
   - 04_CONTENT_BLOCKS
   - 05_RED_FLAGS
4. Copy each published CSV URL.
5. Open `config.js`.
6. Set `USE_LIVE_GOOGLE_SHEET: true` and paste the three CSV URLs.
7. Commit the updated `config.js` to GitHub.

## Safety

Only publish educational content that is safe for the public. Never publish patient data.

