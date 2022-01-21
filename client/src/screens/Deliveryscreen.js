import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import FormContainer from '../components/Formcontainer'
import CheckoutSteps from '../components/Checkoutsteps'

function Deliveryscreen({ history }) {
    const cartreducerstate = useSelector(state => state.cartReducer)

    const { shippingAddress } = cartreducerstate

    const dispatch = useDispatch()

    const [address, setAddress] = useState()
    const [city, setCity] = useState()
    const [postalCode, setPostalCode] = useState()
    const [country, setCountry] = useState()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }


    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Delivery</h1>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='address'>
                    <Form.Label>Gate</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='input which gate side;A,B or C?'
                        value={address ? address : ''}
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>Apartment name</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Type the name of the apartment '
                        value={city ? city : ''}
                        onChange={(e) => setCity(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        required
                        type='integer'
                        placeholder='Enter Phone Number'
                        value={country ? country : ''}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default Deliveryscreen
