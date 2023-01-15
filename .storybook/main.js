import { baseConfig } from "../app/webpack.base.mjs";

export default {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    const customConfig = { ...config };
    customConfig.module.rules.push({
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    });
    customConfig.resolve.extensionAlias = baseConfig.resolve.extensionAlias;
    return customConfig;
  },
};
