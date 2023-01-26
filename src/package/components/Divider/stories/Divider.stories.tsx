import { Divider } from "../Divider.js";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,

  parameters: {
    componentSubtitle: `Component to create dividers/separators.`,
  },

  argTypes: {
    color: { control: "color" },
    height: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Basic: Story = {};
