import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { loadProductByCategory } from "../../redux/features/product";

const useStyles = makeStyles((theme) => ({
  productCard: {
    width: 300,
    cursor: "pointer",
  },
  imgBlock: {
    width: 300,
    textAlign: "center",
  },
  cardImg: {
    width: 100,
  },
}));

function ProductsByCategory({ getProduct }) {
  const products = useSelector((state) => state.product.products);
  getProduct(loadProductByCategory());


  const classes = useStyles();
  return products.map((item) => {
    return (
      <Grid item xs={6}>
        <Paper className={classes.productCard}>
          <div className={classes.imgBlock}>
            <img className={classes.cardImg} src={`../../../public/images/${item.image}`} alt="" />
          </div>
          <Typography component="p">имя:{item.name}</Typography>
          <Typography component="p">цена:{item.price}</Typography>
          <Typography component="p">описание:{item.desc}</Typography>
          <Typography component="p">кол-во:{item.amount}</Typography>
        </Paper>
      </Grid>
    );
  });
}

export default ProductsByCategory;
