import { breakpoints } from "./breakpoints.js";

type MediaQueryType = "min" | "max";

function createMediaQuery(type: MediaQueryType, width: number) {
  return `screen and (${type}-width: ${width}px)`;
}

export const MediaQuery = {
  minWidth: {
    tablet: createMediaQuery("min", breakpoints.tablet),
    desktop: createMediaQuery("min", breakpoints.desktop),
  },
};
