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
  // https://webpack.js.org/guides/typescript/#source-maps
  devtool: "inline-source-map",
  entry: "./app/index.tsx",
  mode: "development",
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
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // https://webpack.js.org/guides/output-management/
  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirname, "build"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
