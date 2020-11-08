import { CSSProperties } from "react";
import { PlaceholderProps } from "react-select";
import { StylesConfigFunction } from "react-select/src/styles";

export const placeholderStyles: StylesConfigFunction<PlaceholderProps<{}>> = (
  base: CSSProperties,
  state: any
) => ({
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
});
