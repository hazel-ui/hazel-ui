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
        <Button variantColor="red" variant="secondary">
          Button
        </Button>
      </header>
    </>
  );
}
