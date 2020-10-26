import React from "react";
import { Color, Typography } from "./foundation";
import {
  ColorBlock,
  ColorBlockContainer,
} from "./foundation/Color/stories/ColorBlock";

export function App() {
  return (
    <>
      <Typography variant="h5" textAlign="center">
        Click on a color to copy its hex code
      </Typography>
      <ColorBlockContainer>
        {enumKeys(Color).map((colorName) => (
          <ColorBlock cardColor={Color[colorName]} title={colorName} />
        ))}
      </ColorBlockContainer>
    </>
  );
}

/**
 * Use this function to fetch the keys of an enum to map over in TypeScript
 * https://www.petermorlion.com/iterating-a-typescript-enum/
 */
function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
}
