import React from "react";
import { Story, Meta } from "@storybook/react";

import { Typography, TypographyProps } from "../Typography";

import notes from "./notes.md";

export default {
  title: "Foundation/Typography",
  component: Typography,
  parameters: {
    componentSubtitle:
      "This component can be used to render all text-based elements on a page such as headings, paragraphs, captions, and labels.",
    notes: { notes },
  },
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Display = Template.bind({});
Display.args = {
  variant: "display",
  children: "Could a computer ever create better art than a human?",
};

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: "h1",
  children: "Could a computer ever create better art than a human?",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: "h2",
  children: "Could a computer ever create better art than a human?",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: "h3",
  children: "Could a computer ever create better art than a human?",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  variant: "h4",
  children: "Could a computer ever create better art than a human?",
};

export const Heading5 = Template.bind({});
Heading5.args = {
  variant: "h5",
  children: "Could a computer ever create better art than a human?",
};

export const Heading6 = Template.bind({});
Heading6.args = {
  variant: "h6",
  children: "Could a computer ever create better art than a human?",
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: "p",
  children: "Could a computer ever create better art than a human?",
};

export const Caption = Template.bind({});
Caption.args = {
  variant: "caption",
  children: "Could a computer ever create better art than a human?",
};

export const Label = Template.bind({});
Label.args = {
  variant: "label",
  children: "Could a computer ever create better art than a human?",
};
