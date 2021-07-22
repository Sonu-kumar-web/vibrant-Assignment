// Useful in case of multiple reducer if we have in future
import { combineReducers } from "redux";

import modifyPost from "./post";

// Pass your all Reducers
const rootReducer = combineReducers({ modifyPost });

export default rootReducer;
