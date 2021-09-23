import React from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Appbar: {
    width: "1400px",
    background: "#2E3B55",
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <>
      <Container fixed>

        <AppBar className={classes.Appbar} position="fixed">
          <Toolbar>
            <Typography variant="h6">Delivery</Typography>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <ShoppingCart />
            </IconButton>
            <IconButton>
              <Avatar />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}

export default Header;
