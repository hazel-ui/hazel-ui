import HtmlWebpackPlugin from "html-webpack-plugin";

import { baseConfig } from "./webpack.common.mjs";

export default {
  ...baseConfig,
  entry: "./app/index.tsx",
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
