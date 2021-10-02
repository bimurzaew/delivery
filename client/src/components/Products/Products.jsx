import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct } from "../../redux/features/product";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { addProduct } from "../../redux/features/cart";

const useStyles = makeStyles((theme) => ({
  productCard: {
    width: 300,
    cursor: "pointer",
  },

  cardImg: {
    width: 194,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  productName: {
    textAlign: "center",
    fontFamily: "Corbel",
    fontWeight: "bold",
    fontSize:20,
  },
  productDiv: {
    width: 200,
    marginBottom: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    border: "3px solid #7251b5",
  },
  productBtn: {
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
  productPrice: {
    fontSize:20,
    fontWeight: 'bold',
    fontFamily: "Corbel"
  }
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
    console.log(product.image);
    const inCart = cart.find((item) => item.product._id === product._id);

    return (
      <div className={classes.productDiv}>
        <img className={classes.cardImg} src={`../../images/${product.image}`} alt=""
        />
        <div className={classes.productName}>{product.name}</div>
        <div className={classes.descProduct}>{product.desc}</div>
        <div className={classes.productPrice}>{product.price + "₽"}</div>
        <Button
          className={classes.productBtn}
          variant="contained"
          disabled={inCart || product.amount === 0}
          onClick={() => addProductToBox(product._id)}
        >
          {inCart
            ? "в корзине"
            : product.amount
            ? "добавить в корзину"
            : "нет в наличии"}
        </Button>
      </div>
    );
  });
}

export default GetProducts;
