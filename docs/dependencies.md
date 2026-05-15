# Packages

The below table explains why certain dependencies are required by the project in case their purpose isn't clear.

## Dependencies

| Package name                   | Purpose          |
| ------------------------------ | ---------------- |
| @radix-ui/react-tabs           | Base for Tabs    |
| @styled-icons/boxicons-regular | Base for Icon    |
| @styled-icons/boxicons-solid   | Base for Icon    |
| rc-slider                      | Base for Slider  |
| react-select                   | Base for Search  |
| react-table                    | Base for Table   |
| react-toastify                 | Base for Toast   |
| styled-components              | css-in-js styles |
| styled-system                  | css-in-js props  |

[]()

## Dev Dependencies

| Package name                   | Purpose                                           |
| ------------------------------ | ------------------------------------------------- |
| @changesets/changelog-github   | Adds GitHub metadata to changelog                 |
| @changesets/cli                | CLI for Changesets                                |
| @jest/globals                  | Explicit Jest globals (describe, it, expect)      |
| @rollup/plugin-terser          | Minify the npm package                            |
| @rollup/plugin-typescript      | TypeScript support for rollup                     |
| @storybook/addon-docs          | MDX docs support for Storybook                    |
| @storybook/addon-essentials    | storybook official addons                         |
| @storybook/react               | storybook core                                    |
| @storybook/react-vite          | storybook Vite framework                          |
| @testing-library/dom           | DOM testing utilities                             |
| @testing-library/jest-dom      | Custom jest matchers for DOM                      |
| @testing-library/react         | React component testing utilities                 |
| @types/node                    | Required by [@storybook/react][1]                 |
| @vanilla-extract/css           | static styles                                     |
| @vanilla-extract/rollup-plugin | required by vanilla-extract                       |
| @vanilla-extract/vite-plugin   | vanilla-extract support for Vite                  |
| @vitejs/plugin-react           | React JSX transform for Vite                      |
| clean-css-cli                  | Concatenate Theme styles into static/styles.css   |
| copyfiles                      | Copy static files to `dist`                       |
| jest                           | Unit & integration tests                          |
| oxfmt                          | Prettier-compatible formatter (replaces Prettier) |
| oxlint                         | Rust-based linter (replaces ESLint)               |
| react                          | React core                                        |
| react-dom                      | React core                                        |
| rollup                         | npm package bundler                               |
| storybook                      | Storybook CLI                                     |
| tslib                          | Runtime helpers for TypeScript output             |
| typescript                     | Typescript language support                       |
| vite                           | Build tool and dev server                         |

## Runtime software versions

| Name | Version  |
| ---- | -------- |
| node | v22.16.0 |
| pnpm | 11.1.1   |

[1]: https://www.npmjs.com/package/@storybook/react
[2]: https://www.npmjs.com/package/react-scripts
[3]: https://github.com/storybookjs/storybook/issues/14497#issuecomment-856284772
