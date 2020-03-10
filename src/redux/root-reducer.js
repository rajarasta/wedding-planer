import { combineReducers } from "redux";

import userReducer from "./reducers/userReducer";
import uiReducer from "./reducers/uiReducer";
import testReducer from "./redux-test/redux-test.reducer";

export default combineReducers({
  user: userReducer,
  UI: uiReducer,
  testValueCombiner: testReducer
});
