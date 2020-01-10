import React, { Component } from "react";
 
class Community extends Component {
  render() {
    return (
        <div>
          <h1>Community</h1>
          <ul className="header">
            <li><a href="/">Groups You Manage</a></li>
            <li><a href="/">Groups You're In</a></li>
          </ul>
        </div>
    );
  }
}
 
export default Community;