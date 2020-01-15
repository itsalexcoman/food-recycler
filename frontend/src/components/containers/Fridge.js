import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { UserList, ProductList } from '..';
import { Profile } from '.';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = {
  padding: {
    padding: 20
  }
}

const Fridge = props =>
  <Grid container justify="center" spacing={2} style={styles.padding}>
    <Grid item xs={12} lg={4}>
      <Paper style={styles.padding}>
        <Profile />
      </Paper>
    </Grid>
    <Grid item xs={12} lg={6}>
      <Paper style={styles.padding}>
        {(props.ui.fridgeOptions.list === "products") ? <ProductList /> :
          (props.ui.fridgeOptions.list === "users") ? <UserList /> :
            <Typography variant="h4">You broke the Fridge! What'd you do?</Typography>}
      </Paper>
    </Grid>
  </Grid>

Fridge.propTypes = {
  ui: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  ui: state.ui
});

export default connect(mapStateToProps, {})(Fridge);