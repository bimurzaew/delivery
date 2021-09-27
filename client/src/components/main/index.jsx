import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/features/categories";
import { Grid } from "@material-ui/core";
import { Category } from "@material-ui/icons";

function Main() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.catalog);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Grid container>
      {category?.map((ctg) => {
        return <Category key={ctg._id} categor={ctg} />;
      })}
    </Grid>
  );
}

export default Main;
