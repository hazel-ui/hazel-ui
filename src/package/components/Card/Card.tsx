import { card } from "./Card.css.js";

import type { SxProps } from "../../foundation/sx.js";
import type { ReactNode } from "react";

export interface CardProps {
  children?: ReactNode;
  // Style
  width?: string;
  sx?: SxProps;
}

export function Card({ children, width, sx }: CardProps) {
  return (
    <div className={card} style={{ width, ...sx }}>
      {children}
    </div>
  );
}
