import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toggleMenu } from "../../redux/actions/menuActions";
import * as actions from "../../redux/actions/actionTypes";

const Menu = ({ toggleMenu, options, active, ...props }) => {
  useEffect(() => {
    console.log("active", active);
  }, [active]);

  const toggle = (panel) => {
    toggleMenu(panel);
  };

  return (
    <>
      <h2>menu template</h2>
      {options.length > 0
        ? options.map((option) => (
            <button key={option} onClick={() => toggle(option)}>
              {option}
            </button>
          ))
        : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    options: ["layout", "image", "logo", "text", "colors", "download"],
    active: state.menuReducer.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: (panel) => dispatch(toggleMenu(panel)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
