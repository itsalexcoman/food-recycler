import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Fridge, Community } from './containers'

const App = () =>
  <Router>
    <Header />
    <Route path="/" exact render={
      (props) => <Fridge profile="user" list="product" {...props} />
    } />
    <Route path="/community/" exact render={
      (props) => <Community {...props} />
    } />
    <Route path="/members/" exact render={
      (props) => <Fridge profile="group" list="user" {...props} />
    } />
  </Router>

export default App;
