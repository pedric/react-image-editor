import * as actions from "../actions/actionTypes";
import initialState from "./initialState";

const uploadReducer = (state = initialState.uploads, action) => {
  switch (action.type) {
    case actions.UPLOAD_IMAGE:
      return { ...state, image: action.payload };
    case actions.UPLOAD_LOGO:
      return { ...state, logo: action.payload };
    default:
      return state;
  }
};

export default uploadReducer;
