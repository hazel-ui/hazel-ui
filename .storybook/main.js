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

    // modify css rule of storybook to exclude Vanilla Extract files
    for (let i = 0; i < customConfig.module.rules.length; i++) {
      if (customConfig.module.rules[i].test.test("sample.css")) {
        customConfig.module.rules[i].exclude = /\.vanilla\.css$/i;
        break;
      }
    }

    customConfig.module.rules.push(
      baseConfig.module.rules[0], // Vanilla Extract
      baseConfig.module.rules[4] // TypeScript
    );

    customConfig.resolve.extensionAlias = baseConfig.resolve.extensionAlias;

    customConfig.plugins.push(...baseConfig.plugins.slice(1));

    return customConfig;
  },
};
