import { breakpoints } from "./breakpoints";

type MediaQueryType = "min" | "max";

function createMediaQuery(type: MediaQueryType, width: number) {
  return `@media (${type}-width): ${width}px`;
}

export const MediaQuery = {
  minWidth: {
    mobileLarge: createMediaQuery("min", breakpoints.mobileLarge),
    tablet: createMediaQuery("min", breakpoints.tablet),
    desktop: createMediaQuery("min", breakpoints.desktop),
    desktopLarge: createMediaQuery("min", breakpoints.desktopLarge),
  },
  maxWidth: {
    mobileSmall: createMediaQuery("max", breakpoints.mobileLarge - 1),
    mobileLarge: createMediaQuery("max", breakpoints.tablet - 1),
    tablet: createMediaQuery("max", breakpoints.desktop - 1),
    desktop: createMediaQuery("max", breakpoints.desktopLarge - 1),
  },
};
