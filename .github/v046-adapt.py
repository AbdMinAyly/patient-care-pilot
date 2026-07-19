from pathlib import Path

p = Path('/tmp/build_v046.py')
s = p.read_text()
s = s.replace('''      "scope": "Presentation and navigation only",
      "implementationRecord": "docs/product/V045_CLARITY_PASS.md",
      "note": "Retains all researched content while using progressive disclosure, visible safety wording, compact Action Paths, and corrected Plan routing. No clinical approval, source registration, QR, or scheduling change is introduced."''','''      "scope": "Presentation and navigation",
      "note": "Progressive disclosure retains complete researched content, keeps safety and dosing-lock information visible, hides placeholders from normal discovery, and corrects Plan routing and task counts. No new sources, clinical claims, QR codes, or scheduling features are introduced."''',1)
s = s.replace("anchor='''      \"clearPlan\": \"Clear Your Plan\"", "anchor='''      \"downloadJsonBackup\": \"Download JSON backup\"",1)
s = s.replace("shine_focus='''      \"clearPlan\": \"Clear Your Plan\"", "shine_focus='''      \"downloadJsonBackup\": \"Download JSON backup\"",1)
s = s.replace('''        <div class="plan-subsection"><h3>${esc(clarity.nextActionsEyebrow)}</h3>${renderPlanTaskRows(planTasksForCore(p,'daily'))}</div>
      </div>''','''      </div>
      <div class="plan-subsection"><h3>Saved next-step tasks</h3>${renderPlanTaskRows(planTasksForCore(p,'daily'))}</div>''',2)
p.write_text(s)
