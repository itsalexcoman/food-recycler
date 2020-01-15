import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { GroupList } from '..';

const styles = {
  padding: {
    padding: 20
  }
}

const Community = () =>
  <Grid container justify="center" style={styles.padding}>
    <Grid item xs={10}>
      <Grid container direction="column">
        <Grid item style={styles.padding}>
          <Typography variant="h4">Community</Typography>
        </Grid>
        <Grid item>
          <Paper style={styles.padding} elevation={3}>
            <GroupList title="Groups You Manage" type="admin" />
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={styles.padding} elevation={3}>
            <GroupList title="Groups You're In" type="member" />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

export default Community;