import * as actions from "./actionTypes";

export const toggleMenu = (panel) => {
  return { type: actions.TOGGLE_PANEL, payload: panel };
};
