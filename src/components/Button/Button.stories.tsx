import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
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
  color: "crimson",
  backgroundColor: "azure",
};
