import "../src/package/static/styles.css";
import "../src/package/static/fonts.css";

export const decorators = [
  (Story) => (
    <div className="dark">
      <Story />
    </div>
  ),
];

// TODO: Add storybook docs link for these parameters. Some may be outdated.
export const parameters = {
  backgrounds: {
    default: "dark",
  },
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
