import React from "react";
import { Layout, Tooltip } from "./package";

export function App() {
  return (
    <>
      <Layout display="flex" justifyContent="space-between" margin="11rem">
        <Tooltip content="Hello from the other side!" place="top">
          Top
        </Tooltip>
        <Tooltip content="Hello from the other side!" place="right">
          Right
        </Tooltip>
        <Tooltip content="Hello from the other side!" place="bottom">
          Bottom
        </Tooltip>
        <Tooltip content="Hello from the other side!" place="left">
          Left
        </Tooltip>
      </Layout>
    </>
  );
}
