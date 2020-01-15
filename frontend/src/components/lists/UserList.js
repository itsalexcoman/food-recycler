import React, { Component } from "react";
import { List, Typography } from "@material-ui/core";
import { User } from "..";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class UserList extends Component {
  render() {
    return (
      <div>
        <Typography variant="h4">Members</Typography>
        <List>
          {this.props.group.users.map(user => (
            <User key={user.id} profile={user} />
          ))}
        </List>
      </div>
    );
  }
}

UserList.propTypes = {
  group: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  group: state.group
});

export default connect(mapStateToProps, {})(UserList);
