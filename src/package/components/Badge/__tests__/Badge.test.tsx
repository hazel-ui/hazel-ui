import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Badge } from "../Badge.js";

describe("<Badge>", () => {
  test("Renders Badge tag with children text", () => {
    render(<Badge>some text</Badge>);
    expect(screen.getByText(/some text/i)).toBeInTheDocument();
  });
});
