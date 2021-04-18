import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actionTypes";
import RangeInput from "../RangeInput";
import RadioInput from "./styles";

const TextPanel = ({ dispatch, theme, ...props }) => {
  const [text, setText] = useState("");
  const [font, setFont] = useState("sans-serif");
  const [top, setTop] = useState(0);
  const [right, setRight] = useState("");
  const [bottom, setBottom] = useState("");
  const [left, setLeft] = useState(0);
  const [size, setSize] = useState(20);
  const [align, setAlignment] = useState(props.align);

  useEffect(() => {
    dispatch({
      type: actions.SET_TEXT,
      payload: { font, top, right, bottom, left, size, align },
    });
  }, [dispatch, font, top, right, bottom, left, size, align]);

  const handleTextChange = (e) => {
    const text = e.target.value;
    const formattedText = text.replace(/[\n]/g, "<br/>");
    dispatch({ type: actions.SET_CONTENT, payload: formattedText });
    setText(text);
  };

  const sectionHeadingStyles = {
    padding: "8px 0",
    fontFamily: "sans-serif",
    fontSize: "11px",
    fontWeight: "400",
    textTransform: "uppercase",
    width: "90%",
    margin: "4px auto",
    borderBottom: `1px solid ${theme.primary}`,
  };

  return (
    <>
      <div style={sectionHeadingStyles}>
        <h3>Position</h3>
      </div>
      <div>
        <RadioInput>
          <label>Right</label>
          <input
            type='radio'
            name='horizontalPosition'
            onChange={(e) => {
              setRight(false);
              setLeft(true);
            }}
            value='left'
            defaultChecked
          />
        </RadioInput>
        <RadioInput>
          <label>Left</label>
          <input
            type='radio'
            name='horizontalPosition'
            onChange={(e) => {
              setLeft(false);
              setRight(true);
            }}
            value='right'
          />
        </RadioInput>
      </div>
      <div>
        <RadioInput>
          <label>Top</label>
          <input
            type='radio'
            name='verticalPosition'
            onChange={(e) => {
              setBottom(false);
              setTop(true);
            }}
            value='top'
            defaultChecked
          />
        </RadioInput>
        <RadioInput>
          <label>Bottom</label>
          <input
            type='radio'
            name='verticalPosition'
            onChange={(e) => {
              setTop(false);
              setBottom(true);
            }}
            value='bottom'
          />
        </RadioInput>
      </div>
      <div>
        <div style={sectionHeadingStyles}>
          <h3>Alignment</h3>
        </div>
        <button value='left' onClick={(e) => setAlignment(e.target.value)}>
          Left
        </button>
        <button value='center' onClick={(e) => setAlignment(e.target.value)}>
          Center
        </button>
        <button value='right' onClick={(e) => setAlignment(e.target.value)}>
          Right
        </button>
      </div>
      <div>
        <div style={sectionHeadingStyles}>
          <h3>Font</h3>
        </div>
        <button value='sans-serif' onClick={(e) => setFont(e.target.value)}>
          Sans
        </button>
        <button value='serif' onClick={(e) => setFont(e.target.value)}>
          Serif
        </button>
      </div>
      <div>
        <div style={sectionHeadingStyles}>
          <h3>Content</h3>
        </div>
        <textarea value={text} onChange={(e) => handleTextChange(e)} />
      </div>
      <div>
        <div style={sectionHeadingStyles}>
          <h3>Font size</h3>
        </div>
        <RangeInput
          color={theme.primary}
          label='Font size'
          value={size}
          setValue={setSize}
          range={{ min: 0, max: 100 }}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    text: state.textReducer,
    theme: state.themeReducer,
  };
};

export default connect(mapStateToProps)(TextPanel);
