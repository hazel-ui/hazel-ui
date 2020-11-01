import React, { useState } from "react";
import { OptionType, Search } from "./components";

export function App() {
  const [selectedEntry, setSelectedEntry] = useState<OptionType>({
    value: null,
    label: "",
  });

  return (
    <div style={{ margin: "10px" }}>
      <Search onChange={setSelectedEntry} options={mockOptions} />
      Selected: {selectedEntry?.label}
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
