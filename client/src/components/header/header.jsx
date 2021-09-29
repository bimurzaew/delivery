import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Box } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import CartModal from './CartModal'
import OrderModal from './OrdersModal'
import { NavLink } from 'react-router-dom'


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
  AppbarCardAndAvatar: {
    display: "flex",
  }
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
          <Typography className={classes.title} variant="h6">
            <NavLink to={"/orders"}>
              Заказы
            </NavLink>
          </Typography>
          <Box className={classes.AppbarCardAndAvatar}>
            <IconButton>
              <CartModal />
            </IconButton>
            <IconButton>
              <Avatar />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
