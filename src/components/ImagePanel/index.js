import React, { useState, useEffect, useReducer, useCallback } from "react";
import { connect } from "react-redux";
import { setImage } from "../../redux/actions/imageActions";
import RangeInput from "../RangeInput";
import * as actions from "../../redux/actions/actionTypes";
import axios from "axios";
import styled from "styled-components";

const reducer = (state, action) => {
  switch (action.type) {
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

const ImagePanel = ({ changeImage, setuploadedImage, image, theme }) => {
  const [state, dispatch] = useReducer(reducer, image);
  const [url, setUrl] = useState("");
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [size, setSize] = useState(50);
  const [imageCollection, setImageCollection] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState("");
  const [page, setPage] = useState(1);

  // apiHandlers
  const getImagesFromApi = (p) => {
    setLoading("Loading images");
    axios
      .get(
        `https://api.unsplash.com/search/photos/?client_id=pmZFvy6hwVKmhYNKLeBo5mHTHJ-ORJHBSm8zjkUWj4A&query=running&page=${page}&per_page=30&content_filter=high&SameSite=None`
      )
      .then((result) => {
        setImageCollection(result.data.results);
      })
      .catch((err) => setError("Connection to Unsplash failed"))
      .finally(
        setTimeout(() => {
          setLoading("");
        }, 250)
      );
  };

  const getImageFromApi = (url) => {
    setLoading("Loading a dog");
    axios
      .get(url)
      .then((result) => {
        setUrl(result.data.url);
      })
      .catch((err) => setError("The dog ran away!"))
      .finally(
        setTimeout(() => {
          setLoading("");
        }, 250)
      );
  };
  // end apiHandlers

  /*
  The "flow" is as;
  update local state with reducer which updates by separate
  useEffect "listening" on useState(passed as props to inputs) for each property.
  The complexity is from this being a school-project where I'm supposed
  to use Redux and lot of different hooks.
  */

  const callback = useCallback(() => {
    getImagesFromApi(page);
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    changeImage(state);
  }, [state, changeImage]);

  useEffect(() => {
    setuploadedImage(url);
  }, [url, setuploadedImage]);

  useEffect(() => {
    dispatch({ type: "size", payload: size });
  }, [size]);

  useEffect(() => {
    dispatch({ type: "x", payload: x });
  }, [x]);

  useEffect(() => {
    dispatch({ type: "y", payload: y });
  }, [y]);

  useEffect(() => {
    callback(page);
  }, [page, callback]);

  return (
    <>
      {isLoading.length > 0 && (
        <ActionBar>
          <span>{isLoading}</span>
        </ActionBar>
      )}
      {error.length > 0 && (
        <ActionBar onClick={() => setError("")}>
          <span>{error}</span>
        </ActionBar>
      )}
      <div>
        <div>
          <h4>Upload image from your device</h4>
          <input
            type='file'
            accept='image/png, image/jpeg'
            onChange={(e) => {
              const _url = URL.createObjectURL(e.target.files[0]);
              setUrl(_url);
            }}
            onDrop={(e) => console.log(e)}
          />
          <div>
            <h4>Load a random dog</h4>
            <button
              onClick={() => getImageFromApi("https://random.dog/woof.json")}
            >
              Get a dog image
            </button>
          </div>
          <div>
            <h4>Or pick an image below</h4>
            <div>
              <button
                onClick={() => {
                  setPage((prevPage) => prevPage + 1);
                }}
              >
                Get new images
              </button>
            </div>
            {imageCollection.length > 0
              ? imageCollection.map((image) => {
                  return (
                    <Thumb
                      key={image.id}
                      onClick={() => {
                        setUrl(image.urls.regular);
                      }}
                    >
                      <img src={image.urls.thumb} alt={image.alt_description} />
                    </Thumb>
                  );
                })
              : null}
          </div>
        </div>
        <RangeInput
          color={theme.primary}
          label='Size'
          value={size}
          setValue={setSize}
          range={{ min: 0, max: 100 }}
        />

        <RangeInput
          color={theme.primary}
          label='Horizontal position'
          value={x}
          setValue={setX}
          range={{ min: 0, max: 100 }}
        />

        <RangeInput
          color={theme.primary}
          label='Vertical position'
          value={y}
          setValue={setY}
          range={{ min: 0, max: 100 }}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    image: state.imageReducer,
    upload: state.uploadReducer,
    theme: state.themeReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeImage: (image) => dispatch(setImage(image)),
    setuploadedImage: (url) =>
      dispatch({ type: actions.UPLOAD_IMAGE, payload: url }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagePanel);

const Thumb = styled.div`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  overflow: hidden;
  margin: 4px;
  img {
    position: absolute;
    min-width: 30px;
    height: 30px;
  }
`;

const ActionBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #000;
`;
