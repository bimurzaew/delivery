import * as React from "react";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsForUser } from "../../../redux/features/product";
import { getCategories } from "../../../redux/features/categories";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../../preload/Loading";
import ProductItems from "./ProductItems";

const useStyles = makeStyles(() => ({
  img: {
    width: 100,
  },
  cont: {
    marginTop: 15,
  },
  text: {
    textAlign: "center",
  },
}));

export default function ProductsTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    dispatch(getProductsForUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <Toolbar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Typography variant="h4" className={classes.text}>
            Продукты
          </Typography>
          <TableContainer className={classes.cont} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Название продукта</TableCell>
                  <TableCell align="right">категория</TableCell>
                  <TableCell align="right">количество</TableCell>
                  <TableCell align="right">цена</TableCell>
                  <TableCell align="right">действия</TableCell>
                </TableRow>
              </TableHead>
              <ProductItems />
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
}
