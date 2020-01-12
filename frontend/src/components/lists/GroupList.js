import React, { Component } from 'react';
import List from '@material-ui/core/List';

import axios from 'axios'

import Group from '../items/Group'

const API_BASE_URL = 'http://3.81.36.253:3001/api'

class GroupList extends Component {
    constructor(props) {
      super(props) 
      this.state = {
        groups: []
      }
    }

    async componentDidMount() {
      axios.get(API_BASE_URL + '/groups').then((result) => {
        this.setState({groups: result.data.result})
      })
    }

    render() {
      return (
        <div className={this.props.className}>
        <h3>{this.props.title}</h3>
        <List>
          {this.state.groups.map((group) => <Group key={group.id} group={group} />)}
        </List>
        </div>
      )
    }
  }

export default GroupList;