import {
    ADD_MAIN_POSTS,
    ADD_TOP_POSTS,
    ADD_STANDART_POSTS
} from '../constants/actionType';

const initialState = {
    mainPosts:[],
    topPosts:[],
    standartPosts:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_MAIN_POSTS:{
            return {
                ...state, 
                mainPosts:action.payload
            };
        }
        case ADD_TOP_POSTS:{
            return{
                ...state,
                topPosts:action.payload
            }
        }
        case ADD_STANDART_POSTS:{
            return{
                ...state,
                standartPosts:action.payload
            }
        }
        default:
            return state;
    }
} 