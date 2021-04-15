import React from "react";
import { Input, LabelWrapper } from "./styles";

const RangeInput = ({ value, setValue, range, label, color }) => {
  return (
    <div>
      <LabelWrapper style={{ borderBottom: `1px solid ${color}` }}>
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
