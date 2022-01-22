import React, { useState, useEffect } from 'react'

import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/Formcontainer'
import CheckoutSteps from '../components/Checkoutsteps'
import { savePaymentMethod } from '../actions/cartActions'

import Success from '../components/Success'

function Paymentscreen({ history }) {
    const cartreducerstate = useSelector(state => state.cartReducer)
    const { shippingAddress } = cartreducerstate
    const { cartItems } = cartreducerstate

    var subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    const dispatch = useDispatch()

    const [paymentMethod] = useState('Plug Pay')
    const { success } = ''

    if (!shippingAddress) {
        history.push('/delivery')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }



    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            {success && (<Success success='Payment is being processed' />)}

            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>How to Pay</Form.Label>
                    <Col>

                        <h3>Pay $ {subtotal} to this Till Number 9260763</h3>
                        <p>Go to Mpesa</p>
                        <p>Select Lipa na Mpesa</p>
                        <p>Select Buy Goods and Services</p>
                        <p>Enter the till Number 9260763</p>
                        <p>Enter the Amount {subtotal}</p>
                        <p>Upon completion of payment tick the Plug Pay option to continue</p>
                        <Form.Check
                            type='radio'
                            label='Plug Pay (tick this box after paying then press continue)'
                            name='paymentMethod'

                            onChange={(e) => savePaymentMethod(e.target.value)}


                        >

                        </Form.Check>
                    </Col>
                </Form.Group>    
            </Form>
            <br>-------------------------------------------------------------------------------------</br>
            <Button type='submit' variant='primary'>
                    Continue
                </Button>
        </FormContainer>
    )
}

export default Paymentscreen
