# dynamics-tools

A small monorepo of TypeScript packages for working with Microsoft Dataverse / Dynamics 365 from Node.js.

## Packages

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
