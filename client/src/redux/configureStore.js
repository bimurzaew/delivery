import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { users } from "./features/users";
import { productReducer } from "./features/product";
import { cartReducer} from "./features/cart";

const { createStore } = require("redux");

export const store = createStore(
  combineReducers({
    users,
    product: productReducer,
    cart: cartReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
