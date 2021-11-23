import { Grid, Paper, Typography } from '@material-ui/core';

import React from 'react';

const Profile = () => {
    return (
        <div>
        <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper>
                  <Typography variant="h5"> Profile</Typography>
              </Paper>
            </Grid>

            <Grid item xs={6}>
               <Paper>
                   {/* <image src = {}></image> */}
               </Paper>
            </Grid>
        </Grid>
        </div>
    );
};

export default Profile;