/**
 * 3X Pilot Teams — Working Session Questionnaire
 * ONE-TIME GENERATOR: creates a native Google Form with all 9 questions
 * and links its responses to the existing spreadsheet.
 *
 * HOW TO RUN:
 *  1. Go to https://script.google.com  →  New project.
 *  2. Delete the starter code, paste THIS whole file, Save.
 *  3. Select the function `createQuestionnaire` in the toolbar, click Run.
 *  4. Authorize when prompted (your Intuit/CK account).
 *  5. Open the Executions / Logs (View → Logs) — the Form's edit URL and
 *     public (respondent) URL are printed there.
 *
 * The form is set to "Anyone within Intuit" automatically (matches org policy),
 * collects no email unless you flip COLLECT_EMAIL below, and one response per person off.
 */

var RESPONSES_SPREADSHEET_ID = '1Ppnm99OR2U9irgEcqZvNufEazx7tm9hHrf7NQ5UYPMk';
var COLLECT_EMAIL = false;   // set true to auto-capture respondent email

function createQuestionnaire() {
  var form = FormApp.create('3X Pilot Teams — Working Session Questionnaire');

  form.setDescription(
    'Pre-read for the CG A.PDLC working session (Assisted · Business Model · ' +
    'Consumer Platform / CK). Please answer for your pilot team ahead of the ' +
    'Friday session — your responses drive the gap/action list.'
  );

  form.setCollectEmail(COLLECT_EMAIL);
  form.setAllowResponseEdits(true);
  form.setLimitOneResponsePerUser(false);
  form.setProgressBar(true);

  // --- Identity ---
  form.addListItem()
    .setTitle('Pilot team')
    .setRequired(true)
    .setChoiceValues([
      'Full Service (Assisted)',
      'Monetization (Business Model)',
      'Credit Cards (Consumer Platform / CK)',
      'Insurance (Consumer Platform / CK)',
      'Other'
    ]);

  form.addTextItem()
    .setTitle('Your name')
    .setRequired(true);

  // --- The 9 questions ---
  var questions = [
    ['Q1 — Artifact chain',
     "Walk us through the artifacts you've produced across the full PDLC so far. Where does the canonical Insights → Brief → PRD → Architecture → Specs → Plans → Epics chain hold, and where does it break? Is it collaborative with cross-functional teams?"],
    ['Q2 — Context sharing',
     "What's your context-sharing strategy for passing artifacts from function to function (e.g., PM → PD)? Is GitHub your system of record? Are artifacts versioned?"],
    ['Q3 — Skill inventory',
     "Can you provide an inventory of the foundational and team-specific cross-functional skills/tools each partner is using today? Which skills are shared/reused across functions vs. built one-off? How do you avoid every function creating duplicate tools?"],
    ['Q4 — Capability plugin dependencies',
     "What capability plugins does your pipeline depend on? Can you share an inventory with status and repo agentic-readiness scores?"],
    ['Q5 — Enterprise tool integration',
     "Which enterprise tools does your PDLC pipeline connect to and update — DevPortal, JIRA, Dragonboat, ODL, Dev360, Figma, GitHub? Which are read-only vs. read-write?"],
    ['Q6 — Observability',
     "What metrics and dashboards give you visibility into the PDLC pipeline? How do you measure cycle time, quality, and where work stalls?"],
    ['Q7 — PR-review process',
     "Walk us through your PR-review process. How is it automated, what checks run (system-engineer, testing, security), and how does it fit the broader PR-review agent direction?"],
    ['Q8 — Marketplace',
     "Which cross-functional partners have run marketplace skills and created their portion of the PDLC artifacts? Note partners still missing."],
    ['Q9 — Friction / pain points',
     "What friction / pain points are you seeing right now? Be specific — these feed directly into the gap/action list."]
  ];

  questions.forEach(function (q) {
    form.addParagraphTextItem()
      .setTitle(q[0])
      .setHelpText(q[1]);
  });

  // --- Link responses to the existing spreadsheet ---
  form.setDestination(FormApp.DestinationType.SPREADSHEET, RESPONSES_SPREADSHEET_ID);

  Logger.log('EDIT URL (you):        ' + form.getEditUrl());
  Logger.log('SHARE URL (teams):     ' + form.getPublishedUrl());
  Logger.log('Responses spreadsheet: https://docs.google.com/spreadsheets/d/' + RESPONSES_SPREADSHEET_ID + '/edit');
}
