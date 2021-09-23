import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct } from "../../redux/features/product";
import { addProduct, deleteProduct, loadCart } from "../../redux/features/cart";
import { addOrder } from '../../redux/features/order'

function Products(props) {
  const products = useSelector((state) => state.product.product);
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [box, setBox] = useState(false);

  // console.log(productID)
  useEffect(() => {
    dispatch(loadProduct());
  }, []);

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  const addProductToBox = (id) => {
    dispatch(addProduct(id));
  };

  const addProductrOrder = (cart) => {
    dispatch(addOrder());
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };

  return (
    <table>
      <thead>
        <tr>
          <td onClick={() => setBox(true)}>
          {box &&
            cart.map((item) => {
              return (
                <div key={item._id}>
                  <span key={item._id}>{item.product.name} </span>

                  количество:<span>{item.product.amount}</span>
                   __
                  <span onClick={() => handleDelete(item._id)}> X</span>
                </div>
              );
            })}
          <button onClick={() => addProductrOrder(cart)}>
            Оформить заказ
          </button>
          корзина</td>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          const inCart = cart.find((item) => item.product._id === product._id)
          return (
            <tr key={product._id}>
              <td>
                <img src={product.image} alt=""/>
              </td>
              <td>{product.name}</td>
              <td>{product.desc}</td>
              <td>
                <button disabled={inCart}  onClick={() => addProductToBox(product._id)}>
                  добавить в корзину
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Products;
