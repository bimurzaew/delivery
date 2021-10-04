import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Box, Grid, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/features/categories";
import { loadProductByCategory } from "../../redux/features/product";
import { NavLink, Route, useHistory, useParams } from "react-router-dom";
import Products from "./Products";
import Food from '../Food';
import ProductsByCategory from './ProductsByCategory'

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "15px auto 0",
  },
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
  categoryName: {
    justifyContent: "space-between",
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "Corbel"
  },
  categoryLink: {
    textDecoration: "none",
    color: "black",
  },
  categoryImage: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: 230,
    height: 160,

  },
  categoryInfo: {
    borderRadius: 20,
    border: "3px solid #7251b5"
  },
  category: {
    display: "flex",
    justifyContent: 'space-between',
    margin: "0 auto",
    marginBottom: 20,
  }
}));

function ProductGuest() {
  const catalog = useSelector((state) => state.categories.catalog);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const getProduct = (id) => {
    history.push(`/product/category/${id}`);
    dispatch(loadProductByCategory(id));
  };

  const classes = useStyles();
  return (
    <>
      <Toolbar />

      <Container>
        <Box className={classes.container}>
          <div className={classes.category}>
            {catalog.map((item) => {
              return (
                <div className={classes.categoryInfo}>
                  <img className={classes.categoryImage} src={item.img}  alt=""/>
                  <NavLink
                    key={item._id}
                    className={classes.categoryLink}
                    to={`/product/category/${item._id}`}
                    variant="contained"
                  >
                    <div
                      className={classes.categoryName}
                      onClick={()=>getProduct(item._id)}
                    >
                      {item.name}
                    </div>
                  </NavLink>

                </div>
              );
            })}
          </div>
            <Grid container spacing={5} justifyContent={"space-between"}>
                  <Products />
            </Grid>
        </Box>
      </Container>
    </>
  );
}

export default ProductGuest;
