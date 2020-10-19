import React from 'react';
import Header from './components/Header'
import Safety from './components/pages/Safety'
import Homepage from './components/pages/Homepage';
import './default.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/Grillber" exact component={Homepage} />
          <Route path="/Safety" component={Safety} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
