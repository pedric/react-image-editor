import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actionTypes";
import RangeInput from "../RangeInput";

const TextPanel = ({ dispatch, ...props }) => {
  const [text, setText] = useState("");
  const [content, setContent] = useState(props.content);
  const [font, setFont] = useState("sans-serif");
  const [top, setTop] = useState(0);
  const [right, setRight] = useState("");
  const [bottom, setBottom] = useState("");
  const [left, setLeft] = useState(0);
  const [size, setSize] = useState(20);

  useEffect(() => {
    dispatch({
      type: actions.SET_TEXT,
      payload: { content, font, top, right, bottom, left, size },
    });
  }, [dispatch, content, font, top, right, bottom, left, size]);

  const handleTextChange = (e) => {
    const text = e.target.value;
    const formattedText = text.replace(/[\n]/g, "<br/>"); // dispatch this to store
    setContent(formattedText);
    setText(text);
  };
  return (
    <>
      <h3>TextPanel template</h3>
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
        <button value='sans-serif' onClick={(e) => setFont(e.target.value)}>
          Sans
        </button>
        <button value='serif' onClick={(e) => setFont(e.target.value)}>
          Serif
        </button>
      </div>
      <textarea value={text} onChange={(e) => handleTextChange(e)} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    text: state.textReducer,
  };
};

export default connect(mapStateToProps)(TextPanel);
