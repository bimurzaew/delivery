import * as React from "react";
import Button from "@material-ui/core/Button";
import { ButtonGroup, IconButton, Paper, Popover } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import {
  deleteProduct,
  loadCart,
  minusProduct,
  plusProduct,
} from "../../redux/features/cart";
import { addOrder } from "../../redux/features/order";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CartModal() {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCart());
  }, []);




  const addProductOrder = (cart) => {
    dispatch(addOrder());
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
        <Paper>
          {cart.map((item) => {
            return (
              <div key={item._id}>
                <span key={item._id}>{item.product.name} </span>
                остаток:
                <span>
                  {item.product.amount
                    ? item.product.amount + 1 - item.amount
                    : 0}
                  -
                </span>
                количество:
                <span>
                  <Button
                    onClick={() => plus(item._id)}
                    disabled={item.product.amount === 0}
                  >
                    +
                  </Button>
                  {item.amount}
                  <Button onClick={() => minus(item._id)}>-</Button>
                </span>
                __
                <span onClick={() => handleDelete(item._id)}> X</span>
              </div>
            );
          })}
          <ButtonGroup disableElevation variant="contained">
          </ButtonGroup>
        </Paper>
      </Popover>
    </div>
  );
}
