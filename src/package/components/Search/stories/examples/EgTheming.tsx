import { Color } from "../../../../foundation/Color/Color.js";
import { showToast } from "../../../Toast/Toast.js";
import { Search } from "../../Search.js";

import type { SearchOptionType, SearchValueType } from "../../types.js";
import type { Theme } from "react-select";

export function EgTheming() {
  return (
    <Search
      options={[
        { label: "First Entry", value: "entry1" },
        { label: "Second Entry", value: "entry2" },
        { label: "Third Entry", value: "entry3" },
        { label: "Fourth Entry", value: "entry4" },
        { label: "Fifth Entry", value: "entry5" },
        { label: "Sixth Entry", value: "entry6" },
      ]}
      onChange={(selectedOption: SearchValueType<SearchOptionType, false>) => {
        if (selectedOption) showToast(`Selected: ${selectedOption.label}`);
        else showToast("Cleared");
      }}
      theme={(theme: Theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          neutral0: Color.gray3,
          neutral20: Color.gray7,
          neutral30: Color.gray8,
          neutral5: Color.gray4,
          neutral50: Color.gray11,
          primary: Color.blue8,
          primary25: Color.blue6,
        },
      })}
    />
  );
}
