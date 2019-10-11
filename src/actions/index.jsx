import * as types from "../const/ActionTypes";

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};

export const addTask = task => {
  return {
    type: types.ADD_TASK,
    task,
  };
};

export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM,
  };
};

export const closeForm = () => {
  return {
    type: types.CLOSE_FORM,
  };
};

export const openForm = () => {
  return {
    type: types.OPEN_FORM,
  };
};

export const updateStatusTask = id => {
  return {
    type: types.UPDATE_STATUS_TASK,
    id,
  };
};

export const onDeleteTask = id => {
  return {
    type: types.DELETE_TASK,
    id,
  };
};
export const onUpdateTask = task => {
  return {
    type: types.UPDATE_TASK,
    task,
  };
};
export const filterTask = filter => {
  return {
    type: types.FILTER_TABLE,
    filter,
  };
};

export const searchTask = keyword => {
  return {
    type: types.SEARCH_TASK,
    keyword,
  };
};
export const sortTask = sort => {
  return {
    type: types.SORT_TASK,
    sort,
  };
};
