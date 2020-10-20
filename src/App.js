import React from 'react';
import Header from './components/Header'
import Safety from './components/pages/Safety'
import Homepage from './components/pages/Homepage';
import UserSignup from './components/pages/User-Signup';
import './default.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename='/'>
      <div className="App">
          <Switch>
              <Route exact path='/'>
                <Header />
                <Homepage />
              </Route>
              <Route exact path='/Safety'>
                <Header />
                <Safety />
              </Route>
              <Route exact path='/User-Signup'>
                <UserSignup />
              </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
