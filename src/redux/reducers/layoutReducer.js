import * as actions from "../actions/actionTypes";
import initialState from "./initialState";

const layoutReducer = (state = initialState.layout, action) => {
  switch (action.type) {
    case actions.SET_LAYOUT:
      return {
        ...state,
        name: action.payload.name,
        x: action.payload.x,
        y: action.payload.y,
      };
    default:
      return state;
  }
};

export default layoutReducer;
