import * as React from "react";
import {
  Box,
  Container,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FoodItems from "./FoodItems";
import ButtonsAdd from "../product/ButtonsAdd";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  img: {
    width: 100,
  },
  textBlock: {
    marginBottom: 30,
  },
  text: {
    textAlign: "center",
  },
  buttons: {
    textAlign: "center",
    marginBottom: "50px",
  },
}));

export default function FoodTable() {
  const classes = useStyles();
  return (
    <>
      <Toolbar />
      <Box className={classes.textBlock}>
        <Typography variant="h4" className={classes.text}>
          Еда
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Название еды</TableCell>
              <TableCell align="right">цена</TableCell>
              <TableCell align="right">действия</TableCell>
            </TableRow>
          </TableHead>
          <FoodItems />
        </Table>
      </TableContainer>
      <Toolbar />
      <Container className={classes.buttons}>
        <ButtonsAdd />
      </Container>
    </>
  );
}
