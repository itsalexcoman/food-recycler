import React, { Component } from 'react';
import axios from 'axios';

import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';

class Group extends Component {
  constructor(props) {
    super(props)

    this.state = {
      group: this.props.group,
      users: 0
    }
  }

  async componentDidMount() {
    axios.get(process.env.REACT_APP_API_BASEURL + '/groups/' + this.state.group.id + '/users').then((result) => {
      this.setState({ users: result.data.result.length })
    })
  }

  render() {
    return (
      <ListItem>
        <ListItemAvatar>
        <GroupIcon style={{ fontSize: 50, color: "#FFD700" }} />
      </ListItemAvatar>
      <ListItemText className="multiline">
        <strong>{this.state.group.name}</strong> <br />
        Members: {this.state.users}
      </ListItemText>
      </ListItem >
    );
  }
}

export default Group;