import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("About page content check", () => {
  render(<About />);
  const textElment = screen.getByText("lior", { exact: false });
  expect(textElment).toBeInTheDocument();
});
