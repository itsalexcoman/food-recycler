import React, { Component } from "react";
 
class MyFridge extends Component {
  render() {
    return (
        <div>
          <h1>MyFridge</h1>
          <ul className="header">
            <li><a href="/">Profile</a></li>
            <li><a href="/">Fridge</a></li>
          </ul>
        </div>
    );
  }
}
 
export default MyFridge;