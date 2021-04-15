import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledText = styled.div`
  position: absolute;
`;

const Text = ({ text, color }) => {
  const markup = (content) => {
    return { __html: content };
  };

  const setPosition = (value) => {
    return value ? 0 : "unset";
  };

  const styles = {
    color: `${color.text}`,
    fontFamily: `${text.font}`,
    fontSize: `${text.size}px`,
    textAlign: `${text.align ? text.align : "left"}`,
    top: `${setPosition(text.top)}`,
    right: `${setPosition(text.right)}`,
    bottom: `${setPosition(text.bottom)}`,
    left: `${setPosition(text.left)}`,
  };

  return (
    <StyledText style={styles}>
      {text.content && (
        <span dangerouslySetInnerHTML={markup(text.content)}></span>
      )}
    </StyledText>
  );
};

const mapStateToProps = (state) => {
  return {
    text: state.textReducer,
    color: state.colorReducer,
  };
};

export default connect(mapStateToProps)(Text);
