import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import glob from "glob";
import path from "path";
import { defineConfig } from "rollup";
import { fileURLToPath } from "url";

import pkg from "./package.json" assert { type: "json" };

export default defineConfig({
  // https://rollupjs.org/guide/en/#importing-packagejson
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
    "react/jsx-runtime",
  ],
  // https://rollupjs.org/guide/en/#input
  input: Object.fromEntries(
    glob.sync("src/package/**/!(*.stories|*.test).@(ts|tsx)").map((file) => [
      // This remove `src/package` as well as the file extension from each file
      // e.g. src/package/nested/foo.ts becomes nested/foo
      path.relative(
        "src/package",
        file.slice(0, file.length - path.extname(file).length)
      ),
      // This expands the relative paths to absolute paths
      // e.g. src/nested/foo becomes /project/src/nested/foo.ts
      fileURLToPath(new URL(file, import.meta.url)),
    ])
  ),

  output: {
    dir: "dist",
    generatedCode: "es2015",
    hoistTransitiveImports: false, // don't add additional imports to entry files
  },

  plugins: [
    typescript({ tsconfig: "src/package/tsconfig.json" }),
    terser({ ecma: 2020 }), // https://github.com/terser/terser#compress-options
  ],
});
