import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import NavBarItems from './NavBarItems';

const NavBar = () => {
    return (
        <>
            {/* AppBar should remain fixed at the top */}
            <AppBar position="fixed" sx={{ backgroundColor: '#263238', zIndex: 1400 }}>
                <Toolbar sx={{ justifyContent: 'start' }}>
                    <NavBarItems />
                </Toolbar>
            </AppBar>
            
            {/* Spacer to ensure content doesn't get hidden under AppBar */}
            <Box sx={{ height: 64 }} />  {/* Adjust the height based on your AppBar height */}
        </>
    );
}

export default NavBar;
