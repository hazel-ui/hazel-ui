import { Tooltip } from "../Tooltip.js";

import type { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof Tooltip> = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  argTypes: {
    tooltipBackground: { control: "color" },
    tooltipColor: { control: "color" },
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: "Hover to see tooltip",
    content: "Tooltip text",
  },
};

export const Directions: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center", margin: "2rem" }}>
      <Tooltip content="Hello from the other side!" direction="top">Top</Tooltip>
      <Tooltip content="Hello from the other side!" direction="right">Right</Tooltip>
      <Tooltip content="Hello from the other side!" direction="bottom">Bottom</Tooltip>
      <Tooltip content="Hello from the other side!" direction="left">Left</Tooltip>
    </div>
  ),
};
