import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toggleMenu } from "../../redux/actions/menuActions";
import WorkArea from "../WorkArea";
import { Nav, Button } from "./styles";

const Menu = ({ toggleMenu, options, active, theme, ...props }) => {
  // useEffect(() => {
  //   console.log("active", active);
  // }, [active]);

  const toggle = (panel) => {
    toggleMenu(panel);
  };

  const styles = {
    color: `${theme.primary}`,
  };

  return (
    <>
      <Nav>
        {options.length > 0
          ? options.map((option) => (
              <Button
                style={styles}
                className={active === option ? "active" : ""}
                key={option}
                onClick={() => toggle(option)}
              >
                {option}
              </Button>
            ))
          : null}
      </Nav>
      <WorkArea activeTab={active} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    options: ["layout", "image", "logo", "text", "colors", "download"],
    active: state.menuReducer.active,
    theme: state.themeReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: (panel) => dispatch(toggleMenu(panel)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
