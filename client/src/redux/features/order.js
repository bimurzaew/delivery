const initialState = {
  orders: [],
  loading: false,
  error: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add/order/fulfilled":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case "load/order/fulfilled":
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export const addOrder = (sum) => {
  return async (dispatch) => {
    const response = await fetch(`/order`, {
      method: "POST",
    });
    const json = await response.json();


    dispatch({ type: "add/order/fulfilled", payload:  json });
  };
};


export const loadOrder = () => {
  return async (dispatch) => {
    const response = await fetch(`/order`);
    const json = await response.json();

    dispatch({ type: "load/order/fulfilled", payload: json });
  };
};
