import * as actions from "../actions/actionTypes";
import initialState from "./initialState";

const imageReducer = (state = initialState.image, action) => {
  switch (action.type) {
    case actions.SET_IMAGE:
      const { upload, x, y, size } = action.payload;
      return { upload, x, y, size };
    default:
      return state;
  }
};

export default imageReducer;
