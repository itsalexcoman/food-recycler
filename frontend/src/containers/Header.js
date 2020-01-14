import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Navbar } from '.';

const Header = () =>
    <AppBar position="sticky">
        <Toolbar>
            <Typography variant="h6">Food Recycler</Typography>
            <Navbar />
        </Toolbar>
    </AppBar>

export default Header;