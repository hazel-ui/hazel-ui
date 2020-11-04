/// <reference types="react" />
import { Color } from "../Color";
declare type ColorBlockProps = {
    cardColor?: Color;
    title?: string;
};
export declare function ColorBlock({ cardColor, title, }: ColorBlockProps): JSX.Element;
export declare const ColorBlockContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
