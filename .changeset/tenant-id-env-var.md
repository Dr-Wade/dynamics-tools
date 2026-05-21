---
"dataverse-types-gen": minor
---

Replace the `AUTHORITY_URL` environment variable with `TENANT_ID`.

The generator now builds the OAuth authority URL itself
(`https://login.microsoftonline.com/<TENANT_ID>`), matching how
`dataverse-msal-client` is configured so both packages can share one `.env`.

**BREAKING:** existing setups must replace `AUTHORITY_URL` with `TENANT_ID` in
their environment / `.env`. The value of `TENANT_ID` is the tenant GUID at the
end of the old authority URL.
