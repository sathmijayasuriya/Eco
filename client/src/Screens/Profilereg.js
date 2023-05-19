import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "../Components/Header";
import { TextField, Button,FormControl,InputLabel,Select,MenuItem,} from "@mui/material";
// import Buttons from '../Buttons/Buttons'; 
import Reg1 from "../Images/reg1.jpg";

const Profilereg = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [userName, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const roles = ["user", "admin"];

  //reset button
  const handleReset = () => {
    setFirstname('');
    setLastname('');
    setUsername('');
    setEmail('');
    setPassword('');
    setPassword('');
  };

  
  //submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', { firstName, lastName, email, role });
  };

  const Styles = {
    box1 : {     
       marginLeft: "100px",
      
    },
    registertext :{
      paddingTop: "30px",
      fontFamily: "Quicksand",
      marginLeft: "100px",
      textAlign: "left",
    },
    solarimage : {    
      maxWidth: "100%",
      height: "80%",
     
  }
  }

  return (
    <>
      <Header />

      <Grid container spacing={2} direction={"row"}>
        <Grid item xs={3} md={6} >
          <Typography sx={Styles.registertext} variant="h5" >GET REGISTERED HERE...   </Typography>
          <Box sx={ Styles.box1}>
          <form onSubmit={handleSubmit} >
            <TextField style = {Styles.textbox}
              required
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
              variant="standard" 
              sx = {{width : "400px",mt:"10px"}}
              InputLabelProps={{
                style: { fontFamily: "Quicksand" },
              }}
              error={!firstName.match(/^[a-zA-Z\s]*$/)} // show error if contains non-alphabetic characters
              helperText={!firstName.match(/^[a-zA-Z\s]*$/) ? 'First name must contain only alphabetic characters' : ''} // display error message
            />
          
            <TextField
              required
              label="Last Name"
              variant="standard" 
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
              margin="normal"
              sx = {{width : "400px",}}
              InputLabelProps={{
                style: { fontFamily: "Quicksand" },
              }}
              error={!lastName.match(/^[a-zA-Z\s]*$/)} // show error if contains non-alphabetic characters
              helperText={!lastName.match(/^[a-zA-Z\s]*$/) ? 'Last name must contain only alphabetic characters' : ''} // display error message
              
            />
            <TextField
              required
              label="User Name"
              variant="standard" 
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
               sx = {{width : "400px",}}
              InputLabelProps={{
                style: { fontFamily: "Quicksand" },
              }}
            />

            <FormControl sx = {{width : "400px",}} margin="normal"   variant="standard" >
              <InputLabel
                fontFamily="Quicksand"
                id="demo-simple-select-helper-label"
                style={{ fontFamily: 'Quicksand' }}
                sx = {{width : "400px",}}
              >
                Role{" "}
              </InputLabel>
              <Select
                label={'margin="normal"'}
                required
                labelId="demo-simple-select-helper-label"
                value={role}
                id="demo-simple-select-helper"
                onChange={(e) => setRole(e.target.value)}
              >
                {roles.map((group) => (
                  <MenuItem sx={{ fontFamily: "Quicksand" }} key={group} value={group}>
                    {group}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* <TextField
              required
              label="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              margin="normal"
              fullWidth
              inputProps={{ pattern: "[0-9]{10}" }} // pattern for 10 numerical digits
              error={
                mobileNumber.length > 0 && !/^[0-9]{10}$/.test(mobileNumber)
              } // show error only if mobileNumber is not empty and doesn't match the pattern
              helperText={
                mobileNumber.length > 0 && !/^[0-9]{10}$/.test(mobileNumber)
                  ? "Mobile number must be 10 digits"
                  : ""
              } // display error message only if mobileNumber is not empty and doesn't match the pattern
            /> */}

            <TextField
              required
              variant="standard" 
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              sx = {{width : "400px",}}
              InputLabelProps={{
                style: { fontFamily: "Quicksand" },
              }}
            />
            <TextField
              required
              id="outlined-password-input"
              variant="standard" 
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              sx = {{width : "400px",}}
              InputLabelProps={{
                style: { fontFamily: "Quicksand" },
              }}
            />
           
          </form>
          <Button
              variant="outlined"
              onClick={handleReset}
              sx={{mt:"20px",fontFamily: "Quicksand" }}
            >
              Reset
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={ {ml:"20px",mt:"20px",fontFamily: "Quicksand" }}
            >
              Submit
            </Button>
            </Box>
        </Grid>

        <Grid item xs={3} md={6} sx={{justifyContent:"left"}} >
          <img style={Styles.solarimage} src={Reg1} alt="imagee" />
        </Grid>
        
      </Grid>
    </>
  );
};

export default Profilereg;
