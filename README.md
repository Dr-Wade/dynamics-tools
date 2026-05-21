# dynamics-tools

[![CI](https://github.com/Dr-Wade/dynamics-tools/actions/workflows/ci.yml/badge.svg)](https://github.com/Dr-Wade/dynamics-tools/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A small monorepo of TypeScript packages for working with Microsoft Dataverse / Dynamics 365 from Node.js.

## Packages

| Package | npm | Description |
| ------- | --- | ----------- |
| [`dataverse-types-gen`](./packages/dataverse-types-gen) | [![npm](https://img.shields.io/npm/v/dataverse-types-gen.svg)](https://www.npmjs.com/package/dataverse-types-gen) | Generate TypeScript types & optionset enums from a Dataverse `$metadata` endpoint. |
| [`dataverse-msal-client`](./packages/dataverse-msal-client) | [![npm](https://img.shields.io/npm/v/dataverse-msal-client.svg)](https://www.npmjs.com/package/dataverse-msal-client) | Authenticated `DynamicsWebApi` client factory + `@odata.bind` helpers. |

### [`dataverse-types-gen`](./packages/dataverse-types-gen)

Build-time CLI that connects to a Dataverse environment's `$metadata` endpoint and generates strongly-typed TypeScript interfaces, `@odata.bind` helper types, and optionset enums for the entities you request.

```sh
pnpm add -D dataverse-types-gen
npx dataverse-types-gen
```

### [`dataverse-msal-client`](./packages/dataverse-msal-client)

Runtime helper that wires up a [`DynamicsWebApi`](https://www.npmjs.com/package/dynamics-web-api) instance authenticated via Microsoft Entra ID client credentials (service principal), plus small `@odata.bind` URL helpers that pair with the types emitted by `dataverse-types-gen`.

```sh
pnpm add dataverse-msal-client @azure/msal-node dynamics-web-api
```

## Working in the monorepo

```sh
pnpm install
pnpm -r build
```

## Releasing

Versioning and publishing are handled by [Changesets](https://github.com/changesets/changesets).
Add a changeset to any PR that changes a published package:

```sh
pnpm changeset
```

Merging to `main` opens a **"Version Packages"** PR; merging that PR publishes the
changed packages to npm and creates the matching GitHub Releases. See
[CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[MIT](./LICENSE)
