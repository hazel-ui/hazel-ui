import { useState } from "react";
import styled from "styled-components";
import { Typography } from "../../Typography";
import { Color } from "../Color";
import { copyToClipboard, getContrastColor } from "./utils";

type ColorBlockProps = {
  cardColor?: Color;
  title?: string;
};

export function ColorBlock({
  cardColor = Color.white,
  title = "Unavailable",
}: ColorBlockProps) {
  const [text, setText] = useState(`Color.${title}: ${cardColor}`);

  function changeText(temporary: string, permanent: string) {
    setText(temporary);
    setTimeout(() => {
      setText(permanent);
    }, 800);
  }

  return (
    <StyledDiv
      cardColor={cardColor}
      title={title}
      onClick={() => {
        copyToClipboard(cardColor);
        changeText("Copied!", `Color.${title}: ${cardColor}`);
      }}
    >
      <Typography variant="p">{text}</Typography>
    </StyledDiv>
  );
}

export const ColorBlockContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  margin: 20px;
`;

const StyledDiv = styled.div<ColorBlockProps>`
  color: ${(props) => getContrastColor(props.cardColor)};
  background-color: ${(props) => props.cardColor};

  display: flex;
  justify-content: center;
  min-width: 258px;
  flex: 0 0 25%;
  flex-direction: row;

  height: 80px;
  padding: 0 20px;
  cursor: pointer;
  align-items: center;
`;
