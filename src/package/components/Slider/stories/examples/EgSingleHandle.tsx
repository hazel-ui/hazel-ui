import { useState } from "react";
import { Layout } from "../../../../foundation";
import { Slider } from "../../Slider";

export function EgSingleHandle() {
  const [rangeVal, setRangeVal] = useState<number>(0);
  return (
    <Layout display="flex">
      <Layout marginRight="2rem">{rangeVal}</Layout>
      <Slider
        onChange={(value: number) => setRangeVal(value)}
        min={10}
        max={20}
        width="200px"
      />
    </Layout>
  );
}
