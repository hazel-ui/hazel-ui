import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";

import glob from "glob";
import path from "path";
import { fileURLToPath } from "url";

export default defineConfig({
  // TODO: Consider turning every component to an export and removing preserveModules
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

  // TODO: Consider terser for minifying output to reduce package size
  output: {
    dir: "dist-lib",
    format: "es",
    generatedCode: "es2015",
    preserveModules: true,
  },

  plugins: [typescript({ tsconfig: "src/package/tsconfig.json" })],
});
