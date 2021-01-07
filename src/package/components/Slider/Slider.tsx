import RCSlider, { Handle, SliderProps as RCSliderProps } from "rc-slider";
import "rc-slider/assets/index.css";
import styled from "styled-components";
import { Layout } from "../../foundation";
import { ReactComponent as PauseIcon } from "./pause.svg";

interface SliderProps extends RCSliderProps {
  width?: string;
}

export function Slider({
  min = 0,
  max = 30,
  width = "100%",
  ...rest
}: SliderProps) {
  return (
    <Container width={width}>
      <RCSlider
        handle={(handleProps: any) => {
          return (
            <Handle {...handleProps}>
              <Layout display="flex" justifyContent="center" marginTop="8px">
                <PauseIcon width="10px" />
              </Layout>
            </Handle>
          );
        }}
        handleStyle={{
          borderColor: "white",
          height: 32,
          width: 32,
          marginTop: -13,
          boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.28)",
        }}
        trackStyle={{ backgroundColor: "black", width: "100px" }}
        min={min}
        max={max}
        {...rest}
      />
    </Container>
  );
}

const Container = styled.div<{ width: string }>`
  width: ${(props) => props.width};
`;
