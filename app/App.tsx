// import { Anchor, Typography, Color } from "../dist/index.js";
import { Anchor, Typography, Color } from "../src/package/index.js";

export function App(): JSX.Element {
  return (
    <>
      <Typography color={Color.blue10} sx={{ marginTop: "1rem" }}>
        Hello
      </Typography>
      <Anchor href="https://youtu.be/dQw4w9WgXcQ">World</Anchor>
    </>
  );
}
