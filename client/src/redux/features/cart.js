const initialState = {
    products:[],
    loading:false,
    error:false,
}

export const cartReducer = (state=initialState,action) => {
    switch (action.type){
        case "load/cart/fulfilled":
            return {
                ...state,
                products: action.payload
            }
        case "addProduct/cart/fulfilled":
            return {
                ...state,
                products: [...state.products, action.payload],
            }
        case "deleteProduct/cart/fulfilled":
            return {
                ...state,
                products: state.products.filter(item => {
                    if (item._id !== action.payload.id){
                        return item
                    }
                })
            }
        default:
            return state
    }
}

export const loadCart = () => {
    return async dispatch => {
        const response = await fetch("http://localhost:7777/cart");
        const json = await response.json();

        dispatch({type:"load/cart/fulfilled", payload:json})
    }
}

export const addProduct = (id) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:7777/cart/add`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                    product: id
            })
        });
        const json = await response.json();

        dispatch({type:"addProduct/cart/fulfilled",payload: json})
    }
}

export const deleteProduct = ({id}) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:7777/cart/delete/${id}`,{
            method:"DELETE"
        })
        const json = await response.json();

        dispatch({type:"deleteProduct/cart/fulfilled", payload: { json,id }})
    }
}