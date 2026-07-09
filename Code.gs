/**
 * 3X Pilot Teams — Working Session Questionnaire
 * Apps Script backend: receives POSTs from the GitHub Pages form
 * and appends one row per submission to the bound Google Sheet.
 *
 * SETUP (one time):
 *  1. Open the responses Sheet:
 *     https://docs.google.com/spreadsheets/d/1Ppnm99OR2U9irgEcqZvNufEazx7tm9hHrf7NQ5UYPMk/edit
 *  2. Extensions → Apps Script.
 *  3. Delete any starter code, paste THIS whole file, Save.
 *  4. Deploy → New deployment → type: Web app.
 *       - Execute as: Me
 *       - Who has access: Anyone
 *     Deploy, authorize when prompted, and COPY the Web app URL
 *     (looks like https://script.google.com/macros/s/AKfy.../exec).
 *  5. Paste that URL into index.html where it says ENDPOINT_URL.
 */

// Must match the column order of the header row in the Sheet.
var FIELDS = [
  'team',
  'name',
  'q1_artifact_chain',
  'q2_context_sharing',
  'q3_skill_inventory',
  'q4_capability_plugins',
  'q5_enterprise_tools',
  'q6_observability',
  'q7_pr_review',
  'q8_marketplace',
  'q9_friction'
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Accept either form-encoded params or a JSON body.
    var data = {};
    if (e.postData && e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    }

    var row = [new Date()];               // Timestamp
    FIELDS.forEach(function (f) {
      row.push(data[f] || '');
    });

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Optional: lets you open the /exec URL in a browser to confirm it's live.
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'ok', message: '3X questionnaire endpoint is live.' }))
    .setMimeType(ContentService.MimeType.JSON);
}
