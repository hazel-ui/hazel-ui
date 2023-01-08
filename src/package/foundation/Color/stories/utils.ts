import { Color } from "../Color.js";

export function copyToClipboard(newClip: string) {
  navigator.clipboard.writeText(newClip);
}

export function getContrastColor(hslColor: string = "hsl(0, 0%, 0%)") {
  const lightness = Number(hslColor.split(",")[2].trim().split("%")[0]);
  return lightness > 50 ? Color.gray12 : Color.gray2;
}

export function getCssVariableValue(value: Color | undefined) {
  if (!value) return "";
  return getComputedStyle(document.documentElement).getPropertyValue(
    value.slice(4, value.length - 1)
  );
}

/**
 * Use this function to fetch the keys of an enum to map over in TypeScript
 * https://www.petermorlion.com/iterating-a-typescript-enum/
 */
export function enumKeys<O extends object, K extends keyof O = keyof O>(
  obj: O
): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(Number(k))) as K[];
}
