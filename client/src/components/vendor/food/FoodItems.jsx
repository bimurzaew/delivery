import React, { useEffect } from "react";
import {
  Button,
  CardMedia,
  CircularProgress,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { deleteFood, getFood } from "../../../redux/features/food";
import { getCategories } from "../../../redux/features/categories";
import EditFood from "./EditFood";

const useStyles = makeStyles(() => ({
  img: {
    width: 100,
  },
  cont: {
    marginTop: 15,
  },
}));

function ProductItems() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const food = useSelector((state) => state.food.products);
  const deleting = useSelector((state) => state.food.deleting);

  const handleDeleteProduct = (id) => {
    dispatch(deleteFood(id));
  };
  useEffect(() => {
    dispatch(getFood());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <>
      <TableBody>
        {food?.map((item) => (
          <TableRow key={item._id}>
            <TableCell>
              <CardMedia
                className={classes.img}
                component="img"
                image={`../../images/${item.image}`}
              />
            </TableCell>
            <TableCell component="th" scope="row">
              {item.name}
            </TableCell>
            <TableCell align="right">{item.price}</TableCell>
            <TableCell align="right">
              {deleting === item._id ? (
                <CircularProgress />
              ) : (
                <Button onClick={() => handleDeleteProduct(item._id)}>
                  удалить
                </Button>
              )}
              <EditFood item={item} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}

export default ProductItems;
