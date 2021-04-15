import React, { useState } from "react";
import { connect } from "react-redux";
import downloadCanvas from "./downloadHandler";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

const DownloadPanel = ({ layout }) => {
  const [loading, setLoading] = useState(false);
  const download = (_width, _height) => {
    setLoading(true);
    const exportWidth = _width * 12;
    const exportHeight = _height * 12;

    const canvasSettings = {
      width: exportWidth,
      height: exportHeight,
      useCORS: false,
      taintTest: false,
      allowTaint: true,
      x: 9999,
      y: 9999,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      scrollX: 0,
      scrollY: 0,
    };

    let today = new Date();
    let filename = "_social_editor_" + today.getFullYear();
    filename +=
      "_" +
      today.getMonth() +
      "_" +
      today.getDate() +
      "_" +
      today.getHours() +
      today.getMinutes() +
      today.getSeconds() +
      ".png";

    let element = document.getElementById("downloadable-canvas");
    let rect = element.getBoundingClientRect();
    html2canvas(element, canvasSettings)
      .then((canvas) => {
        console.log(canvas);
        canvas.toBlob((blob) => {
          saveAs(blob, filename);
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {loading && <h1>laddar..</h1>}
      <button onClick={() => download(layout.x, layout.y)}>
        Download image
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    layout: state.layoutReducer,
  };
};

export default connect(mapStateToProps)(DownloadPanel);
