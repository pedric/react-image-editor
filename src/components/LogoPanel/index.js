import React, { useState, useEffect } from "react";
import Logo from "../../images/example_logo.svg";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actionTypes";

const LogoPanel = ({ dispatch, logo }) => {
  console.log(logo);
  const [active, setActive] = useState("");
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(null);
  const [bottom, setBottom] = useState(null);
  const [left, setLeft] = useState(0);
  const [opacity, setOpacity] = useState(100);
  const [width, setWidth] = useState(33);

  useEffect(() => {
    dispatch({
      type: actions.SET_LOGO,
      payload: { active, top, right, bottom, left, opacity, width },
    });
  }, [active, top, right, bottom, left, opacity, width]);
  return (
    <>
      <h3>LogoPanel template</h3>
      <div style={{ background: "gray", width: "60px" }}>
        <img src={Logo} onClick={() => setActive(Logo)} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    logo: state.logoReducer,
  };
};

export default connect(mapStateToProps)(LogoPanel);
