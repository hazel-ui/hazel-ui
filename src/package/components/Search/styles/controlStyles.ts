import { CSSProperties } from "react";
import { ControlProps } from "react-select";

export const controlStyles = (
  base: CSSProperties,
  state: ControlProps<{}>
) => ({
  ...base,
  border: "1px solid aqua", // control border
  boxShadow: "none",
  display: "inline-flex", // to align everything in custom control to one line
  height: "3rem",
  width: "20rem", // width of control
  margin: "0 auto", // center the control element to drop-down
  justifyContent: "center",
  alignItems: "center",
  placeItems: "center",
  backgroundColor: "rgba(0,0,0,0)", // transparent, so CustomControl can define it
  borderRadius: "10px",
});
