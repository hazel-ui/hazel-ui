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
| @rollup/plugin-terser             | Minify the npm package                |
| @rollup/plugin-typescript         | TypeScript support for rollup         |
| @storybook/addon-docs             | MDX docs support for Storybook        |
| @storybook/addon-essentials       | storybook official addons             |
| @storybook/react                  | storybook core                        |
| @storybook/react-vite             | storybook Vite framework              |
| @types/jest                       | Required for `expect()` in tests      |
| @types/node                       | Required by [@storybook/react][1]     |
| @typescript-eslint/eslint-plugin  | typescript-eslint core                |
| @typescript-eslint/parser         | typescript-eslint parser              |
| @vanilla-extract/css              | static styles                         |
| @vanilla-extract/rollup-plugin    | required by vanilla-extract           |
| @vanilla-extract/vite-plugin      | vanilla-extract support for Vite      |
| @vanilla-extract/webpack-plugin   | required by vanilla-extract           |
| @vitejs/plugin-react              | React JSX transform for Vite          |
| babel-loader                      | Required by [@storybook/react][1]     |
| copyfiles                         | Copy static files to `dist`           |
| css-loader                        | Support importing css files           |
| dotenv-webpack                    | Required by Storybook for [bugfix][3] |
| eslint                            | eslint core                           |
| eslint-config-airbnb-typescript   | opinionated eslint config             |
| eslint-plugin-eslint-comments     | lint eslint directive comments        |
| eslint-plugin-import              | lint import ordering                  |
| eslint-plugin-jest                | lint jest tests                       |
| eslint-plugin-jest-formatting     | lint jest tests line paddings         |
| eslint-plugin-jsx-a11y            | lint accessibility                    |
| eslint-plugin-react               | lint react best practices             |
| eslint-plugin-react-hooks         | lint hooks best practices             |
| eslint-plugin-storybook           | lint Storybook story files            |
| eslint-plugin-unicorn             | lint Todo expiration dates            |
| html-webpack-plugin               | Provide html template to webpack      |
| jest                              | Unit & integration tests              |
| mini-css-extract-plugin           | vanilla-extract webpack integration   |
| postcss                           | integrates tailwind with webpack      |
| postcss-loader                    | integrates postcss with webpack       |
| prettier                          | Code formatter                        |
| react                             | React core                            |
| react-dom                         | React core                            |
| rollup                            | npm package bundler                   |
| storybook                         | Storybook CLI                         |
| style-loader                      | Support importing css files           |
| tailwindcss                       | styling utility                       |
| ts-loader                         | Required by webpack to parse jsx      |
| tslib                             | Runtime helpers for TypeScript output |
| typescript                        | Typescript language support           |
| webpack                           | Webpack core                          |
| webpack-cli                       | Required to run webpack commands      |
| vite                              | Build tool and dev server for Storybook |
| webpack-dev-server                | Development server                    |
| windy-radix-palette               | integrate radix colors with tailwind  |

## Runtime software versions

| Name | Version  |
| ---- | -------- |
| node | v22.16.0 |
| pnpm | 11.1.1   |

[1]: https://www.npmjs.com/package/@storybook/react
[2]: https://www.npmjs.com/package/react-scripts
[3]: https://github.com/storybookjs/storybook/issues/14497#issuecomment-856284772
