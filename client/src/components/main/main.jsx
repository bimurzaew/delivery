import React from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";
import Food from "../Food/food";

function Main() {
  return (
    <>
      <Box>
        <Typography>
          <NavLink to="/food">Еда</NavLink>
        </Typography>
        <Typography>
          <NavLink to="/product/category">Продукты</NavLink>
        </Typography>
      </Box>
      <Food />
    </>
  );
}
export default Main;
