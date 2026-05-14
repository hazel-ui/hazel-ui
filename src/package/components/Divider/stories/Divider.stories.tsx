import { Divider } from "../Divider.js";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Divider> = {
  argTypes: {
    color: { control: "color" },
    height: { control: "text" },
  },
  component: Divider,

  parameters: {
    componentSubtitle: `Component to create dividers/separators.`,
  },

  title: "Components/Divider",
};

type Story = StoryObj<typeof Divider>;

const Basic: Story = {};

export { Basic };
export default meta;
