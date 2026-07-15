# v043 Sleep HEAL Wizard

## Scope

The first wizard is limited to `#/shine/sleep`. It does not change sections 1–5 or any other SHINE, HEAL, or DR page.

## Purpose

Convert the final Sleep next-step area from a fixed list into a guided builder while preserving the fixed list as a manual alternative.

## Selection model

- Health considerations
- Sleep and work schedule
- Sleep experiences
- Daily-life factors

Selections are optional, multi-select, local-only, and are not diagnoses.

## Recommendation model

Each recommendation references an existing Action Path task using:

- `itemId`
- `group`
- `taskId`

The wizard does not create a second task library. This keeps manual buttons, wizard buttons, Your Plan, and SHINE Path synchronized through the existing task key.

## Safety

- No dose, medicine change, diagnosis, or treatment instruction is generated.
- Severe sleepiness remains linked to the existing safety wording.
- Clinical questions and tests remain available through the manual Action Path and connected DR pages.
- Recommendation wording is educational and conditional.

## Persistence

Wizard selections are stored in `profile.sleepWizard`. Selected actions remain in `profile.planTasks`.
