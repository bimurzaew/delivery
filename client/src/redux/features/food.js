const initialState = {
  products: [],
  loading: false,
  message: null,
  error: false,
};
export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Food/load":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const loadFood = () => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:7777/food");
    const json = await response.json();


    dispatch({ type: "Food/load", payload: json });
  };
};
