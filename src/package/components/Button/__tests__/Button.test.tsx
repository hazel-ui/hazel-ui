import { describe, expect, it } from "@jest/globals";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/jest-globals";
import { render } from "@testing-library/react";

import { Button } from "../Button.js";

describe("<Button>", () => {
  it("renders button tag with children text", () => {
    render(<Button>some text</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText(/some text/i)).toBeInTheDocument();
  });
});
