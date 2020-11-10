import { css } from "styled-components";
import { BadgeSizeType } from "./types";

export function applyBadgeSize(size: BadgeSizeType) {
  switch (size) {
    case "s":
      return css`
        font-size: 0.8rem;
        padding: 0.2rem 0.8rem;
        margin: 0.15rem;
      `;

    case "m":
      return css`
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
        margin: 0.15rem;
      `;

    case "l":
      return css`
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
        margin: 0.2rem;
      `;

    default:
      return null;
  }
}
