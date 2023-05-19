import React from "react";
import QuickLinks from "../Components/QuickLinks";
import { Grid } from "@mui/material";
import ThreePIcon from "@mui/icons-material/ThreeP";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ReceiptIcon from "@mui/icons-material/Receipt";
export default function QucikLinksList() {
  const Styles = {
    grid: {
      width: "100%",
      marginTop: "20px",
      height: "auto",
      justifyContent: "left",
      height: "100%",
      borderRadius: 0.5,
      padding: "4px",
    //   boxShadow: "0 4px 10px 2px rgba(0,0,0,0.1)",
    },
  };
  return (
    <div>
      <Grid style={Styles.grid} direction="column">
        <QuickLinks
          label="Customer Details"
          to="/"
          active={true}
          icon={ThreePIcon}
        />
        <QuickLinks label="Admin Details" to="/" icon={AppRegistrationIcon} />
        <QuickLinks label="Admin Registration" to="/AdminSignUp" icon={HowToRegIcon} />
        <QuickLinks label="Reports" to="/" icon={ReceiptIcon} />
      </Grid>
    </div>
  );
}
