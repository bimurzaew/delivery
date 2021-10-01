import React from "react";
import ProductsTable from "./ProductsTable";
import FoodTable from "../food/FoodTable";
import {Toolbar, Typography} from "@material-ui/core";

function Products() {

  return (
    <>
        <Toolbar />
        <ProductsTable />
        <FoodTable />
    </>
  );
}

export default Products;
