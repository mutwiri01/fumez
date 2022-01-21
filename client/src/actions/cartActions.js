
export const addToCart = (product, quantity) => (dispatch, getState) => {

    const cartItem = {
        name: product.name,
        _id: product._id,
        price: product.price,
        countInStock: product.countInStock,
        quantity: quantity

    }

 

    dispatch({ type: 'ADD_TO_CART', payload: cartItem })

    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))

}

export const deleteFromCart=(item)=>(dispatch , getState)=>{

    dispatch({type:'DELETE_FROM_CART' , payload:item})

    localStorage.setItem('cartItems' , JSON.stringify(getState().cartReducer.cartItems))


}

export const saveShippingAddress = (address) => (dispatch,getState) => {
    const shippingAddress = { 

        address : address.address,
        city : address.city ,
        postalCode : address.Postalcode,
        country : address.country

    } 

    dispatch({
        type: 'CART_SAVE_SHIPPING_ADDRESS',
        payload: shippingAddress,
    })

    localStorage.setItem('shippingAddress' , JSON.stringify(getState().cartReducer.shippingAddress))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: 'CART_SAVE_PAYMENT_METHOD',
        payload: data,
    })
}


