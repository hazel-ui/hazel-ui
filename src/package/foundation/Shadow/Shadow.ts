export enum Shadow {
  xs = "0 0px 6px 0 rgba(0, 0, 0, 0.15)",
  s = "0 3px 7px 0 rgba(0, 0, 0, 0.1)",
  // TODO: Replace the color with Color enum when TypeScript 5 is out:
  // https://github.com/microsoft/TypeScript/pull/50528#issuecomment-1322496801
  m = "0 4px 8px 0 var(--gray7)",
  l = "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
}
