export type DirectionType = "top" | "right" | "bottom" | "left";

export type TooltipContentType = {
  arrowSize: string;
  open: boolean;
  direction: DirectionType;
  tooltipBackground: string;
  tooltipColor: string;
  width?: string;
};
