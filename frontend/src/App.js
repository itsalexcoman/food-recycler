import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Splash, Header, Fridge, Community } from './components/containers';
import { Login, Register } from './components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAuthSplash, setAuthLogin, setAuthRegister, setAuthDone } from './actions/screenActions';

class App extends Component {
  handleLogin = () => this.props.setAuthLogin();
  handleRegister = () => this.props.setAuthRegister();
  handleDemo = () => this.props.setAuthDone();

  render() {
    const { authStatus } = this.props.ui;
    if (!authStatus.isAuthenticated && !authStatus.doLogin && !authStatus.doRegister) {
      return <Splash login={this.handleLogin} register={this.handleRegister} guest={this.handleDemo} />
    }
    if (!authStatus.isAuthenticated && authStatus.doLogin && !authStatus.doRegister) {
      return <Login toRegister={this.handleRegister} />
    }
    if (!authStatus.isAuthenticated && !authStatus.doLogin && authStatus.doRegister) {
      return <Register toLogin={this.handleLogin} />
    }
    if (authStatus.isAuthenticated) {
      return (
        <Router>
          <Header />
          <Route path="/" exact component={Fridge} />
          <Route path="/community/" exact component={Community} />
        </Router>
      );
    }
  }
}

App.propTypes = {
  ui: PropTypes.object.isRequired,
  setAuthSplash: PropTypes.func.isRequired,
  setAuthLogin: PropTypes.func.isRequired,
  setAuthRegister: PropTypes.func.isRequired,
  setAuthDone: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  ui: state.ui
});

const mapActionsToProps = { setAuthSplash, setAuthLogin, setAuthRegister, setAuthDone };

export default connect(mapStateToProps, mapActionsToProps)(App);