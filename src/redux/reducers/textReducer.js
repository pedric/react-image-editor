import * as actions from "../actions/actionTypes";
import initialState from "./initialState";

const textReducer = (state = initialState.text, action) => {
  switch (action.type) {
    case actions.SET_TEXT:
      return { ...action.payload };
    default:
      return state;
  }
};

export default textReducer;
