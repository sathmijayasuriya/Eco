import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const QuickLinks = (props) => {
  const { label, to, active,icon: IconComponent  } = props;
  const borderColor = active ? "#2d8659" : "transparent";
  const backgroundColor = active ? "#c6ecd9" : "transparent";
  return (
    <div>
      <Button
        component={Link}
        to={to}                             
        sx={{
          marginTop: "5px",
          padding: "10px",
          width: "80%",
          fontFamily: "Quicksand",
          color: "black",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          borderLeft: `4px solid ${borderColor}`,
          "&:hover": {
            borderColor: "#99ccff", // hover border color
          },
          backgroundColor: backgroundColor,
          "&:hover": {
          backgroundColor: "#e6ffe6",   // hover color
          },
        }}
      >
        {IconComponent && (
          <IconComponent
            sx={{ color: "#FAB140", fontSize: "15px", paddingRight: "10px" }}
          />
        )}
        {label}
      </Button>
    
    </div>
  );
};

export default QuickLinks;
