import { Typography } from "../../../foundation/Typography/Typography.js";
import { Card } from "../Card.js";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  component: Card,
  parameters: {
    componentSubtitle: `This is a simple container with a shadow that 
      can be used to create card-like elements.`,
  },

  title: "Components/Card",
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
          alt="Pikachu"
          width={100}
        />
        <Typography variant="title">Pikachu</Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Type</Typography>
          <Typography>Electric</Typography>
        </div>
      </>
    ),
    sx: { textAlign: "center" },
    width: "200px",
  },
};
