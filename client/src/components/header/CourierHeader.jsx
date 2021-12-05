import React from "react";
import { AppBar, Toolbar, Typography, Box, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Person from "./Person";

const useStyles = makeStyles(() => ({
  text: {
    textDecoration: "none",
    color: "white",
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
  Appbar: {
    background: "#6247aa ",
    height: "80px",
  },
}));

function CourierHeader() {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.Appbar} position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            <Link className={classes.text} href="/">
              Delicious
            </Link>
          </Typography>
          <Typography className={classes.title} variant="h6">
            <Link className={classes.Order} href="/orders">
              Заказы
            </Link>
          </Typography>
          <Box className={classes.AppbarCardAndAvatar}>
            <Person />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default CourierHeader;
