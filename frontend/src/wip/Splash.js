import React from 'react';
import logo from '../logo.svg';
import './Splash.css';
import Button from '@material-ui/core/Button';

const Splash = () => {
  return (
    <div className="Splash">
      <header className="Splash-header">
        <img src={logo} className="Splash-logo" alt="logo" />
        <p>Welcome to Food Recycler!</p>
      </header>
      <div className="Splash-login">
        <Button variant="contained" color="primary">Login</Button>
        <Button variant="contained" color="primary">Register</Button>
      </div>
    </div>
  );
}

export default Splash;
