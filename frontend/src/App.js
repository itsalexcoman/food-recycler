import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Splash, Header, Fridge, Community } from './components/containers';
import { Login, Register } from './components';

export default class extends Component {
  state = {
    auth: {
      isAuthenticated: false,
      doLogin: false,
      doRegister: false
    }
  }
  
  handleLogin = () => this.setState( { auth: { doLogin: true, doRegister: false } } );
  handleRegister = () => this.setState( { auth: { doRegister: true, doLogin: false } } );
  handleGuest = () => this.setState( { auth: { isAuthenticated: true } } );

  render() {
    if (!this.state.auth.isAuthenticated && !this.state.auth.doLogin && !this.state.auth.doRegister) {
      return <Splash login={this.handleLogin} register={this.handleRegister} guest={this.handleGuest} />
    }
    if (!this.state.auth.isAuthenticated && this.state.auth.doLogin && !this.state.auth.doRegister) {
      return <Login toRegister={this.handleRegister} />
    }
    if (!this.state.auth.isAuthenticated && !this.state.auth.doLogin && this.state.auth.doRegister) {
      return <Register toLogin={this.handleLogin} />
    }
    if (this.state.auth.isAuthenticated) {
      return (
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
      );
    }
  }
}
