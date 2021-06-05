import "../src/package/static/styles.css";

export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
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
