import "../src/static/styles.css";
import "../src/static/fonts.css";

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
