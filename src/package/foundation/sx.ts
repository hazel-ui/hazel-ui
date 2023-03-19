export interface SxProps {
  /* Below props are safe to use */

  display?: "inline";
  fontWeight?: "bold";

  /**
   * How to decide between rem and px:
   * https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/
   */
  margin?: string;
  marginTop?: `${number}rem` | `${number}px`;
  marginRight?: `${number}rem` | `${number}px`;
  marginBottom?: `${number}rem` | `${number}px`;
  marginLeft?: `${number}rem` | `${number}px`;

  textAlign?: "center";

  width?: `${number}rem` | `${number}px` | "fit-content";

  /*
   * These props might affect the intended visual of the component.
   * Use at your own risk.
   */

  color?: string;
  backgroundColor?: string;
}
