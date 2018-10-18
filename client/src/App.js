import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './auth/Login';
import Dashboard from './Dashboard';
import Groups from './Groups';


class App extends Component {

  render() {
    return(
      <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/dashboard' component={Dashboard}/>
            <Route render={() => <h3>No Match</h3>} />
          </Switch>
      </BrowserRouter>
    )}
}

export default App;
