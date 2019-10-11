import * as types from "../const/ActionTypes";

let initState = {
  by: "",
  value: 1,
};
const myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SORT_TASK:
      console.log(action);
      return {
        by: action.sort.by,
        value: action.sort.value,
      };
    default:
      return state;
  }
};
export default myReducer;
