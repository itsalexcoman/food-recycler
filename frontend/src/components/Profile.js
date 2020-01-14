import React, { Component } from 'react';
import axios from 'axios';
import { Avatar, Button, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import './Profile.css'

const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

class Profile extends Component {
  divClasses;
  constructor(props) {
    super(props)
    this.divClasses = props.className + " Profile";

    this.state = {
      user: {}
    }
  }

  async componentDidMount() {
    axios.get(API_BASE_URL + '/users/2').then((result) => {
      this.setState({ user: result.data.result })
    })
  }

  render() {
    return (
      <div className={this.divClasses}>
        <ListItem>
          <ListItemAvatar className="Profile-pic">
            <Avatar style={{ width: 200, height: 200 }} />
          </ListItemAvatar>
          <h2>
            <strong>{this.state.user.full_name}</strong> <br />
          </h2>
          <div className="Profile-buttons">
            <Button
              color="primary"
              variant="contained"
            >Users</Button>
            <Button
              color="primary"
              variant="contained"
            >Products</Button>
          </div>
          <ListItemText className="multiline Profile-info">
            Email: {this.state.user.email} <br />
            Room Number: {this.state.user.room_number}
          </ListItemText>
        </ListItem>
      </div>
    );
  }
}

export default Profile;