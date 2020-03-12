/*
ver 0.1 
- removed unnecessary imports, refactored main App component to functional one just for simple space reasons
ver 0.2
- organized top level logic for layouts

TODO:
- Remove <div> from App component, pass className and styles to the layouts? Additional check up needed

*/
import React from "react";
import "./App.css";
import "../src/assets/scss/material-dashboard-pro-react.scss?v=1.8.0";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

//Router
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";

// Pages and routes
import Dashboard from "./layouts/Dashboard/Dashboard.js";
import Auth from "./layouts/Auth/Auth.js";
/*
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import AuthRoute from "./components/AuthRoute";
*/

// Authentication
import axios from "axios";
import jwtDecode from "jwt-decode";

const token = localStorage.FBidToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/auth/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}
// End of Authentication
const history = createBrowserHistory();
//TODO: correct back to what it was after timeline was solved
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/dashboard" component={Dashboard} />
            <Redirect from="/" to="/auth/login" />
          </Switch>
        </Router>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
