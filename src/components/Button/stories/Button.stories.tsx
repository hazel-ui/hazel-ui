import React from "react";
import { Story, Meta } from "@storybook/react";

import { Color } from "../../../foundation";

import { Button, ButtonProps } from "../Button";

import notes from "./notes.md";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
  },
  parameters: {
    componentSubtitle:
      "This component can be used to render a <button> or an <a> tag for clickable items and hyperlinks on a page.",
    notes: { notes },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Click me",
  onClick: () => {
    alert("Hey, good looking!");
  },
};

export const Small = Template.bind({});
Small.args = {
  variant: "secondary",
  size: "small",
  children: "Follow",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Button",
};

export const Custom = Template.bind({});
Custom.args = {
  size: "large",
  children: "Awesome",
  color: Color.white,
  backgroundColor: Color.black,
};
