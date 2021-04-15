import * as actions from "../actions/actionTypes";
import initialState from "./initialState";

const textReducer = (state = initialState.text, action) => {
  switch (action.type) {
    case actions.SET_TEXT:
      return { ...state, ...action.payload };
    case actions.SET_CONTENT:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export default textReducer;
