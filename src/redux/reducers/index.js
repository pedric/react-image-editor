import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";
import menuReducer from "./menuReducer";
import imageReducer from "./imageReducer";
import logoReducer from "./logoReducer";
import textReducer from "./textReducer";
import colorReducer from "./colorReducer";

const rootReducer = combineReducers({
  layoutReducer,
  menuReducer,
  imageReducer,
  logoReducer,
  textReducer,
  colorReducer,
});

export default rootReducer;
