import React, { Component } from "react";
// import axios from "axios";
import { Avatar, Button, Grid, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { setFridgeList } from "../../actions/ui.actions";
import { getUserInfo } from "../../actions/user.actions";
import { getGroupInfo } from "../../actions/group.actions";
import PropTypes from "prop-types";

class Profile extends Component {
  componentDidMount() {
    if (this.props.ui.fridgeOptions.profile === "user") {
      this.props.getUserInfo(this.props.user.currentUser.id);
    }
    if (this.props.ui.fridgeOptions.profile === "group") {
      this.props.getGroupInfo(this.props.group.currentGroup.id);
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
            <Typography variant="h5">
              {this.props.user.currentUser.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {this.props.user.currentUser.email}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Room Number: {this.props.user.currentUser.room_number}
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
            <Typography variant="h5">
              {this.props.group.currentGroup.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {this.props.group.currentGroup.description}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.props.setFridgeList.bind(this, "users")}
                  style={{ margin: 10 }}
                >
                  Members
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.props.setFridgeList.bind(this, "products")}
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
  user: PropTypes.object.isRequired,
  setFridgeList: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  getGroupInfo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ui: state.ui,
  user: state.user,
  group: state.group
});

const mapActionsToProps = { setFridgeList, getUserInfo, getGroupInfo };

export default connect(mapStateToProps, mapActionsToProps)(Profile);
