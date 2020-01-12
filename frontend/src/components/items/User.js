import React, { Component } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import FridgeIcon from '@material-ui/icons/Restaurant';

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