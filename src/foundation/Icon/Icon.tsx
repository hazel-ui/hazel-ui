import React from "react";
import { ReactComponent as ArrowUp } from "./svg/ArrowUp.svg";

export { ReactComponent as Close } from "./svg/Close.svg";
export { ReactComponent as Search } from "./svg/Search.svg";
export { ReactComponent as Sort } from "./svg/Sort.svg";
export { ArrowUp };

// Derived icons

export const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <ArrowUp transform="rotate(90)" {...props} />
);

export const ArrowDown = (props: React.SVGProps<SVGSVGElement>) => (
  <ArrowUp transform="rotate(180)" {...props} />
);

export const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <ArrowUp transform="rotate(-90)" {...props} />
);
