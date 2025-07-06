import { render, screen, fireEvent } from "@testing-library/react";
import ProductsMenu from "../components/ProductsMenu";

describe("ProductsMenu", () => {
  it("renders the Products menu button", () => {
    render(<ProductsMenu />);
    const menuButton = screen.getByText(/Products/i);
    expect(menuButton).toBeInTheDocument();
  });

  it("shows dropdown options when hovered", () => {
    render(<ProductsMenu />);
    const menuButton = screen.getByText(/Products/i);

    fireEvent.mouseOver(menuButton);

    const option01Bot = screen.getByText(/01Bot/i);
    const option01Shield = screen.getByText(/01Shield/i);

    expect(option01Bot).toBeInTheDocument();
    expect(option01Shield).toBeInTheDocument();
  });
});
  