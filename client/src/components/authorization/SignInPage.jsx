import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../redux/features/users";
import { useHistory } from "react-router-dom";
import GroupTwoToneIcon from "@material-ui/icons/GroupTwoTone";
import { MenuItem } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.caricos.com/d/dodge/2021_ram_1500_trx/images/1600x1200/2021_ram_1500_trx_33_1600x1200.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const currencies = [
  {
    value: "vendor",
    label: "Продавец",
  },
  {
    value: "courier",
    label: "Курьер",
  },
];

export default function SignInPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const token = useSelector((state) => state.users.token);

  const history = useHistory();
  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(auth({ password, login, role }))
      .then(() => {
        if (!error) {
          history.push("/");
        }
      })
      .catch((e) => {});
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        style={{ backgroundColor: "#f7dcad" }}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <GroupTwoToneIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Вход
          </Typography>
          {<Typography color="secondary">{error}</Typography>}
          <form className={classes.form} noValidate>
            <TextField
              onChange={handleChangeLogin}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Логин"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={handleChangePassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/*<TextField*/}
            {/*  id="standard-select-currency"*/}
            {/*  select*/}
            {/*  value={role}*/}
            {/*  onChange={handleChangeRole}*/}
            {/*  helperText="Выберите роль"*/}
            {/*  variant="standard"*/}
            {/*>*/}
            {/*  {currencies.map((option) => (*/}
            {/*    <MenuItem key={option.value} value={option.value}>*/}
            {/*      {option.label}*/}
            {/*    </MenuItem>*/}
            {/*  ))}*/}
            {/*</TextField>*/}

            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              войти
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signUp" variant="body2">
                  {"Нет аккаунта? Зарегистрироваться"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
