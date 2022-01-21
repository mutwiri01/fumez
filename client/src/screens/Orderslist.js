import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { getAllOrders } from '../actions/orderActions'

function Orderslist() {

    const getordersstate = useSelector(state => state.getAllOrdersReducer)

    const { loading, error, orders } = getordersstate
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getAllOrders())

    }, [])


    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <h2>Orders List</h2>

                    <table className="table table-striped table-responsive-sm">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>


                        <tbody>

                            {loading && (<Loader />)}
                            {orders && (orders.map(order => {
                                return <tr onClick={() => { window.location = `/orderinfo/${order._id}` }}>
                                    <td>{order.name}</td>
                                    <td>{order.orderAmount}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>{order.isPaid ? (<li>Payment Processing</li>) : (<li>Payment Completed</li>)}</td>
                                    <td>{order.isDelivered ? (<li>Delivered</li>) : <Button type='button' className='btn btn-block'>PENDING ORDER</Button>}</td>
                                </tr>


                            }))}

                            {error && (<Error error='something went wrong' />)}

                        </tbody>




                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orderslist

/**{ !order.isDelivered && (
                                    <ListGroup.Item>
                                        <Button
                                            type='button'
                                            className='btn btn-block'
                                        >
                                            PENDING ORDER
                                        </Button>
                                    </ListGroup.Item>
                                )} */