import React from "react";
import ProductCard from "./ProductCard";
import AddProduct from "./AddProduct";
import ProductsTable from "./ProductsTable";

function Products() {

  return (
    <>
      <ProductCard />
        <AddProduct />
        <ProductsTable />
    </>
  );
}

export default Products;
