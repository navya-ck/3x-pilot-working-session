# 3X Pilot Teams — Working Session Questionnaire

Questionnaire for the CG A.PDLC working session (Assisted · Business Model ·
Consumer Platform / CK), collecting the 9 pilot-team questions into a Google Sheet.

**Responses Sheet:** https://docs.google.com/spreadsheets/d/1Ppnm99OR2U9irgEcqZvNufEazx7tm9hHrf7NQ5UYPMk/edit

## ✅ Use this: native Google Form (`CreateForm.gs`)

Intuit/CK Workspace policy blocks fully-public Apps Script web apps, so the
static-page approach below can't write to the Sheet. Use a native Google Form
instead — it handles login/sharing cleanly and auto-writes to the Sheet.

**Run once:**
1. Go to https://script.google.com → **New project**.
2. Paste the contents of [`CreateForm.gs`](./CreateForm.gs), Save.
3. Select `createQuestionnaire` → **Run** → authorize (Intuit/CK account).
4. **View → Logs** to get the form's edit URL, share URL, and Sheet link.
5. Set the form's sharing to **"Anyone within Intuit"** and send the share URL
   to the pilot teams.

## ⚠️ Deprecated: static GitHub Pages form (`index.html` + `Code.gs`)

Kept for reference only. This POSTs from a GitHub Pages page to an Apps Script
web app — but org policy forces the endpoint to require Intuit SSO, and the
cross-origin `no-cors` POST silently fails (returns 401, row never lands).
Do not use unless the org later allows public web-app deployment.

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
