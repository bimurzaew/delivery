import * as React from "react";
import {
  Avatar,
  Button,
  CardMedia,
  createStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteProduct,
  getProductsForUser,
} from "../../redux/features/product";
import { getCategories } from "../../redux/features/categories";
import { makeStyles } from "@material-ui/core/styles";
import AddProduct from "./AddProduct";
import Loading from "../preload/Loading";
import EditProduct from "./EditProduct";

const useStyles = makeStyles(() => ({
  img: {
    width: 100,
  },
  cont: {
    marginTop: 15,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

export default function ProductsTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const categories = useSelector((state) => state.categories.catalog);

  useEffect(() => {
    dispatch(getProductsForUser());
  }, []);
  useEffect(() => {
    getCategories();
  }, []);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <>
      <Toolbar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Toolbar />
          <TableContainer className={classes.cont} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Название продукта</TableCell>
                  <TableCell align="right">категория</TableCell>
                  <TableCell align="right">цена</TableCell>
                  <TableCell align="right">количество</TableCell>
                  <TableCell align="right">действия</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((item) => (
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
                      <Button onClick={() => handleDeleteProduct(item._id)}>
                        удалить
                      </Button>
                      <EditProduct item={item}/>
                    </TableCell>
                  </TableRow>
                ))}
                <AddProduct />
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
}
