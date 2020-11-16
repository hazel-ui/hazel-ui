import { css } from "styled-components";
import { Color } from "../../foundation";
import { PlaceType } from "./types.";

export function applyTooltipPlace(place: PlaceType) {
  switch (place) {
    case "top":
      return css`
        bottom: 105%;
        margin-bottom: 0.6rem;
        left: 50%;
        margin-left: -4rem; // half of width

        /* bottom arrow */
        &::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;

          margin-left: -0.4rem;
          border-width: 0.4rem; // same value as margin-top

          border-style: solid;
          border-color: ${Color.black} transparent transparent transparent;
        }
      `;

    case "right":
      return css`
        left: 105%;
        margin-left: 0.6rem;
        top: -0.5rem; // same value as top padding

        /* left arrow */
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 100%;

          margin-top: -0.4rem;
          border-width: 0.4rem; // same value as margin-top

          border-style: solid;
          border-color: transparent ${Color.black} transparent transparent;
        }
      `;

    case "bottom":
      return css`
        top: 105%;
        margin-top: 0.6rem;
        left: 50%;
        margin-left: -4rem; // half of width

        /* top arrow */
        &::after {
          content: "";
          position: absolute;
          bottom: 100%;
          left: 50%;

          margin-left: -0.4rem;
          border-width: 0.4rem; // same value as margin-top

          border-style: solid;
          border-color: transparent transparent ${Color.black} transparent;
        }
      `;

    case "left":
      return css`
        right: 105%;
        margin-right: 0.6rem;
        top: -0.5rem; // same value as top padding

        /* right arrow */
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 100%;

          margin-top: -0.4rem;
          border-width: 0.4rem; // same value as margin-top

          border-style: solid;
          border-color: transparent transparent transparent ${Color.black};
        }
      `;

    default:
      return null;
  }
}
