const initialState = {
  loading: false,
  token: localStorage.getItem("token"),
};

export const courierReducer = (state = initialState, action) => {
  switch (action.type) {
    case "courier/register/fulfilled":
      return state;
    case "courier/auth/fulfilled":
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
  }
};
export const registerCourier = ({ login, password }) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:7777/couriers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    });
    const json = await response.json();

    dispatch({ type: "courier/register/fulfilled", payload: json });
  };
};

export const authCourier = ({ login, password }) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:7777/couriers/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    });
    const json = await response.json();

    localStorage.setItem("token", json.token);

    dispatch({ type: "courier/auth/fulfilled", payload: json });
  };
};
