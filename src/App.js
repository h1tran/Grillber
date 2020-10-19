import React from 'react';
import Header from './components/Header'
import Safety from './components/pages/Safety'
import Homepage from './components/pages/Homepage';
import './default.scss';
import { BrowserRouter as HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
          <Route path="/" exact component={Homepage} />
          <Route path="/Safety" component={Safety} />
      </div>
    </HashRouter>
  );
}

export default App;
