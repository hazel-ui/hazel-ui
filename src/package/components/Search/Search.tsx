import { useState } from "react";
import ReactSelect, { Props } from "react-select";

import { Color } from "../../foundation/Color/Color";
import {
  ClearIndicator,
  Control,
  IndicatorsContainer,
  NoOptionsMessage,
} from "./CustomComponents";
import {
  controlStyles,
  menuListStyles,
  menuStyles,
  noOptionsMessageStyles,
  optionStyles,
  placeholderStyles,
  valueContainerStyles,
} from "./styles";
import { SearchOptionType } from "./types";

export interface SearchProps<IsMulti extends boolean>
  extends Props<SearchOptionType, IsMulti> {
  floatingLabel?: string;
  noOptionsTitle?: string;
}

export function Search<IsMulti extends boolean>({
  floatingLabel = "Search",
  noOptionsTitle = "Invalid search",
  autoFocus = false,
  backspaceRemovesValue = true,
  captureMenuScroll = false,
  hideSelectedOptions = true,
  isClearable = true,
  isLoading = false,
  isSearchable = true,
  noOptionsMessage = () => "No results found for this search",
  placeholder = "",
  defaultValue,
  ...rest
}: SearchProps<IsMulti>) {
  const [invalidSearch, setInvalidSearch] = useState(false);
  return (
    <ReactSelect
      // custom props
      floatingLabel={floatingLabel}
      invalidSearch={invalidSearch}
      setInvalidSearch={setInvalidSearch}
      noOptionsTitle={noOptionsTitle}
      // custom components
      components={{
        ClearIndicator,
        Control,
        IndicatorsContainer,
        NoOptionsMessage,
      }}
      theme={(theme: any) => ({
        ...theme,
        colors: {
          ...theme.colors,
          neutral0: Color.gray3,
          neutral5: Color.gray2,
          neutral20: Color.gray9,
          neutral30: Color.gray6,
          neutral50: Color.gray10, // placeholder text color
          primary: Color.gray2, // border outline on focus and selected option in pop-up
          primary25: Color.gray4, // option hover color in pop-up
        },
      })}
      styles={{
        control: controlStyles,
        menu: menuStyles,
        menuList: menuListStyles,
        noOptionsMessage: noOptionsMessageStyles,
        option: optionStyles,
        placeholder: placeholderStyles,
        valueContainer: valueContainerStyles,
      }}
      // in-built props
      autoFocus={autoFocus}
      backspaceRemovesValue={backspaceRemovesValue}
      captureMenuScroll={captureMenuScroll}
      hideSelectedOptions={hideSelectedOptions}
      isClearable={isClearable}
      isLoading={isLoading}
      isSearchable={isSearchable}
      noOptionsMessage={noOptionsMessage}
      placeholder={placeholder}
      // menuIsOpen={true} // useful for development
      {...rest}
    />
  );
}
