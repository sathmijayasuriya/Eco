import React from "react";
import Car from "../Images/solar2.jpg";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from "react-router-dom";

const Images = (props) => {
 
  const backgroundColor = "transparent";
 
  const Styles = {
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
    },
    carimage: {
      // paddingLeft: "50px",
      // paddingRight: "40px",
      maxWidth: "100%",
      height: "600px",
     
    },
    button: {
      position: "absolute",
      top: "55%",
      left: "50%",
      padding : "10px",
      color:"white",
      width:"200px",
      // boxShadow:"1px 2px 4px 2px #001a00",
      transform: "translate(-50%, -50%)",
      fontFamily: "Quicksand",
      backgroundColor: backgroundColor,
      border: "2px solid white",
    
    },
    
  };
 
  return (
    <Box style={Styles.box}>
      <img style={Styles.carimage} src={Car} alt="ecocar" />
      <Button style={Styles.button}>
        Discover More
        <KeyboardDoubleArrowRightIcon  sx={{ fontSize: "20px", paddingLeft: "10px" }}/>
      </Button>
    </Box>
  );
};

export default Images;
