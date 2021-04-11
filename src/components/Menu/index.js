import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setLayout } from "../../redux/actions/layoutActions";
import * as actions from "../../redux/actions/actionTypes";

const Menu = ({ changeLayout, layout, state, ...props }) => {
  useEffect(() => {
    console.log(layout);
  }, [layout]);

  const updateLayout = () => {
    // dispatch({
    //   type: actions.SET_LAYOUT,
    //   payload: { name: "2:3", x: 100, y: 66 },
    // });
    changeLayout({ name: "2:3", x: 100, y: 66 });
  };

  return (
    <>
      <h2>menu template</h2>
      <button onClick={() => updateLayout()}>byt ratio</button>
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    layout: state.layoutReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLayout: (layout) => dispatch(setLayout(layout)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
