import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledLogoWrapper = styled.div`
  position: absolute;
`;

const Logo = ({ logo, uploads }) => {
  const setPosition = (value) => {
    return value === 1 ? 0 : "unset";
  };
  const styles = {
    width: `${logo.width}%`,
    opacity: `${logo.opacity / 100}`,
    top: `${setPosition(logo.top)}`,
    right: `${setPosition(logo.right)}`,
    bottom: `${setPosition(logo.bottom)}`,
    left: `${setPosition(logo.left)}`,
  };
  return (
    <StyledLogoWrapper style={styles}>
      {uploads.logo && <img src={uploads.logo} alt='#' />}
    </StyledLogoWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    logo: state.logoReducer,
    uploads: state.uploadReducer,
  };
};

export default connect(mapStateToProps)(Logo);
