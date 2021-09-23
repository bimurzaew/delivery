const initialState = {
    product:[],
    loading:false,
}
export const productReducer = (state=initialState, action) => {
    switch (action.type){
        case "load/products/fulfilled":
            return {
                ...state,
                product: action.payload.json
            }
        default:
            return state
    }
}

export const loadProduct = () => {
    return async dispatch => {
        const response = await fetch("http://localhost:7777/products");
        const json = await response.json();

        dispatch({type:"load/products/fulfilled", payload:{json}})
    }
}
