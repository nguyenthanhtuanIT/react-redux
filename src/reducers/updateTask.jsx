import * as types from "../const/ActionTypes";

let initState = {
  id: "",
  name: "",
  status: false,
};
const myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.UPDATE_TASK:
      return action.task;
    default:
      return state;
  }
};
export default myReducer;
