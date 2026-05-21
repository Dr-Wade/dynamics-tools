# dataverse-types-gen

## 0.2.0

### Minor Changes

- [`3d7a788`](https://github.com/Dr-Wade/dynamics-tools/commit/3d7a78825f9d6f592d1ba0f4161fb1b25449c081) Thanks [@Dr-Wade](https://github.com/Dr-Wade)! - Generate an `entity-names.ts` file with `EntityLogicalNames` and
  `EntitySetNames` `as const` objects for the requested entities.

  `EntitySetNames` provides the plural collection names (e.g. `accounts`) used in
  Web API request URLs and `@odata.bind`; `EntityLogicalNames` provides the
  singular names used for metadata paths. Set names are read from the
  `EntityContainer` in `$metadata`, so no additional requests are made. The new
  file is re-exported from the `index.ts` barrel.

- [`3d7a788`](https://github.com/Dr-Wade/dynamics-tools/commit/3d7a78825f9d6f592d1ba0f4161fb1b25449c081) Thanks [@Dr-Wade](https://github.com/Dr-Wade)! - Replace the `AUTHORITY_URL` environment variable with `TENANT_ID`.

  The generator now builds the OAuth authority URL itself
  (`https://login.microsoftonline.com/<TENANT_ID>`), matching how
  `dataverse-msal-client` is configured so both packages can share one `.env`.

  **BREAKING:** existing setups must replace `AUTHORITY_URL` with `TENANT_ID` in
  their environment / `.env`. The value of `TENANT_ID` is the tenant GUID at the
  end of the old authority URL.

## 0.1.1

### Patch Changes

- [`411e65e`](https://github.com/Dr-Wade/dynamics-tools/commit/411e65ecaad75d37273a1c70c4e5ec2a4d6c9731) Thanks [@Dr-Wade](https://github.com/Dr-Wade)! - Added TENANT_ID env variable support

## 0.1.0

### Minor Changes

- [`e0658ae`](https://github.com/Dr-Wade/dynamics-tools/commit/e0658ae15f4611e9cef87c0c8140ab17086dc45e) Thanks [@Dr-Wade](https://github.com/Dr-Wade)! - Initial public release.

  - `dataverse-types-gen`: CLI that generates TypeScript interfaces, `@odata.bind`
    helper types, and optionset enums from a Dataverse `$metadata` endpoint.
  - `dataverse-msal-client`: authenticated `DynamicsWebApi` client factory using
    MSAL client credentials, plus `@odata.bind` URL helpers.
