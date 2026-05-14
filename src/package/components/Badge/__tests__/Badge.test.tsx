import { describe, expect, it } from "@jest/globals";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/jest-globals";
import { render } from "@testing-library/react";

import { Badge } from "../Badge.js";

describe("<Badge>", () => {
  it("renders Badge tag with children text", () => {
    render(<Badge>some text</Badge>);
    expect(screen.getByText(/some text/i)).toBeInTheDocument();
  });
});
