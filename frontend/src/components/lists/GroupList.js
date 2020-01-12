import React, { Component } from 'react';
import axios from 'axios'

import List from '@material-ui/core/List';
import Group from '../items/Group'
import './GroupList.css'

const API_BASE_URL = (process.env.REACT_APP_API_BASEURL) ? process.env.REACT_APP_API_BASEURL : 'http://localhost:3001/api';

class GroupList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: []
    }
  }

  async componentDidMount() {
    axios.get(API_BASE_URL + '/groups').then((result) => {
      this.setState({ groups: result.data.result })
    })
  }

  render() {
    return (
      <div className="Group-container">
        <h3>{this.props.title}</h3>
        <List>
          {this.state.groups.map((group) => <Group key={group.id} group={group} />)}
        </List>
      </div>
    )
  }
}

export default GroupList;