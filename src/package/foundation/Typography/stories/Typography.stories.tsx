import { Typography } from "../Typography.js";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  title: "Foundation/Typography",
  component: Typography,

  parameters: {
    // TODO: Rewrite description in MDX
    // MDX is broken right now: https://github.com/storybookjs/storybook/issues/20496
    componentSubtitle: `This component can be used to render all text-based elements
      on a page such as headings, paragraphs, captions, and labels. The rendered text 
      will adjust size automatically based on screen size. For usage instructions, 
      refer: https://m3.material.io/styles/typography/applying-type`,
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Display: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    variant: "display",
  },
};

export const Headline: Story = {
  args: { children: Display.args?.children, variant: "headline" },
};

export const Title: Story = {
  args: { children: Display.args?.children, variant: "title" },
};

export const Label: Story = {
  args: { children: Display.args?.children, variant: "label" },
};

export const Body: Story = {
  args: { children: Display.args?.children, variant: "body" },
};
