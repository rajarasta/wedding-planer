import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/home-page.component';
import WeddingPage from "./pages/wedding-page/wedding-page.component";
import LoginPage from "./pages/login-page/login-page.component";
import Dashboard from "./pages/dashboard-page/dashboard.component";
import Guests from './pages/guests/guests.components';
import AddGuestPage from './pages/add-guest-page/add-guest-page.components'


//React Router for page navigation imports
import { Switch, Route, Redirect } from 'react-router-dom'

//

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path='/' component={LoginPage} />
          <Route exact path='/home-page' component={HomePage} />
          <Route path='/wedding-page' component={WeddingPage} />
          <Route path='/login-page' component={LoginPage} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/guests' component={Guests} />
          <Route path='/add-guest-page' component={AddGuestPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
