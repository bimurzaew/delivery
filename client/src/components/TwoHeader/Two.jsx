import React from "react";
import { Container, Grid, Paper, Toolbar } from "@material-ui/core";
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

  black: {
    backgroundColor: "red",
  },
  text: {
    color: "white",
  },
}));

function Two() {
  const classes = useStyles();
  return (
    <>
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
                <Toolbar />
                <h5 style={{ color: "white" }}>
                  Не обязательно, но желательно, чтобы еда приносила
                  удовольствие. Но без фанатизма. Как говорил Ахьмад, плохие
                  люди живут для того, чтобы есть и пить, добропорядочные люди
                  едят и пьют для того, чтобы жить. Поэтому очень важно
                  относится к тому, что мы едим с большой ответственностью. Еда
                  ― основа нашей жизни, и это нельзя игнорировать. Но некоторые
                  именно этим и занимаются. Не в том плане, что они отказываются
                  от еды, а в том, что они едят что попало. Тут очень кстати
                  придется высказывание Людвига Фейербаха: Человек есть то, что
                  он ест. Но и другие цитаты о еде не менее поучительны.
                </h5>
                <span
                  style={{
                    color: "white",
                    marginLeft: "300px",
                    fontSize: "20px",
                  }}
                >
                  (С) шич Ахьмад
                </span>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
}

export default Two;
