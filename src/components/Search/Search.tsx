import React, { CSSProperties } from "react";
import ReactSelect, { ValueType } from "react-select";
import {
  ClearIndicator,
  Control,
  IndicatorsContainer,
  NoOptionsMessage,
  Option,
} from "./CustomComponents";
import { controlStyles, menuListStyles, optionStyles } from "./styles";

export type OptionType = {
  value: string | null;
  label: string;
};

type SearchProps = {
  options: OptionType[];
  onChange: React.Dispatch<React.SetStateAction<OptionType>>;
};

export function Search(props: SearchProps) {
  return (
    <>
      <ReactSelect
        options={props.options}
        onChange={(event: ValueType<OptionType>) => {
          props.onChange(event as OptionType);
        }}
        components={{
          ClearIndicator,
          Control,
          IndicatorsContainer,
          NoOptionsMessage,
          Option,
        }}
        // defaultValue={props.options[0]}
        autoFocus={false}
        backspaceRemovesValue={true}
        hideSelectedOptions={true}
        isLoading={false}
        isSearchable={true}
        isClearable={true}
        captureMenuScroll={false}
        placeholder=""
        theme={(theme: any) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "crimson", // option hover color in pop-up
            primary: "white", // border outline on focus and selected option in pop-up
          },
        })}
        styles={{
          control: controlStyles,
          menuList: menuListStyles,
          option: optionStyles,

          // incompatible types prevent from abstracting this
          placeholder: (base: CSSProperties, state: any) => ({
            ...base,
            fontFamily: "sans-serif",
            fontStyle: "italic",
            position: "absolute",
            transition: "top 0.1s, font-size 0.1s",
            color:
              state.isFocused || state.hasValue || state.selectProps.inputValue
                ? "red"
                : "blue",
            top:
              state.isFocused || state.hasValue || state.selectProps.inputValue
                ? -3
                : "50%",
            fontSize:
              state.isFocused || state.hasValue || state.selectProps.inputValue
                ? "0.5rem"
                : "1rem",
          }),

          container: (defaultStyles: any) => ({
            ...defaultStyles,
            border: "none", // main border
          }),

          dropdownIndicator: (base: CSSProperties) => ({
            ...base,
            // "& svg": { display: "none" }, // remove default arrow
          }),

          // indicatorSeparator: () => ({}), // remove separator
        }}
      />
    </>
  );
}
