import { Color } from "../../../foundation/Color/Color.js";
import { Anchor } from "../Anchor.js";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Anchor> = {
  title: "Components/Anchor",
  component: Anchor,

  parameters: {
    componentSubtitle: `Link component for rendering styled <a> tags. All HTML
      attributes supported by the <a> tag can be passed as props. Visited links
      will appear in a different color.`,
  },

  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
    as: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Anchor>;

export const Basic: Story = {
  args: {
    children: "Never gonna give you up",
    href: "https://youtu.be/dQw4w9WgXcQ",
  },
};

export const CustomColors: Story = {
  args: {
    children: Basic.args?.children,
    color: Color.orange11,
    backgroundColor: Color.orange4,
  },
};
