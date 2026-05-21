# dataverse-types-gen

Generate TypeScript types and optionset enums from a Microsoft Dataverse / Dynamics 365 environment's `$metadata` endpoint.

For each requested entity the CLI writes:

- An `<entity>.ts` file with an `interface` for the entity, an `<Entity>Bind` interface for `@odata.bind` writes, and imports for related entities
- A shared `optionsets.ts` file with `enum`s for every picklist/state/status/multiselect option set discovered across the requested entities
- An `index.ts` barrel re-exporting all generated types

## Installation

```sh
npm install --save-dev dataverse-types-gen
# or
pnpm add -D dataverse-types-gen
```

## Usage

### 1. Create a config

`dataverse-types.config.json`:

```json
{
  "entities": ["account", "contact", "msdyn_workorder"],
  "outputDir": "src/dataverse-gen"
}
```

### 2. Set environment variables

The generator authenticates with Microsoft Entra ID using the client-credentials flow. Provide these via your shell, a `.env` file, or your runner's secret store:

| Variable                 | Description                                                              |
| ------------------------ | ------------------------------------------------------------------------ |
| `SERVER_URL`             | Dataverse environment URL, e.g. `https://contoso.crm.dynamics.com`       |
| `AUTHORITY_URL`          | OAuth authority, e.g. `https://login.microsoftonline.com/<tenant-id>`    |
| `DYNAMICS_CLIENT_ID`     | Azure AD application (client) ID                                         |
| `DYNAMICS_CLIENT_SECRET` | Azure AD application client secret                                       |

The app registration must be granted access to the Dataverse environment as an application user with read permission on entity metadata.

### 3. Run it

```sh
npx dataverse-types-gen
# or with an explicit config path
npx dataverse-types-gen --config ./config/dataverse.json
```

A common pattern is to add it as a script in your `package.json`:

```json
{
  "scripts": {
    "gen:types": "dataverse-types-gen"
  }
}
```

## What gets generated

For `entities: ["account"]` you get:

```
src/dataverse-gen/
  account.ts       # export interface Account, export interface AccountBind
  optionsets.ts    # export enum AccountStatecode, ...
  index.ts         # re-exports
```

## How it works

1. Acquires a bearer token via MSAL using client credentials.
2. Fetches the OData `$metadata` document and parses the EDM schema.
3. For each requested entity, fetches `EntityDefinitions(...)/Attributes/Microsoft.Dynamics.CRM.<PicklistSubtype>` to enumerate option sets.
4. Renders one `.ts` file per entity plus a shared `optionsets.ts`.

Inherited properties are flattened from `@BaseType` chains. Navigation properties to entities in your requested set are typed; those outside the set fall back to `unknown` (use `$expand` carefully).

## License

MIT
