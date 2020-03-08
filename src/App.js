import React from "react";
import logo from "./logo.svg";
import "./App.css";

import HomePage from "./pages/home-page.component";
import WeddingPage from "./pages/wedding-page/wedding-page.component";
import LoginPage from "./pages/login-page/login-page.component";
import Dashboard from "./pages/dashboard-page/dashboard.component";
import Guests from "./pages/guests/guests.components";
import AddGuestPage from "./pages/add-guest-page/add-guest-page.components";
import TimelinePage from "./pages/TimelinePage/TimelinePage.js";
import DashboardLayout from "./layouts/Admin/Admin";

//React Router for page navigation imports
import { Switch, Route, Redirect } from "react-router-dom";

//
//TODO: correct back to what it was after timeline was solved
class App extends React.Component {
  render() {
    return (
      <div className="App">
       <DashboardLayout/>
      </div>
    );
  }
}
export default App;
