import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// Reducers
import testReducer from "./redux-test/redux-test.reducer";
import userReducer from "./reducers/userReducer";
import uiReducer from "./reducers/uiReducer";
import eventReducer from "./reducers/eventReducer";

const middlewares = [thunk, logger];

const initialState = {};

const reducers = combineReducers({
  testValueCombiner: testReducer,
  user: userReducer,
  UI: uiReducer,
  event: eventReducer
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);
export default store;
