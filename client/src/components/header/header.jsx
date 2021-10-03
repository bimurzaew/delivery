import React, { useEffect } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import CartModal from "./CartModal";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/features/users";
import VendorHeader from "./VendorHeader";
import CourierHeader from "./CourierHeader";
import ClientHeader from "./ClientHeader";

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
  Avatar: {
    width: 100,

  }
}));

function Header(props) {
  const classes = useStyles();
  const user = useSelector((state) => state.users.user);
  const token = useSelector((state) => state.users.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <>
      <AppBar className={classes.Appbar} position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Delivery
          </Typography>
          <Typography className={classes.title} variant="h6">
            <NavLink className={classes.Order} to={"/orders"}>

              Заказы
            </NavLink>
          </Typography>
          <Box className={classes.AppbarCardAndAvatar}>
              <CartModal/>
            <IconButton>
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>


      {user?.role === "vendor" && token ? (
        <VendorHeader />
      ) : user?.role === "courier" && token ? (
        <CourierHeader />
      ) : (
        <ClientHeader />
      )}
    </>
  );
}

export default Header;
