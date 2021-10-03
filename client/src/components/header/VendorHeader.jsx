import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Person from "../Person";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Appbar: {
    background: "#6247aa ",
  },
  title: {
    flexGrow: 1,
  },
  AppbarCardAndAvatar: {
    display: "flex",
  },

  Order: {
    textDecoration: "none",
    color: "white",
  },
  Delivery:{
    textDecoration: "none",
    color: "white",
  }
}));

function VendorHeader(props) {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.Appbar} position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            <NavLink className={classes.Delivery} to="/">
              Delivery
            </NavLink>
          </Typography>
          <Typography className={classes.title} variant="h6">
          </Typography>
          <Box className={classes.AppbarCardAndAvatar}>
            <IconButton>
              <Person />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default VendorHeader;
