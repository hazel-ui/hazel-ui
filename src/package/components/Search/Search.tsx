import { useState } from "react";
import ReactSelect, { Props } from "react-select";
import { Color } from "../../foundation";
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

export interface SearchProps extends Props {
  floatingLabel?: string;
  noOptionsTitle?: string;
}

export function Search({
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
  ...rest
}: SearchProps) {
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
          neutral0: Color.whiteSmoke,
          neutral5: Color.white,
          neutral20: Color.silver,
          neutral30: Color.gainsboro,
          neutral50: Color.grey,
          primary: Color.white, // border outline on focus and selected option in pop-up
          primary25: Color.grey, // option hover color in pop-up
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
