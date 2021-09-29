// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loadOrder } from "../../redux/features/order";
//
// function Order(props) {
//   const [cart, setCart] = useState(false);
//   const orders = useSelector((state) => state.order.orders);
//   console.log(orders);
//
//   const dispatch = useDispatch();
//
//   const handleOrder = () => {
//     setCart(false);
//     dispatch(loadOrder());
//   };
//
//   return (
//     <>
//       <button onClick={() => setCart(true)}>заказы</button>
//       {cart && (
//         <div>
//           <button onClick={handleOrder}>close</button>
//           {orders.map((item) => {
//             return <div>{item.name}</div>;
//           })}
//         </div>
//       )}
//     </>
//   );
// }
//
// export default Order;
