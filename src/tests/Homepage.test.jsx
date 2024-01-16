import { render, screen } from "@testing-library/react";
import Homepage from "../components/Homepage/Homepage";

describe("Homepage component", () => {
  it("renders navbar", () => {
    render(<Homepage />);
    expect(screen.getByRole("navigation")).toBeDefined();
  });
});
