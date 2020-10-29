import React from "react";
import { Story, Meta } from "@storybook/react";

import { Color } from "../../../foundation";

import { Badge, BadgeProps } from "../Badge";

import notes from "./notes.md";

export default {
  title: "Atoms/Badge",
  component: Badge,
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
  },
  parameters: {
    componentSubtitle:
      "This component can be used to render a <Badge> or an <a> tag for clickable items and hyperlinks on a page.",
    notes: { notes },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Badge",
  variant: "primary",
};

export const Tip = Template.bind({});
Tip.args = {
  children: "Tip",
  variant: "primary",
  size: "small",
  backgroundColor: "#E7FDD8",
  borderRadius: "1em",
  color: "#66BF3C",
};

export const Info = Template.bind({});
Info.args = {
  children: "Badge",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  children: "AWS",
};

export const SmallDanger = Template.bind({});
SmallDanger.args = {
  variant: "danger",
  size: "small",
  children: "Cloud",
};

export const LargeSuccess = Template.bind({});
LargeSuccess.args = {
  variant: "success",
  size: "large",
  children: "Tutorial",
};

export const Custom = Template.bind({});
Custom.args = {
  backgroundColor: Color.gainsboro,
  borderRadius: "30px",
  children: "Awesome",
  color: Color.midnightBlue,
  size: "large",
};
