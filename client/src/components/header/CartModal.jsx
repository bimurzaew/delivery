import * as React from "react";
import Button from "@material-ui/core/Button";
import {
  ButtonGroup,
  Container,
  IconButton,
  Paper,
  Popover,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import CancelIcon from "@material-ui/icons/Cancel";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  cleanCart,
  deleteProduct,
  loadCart,
  minusProduct,
  plusProduct,
} from '../../redux/features/cart'
import { addOrder } from "../../redux/features/order";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  backCard: {
    backgroundColor: "#F5F5DC",
  },
  Card: {
    fontSize: 20,
    fontWeight: "bolder",
    marginBottom: 10,
  },
  CardTwo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  boxCard: {
    display: "flex",
  },
  ProductName: {
    fontSize: 20,
    fontFamily: "Corbel",
  },
  remainder: {
    marginLeft: 50,
    marginRight: 50,
  },
  cardInfo: {
    width: 500,
    marginBottom: 10,
    textAlign: "center",
  },
  addBtn: {
    fontSize: 20,
    border: "solid blue 1px",
    borderRadius: 10,
  },
  closeBtn: {},
  removeBtn: {
    fontSize: 20,
    border: "solid blue 1px",
    borderRadius: 10,
  },
  trCard: {
    textAlign: "center",
  },
  table: {

  },
  tfoot: {
    width: 500,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold"
  },
  footBtn: {
    margin: "15px 0",
    backgroundColor: "#7251b5"
  }
}));

export default function CartModal() {
  const cart = useSelector((state) => state.cart.products);
  const sum = useSelector((state) => state.cart.sum);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  const addProductOrder = (cart) => {
    dispatch(addOrder());
    dispatch(cleanCart())
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };
  const plus = (id) => {
    dispatch(plusProduct(id));
  };
  const minus = (id) => {
    dispatch(minusProduct(id));
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton
        onClick={handleClick}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <ShoppingCart />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Container className={classes.backCard}>

          <Box className={classes.CardTwo}>Ваш Заказ {sum}</Box>

          <Box className={classes.CardTwo}>Ваш Заказ</Box>



          <table className={classes.table}>
            <thead>
              <tr className={classes.cardInfo}>
                <th>#</th>
                <th></th>
                <th>Товар</th>
                <th>Кол-во</th>
                <th>В наличии</th>
                <th>Цена</th>

                <th>
                  <button onClick={() => addProductOrder(sum)}>
                    Оформить заказ
                  </button>
                </th>


              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => {
                return (
                  <tr className={classes.trCard}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={`../../images/${item.image}`}  alt=""/>
                    </td>


                    <td>{item.product.name}</td>

                    <td>{item?.product?.name}</td>


                    <td>
                      <Button
                        onClick={() => plus(item._id)}
                        disabled={item?.product?.amount === 0}
                      >
                        <AddIcon className={classes.addBtn}/>
                      </Button>
                      {item.amount}
                      <Button onClick={() => minus(item._id)}>
                        <RemoveIcon className={classes.removeBtn}/>
                      </Button>
                    </td>
                    <td>
                      {item?.product?.amount
                        ? item.product.amount + 1 - item.amount
                        : 0}
                    </td>

                    <th>{item.product.price + "₽"}</th>


                    <th>{item.product.price}</th>



                    <td>
                      <ButtonGroup disableElevation variant="contained">
                        <Box
                          onClick={() => handleDelete(item._id)}
                          className={classes.closeBtn}
                        >

                          <CancelIcon/>
                        </Box>
                      </ButtonGroup>
                    </td>
                  </tr>
                );
              })}

            <tr className={classes.tfoot}>
              <td colSpan={3}><Button className={classes.footBtn} variant="contained" color="secondary" onClick={() => addProductOrder(sum)}>Оформить заказ</Button></td>
              <td></td>
              <td><Typography>Итоговая цена:</Typography></td>
              <td>{sum + "₽"}</td>
              <td></td>
            </tr>

            </tbody>
          </table>
        </Container>
      </Popover>
    </div>
  );
}
