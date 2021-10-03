const initialState = {
  products: [],
  loading: false,
  message: null,
  error: false,
  deleting: [],
};
export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "food/add/pending":
      return {
        ...state,
        loading: true,
      };
    case "food/add/rejected":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case "food/add/fulfilled":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "food/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "food/load/rejected":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case "food/load/fulfilled":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case "food/delete/pending":
      return {
        ...state,
        deleting: action.payload,
      };
    case "food/delete/rejected":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case "food/delete/fulfilled":
      return {
        ...state,
        products: [
          ...state.products.filter((item) => {
            if (item._id !== action.payload._id) {
              return item;
            }
          }),
        ],
        deleting: [],
      };
    default:
      return state;
  }
};

export const loadFood = () => {
  return async (dispatch) => {
    dispatch({ type: "food/load/pending" });
    const response = await fetch("/food");
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "food/load/rejected", payload: json });
    } else {
      dispatch({ type: "food/load/fulfilled", payload: json });
    }
  };
};

export const addFood = ({ name, file, price, desc }) => {
  return async (dispatch, getState) => {
    dispatch({ type: "food/add/pending" });
    const state = getState();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("price", price);
    const response = await fetch("/food", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      },
      body: formData,
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "food/add/rejected", payload: json });
    } else {
      dispatch({ type: "food/add/fulfilled", payload: json });
    }
  };
};

export const getFood = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "food/load/pending" });
    const state = getState();
    const response = await fetch("/food/vendor", {
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "food/load/rejected", payload: json });
    } else {
      dispatch({ type: "food/load/fulfilled", payload: json });
    }
  };
};

export const deleteFood = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: "food/delete/pending", payload: id });
    const state = getState();
    const response = await fetch(`/food/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "food/delete/rejected", payload: json });
    } else {
      dispatch({ type: "food/delete/fulfilled", payload: json });
    }
  };
};
