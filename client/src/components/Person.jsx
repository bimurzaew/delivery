import * as React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Avatar, Link } from "@material-ui/core";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  text: {
    textAlign: "center",
  },
  nav: {
    textDecoration: "none",
    color: "black",
  },
});

export default function Person() {
  const classes = useStyles();
  const token = useSelector((state) => state.users.token);
  const role = useSelector((state) => state.users.role);
  const user = useSelector((state) => state.users.user);
  const history = useHistory();

  const logOut = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button {...bindTrigger(popupState)}>
            <Avatar />
          </Button>
          <Menu {...bindMenu(popupState)}>
            {!token ? (
              <MenuItem onClick={popupState.close}>
                <Link className={classes.nav} href="/signIn">
                  <CallMadeIcon /> Авторизоваться
                </Link>
              </MenuItem>
            ) : token && role === "vendor" ? (
              <>
                <Typography
                  className={classes.text}
                  variant="h6"
                  onClick={popupState.close}
                >
                  {user.name}
                </Typography>
                <hr />
                <MenuItem onClick={popupState.close}>
                  <Link className={classes.nav} href="/vendor">
                    Мой кабинет
                  </Link>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <Button onClick={logOut}>Выйти</Button>
                </MenuItem>
              </>
            ) : (
              ""
            )}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
