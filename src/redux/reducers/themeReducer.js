import * as actions from "../actions/actionTypes";
import initialState from "./initialState";

const themeReducer = (state = initialState.theme, action) => {
  switch (action.type) {
    case actions.SET_THEME:
      return { ...action.payload };
    default:
      return state;
  }
};

export default themeReducer;
