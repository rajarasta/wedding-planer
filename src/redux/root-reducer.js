import {combineReducers} from "redux";

import userReducer from "./user/user.reducer";
import testReducer from "./redux-test/redux-test.reducer";

export default combineReducers({
    user: userReducer,
    testValueCombiner: testReducer
});



