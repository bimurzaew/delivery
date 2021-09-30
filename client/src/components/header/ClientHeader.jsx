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
    background: "cadetblue",
  },
  title: {
    flexGrow: 1,
  },
  AppbarCardAndAvatar: {
    display: "flex",
  },
}));

function ClientHeader(props) {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.Appbar} position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            <NavLink to={"/"}>Delivery</NavLink>
          </Typography>
          <Box className={classes.AppbarCardAndAvatar}>
            <IconButton>
              <CartModal />
            </IconButton>
            <IconButton>
              <Link href="/signIn">
                <Avatar />
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default ClientHeader;
