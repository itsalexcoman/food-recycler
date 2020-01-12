import React, { Component } from 'react';
import List from '@material-ui/core/List';

import axios from 'axios'

import User from '../items/User'

const API_BASE_URL = 'https://127.0.0.1:3001/api'

class UserList extends Component {
    constructor(props) {
      super(props) 
      this.state = {
        users: []
      }
    }

    componentDidMount() {
      fetch(API_BASE_URL + '/users').then((result) => {
        this.setState({users: result.data.results})
      })
    }

    render() {
      return (
        <div>
        <h3>Users</h3>
        <List>
          {this.state.users.map((user) => <User key={user.id} profile={user} />)}
        </List>
        </div>
      )
    }
  }

export default UserList;