import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Hidden, Tab, Tabs } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  navbar: {
    height: 0
  }
});

class Navbar extends Component {
  constructor(props) {
    super(props)

    let pages = ['', '/community', '/members'];
    let labels = ['My Fridge', 'Community', 'Members']

    let pathname = this.props.location.pathname
    pathname = pathname[pathname.length - 1] !== '/' ? pathname : pathname.substr(0, pathname.length - 1)

    let index = pages.indexOf(pathname)

    this.state = {
      value: index,
      pages: pages,
      labels: labels
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.history.push(this.state.pages[value])
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Hidden smDown>
        <Tabs value={value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          classes={{ indicator: classes.navbar }}> {
            this.state.labels.map((element, index) => <Tab key={index} label={element} />)
          }
        </Tabs>
      </Hidden>
    );
  }
}

export default withRouter(withStyles(styles)(Navbar));