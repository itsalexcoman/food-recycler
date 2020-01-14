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
    <Grid item md={4}>
      <Paper style={ styles.padding }>
        <Profile type={props.type} />
      </Paper>
    </Grid>
    <Grid item md={6}>
      <Paper style={ styles.padding }>
        {(props.type === "Product") ? <ProductList /> :
          (props.type === "User") ? <UserList /> :
            <Typography variant="h4">You broke the Fridge! What'd you do?</Typography>}
      </Paper>
    </Grid>
  </Grid>

export default Fridge;