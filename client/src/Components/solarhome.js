import React from "react";
import solarhomeimage from "../Images/solarhome.jpg";
import { Box } from "@mui/material";


const Solarhome = () => {
    const Styles = {
        box: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        },
        solarhomeimage: {
          // paddingLeft: "50px",
          // paddingRight: "40px",
          maxWidth: "100%",
          height: "500px",
         
        },}
  return (
    <div>
      <Box style={Styles.box}>
      <img style={Styles.solarhomeimage} src={solarhomeimage} alt="solarhomeimage" />
      
    </Box>
    </div>
  )
}

export default Solarhome
