import React, { useEffect } from "react";
import { Toolbar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { loadOrder } from "../../redux/features/order";
import { NavLink } from "react-router-dom";

function OrdersModal(props) {
  const orders = useSelector((state) => state.order.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOrder());
  }, []);

  return (
    <>
      <Toolbar />
      <table className={"table table-dark table-striped"}>
        <thead>
          <tr>
            <th>#</th>
            <th>имя товара</th>
            <th>кол-во</th>
            <th>сумма</th>
            <th>статус</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => {
            console.log(item);

            return (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <NavLink to={`/order/${item._id}`}>{item._id}</NavLink>
                </td>
                <td>{item.products.length}</td>
                {/*<td>{item.product.reduce((sum, item) => {*/}
                {/*  return sum + item.price*/}
                {/*}, 0)}</td>*/}
                <td>статус</td>
                <td>
                  <Button variant="contained">принять</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default OrdersModal;
