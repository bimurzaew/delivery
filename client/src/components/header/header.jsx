import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Appbar: {
    background: "cadetblue",
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.Appbar} position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Delivery
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <ShoppingCart />
            Карзина
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Avatar />
            Профиль
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
