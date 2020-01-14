import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 0
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Food Recycler
                    </Typography>
                    <Navbar />
                </Toolbar>
            </AppBar>
        </div>
    );
}