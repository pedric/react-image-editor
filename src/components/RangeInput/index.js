import React from "react";
import { Input, LabelWrapper } from "./styles";

const RangeInput = ({ value, setValue, range, label, color }) => {
  if (typeof range !== "object") {
    range = { min: 0, max: 100 };
  }

  return (
    <div>
      <LabelWrapper style={{ "--color": color }}>
        <label>{label}</label>
      </LabelWrapper>
      <Input
        type='range'
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        min={range.min ? range.min : 0}
        max={range.max ? range.max : 100}
      />
    </div>
  );
};

export default RangeInput;
