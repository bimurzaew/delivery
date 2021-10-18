import React, { useEffect } from "react";
import { Toolbar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { loadOrder } from "../../redux/features/order";
import Order from "./Order";
import { getUser } from '../../redux/features/users'

function Orders(props) {
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    dispatch(loadOrder());
  }, []);

  return (
    <>
      <Toolbar />
      <Toolbar />
      <table className={"table table-dark table-striped"}>
        <thead>
          <tr>
            <th>номер товара</th>
            <th>кол-во</th>
            <th>сумма</th>
            <th>статус</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => {
            return <Order user={user} item={item} index={index} />;
          })}
        </tbody>
      </table>
    </>
  );
}

export default Orders;
