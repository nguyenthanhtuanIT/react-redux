import * as types from "../const/ActionTypes";

var s4 = () => {
  return Math.floor(Math.random() * 10 + 1);
};

var randId = () => {
  return s4() + s4() + "-" + s4() + s4();
};

var findIndex = (tasks, id) => {
  var res = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      return (res = index);
    }
  });
  return res;
};

var data = JSON.parse(localStorage.getItem("tasks"));
var initState = data ? data : [];
var myReducer = (state = initState, action) => {
  var id = "";
  var index = -1;
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      var task = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status ? true : false,
      };
      console.log(task);

      if (!task.id) {
        task.id = randId();
        state.push(task);
      } else {
        index = findIndex(state, task.id);
        state[index] = task;
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.UPDATE_STATUS_TASK:
      id = action.id;
      index = findIndex(state, id);
      state[index] = {
        ...state[index],
        status: !state[index].status,
      };
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.DELETE_TASK:
      id = action.id;
      index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
