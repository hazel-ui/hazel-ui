import { Color } from "../../foundation/Color/Color.js";
import type { SxProps } from "../../foundation/sx.js";

export interface DividerProps {
  color?: string;
  height?: `${number}px`;
  sx?: SxProps;
}

export function Divider({
  color = Color.gray7,
  height = "1px",
  sx = {},
}: DividerProps) {
  return (
    <div style={{ backgroundColor: color, height, width: "100%", ...sx }} />
  );
}
