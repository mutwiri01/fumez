
export const cartReducer=(state={cartItems : [] , shippingAddress: {} }, action)=>{

    switch(action.type)
    {
        case 'ADD_TO_CART':

        const alreadyexist = state.cartItems.find(item => item._id === action.payload._id)

        if(alreadyexist)
        {

            return {
                ...state ,
                cartItems : state.cartItems.map((item) => item._id === action.payload._id ? action.payload : item)
            }

        }
        else{

            return {

                ...state ,
                cartItems : [...state.cartItems , action.payload]
 
         }

        }

        case 'CART_SAVE_SHIPPING_ADDRESS':
            return {
                ...state,
                shippingAddress: action.payload
            }

        case 'CART_SAVE_PAYMENT_METHOD':
            return {
                ...state,
                paymentMethod: action.payload
            }

        case 'DELETE_FROM_CART' : return{

            ...state , 
            cartItems : state.cartItems.filter(item=> {return item._id !==action.payload._id})

      }

        default: return state
    }
    

}