# hazel-ui

## 0.2.5

### Patch Changes

- [#171](https://github.com/hazel-ui/hazel-ui/pull/171) [`a7959ae`](https://github.com/hazel-ui/hazel-ui/commit/a7959ae077a96431da309c5c5f2544e410279e21) Thanks [@cseas](https://github.com/cseas)! - feat: switch to Material Typography

  - cleanup addons in storybook/main.js config
  - add fonst css import to storybook
  - switch to dark background in storybook
  - remove old parameters from storybook preview.js
  - remove @bbc/gel-foundations
  - remove storybook addons except essentials
  - improve Anchor color contrast
  - remove maxWidth media queries
  - remove minWidth mobile breakpoint
  - add Inter var font
  - add GitHub Primer fallback fonts

## 0.2.4

### Patch Changes

- [#169](https://github.com/hazel-ui/hazel-ui/pull/169) [`4f28a5a`](https://github.com/hazel-ui/hazel-ui/commit/4f28a5a88bfce3d7e6fc85b55403e62e38a71c64) Thanks [@cseas](https://github.com/cseas)! - fix: peer dependencies for react

## 0.2.3

### Patch Changes

- [#167](https://github.com/hazel-ui/hazel-ui/pull/167) [`1dff6c5`](https://github.com/hazel-ui/hazel-ui/commit/1dff6c533fdfb603c7c3155034e44086bbe36f75) Thanks [@cseas](https://github.com/cseas)! - fix: package exports and ESM support

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

## 0.2.2

### Patch Changes

- [#164](https://github.com/hazel-ui/hazel-ui/pull/164) [`d6dc5ba`](https://github.com/hazel-ui/hazel-ui/commit/d6dc5ba96a10950eff8b2cd8351a3ee0e70704ad) Thanks [@cseas](https://github.com/cseas)! - refactor: remove barrel files

  - removed barrel files that were causing issues with node for directory imports in mjs files
  - improved contrast of Anchor color

## 0.2.1

### Patch Changes

- [#162](https://github.com/hazel-ui/hazel-ui/pull/162) [`cb8a802`](https://github.com/hazel-ui/hazel-ui/commit/cb8a8020e60b4f90878b7bdd50f145e9df8cc46f) Thanks [@cseas](https://github.com/cseas)! - fix: package esm format

  - Modified build output for package to be correctly detected as ESM as reported by publint.
  - Added root export for styles.css

## 0.2.0

### Minor Changes

- [#160](https://github.com/hazel-ui/hazel-ui/pull/160) [`94c3c37`](https://github.com/hazel-ui/hazel-ui/commit/94c3c370098e44bb5302f327070a7bb35f3b14a0) Thanks [@cseas](https://github.com/cseas)! - feat: add color prop to Typography

  - eslint config: remove enum naming rule
  - updated Color enum based on Radix Colors
  - added dark mode color equivalents
  - change main to module in package.json
  - remove normalize.css
  - add dark mode support to Typography
  - removeComments set to false in tsconfig for package build

## 0.1.0

### Minor Changes

- [#158](https://github.com/hazel-ui/hazel-ui/pull/158) [`95e5328`](https://github.com/hazel-ui/hazel-ui/commit/95e5328ef6c738c6a4858d83a766e63ac7f8c504) Thanks [@cseas](https://github.com/cseas)! - feat: add sx prop to Typography

  - removed styled-system props from Typography
