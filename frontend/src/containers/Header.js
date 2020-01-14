import React from 'react';
import { AppBar, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Navbar } from '.';

const Header = () =>
    <AppBar position="sticky">
        <Toolbar>
            <Hidden mdUp>
                <IconButton edge="start" style={{ paddingRight: 20 }} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </Hidden>
            <Typography variant="h6">Food Recycler</Typography>
            <Navbar />
        </Toolbar>
    </AppBar>

export default Header;