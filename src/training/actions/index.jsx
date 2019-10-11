import * as types from '../../const/ActionTypes';

export const status=()=>{
    return {
        type: types.TOGGLE_STATUS
    }
}

export const sort = (sort) =>{
    return {
        type: types.SORT,
        sort
    }
}