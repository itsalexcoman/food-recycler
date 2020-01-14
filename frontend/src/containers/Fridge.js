import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { Profile, UserList, ProductList } from '../components';

const styles = {
  padding: {
    padding: 20
  }
}

const Fridge = props =>
  <Grid container justify="center" spacing={2} style={styles.padding}>
    <Grid item xs={12} lg={4}>
      <Paper style={ styles.padding }>
        <Profile type={props.profile} />
      </Paper>
    </Grid>
    <Grid item xs={12} lg={6}>
      <Paper style={ styles.padding }>
        {(props.list === "product") ? <ProductList /> :
          (props.list === "user") ? <UserList /> :
            <Typography variant="h4">You broke the Fridge! What'd you do?</Typography>}
      </Paper>
    </Grid>
  </Grid>

export default Fridge;