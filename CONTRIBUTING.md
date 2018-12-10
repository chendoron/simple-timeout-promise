# Contributing

## Codestyle

### Linting

  - ESlint
  - Prettier
  - Jest best practices

Run lint with `npm run lint`.

## Git Workflow

  - Do not push code directly. Make a pulls to the `master` branch.
  - Delete any branches as soon as they are merged into `master`.
  
### Types

  - `feature`
  - `fix`
  - `docs`
  - `style` *(changes that do not affect the meaning of the code; white-space, formatting...)*
  - `test` *(testing related changes)*
  - `refactor`
  - `performance` *(performance related changes)*
  - `chore`
  - `revert` *(commits which revert another commit)*
  - `version`

### Branch names
```
<type>/<dash-delimited-branch-name>
```

### Commit Messages

```
<type>: <commit message>
```

### Pull Requests

  - Add a description
  - Use separate commits
  - Only squash if needed