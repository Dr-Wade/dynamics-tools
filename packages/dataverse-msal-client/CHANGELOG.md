# dataverse-msal-client

## 0.2.0

### Minor Changes

- Add a typed query layer: `entity<T>(dynamics, collection)` returns a per-entity client with `retrieveMultiple` / `retrieveAll` / `create` / `update`, where `select` and the outer `expand[].property` are checked against `keyof T`. Pairs with `filter<T>()`, an immutable OData `$filter` builder whose field names are checked against `T`, string values are escaped, and `and`/`or` composition is parenthesised by construction.

## 0.1.0

### Minor Changes

- [`e0658ae`](https://github.com/Dr-Wade/dynamics-tools/commit/e0658ae15f4611e9cef87c0c8140ab17086dc45e) Thanks [@Dr-Wade](https://github.com/Dr-Wade)! - Initial public release.

  - `dataverse-types-gen`: CLI that generates TypeScript interfaces, `@odata.bind`
    helper types, and optionset enums from a Dataverse `$metadata` endpoint.
  - `dataverse-msal-client`: authenticated `DynamicsWebApi` client factory using
    MSAL client credentials, plus `@odata.bind` URL helpers.
