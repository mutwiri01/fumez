import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../actions/userActions";
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import Error from "../components/Error";
import Loader from "../components/Loader";
import Message from '../components/Message'
import Success from "../components/Success";

import { getOrdersByUserId } from "../actions/orderActions";

function Profilescreen() {

    const loginstate = useSelector((state) => state.loginReducer);
    const updateuserstate = useSelector((state) => state.updateReducer);
    const currentUser = loginstate.currentUser;
    const { loading, success, error } = updateuserstate
    const dispatch = useDispatch()
    const [name, setname] = useState(currentUser.name);
    const [email, setemail] = useState(currentUser.email);
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [message, setMessage] = useState('')


    const orderstate = useSelector(state => state.getOrdersByUserIdReducer)

    const { orders } = orderstate

    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
          dispatch(getOrdersByUserId());
        } else {
          window.location.href = "/login";
        }
      }, [dispatch]);


    function update(e) {

        e.preventDefault()
        if (password === cpassword) {
            const updateduser = {
                name: name,
                email: email,
                password: password,
            };
            dispatch(updateUser(currentUser._id, updateduser));
        }
        else {
            alert('Passwords Not matched')
        }
    }


    return (


        <Row>

            <Col md={9}>
                <h2>My Orders</h2>
                <h1><b> If you have issues with any order please call +254780671512 for assistance </b></h1>
                {loading ? (
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {loading && (<Loader/>)}
                  {orders && (orders.map(order=>{
                    return <tr onClick={()=>{window.location=`/orderinfo/${order._id}`}}>
                      <td>{order.orderAmount}</td>
                      <td>{order.createdAt.substring(0,10)}</td>
                      <td>{order.isPaid ? (<li>Payment Processing</li>) : (<li>Payment Completed</li>)}</td>
                      <td>{order.isDelivered ? (<li>Delivered</li>) : (<li>Order Placed</li>)}</td>

                      <td> <LinkContainer to={`/orderinfo/${order._id}`}>
                                                    <Button className='btn-sm'>Details</Button>
                                                </LinkContainer></td>
                      </tr>
                      
                     
                   
                  }))}

                        </tbody>
                    </Table>
                )}

            </Col>
        </Row>





    )
}

export default Profilescreen

/**
            <Col md={3}>
                <h2>User Profile</h2>

                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={update}>

                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setemail(e.target.value)}



                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control

                            type='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}



                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='passwordConfirm'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control

                            type='password'
                            placeholder='Confirm Password'
                            value={cpassword}
                            onChange={(e) => setcpassword(e.target.value)}


                        >
                        </Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Update
                    </Button>
                </Form>
            </Col> */

/** 
 * 
 * 

<Row>
            <Col md={3}>
                <h2>User Profile</h2>

                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={update}>

                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setemail(e.target.value)}



                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control

                            type='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}



                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='passwordConfirm'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control

                            type='password'
                            placeholder='Confirm Password'
                            value={cpassword}
                            onChange={(e) => setcpassword(e.target.value)}


                        >
                        </Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Update
                    </Button>

                </Form>
            </Col>


            
             <Col md={9}>
                <h2>My Orders</h2>
                {loadingOrders ? (
                    <Loader />
                ) : errorOrders ? (
                    <Message variant='danger'>{errorOrders}</Message>
                ) : (
                            <Table striped responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Date</th>
                                        <th>Total</th>
                                        <th>Paid</th>
                                        <th>Delivered</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {orders.map(order => (
                                        <tr key={order._id}>
                                            <td>{order._id}</td>
                                            <td>{order.createdAt.substring(0, 10)}</td>
                                            <td>${order.totalPrice}</td>
                                            <td>{order.isPaid ? order.paidAt.substring(0, 10) : (
                                                <i className='fas fa-times' style={{ color: 'red' }}></i>
                                            )}</td>
                                            <td>
                                                <LinkContainer to={`/order/${order._id}`}>
                                                    <Button className='btn-sm'>Details</Button>
                                                </LinkContainer>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        )}

            </Col>



        </Row>

















*/