import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Loader from '../components/Loader'
import Message from '../components/Message'
import Formcontainer from '../components/Formcontainer'
import { registerNewUser } from '../actions/userActions'

import Success from "../components/Success";
function Registerscreen() {

    const registerstate = useSelector(state => state.registerNewUserReducer)

    const { loading, error, success } = registerstate

    const [name, setname] = useState("");
    const [email, setemail] = useState("");

    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");

    const dispatch = useDispatch()

    function register(e) {

        e.preventDefault()

        const user = {
            name: name,
            email: email,
            password: password
        }

        if (password !== cpassword) {
            alert('passwords not matched')
        } else {
            dispatch(registerNewUser(user))
        }

    }

    useEffect(() => {

        if (localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }

    }, [])


    return (
        <Formcontainer>
            <h1>Register  <i style={{ fontSize: '25px' }} className="fa fa-user-plus" aria-hidden="true"></i></h1>

            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            {success && (<Success success='Your Registration is successfull' />)}


            <Form onSubmit={register}>

                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type='name'
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
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
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
                        required
                        type='password'
                        placeholder='Confirm Password'
                        value={cpassword}
                        onChange={(e) => setcpassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
            
            
                <Button type='submit' variant='primary'>
                    Register
                </Button>

            </Form>
            

        </Formcontainer>

    )
}

export default Registerscreen

