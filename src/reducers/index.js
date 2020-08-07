import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router';
import category from "./category";
import post from "./post";

const rootReducer = (history) => combineReducers({
    category,
    post,
    router: connectRouter(history),
});

export default rootReducer;

