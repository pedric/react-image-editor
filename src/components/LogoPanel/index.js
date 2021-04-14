import React, { useState, useEffect } from "react";
import Logo from "../../images/example_logo.svg";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actionTypes";
import RangeInput from "../RangeInput";

const LogoPanel = ({ dispatch, logo }) => {
  // console.log(logo);
  const [active, setActive] = useState("");
  const [top, setTop] = useState(0);
  const [right, setRight] = useState("");
  const [bottom, setBottom] = useState("");
  const [left, setLeft] = useState(0);
  const [opacity, setOpacity] = useState(100);
  const [width, setWidth] = useState(33);

  useEffect(() => {
    dispatch({
      type: actions.SET_LOGO,
      payload: { active, top, right, bottom, left, opacity, width },
    });
  }, [active, top, right, bottom, left, opacity, width, dispatch]);

  return (
    <>
      <h3>LogoPanel template</h3>
      <div style={{ background: "gray", width: "60px" }}>
        <img src={Logo} onClick={() => setActive(Logo)} alt='logo' />
      </div>
      <RangeInput value={top} setValue={setTop} range={{ min: 0, max: 1 }} />
      <RangeInput
        value={right}
        setValue={setRight}
        range={{ min: 0, max: 1 }}
      />
      <RangeInput
        value={bottom}
        setValue={setBottom}
        range={{ min: 0, max: 1 }}
      />
      <RangeInput value={left} setValue={setLeft} range={{ min: 0, max: 1 }} />
      <RangeInput
        value={opacity}
        setValue={setOpacity}
        range={{ min: 0, max: 100 }}
      />
      <RangeInput
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
  };
};

export default connect(mapStateToProps)(LogoPanel);
