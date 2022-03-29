import { combineReducers } from "redux";
import rowReducer from "./rowReducer";

export default combineReducers({
  rows: rowReducer,
});
