const initialState = {
  orders: [],
  loading: false,
  error: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add/order/rejected":
      return {
        ...state,
        error: action.payload.error,
      };
    case "add/order/pending":
      return {
        ...state,
        loading: true,
      };
    case "add/order/fulfilled":
      return {
        ...state,
        loading: false,
        orders: [...state.orders, action.payload],
      };
    case "load/order/rejected":
      return {
        ...state,
        error: action.payload.error,
      };
    case "load/order/pending":
      return {
        ...state,
        loading: true,
      };
    case "load/order/fulfilled":
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case "addOrder/courier/rejected":
      return {
        ...state,
        error: action.payload.error,
      };
    case "addOrder/courier/pending":
      return {
        ...state,
        loading: true,
      };
    case "addOrder/courier/fulfilled":
      return {
        ...state,
        loading: false,
        orders: state.orders.map((item) => {
          if (item._id === action.payload.json._id) {
            return {
              ...item,
              courier: action.payload.userId,
            };
          }
          return item;
        }),
      };
    case "loadOrder/courier/rejected":
      return {
        ...state,
        error: action.payload.error,
      };
    case "loadOrder/courier/pending":
      return {
        ...state,
        loading: true,
      };
    case "loadOrder/courier/fulfilled":
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case "completed/order/rejected":
      return {
        ...state,
        error: action.payload.error,
      };
    case "completed/order/pending":
      return {
        ...state,
        loading: true,
      };
    case "completed/order/fulfilled":
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export const addOrder = (email) => {
  return async (dispatch) => {
    dispatch({ type: "add/order/pending" });
    const response = await fetch(`/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "add/order/rejected", payload: json.error });
    } else {
      dispatch({ type: "add/order/fulfilled", payload: json });
    }
  };
};

export const loadOrder = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "load/order/pending" });
    const state = getState();
    const response = await fetch(`/order`, {
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      },
    });
    const json = await response.json();

    if (json.error) {
      dispatch({ type: "load/order/rejected", payload: json.error });
    } else {
      dispatch({ type: "load/order/fulfilled", payload: json });
    }
  };
};

export const addOrderToUser = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: "addOrder/courier/pending" });
    const state = getState();
    const response = await fetch(`/user/order/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      },
    });
    const json = await response.json();

    const userId = state.users.user._id;
    if (json.error) {
      dispatch({ type: "addOrder/courier/rejected", payload: json.error });
    } else {
      dispatch({
        type: "addOrder/courier/fulfilled",
        payload: { json, userId },
      });
    }
  };
};

export const loadOrdersByCourier = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "loadOrder/courier/pending" });
    const state = getState();
    const response = await fetch("/order/courier", {
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      },
    });
    const json = await response.json();

    if (json.error) {
      dispatch({ type: "loadOrder/courier/rejected", payload: json.error });
    } else {
      dispatch({ type: "loadOrder/courier/fulfilled", payload: json });
    }
  };
};

export const deleteOrder = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: "completed/order/pending" });
    const state = getState();
    const response = await fetch(`/order/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      },
    });
    const json = await response.json();

    if (json.error) {
      dispatch({ type: "completed/order/rejected", payload: json.error });
    } else {
      dispatch({ type: "completed/order/fulfilled", payload: json });
    }
  };
};
