import { combineReducers } from "redux";
import modalReducer from "./modalReducer.js";
const uiReducer = combineReducers({
  modal: modalReducer
});

export default uiReducer;
