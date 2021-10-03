import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { users } from "./features/users";
import { productReducer } from "./features/product";
import { cartReducer } from "./features/cart";
import { orderReducer } from "./features/order";
import { categoriesReducer } from "./features/categories";
import { foodReducer } from './features/food';

const { createStore } = require("redux");

export const store = createStore(
  combineReducers({
    users,
    food: foodReducer,
    product: productReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    order: orderReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
