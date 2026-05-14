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

| Package name                      | Purpose                               |
| --------------------------------- | ------------------------------------- |
| @babel/core                       | Required by Storybook to parse jsx    |
| @babel/plugin-transform-react-jsx | Required by Storybook to parse jsx    |
| @changesets/changelog-github      | Adds GitHub metadata to changelog     |
| @changesets/cli                   | CLI for Changesets                    |
| @jest/globals                     | Explicit Jest globals (describe, it, expect) |
| @rollup/plugin-terser             | Minify the npm package                |
| @rollup/plugin-typescript         | TypeScript support for rollup         |
| @storybook/addon-docs             | MDX docs support for Storybook        |
| @storybook/addon-essentials       | storybook official addons             |
| @storybook/react                  | storybook core                        |
| @storybook/react-vite             | storybook Vite framework              |
| @testing-library/dom              | DOM testing utilities                 |
| @testing-library/jest-dom         | Custom jest matchers for DOM          |
| @testing-library/react            | React component testing utilities     |
| @types/node                       | Required by [@storybook/react][1]     |
| @vanilla-extract/css              | static styles                         |
| @vanilla-extract/rollup-plugin    | required by vanilla-extract           |
| @vanilla-extract/vite-plugin      | vanilla-extract support for Vite      |
| @vanilla-extract/webpack-plugin   | required by vanilla-extract           |
| @vitejs/plugin-react              | React JSX transform for Vite          |
| babel-loader                      | Required by [@storybook/react][1]     |
| copyfiles                         | Copy static files to `dist`           |
| css-loader                        | Support importing css files           |
| dotenv-webpack                    | Required by Storybook for [bugfix][3] |
| html-webpack-plugin               | Provide html template to webpack      |
| jest                              | Unit & integration tests              |
| mini-css-extract-plugin           | vanilla-extract webpack integration   |
| oxfmt                             | Prettier-compatible formatter (replaces Prettier) |
| oxlint                            | Rust-based linter (replaces ESLint)   |
| react                             | React core                            |
| react-dom                         | React core                            |
| rollup                            | npm package bundler                   |
| storybook                         | Storybook CLI                         |
| style-loader                      | Support importing css files           |
| ts-loader                         | Required by webpack to parse jsx      |
| tslib                             | Runtime helpers for TypeScript output |
| typescript                        | Typescript language support           |
| webpack                           | Webpack core                          |
| webpack-cli                       | Required to run webpack commands      |
| vite                              | Build tool and dev server for Storybook |
| webpack-dev-server                | Development server                    |

## Runtime software versions

| Name | Version  |
| ---- | -------- |
| node | v22.16.0 |
| pnpm | 11.1.1   |

[1]: https://www.npmjs.com/package/@storybook/react
[2]: https://www.npmjs.com/package/react-scripts
[3]: https://github.com/storybookjs/storybook/issues/14497#issuecomment-856284772
