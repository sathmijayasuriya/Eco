import * as React from 'react';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';



const Buttons = (props) => {
    
  const {to,label,sx} = props;
    const theme = createTheme({
        palette: {
          primary: {
            // Purple and green play nicely together.
            main: '#0d0d0d',
            contrastText: 'white',
          },
      
        },
      });
      


  return (
    <div>
       <ThemeProvider theme={theme}>
            <Button sx={sx} to={to} component={Link} variant="contained" color="primary">{label}</Button>
      </ThemeProvider>
    </div>
  )
}

export default Buttons
