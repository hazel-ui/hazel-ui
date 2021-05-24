import { useState } from "react";
import styled from "styled-components";
import { Typography } from "../../Typography";
import { Color } from "../Color";
import { copyToClipboard, getContrastColor, getHexFromCss } from "./utils";

interface ColorBlockProps {
  cardColor?: Color;
  title?: string;
}

export function ColorBlock({
  cardColor = Color.gray5,
  title = "Unavailable",
}: ColorBlockProps) {
  const hex = getHexFromCss(cardColor);
  const [text, setText] = useState(hex);

  function changeText(temporary: string, permanent: string) {
    setText(temporary);
    setTimeout(() => {
      setText(permanent);
    }, 800);
  }

  return (
    <StyledDiv
      color={hex}
      title={title}
      onClick={() => {
        copyToClipboard(hex);
        changeText("Copied!", hex);
      }}
    >
      <Typography variant="p">
        {`Color.${title}: ${cardColor}`}
        <br />
        {text}
      </Typography>
    </StyledDiv>
  );
}

export const ColorBlockContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 1.6rem 1.6rem;
`;

const StyledDiv = styled.div<{ color: string }>`
  color: ${(props) => getContrastColor(props.color)};
  background-color: ${(props) => props.color};

  text-align: center;
  min-width: 264px;

  height: 80px;
  padding: 0 20px;
  cursor: pointer;
  align-items: center;
`;
