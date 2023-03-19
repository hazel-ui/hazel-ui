import { anchor } from "./Anchor.css.js";
import { Color } from "../../foundation/Color/Color.js";

import type { HTMLProps } from "react";

export interface AnchorProps
  extends Omit<HTMLProps<HTMLAnchorElement>, "className" | "style"> {
  color?: string;
  backgroundColor?: string;
}

export function Anchor({
  color = Color.blue11,
  backgroundColor = "transparent",
  children,
  ...rest
}: AnchorProps) {
  return (
    <a
      className={anchor}
      style={{ color, backgroundColor, borderColor: color }}
      {...rest}
    >
      {children}
    </a>
  );
}
