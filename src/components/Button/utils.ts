import { css } from "styled-components";

import { ButtonSizeType, ButtonType } from "./types";

export function applyButtonVariant(variant: ButtonType) {
  switch (variant) {
    case "primary":
      return css`
        color: white;
        background-color: #1ea7fd;
      `;

    case "secondary":
      return css`
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `;

    default:
      return null;
  }
}

export function applyButtonSize(size: ButtonSizeType) {
  switch (size) {
    case "small":
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `;

    case "medium":
      return css`
        font-size: 14px;
        padding: 11px 20px;
      `;

    case "large":
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `;

    default:
      return null;
  }
}
