import {
    ADD_MAIN_POSTS
} from '../constants/actionType';

const initialState = {
    mainPosts:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_MAIN_POSTS:{
            return {
                ...state, 
                mainPosts:action.payload
            };
        }
        default:
            return state;
    }
} 