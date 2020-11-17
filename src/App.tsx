import React from "react";
import { Layout, Tooltip } from "./package";

export function App() {
  return (
    <>
      <Layout display="flex" justifyContent="space-between" margin="11rem">
        <div>
          <Tooltip
            content="Hello from the other side!"
            direction="top"
            width="15rem"
          >
            Top
          </Tooltip>
        </div>
        <div>
          <Tooltip
            content="Hello from the other side!"
            direction="right"
            width="10rem"
          >
            Right (Problem)
          </Tooltip>
        </div>
        <div>
          <Tooltip
            content="Hello from the other side!"
            direction="bottom"
            width="10rem"
          >
            Bottom
          </Tooltip>
        </div>
        <div>
          <Tooltip content="Hello from the other side!" direction="left">
            Left
          </Tooltip>
        </div>
      </Layout>
    </>
  );
}
