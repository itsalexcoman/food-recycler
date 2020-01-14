import React, { Component } from 'react';
import axios from 'axios';

import { List, Typography } from '@material-ui/core';
import { User } from '..';

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    axios.get(process.env.REACT_APP_API_BASEURL + '/users').then((result) => {
      this.setState({ users: result.data.result })
    })
  }

  render() {
    return (
      <div className={this.props.className}>
        <Typography variant="h4">Users</Typography>
        <List>
          {this.state.users.map((user) => <User key={user.id} profile={user} />)}
        </List>
      </div>
    )
  }
}

export default UserList;