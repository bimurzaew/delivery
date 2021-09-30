import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainFeatures: {
    marginBottom: theme.spacing(2),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  main: {
    padding: theme.spacing(9),
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3",
  },

  black:{
backgroundColor: 'red'
  },
  text: {
    color: 'white',
  }
}));

function Two(props) {
  const classes = useStyles();
  return (
    <>
      <div>
        <Paper
          className={classes.mainFeatures}
          style={{
            backgroundImage: `url(https://cdn5.vedomosti.ru/image/2021/4h/yyl6c/original-19b5.jpg)`,
          }}
        >
          <Container fixed>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.main}>
                  <Typography style={{color: 'white'}}
                    variant="h5"
                    component="h1"
                    color="inherit"
                    gutterBottom
                  >
                    Какойто текст
                  </Typography>
                  <h5 style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Autem earum labore nisi perspiciatis quaerat saepe unde
                      voluptates. Cum doloribus, earum exercitationem illum
                      quisquam quod saepe sequi. Atque dolorum nam rerum!
                  </h5>
                  <Button style={{backgroundColor: '#7251b5'}} variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </div>
    </>
  );
}

export default Two;
