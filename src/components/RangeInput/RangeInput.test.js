import { render, screen } from "@testing-library/react";
import RangeInput from "../RangeInput";

test("check the range/minmax object passed", () => {
  render(<RangeInput range={{ min: 3, max: 99 }} />);
  const object = { min: 3, max: 99 };
  expect((<RangeInput range={{ min: 3, max: 99 }} />).props.range).toEqual(
    object
  );
});

test("check the range/minmax default (expect undefined in test)", () => {
  render(<RangeInput />);
  let object;
  expect((<RangeInput />).props.range).toEqual(object);
});

test("check if", () => {
  render(<RangeInput label={"test label"} />);
  const labelElement = screen.getByText(/test label/i);
  expect(labelElement).toBeInTheDocument();
});
