const initialState = {
  catalog: [],
  loading: false,
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "Categories/load":
      return {
        ...state,
        catalog: action.payload,
        loading: true,
      }
    default:
      return state;
  }
}



export const loadCategories = () => {
  return (dispatch) => {
    fetch("http://localhost:7777/category")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "Categories/load", payload: data });
    });
  };
};