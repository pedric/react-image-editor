import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Menu = () => {
  return <h2>menu template</h2>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    layout: state.layout,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
