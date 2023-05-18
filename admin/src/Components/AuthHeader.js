import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
export default function AuthHeader() {
  const Styles = {
    text: {
        fontFamily: "Quicksand",
        textAlign: "center",
        fontWeight: "bold"

    },
  };

  return (
    <>
        <Typography variant="h5" style={Styles.text}>Authentication Management</Typography>
      
    </>
  );
}
