import React from 'react';
import Header from './components/Header'
// import Safety from './components/pages/Safety';
import Homepage from './components/pages/Homepage';
import './default.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
