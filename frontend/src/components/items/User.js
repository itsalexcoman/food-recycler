import React, { Component } from 'react';

import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

class User extends Component {
    render() {
        let profile = this.props.profile;

        return (
            <ListItem>
                <ListItemAvatar>
                    {
                        <Avatar src="nopic.png" />
                    }
                </ListItemAvatar>
                <ListItemText>{profile.full_name}</ListItemText>
                <br />
                <Button
                    target="_blank"
                    label="Profile Link"
                    secondary={true}
                >Profile</Button>
            </ListItem>
        )
    }
}

export default User;