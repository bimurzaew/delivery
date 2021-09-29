import Food from "./food";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFood } from "../../redux/features/food";
import { Box, Container, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  foodImage: {
    width: 300,
    borderRadius: 10,
  },
  foodBox: {
    width: 1300,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  foodInfoBox: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    height: "auto",
  },
  foodInfo: {
    display: "flex",
    justifyContent: "space-between",
  },
  bayBtn: {},
  foodName: {
    fontSize: 22,
    fontFamily: "Corbel",
  },
  foodPrice: {
    fontSize: 22,
    fontFamily: "Corbel",
  },
  foodDesc: {
    fontSize: 18,
    fontFamily: "Corbel",
  },
}));

function Foods() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const food = useSelector((state) => state.food.products);

  useEffect(() => {
    dispatch(loadFood());
  }, []);

  return (
    <div>
      <Toolbar />
      <Container className={classes.foodContainer}>
        <Box className={classes.foodBox}>
          {food.map((item) => {
            return (
              <Box className={classes.foodInfoBox}>
                <img
                  className={classes.foodImage}
                  src={`../../images/${item.image}`}
                />
                <Box className={classes.foodInfo}>
                  <Typography className={classes.foodName}>
                    {item.name}
                  </Typography>
                  <Typography className={classes.foodPrice}>
                    {item.price + "₽"}
                  </Typography>
                </Box>
                <Typography className={classes.foodDesc}>
                  {item.desc}
                </Typography>
                <Button
                  className={classes.bayBtn}
                  variant="contained"
                  color="secondary"
                >
                  В корзину
                </Button>
              </Box>
            );
          })}
        </Box>
      </Container>
    </div>
  );
}

export default Foods;
