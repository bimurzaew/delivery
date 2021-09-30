const initialState = {
  products: [],
  loading: false,
  message: null,
  error: false,
  deleting:false,
  editing:false
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "load/product/pending":
      return {
        ...state,
        loading: true,
      };
    case "load/product/fulfilled":
      return {
        ...state,
        products: action.payload,
      };
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
        products: [...state.products, action.payload],
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
        deleting: true,
      };
    case "vendor/delete/rejected":
      return {
        ...state,
        deleting: false,
        error: action.payload.error,
      };
    case "vendor/delete/fulfilled":
      return {
        ...state,
        deleting: false,
        products: action.payload,
      };
    case "load/productByCategory/pending":
      return {
        ...state,
        loading: true,
      };
    case "load/productByCategory/rejected":
      return {
        ...state,
        error: action.payload,
      };
    case "load/productByCategory/fulfilled":
      return {
        ...state,
        products: action.payload,
      };
    case "product/edit/pending":
      return {
        ...state,
        editing: true,
      };
    case "product/edit/rejected":
      return {
        ...state,
        editing: false,
        error: action.payload,
      };
    case "product/edit/fulfilled":
      return {
        ...state,
        editing: false,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export const addProduct = ({
  file,
  name,
  desc,
  price,
  category,
  amount,
  thing,
}) => {
  return async (dispatch, getState) => {
    dispatch({ type: "vendor/add/pending" });
    const state = getState();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("amount", amount);
    formData.append("thing", thing);

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
      dispatch({ type: "vendor/delete/rejected", payload: json });
    } else {
      dispatch({ type: "vendor/delete/fulfilled", payload: json });
    }
  };
};

export const loadProduct = () => {
  return async (dispatch) => {
    dispatch({ type: "load/product/pending" });
    const response = await fetch("/products");
    const json = await response.json();

    dispatch({ type: "load/product/fulfilled", payload: json });
  };
};

export const loadProductByCategory = (id) => {
  return async (dispatch) => {
    dispatch({ type: "load/productByCategory/pending" });
    const response = await fetch(
      `http://localhost:7777/product/category/${id}`
    );
    const json = await response.json();

    dispatch({ type: "load/productByCategory/fulfilled", payload: json });
  };
};
export const editProduct = ({
  id,
  file,
  name,
  desc,
  price,
  category,
  amount,
}) => {
  return async (dispatch, getState) => {
    dispatch({ type: "product/edit/pending" });
    const state = getState();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("amount", amount);
    const response = await fetch(`product/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      },
      body: formData,
    });
    const json = response.json();
    if (json.error) {
      dispatch({ type: "product/edit/rejected", payload: json });
    } else {
      dispatch({ type: "product/edit/fulfilled", payload: json });
    }
  };
};
