import {combineReducers} from "redux";

import comment from 'reducers/comment';
import userInfo from 'reducers/userInfo';
import counter from 'reducers/counter';


export default combineReducers({
    comment,
    userInfo,
    counter
});