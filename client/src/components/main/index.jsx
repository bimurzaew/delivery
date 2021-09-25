import Category from "./main";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/features/categories";

function Main() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.catalog);
  console.log(category)

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div>
      {category?.map((ctg) => {
        return <Category key={ctg._id} categor={ctg} />;
      })}
    </div>
  );
}

export default Main;
