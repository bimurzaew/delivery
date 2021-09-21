import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { users } from "./features/users";

const { createStore } = require("redux");

export const store = createStore(
  combineReducers({
    users,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
