import React from "react";
import "./App.css";
import "../src/assets/scss/material-dashboard-pro-react.scss?v=1.8.0";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

//Router
import { BrowserRouter } from "react-router-dom";

// Pages and routes
import HomePage from "./pages/home-page.component";
import WeddingPage from "./pages/wedding-page/wedding-page.component";
import Login from "./pages/login/login.component";
import Signup from "./pages/signup/signup.component";
import Dashboard from "./pages/dashboard-page/dashboard.component";
import Guests from "./pages/guests/guests.components";
import AddGuestPage from "./pages/add-guest-page/add-guest-page.components";
import TimelinePage from "./pages/TimelinePage/TimelinePage.js";
import HomeDashboard from "./layouts/HomeDashboard/HomeDashboard.js";

//React Router for page navigation imports
import { Switch, Route, Redirect } from "react-router-dom";

// Authentication
import axios from "axios";
import jwtDecode from "jwt-decode";

const token = localStorage.FBidToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}
// End of Authentication

//TODO: correct back to what it was after timeline was solved
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <HomeDashboard />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
