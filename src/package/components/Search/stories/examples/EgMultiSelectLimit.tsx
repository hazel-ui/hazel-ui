import { useState } from "react";

import { Search } from "../../Search.js";

import type { SearchOptionType, SearchValueType } from "../../types.js";

export function EgMultiSelectLimit() {
  const defaultEntry: SearchOptionType[] = [];
  const [selectedEntry, setSelectedEntry] = useState<readonly SearchOptionType[]>(defaultEntry);

  return (
    <Search
      options={
        selectedEntry.length > 1
          ? []
          : [
              { label: "First Entry", value: "entry1" },
              { label: "Second Entry", value: "entry2" },
              { label: "Third Entry", value: "entry3" },
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
