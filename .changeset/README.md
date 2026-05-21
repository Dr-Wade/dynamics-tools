# Changesets

This folder is managed by [Changesets](https://github.com/changesets/changesets).

When you make a change to a package that should be released, run:

```sh
pnpm changeset
```

Pick the affected packages and a semver bump (patch / minor / major), and write a
short description. This creates a markdown file in this folder — commit it with
your PR.

On merge to `main`, the release workflow opens (or updates) a **"Version Packages"**
PR that consumes these files, bumps versions, and writes CHANGELOGs. Merging that
PR publishes the changed packages to npm and creates GitHub Releases.

See the [Changesets docs](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md)
for more.
