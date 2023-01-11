export type TypographyType =
  | "display"
  | "headline"
  | "title"
  | "label"
  | "body";

interface TypeTokens {
  lineHeight: `${number}rem`;
  size: `${number}rem`;
  letterSpacing: `${number}rem` | 0;
  weight: number;
}

export interface TypeScale {
  large: TypeTokens;
  medium: TypeTokens;
  small: TypeTokens;
}

export enum TextTag {
  display = "h1",
  headline = "h2",
  title = "h3",
  label = "h4",
  body = "p",
}
