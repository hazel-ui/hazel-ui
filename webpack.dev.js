// https://github.com/webpack/webpack/issues/1403#issuecomment-799346606
import HtmlWebpackPlugin from "html-webpack-plugin";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

// https://stackoverflow.com/a/50052194/7435656
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  // https://webpack.js.org/guides/development/#using-webpack-dev-server
  devServer: {
    contentBase: "./build",
    // https://webpack.js.org/configuration/dev-server/
    port: 3000,
  },
  devtool: "inline-source-map",
  entry: "./app/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirname, "build"),
    clean: true,
  },
};
