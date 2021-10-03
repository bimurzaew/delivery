import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { addOrderToUser } from "../../redux/features/order";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  green:{
    color:"green"
  },
  yellow:{
    color:"yellow"
  },
  white:{
    color:'white'
  }
}))

function Order({ item, index }) {
  const classes = useStyles()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);

  const buttonName = () => {
    if (item.courier === user._id){
      return "заказ принят"
    }

    if (item.courier){
      return "занята"
    }

    return "принять"
  }

  const orderStatus = () => {
    if (item.courier === user._id){
      return (
        <span className={classes.green}>
           Вы приняли этот заказ
        </span>
      )
    }
    if (item.courier){
      return (
        <span className={classes.yellow}>
          Этот заказ занят другим курьером
        </span>
      )
    }
    return (
      <span className={classes.white}>
        заказ свободен
      </span>
    )
  }


  const addOrderToCourier = (id) => {
    dispatch(addOrderToUser(id));
  };

  console.log(item)

  return (
    <tr key={item._id}>
      <td>
        <NavLink to={`/order/${item._id}`}>
          №191023923{index}
        </NavLink>
      </td>
      <td>{item.products.length}</td>
      <td>
        {item.products.reduce((sum, item) => {
          return sum + item.product.price * item.amount;
        }, 0)}
      </td>
      <td>
        {
          orderStatus()
        }
      </td>
      <td>
          <Button
            // user.order === item._id
            disabled={item.courier}
            onClick={() => addOrderToCourier(item._id)}
            variant="contained"
          >
            {buttonName()}
          </Button>
      </td>
      )
    </tr>
  );
}

export default Order;
