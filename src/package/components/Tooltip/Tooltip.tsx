import React, { ReactNode } from "react";
import styled from "styled-components";
import { Color, Theme } from "../../foundation";
import { applyTooltipPlace } from "./styles";
import { PlaceType } from "./types.";

type TooltipProps = {
  children?: ReactNode;
  content?: ReactNode;
  open?: boolean;
  place?: PlaceType;
};

export function Tooltip({
  children,
  content = "",
  open = false,
  place = "right",
}: TooltipProps) {
  return (
    <Container>
      {children}
      <TooltipContent open={open} place={place}>
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

const TooltipContent = styled.span<{ open: boolean; place: PlaceType }>`
  position: absolute;
  padding: 0.5rem 0;

  text-align: center;
  border-radius: 0.3rem;

  background-color: ${Color.black};
  color: ${Color.white};
  font-family: ${Theme.font.serif};
  width: 8rem;
  ${(props) => applyTooltipPlace(props.place)}

  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: opacity 0.5s;
`;
