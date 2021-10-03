import React from "react";
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Box,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import CartModal from './CartModal';
import ModalPage from '../order/ModalPage'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
}));

function CourierHeader(props) {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography className={classes.title} variant="h6">
                        <NavLink to='/'>Delivery</NavLink>
                    </Typography>
                    <Typography className={classes.title} variant="h6">
                        <NavLink className={classes.Order} to="/orders">
                            Заказы
                        </NavLink>
                    </Typography>
                    <Box className={classes.AppbarCardAndAvatar}>
                        <ModalPage/>
                        <IconButton>
                                <Avatar />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default CourierHeader;
