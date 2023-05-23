import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Auth from "../Images/auth.png";
import Finance from "../Images/finance.png";
import Product from "../Images/products.png";
import Order from "../Images/order.png";
import { Link } from 'react-router-dom';

const StyledImg = styled("img")({
  display: "block",
  width: "300px",
  paddingTop: "30px",
  opacity: 1,
  transition: "opacity 0.5s",
  "&:hover": {
    opacity: 0.2,
    animation: "$flash 0.5s",
  },
  "@keyframes flash": {
    "0%": {
      opacity: 0.2,
    },
    "500%": {
      opacity: 1,
    },
  },
});

export default function Roles() {
  return (
    <div>
      <Grid container justifyContent="space-around" >
        <Grid>
          <Link to="/authentication">
          <StyledImg
            src={Auth}
            alt="authentication management"
          />
          </Link>
        </Grid>
        <Grid>
        <Link to="/ViewSalary">
          <StyledImg
            src={Finance}
            alt="financial management"
          />
          </Link>
        </Grid>
        <Grid>
          <StyledImg
            src={Product}
            alt="products management"
          />
        </Grid>
        <Grid>
          <StyledImg src={Order} alt="order management" />
        </Grid>
      </Grid>
    </div>
  );
}
