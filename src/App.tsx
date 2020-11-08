import React, { useState } from "react";
import { Search, SearchOptionType, SearchValueType } from "./package";

export function App() {
  const [selectedEntry, setSelectedEntry] = useState<SearchOptionType>({
    value: "",
    label: "",
  });

  const [selectedEntry2, setSelectedEntry2] = useState<SearchOptionType[]>([
    {
      value: "",
      label: "",
    },
  ]);

  return (
    <div style={{ margin: "10px" }}>
      <Search
        onChange={(selectedOption: SearchValueType<SearchOptionType>) => {
          setSelectedEntry(selectedOption as SearchOptionType);
        }}
        options={mockOptions}
      />
      <div>Selected: {selectedEntry?.label}</div>
      <Search
        onChange={(selectedOption: SearchValueType<SearchOptionType>) => {
          setSelectedEntry2(selectedOption as SearchOptionType[]);
        }}
        options={mockOptions}
        isMulti
        closeMenuOnSelect={false}
      />
      <div>MultiSelected: {JSON.stringify(selectedEntry2)}</div>
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
