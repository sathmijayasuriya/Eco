import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField, Button,FormControl,InputLabel,Select,MenuItem,} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import HttpsIcon from '@mui/icons-material/Https';
import {green } from '@mui/material/colors';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/auth/authSlice";
import { deleteUser } from "../Service/UserAPI";
import UserDeleteConfirmation from "./UserDeleteConfirmation";


const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false)
  const [payload, setPayload] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    userName: user?.userName,
    email: user?.email,
  });
  const onToggleEdit = () => {
    setIsEditable(!isEditable);
  }
  const onChangeInput = (e,field) => {
    setPayload({ ...payload,[field]:e.target.value });
  }
  const onClickUpdate = async (e) => {
    e.preventDefault();
    console.log(" ~ onClickUpdate ~ payload:", payload)
    dispatch(updateUser({ id: user._id, data: payload }));
    
    setIsEditable(!isEditable);
  };


    const Styles = {
        text:{
            paddingTop: "10px",
            fontFamily: "Quicksand",
           //  marginLeft: "400px",
            textAlign: "center",
        },
        // box1:{
        //     marginLeft: "100px",
        // }
    }
  return (
    <div>
      <Typography variant="h4" sx={Styles.text}>
        PROFILE SETTINGS
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <List
          sx={{
            width: "100%",
            ml: "50px",
            bgcolor: "background.paper",
            alignItems: "left",
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: green[900] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>

            {isEditable ? (
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                defaultValue={user?.firstName}
                name="firstName"
                onChange={(e) => onChangeInput(e, "firstName")}
              />
            ) : (
              <ListItemText primary="First Name" secondary={user?.firstName} />
            )}
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: green[900] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            {isEditable ? (
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                defaultValue={user?.lastName}
                name="lastName"
                onChange={(e) => onChangeInput(e, "lastName")}
              />
            ) : (
              <ListItemText primary="Last Name" secondary={user?.lastName} />
            )}
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: green[900] }}>
                <BadgeIcon />
              </Avatar>
            </ListItemAvatar>
            {isEditable ? (
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="User Name"
                defaultValue={user?.userName}
                name="userName"
                onChange={(e) => onChangeInput(e, "userName")}
              />
            ) : (
              <ListItemText primary="User Name" secondary={user?.userName} />
            )}
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: green[900] }}>
                <EmailRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            {isEditable ? (
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                defaultValue={user?.email}
                name="email"
                onChange={(e) => onChangeInput(e, "email")}
              />
            ) : (
              <ListItemText primary="Email" secondary={user?.email} />
            )}
          </ListItem>
        </List>
      </div>
      <Box display={"flex"} justifyContent={"center"}>
        {isEditable ? (
          <Button
            variant="outlined"
            onClick={onToggleEdit}
            sx={{ mt: "20px", fontFamily: "Quicksand" }}
          >
            Cancel
          </Button>
        ) : (
          <UserDeleteConfirmation userId={user?._id} />
        )}
        {isEditable ? (
          <Button
            onClick={onClickUpdate}
            variant="contained"
            sx={{ ml: "20px", mt: "20px", fontFamily: "Quicksand" }}
          >
            Save
          </Button>
        ) : (
          <Button
            onClick={onToggleEdit}
            variant="contained"
            sx={{ ml: "20px", mt: "20px", fontFamily: "Quicksand" }}
          >
            Edit
          </Button>
        )}
      </Box>
    </div>
  );
}

export default Profile
