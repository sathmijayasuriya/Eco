import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import { Button } from "@mui/material";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const Input = styled(MuiInput)`
  width: 100px;
`;

export default function Calculate() {
  //form submit
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
    box1: {
      marginLeft: "200px",
    },
    registertext: {
      paddingTop: "5px",
      fontFamily: "Quicksand",
     marginLeft: "200px",
      textAlign: "center",
    },
    solarimage: {
      maxWidth: "100%",
      height: "80%",
    },
  };
  const [value, setValue] = React.useState(30);
  const [electricityBill, setElectricityBill] = React.useState(8940);
  const [requiredSolarCapacity, setRequiredSolarCapacity] = React.useState(2);
  const [monthlyAverageGeneration, setMonthlyAverageGeneration] =
    React.useState(228);
  const [electricityBillSaving, setElectricityBillSaving] =
    React.useState(9540);
  const [requiredRoofArea, setRequiredRoofArea] = React.useState(11);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    calculateValues(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
    calculateValues(event.target.value);
  };

  const handleBlur = () => {
    if (value < 200) {
      setValue(200);
      calculateValues(200);
    } else if (value > 4400) {
      setValue(4400);
      calculateValues(4400);
    }
  };

  const calculateValues = (monthlyConsumption) => {
    // Calculate the values based on monthly consumption
    const bill = (monthlyConsumption - 200) * 85 + 8940;
    const solarCapacity = (monthlyConsumption - 200) / 220;
    const avgGeneration = monthlyConsumption * 0.57;
    const billSaving = (monthlyConsumption - 200) * 90 + 9540;
    const roofArea = (monthlyConsumption - 200) * 0.044 + 11;

    // Update the state with the calculated values
    setElectricityBill(bill);
    setRequiredSolarCapacity(solarCapacity);
    setMonthlyAverageGeneration(avgGeneration);
    setElectricityBillSaving(billSaving);
    setRequiredRoofArea(roofArea);
  };

  return (
    <>
      <Typography sx={{ textAlign: "center", marginTop: "20px" }} variant="h5">
        <b>Residential bill calculator</b>
      </Typography>
      <Box sx={{ width: 1000, ml: "10px", padding: "50px" }}>
        <Grid container>
          <Grid item xs={8}>
            <Grid container spacing={1}>
              <Grid item xs={15}>
                <Paper sx={{ padding: "50px" }}>
                  <Typography variant="h6" id="input-slider" gutterBottom>
                    <b> Monthly Consumption (kWh) </b>
                  </Typography>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item></Grid>
                    <Grid item xs>
                      <Slider
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        min={200}
                        max={4400}
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 200,
                          max: 4400,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                    </Grid>
                  </Grid>

                  {/* Display calculated values */}
                  <Typography gutterBottom variant="h6">
                    Your Electricity Bill Rs: {electricityBill.toFixed(2)}
                  </Typography>
                  <Typography gutterBottom variant="h6">
                    Monthly solar System Capacity(kW):{" "}
                    {requiredSolarCapacity.toFixed(2)}
                  </Typography>
                  <Typography gutterBottom variant="h6">
                    Monthly Average Generation(kWh):{" "}
                    {monthlyAverageGeneration.toFixed(2)}
                  </Typography>
                  <Typography gutterBottom variant="h6">
                    Electricity Bill Saving Rs:{" "}
                    {electricityBillSaving.toFixed(2)}
                  </Typography>
                  <Typography gutterBottom variant="h6">
                    Required roof area(Sq m): {requiredRoofArea.toFixed(2)}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={Styles.registertext} variant="h5">
            Request A free Quote{" "}
            </Typography>
            <Box sx={Styles.box1}>
              <form onSubmit={handleSubmit}>
                <TextField
                  style={Styles.textbox}
                  required
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
                  required
                  label="City"
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
                  label="Message"
                  variant="standard"
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                  margin="normal"
                  sx={{ width: "400px" }}
                  InputLabelProps={{
                    style: { fontFamily: "Quicksand" },
                  }}
                />
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
                  sx={{ width: "400px" }}
                  InputLabelProps={{
                    style: { fontFamily: "Quicksand" },
                  }}
                />
                <TextField
                  required
                  variant="standard"
                  label={value}
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
                  sx={{ width: "400px" }}
                  InputLabelProps={{
                    style: { fontFamily: "Quicksand" },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ ml: "20px", mt: "20px", fontFamily: "Quicksand" }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
