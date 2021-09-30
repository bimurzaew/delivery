import React from "react";
import {
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
  categories: {
    fontSize: 30,
    color: "#ff0000",
  },
  black:{
backgroundColor: 'red'
  }
}));

function Two(props) {
  const classes = useStyles();
  return (
    <>
        <Paper
          className={classes.mainFeatures}
          style={{
            backgroundImage: `url(https://source.unsplash.com/random)`,
          }}
        >
          <Container fixed>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.main}>
                  <Typography
                    variant="h5"
                    component="h1"
                    color="inherit"
                    gutterBottom
                  >
                    Какойто текст
                  </Typography>
                  <Typography color="inherit" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem earum labore nisi perspiciatis quaerat saepe unde
                    voluptates. Cum doloribus, earum exercitationem illum
                    quisquam quod saepe sequi. Atque dolorum nam rerum!
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
    </>
  );
}

export default Two;
