import { useState } from "react";
import ReactSelect, { Props } from "react-select";

import { Color } from "../../foundation/Color/Color.js";
import { ClearIndicator } from "./CustomComponents/ClearIndicator.js";
import { Control } from "./CustomComponents/Control.js";
import { IndicatorsContainer } from "./CustomComponents/IndicatorsContainer.js";
import { NoOptionsMessage } from "./CustomComponents/NoOptionsMessage.js";
import { controlStyles } from "./styles/controlStyles.js";
import { menuListStyles } from "./styles/menuListStyles.js";
import { menuStyles } from "./styles/menuStyles.js";
import { noOptionsMessageStyles } from "./styles/noOptionsMessageStyles.js";
import { optionStyles } from "./styles/optionStyles.js";
import { placeholderStyles } from "./styles/placeholderStyles.js";
import { valueContainerStyles } from "./styles/valueContainerStyles.js";
import { SearchOptionType } from "./types.js";

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
    // @ts-ignore
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
