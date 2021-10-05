import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFood } from "../../redux/features/food";
import { Card, CardActions, CardContent, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { addFoodToCart } from "../../redux/features/cart";

const useStyles = makeStyles((theme) => ({
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
  const food = useSelector((state) => state.food.products);

  useEffect(() => {
    dispatch(loadFood());
  }, []);

  const handleAddFood = (id) => {
    dispatch(addFoodToCart(id));
  };

  return (
    <Grid container xs={15} className={classes.foodBox}>
      {food.map((item) => {
        return (
          <Grid item className={classes.foodInfoBox}>
            <Card>
              <img
                className={classes.foodImage}
                src={`../../images/${item.image}`}
              />
              <CardContent>
                <Typography className={classes.foodName}>
                  {item.name}
                </Typography>
                <Typography className={classes.foodPrice}>
                  {item.price + "₽"}
                </Typography>
                <Typography className={classes.foodDesc}>
                  {item.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    handleAddFood(item._id);
                  }}
                >
                  В корзину
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
