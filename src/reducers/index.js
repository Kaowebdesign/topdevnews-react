import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router';
import category from "./category"

const rootReducer = (history) => combineReducers({
    category,
    router: connectRouter(history),
});

export default rootReducer;

