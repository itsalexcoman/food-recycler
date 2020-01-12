import React from 'react';
import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Fridge from './containers/Fridge'
import Community from './containers/Community'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
            <div style={{padding:'10px'}}>
              <Route path="/" exact render={
                  (props) => <Fridge type="User" {...props} />
                } />
              <Route path="/community/" exact render={
                  (props) => <Community {...props} />
                } />
            </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
