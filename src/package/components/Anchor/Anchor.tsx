import { Color } from "../../foundation/Color/Color.js";
import { anchor } from "./Anchor.css.js";

import type { HTMLProps } from "react";

export interface AnchorProps
  extends Omit<HTMLProps<HTMLAnchorElement>, "className" | "style"> {
  color?: string;
  backgroundColor?: string;
}

export function Anchor({
  color = Color.blue11,
  children,
  ...rest
}: AnchorProps) {
  return (
    <a className={anchor} style={{ color }} {...rest}>
      {children}
    </a>
  );
}

// export const Anchor = styled.a<AnchorProps>`
//   text-decoration: none;

//   ${(props) =>
//     props.backgroundColor && `background-color: ${props.backgroundColor};`}

//   &:visited {
//     color: ${(props) => props.color || Color.purple11};
//   }

//   &:hover {
//     cursor: pointer;
//     text-decoration: underline;
//   }
// `;
