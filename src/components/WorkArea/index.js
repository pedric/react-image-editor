import React from "react";
import LayoutPanel from "../LayoutPanel";
import ImagePanel from "../ImagePanel";
import LogoPanel from "../LogoPanel";
import ColorPanel from "../ColorPanel";
import DownloadPanel from "../DownloadPanel";
import TextPanel from "../TextPanel";

const WorkArea = (props) => {
  return (
    <div>
      <pre>workarea - {props.activeTab}</pre>
      {props.activeTab && props.activeTab.toLowerCase() === "layout" && (
        <LayoutPanel />
      )}
      {props.activeTab && props.activeTab.toLowerCase() === "image" && (
        <ImagePanel />
      )}
      {props.activeTab && props.activeTab.toLowerCase() === "logo" && (
        <LogoPanel />
      )}
      {props.activeTab && props.activeTab.toLowerCase() === "colors" && (
        <ColorPanel />
      )}
      {props.activeTab && props.activeTab.toLowerCase() === "download" && (
        <DownloadPanel />
      )}
      {props.activeTab && props.activeTab.toLowerCase() === "text" && (
        <TextPanel />
      )}
    </div>
  );
};

export default WorkArea;
