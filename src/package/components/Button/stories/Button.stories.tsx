import { Color } from "../../../foundation/Color/Color.js";
import { Button } from "../Button.js";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,

  parameters: {
    componentSubtitle: `This component can be used to render a <button> 
      or an <a> tag for clickable items and hyperlinks on a page.`,
  },

  argTypes: {
    variantColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "m",
    onClick: () => alert("Hey, good looking!"),
  },
};

export const Secondary: Story = {
  args: {
    children: "Follow",
    variant: "secondary",
    size: "s",
  },
};

export const CustomColors: Story = {
  args: {
    children: "Discord",
    variantColor: Color.purple9,
    size: "l",
  },
};
