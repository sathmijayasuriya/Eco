import React from "react";
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


const Profile = () => {


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
    <div >
        <Typography variant = 'h4' sx={Styles.text}>
                PROFILE SETTINGS
        </Typography>
        <div style={{display:"flex",justifyContent:"center"}}>
        <List sx={{ width: '100%', ml:"50px", bgcolor: 'background.paper',alignItems:'left'}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: green[900] }}>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="First Name" secondary="Sathmi" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: green[900] }}>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Last Name" secondary="Jayasuriya" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: green[900] }}>
            <BadgeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="User Name" secondary="sathmi45@#" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: green[900] }}>
           <EmailRoundedIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="Sathmijayasuriya@gmail.com" />
      </ListItem>
      <ListItem>



        
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: green[900] }}>
            <HttpsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Password" secondary="dsn@#522DFf" />
      </ListItem>
    </List>
    </div>
            <Box display={'flex'} justifyContent={'center'}>
            <Button
                    variant="outlined"
                    // onClick={handleReset}
                    sx={{mt:"20px",fontFamily: "Quicksand" }}
                    >
                    Delete Account
                    </Button>
                    <Button
                    type="submit"
                    variant="contained"
                    sx={ {ml:"20px",mt:"20px",fontFamily: "Quicksand" }}
                    >
                    Edit
            </Button>
            </Box>
    </div>
  )
}

export default Profile
