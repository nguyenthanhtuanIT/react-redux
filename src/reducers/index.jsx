import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import updateTask from "./updateTask";
import filterTask from "./filterTask";
import searchTask from "./searchTask";
import sortTask from "./sortTask";

const myReducer = combineReducers({
  tasks,
  isDisplayForm,
  updateTask,
  filterTask,
  searchTask,
  sortTask,
});

export default myReducer;
