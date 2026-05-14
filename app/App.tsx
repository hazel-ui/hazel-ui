// Import { Anchor, Typography, Color } from "../dist/index.js";
import { Anchor, Card, Color, Typography } from "../src/package/index.js";

export function App(): JSX.Element {
  return (
    <div style={{ margin: "20px" }}>
      <Typography color={Color.green10} sx={{ marginTop: "1rem" }}>
        Typography
      </Typography>

      <Anchor href="https://youtu.be/dQw4w9WgXcQ">Anchor</Anchor>

      <Card
        sx={{
          backgroundColor: Color.gray11,
          marginTop: "20px",
          width: "200px",
        }}
      >
        <Typography color={Color.gray1}>Card</Typography>
      </Card>
    </div>
  );
}
