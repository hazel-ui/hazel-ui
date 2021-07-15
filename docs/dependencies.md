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
| @types/jest                       | Required for `expect()` in tests      |
| @types/node                       | Required by [@storybook/react][1]     |
| babel-loader                      | Required by [@storybook/react][1]     |
| copyfiles                         | Copy static files to `dist`           |
| css-loader                        | Support importing css files           |
| dotenv-webpack                    | Required by Storybook for [bugfix][3] |
| html-webpack-plugin               | Provide html template to webpack      |
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
