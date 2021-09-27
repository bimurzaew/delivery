const initialState = {
  products: null,
  loading: false,
  message: null,
  error: false,
};

export const product = (state = initialState, action) => {
  switch (action.type) {
    case "vendor/add/pending":
      return {
        ...state,
        loading: true,
      };
    case "vendor/add/rejected":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case "vendor/add/fulfilled":
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      };
    case "products/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "products/load/rejected":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case "products/load/fulfilled":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case "vendor/delete/pending":
      return {
        ...state,
        loading: true,
      };
    case "vendor/delete/rejected":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case "vendor/delete/fulfilled":
      return {
        ...state,
        loading: false,
        message: action.payload,
        products: action.payload
      };
    default:
      return state;
  }
};

export const addProduct = ({ file, name, desc, price, category, business }) => {
  return async (dispatch, getState) => {
    dispatch({ type: "vendor/add/pending" });
    const state = getState();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("price", price);
    formData.append("category", category);

    const response = await fetch("/product", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      },
      body: formData,
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "vendor/add/rejected", payload: json });
    } else {
      dispatch({ type: "vendor/add/fulfilled", payload: json });
    }
  };
};
export const getProductsForUser = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "products/load/pending" });
    const state = getState();
    const response = await fetch("products/user", {
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "products/load/rejected", payload: json });
    } else {
      dispatch({ type: "products/load/fulfilled", payload: json });
    }
  };
};
export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: "vendor/delete/pending" });
    const state = getState();
    const response = await fetch(`/product/${id}/delete`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "vendor/delete/rejected", payload:json });
    } else {
      dispatch({ type: "vendor/delete/fulfilled", payload:json });
    }
  };
};

