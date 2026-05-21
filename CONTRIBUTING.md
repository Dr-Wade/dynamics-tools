# Contributing

Thanks for contributing to `dynamics-tools`.

## Setup

```sh
pnpm install
pnpm -r build
```

Requires Node.js >= 18 and pnpm >= 8.

## Making changes

1. Branch off `main`.
2. Make your change. Keep each package's `README.md` in sync with its behavior.
3. **Add a changeset** for any change to a published package:

   ```sh
   pnpm changeset
   ```

   Select the affected package(s), choose a semver bump, and write a short,
   user-facing description. Commit the generated `.changeset/*.md` file with
   your PR. Changes that don't affect a published package (CI, docs, repo
   tooling) don't need one.
4. Open a PR against `main`. CI builds every package on each push.

## How releases work

Releases are automated with [Changesets](https://github.com/changesets/changesets):

- When PRs with changesets land on `main`, a bot opens a **"Version Packages"**
  PR that bumps versions and updates each package's `CHANGELOG.md`.
- Merging that PR publishes the changed packages to npm and creates a GitHub
  Release per package.

You never run `npm publish` by hand.
