const initialState = {
  products: [],
  loading: false,
  error: false,
  sum:null
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "load/cart/fulfilled":
      return {
        ...state,
        products: action.payload,
        sum: action.payload.reduce((sum,item) => sum + item.product.price,0)
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
        products: state.products.filter((item) => {
          if (item._id === action.payload._id) {
            return {
              ...item,
              amount: item.amount++,
            };
          }
          return item;
        }),
      };
    case "minusProduct/cart/fulfilled":
      return {
        ...state,
        products: state.products.filter((item) => {
          if (item._id === action.payload._id) {
            // if (item.amount>0){
            return {
              ...item,
              amount: item.amount--,
            };
            // }
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export const minusProduct = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `/cart/minusAmount/${id}`,
      {
        method: "PATCH",
      }
    );
    const json = await response.json();

    dispatch({ type: "minusProduct/cart/fulfilled", payload: json });
  };
};
export const plusProduct = (id) => {
  return async (dispatch) => {
    //
    const response = await fetch(
      `/cart/plusAmount/${id}`,
      {
        method: "PATCH",
      }
    );
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

export const deleteProduct = ({ id }) => {
  return async (dispatch) => {
    const response = await fetch(`/cart/delete/${id}`, {
      method: "DELETE",
    });
    const json = await response.json();

    dispatch({ type: "deleteProduct/cart/fulfilled", payload: { json, id } });
  };
};
