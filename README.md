# 3X Pilot Teams — Working Session Questionnaire

A static, GitHub Pages–hosted questionnaire for the CG A.PDLC working session
(Assisted · Business Model · Consumer Platform / CK). Responses are written to a
Google Sheet via a Google Apps Script web app.

**Live form:** enabled via GitHub Pages (Settings → Pages).
**Responses Sheet:** https://docs.google.com/spreadsheets/d/1Ppnm99OR2U9irgEcqZvNufEazx7tm9hHrf7NQ5UYPMk/edit

## How it works

```
GitHub Pages (index.html)  ──POST──▶  Apps Script /exec  ──appendRow──▶  Google Sheet
```

GitHub Pages only serves static files — it can't store submissions. The Apps Script
web app is the free, no-server backend that catches each POST and appends a row.

## One-time setup

1. Open the responses Sheet (link above) → **Extensions → Apps Script**.
2. Paste the contents of [`Code.gs`](./Code.gs), Save.
3. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Authorize, then copy the **Web app URL** (ends in `/exec`).
5. In [`index.html`](./index.html), replace `REPLACE_WITH_APPS_SCRIPT_EXEC_URL`
   with that URL, commit, and push.

Done — share the Pages URL with the pilot teams.

## The 9 questions
1. Artifact chain
2. Context sharing
3. Skill inventory
4. Capability plugin dependencies
5. Enterprise tool integration
6. Observability
7. PR-review process
8. Marketplace
9. Friction / pain points

Source: [Working session doc](https://docs.google.com/document/d/1cuQl-1bEv287tq-276jW820lb6ITW9rYofv2fpE0-fw/edit)
