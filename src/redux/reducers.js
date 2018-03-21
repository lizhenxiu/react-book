import {combineReducers} from "redux";

import comment from 'reducers/comment';
import userInfo from 'reducers/userInfo';


export default combineReducers({
    comment,
    userInfo
});