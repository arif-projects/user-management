import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Alert } from '@mui/material';
import useAuth from '../Hook/useAuth';
import Navber from '../Navber/Navber';


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const { user, registerUser, authError } = useAuth();

    
    const handleOnBlur = e => {
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
        if (loginData.password !== loginData.password2) {
            alert('password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
    }


    const login = {padding:20,height:'60vh',width:300,margin:'20px auto'}
    const avter = {backgroundColor:'#11c7b6'}
    const textfeild = {margin:'5px 0'}
    const btn = {margin:'8px 0'}
    return (
        <div>
            <Navber></Navber>
           <Grid>
                <Paper elevation = {10} style = {login}>
            <Grid align = 'center'>
            <Avatar style = {avter}><AccountCircleIcon/></Avatar>
            <h2>Please Register</h2>
            </Grid>
            <form onSubmit={handleLoginSubmit}>
            <TextField
                    mb = {3}
                    style = {textfeild}
                    label = "Your Name"
                    placeholder = 'Enter Your Name'
                    name="name"
                    onBlur={handleOnBlur}
                    fullWidth
                    required/>
            <TextField
                    mb = {3}
                    style = {textfeild}
                    label = "Your Phone"
                    placeholder = 'Enter Your Phone Number'
                    name="phoneNumber"
                    onBlur={handleOnBlur}
                    fullWidth
                    required/>
            <TextField
                    mb = {3}
                    style = {textfeild}
                    label = "Your Email"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    placeholder = 'Enter Your Email'
                    fullWidth
                    required/>

            <TextField
                    mb = {3}
                    label = "Password"
                    placeholder = 'Password'
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    fullWidth
                    required
                />
            <TextField
                    mb = {3}
                    label = "Confirm Password"
                    placeholder = 'Please Retype Password'
                    type="password"
                    name="password2"
                    onBlur={handleOnBlur}
                    fullWidth
                    required
                />

        <Button type = "submit" variant = 'contained' color='primary' fullWidth style = {btn}>Register</Button>
        <Typography>
            Already have an account?
        <Link to = "/">Please Login</Link>
        </Typography>
        </form>
        {user?.email && <Alert severity="success">User created  successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
        </Paper>
        </Grid>
        </div>
    );
};

export default Register;