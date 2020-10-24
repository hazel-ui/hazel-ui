import React from "react";

import { Button } from "./components";

export function App() {
  return (
    <>
      <header>
        <p>Custom React table component</p>
        <Button variantColor="red" variant="primary">
          Button
        </Button>
        <Button
          size="large"
          color="white"
          backgroundColor="black"
          variantColor="red"
          variant="primary"
          border="3px solid LightGreen"
        >
          Awesome
        </Button>
      </header>
    </>
  );
}
