import React  from "react";
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
import {NavLink} from "react-router-dom";
import Link from "@material-ui/core/Link";



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
  red:{
    width:10,
    height:10,
    backgroundColor:'red',
    color:'white'
  }
}));

function ClientHeader(props) {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.Appbar} position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Delivery
          </Typography>
          <Box className={classes.AppbarCardAndAvatar}>
            <IconButton>
              <div className={classes.red}>1</div>
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

export default ClientHeader;
