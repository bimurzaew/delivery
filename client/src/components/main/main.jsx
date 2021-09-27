import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    width: "250px",
    height: "180px",
    border: "2px solid grey",
    borderRadius: "10px"
  },
  CategoryName: {
    fontSize: "20px",
    width: "auto",
    textAlign: "center",
    fontFamily: "Corbel",
    fontWeight: "bolder"
  },
  CategoryDiv: {
    textAlign: "center"
  }
}));

function Main({ categor }) {
  const classes = useStyles();

  return (
    <Grid item xs={3} >
      <div className={classes.CategoryDiv}>
        <img className={classes.img} src={categor.img} />
        <div className={classes.CategoryName}>{categor.name}</div>
      </div>
    </Grid>
  );
}
export default Main;
