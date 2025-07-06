import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe("Home Page", () => {
  it("renders the main title", () => {
    render(<Home />);
    const titleElement = screen.getByText(/01Code/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Home />);
    const descriptionElement = screen.getByText(/AI-driven business solutions made simple and accessible for everyone/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  it("renders Explore Products button", () => {
    render(<Home />);
    const buttonElement = screen.getByText(/Explore Products/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders Contact Us button", () => {
    render(<Home />);
    const buttonElement = screen.getByText(/Contact Us/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
