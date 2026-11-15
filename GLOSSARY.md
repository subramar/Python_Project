# Vault EDC Study Build Glossary

Canonical Veeva Vault EDC terms for this workspace. Lessons use these words; previous-EDC terms appear only in translation tables.

## Design structure

**Studio**:
The Vault EDC area where study designers create definitions, the schedule and rules.
_Avoid_: Architect, designer tool

**Casebook Definition**:
One version of the complete study design, holding the relationships between all definitions and rules.
_Avoid_: CRF version, draft (except when translating)

**Event Group**:
A container of Events forming a phase of the schedule (e.g. Screening, Treatment). Only the first one surfaces in a new casebook without a rule.
_Avoid_: Folder group, arm

**Event**:
A visit in the schedule; contains Forms.
_Avoid_: Folder, visit (in written specs; "visit" is fine when speaking)

**Form**:
A data-collection page within an Event; contains Item Groups.
_Avoid_: CRF page, eCRF

**Item Group**:
A section of a Form containing Items; can repeat and be shown as a grid.
_Avoid_: Log line, section, itemset

**Item**:
A single question or field on a Form.
_Avoid_: Field, variable

**Cycle**:
A repeating Event Group; each repetition is a *sequence*.
_Avoid_: Repeating folder

## Records

**Definition record**:
What Studio creates (Form Definition, Event Definition…), even though Studio leaves off the word "Definition".

**Execution record**:
The per-subject copy of a definition that Vault makes when a casebook is created; the data lives here.

**Casebook**:
One subject's set of execution records: their visits, forms and data.
_Avoid_: Subject record, patient folder
