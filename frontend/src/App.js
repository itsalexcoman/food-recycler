import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Fridge, Community } from './containers'

const App = () =>
  <Router>
    <Header />
    <Route path="/" exact render={
      (props) => <Fridge type="Product" {...props} />
    } />
    <Route path="/community/" exact render={
      (props) => <Community {...props} />
    } />
    <Route path="/users/" exact render={
      (props) => <Fridge type="User" {...props} />
    } />
  </Router>

export default App;
