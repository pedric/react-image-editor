import React, { useState, useEffect } from "react";

const DownloadPanel = () => {
  const download = () => {
    console.log("download here...");
  };
  return (
    <>
      <button onClick={download}>Download image</button>
    </>
  );
};

export default DownloadPanel;
