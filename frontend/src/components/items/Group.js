import React, { Component } from 'react';
import axios from 'axios';

import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const API_BASE_URL = 'http://3.81.36.253:3001/api'

class Group extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            group: this.props.group,
            users: 0
        }
    }

    async componentDidMount() {
      axios.get(API_BASE_URL + '/groups/' + this.state.group.id + '/users').then((result) => {
        this.setState({users: result.data.result.length})
      })
    }
    
    render() {
      return (
        <ListItem>
            <ListItemAvatar>
                {
                    <Avatar src="group_icon.png" style={{width: 70, height: 60}}/>
                }
            </ListItemAvatar>
            <ListItemText classes="multiline">
                <strong>{this.state.group.name}</strong> <br/>
                Members: {this.state.users}
            </ListItemText>
      </ListItem>
      );  
    }
  }

  export default Group;