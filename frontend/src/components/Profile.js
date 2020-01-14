import React, { Component } from 'react';
import axios from 'axios';
import { Avatar, Button, Grid, Typography } from '@material-ui/core';

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }
  }

  async componentDidMount() {
    axios.get(process.env.REACT_APP_API_BASEURL + '/users/2').then((result) => {
      this.setState({ user: result.data.result })
    })
  }

  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Avatar style={{ width: 200, height: 200, margin: 10 }} />
        </Grid>
        <Grid item>
          <Typography variant="h5">{this.state.user.full_name}</Typography>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <Button color="primary" variant="contained" style={{margin: 10}}>Users</Button>
            </Grid>
            <Grid item>
              <Button color="primary" variant="contained" style={{margin: 10}}>Products</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1">Email: {this.state.user.email}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Room Number: {this.state.user.room_number}</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Profile;