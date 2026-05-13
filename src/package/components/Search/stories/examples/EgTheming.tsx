import { Color } from "../../../../foundation/Color/Color.js";
import { showToast } from "../../../Toast/Toast.js";
import { Search } from "../../Search.js";
import { SearchOptionType, SearchValueType } from "../../types.js";

import type { Theme } from "react-select";

export function EgTheming() {
  return (
    <Search
      options={[
        { value: "entry1", label: "First Entry" },
        { value: "entry2", label: "Second Entry" },
        { value: "entry3", label: "Third Entry" },
        { value: "entry4", label: "Fourth Entry" },
        { value: "entry5", label: "Fifth Entry" },
        { value: "entry6", label: "Sixth Entry" },
      ]}
      onChange={(selectedOption: SearchValueType<SearchOptionType, false>) => {
        if (selectedOption) showToast("Selected: " + selectedOption.label);
        else showToast("Cleared");
      }}
      theme={(theme: Theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          neutral0: Color.gray3,
          neutral5: Color.gray4,
          neutral20: Color.gray7,
          neutral30: Color.gray8,
          neutral50: Color.gray11,
          primary: Color.blue8,
          primary25: Color.blue6,
        },
      })}
    />
  );
}
