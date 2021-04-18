import React, { useMemo } from "react";
import { connect } from "react-redux";
import { Canvas, DownloadableCanvas } from "./styles";
import Logo from "./components/Logo";
import Text from "./components/Text";
import Grid from "./components/Grid";
import Filter from "./components/Filter";
import checked from "../../images/checked.png";

const EditorMonitor = ({ layout, image, logo, text, color, uploads }) => {
  const imageSize = useMemo(() => {
    return image.size * 2;
  }, [image.size]);

  // const _image = useMemo(() => {
  //   return image.upload;
  // }, [image.upload]);

  // useEffect(() => {
  //   console.log(1);
  // }, [image.upload]);

  const canvasStyles = {
    width: `${layout.x}%`,
    paddingBottom: `${layout.y}%`,
    backGroundColor: `${color.background}`,
    backgroundImage: `url(${uploads.image ? uploads.image : checked})`,
    backgroundSize: `${uploads.image ? imageSize + "%" : "20px"}`,
    backgroundRepeat: `${uploads.image ? "no-repeat" : "repeat"}`,
    backgroundPosition: `${image.x}% ${image.y}%`,
  };

  const DownloadableCanvasStyles = {
    position: "fixed",
    width: `${layout.x * 12}px`,
    height: `${layout.y * 12}px`,
    top: "9999px",
    left: "9999px",
    paddingBottom: "0",
    backgroundImage: `url(${uploads.image})`,
    backgroundSize: `${imageSize}%`,
    backgroundPosition: `${image.x}% ${image.y}%`,
  };

  const gridMargin = {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    margin: `${layout.margin}px`,
  };

  return (
    <>
      <Canvas style={canvasStyles}>
        <Filter />
        <div style={gridMargin}>
          <Logo />
          <Text />
          <Grid />
        </div>
      </Canvas>
      <DownloadableCanvas
        id='downloadable-canvas'
        style={DownloadableCanvasStyles}
      >
        <Filter />
        <div style={gridMargin}>
          <Logo />
          <Text />
          <Grid />
        </div>
      </DownloadableCanvas>
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

export default connect(mapStateToProps)(EditorMonitor);
