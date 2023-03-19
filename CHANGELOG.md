# hazel-ui

## 0.4.5

### Patch Changes

- [#196](https://github.com/hazel-ui/hazel-ui/pull/196) [`d530ff2`](https://github.com/hazel-ui/hazel-ui/commit/d530ff256aec6d2bd136f6ab27aff07d9d0b0881) Thanks [@cseas](https://github.com/cseas)! - feat: migrate Card to static css

  - added new props to sx: width, color, backgroundColor

## 0.4.4

### Patch Changes

- [#194](https://github.com/hazel-ui/hazel-ui/pull/194) [`49c26b9`](https://github.com/hazel-ui/hazel-ui/commit/49c26b9cd67964c1fa8dd45166726b75cd86ea5a) Thanks [@cseas](https://github.com/cseas)! - fix: types exports for node10

## 0.4.3

### Patch Changes

- [#192](https://github.com/hazel-ui/hazel-ui/pull/192) [`162aa5c`](https://github.com/hazel-ui/hazel-ui/commit/162aa5ce80579710b38972a1bf7154f7f5a920ae) Thanks [@cseas](https://github.com/cseas)! - fix: add declaration file for static exports

## 0.4.2

### Patch Changes

- [#190](https://github.com/hazel-ui/hazel-ui/pull/190) [`c60d857`](https://github.com/hazel-ui/hazel-ui/commit/c60d857a7524351e2f149013367ecd734a18a8b7) Thanks [@cseas](https://github.com/cseas)! - fix: order of types in exports

## 0.4.1

### Patch Changes

- [#188](https://github.com/hazel-ui/hazel-ui/pull/188) [`3f87511`](https://github.com/hazel-ui/hazel-ui/commit/3f875117cfc2df40d529cd790a46c82b46ead6ab) Thanks [@cseas](https://github.com/cseas)! - feat: add support for deep importing components individually

  - add eslint rule import/no-extreneous-dependencies
  - remove redundant override for stories files
  - add wildcart exports config to root package.json
  - enable beautify option in terser for better debugging
  - add individual exports for each component
  - add Space tokens based on Tailwind
  - changed Typography tokens based on feedback
  - fix table render warning in MediaQuery story

## 0.4.0

### Minor Changes

- [#186](https://github.com/hazel-ui/hazel-ui/pull/186) [`92a1288`](https://github.com/hazel-ui/hazel-ui/commit/92a128856de0b2dc26d6d7069b58fd240e5c7f70) Thanks [@cseas](https://github.com/cseas)! - feat: static css & 'as' prop for Typography

  - remove `@media` from MediaQuery
  - change desktop breakpoint to 840
  - new MediaQuery story with Vanilla Extract example
  - static styles for Typography with Vanilla Extract
  - support for `as` prop in Typography

## 0.3.0

### Minor Changes

- [#183](https://github.com/hazel-ui/hazel-ui/pull/183) [`0bbdcfc`](https://github.com/hazel-ui/hazel-ui/commit/0bbdcfcde65b39b95dea8135dd5c6630b011e889) Thanks [@cseas](https://github.com/cseas)! - feat: add Divider component and story

### Patch Changes

- [#183](https://github.com/hazel-ui/hazel-ui/pull/183) [`0bbdcfc`](https://github.com/hazel-ui/hazel-ui/commit/0bbdcfcde65b39b95dea8135dd5c6630b011e889) Thanks [@cseas](https://github.com/cseas)! - feat: add display to sx prop

## 0.2.9

### Patch Changes

- [#181](https://github.com/hazel-ui/hazel-ui/pull/181) [`a8c2499`](https://github.com/hazel-ui/hazel-ui/commit/a8c24994c237a78a7fed3301b45f4cf2e314398c) Thanks [@cseas](https://github.com/cseas)! - fix: anchor default border style

## 0.2.8

### Patch Changes

- [#179](https://github.com/hazel-ui/hazel-ui/pull/179) [`6f9313e`](https://github.com/hazel-ui/hazel-ui/commit/6f9313e5244f70438404c24238365f0a8b0b4321) Thanks [@cseas](https://github.com/cseas)! - feat: rewrite anchor to use static styles

  - move webpack configs to app directory
  - modify storybook webpack config to support vanilla extract

## 0.2.7

### Patch Changes

- [#178](https://github.com/hazel-ui/hazel-ui/pull/178) [`eab2edd`](https://github.com/hazel-ui/hazel-ui/commit/eab2edd844d033472ddd0d9c684594ea9b50a164) Thanks [@cseas](https://github.com/cseas)! - fix: tree shaking

  - switch to rollup for bundling the package
  - added sideEffects package.json metadata to enable tree shaking
  - added terser for minifying bundle

- [#175](https://github.com/hazel-ui/hazel-ui/pull/175) [`7d411e9`](https://github.com/hazel-ui/hazel-ui/commit/7d411e9386c7bd33743b115111971cffe30519f2) Thanks [@cseas](https://github.com/cseas)! - chore: remove Box component

## 0.2.6

### Patch Changes

- [#173](https://github.com/hazel-ui/hazel-ui/pull/173) [`e17d8b1`](https://github.com/hazel-ui/hazel-ui/commit/e17d8b1ff3b8fc7ba55898368454bbf05588e9ef) Thanks [@cseas](https://github.com/cseas)! - fix: types metadata in package.json

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
