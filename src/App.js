import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/home-page.component'
import WeddingPage from "./pages/wedding-page/wedding-page.component";
import LoginPage from "./pages/login-page/login-page.component"


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
        </Switch>
      </div>
    );
  }
}

export default App;
