import axios from 'axios';
import {ADD_POST_BY_POST_TYPE} from '../constants/actionType';
import {BASE_API_URL,POSTS} from '../constants/api';


export const getPost = (typeId) => {
    return dispatch => {
        axios
            .get(`${BASE_API_URL}${POSTS}`,{
                params:{
                    categories:typeId
                }
            })
            .then(result => {
                dispatch(addPosts(result.data));
            })
            .catch(error => {
                console.log('error category => ',error);
            });
    }
}

const addPosts = posts => ({
    type:ADD_POST_BY_POST_TYPE,
    payload:posts
})