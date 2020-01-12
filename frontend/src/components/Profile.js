// import React from 'react';

// class Profile extends React.Component {
//     render() {
//         return (
//             <div className={this.props.className}>
//                 <h1>I am a {this.props.type} Fridge</h1>
//             </div>
//         );
//     }
// }

// export default Profile;


import React, { Component } from 'react';
import axios from 'axios';
import './Profile.css'

import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';


const API_BASE_URL = (process.env.REACT_APP_API_BASEURL) ? process.env.REACT_APP_API_BASEURL : 'http://localhost:3001/api';

class Profile extends Component {
    divClasses;
    constructor(props) {
        super(props)
        this.divClasses = props.className + " Profile";
        
        this.state = {
            user: {}
        }
    }
    

  async componentDidMount() {
    axios.get(API_BASE_URL + '/users/2').then((result) => {
      this.setState({ user: result.data.result })
    })
  }
    
     
    render() {
      return (
          <div className={this.divClasses}>
        <ListItem>
            <ListItemAvatar className="Profile-pic">
                {
                    <Avatar src="nopic.png" style={{width: 120, height: 120}}/>
                }
            </ListItemAvatar>
            <ListItemText>
                <strong>{this.state.user.full_name}</strong> <br/>
            </ListItemText>
            <div className="Profile-buttons">
            <Button
              color="primary"
              variant="contained"
            >Users</Button>
            <Button
              color="primary"
              variant="contained"
            >Products</Button>
            </div>
            <ListItemText className="multiline Profile-info">
                Email: {this.state.user.email} <br/>
                Room Number: {this.state.user.room_number}
            </ListItemText>
      </ListItem>
      </div>
      );  
    }
  }

  export default Profile;