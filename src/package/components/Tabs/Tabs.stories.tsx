import React, { useState } from "react";

import { Tabs } from "./Tabs.js";

import type { Meta, StoryObj } from "@storybook/react";


const meta: Meta = {
  title: "Atoms/Tabs",
};
export default meta;

export const Overview: StoryObj = {
  render: () => (
    <Tabs.Root defaultValue={0}>
      <Tabs.List aria-label="tabs">
        <Tabs.Tab value={0}>One</Tabs.Tab>
        <Tabs.Tab value={1}>Two</Tabs.Tab>
        <Tabs.Tab value={2}>Three</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={0}>Tab one content</Tabs.Panel>
      <Tabs.Panel value={1}>Tab two content</Tabs.Panel>
      <Tabs.Panel value={2}>Tab three content</Tabs.Panel>
    </Tabs.Root>
  ),
};

export const Controlled: StoryObj = {
  render: () => {
    const [value, setValue] = useState("0");
    return (
      <>
        <label htmlFor="tab">Drag slider to change tab:</label>
        <input
          type="range"
          id="tab"
          name="tab"
          min="0"
          max="2"
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)}
        />
        <Tabs.Root value={value} onValueChange={(value) => setValue(value)}>
          <Tabs.List aria-label="tabs">
            <Tabs.Tab value="0">One</Tabs.Tab>
            <Tabs.Tab value="1">Two</Tabs.Tab>
            <Tabs.Tab value="2">Three</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="0">Tab one content</Tabs.Panel>
          <Tabs.Panel value="1">Tab two content</Tabs.Panel>
          <Tabs.Panel value="2">Tab three content</Tabs.Panel>
        </Tabs.Root>
      </>
    );
  },
};
