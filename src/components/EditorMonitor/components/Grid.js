import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Line = styled.span`
  position: absolute;
`;

const Grid = ({ layout, active, theme }) => {
  if (active !== "layout") {
    return null;
  }

  return active !== "layout" ? null : (
    <>
      <Line
        style={{
          background: `${theme.secondary}`,
          width: `calc(100% + ${layout.margin * 2}px)`,
          height: "1px",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      ></Line>
      <Line
        style={{
          background: `${theme.secondary}`,
          width: `calc(100% + ${layout.margin * 2}px)`,
          height: "1px",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      ></Line>
      <Line
        style={{
          background: `${theme.secondary}`,
          paddingTop: `calc(100% + ${layout.margin * 2}px)`,
          width: "1px",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      ></Line>
      <Line
        style={{
          background: `${theme.secondary}`,
          paddingTop: `calc(100% + ${layout.margin * 2}px)`,
          width: "1px",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      ></Line>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    active: state.menuReducer.active,
    layout: state.layoutReducer,
    theme: state.themeReducer,
  };
};

export default connect(mapStateToProps)(Grid);
