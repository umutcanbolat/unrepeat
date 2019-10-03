# Releasing

In order to release a new version, here is what we can do.

First get a recommended release type by running

```sh
npm run version:recommend
```

This will recommend one of the following release types depending on the commit history: `patch`, `minor` or `major` . We can use the recommended bump to release a new version.

```sh
npm run version:bump patch
```

This command;

- Runs tests and linters, builds project.
- Updates version number in package.json.
- Generates a [CHANGELOG](CHANGELOG.md) based on the latest commits. (See [Conventional Commits](https://github.com/conventional-changelog))
- Commits these changes with a message like `chore(RELEASE): publish %s` and creates a new tag with the version number.
- Pushes all these changes to upstream.

CI/CD will take care of the rest and publish the project to the npm registry and GitHub releases with the newly tagged version.
