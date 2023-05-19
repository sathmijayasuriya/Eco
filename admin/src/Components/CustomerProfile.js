import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import User from "../Images/user.jpg";
import Buttons from "../Buttons/Buttons";

export default function CustomerProfile() {
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
    <>
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
              First Name :
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              Last Name :
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              User Name :
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              Email :
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              Password :
            </Typography>
            <Typography style={Styles.text} gutterBottom component="div">
              Date :
            </Typography>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Buttons
                sx={{ width: "60%", fontFamily: "Quicksand" }}
                label="Edit"
                to="/"
              />
              <Buttons
                sx={{ width: "60%", fontFamily: "Quicksand" }}
                label="Delete"
                to="/"
              />
            </CardContent>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
