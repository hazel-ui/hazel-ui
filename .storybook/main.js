module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
    disableTelemetry: true, // https://storybook.js.org/docs/react/configure/telemetry#how-to-opt-out
  },
};
