import { ReactNode } from "react";
import styled from "styled-components";
import { Shadow, Theme } from "../../foundation";
import { applyTooltipDirection } from "./styles";
import { DirectionType, TooltipContentType } from "./types.";

type TooltipProps = {
  arrowSize?: string;
  children?: ReactNode;
  content?: ReactNode;
  open?: boolean;
  direction?: DirectionType;
  tooltipBackground?: string;
  tooltipColor?: string;
  width?: string;
};

export function Tooltip({
  arrowSize = "0.4rem",
  children,
  content = "",
  direction = "right",
  open = false,
  tooltipBackground = "#2F3545",
  tooltipColor = "#FFFFFF",
  ...rest
}: TooltipProps) {
  return (
    <Container>
      {children}
      <TooltipContent
        arrowSize={arrowSize}
        direction={direction}
        tooltipBackground={tooltipBackground}
        tooltipColor={tooltipColor}
        open={open}
        {...rest}
      >
        {content}
      </TooltipContent>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: inline-block;

  cursor: default;

  &:hover > span {
    visibility: visible;
    opacity: 1;
  }
`;

const TooltipContent = styled.span<TooltipContentType>`
  position: absolute;
  border-radius: 0.3rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 0.3rem;
  box-shadow: ${Shadow.s};

  background-color: ${(props) => props.tooltipBackground};
  color: ${(props) => props.tooltipColor};

  font-family: ${Theme.font.sansSerif};
  font-size: 14px;
  line-height: 1;
  z-index: 1;
  ${(props) => !props.width && `white-space: nowrap;`};
  ${(props) => props.width && `text-align: center;`};

  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: opacity 0.5s;

  /* border triangles */
  &::before {
    position: absolute;
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    pointer-events: none;
    border-width: ${(props) => props.arrowSize};
    margin-left: ${(props) => `calc(${props.arrowSize} * -1)`};
  }

  ${(props) => props.width && `width: ${props.width};`};
  ${(props) =>
    applyTooltipDirection(
      props.arrowSize,
      props.direction,
      props.tooltipBackground
    )}
`;
