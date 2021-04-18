import { render, screen, mount } from "@testing-library/react";
import ColorInput from "../ColorInput";

test("renders color input", () => {
  render(<ColorInput label={"image"} />);
  const label = screen.getByText(/image/i);
  expect(label).toBeInTheDocument();
});

test("check the value attribute", () => {
  render(<ColorInput value={"#ccc"} />);
  expect((<ColorInput value={"#ccc"} />).props.value).toEqual("#ccc");
});
