import { Search } from "../../Search.js";

export function EgMultiSelect() {
  return (
    <Search
      options={[
        { value: "entry1", label: "First Entry" },
        { value: "entry2", label: "Second Entry" },
        { value: "entry3", label: "Third Entry" },
      ]}
      isMulti
      closeMenuOnSelect={false}
    />
  );
}
