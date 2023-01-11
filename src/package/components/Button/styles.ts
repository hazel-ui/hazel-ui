import { css } from "styled-components";

import { Color } from "../../foundation/Color/Color.js";
import { Theme } from "../../foundation/Theme/Theme.js";

import type { ButtonSizeType, ButtonType } from "./types.js";

export function applyButtonVariant(
  variant: ButtonType,
  variantColor: string = Color.blue9
) {
  switch (variant) {
    case "primary":
      return css`
        color: white;
        background-color: ${variantColor};
        border: 1px solid transparent;
      `;

    case "secondary":
      return css`
        color: ${variantColor};
        background-color: transparent;
        border: 1px solid ${variantColor};
      `;

    default:
      return null;
  }
}

export function applyButtonSize(size: ButtonSizeType) {
  switch (size) {
    case "s":
      return css`
        font-size: 13px;
        padding: 6px 12px;
        font-weight: ${Theme.fontWeight.light};
      `;

    case "m":
      return css`
        font-size: 14px;
        padding: 11px 20px;
        font-weight: ${Theme.fontWeight.semiBold};
      `;

    case "l":
      return css`
        font-size: 16px;
        padding: 12px 24px;
        font-weight: ${Theme.fontWeight.bold};
      `;

    default:
      return null;
  }
}
