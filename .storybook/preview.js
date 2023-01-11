import "../src/package/static/styles.css";
import "../src/package/static/fonts.css";

export const decorators = [
  (Story) => (
    <div className="dark">
      <Story />
    </div>
  ),
];

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/backgrounds#configuration
  backgrounds: {
    default: "dark",
  },
};
