import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
//import  Button from "@mui/material/Button";
import Buttons from '../Buttons/Buttons'; 


const Content = () => {
  const Styles = {
    paper: {
      textAlign: "left",
      width: "auto",
      padding: "10px",
      marginLeft: "50px",
      marginBottom: "20px",
    },
  };
  return (
    <div>
      <Grid container spacing={3} direction={"row"} sx={{marginTop: "20px",justifyContent: "center",}} >
        <Grid item xs={12} md={6}>
          <Paper  elevation={1} sx={Styles.paper}> 
                                                                                        {/* variant="outlined" */}
            <Typography sx={{ width: "auto",marginLeft: "30px", fontFamily: "Quicksand" }}>
              Design
            </Typography>
            <Typography
              variant="h6"
              sx={{width: "auto", marginLeft: "30px", fontFamily: "Quicksand" }}
            >
              <b>Complement Your Home’s Aesthetic</b>
            </Typography>
            <Buttons sx={{ width : "30%",marginLeft: "30px",  marginTop:"10px",fontFamily: "Quicksand" , 
             }} label = "ORDER NOW" to = "/"/>   
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ fontFamily: "Quicksand" }}>
            Install Solar Roof and power your home with a fully integrated solar
            and energy storage system. The glass solar tiles and steel roofing
            tiles look great up close and from the street, complementing your
            home’s natural styling. Schedule a virtual consultation with a Tesla
            Advisor to learn more.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;
