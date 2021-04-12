import * as actions from "../actions/actionTypes";
import initialState from "./initialState";

const imageReducer = (state = initialState.image, action) => {
  switch (action.type) {
    case actions.SET_IMAGE:
      const { upload, x, y, size } = action.payload;
      return { upload, x, y, size };
    // case actions.SET_IMAGE_POSITION:
    //   return { ...state, x: action.payload.x, y: action.payload.y };
    // case actions.SET_IMAGE_SIZE:
    //   return { ...state, size: action.payload };
    default:
      console.log("2", action);
      return state;
  }
};

export default imageReducer;
