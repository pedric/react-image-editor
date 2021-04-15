import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Canvas = ({ layout, image, logo, text, color, uploads }) => {
  const imageSize = useMemo(() => {
    return image.size * 2;
  }, [image.size]);

  const _image = useMemo(() => {
    return image.upload;
  }, [image.upload]);

  useEffect(() => {
    console.log(1);
  }, [image.upload]);

  const Canvas = styled.div`
    background: tomato;
    position: relative;
    display: block;
    height: 0px;
    width: ${layout.x}%;
    padding-bottom: ${layout.y}%;
    margin: 0 auto;
    overflow: hidden;
    background-repeat: no-repeat;
    background-image: url(${uploads.image});
    background-size: ${imageSize}%;
    background-position: ${image.x}% ${image.y}%;

    img {
      display: none;
      position: absolute;
      top: ${image.y}%;
      left: ${image.x}%;
      width: ${imageSize}%;
      transform: translate(-50%, -50%);
    }
  `;

  return (
    <>
      <Canvas>
        <img src={uploads.image} alt='#' />
      </Canvas>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    layout: state.layoutReducer,
    image: state.imageReducer,
    logo: state.logoReducer,
    text: state.textReducer,
    color: state.colorReducer,
    uploads: state.uploadReducer,
  };
};

export default connect(mapStateToProps)(Canvas);
