import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/home-page.component'

//React Router for page navigation imports
import { Switch, Route, Redirect } from 'react-router-dom'

//

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
