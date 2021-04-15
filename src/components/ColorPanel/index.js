import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actionTypes";
import RangeInput from "../RangeInput";
import ColorInput from "../ColorInput";

// color: {
//   text: "",
//   filter: "",
//   background: "",
//   filterOpacity: "50",
// }

const ColorPanel = ({ dispatch, theme, ...props }) => {
  const [text, setTextColor] = useState("#000");
  const [filter, setFilterColor] = useState("#000");
  const [background, setBgColor] = useState("#ccc");
  const [filterOpacity, setFilterOpacity] = useState(0);

  useEffect(() => {
    dispatch({
      type: actions.SET_COLOR,
      payload: { text, filter, background, filterOpacity },
    });
  }, [dispatch, text, filter, background, filterOpacity]);

  return (
    <>
      <ColorInput value={text} setValue={setTextColor} />
      <ColorInput value={filter} setValue={setFilterColor} />
      <ColorInput value={background} setValue={setBgColor} />
      <RangeInput
        color={theme.primary}
        label='Filter opacity'
        value={filterOpacity}
        setValue={setFilterOpacity}
        range={{ min: 0, max: 100 }}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    colors: state.colorReducer,
    theme: state.themeReducer,
  };
};

export default connect(mapStateToProps)(ColorPanel);
