import * as actions from "../actions/actionTypes";
import initialState from "./initialState";

const logoReducer = (state = initialState.logo, action) => {
  switch (action.type) {
    case actions.SET_LOGO:
      // const { active, top, right, bottom, left, opacity, width } = action.payload;
      return { ...action.payload };
    default:
      return state;
  }
};

export default logoReducer;
