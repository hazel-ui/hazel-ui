import { ReactNode } from "react";

import { card } from "./Card.css.js";

import type { SxProps } from "../../foundation/sx.js";

export interface CardProps {
  children?: ReactNode;
  // style
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
