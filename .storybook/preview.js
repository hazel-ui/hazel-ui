import React from "react";
import { GlobalStyles } from "../src/package";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  previewTabs: {
    canvas: {
      title: "Canvas",
      hidden: false,
    },
    docs: {
      hidden: false,
    },
  },
  viewMode: "docs",
};
