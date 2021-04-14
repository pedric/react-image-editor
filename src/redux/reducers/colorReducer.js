import * as actions from "../actions/actionTypes";
import initialState from "./initialState";

const colorReducer = (state = initialState.color, action) => {
  switch (action.type) {
    case actions.SET_COLOR:
      return { ...action.payload };
    default:
      return state;
  }
};

export default colorReducer;
