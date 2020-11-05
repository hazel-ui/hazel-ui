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
      hidden: true,
    },
    docs: {
      hidden: false,
    },
  },
};
