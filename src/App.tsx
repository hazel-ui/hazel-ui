import React, { useState } from "react";
import { OptionType, Search } from "./components";
import { Icon } from "./foundation";

export function App() {
  const [selectedEntry, setSelectedEntry] = useState<OptionType>({
    value: null,
    label: "",
  });

  return (
    <div style={{ margin: "10px" }}>
      <Search onChange={setSelectedEntry} options={mockOptions} />
      Selected: {selectedEntry?.label}
      <Icon.Search height="1.3rem" transform="rotate(45)" />
      <Icon.ArrowUp height="1.3rem" />
    </div>
  );
}

const mockOptions = [
  { value: "entry1", label: "First Entry" },
  { value: "entry2", label: "Second Entry" },
  { value: "entry3", label: "Third Entry" },
  { value: "entry4", label: "Fourth Entry" },
  { value: "entry5", label: "Fifth Entry" },
];
