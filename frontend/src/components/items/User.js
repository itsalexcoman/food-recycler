import React, { Component } from "react";

import {
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper
} from "@material-ui/core";
import FridgeIcon from "@material-ui/icons/Restaurant";
import PersonIcon from "@material-ui/icons/Person";
import { connect } from "react-redux";
import { setFridgeProfile, setFridgeList } from "../../actions/ui.actions";
import { getUserInfo, getUserProducts } from "../../actions/user.actions";
import PropTypes from "prop-types";

class User extends Component {
  handleClick = id => {
    this.props.getUserInfo(id);
    this.props.setFridgeProfile("user");
    this.props.setFridgeList("products");
  };
  render() {
    return (
      <Paper>
        <ListItem style={{ marginBottom: 10 }}>
          <ListItemAvatar>
            <PersonIcon color="primary" />
          </ListItemAvatar>
          <ListItemText>{this.props.profile.name}</ListItemText>
          <IconButton
            color="primary"
            onClick={this.handleClick.bind(this, this.props.profile.id)}
          >
            <FridgeIcon />
          </IconButton>
        </ListItem>
      </Paper>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  setFridgeProfile: PropTypes.func.isRequired,
  setFridgeList: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  getUserProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  setFridgeProfile,
  setFridgeList,
  getUserInfo,
  getUserProducts
};

export default connect(mapStateToProps, mapActionsToProps)(User);
