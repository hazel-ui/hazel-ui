# Packages

The below table explains why certain dependencies are required by the project in case their purpose isn't clear.

## Dependencies

| Package name                   | Purpose                       |
| ------------------------------ | ----------------------------- |
| @bbc/gel-foundations           | Responsive text in Typography |
| @radix-ui/react-tabs           | Base for Tabs                 |
| @styled-icons/boxicons-regular | Base for Icon                 |
| @styled-icons/boxicons-solid   | Base for Icon                 |
| rc-slider                      | Base for Slider               |
| react-select                   | Base for Search               |

[]()

## Dev Dependencies

| Package name                      | Purpose                               |
| --------------------------------- | ------------------------------------- |
| @babel/core                       | Required by Storybook to parse jsx    |
| @babel/plugin-transform-react-jsx | Required by Storybook to parse jsx    |
| @storybook/builder-webpack5       | Storybook webpack 5 support           |
| @storybook/manager-webpack5       | [Chromatic webpack 5 support][4]      |
| @types/jest                       | Required for `expect()` in tests      |
| @types/node                       | Required by [@storybook/react][1]     |
| @typescript-eslint/eslint-plugin  | typescript-eslint core                |
| @typescript-eslint/parser         | typescript-eslint parser              |
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
| eslint-plugin-unicorn             | lint Todo expiration dates            |
| html-webpack-plugin               | Provide html template to webpack      |
| jest                              | Unit & integration tests              |
| prettier                          | Code formatter                        |
| react                             | React core                            |
| react-dom                         | React core                            |
| style-loader                      | Support importing css files           |
| ts-loader                         | Required by webpack to parse jsx      |
| typescript                        | Typescript language support           |
| webpack                           | Webpack core                          |
| webpack-cli                       | Required to run webpack commands      |
| webpack-dev-server                | Development server                    |

[1]: https://www.npmjs.com/package/@storybook/react
[2]: https://www.npmjs.com/package/react-scripts
[3]: https://github.com/storybookjs/storybook/issues/14497#issuecomment-856284772
[4]: https://gist.github.com/shilman/8856ea1786dcd247139b47b270912324#upgrading-from-62-webpack-5
