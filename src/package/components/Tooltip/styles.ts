import { css } from "styled-components";
import { DirectionType } from "./types.";

export function applyTooltipDirection(
  arrowSize: string,
  direction: DirectionType,
  tooltipBackground: string
) {
  const tooltipMargin = "2.6rem";
  switch (direction) {
    case "top":
      return css`
        top: calc(${tooltipMargin} * -1);

        /* bottom arrow */
        &::before {
          top: 100%;
          border-top-color: ${tooltipBackground};
        }
      `;

    case "right":
      return css`
        left: calc(100% + ${tooltipMargin} / 2);
        top: 50%;
        transform: translateX(0) translateY(-50%);

        /* left arrow */
        &::before {
          left: calc(${arrowSize} * -1);
          top: 50%;
          transform: translateX(0) translateY(-50%);
          border-right-color: ${tooltipBackground};
        }
      `;

    case "bottom":
      return css`
        bottom: calc(${tooltipMargin} * -1.3);

        /* top arrow */
        &::before {
          bottom: 100%;
          border-bottom-color: ${tooltipBackground};
        }
      `;

    case "left":
      return css`
        left: auto;
        right: calc(100% + ${tooltipMargin} / 2);
        top: 50%;
        transform: translateX(0) translateY(-50%);

        /* right arrow */
        &::before {
          left: auto;
          right: calc(${arrowSize} * -2);
          top: 50%;
          transform: translateX(0) translateY(-50%);
          border-left-color: ${tooltipBackground};
        }
      `;

    default:
      return null;
  }
}
