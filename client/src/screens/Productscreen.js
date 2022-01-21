import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../actions/productActions';
import { addToCart } from '../actions/cartActions'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Row, Col, Image, ListGroup, Button, Card, Form, Nav } from 'react-bootstrap';
import Rating from '../components/Rating';



function Productscreen({ match }) {
    const productid = match.params.id;
    const dispatch = useDispatch()
    const [quantity, setquantity] = useState(1)

    const getproductbyidstate = useSelector(state => state.getProductByIdReducer)

    const { product, loading, error } = getproductbyidstate

    const cartreducer = useSelector(state => state.cartReducer)
    const { cartItems } = cartreducer

    function addtocart() {
        dispatch(addToCart(product, quantity))
    }


    useEffect(() => {

        dispatch(getProductById(productid))


    }, [])



    return (



        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>

            {loading ? <Loader /> : error ? <Error error='System is down please be patient while it is being fixed' /> : (
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />

                    </Col>


                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#39ff14'} />
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>

                        </ListGroup>
                    </Col>

                    <Col md={3}>
                        <Card>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Select Desired Amount</Col>
                                        <Col xs='auto' className='my-1'>
                                            <Form.Control
                                                as="select"
                                                value={quantity}
                                                onChange={(e) => setquantity(e.target.value)}
                                            >
                                                {

                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }

                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className='btn-block' onClick={addtocart} disabled={product.countInStock === 0} type='button'>Add to bag </Button> 
                                <LinkContainer to='/cart'> 
                                    <Nav.Link><i className="fas fa-shopping-cart"></i>{cartItems.length} </Nav.Link>
                                </LinkContainer>

                            </ListGroup.Item>
                        </Card>

                    </Col>



                </Row>



            )}






        </div>
    )
}

export default Productscreen
