import { Color } from "../../../foundation/Color/Color.js";
import { Anchor } from "../Anchor.js";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Anchor> = {
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
  component: Anchor,

  parameters: {
    componentSubtitle: `Link component for rendering styled <a> tags. All HTML
      attributes supported by the <a> tag can be passed as props. Visited links
      will appear in a different color.`,
  },

  title: "Components/Anchor",
};

type Story = StoryObj<typeof Anchor>;

const Basic: Story = {
  args: {
    children: "Never gonna give you up",
    href: "https://youtu.be/dQw4w9WgXcQ",
  },
};

const CustomColors: Story = {
  args: {
    backgroundColor: Color.orange4,
    children: Basic.args?.children,
    color: Color.orange11,
  },
};

export { Basic, CustomColors };
export default meta;
