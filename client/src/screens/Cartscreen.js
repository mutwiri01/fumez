import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions'

import Message from '../components/Message'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
function Cartscreen({ history }) {

    const cartreducerstate = useSelector(state => state.cartReducer)
    const { cartItems } = cartreducerstate
    const dispatch = useDispatch()
    var subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    useEffect(() => {
        if (!localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }
    }, [])

    const checkoutHandler = () => {
        history.push('/delivery')

    }

    return (
        <div>
            <div className="row mt-3 justify-content-center">
                <h2 className='text-center m-5'>My Bag</h2>

                <div className="col-md-8">

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.length === 0 ? (
                                <Message variant='info'>
                                    Your cart is empty <Link to='/homescreen'>Go Back</Link>
                                </Message>
                            ) :


                                cartItems.map(item => {

                                    return <tr>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td><select value={item.quantity} onChange={(e) => { dispatch(addToCart(item, e.target.value)) }}>

                                            {[...Array(item.countInStock).keys()].map((x, i) => {

                                                return <option value={i + 1}>{i + 1}</option>

                                            })}

                                        </select></td>
                                        <td>{item.quantity * item.price}</td>
                                        <td><i style={{ color: 'red' }} class="far fa-trash-alt" onClick={() => { dispatch(deleteFromCart(item)) }}></i></td>
                                    </tr>

                                })


                            }

                        </tbody>
                    </table>

                    <hr />


                    <h2 className='text-center'>SubTotal : $ {subtotal}</h2>

                    <hr />
                    <Button
                        type='button'
                        className='btn-block'
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                    >
                        Proceed To Checkout
                    </Button>




                </div>

            </div>
        </div>
    )
}

export default Cartscreen
