import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { users } from "./features/users";
import categoryReducer from "./features/categories"

const { createStore } = require("redux");

export const store = createStore(
  combineReducers({
    users,
    category: categoryReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
