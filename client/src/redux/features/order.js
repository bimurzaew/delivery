const initialState = {
  orders:[],
  loading:false,
  error:false,
}

export const cartReducer = (state=initialState,action) => {
  switch (action.type){
    case "addOrder/cart/fulfilled":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      }
    default:
      return state
  }
};

export const addOrder = () => {
  return async dispatch => {
    const response = await fetch(`http://localhost:7777/order`,{
      method:"POST",

    });
    const json = await response.json();
    console.log(json)

    dispatch({type:"addOrder/cart/fulfilled",payload: json})
  }
}