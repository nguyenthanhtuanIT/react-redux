import * as types from "../const/ActionTypes";

let initState = {
  name: "",
  status: -1,
};
const myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.FILTER_TABLE:
      action.filter.status = parseInt(action.filter.status);
      return {
        name: action.filter.name,
        status: parseInt(action.filter.status),
      };
    default:
      return state;
  }
};
export default myReducer;
