import * as actions from "./actionTypes";

export const setImage = (image) => {
  return { type: actions.SET_IMAGE, payload: image };
};
