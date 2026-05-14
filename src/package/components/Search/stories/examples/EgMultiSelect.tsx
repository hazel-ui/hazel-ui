import { Search } from "../../Search.js";

export function EgMultiSelect() {
  return (
    <Search
      options={[
        { label: "First Entry", value: "entry1" },
        { label: "Second Entry", value: "entry2" },
        { label: "Third Entry", value: "entry3" },
      ]}
      isMulti
      closeMenuOnSelect={false}
    />
  );
}
