import React from 'react';
import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Fridge from './containers/Fridge'
import Community from './containers/Community'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-main">
          <Route path="/" exact render={
            (props) => <Fridge type="Product" {...props} />
          } />
          <Route path="/community/" exact render={
            (props) => <Community {...props} />
          } />
          <Route path="/users/" exact render={
            (props) => <Fridge type="User" {...props} />
          } />
        </div>
      </div>
    </Router>
  );
}

export default App;
