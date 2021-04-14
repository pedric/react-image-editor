import React from "react";

const ColorInput = ({ value, setValue }) => {
  return (
    <input
      type='color'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default ColorInput;
