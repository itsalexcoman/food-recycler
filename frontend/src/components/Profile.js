import React, { Component } from 'react';
import axios from 'axios';
import { Avatar, Button, Grid, Typography } from '@material-ui/core';

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profileData: {}
    }
  }

  async componentDidMount() {
    if (this.props.type === "user") {
      axios.get(process.env.REACT_APP_API_BASEURL + '/users/2').then((result) => {
        this.setState({ profileData: result.data.result })
      })
    }
    if (this.props.type === "group") {
      axios.get(process.env.REACT_APP_API_BASEURL + '/groups/3').then((result) => {
        this.setState({ profileData: result.data.result })
      })
    }
  }

  render() {
    if (this.props.type === "user") {
      return (
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Avatar style={{ width: 150, height: 150, margin: 20 }} />
          </Grid>
          <Grid item>
            <Typography variant="h5">{this.state.profileData.full_name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{this.state.profileData.email}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Room Number: {this.state.profileData.room_number}</Typography>
          </Grid>
        </Grid>
      );
    }
    if (this.props.type === "group") {
      return (
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Avatar style={{ width: 150, height: 150, margin: 20 }} />
          </Grid>
          <Grid item>
            <Typography variant="h5">{this.state.profileData.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{this.state.profileData.description}</Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Button color="primary" variant="contained" style={{ margin: 10 }}>Members</Button>
              </Grid>
              <Grid item>
                <Button color="primary" variant="contained" style={{ margin: 10 }}>Products</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    }
  }
}

export default Profile;