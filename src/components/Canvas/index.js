import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Canvas = ({ layout }) => {
  return (
    <>
      <h2>canvas template</h2>
      <pre>{JSON.stringify(layout)}</pre>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    layout: state.layoutReducer,
  };
};

export default connect(mapStateToProps)(Canvas);
