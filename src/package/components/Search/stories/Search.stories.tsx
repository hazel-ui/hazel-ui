import { Meta, Story } from "@storybook/react";
import React from "react";
import { Search, SearchProps } from "../Search";
import notes from "./notes.md";

export default {
  title: "Atoms/Search",
  component: Search,
  parameters: {
    componentSubtitle:
      "This component can be used to render a <select> like element styled as a search box to present the user with a list of options to choose from a dropdown menu.",
    notes: { notes },
  },
  decorators: [
    (Story) => (
      <div style={{ marginBottom: "18rem" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  options: [
    { value: "entry1", label: "First Entry" },
    { value: "entry2", label: "Second Entry" },
    { value: "entry3", label: "Third Entry" },
    { value: "entry4", label: "Fourth Entry" },
    { value: "entry5", label: "Fifth Entry" },
    { value: "entry6", label: "Sixth Entry" },
  ],
};
