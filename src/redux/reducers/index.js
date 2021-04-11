import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers({ layoutReducer, menuReducer });

export default rootReducer;
