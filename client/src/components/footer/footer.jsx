import React from "react";
import Box from "@material-ui/core/Box";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import ShopIcon from "@material-ui/icons/Shop";
import AppleIcon from "@material-ui/icons/Apple";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  footerBox: {
    height: 80,
    display: "flex",
    margin: "0 auto",
    backgroundColor: "#6247aa",
    alignItems: "center",
  },
  footerInfo: {
    minWidth: 1230,
    display: "flex",
  },
  footerFor: {
    display: "flex",
    width: 400,
    justifyContent: "space-between",
    padding: 15,
    fontSize: 18,
    color: "white",
  },
  connect: {
    display: "flex",
    width: 200,
    textAlign: "center",
    flexDirection: "column",
    marginLeft: 350,
    marginRight: 50,
    color: "white",
  },
  connectPhone: {
    textAlign: "center",
    color: "white",
  },
  abra: {
    width: 1000,
  },
  icons: {
    color: "white",
    textDecoration: "none",
  },
}));

function Footer(props) {
  const classes = useStyles();
  return (
    <Box className={classes.footerBox}>
      <Box className={classes.footerInfo}>
        <Box className={classes.footerFor}>
          <Box>
            <NavLink className={classes.icons} to="/">
              Для ресторанов
            </NavLink>
          </Box>
          <Box>
            <NavLink className={classes.icons} to="/">
              Курьерам
            </NavLink>
          </Box>
          <Box>
            <NavLink className={classes.icons} to="/">
              Контакты
            </NavLink>
          </Box>
        </Box>
        <Box>
          <Box className={classes.connect}>
            <Box>Присоеденяйтесь к нам</Box>
            <Box>
              <NavLink to="/">
                <TwitterIcon className={classes.icons}></TwitterIcon>
              </NavLink>
              <NavLink className={classes.icons} to="/">
                <FacebookIcon></FacebookIcon>
              </NavLink>
              <NavLink className={classes.icons} to="/">
                <InstagramIcon></InstagramIcon>
              </NavLink>
            </Box>
          </Box>
        </Box>
        <Box className={classes.connectPhone}>
          <Box>Заказывайте с телефона</Box>
          <Box>
            <NavLink className={classes.icons} to="/">
              <ShopIcon></ShopIcon>
            </NavLink>
            <NavLink className={classes.icons} to="/">
              <AppleIcon></AppleIcon>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
