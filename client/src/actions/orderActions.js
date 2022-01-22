import axios from "axios";
export const placeOrder = (subtotal) => (dispatch, getState) => {

    const currentUser = getState().loginReducer.currentUser
    const demoItems = getState().cartReducer.cartItems

    const cartItems = new Array([]);


    for (var i = 0; i < demoItems.length; i++) {

        var item = {
            name: demoItems[i].name,
            quantity: demoItems[i].quantity,
            price: demoItems[i].price,
            _id: demoItems[i]._id
        }

        cartItems.push(item)

    }




    dispatch({ type: 'PLACE_ORDER_REQUEST' })

    axios.post('/api/orders/placeorder', { subtotal, currentUser, cartItems }).then(res => {

        dispatch({ type: 'PLACE_ORDER_SUCCESS' })
        console.log(res);

    }).catch(err => {
        dispatch({ type: 'PLACE_ORDER_FAILED' })
    })


}

export const createOrder = (subtotal) => async (dispatch, getState) => {

    const currentUser = getState().loginReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    const shippingAddress = getState().cartReducer.shippingAddress

    try {
        dispatch({
            type: 'ORDER_CREATE_REQUEST'
        })
        const { data } = await axios.post(
            `/api/orders/add/`, { subtotal, currentUser, cartItems, shippingAddress }
        )

        dispatch({
            type: 'ORDER_CREATE_SUCCESS',
            payload: data
        })


        dispatch({
            type: 'CART_CLEAR_ITEMS',
            payload: data
        })

        localStorage.removeItem('cartItems')

    } catch (error) {
        dispatch({
            type: 'ORDER_CREATE_FAIL',
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deliverOrder = () => async (dispatch, getState) => {



    try {
        dispatch({
            type: 'ORDER_DELIVER_REQUEST'
        })

        const { data } = await axios.post(
            `/api/orders/getordersbyuserid/deliver/`

        )

        dispatch({
            type: 'ORDER_DELIVER_SUCCESS',
            payload: data
        })


    } catch (error) {
        dispatch({
            type: 'ORDER_DELIVER_FAIL',
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const getOrdersByUserId1 = () => async (dispatch, getState) => {
    try {

        const userid = getState().loginReducer.currentUser._id
        dispatch({
            type: 'GET_ORDERSBYUSERID_REQUEST'
        })

        const { data } = await axios.get(
            `/api/orders/getordersbyuserid`, { userid: userid }

        )

        dispatch({
            type: 'GET_ORDERSBYUSERID_SUCCESS',
            payload: data
        })


    } catch (error) {
        dispatch({
            type: 'GET_ORDERSBYUSERID_FAILED',
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const getOrdersByUserId2 = () => (dispatch, getState) => {

    const userid = getState().loginReducer.currentUser._id

    dispatch({ type: 'GET_ORDERSBYUSERID_REQUEST' })

    axios.post('/api/orders/getordersbyuserid', { userid: userid }).then(res => {

        dispatch({ type: 'GET_ORDERSBYUSERID_SUCCESS', payload: res.data })
        console.log(res.data);

    }).catch(err => {
        dispatch({ type: 'GET_ORDERSBYUSERID_FAILED', payload: err })

    })


}

export const getOrdersByUserId = () => (dispatch, getState) => {

    const userid = getState().loginReducer.currentUser._id

    dispatch({ type: 'GET_ORDERSBYUSERID_REQUEST' })

    axios.post('/api/orders/getordersbyuserid', { userid: userid }).then(res => {

        dispatch({ type: 'GET_ORDERSBYUSERID_SUCCESS', payload: res.data })
        console.log(res.data);

    }).catch(err => {
        dispatch({ type: 'GET_ORDERSBYUSERID_FAILED', payload: err })

    })


}

export const getOrderById = (orderid) => (dispatch, getState) => {

    const shippingAddress = getState().cartReducer.shippingAddress


    dispatch({ type: 'GET_ORDERBYID_REQUEST' })

    axios.post('/api/orders/getorderbyid', { orderid: orderid, shippingAddress }).then(res => {

        dispatch({ type: 'GET_ORDERBYID_SUCCESS', payload: res.data })
        console.log(res.data);

    }).catch(err => {
        dispatch({ type: 'GET_ORDERBYID_FAILED', payload: err })

    })


}

export const getAllOrders = () => (dispatch, getState) => {



    dispatch({ type: 'GET_ALLORDERS_REQUEST' })

    axios.get('/api/orders/getallorders').then(res => {

        dispatch({ type: 'GET_ALLORDERS_SUCCESS', payload: res.data })
        console.log(res.data);

    }).catch(err => {
        dispatch({ type: 'GET_ALLORDERS_FAILED', payload: err })

    })


}

