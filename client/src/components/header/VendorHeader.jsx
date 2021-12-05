import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Person from "./Person";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  Appbar: {
    background: "#6247aa ",
    height: "80px",
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
  Delivery: {
    textDecoration: "none",
    color: "white",
  },
}));

function VendorHeader() {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.Appbar} position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            <NavLink className={classes.Delivery} to="/">
              Delicious
            </NavLink>
          </Typography>
          <Typography className={classes.title} variant="h6"></Typography>
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
