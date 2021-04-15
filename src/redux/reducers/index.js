import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";
import menuReducer from "./menuReducer";
import imageReducer from "./imageReducer";
import logoReducer from "./logoReducer";
import textReducer from "./textReducer";
import colorReducer from "./colorReducer";
import uploadReducer from "./uploadReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  layoutReducer,
  menuReducer,
  imageReducer,
  logoReducer,
  textReducer,
  colorReducer,
  uploadReducer,
  themeReducer,
});

export default rootReducer;
