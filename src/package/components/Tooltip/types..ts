export type PlaceType = "top" | "right" | "bottom" | "left";

export type TooltipContentType = {
  open: boolean;
  place: PlaceType;
  tooltipBackground: string;
  tooltipColor: string;
  width: string;
};
