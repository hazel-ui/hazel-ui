import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

// https://stackoverflow.com/a/50052194/7435656
const __dirnameCustom = dirname(fileURLToPath(import.meta.url));

export const baseConfig = {
  module: {
    rules: [
      // https://webpack.js.org/guides/asset-management/
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      // https://webpack.js.org/guides/typescript/
      {
        /*
         * Note: This rule is referenced in .storybook/main.js
         * If you change this, change it there too.
         */
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // https://webpack.js.org/guides/output-management/
  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirnameCustom, "build"),
    clean: true,
    hashFunction: "xxhash64", // https://stackoverflow.com/a/73465262/7435656
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".html"],
    extensionAlias: {
      ".js": [".tsx", ".ts", ".js"],
    },
  },
};
