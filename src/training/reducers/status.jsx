import * as types from '../../const/ActionTypes';

var initState = false;

var myReducer = (state = initState,action)=>{
    if(action.type === types.TOGGLE_STATUS)
    {
       state = !state;
    }
    return state;
};

export default myReducer;
