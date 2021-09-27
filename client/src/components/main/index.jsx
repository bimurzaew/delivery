import Category from "./main";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/features/categories";
import { Grid } from "@material-ui/core";

function Main() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.catalog);
  console.log(category);

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <Grid container>
      {category.map((ctg) => {
        return <Category key={ctg._id} categor={ctg} />;
      })}
    </Grid>
  );
}

export default Main;
