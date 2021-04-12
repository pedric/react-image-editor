import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Canvas = ({ layout, image, logo }) => {
  return (
    <>
      <h2>canvas template</h2>
      <pre>{JSON.stringify(layout, null, 2)}</pre>
      <pre>{JSON.stringify(image, null, 2)}</pre>
      <pre>{JSON.stringify(logo, null, 2)}</pre>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    layout: state.layoutReducer,
    image: state.imageReducer,
    logo: state.logoReducer,
  };
};

export default connect(mapStateToProps)(Canvas);
