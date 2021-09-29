import React, { useEffect } from "react";
import {
  Button,
  CardMedia,
  TableBody,
  TableCell,
  TableRow, Typography,
} from "@material-ui/core";
import EditProduct from "./EditProduct";
import AddProduct from "./AddProduct";
import AddFood from "../food/AddFood";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { deleteProduct } from "../../../redux/features/product";
import {deleteFood, getFood} from "../../../redux/features/food";

const useStyles = makeStyles(() => ({
  img: {
    width: 100,
  },
  cont: {
    marginTop: 15,
  },
}));

function ProductItems(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const food = useSelector((state) => state.food.products);

  const handleDeleteProduct = (id) => {
    dispatch(deleteFood(id));
  };
  useEffect(() => {
    dispatch(getFood());
  }, []);
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
                  <Button onClick={() => handleDeleteProduct(item._id)}>
                    удалить
                  </Button>
                  <EditProduct item={item} />
                </TableCell>
              </TableRow>
          ))}
          <AddFood />
        </TableBody>
      </>
  );
}

export default ProductItems;
