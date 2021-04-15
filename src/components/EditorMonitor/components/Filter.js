import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Filter = ({ color }) => {
  const StyledFilter = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${color.filter};
    opacity: ${color.filterOpacity / 100};
  `;

  return <StyledFilter></StyledFilter>;
};

const mapStateToProps = (state) => {
  return {
    color: state.colorReducer,
  };
};

export default connect(mapStateToProps)(Filter);
