import { Grid, Paper, Typography } from '@material-ui/core';

import React from 'react';
import useAuth from '../Hook/useAuth';
import Navber from '../Navber/Navber';
import Button from '@mui/material/Button';

const Profile = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <div>
            <Navber></Navber>
        <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper>
                  <Typography variant="h5"> My Profile</Typography>
                  <Typography>
                      Name: {user.displayName} <br/>
                      Email: {user.email}
                  </Typography>
                  <Button variant="contained">Update user</Button>
              </Paper>
            </Grid>

            <Grid item xs={6}>
             
                <img src = "https://static.thenounproject.com/png/17241-200.png"></img>
              
            </Grid>
        </Grid>
        </div>
    );
};

export default Profile;