import React, { Component } from 'react';

import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
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
                <Button
                    color="primary"
                    variant="contained"
                >Fridge</Button>
            </ListItem>
        )
    }
}

export default User;