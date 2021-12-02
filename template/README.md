# README

## Convention

### Commit Message

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

> References
>
> - [Angular Convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)
> - [Conventional Commits](https://www.conventionalcommits.org/)

## Tools

### Prettier

```shell
prettier --check
prettier --write
```

### ESLint

```shell
eslint --fix-dry-run
eslint --fix
```

### Standard Version

```shell
standard-version --dry-run
standard-version --first-release
standard-version --release-as <major|minor|patch>
standard-version
```
