import * as types from "../const/ActionTypes";

let initState = {
  keyword: "",
};
const myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SEARCH_TASK:
      return action.keyword;
    default:
      return state;
  }
};
export default myReducer;
