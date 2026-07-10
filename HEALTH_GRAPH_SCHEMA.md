# Health Graph Schema — v005

## Principle

The graph is infrastructure, not the UI.

Users should see simple pages, next-step cards, bridge cards, Add to Plan buttons, and print/export tools. They should not see a raw graph, node-link canvas, or multi-hop relationship explorer.

## Node model

Each content node owns its safety status.

Required fields for user-facing nodes:

```js
{
  id: "iron-supplement",
  mode: "heal",             // shine | heal
  type: "supplement",        // shine_topic | shine_action | symptom | condition | medication | supplement | side_effect | emergency | note
  title: "Iron Supplement",
  summary: "Short user-facing summary",
  hero: "One or two sentence orientation",
  displayStatus: "published", // published | draft | archived | deprecated
  safetyLevel: "locked",       // green | yellow | red | locked
  reviewLevel: "clinical",     // general | clinical | doctor_only | approved
  keywords: [],
  keyFacts: [],
  whatToDo: [],
  questions: []
}
```

## Dosing model

Dosing is fail-closed.

```js
{
  dosing: {
    status: "locked", // locked | draft | approved
    publicText: "Dosing not provided — clinician review required."
  }
}
```

UI rule:

```js
if (node.dosing?.status !== "approved") {
  hideDosing();
  showLockedDosingNotice();
}
```

The app must never rely on `reviewLevel === "clinical"` alone to block dosing, because typos or missing fields can fail open. The direct dosing status must explicitly be `approved` before dosing can render.

## Relationship model

Relationships are one-hop links only in the visible UI.

```js
{
  from: "iron-supplement",
  to: "constipation",
  type: "side_effect",
  label: "Possible side effect",
  section: "safety"
}
```

Allowed relationship types in v005:

```text
benefit
poor_outcome
possible_cause
symptom_of
treated_by
side_effect
lifestyle_support
related_shine
emergency_if
needs_monitoring
doctor_question
```

## Visible relationship rules

- Show maximum 3 related next-step cards per page.
- Do not recursively render related nodes of related nodes.
- Do not show generic “Related Articles.”
- Every card must explain why it appears:
  - Possible Cause
  - Possible Side Effect
  - Support Your Recovery
  - The SHINE Connection
  - When to Watch Closer
  - Discuss With Clinician

## Side-effect rule

Side effects should be represented by relationships, not duplicated as free-text arrays on medication or supplement nodes.

Example:

```js
{ from: "iron-supplement", to: "constipation", type: "side_effect" }
```

The medication/supplement page renders side effects by filtering graph edges.

## My Health Map profile

Stored in localStorage under:

```text
pc_pilot_profile_v1
```

Shape:

```js
{
  version: 1,
  createdAt: "ISO date",
  lastUpdated: "ISO date",
  settings: { locale: "en" },
  shinePlan: {
    items: [
      { id, title, sourceId, addedAt, done }
    ]
  },
  healSummary: {
    symptoms: [],
    conditions: [],
    medications: [],
    supplements: [],
    sideEffects: [],
    emergency: [],
    notes: [],
    questions: []
  }
}
```

## Import/export safety

v005 exports JSON only. If import is added later, validate:

- profile version
- expected fields
- array sizes
- known node IDs
- absence of unsupported clinical fields
- absence of obvious personal identifiers in notes/questions

## Product rule

Every screen should answer:

```text
What should I do next?
```
