import axios from 'axios';
import {ADD_POST_BY_POST_TYPE} from '../constants/actionType';

export const getPost = () => {
    return dispatch => {
        axios
            .get('https://topdevnews.pp.ua/wp-json/acf/v3/posts')
            .then(result => {
                dispatch(addPosts(result.data));
            })
            .catch(error => {
                console.log('error category => ',error);
            })
    }
}

const addPosts = posts => ({
    type:ADD_POST_BY_POST_TYPE,
    payload:posts
})