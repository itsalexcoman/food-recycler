import React, { Component } from "react";
import GroupList from "../components/lists/GroupList";

class Community extends Component {
  render() {
    return (
      <div>
        <h1>I am Community</h1>
        <GroupList title="Groups You Manage" />
        <GroupList title="Groups You're In" />
      </div>
    );
  }
}

export default Community;