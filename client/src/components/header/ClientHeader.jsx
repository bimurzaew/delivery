import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CartModal from "./CartModal";
import Link from "@material-ui/core/Link";
import Person from "./Person";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
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
  Avatar: {
    width: 100,
  },
  red: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  cart: {
    fontSize: 20,
  },
}));

function ClientHeader(props) {
  const classes = useStyles();
  const token = useSelector((state) => state.users.token);
  console.log(token);
  return (
    <>
      <AppBar className={classes.Appbar} position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            <Link className={classes.link} href="/">
              Delicious
            </Link>
          </Typography>
          <Box className={classes.AppbarCardAndAvatar}>
            {!token ? (
              <IconButton className={classes.cart}>
                <CartModal />
              </IconButton>
            ) : (
              ""
            )}
            <IconButton>
              <Person />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default ClientHeader;
