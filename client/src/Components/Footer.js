import React from 'react'
import { Box } from "@mui/system";
import Button from '@mui/material/Button';


const Footer = () => {
  const Styles ={
    footerbox : {
      width: "100%",
      display: "flex",
      margin: "auto",
      justifyContent: "center",
      padding: "1px",
      backgroundColor: "rgba(177, 228, 200, 0.42)"
    },
    button : {
      width: "auto",
      mr:3,
      color: "black",
      fontSize:"10px",
      fontFamily: "Quicksand",

      
    },
  }
  return (
    <>
    <Box sx = {Styles.footerbox}>
    <Button size="small" sx = {Styles.button} href="#text-buttons">ECO@2023 </Button>
    <Button size="small" sx = {Styles.button} href="#text-buttons">PRIVACY & LEGAL </Button>
    <Button size="small" sx = {Styles.button} href="#text-buttons">CONTACT</Button>
    <Button size="small" sx = {Styles.button} href="#text-buttons">CAREERS </Button>
    <Button size="small" sx = {Styles.button} href="#text-buttons">NEWS</Button>
    <Button size="small" sx = {Styles.button} href="#text-buttons">SITEMAP</Button>
    </Box>
    </>
  )
}

export default Footer

