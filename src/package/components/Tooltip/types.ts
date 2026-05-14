export type DirectionType = "top" | "right" | "bottom" | "left";

export interface TooltipContentType {
  arrowSize: string;
  open: boolean;
  direction: DirectionType;
  tooltipBackground: string;
  tooltipColor: string;
  width?: string;
}
