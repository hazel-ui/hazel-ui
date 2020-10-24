# CONTRIBUTION GUIDELINES

## Index

- [Conventions](#conventions)
- [Local Setup](#local-setup)
- [Maintenance](#maintenance)
- [Testing](#testing)

---

## Conventions

- Case
  - PascalCase for components, interfaces, types
  - camelCase for objects, enums, utility functions
  - UPPERCASE for constants
- Never use `var` for declaring variables. Use `const` or `let`.
- Add semicolons
- For all other things, refer the [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html).

---

## Local Setup

To run the project in a local environment where you can see your changes live, fork the project, and run the below commands:

```sh
# create a local clone of the repository
git clone https://github.com/YOUR-USERNAME/hazel-ui.git
# switch to the created directory
cd hazel-ui
# install required packages
npm i
# start local server
npm run storybook
```

This will start the storybook server at <http://localhost:6006/>

---

## Maintenance

### Dependency check

`depcheck`

---

## Testing

`jest` and `@testing-library/react`
