import React, { useState, useEffect } from "react";
import Logo from "../../images/example_logo.svg";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actionTypes";
import RangeInput from "../RangeInput";

const LogoPanel = ({ dispatch, theme }) => {
  const [top, setTop] = useState(0);
  const [right, setRight] = useState("");
  const [bottom, setBottom] = useState("");
  const [left, setLeft] = useState(0);
  const [opacity, setOpacity] = useState(100);
  const [width, setWidth] = useState(33);

  useEffect(() => {
    dispatch({
      type: actions.SET_LOGO,
      payload: { top, right, bottom, left, opacity, width },
    });
  }, [top, right, bottom, left, opacity, width, dispatch]);

  const dispatchLogo = (url) => {
    dispatch({ type: actions.UPLOAD_LOGO, payload: url });
  };

  return (
    <>
      <h3>LogoPanel template</h3>
      <div style={{ background: "gray", width: "60px" }}>
        <img
          src={Logo}
          onClick={() => {
            dispatchLogo(Logo);
          }}
          alt='logo'
        />
      </div>
      <RangeInput
        color={theme.primary}
        label='Top'
        value={top}
        setValue={setTop}
        range={{ min: 0, max: 1 }}
      />
      <RangeInput
        color={theme.primary}
        label='Right'
        value={right}
        setValue={setRight}
        range={{ min: 0, max: 1 }}
      />
      <RangeInput
        color={theme.primary}
        label='Bottom'
        value={bottom}
        setValue={setBottom}
        range={{ min: 0, max: 1 }}
      />
      <RangeInput
        color={theme.primary}
        label='Left'
        value={left}
        setValue={setLeft}
        range={{ min: 0, max: 1 }}
      />
      <RangeInput
        color={theme.primary}
        label='Opacity'
        value={opacity}
        setValue={setOpacity}
        range={{ min: 0, max: 100 }}
      />
      <RangeInput
        color={theme.primary}
        label='Width'
        value={width}
        setValue={setWidth}
        range={{ min: 0, max: 100 }}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    logo: state.logoReducer,
    uploads: state.uploadReducer,
    theme: state.themeReducer,
  };
};

export default connect(mapStateToProps)(LogoPanel);
