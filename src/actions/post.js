import axios from 'axios';
//add post constants
import {
    ADD_MAIN_POSTS,
    ADD_TOP_POSTS,
    ADD_RECOMEND_POSTS,
    ADD_NOVELTY_POSTS,
    ADD_STANDART_POSTS
} from '../constants/actionType';
//base url and posts type id constants
import {
    BASE_API_URL,
    POSTS,
    MAIN_POST_TYPE_ID,
    TOP_POST_TYPE_ID,
    RECOMEND_POST_TYPE_ID,
    NOVELTY_POST_TYPE_ID,
    STANDART_POST_TYPE_ID
} from '../constants/api';


export const getPost = (typeId) => {

    return dispatch => {
        axios
            .get(`${BASE_API_URL}${POSTS}`,{
                params:{
                    categories:typeId
                }
            })
            .then(result => {

                dispatch(addPost({typeId,posts:result.data}));
                
            })
            .catch(error => {
                console.log('error category => ',error);
            });
    }
}

const addPost = ({typeId,posts}) => {
    //var for current post type
    let type = '';
    //check psot type by type id
    switch(typeId){
        case MAIN_POST_TYPE_ID:{
            type = ADD_MAIN_POSTS;
            break;
        }
        case TOP_POST_TYPE_ID:{
            type = ADD_TOP_POSTS;
            break;
        }
        case RECOMEND_POST_TYPE_ID:{
            type = ADD_RECOMEND_POSTS;
            break;
        }
        case NOVELTY_POST_TYPE_ID:{
            type = ADD_NOVELTY_POSTS;
            break;
        }
        case STANDART_POST_TYPE_ID:{
            type = ADD_STANDART_POSTS;
            break;
        }
        default:{
            type = ADD_STANDART_POSTS;
        }
    }
    //return type and posts
    return {
        type,
        payload:posts
   }
};
