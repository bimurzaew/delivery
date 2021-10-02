import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import {Box, CircularProgress, Container, Grid, Toolbar} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { getUser } from "../../redux/features/users";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    justifyContent: "space-evenly",
  },
  card: {
    width: 400,
  },
  media: {
    height: 360,
  },
  button: {
    margin: theme.spacing(1),
  },
}));
function PersonalPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(state => state.users.loading)
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const user = useSelector((state) => state.users.user);
  const classes = useStyles();
  return (
      <>
        {loading ? <></> : <Container>
          <Toolbar />
          <Box>
            <Grid container xs={20} className={classes.root}>
              <Grid item xs={3}>
                <CardMedia
                    className={classes.media}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ35vmfs9Ne2gNHk0nr029XdEvv4ay637HwHyqJisCVYDvUy08nnEoX2tQvRKsGFWoVtCU&usqp=CAU"
                    title="Contemplative Reptile"
                />
              </Grid>
              <Grid />
              <Grid item xs={3}>
                <Typography gutterBottom variant="h5" component="p">
                  <b>Фамилия</b>: {user?.lastName}
                </Typography>
                <Typography gutterBottom variant="h5" component="p">
                  <b>Имя</b>: {user?.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="p">
                  <b>Почта</b>:{user?.email}
                </Typography>
                <Typography gutterBottom variant="h5" component="p">
                  <b>Статус</b>:Продавец
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>}
      </>
  );
}
export default PersonalPage;
