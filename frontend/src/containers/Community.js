import React, { Component } from "react";
import GroupList from "../components/GroupList";

class Community extends Component {
  render() {
    return (
      <div>
        <h1>Community</h1>
        <GroupList title="Groups You Manage" />
        <GroupList title="Groups You're In" />
      </div>
    );
  }
}

export default Community;