import React from "react";
import AddProduct from "./AddProduct";
import ProductCard from "./ProductCard";
import { Grid } from "@material-ui/core";

function Products() {
  return (
    <>
      <Grid container xs={12}>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
      </Grid>
      <AddProduct />
    </>
  );
}

export default Products;
