import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/Checkoutsteps'
import { createOrder } from '../actions/orderActions'
function Placeorderscreen({ history }) {
    const orderCreate = useSelector(state => state.orderCreateReducer)
    const { order, error, success } = orderCreate
    const cartreducerstate = useSelector(state => state.cartReducer)
    const { cartItems } = cartreducerstate
    const { shippingAddress } = cartreducerstate
    const { paymentMethod } = cartreducerstate

    const dispatch = useDispatch()



    var subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)




    if (!paymentMethod) {
        history.push('/payment')
    }





    const placeOrder = () => {
        dispatch(createOrder(subtotal))
        if (success) {
            history.push(`/orders/:order._id`)

        }
    }

    return (
        <div>
            <div>
                <CheckoutSteps step1 step2 step3 step4 />
                <Row>
                    <Col md={8}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Delivery</h2>

                                <p>
                                    <strong>Delivery: </strong>
                                    {shippingAddress.address},  {shippingAddress.city}
                                    {'  '}
                                    {shippingAddress.postalCode},
                                    {'  '}
                                    {shippingAddress.country}
                                </p>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Payment Method</h2>
                                <p>
                                    <strong>Method: </strong>
                                    {paymentMethod}
                                </p>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Order Items</h2>
                                {cartItems.length === 0 ? <Message variant='info'>
                                    Your cart is empty
                                </Message> : (
                                    <ListGroup variant='flush'>
                                        {cartItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>

                                                    <Col>
                                                        {item.name}
                                                    </Col>

                                                    <Col md={4}>
                                                        {item.quantity} X ${item.price} = ${(item.quantity * item.price).toFixed(2)}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                            </ListGroup.Item>

                        </ListGroup>

                    </Col>

                    <Col md={4}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h2>Order Summary</h2>
                                </ListGroup.Item>


                                <ListGroup.Item>
                                    <Row>
                                        <Col>Total:</Col>
                                        <Col>${subtotal}</Col>
                                    </Row>
                                </ListGroup.Item>


                                <ListGroup.Item>
                                    {error && <Message variant='danger'>{error}</Message>}
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Link to='/orders/:order._id' className='btn btn-light my-3'><Button
                                        type='button'
                                        className='btn-block'
                                        disabled={cartItems === 0}
                                        onClick={placeOrder}
                                    >
                                        Place Order
                                    </Button></Link>
                                </ListGroup.Item>

                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Placeorderscreen
