import React, { Component } from 'react';
import axios from 'axios'

import { List, Typography } from '@material-ui/core';
import { Group } from '..'
import './GroupList.css'

class GroupList extends Component {
  state = {
    groups: []
  }

  async componentDidMount() {
    axios.get(process.env.REACT_APP_API_BASEURL + '/groups').then((result) => {
      this.setState({ groups: result.data.result })
    })
  }

  getAdminGroups = () => this.state.groups.filter(group => group.admin_id === 2)

  render() {
    return (
      <div className="Group-container">
        <Typography variant="h6">{this.props.title}</Typography>
        <List>
          {(this.props.type === "admin") ?
            this.getAdminGroups().map((group) => <Group key={group.id} group={group} />) :
            this.state.groups.map((group) => <Group key={group.id} group={group} />)
          }
        </List>
      </div>
    )
  }
}

export default GroupList;