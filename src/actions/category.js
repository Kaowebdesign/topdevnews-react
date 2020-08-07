import axios from "axios";
import {ADD_CATEGORY_SUCCESS} from '../constants/actionType';

export const getCategories = () => {
    return dispatch => {
        axios
            .get('https://topdevnews.pp.ua/wp-json/wp/v2/categories')
            .then( result => {
                dispatch(addCategories(result.data));
            })
            .catch( error => {
                console.log('error category => ',error);
            });
    }
}

const addCategories = categories => ({
    type:ADD_CATEGORY_SUCCESS,
    payload:categories
})