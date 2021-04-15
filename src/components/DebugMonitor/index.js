import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Div from "./styles";

const DebugMonitor = ({ layout, image, logo, text, color, uploads }) => {
  return (
    <Div>
      <pre>{JSON.stringify({ color: { ...color } }, null, 2)}</pre>
      <pre>{JSON.stringify({ layout: { ...layout } }, null, 2)}</pre>
      <pre>{JSON.stringify({ image: { ...image } }, null, 2)}</pre>
      <pre>{JSON.stringify({ logo: { ...logo } }, null, 2)}</pre>
      <pre>{JSON.stringify({ text: { ...text } }, null, 2)}</pre>
      <pre>{JSON.stringify({ uploads: { ...uploads } }, null, 2)}</pre>
    </Div>
  );
};

const mapStateToProps = (state) => {
  return {
    layout: state.layoutReducer,
    image: state.imageReducer,
    logo: state.logoReducer,
    text: state.textReducer,
    color: state.colorReducer,
    uploads: state.uploadReducer,
  };
};

export default connect(mapStateToProps)(DebugMonitor);
