import styled from "styled-components";

export const Canvas = styled.div`
  position: relative;
  display: block;
  height: 0px;
  margin: 0 auto;
  overflow: hidden;
  background-repeat: no-repeat;

  &.downloadable {
    position: fixed;
    top: 50px;
    right: 400px;
    width: 300px;
    height: 300px;
    padding-bottom: 0;
    background-color: lime;
  }

  /*img {
      display: none;
      position: absolute;
      transform: translate(-50%, -50%);
    }*/
`;

export const DownloadableCanvas = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  overflow: hidden;
  background-repeat: no-repeat;
  position: fixed;
  top: 50px;
  right: 400px;
  width: 300px;
  height: 300px;
  padding-bottom: 0;

  /*img {
      display: none;
      position: absolute;
      transform: translate(-50%, -50%);
    }*/
`;
