import { showToast } from "../../../Toast";
import { Search } from "../../Search";
import { SearchOptionType, SearchValueType } from "../../types";

export function EgSingleSelect() {
  return (
    <Search
      options={[
        { value: "entry1", label: "First Entry" },
        { value: "entry2", label: "Second Entry" },
        {
          value: "entry3",
          label:
            "Third Entry is a very very long entry that demonstrate text truncations in case of overflow. Decrease screen width to view truncation.",
        },
      ]}
      onChange={(selectedOption: SearchValueType<SearchOptionType, false>) => {
        if (selectedOption) showToast("Selected: " + selectedOption.label);
        else showToast("Cleared");
      }}
    />
  );
}
