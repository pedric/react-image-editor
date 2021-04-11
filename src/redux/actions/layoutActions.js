import * as actions from "./actionTypes";

export const setLayout = (layout) => {
  return { type: actions.SET_LAYOUT, payload: layout };
};
