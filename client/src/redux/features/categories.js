const initialState = {
  loading: false,
  error: false,
  catalog:[]
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "categories/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "categories/load/rejected":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case "categories/load/fulfilled":
      return {
        ...state,
        loading: false,
        catalog: action.payload,
      };
    default:
      return state;
  }
};

export const getCategories = () => {
  return async (dispatch) => {
    dispatch({ type: "categories/load/pending" });
    const response = await fetch("http://localhost:7777/category");
    const json = await response.json();

    if (json.error) {
      dispatch({ type: "categories/load/rejected", payload: json });
    } else {
      dispatch({ type: "categories/load/fulfilled", payload: json });
    }
  };
};
