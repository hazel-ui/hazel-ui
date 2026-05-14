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

export default meta;
type Story = StoryObj<typeof Divider>;

export const Basic: Story = {};
