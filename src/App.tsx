import React, { useState } from "react";
import {
  Color,
  Layout,
  Search,
  SearchOptionType,
  SearchValueType,
} from "./package";

export function App() {
  const defaultEntry = { value: "", label: "" };
  const [selectedEntry, setSelectedEntry] = useState<SearchOptionType>(
    defaultEntry
  );

  return (
    <>
      <Layout margin="2rem">
        <Search
          options={[
            { value: "entry1", label: "First Entry" },
            { value: "entry2", label: "Second Entry" },
            { value: "entry3", label: "Third Entry" },
            { value: "entry3", label: "Third Entry" },
            { value: "entry3", label: "Third Entry" },
            { value: "entry3", label: "Third Entry" },
          ]}
          onChange={(selectedOption: SearchValueType<SearchOptionType>) => {
            if (selectedOption) {
              setSelectedEntry(selectedOption as SearchOptionType);
            } else setSelectedEntry(defaultEntry);
          }}
          theme={(theme: any) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: Color.crimson,
            },
          })}
        />
        <div> {selectedEntry?.label}</div>
      </Layout>
    </>
  );
}
