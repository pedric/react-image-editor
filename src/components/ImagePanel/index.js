import React, { useState, useEffect, useReducer } from "react";
import { connect } from "react-redux";
import { setImage } from "../../redux/actions/imageActions";
import RangeInput from "../RangeInput";

const reducer = (state, action) => {
  switch (action.type) {
    case "url":
      return { ...state, upload: action.payload };
    case "x":
      return { ...state, x: action.payload };
    case "y":
      return { ...state, y: action.payload };
    case "size":
      return { ...state, size: action.payload };
    default:
      return state;
  }
};

const ImagePanel = ({ changeImage, image }) => {
  const [state, dispatch] = useReducer(reducer, image);
  const [url, setUrl] = useState("");
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [size, setSize] = useState(50);

  /*
  The "flow" is as;
  update local state with reducer which updates by separate
  useEffect "listening" on useState(passed as props to inputs) for each property.
  The complexity is from this being a school-project where I'm supposed
  to use Redux and lot of different hooks.
  */
  useEffect(() => {
    changeImage(state);
  }, [state, changeImage]);

  useEffect(() => {
    dispatch({ type: "url", payload: url });
  }, [url]);

  useEffect(() => {
    dispatch({ type: "size", payload: size });
  }, [size]);

  useEffect(() => {
    dispatch({ type: "x", payload: x });
  }, [x]);

  useEffect(() => {
    dispatch({ type: "y", payload: y });
  }, [y]);

  // const handleUpload = (e) => {
  //   console.log(1);
  //   const _url = URL.createObjectURL(e.target.files[0]);
  //   // dispatch({ type: "url", payload: _url });
  //   setUrl(_url);
  // };

  return (
    <>
      <h3>ImagePanel template</h3>
      <div>
        <input
          type='file'
          accept='image/png, image/jpeg'
          onChange={(e) => {
            const _url = URL.createObjectURL(e.target.files[0]);
            setUrl(_url);
          }}
        />

        <RangeInput
          value={size}
          setValue={setSize}
          range={{ min: 0, max: 100 }}
        />

        <RangeInput value={x} setValue={setX} range={{ min: 0, max: 100 }} />

        <RangeInput value={y} setValue={setY} range={{ min: 0, max: 100 }} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    image: state.imageReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeImage: (image) => dispatch(setImage(image)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagePanel);
