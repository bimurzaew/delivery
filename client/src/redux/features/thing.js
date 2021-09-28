const initialState = {
  item: null,
  loading: false,
  error: null,
};

export const things = (state = initialState, action) => {
  switch (action.type) {
    case "thing/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "thing/load/rejected":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "thing/load/fulfilled":
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};
export const getThings = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "thing/load/pending" });
    const state = getState();
    const response = await fetch("/things", {
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "thing/load/rejected", payload: json });
    } else {
      dispatch({ type: "thing/load/fulfilled", payload: json });
    }
  };
};
