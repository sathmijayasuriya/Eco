import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const QuickLinks = (props) => {
  const { label, to, active, icon: Icon, logout, onClickLogout } = props;
  const borderColor = active ? "#006600" : "transparent";
  const backgroundColor = active ? "#ebebe0" : "transparent";
  return (
    <div>
      <Button
        onClick={logout && onClickLogout}
        component={!logout && Link}
        to={!logout && to}
        sx={{
          //   marginTop: "20px",
          padding: "20px",
          width: "100%",
          fontFamily: "Quicksand",
          color: "black",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          borderLeft: `4px solid ${borderColor}`,
          "&:hover": {
            borderColor: "#99ccff", //hover border color
          },
          backgroundColor: backgroundColor,
          "&:hover": {
            backgroundColor: "#f5f5f0", //hover color
          },
        }}
      >
        <Icon sx={{ color: "BLACK", fontSize: "15px", paddingRight: "10px" }} />
        {label}
      </Button>
    </div>
  );
};

export default QuickLinks;
