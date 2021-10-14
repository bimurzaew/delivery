// import { json } from "express";
const initialState = {
  products: [],
  loading: false,
  error: false,
  sum: [],
  food: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "load/cart/fulfilled":
      return {
        ...state,
        products: action.payload,
        sum: state.products.reduce(
          (sum, item) => sum + item.product.price * item.amount,
          0
        ),
      };
    case "addProduct/cart/fulfilled":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "deleteProduct/cart/fulfilled":
      return {
        ...state,
        products: state.products.filter((item) => {
          if (item._id !== action.payload.id) {
            return item;
          }
        }),
      };
    case "plusProduct/cart/fulfilled":
      return {
        ...state,
        products: state.products.map((item) => {
          if (item._id === action.payload._id) {
            return {
              ...item,
              amount: item.amount + 1,
            };
          }
          return item;
        }),
        sum: state.products.reduce((sum, item) => {
          return (item.product.price + sum) * item.amount;
        }, 0),
      };
    case "minusProduct/cart/fulfilled":
      return {
        ...state,
        products: state.products.map((item) => {
          if (item._id === action.payload._id) {
            return {
              ...item,
              amount: item.amount - 1,
            };
          }
          return item;
        }),
        sum: state.products.reduce((sum, item) => {
          return (item.product.price - sum) * item.amount;
        }, 0),
      };
    case "clean/cart/fulfilled":
      return {
        ...state,
        products: action.payload,
      };
    case "addFood/cart/pending":
      return {
        ...state,
        loading: true,
      };
    case "addFood/cart/rejected":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "addFood/cart/fulfilled":
      return {
        ...state,
        loading: false,
        products: [...state.products,action.payload],
      };
    default:
      return state;
  }
};

export const minusProduct = (id) => {
  return async (dispatch) => {
    const response = await fetch(`/cart/minusAmount/${id}`, {
      method: "PATCH",
    });
    const json = await response.json();

    dispatch({ type: "minusProduct/cart/fulfilled", payload: json });
  };
};
export const plusProduct = (id) => {
  return async (dispatch) => {
    //
    const response = await fetch(`/cart/plusAmount/${id}`, {
      method: "PATCH",
    });
    const json = await response.json();

    dispatch({ type: "plusProduct/cart/fulfilled", payload: json });
  };
};

export const loadCart = () => {
  return async (dispatch) => {
    const response = await fetch("/cart");
    const json = await response.json();

    dispatch({ type: "load/cart/fulfilled", payload: json });
  };
};

export const addProduct = (id) => {
  return async (dispatch) => {
    const response = await fetch(`/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: id,
      }),
    });
    const json = await response.json();

    dispatch({ type: "addProduct/cart/fulfilled", payload: json });
  };
};

export const addFoodToCart = (id) => {
  return async (dispatch) => {
    dispatch({ type: "addFood/cart/pending" });
    const response = await fetch("/cart/add/food", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        food: id,
      }),
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "addFood/cart/rejected", payload: json });
    } else {
      dispatch({ type: "addFood/cart/fulfilled", payload: json });
    }
  };
};

export const deleteProduct = ({ id }) => {
  return async (dispatch) => {
    const response = await fetch(`/cart/delete/${id}`, {
      method: "DELETE",
    });
    const json = await response.json();

    dispatch({ type: "deleteProduct/cart/fulfilled", payload: { json, id } });
  };
};

export const cleanCart = () => {
  return async (dispatch) => {
    const response = await fetch("/cart/delete", {
      method: "POST",
    });
    const json = await response.json();
    dispatch({ type: "clean/cart/fulfilled", payload: json });
  };
};
