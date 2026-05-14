import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { mergeConfig } from "vite";

export default {
  addons: ["@storybook/addon-essentials"],
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/*.mdx"],
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [react(), vanillaExtractPlugin()],
    });
  },
};
