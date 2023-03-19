// import { Anchor, Typography, Color } from "../dist/index.js";
import { Anchor, Typography, Color, Card } from "../src/package/index.js";

export function App(): JSX.Element {
  return (
    <div style={{ margin: "20px" }}>
      <Typography color={Color.green10} sx={{ marginTop: "1rem" }}>
        Typography
      </Typography>

      <Anchor href="https://youtu.be/dQw4w9WgXcQ">Anchor</Anchor>

      <Card
        sx={{
          width: "200px",
          marginTop: "20px",
          backgroundColor: Color.gray11,
        }}
      >
        <Typography color={Color.gray1}>Card</Typography>
      </Card>
    </div>
  );
}
