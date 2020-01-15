import React, { Component } from "react";
import axios from "axios";
import { Avatar, Button, Grid, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { setFridgeProfile, setFridgeList } from "../../actions/screen.actions";
import PropTypes from "prop-types";

class Profile extends Component {
  state = {
    profileData: {}
  };

  setFridgeList = type => {
    this.props.setFridgeList(type);
  };

  async componentDidMount() {
    if (this.props.ui.fridgeOptions.profile === "user") {
      axios.get(process.env.REACT_APP_API_BASEURL + "/users/2").then(result => {
        this.setState({ profileData: result.data.result });
      });
    }
    if (this.props.ui.fridgeOptions.profile === "group") {
      axios
        .get(process.env.REACT_APP_API_BASEURL + "/groups/3")
        .then(result => {
          this.setState({ profileData: result.data.result });
        });
    }
  }

  render() {
    if (this.props.ui.fridgeOptions.profile === "user") {
      return (
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Avatar style={{ width: 150, height: 150, margin: 20 }} />
          </Grid>
          <Grid item>
            <Typography variant="h5">{this.state.profileData.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {this.state.profileData.email}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Room Number: {this.state.profileData.room_number}
            </Typography>
          </Grid>
        </Grid>
      );
    }
    if (this.props.ui.fridgeOptions.profile === "group") {
      return (
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Avatar style={{ width: 150, height: 150, margin: 20 }} />
          </Grid>
          <Grid item>
            <Typography variant="h5">{this.state.profileData.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {this.state.profileData.description}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.setFridgeList.bind(this, "users")}
                  style={{ margin: 10 }}
                >
                  Members
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.setFridgeList.bind(this, "products")}
                  style={{ margin: 10 }}
                >
                  Products
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    }
  }
}

Profile.propTypes = {
  ui: PropTypes.object.isRequired,
  setFridgeProfile: PropTypes.func.isRequired,
  setFridgeList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ui: state.ui
});

const mapActionsToProps = { setFridgeProfile, setFridgeList };

export default connect(mapStateToProps, mapActionsToProps)(Profile);
