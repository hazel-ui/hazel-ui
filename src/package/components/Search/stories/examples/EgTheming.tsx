import { Color } from "../../../../foundation";
import { showToast } from "../../../Toast";
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
          neutral0: Color.whiteSmoke,
          neutral5: Color.white,
          neutral20: Color.silver,
          neutral30: Color.gainsboro,
          neutral50: Color.grey,
          primary: Color.white,
          primary25: Color.royalBlue,
        },
      })}
    />
  );
}
