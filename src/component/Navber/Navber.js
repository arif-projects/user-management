import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {  NavLink } from 'react-router-dom';
import useAuth from '../Hook/useAuth';


const Navber = () => {
    const { user, logout } = useAuth();
   
    return (
        <div>

<Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        User Management
                    </Typography>

                    {
                        user?.email ?

                            <Box>
                                
                                <NavLink style={{ textDecoration: 'none', color: 'Green' }} to="/profile">
                                    <Button color="inherit">My Profile</Button>
                                </NavLink>

                                <Button onClick={logout} color="inherit">LogOut</Button>
                            </Box>

                            :
                            <NavLink style={{ textDecoration: 'none', color: 'green' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
            
        </div>
    );
};

export default Navber;