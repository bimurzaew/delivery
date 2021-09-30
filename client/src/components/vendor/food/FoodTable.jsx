import * as React from "react";
import {
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FoodItems from "../product/FoodItems";

const useStyles = makeStyles(() => ({
  img: {
    width: 100,
  },
}));

export default function FoodTable() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Typography>Еда</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Название продукта</TableCell>
              <TableCell align="right">цена</TableCell>
              <TableCell align="right">действия</TableCell>
            </TableRow>
          </TableHead>
          <FoodItems />
        </Table>
      </TableContainer>
    </>
  );
}
