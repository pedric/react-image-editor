import React from "react";
import styled from "styled-components";

const ColorInput = ({ value, setValue, label }) => {
  return (
    <div>
      <Label>
        <input
          type='color'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {label}
      </Label>
    </div>
  );
};

export default ColorInput;

const Label = styled.label`
  font-family: sans-serif;
  font-size: 11px;
  text-transform: uppercase;

  input {
    margin-right: 10px;
  }
`;
