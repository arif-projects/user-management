import { Grid, Paper, Typography } from '@material-ui/core';

import React from 'react';
import useAuth from '../Hook/useAuth';
import Navber from '../Navber/Navber';

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
              </Paper>
            </Grid>

            <Grid item xs={6}>
               <Paper>

               </Paper>
            </Grid>
        </Grid>
        </div>
    );
};

export default Profile;