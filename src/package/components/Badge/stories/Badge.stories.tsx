import { Color } from "../../../foundation/Color/Color.js";
import { Badge } from "../Badge.js";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,

  parameters: {
    componentSubtitle: `This component can be used to render badge like 
    elements on a page such as labels, categories, and tags. It renders 
    as a <span> tag by default.`,
  },

  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Small: Story = {
  args: {
    children: "Small",
    size: "s",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium",
    size: "m",
    color: Color.blue11,
    backgroundColor: Color.blue1,
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "l",
    color: Color.yellow1,
    backgroundColor: Color.yellow10,
  },
};
