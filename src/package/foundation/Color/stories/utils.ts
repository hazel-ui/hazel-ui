import { Color } from "../Color";

export function copyToClipboard(newClip: string) {
  navigator.clipboard.writeText(newClip);
}

export function getContrastColor(hexColor: string = Color.white) {
  hexColor = hexColor.replace("#", "");
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq > 149 ? Color.black : Color.white;
}

/**
 * Use this function to fetch the keys of an enum to map over in TypeScript
 * https://www.petermorlion.com/iterating-a-typescript-enum/
 */
export function enumKeys<O extends object, K extends keyof O = keyof O>(
  obj: O
): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
}
