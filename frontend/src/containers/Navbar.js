import React from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    height: 0
  }
});

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    let pages = ['', '/community', '/users'];
    let labels = ['My Fridge', 'Community', 'Users']

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
      <div className={classes.root}>
        <Tabs value={value}
          onChange={this.handleChange}
          classes={{ indicator: classes.navbar }}> {
            this.state.labels.map((element) => <Tab label={element} />)
          }
        </Tabs>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Navbar));