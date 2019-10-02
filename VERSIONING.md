# Versioning

In order to upgrade the module version, first run

```sh
npm run version:recommend
```

This will recommend a release type like `patch`, `minor` or `major` depending on the commit history.

After getting the recommended version, you can run the following command. In this case we run it with the release type `patch`.

```sh
npm run version:bump patch
```

This will run tests, builds project, generates a new [CHANGELOG](CHANGELOG.md) based on the latest commits, creates a new version tag and push all to the upstream. CI will take care of the rest and publish the project to the npm and GitHub releases with the new version.
