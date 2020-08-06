import {
    ADD_POST_BY_POST_TYPE
} from '../constants/actionType';

const initialState = {
    posts:[]
}

export default (state = initialState, action){
    switch(action.type){
        case ADD_POST_BY_POST_TYPE:{
            return state;
        }
        default:
            return state;
    }
} 