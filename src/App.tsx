import { useState } from "react";
import { Search, SearchOptionType, SearchValueType } from "./package";
import "./package/static/styles.css";

export function App() {
  const defaultEntry: SearchOptionType[] = [];
  const [selectedEntry, setSelectedEntry] = useState<SearchOptionType[]>(
    defaultEntry
  );

  return (
    <>
      <Search
        options={[
          { value: "entry1", label: "First Entry" },
          { value: "entry2", label: "Second Entry" },
          { value: "entry3", label: "Third Entry" },
        ]}
        onChange={(
          selectedOption: SearchValueType<SearchOptionType, boolean>
        ) => {
          if (selectedOption) {
            setSelectedEntry(selectedOption as SearchOptionType[]);
          } else setSelectedEntry(defaultEntry);
        }}
        isMulti
        closeMenuOnSelect={false}
      />
      {JSON.stringify(selectedEntry)}
    </>
  );
}
