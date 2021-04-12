import React from "react";

const RangeInput = ({ value, setValue }) => {
  return (
    <input
      type='range'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default RangeInput;
