import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";
import menuReducer from "./menuReducer";
import imageReducer from "./imageReducer";

const rootReducer = combineReducers({
  layoutReducer,
  menuReducer,
  imageReducer,
});

export default rootReducer;
