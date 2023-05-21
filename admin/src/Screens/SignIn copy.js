import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from "../Images/LOGO.png";
import Buttons from '../Buttons/Buttons'; 
import { Paper } from '@mui/material';
import { useState } from "react";
import { loginUser } from '../Service/UserAPI';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import { login } from '../features/auth/authSlice';


const theme = createTheme();

export default function SignIn() {
  const Styles = {
    logo: {
      display: "block",
      margin: "auto",
      width: "40px",
    },
  }
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  React.useEffect(() => {
    if (user?._id) {
      toast.success("Login successful");
      navigate("/");
    }else{
      navigate("/signin");
    }
    if (message) {
      toast.error(message);
    }
  }, [user, isError, isSuccess, message, navigate]);
  
  //form submit 
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    console.log({ email: data.get("email"), password: data.get("password") });

    dispatch(login({ email, password }));
    // //api call
    // const response = await loginUser({ email, password });
    // console.log("login", response);

    // if (response.status === 200) {
    //   toast.success("Login successful");
    //   setUserRole(response.data.role);
    //   navigate("/"); // Store user role in state
    // } else if (response.request?.status === 400) {
    //   toast.error("Invalid username or password");
    // } else {
    //   toast.error("Oops! something went wrong");
    // }
  }
  return (
<>
  <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={5} sx = {{marginTop:10,borderRadius:3 }}>
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding : 5
          }}
        >
         <Link href='/' component="a">
         <img style={Styles.logo} src={Logo} alt="Logo" /></Link>
          
          <Typography component="h1"variant='h7' sx={{fontFamily:"Quicksand"}}>Welcome</Typography>
          <Typography component="h5" variant="h9" sx={{fontFamily:"Quicksand",textAlign:"center"}}>
          Please enter your login credentials to access your Eco platform.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              // autoComplete="email"
              // autoFocus
              InputLabelProps={{
                style: { fontFamily: "Quicksand" },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              id="outlined-password-input"
              type="password"
              //id="password"
              autoComplete="current-password"
              // autoComplete="current-password"
              InputLabelProps={{
                style: { fontFamily: "Quicksand" },
              }}
            />
            
            <Button type="submit" sx={{ width : "100%", fontFamily: "Quicksand" , 
             }}>Sign In</Button>   

            <Grid container>
           
                <Link underline="none" sx={{color:"black",marginTop:"10px",fontFamily: "Quicksand" }} href="/Profilereg" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
          </Box>
        </Box>
        </Paper> 
      </Container>
    </ThemeProvider>
    </>  
  );
}