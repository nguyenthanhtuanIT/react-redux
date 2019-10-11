import * as types from '../../const/ActionTypes';

var initState={
        by:'',
        value:1
};

var myReducer = (state = initState, action)=>{

    if(action.type === types.SORT)
    {
        var {by,value} = action.sort;
        return {
                by,
                value
        }
    }
    return state;
};

export default myReducer;