import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { loadProduct } from "../../redux/features/vendor";
import {
  addProduct,
  deleteProduct,
  loadCart,
  minusProduct,
  plusProduct,
} from "../redux/features/cart";
import { addOrder } from "../redux/features/order";
import Order from "./order";

function Product(props) {
  const products = useSelector((state) => state.product.product);
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [box, setBox] = useState(false);

  // console.log(productID)
  // useEffect(() => {
  //   dispatch(loadProduct());
  // }, []);

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  const addProductToBox = (id) => {
    dispatch(addProduct(id));
  };

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

  return (
    <table>
      <thead>
        <tr>
          <td onClick={() => setBox(true)}>
            {box && (
              <div>
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
                        <button
                          onClick={() => plus(item._id)}
                          disabled={item.product.amount === 0}
                        >
                          +
                        </button>
                        {item.amount}
                        <button onClick={() => minus(item._id)}>-</button>
                      </span>
                      __
                      <span onClick={() => handleDelete(item._id)}> X</span>
                    </div>
                  );
                })}
                <button onClick={() => addProductOrder(cart)}>
                  Оформить заказ
                </button>
              </div>
            )}
            корзина
          </td>
          <td/>
          <td/>
          <td/>
          <td>
            <Order />
          </td>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          const inCart = cart.find((item) => item.product._id === product._id);
          return (
            <tr key={product._id}>
              <td>
                <img src={product.image} alt="" />
              </td>
              <td>{product.name}</td>
              <td>{product.desc}</td>
              <td>
                <button
                  disabled={inCart || product.amount === 0}
                  onClick={() => addProductToBox(product._id)}
                >
                  {inCart
                    ? "в корзине"
                    : product.amount
                    ? "добавить в корзину"
                    : "нет в наличии"}
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Product;
