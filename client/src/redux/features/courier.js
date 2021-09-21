const initialState = {
    loading:false
}

export const courierReducer = (state=initialState, action) => {
    switch (action.type){
        case "courier/register/fulfilled":
            return state
        default:
            return state
    }
}
export const registerCourier = ({login, password}) => {
    return async (dispatch) => {
        const response = await fetch("/couriers", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({login, password})
        });
        const json = await response.json();

        dispatch({type:"courier/register/fulfilled", payload:json})
    }
}