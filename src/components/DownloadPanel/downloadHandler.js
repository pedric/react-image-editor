import React from "react";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

const downloadCanvas = (_width, _height) => {
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
    .finally(() => console.log(1));
};

export default downloadCanvas;

// var element = document.getElementById('downloadable-canvas');
// var rect = element.getBoundingClientRect();
// var width = rect.right - rect.left;
// var height = rect.bottom - rect.top;
// var today = new Date();
// var exportWidth = this.canvas.width * 12;
// var exportHeight = this.canvas.height * 12;
// var filename = customSettings.companyName.replace(' ','') + '_share_image_' + today.getFullYear();
// filename += '_' + today.getMonth() + '_' + today.getDate() + '_' + today.getHours() + today.getMinutes() + today.getSeconds() + '.png';
// html2canvas(element, {
//   width: exportWidth,
//   height: exportHeight,
//   useCORS: false,
//   taintTest: false,
//   allowTaint: true,
//   x: 9999,
//   y: 9999,
//   windowWidth: window.innerWidth,
//   windowHeight: window.innerHeight,
//   scrollX: 0,
//   scrollY: 0,
// })
// .then(function(canvas) {
//   canvas.toBlob(function(blob) {
//     saveAs(blob, filename);
//   });
// })
// .catch(function(err) {
//   console.log(err);
// });
