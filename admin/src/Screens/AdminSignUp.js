import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "../Components/Header";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
// import Buttons from '../Buttons/Buttons';

const AdminSignUp = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [userName, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //reset button
  const handleReset = () => {
    setFirstname("");
    setLastname("");
    setUsername("");
    setEmail("");
    setPassword("");
    setPassword("");
  };

  //submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", { firstName, lastName, email, role });
  };

  const Styles = {
    registertext: {
      paddingTop: "30px",
      fontFamily: "Quicksand",
      // marginLeft: "100px",
      textAlign: "center",
    },
    box: {
      mt: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginLeft: "310px",
      // backgroundColor :"green",
      width: "50%",
      borderRadius: 5,
      padding: "30px",
      boxShadow: "0 4px 10px 2px rgba(0,0,0,0.1)",
    },
    textbox: {
      width: "100%",
      marginTop: "10px",
    },
  };

  return (
    <>
      <Header />
      <Box sx={Styles.box}>
        <Typography sx={Styles.registertext} variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            style={Styles.textbox}
            required
            fullWidth
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
            variant="standard"
            sx={{ width: "400px", mt: "10px" }}
            InputLabelProps={{
              style: { fontFamily: "Quicksand" },
            }}
            error={!firstName.match(/^[a-zA-Z\s]*$/)} // show error if contains non-alphabetic characters
            helperText={
              !firstName.match(/^[a-zA-Z\s]*$/)
                ? "First name must contain only alphabetic characters"
                : ""
            } // display error message
          />

          <TextField
            style={Styles.textbox}
            required
            label="Last Name"
            variant="standard"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
            margin="normal"
            sx={{ width: "400px" }}
            InputLabelProps={{
              style: { fontFamily: "Quicksand" },
            }}
            error={!lastName.match(/^[a-zA-Z\s]*$/)} // show error if contains non-alphabetic characters
            helperText={
              !lastName.match(/^[a-zA-Z\s]*$/)
                ? "Last name must contain only alphabetic characters"
                : ""
            } // display error message
          />
          <TextField
            style={Styles.textbox}
            required
            label="User Name"
            variant="standard"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            sx={{ width: "400px" }}
            InputLabelProps={{
              style: { fontFamily: "Quicksand" },
            }}
          />
          <TextField
            style={Styles.textbox}
            required
            variant="standard"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            sx={{ width: "400px" }}
            InputLabelProps={{
              style: { fontFamily: "Quicksand" },
            }}
          />
          <TextField
            style={Styles.textbox}
            required
            id="outlined-password-input"
            variant="standard"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            sx={{ width: "400px" }}
            InputLabelProps={{
              style: { fontFamily: "Quicksand" },
            }}
          />
        </form>
        <Box>
          <Button
            variant="outlined"
            onClick={handleReset}
            sx={{ mt: "20px", fontFamily: "Quicksand", width: "100px" }}
          >
            Reset
          </Button>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              mt: "20px",
              ml: "20px",
              fontFamily: "Quicksand",
              width: "100px",
            }}
          >
            Submit
          </Button>
        </Box>
        <Box sx={{mt:"20px"}}>
          <Typography sx={{ mt: "20px", fontFamily: "Quicksand" }} variant="h8">
            <b>Already have an account ? </b>{" "}
          </Typography>
          <Link to="/AdminSignIn">
            <b>Sign In</b>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default AdminSignUp;
