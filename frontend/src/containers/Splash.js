import React from 'react';
import { Button } from '@material-ui/core';
import logo from '../logo.svg';
import './Splash.css';

const Splash = ({ login, register, guest }) =>
  <div className="Splash">
    <header className="Splash-header">
      <img src={logo} className="Splash-logo" alt="logo" />
      <p>Welcome to Food Recycler!</p>
    </header>
    <div className="Splash-login">
      <Button variant="contained" color="primary" onClick={login}>Login</Button>
      <Button variant="contained" color="primary" onClick={register}>Register</Button>
      <Button variant="contained" color="primary" onClick={guest}>Demo</Button>
    </div>
  </div>

export default Splash;
