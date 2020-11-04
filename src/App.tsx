import React, { useState } from "react";
import { Icon, OptionType, Search } from "./package";

export function App() {
  const [selectedEntry, setSelectedEntry] = useState<OptionType>({
    value: null,
    label: "",
  });

  return (
    <div style={{ margin: "10px" }}>
      <Search onChange={setSelectedEntry} options={mockOptions} />
      <div>Selected: {selectedEntry?.label}</div>
      <Icon.ArrowRight height="1.3rem" />
    </div>
  );
}

const mockOptions = [
  { value: "entry1", label: "First Entry" },
  { value: "entry2", label: "Second Entry" },
  { value: "entry3", label: "Third Entry" },
  { value: "entry4", label: "Fourth Entry" },
  { value: "entry5", label: "Fifth Entry" },
  { value: "entry6", label: "Sixth Entry" },
];
