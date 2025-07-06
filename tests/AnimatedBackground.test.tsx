import { render } from "@testing-library/react";
import AnimatedBackground from "../components/AnimatedBackground";

describe("AnimatedBackground", () => {
  it("renders without crashing", () => {
    const { container } = render(<AnimatedBackground />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("applies the animated background class", () => {
    const { container } = render(<AnimatedBackground />);
    const divElement = container.firstChild as HTMLElement;
    expect(divElement.className).toMatch(/animate-gradient-x/);
  });
});
