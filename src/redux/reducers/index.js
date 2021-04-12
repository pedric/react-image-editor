import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";
import menuReducer from "./menuReducer";
import imageReducer from "./imageReducer";
import logoReducer from "./logoReducer";

const rootReducer = combineReducers({
  layoutReducer,
  menuReducer,
  imageReducer,
  logoReducer,
});

export default rootReducer;
