import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import User from "../Images/user.jpg";
import Grid from "@mui/material/Grid";
import UserDeleteConfirmation from "./UserDeleteConfirmation";
import FaceIcon from '@mui/icons-material/Face';

export default function CustomerProfile({ customer, setRefetch, refetch }) {
  const Styles = {
    cardContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    img: {
      height: 150,
      width: 150,
      borderRadius: "50%",
    },
    text: {
      fontFamily: "Quicksand",
    },
  };

  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardContent sx={Styles.cardContent}>
            <CardMedia
              component="img"
              style={Styles.img}
              image={User}
              alt="green iguana"
            />
          </CardContent>
          <CardContent>
            <Typography style={Styles.text} gutterBottom component="div">
              First Name : {customer.firstName}
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              Last Name : {customer.lastName}
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              User Name : {customer.userName}
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              Email : {customer.email}
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              Date : {customer.createdAt}
            </Typography>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <UserDeleteConfirmation
                userId={customer._id}
                setRefetch={setRefetch}
                refetch={refetch}
              />
            </CardContent>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
