import React from "react";
import { ArrowUp } from "./icons";

export { Close, Search, Sort } from "./icons";
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
