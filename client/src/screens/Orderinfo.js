import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder } from '../actions/orderActions'
import { getOrderById } from "../actions/orderActions";
import { Button, ListGroup } from 'react-bootstrap'
import Error from "../components/Error";
import Loader from "../components/Loader";
export default function Orderinfo({ match }) {

  const loginreducer = useSelector(state => state.loginReducer)
  const { currentUser } = loginreducer

  const deliverHandler = () => {
    dispatch(deliverOrder)
  }


  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getOrderByIdReducer);

  const { order, loading, error } = orderstate;

  useEffect(() => {
    dispatch(getOrderById(match.params.orderid));
  }, [dispatch]);
  return (
    <div>
      {error && <Error error="Something went wrong" />}
      {loading && <Loader />}
      {order && (
        <div>
          <div className="row justify-content-center">
            <div className="col-md-5 card">
              <h2>Items In Your Cart</h2>
              <hr />
              {order.orderItems.map((item) => {
                return (
                  <div className="orderitem">
                    <h1>{item.name}</h1>
                    <h1>
                      Quantity : <b>{item.quantity}</b>
                    </h1>
                    <h1>
                      Price : {item.quantity} * {item.price} ={" "}
                      {item.price * item.quantity}
                    </h1>
                    <hr />
                  </div>
                );
              })}
            </div>
            <div className="col-md-5 text-right card">
              <h2>Order Details</h2>

              <hr />
              <h3>Total Amount : {order.orderAmount}</h3>
              <h3>Date Of order : {order.createdAt.substring(0, 10)}</h3>
              {order.isPaid ? (<h3>Payment Paid</h3>)
                : (<h3>Payment Paid.</h3>)

              }
              {order.isDelivered ? (
                <h3>Order Delivered</h3>
              ) : (
                <h3>Order Placed</h3>
              )}

              <hr />

              <div className="text-right">
                <h2>Shipping Details</h2>

                <hr />

                <h1 className="text-right">
                  Gate : <b>{order.shippingAddress.address}</b>
                </h1>
                <h1 className="text-right">
                  Apartment : <b>{order.shippingAddress.city}</b>
                </h1>

                <h1 className="text-right">
                  Phonenumber : <b>{order.shippingAddress.country}</b>
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



/**<Col md={9}>
                <h2>My Orders</h2>
                {loading  ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                            <Table striped responsive className='table-sm'>
                                <thead>
                                    <tr>
                                            <th>Amount</th>
                                        <th>Date</th>
                                         <th>Payment Status</th>
                                          <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                           {orders && (orders.map(order=>{
                              return <tr>
                      <td>{order.orderAmount}</td>
                      <td>{order.createdAt.substring(0,10)}</td>
                      <td>{order.isPaid ? (<li>Payment Processing</li>) : (<li>Payment Completed</li>)}</td>
                      <td>{order.isDelivered ? (<li>Delivered</li>) : (<li>Order Placed</li>)}</td>
                      </tr>
                     <td>
                                                <LinkContainer to={`/orderinfo/${order._id}`}>
                                                    <Button className='btn-sm'>Details</Button>
                                                </LinkContainer>
                                            </td>
                   
                  }))}
                                </tbody>
                            </Table>
                        )}

            </Col>0 */