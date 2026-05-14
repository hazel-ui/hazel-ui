import { Color } from "../../../foundation/Color/Color.js";
import { Button } from "../Button.js";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  argTypes: {
    variantColor: { control: "color" },
  },
  component: Button,

  parameters: {
    componentSubtitle: `This component can be used to render a <button>
      or an <a> tag for clickable items and hyperlinks on a page.`,
  },

  title: "Components/Button",
};

type Story = StoryObj<typeof Button>;

const Primary: Story = {
  args: {
    children: "Button",
    onClick: () => alert("Hey, good looking!"),
    size: "m",
    variant: "primary",
  },
};

const Secondary: Story = {
  args: {
    children: "Follow",
    size: "s",
    variant: "secondary",
  },
};

const CustomColors: Story = {
  args: {
    children: "Discord",
    size: "l",
    variantColor: Color.purple9,
  },
};

export { Primary, Secondary, CustomColors };
export default meta;
