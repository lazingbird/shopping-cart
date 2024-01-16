import { render, screen } from "@testing-library/react";
import Navbar from "../components/Homepage/Navbar";

describe("Navbar component", () => {
  it("renders navigation items properly", () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
