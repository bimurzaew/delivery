import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { users } from "./features/users";
import { product } from "./features/product";
import { cartReducer } from "./features/cart";
import { orderReducer } from "./features/order";
import { categories } from "./features/categories";
import {business} from "./features/business";

const { createStore } = require("redux");

export const store = createStore(
  combineReducers({
    users,
    product,
    categories,
    cart: cartReducer,
    order: orderReducer,
    business,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
