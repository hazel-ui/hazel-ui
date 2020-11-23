# Packages

The below table explains why certain dependencies are required by the project in case their purpose isn't clear.

## Dependencies

| Package name                   | Purpose                       |
| ------------------------------ | ----------------------------- |
| @bbc/gel-foundations           | Responsive text in Typography |
| @styled-icons/boxicons-regular | Base for Icon                 |
| react-select                   | Base for Search               |

[]()

## Dev Dependencies

| Package name | Purpose                                                |
| ------------ | ------------------------------------------------------ |
| @types/node  | Required by [@storybook/react][1]                      |
| babel-loader | Required by [@storybook/react][1] & [react-scripts][2] |
| copyfiles    | Copies static files in `postbuild:package` script      |

[1]: https://www.npmjs.com/package/@storybook/react
[2]: https://www.npmjs.com/package/react-scripts
