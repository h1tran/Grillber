import React from 'react';
import Header from './components/Header'
import Safety from './components/pages/Safety'
import Homepage from './components/pages/Homepage';
import './default.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path="/Safety" component={Safety} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
