import { breakpoints } from "./breakpoints.js";

type MediaQueryType = "min" | "max";

function createMediaQuery(type: MediaQueryType, width: number) {
  return `screen and (${type}-width: ${width}px)`;
}

export const MediaQuery = {
  minWidth: {
    desktop: createMediaQuery("min", breakpoints.desktop),
    tablet: createMediaQuery("min", breakpoints.tablet),
  },
};
