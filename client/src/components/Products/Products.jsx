import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProduct } from '../../redux/features/product'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import { addProduct } from '../../redux/features/cart'

const useStyles = makeStyles((theme)=>({
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
}))

function Products (props) {
  const classes = useStyles()
  const products = useSelector(state => state.product.products);
  const cart = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadProduct())
  },[]);

  const addProductToBox = (id) => {
    dispatch(addProduct(id));
  };

  return products.map((product) => {
    const inCart = cart.find((item) => item.product._id === product._id);

    return (
      <Grid item xs={6}>
        <Paper className={classes.productCard}>
          <div className={classes.imgBlock}>
            <img className={classes.cardImg} src={`../../../public/images/${product.image}`} alt="" />
          </div>
          <Typography component="p">имя:{product.name}</Typography>
          <Typography component="p">цена:{product.price}</Typography>
          <Typography component="p">описание:{product.desc}</Typography>
          <Typography component="p">кол-во:{product.amount}</Typography>
          <Button
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

        </Paper>
      </Grid>
    );
  });
}

export default Products