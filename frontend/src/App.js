import React from 'react';
import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MyFridge from './containers/Fridge'
import Community from './containers/Community'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
            <div style={{padding:'10px'}}>
              <Route path="/" exact component={MyFridge} />
              <Route path="/community/" component={Community} />
            </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
