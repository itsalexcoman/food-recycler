import React, { Component } from 'react';
import axios from 'axios';

import List from '@material-ui/core/List';
import User from '../items/User';

const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    axios.get(API_BASE_URL + '/users').then((result) => {
      this.setState({ users: result.data.result })
    })
  }

  render() {
    return (
      <div className={this.props.className}>
        <h2>Users</h2>
        <List>
          {this.state.users.map((user) => <User key={user.id} profile={user} />)}
        </List>
      </div>
    )
  }
}

export default UserList;