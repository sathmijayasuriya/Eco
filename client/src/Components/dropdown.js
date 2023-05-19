import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Dropdown = (props) => {
    const { sx } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={sx}
      >     
        SUSTAINABILITY
        <ArrowDropDownIcon
          sx={{ color: "black",
                fontSize: "15px", 
                paddingLeft: "20px" }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          boxShadow: 'none !important',
          width:"100%"
        }}
      >
        <MenuItem onClick={handleClose}>Evironment</MenuItem>
        <MenuItem onClick={handleClose}>Responsibility</MenuItem>
      </Menu>
    </div>
  )
}

export default Dropdown
