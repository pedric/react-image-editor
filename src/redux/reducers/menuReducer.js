import * as actions from "../actions/actionTypes";
import initialState from "./initialState";

const menuReducer = (state = initialState.navigation, action) => {
  switch (action.type) {
    case actions.TOGGLE_PANEL:
      return { ...state, active: action.payload };
    default:
      return state;
  }
};

export default menuReducer;
