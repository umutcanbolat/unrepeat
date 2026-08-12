# Releasing

Start from an up-to-date, clean `master` branch, then install and verify the package:

```sh
git switch master
git pull --ff-only
pnpm install --frozen-lockfile
pnpm test
pnpm build
```

Create the release commit and tag (replace `major` with `minor` or `patch` when appropriate):

```sh
pnpm version major
git push --follow-tags
```

After CI passes, publish the tagged version:

```sh
pnpm publish
```

Finally, write the release notes on the [GitHub releases page](https://github.com/umutcanbolat/unrepeat/releases).
