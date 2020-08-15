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


export const getPost = (postId) => {

    return dispatch => {
        axios
            .get(`${BASE_API_URL}${POSTS}`,{
                params:{
                    categories:postId
                }
            })
            .then(result => {

                const mainPosts = result.data.filter(item => item.categories == MAIN_POST_TYPE_ID);
                const topPosts = result.data.filter(item => item.categories == TOP_POST_TYPE_ID);
                const standartPosts = result.data.filter(item => item.categories == STANDART_POST_TYPE_ID);
                const recomendPosts = result.data.filter(item => item.categories == RECOMEND_POST_TYPE_ID);
                const noveltyPosts = result.data.filter(item => item.categories == NOVELTY_POST_TYPE_ID);

                dispatch(addPost({postId:MAIN_POST_TYPE_ID,posts:mainPosts}));
                dispatch(addPost({postId:TOP_POST_TYPE_ID,posts:topPosts}));
                dispatch(addPost({postId:STANDART_POST_TYPE_ID,posts:standartPosts}));
                dispatch(addPost({postId:RECOMEND_POST_TYPE_ID,posts:recomendPosts}));
                dispatch(addPost({postId:NOVELTY_POST_TYPE_ID,posts:noveltyPosts}));
                
            })
            .catch(error => {
                console.log('error category => ',error);
            });
    }
}

const addPost = ({postId,posts}) => {
    //var for current post type
    let type = '';
    //check psot type by type id
    switch(postId){
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
