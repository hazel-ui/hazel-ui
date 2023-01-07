import { showToast } from "../../../Toast/Toast.js";
import { Search } from "../../Search.js";
import { SearchOptionType, SearchValueType } from "../../types.js";

export function EgFiltering() {
  return (
    <Search
      filterOption={filterOption}
      options={[
        { value: "entry1", label: "First Entry" },
        { value: "entry2", label: "Second Entry" },
        { value: "entry3", label: "Third Entry" },
      ]}
      onChange={(selectedOption: SearchValueType<SearchOptionType, false>) => {
        if (selectedOption) showToast("Selected: " + selectedOption.label);
        else showToast("Cleared");
      }}
    />
  );
}

function filterOption(option: SearchOptionType, inputValue: string) {
  const label = option.label.toLowerCase();
  const inputLength = inputValue.length;
  inputValue = inputValue.toLowerCase();
  if (label.slice(0, inputLength) === inputValue) return true;

  const labelWords = label.split(" ");
  for (const word of labelWords.slice(1)) {
    if (word.slice(0, inputLength) === inputValue) return true;
  }
  return false;
}
