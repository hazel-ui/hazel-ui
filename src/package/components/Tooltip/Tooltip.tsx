import React, { ReactNode } from "react";
import styled from "styled-components";
import { Theme } from "../../foundation";
import { applyTooltipPlace } from "./styles";
import { PlaceType, TooltipContentType } from "./types.";

type TooltipProps = {
  children?: ReactNode;
  content?: ReactNode;
  open?: boolean;
  place?: PlaceType;
  tooltipBackground?: string;
  tooltipColor?: string;
  width?: string;
};

export function Tooltip({
  children,
  content = "",
  open = false,
  place = "right",
  tooltipBackground = "#2F3545",
  tooltipColor = "#FFFFFF",
  width = "8rem",
}: TooltipProps) {
  return (
    <Container>
      {children}
      <TooltipContent
        tooltipBackground={tooltipBackground}
        tooltipColor={tooltipColor}
        open={open}
        place={place}
        width={width}
      >
        {content}
      </TooltipContent>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: inline-block;

  cursor: pointer;

  &:hover > span {
    visibility: visible;
    opacity: 1;
  }
`;

const TooltipContent = styled.span<TooltipContentType>`
  position: absolute;
  padding: 0.5rem 0.3rem;

  border-radius: 0.3rem;
  text-align: center;
  z-index: 1;

  font-family: ${Theme.font.serif};
  background-color: ${(props) => props.tooltipBackground};
  color: ${(props) => props.tooltipColor};
  width: ${(props) => props.width};
  ${(props) =>
    applyTooltipPlace(props.place, props.tooltipBackground, props.width)}

  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: opacity 0.5s;
`;
