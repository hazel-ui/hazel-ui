import { showToast } from "../../../Toast/Toast.js";
import { Search } from "../../Search.js";

import type { SearchOptionType, SearchValueType } from "../../types.js";

export function EgSingleSelect() {
  return (
    <Search
      options={[
        { label: "First Entry", value: "entry1" },
        { label: "Second Entry", value: "entry2" },
        {
          label:
            "Third Entry is a very very long entry that demonstrate text truncations in case of overflow. Decrease screen width to view truncation.",
          value: "entry3",
        },
      ]}
      onChange={(selectedOption: SearchValueType<SearchOptionType, false>) => {
        if (selectedOption) showToast(`Selected: ${selectedOption.label}`);
        else showToast("Cleared");
      }}
    />
  );
}
