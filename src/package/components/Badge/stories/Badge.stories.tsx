import { Color } from "../../../foundation/Color/Color.js";
import { Badge } from "../Badge.js";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
  component: Badge,

  parameters: {
    componentSubtitle: `This component can be used to render badge like
    elements on a page such as labels, categories, and tags. It renders
    as a <span> tag by default.`,
  },

  title: "Components/Badge",
};

type Story = StoryObj<typeof Badge>;

const Small: Story = {
  args: {
    children: "Small",
    size: "s",
  },
};

const Medium: Story = {
  args: {
    backgroundColor: Color.blue1,
    children: "Medium",
    color: Color.blue11,
    size: "m",
  },
};

const Large: Story = {
  args: {
    backgroundColor: Color.yellow10,
    children: "Large",
    color: Color.yellow1,
    size: "l",
  },
};

export { Small, Medium, Large };
export default meta;
