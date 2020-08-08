import axios from "axios";
import {ADD_CATEGORY_SUCCESS} from '../constants/actionType';
import {BASE_API_URL,CATEGORIES} from '../constants/api';

export const getCategories = () => {
    return dispatch => {
        axios
            .get(`${BASE_API_URL}${CATEGORIES}`)
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