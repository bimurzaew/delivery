import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFood } from "../../redux/features/food";
import { Card, CardActions, CardContent, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { addFoodToCart } from "../../redux/features/cart";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  foodImage: {
    width: 300,
    height: 200,
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
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: "30px",
  },
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
  const cart = useSelector((state) => state.cart.products);
  const food = useSelector((state) => state.food.products);

  useEffect(() => {
    dispatch(loadFood());
  }, [dispatch]);

  const handleAddFood = (id) => {
    dispatch(addFoodToCart(id));
  };

  return (
    <Grid container className={classes.foodBox}>
      {food.map((food) => {
        const inCart = cart.find((item) => item.food?._id === food._id);
        return (
          <Grid item className={classes.foodInfoBox} key={food._id} xs={12} sm={6} md={4}>
            <Card>
              <img
                className={classes.foodImage}
                src={`../../images/${food.image}`}
                alt=""
              />
              <CardContent>
                <Typography className={classes.foodName}>
                  {food.name}
                </Typography>
                <Typography className={classes.foodPrice}>
                  {food.price + "₽"}
                </Typography>
                <Typography className={classes.foodDesc}>
                  {food.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  disabled={inCart || food.amount === 0}
                  variant="contained"
                  color={
                    inCart ? "default" : food.amount ? "primary" : "secondary"
                  }
                  onClick={() => {
                    handleAddFood(food._id);
                  }}
                >
                  {inCart
                    ? "в корзине"
                    : food.amount
                    ? "добавить в корзину"
                    : "нет в наличии"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Foods;
