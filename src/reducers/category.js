import {
    ADD_CATEGORY_SUCCESS
} from '../constants/actionType';

const initialState = {
    categories:[]
};

export default (state = initialState,action) => {
    switch(action.type){
        case ADD_CATEGORY_SUCCESS:{
             return {
                ...state,
                categories:[...action.payload]
             }
        }
        default:
            return state;
    }
}