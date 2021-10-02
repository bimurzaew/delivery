import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Route } from 'react-router-dom';
import Food from '../Food/index';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  footAndProductBox: {
    display: "flex",
    width: 1000,
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "#7251b5",
    borderRadius: 20
  },
  foot: {
    fontSize: 40,
    textDecoration: "none",
    color: 'white'
  },
  footBox: {
    display: "flex",
    margin: "0 auto",
  },
  Product: {
    fontSize: 40,
    textDecoration: "none",
    marginLeft: 50,
    color: 'white'
  },
}));


function Main() {
  const classes = useStyles();
  return (
    <>

      <Box className={classes.footAndProductBox}>
        <Box className={classes.footBox}>
          <NavLink className={classes.foot} to="/food">
            Еда
          </NavLink>
          <NavLink className={classes.Product} to="/product/category"></NavLink>
          <NavLink className={classes.Product} to="/food">
            Продукты
          </NavLink>
        </Box>
      </Box>
      <Route path="/food">
        <Food/>
      </Route>

    </>
  );
}
export default Main;
