import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Box, Grid, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/features/categories";
import { loadProductByCategory } from "../../redux/features/product";
import { useHistory, useParams } from "react-router-dom";
import Products from "./Products";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "auto",
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
}));

function ProductGuest() {
  const catalog = useSelector((state) => state.categories.catalog);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCategories());
  }, [id]);

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
          <Grid container justifyContent={"space-between"}>
            <Grid item xs={4}>
              <b>Все категории</b>
              {catalog.map((item) => {
                return (
                  <p key={item._id}>
                    <Button
                      key={item._id}
                      onClick={() => getProduct(item._id)}
                      variant="contained"
                    >
                      {item.name}
                    </Button>
                  </p>
                );
              })}
            </Grid>
            <Grid item xs={7}>
              <h4>
                <b>Имя категории</b>
              </h4>

              <Grid container justifyContent={"space-between"}>
                <Products />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default ProductGuest;
