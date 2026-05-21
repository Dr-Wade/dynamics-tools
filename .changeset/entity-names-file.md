---
"dataverse-types-gen": minor
---

Generate an `entity-names.ts` file with `EntityLogicalNames` and
`EntitySetNames` `as const` objects for the requested entities.

`EntitySetNames` provides the plural collection names (e.g. `accounts`) used in
Web API request URLs and `@odata.bind`; `EntityLogicalNames` provides the
singular names used for metadata paths. Set names are read from the
`EntityContainer` in `$metadata`, so no additional requests are made. The new
file is re-exported from the `index.ts` barrel.
