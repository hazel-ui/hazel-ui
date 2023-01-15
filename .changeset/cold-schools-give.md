---
"hazel-ui": patch
---

fix: tree shaking

- switch to rollup for bundling the package
- added sideEffects package.json metadata to enable tree shaking
- added terser for minifying bundle
