import { Color } from "../../../../foundation/Color/Color";
import { showToast } from "../../../Toast/Toast";
import { Search } from "../../Search";
import { SearchOptionType, SearchValueType } from "../../types";

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
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          neutral0: Color.gray3,
          neutral5: Color.gray2,
          neutral20: Color.gray9,
          neutral30: Color.gray4,
          neutral50: Color.gray6,
          primary: Color.gray2,
          primary25: Color.blue6,
        },
      })}
    />
  );
}
