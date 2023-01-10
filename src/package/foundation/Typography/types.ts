export type TypographyType =
  | "display"
  | "headline"
  | "title"
  | "label"
  | "body";

interface TypeTokens {
  lineHeight: `${number}px`;
  size: `${number}px`;
  tracking: `${number}px` | 0;
  weight: number;
}

export interface TypeScale {
  large: TypeTokens;
  medium: TypeTokens;
  small: TypeTokens;
}

export enum TextTag {
  display = "h1",
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  p = "p",
  caption = "p",
  label = "div",
  none = "div",
}
