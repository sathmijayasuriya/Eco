import React from 'react'
import Solar1 from "../Images/solar1.jpg"
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
// import  Button from "@mui/material/Button";
import Buttons from '../Buttons/Buttons'; 

const Content2 = () => {

   const Styles = {
        carimage : {    
            maxWidth: "100%",
            height: "auto",
        }
   } 

  return (
    <div>
     <Grid container spacing={2} direction={"row"} >
        <Grid item xs={3} md={4}>
        <Box>
            <Typography sx={{ marginLeft: "40px", marginTop:"100px", fontFamily: "Quicksand" }}
             variant="h5">
                <b>Protection Against Outages</b>
            </Typography>
            <Typography sx={{ marginLeft: "40px", fontFamily: "Quicksand" }}> 
            Powerwall is a compact home battery that is bundled with Solar Roof, 
            providing you with 24/7 energy security. It stores the energy you produce
             with Solar Roof so you can power your home anytime—at night or during an outage.
            </Typography>
            <Buttons sx={{ width : "70%",marginLeft: "65px",  marginTop:"100px",fontFamily: "Quicksand" , 
             }} label="ORDER NOW" to="/"/>          
            <Buttons sx={{ width : "70%",marginLeft: "65px",  marginTop:"10px",fontFamily: "Quicksand" , 
             }} label = " LEARN MORE" to = "/"/>       
        </Box>
       
        </Grid>
        <Grid item xs={3} md={8}>
        <img style={Styles.carimage} src={Solar1} alt="Solar"/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Content2;
