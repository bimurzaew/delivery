import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/features/categories";
import {Link} from "react-router-dom";

function Main() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.catalog);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <Link>Рестораны</Link>
      <Link>Магазины</Link>
    </div>
  );
}

export default Main;
