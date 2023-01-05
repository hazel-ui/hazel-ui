export interface SxProps {
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
}
