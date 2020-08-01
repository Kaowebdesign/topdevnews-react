import {
    ADD_CATEGORY
} from '../constants/actionType';

const defaultState = {
    categories:[
        {
            id:1,
            name:'react'    
        },
        {
            id:2,
            name:'vue'
        }
    ]
};

export default (state = defaultState,action) => {
    switch(action.type){
        case ADD_CATEGORY:{
             return state;
        }
        default:
            return state;
    }
}