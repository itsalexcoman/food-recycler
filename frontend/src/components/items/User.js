import React, { Component } from 'react';

import { IconButton, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import FridgeIcon from '@material-ui/icons/Restaurant';
import PersonIcon from '@material-ui/icons/Person';

class User extends Component {
    render() {
        let profile = this.props.profile;

        return (
            <ListItem>
                <ListItemAvatar>
                    <PersonIcon color="primary" />
                </ListItemAvatar>
                <ListItemText>{profile.full_name}</ListItemText>
                <br />
                <IconButton color="primary">
                    <FridgeIcon />
                </IconButton>
            </ListItem>
        )
    }
}

export default User;