import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
            <AppBar position="static" >
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