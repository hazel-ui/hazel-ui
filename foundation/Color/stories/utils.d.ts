import { Color } from "../Color";
export declare function copyToClipboard(newClip: string): void;
export declare function getContrastColor(hexColor?: string): Color.white | Color.black;
export declare function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[];
