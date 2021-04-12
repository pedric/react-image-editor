import React from "react";

const RangeInput = ({ value, setValue, range }) => {
  return (
    <input
      type='range'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      min={range.min ? range.min : 0}
      max={range.max ? range.max : 100}
    />
  );
};

export default RangeInput;
