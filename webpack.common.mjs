import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

// https://stackoverflow.com/a/50052194/7435656
const __dirname = dirname(fileURLToPath(import.meta.url));

export const baseConfig = {
  // https://webpack.js.org/guides/output-management/
  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirname, "build"),
    clean: true,
    hashFunction: "xxhash64", // https://stackoverflow.com/a/73465262/7435656
  },
};
