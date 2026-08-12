# Releasing

Start from an up-to-date, clean `master` branch, then install and verify the package:

```sh
git switch master
git pull --ff-only
pnpm install --frozen-lockfile
pnpm format:check
pnpm test
pnpm build
```

Manually add the new version entry to `CHANGELOG.md`, then commit and push it:

```sh
git add CHANGELOG.md
git commit -m "chore: update CHANGELOG for version x.y.z release"
git push
```

Create the release commit and tag (replace `major` with `minor` or `patch` when appropriate):

```sh
pnpm version major
git push --follow-tags
```

The `Publish` GitHub Actions workflow publishes the tagged version to npm and creates the GitHub Release.
