---
"hazel-ui": patch
---

fix: package exports and ESM support

- remove airbnb-typescript config from eslint
- upgrade storybook to v7 for esm support
- add storybook webpack config override for "type: module"
- remove tailwindcss, postcss, postcss-loader, radix colors, windy-radix
- add .js file extensions to all relative imports
- modify exports field format to specify both default and types
- remove rename script from package build, removed renamer
- upgrade styled-components to v6 for named import
- upgrade types: react, react-dom, styled-components
- upgrade css-loader, webpack-cli, webpack-dev-server
- change styled imports to named imports
- remove styled-system from Badge, Button
- remove remaining barrel files
- changed module to NodeNext in tsconfig
- add extensionAlias for typescript .js imports in webpack config
