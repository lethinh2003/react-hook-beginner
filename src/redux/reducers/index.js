import { combineReducers } from "redux";
import todos from "./todos";
import apiTodo from "./apiTodo";

export default combineReducers({
  todos,
  apiTodo,
});
