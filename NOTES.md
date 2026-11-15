# Teaching Notes

## Learner profile (from intake, 2026-11-14)
- Goal: land a Vault EDC study build job. Deadline: **2 days**.
- Has built studies in *another* EDC. Lesson 1 assumes Medidata Rave for the comparison table; **ask which system** and adapt (InForm, Oracle Clinical One, Castor, etc.).
- No vault / sandbox access, so all practice must be in-browser simulation, quizzes and spoken interview answers.

## 2-day plan (draft; adjust after each lesson)
Day 1
1. 0001 ✅ done (6/7, spoken OK). Vault design hierarchy + definition vs execution
2. 0002 ✅ written. Building the schedule: event groups, events, cycles (repeating event groups), dynamic surfacing with Add Event Group / Add Event / Add Form rules
3. 0003 Rules V2: `#define`, `@Form` (floating) vs `$` (fully qualified) identifiers, `[*]` / `[#]`, rule actions, blank handling
Day 2
4. 0004 Change lifecycle: validate → publish → deploy, casebook versions, update restrictions, destructive changes, casebook amendment
5. 0005 Around the casebook: item types (status / header / derived), subject groups (arm, cohort, substudy), review plans (SDV/DMR), signatures, coding: just enough to talk about each
6. 0006 Mock interview: interleaved retrieval across 0001–0005 + scenario questions

## Preferences / working notes
- Interview-oriented: every lesson ends with a "say it out loud" interview answer.
- GLOSSARY.md started after lesson 0001 (structure + record terms). Add schedule terms (window, sequence, unscheduled) once lesson 0002 results show they stick.
- Still unconfirmed which EDC the learner used before; Rave columns remain.
- Components in assets/: course.css, quiz.js (MCQ), order.js (sequence), match.js (requirement → feature dropdowns).
