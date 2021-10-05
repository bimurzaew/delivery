import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct } from "../../redux/features/product";

import { Button, Grid, Paper, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core";
import { addProduct } from "../../redux/features/cart";

const useStyles = makeStyles((theme) => ({
  productCard: {
    width: 300,
    cursor: "pointer",
    margin: "auto",
    borderRadius: 10,
    padding: 30,
  },
  imgBlock: {
    textAlign: "center",
  },
  cardImg: {
    maxWidth: "100%",
    height: 200,
  },
  productName: {
    textAlign: "center",
    fontFamily: "Corbel",
    fontWeight: "bold",
    fontSize: 20,
  },
  productDiv: {
    width: 200,
    marginBottom: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    border: "3px solid #7251b5",
  },
  productBtn: {
    textAlign: "center",
    backgroundColor: "#7251b5",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  descProduct: {
    fontSize: 17,
    textAlign: "center",
    fontFamily: "Corbel",
    fontWeight: "bold",
  },
  btn:{
    marginTop:5
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Corbel",
  },
}));

function GetProducts(props) {
  const classes = useStyles();
  const products = useSelector((state) => state.product.products);
  const cart = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProduct());
  }, []);

  const addProductToBox = (id) => {
    dispatch(addProduct(id));
  };

  return products.map((product) => {
    const inCart = cart.find((item) => item.product?._id === product._id);

    return (
      <Grid item xs={4}>

        <Paper className={classes.productCard}>
          <div>
            <img
              className={classes.cardImg}
              src={`../../images/${product.image}`}
              alt=""
            />
          </div>
          <Typography component="p"><b>имя</b>:{product.name}</Typography>
          <Typography component="p"><b>цена</b>:{product.price}</Typography>
          <Typography component="p"><b>описание</b>:{product.desc}</Typography>
          <Typography component="p"><b>кол-во</b>:{product.amount}</Typography>
          <Button
            className={classes.btn}
            variant="contained"
            disabled={inCart || product.amount === 0}
            onClick={() => addProductToBox(product._id)}
            color={
              inCart ? "default" : product.amount ? "primary" : "secondary"
            }
          >
            {inCart
              ? "в корзине"
              : product.amount
              ? "добавить в корзину"
              : "нет в наличии"}
          </Button>
        </Paper>
        <Toolbar/>
      </Grid>
    );
  });
}

export default GetProducts;
