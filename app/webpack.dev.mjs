import { baseConfig } from "./webpack.base.mjs";

export default {
  ...baseConfig,
  /**
   * https://webpack.js.org/guides/development/#using-webpack-dev-server
   * Note: If using Express, consider webpack-dev-middleware instead
   * https://webpack.js.org/guides/development/#using-webpack-dev-middleware
   */
  devServer: {
    static: "../build",
    port: 3000, // https://webpack.js.org/configuration/dev-server/
  },
  target: "web", // https://stackoverflow.com/a/65928346/7435656
  devtool: "inline-source-map", // https://webpack.js.org/guides/typescript/#source-maps
  mode: "development", // https://webpack.js.org/guides/development/
};
