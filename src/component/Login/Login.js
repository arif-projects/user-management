import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';

import { Alert } from '@mui/material';
import useAuth from '../Hook/useAuth';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, logInUser, authError } = useAuth();
    console.log(useAuth);

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        // console.log(feild, value);
        //important ase..but hard
        const newLoginData = { ...loginData };
        newLoginData[feild] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        console.log(loginData);
        logInUser(loginData.email, loginData.password, location, history);


    }


    const login = {padding:20,height:'50vh',width:300,margin:'20px auto'}
    const avter = {backgroundColor:'#11c7b6'}
    const textfeild = {margin:'5px 0'}
    const btn = {margin:'8px 0'}
    return (
        <div>
            {/* <h1>This is login</h1> */}
            <Grid>
                <Paper elevation = {10} style = {login}>
            <Grid align = 'center'>
            <Avatar style = {avter}><LockOpenIcon/></Avatar>
            <h2>Login</h2>
            </Grid>
            <form onSubmit={handleLoginSubmit}>
            <TextField
                mb = {3}
                style = {textfeild}
                label = "Your Email"
                placeholder = 'Enter Your Email'
                name="email"
                onChange={handleOnChange}
                fullWidth
                required/>

            <TextField
                mb = {3}
                id="outlined-password-input"
                label = "Password"
                placeholder = 'Password'
                type="password"
                name="password"
                onChange={handleOnChange}
                fullWidth
                required
                
        />
        <FormControlLabel
        control={<Checkbox
        name = "checkedB"
        color = "primary" />}
        label="Remember me"/>
        <Button type = "submit" variant = 'contained' color='primary' fullWidth style = {btn}>LogIn</Button>
        {user?.email && <Alert severity="success">Loged in successfully</Alert>}
        {authError && <Alert severity="error">{authError}</Alert>}
        <Typography>
            Don't have an account?
        <Link to = "/register">Please Register</Link>
        </Typography>
        </form>
        </Paper>
        </Grid>
           
        </div>
    );
};

export default Login;