import { Typography } from "../dist/foundation/Typography/Typography.js";
import { Color } from "../dist/foundation/Color/Color.js";
// import { Typography, Color } from "../src/package/index.js";

export function App(): JSX.Element {
  return (
    <Typography color={Color.blue10} sx={{ marginTop: "1rem" }}>
      Hello
    </Typography>
  );
}
