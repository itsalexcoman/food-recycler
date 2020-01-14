import React, { Component } from 'react';
import axios from 'axios'

import { List, Typography } from '@material-ui/core';
import { Group } from '..'
import './GroupList.css'

class GroupList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: []
    }
  }

  async componentDidMount() {
    axios.get(process.env.REACT_APP_API_BASEURL + '/groups').then((result) => {
      this.setState({ groups: result.data.result })
    })
  }

  render() {
    return (
      <div className="Group-container">
        <Typography variant="h6">{this.props.title}</Typography>
        <List>
          {this.state.groups.map((group) => <Group key={group.id} group={group} />)}
        </List>
      </div>
    )
  }
}

export default GroupList;