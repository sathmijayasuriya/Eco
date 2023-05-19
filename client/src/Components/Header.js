import React from "react";
import Logo from "../Images/LOGO.png";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import Dropdown from "./dropdown";
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';

const Header = () => {
   
  const active = true; // Define the 'active' variable 
  const borderColor = active ? "transparent" : "#2E8B57";
  const Styles = {
    headerContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "Quicksand",
      position: "sticky",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      backgroundColor : "white",

    },
    logo: {
      display: "block",
      margin: "auto",
      width: "40px",
      paddingTop : "2px"
    },
    button : {
      width: "auto",
      mr:3,
      color: "black",
      fontFamily: "Quicksand",
      borderBottom: `2px solid ${borderColor}`,
      "&:hover": {
        borderColor: active ? "black" : "transparent",
      },
//"#009933" 
    },
    boxattributes : {
      width: "100%",
      display: "flex",
      margin: "auto",
      justifyContent: "center",
      padding: "1px",
    },
 
  };

  return (
  <>
    <header style={Styles.headerContainer}>
      <img style={Styles.logo} src={Logo} alt="Logo" />
      <Box style={Styles.boxattributes} >
        <Button sx={Styles.button}>HOME</Button>
        <Button sx={Styles.button}>MODELS</Button>
        <Button sx={Styles.button}>ENERGY</Button>
         <Dropdown sx={Styles.button}/>
        <Button sx={Styles.button}>SUPPORT</Button>
        <Button sx={Styles.button}>ABOUT</Button>
        <Button component = {Link} to='/signin' sx={Styles.button}>ACCOUNT</Button>
      </Box>
      <Divider  variant="middle" />
    </header>
  </>
  );
};

export default Header;
