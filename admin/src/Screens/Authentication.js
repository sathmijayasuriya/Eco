import React from "react";
import Header from "../Components/Header";
import AuthHeader from "../Components/AuthHeader";
import QucikLinksList from "../Components/QucikLinksList";
import Grid from "@mui/material/Grid";
import CustomerProfile from "../Components/CustomerProfile";

//sx={{backgroundColor:"red"}} 
// sx={{backgroundColor:"green"}}
export default function Authentication() {
  return (
    <div>
      <Header />
      <AuthHeader />
      <Grid sx container spacing={2} direction={"row"}>
        <Grid sx={{mt:"40px"}} item xs={2.5}>
          <QucikLinksList />
        </Grid>
        <Grid sx={{mt:"40px"}}  item xs={9.5}>
          <CustomerProfile/>
        </Grid>
      </Grid>
    </div>
  );
}
