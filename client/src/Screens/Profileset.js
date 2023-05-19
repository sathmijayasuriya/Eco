import React from 'react'
import QuickLinks from '../Components/QuickLinks'
import { Grid, Paper } from '@mui/material'
import Header from '../Components/Header'
import Profile from '../Components/Profile'
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import Divider from '@mui/material/Divider';


const Profileset = () => {
  return (
    <div>
        <Header/>
      <Grid direction={'row'} sx={{ width : "auto",marginTop: "20px",height: "auto",display:'flex'}} container
        columnSpacing={1}>
            <Grid  sx={{ marginTop: "50px",height: "100%" ,}} direction="column" >
            <Paper elevation={1} sx = {{margin:5,width:'80%',height: "100%", }}>
                    <QuickLinks label='Profile Settings' to='/profilesettings' icon={Person2RoundedIcon} active={true}/>
                    <QuickLinks label='My Orders' to='/' icon={ShoppingCartRoundedIcon}/>
                    <QuickLinks label='Sign Out' to='/' icon={ExitToAppRoundedIcon}/>
            
            </Paper>
            <Divider  variant="middle"  orientation="vertical" flexItem />

            </Grid>  
            <Divider  variant="middle"  orientation="vertical" flexItem />
    
            <Grid sx={{  height: "100%" ,}} item xs={9} >
                    <Profile/>
            </Grid>
      </Grid>
    </div>
  )
}

export default Profileset
