// https://github.com/webpack/webpack/issues/1403#issuecomment-799346606
import HtmlWebpackPlugin from "html-webpack-plugin";

import { baseConfig } from "./webpack.common.mjs";

export default {
  ...baseConfig,
  /**
   * https://webpack.js.org/guides/development/#using-webpack-dev-server
   * Note: If using Express, consider webpack-dev-middleware instead
   * https://webpack.js.org/guides/development/#using-webpack-dev-middleware
   */
  devServer: {
    contentBase: "./build",
    port: 3000, // https://webpack.js.org/configuration/dev-server/
  },
  target: "web", // https://stackoverflow.com/a/65928346/7435656
  devtool: "inline-source-map", // https://webpack.js.org/guides/typescript/#source-maps
  entry: "./app/index.tsx",
  mode: "development", // https://webpack.js.org/guides/development/
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
