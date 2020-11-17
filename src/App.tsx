import React, { useState } from "react";
import { Search, SearchOptionType, SearchValueType } from "./package";

export function App() {
  const defaultEntry = { value: "", label: "" };
  const [selectedEntry, setSelectedEntry] = useState<SearchOptionType>(
    defaultEntry
  );

  return (
    <>
      <Search
        filterOption={(option: SearchOptionType, inputValue: string) => {
          const label = option.label.toLowerCase();
          const inputLength = inputValue.length;
          if (label.slice(0, inputLength) === inputValue.toLowerCase())
            return true;

          const labelWords = label.split(" ");
          for (const word of labelWords.slice(1)) {
            if (word.slice(0, inputLength) === inputValue.toLowerCase())
              return true;
          }

          return false;
        }}
        options={[
          { value: "entry1", label: "First Entry" },
          { value: "entry2", label: "Second Entry" },
          { value: "entry3", label: "Third Entry" },
        ]}
        onChange={(selectedOption: SearchValueType<SearchOptionType>) => {
          if (selectedOption) {
            setSelectedEntry(selectedOption as SearchOptionType);
          } else setSelectedEntry(defaultEntry);
        }}
      />
      {selectedEntry?.label}
    </>
  );
}
