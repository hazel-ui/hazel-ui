import { useState } from "react";
import { Search } from "../../Search";
import { SearchOptionType, SearchValueType } from "../../types";

export function EgMultiSelectLimit() {
  const defaultEntry: SearchOptionType[] = [];
  const [selectedEntry, setSelectedEntry] = useState<
    readonly SearchOptionType[]
  >(defaultEntry);

  return (
    <Search
      options={
        selectedEntry.length > 1
          ? []
          : [
              { value: "entry1", label: "First Entry" },
              { value: "entry2", label: "Second Entry" },
              { value: "entry3", label: "Third Entry" },
            ]
      }
      onChange={(selectedOption: SearchValueType<SearchOptionType, true>) => {
        if (selectedOption) {
          setSelectedEntry(selectedOption);
        } else setSelectedEntry(defaultEntry);
      }}
      isMulti
      closeMenuOnSelect={false}
    />
  );
}
