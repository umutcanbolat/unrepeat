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

Create the release commit and tag (replace `major` with `minor` or `patch` when appropriate):

```sh
pnpm version major
git push --follow-tags
```

The `Publish` GitHub Actions workflow publishes the tagged version to npm.

Finally, write the release notes on the [GitHub releases page](https://github.com/umutcanbolat/unrepeat/releases).
