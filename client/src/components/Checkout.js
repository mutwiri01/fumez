import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Success from '../components/Success'
import { Button } from 'react-bootstrap'

import { placeOrder } from '../actions/orderActions'

function Checkout() {
    const dispatch = useDispatch()
    const orderstate = useSelector(state=>state.placeOrderReducer)

    const { loading , success , error } = orderstate


    function validate() {
        if (!localStorage.getItem('currentUser')) {
            window.location.href = '/login'
        }
        else {
            dispatch(placeOrder)
        }
    }


    return (
        <div>

            {loading && (<Loader />)}
            {success && (<Success success='Your Order Was Placed Successfully' />)}
            {error && (<Error error='Somethings Went wrong' />)}


            <Button onClick={validate}>Continue</Button>
        </div>
    )
}

export default Checkout
