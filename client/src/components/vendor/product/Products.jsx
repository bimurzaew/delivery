import React from "react";
import ProductsTable from "./ProductsTable";
import FoodTable from "../food/FoodTable";
import { Toolbar } from "@material-ui/core";
import Personal from "../Personal";

function Products() {
  return (
    <>
      <Toolbar />
      <Personal />
      <Toolbar />
      <ProductsTable />
      <FoodTable />
    </>
  );
}

export default Products;
