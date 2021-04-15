import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actionTypes";
import RangeInput from "../RangeInput";

const TextPanel = ({ dispatch, theme, ...props }) => {
  const [text, setText] = useState("");
  // const [content, setContent] = useState(props.content);
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
    // setContent(formattedText);
    setText(text);
  };
  return (
    <>
      <div>
        <input
          type='radio'
          name='horizontalPosition'
          onChange={(e) => {
            setRight(false);
            setLeft(true);
          }}
          value='left'
        />
        <input
          type='radio'
          name='horizontalPosition'
          onChange={(e) => {
            setLeft(false);
            setRight(true);
          }}
          value='right'
        />
      </div>
      <div>
        <input
          type='radio'
          name='verticalPosition'
          onChange={(e) => {
            setBottom(false);
            setTop(true);
          }}
          value='top'
        />
        <input
          type='radio'
          name='verticalPosition'
          onChange={(e) => {
            setTop(false);
            setBottom(true);
          }}
          value='bottom'
        />
      </div>
      <div>
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
        <button value='sans-serif' onClick={(e) => setFont(e.target.value)}>
          Sans
        </button>
        <button value='serif' onClick={(e) => setFont(e.target.value)}>
          Serif
        </button>
      </div>
      <textarea value={text} onChange={(e) => handleTextChange(e)} />
      <RangeInput
        color={theme.primary}
        label='Font size'
        value={size}
        setValue={setSize}
        range={{ min: 0, max: 100 }}
      />
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
