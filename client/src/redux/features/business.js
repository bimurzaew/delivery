const initialState = {
  loading: false,
  items:null
};
export const business = (state = initialState, action) => {
  switch (action.type) {
    case "rest/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "rest/load/rejected":
      return {
        ...state,
        error: action.payload.error,
      };
    case "rest/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    default:
      return state;
  }
};
export const getBusiness = () => {
  return async (dispatch) => {
    dispatch({ type: "rest/load/pending" });
    const response = await fetch("/business");
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "rest/load/rejected", payload: json });
    } else {
      dispatch({ type: "rest/load/fulfilled", payload: json });
    }
  };
};
