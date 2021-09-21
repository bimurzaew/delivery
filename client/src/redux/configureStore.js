import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { courierReducer } from "./features/courier";

const { createStore } = require("redux");

export const store = createStore(
  combineReducers({
    courier: courierReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
