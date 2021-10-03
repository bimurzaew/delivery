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
    case "addOrder/courier/fulfilled":
      return {
        ...state,
        orders: state.orders.map(item => {
          if (item._id === action.payload.json._id){
            return {
              ...item,
              courier:action.payload.userId
            }
          }
          return item
        }),
      };
    case "loadOrder/courier/fulfilled":
      return {
        ...state,
        orders: action.payload
      }
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

    dispatch({ type: "add/order/fulfilled", payload: json });
  };
};

export const loadOrder = () => {
  return async (dispatch) => {
    const response = await fetch(`/order`);
    const json = await response.json();

    dispatch({ type: "load/order/fulfilled", payload: json });
  };
};

export const addOrderToUser = (id) => {
  return async (dispatch, getState) => {

    const state = getState();
    const response = await fetch(`/user/order/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      }
    });
    const json = await response.json();

    const userId = state.users.user._id
    dispatch({ type: "addOrder/courier/fulfilled", payload: { json,userId } });
  };
};

export const loadOrdersByCourier = () => {
  return async dispatch => {
    const response = await fetch("/order/courier");
    const json = await response.json();

    dispatch({type:"loadOrder/courier/fulfilled",payload:json})
  }
}
