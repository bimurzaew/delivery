import React from "react";
import {
  Button,
  CardMedia,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import EditProduct from "./EditProduct";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { deleteProduct } from "../../../redux/features/product";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  const products = useSelector((state) => state.product.products);
  const deleting = useSelector((state) => state.product.deleting);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <TableBody>
      {products?.map((item) => (
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
          <TableCell align="right">{item.category?.name}</TableCell>
          <TableCell align="right">{item.amount}</TableCell>
          <TableCell align="right">{item.price}</TableCell>
          <TableCell align="right">
            {deleting === item._id ? (
              <CircularProgress />
            ) : (
              <Button onClick={() => handleDeleteProduct(item._id)}>
                удалить
              </Button>
            )}
            <EditProduct item={item} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default ProductItems;
