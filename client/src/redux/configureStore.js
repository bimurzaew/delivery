import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { users } from "./features/users";
import { product, productReducer } from './features/product'
import { cartReducer } from "./features/cart";
import { orderReducer } from "./features/order";
import { categories, categoriesReducer } from './features/categories'
import {business} from "./features/business";

const { createStore } = require("redux");

export const store = createStore(
  combineReducers({
    users,
    product:productReducer,
    categories:categoriesReducer,
    cart: cartReducer,
    order: orderReducer,
    business,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
