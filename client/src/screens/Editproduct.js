import React from 'react'
import { getProductById, updateProduct } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import { Form, Button } from 'react-bootstrap';
import Formcontainer from '../components/Formcontainer'

function Editproduct({ match }) {

    const dispatch = useDispatch();
  const productstate = useSelector((state) => state.getProductByIdReducer);

  const { product, error, loading } = productstate;

  const updateproductstate = useSelector((state) =>state.updateProductReducer)

  const {success , updateerror , updateloading} = updateproductstate

  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [countinstock, setcountinstock] = useState();
  const [imageurl, setimageurl] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    if (product) {
      if (product._id == match.params.productid) {
        setname(product.name);
        setprice(product.price);
        setdescription(product.description);
        setimageurl(product.image);
        setcategory(product.category);
        setcountinstock(product.countInStock);
      } else {
        dispatch(getProductById(match.params.productid));
      }
    } else {
      dispatch(getProductById(match.params.productid));
    }
  }, [dispatch, product]);

  function editproduct(e) {
    e.preventDefault();
    const updatedproduct = {
      name: name,
      price: price,
      description: description,
      countInStock: countinstock,
      category: category,
      image: imageurl,
    };

    dispatch(updateProduct(match.params.productid, updatedproduct));
  }






    return (
        <Formcontainer>
            <h1>Add Product <i style={{ fontSize: '25px' }} className="fa fa-user-plus" aria-hidden="true"></i></h1>

            {success && (<Success success='Product Added Succesfully' />)}
            {loading && (<Loader />)}
            {error && (<Error error='Something went wrong' />)}


            <Form onSubmit={editproduct}>

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

                <Form.Group controlId='Enter Price'>
                    <Form.Label>Enter Price</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter Price'
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='description'>
                    <Form.Label>description</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter description'
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='imageurl'>
                    <Form.Label>Enter imageurl</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter imageurl'
                        value={imageurl}
                        onChange={(e) => setimageurl(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='category'>
                    <Form.Label>Enter Category</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter category'
                        value={category}
                        onChange={(e) => setcategory(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='countinstock'>
                    <Form.Label>Enter Count in Stock</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter count in stock'
                        value={countinstock}
                        onChange={(e) => setcountinstock(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Button
                    className="btn mt-5"
                    type="submit"
                    style={{ float: "left" }}
                >
                    Add Product
                </Button>


            </Form>

        </Formcontainer>


    )
}

export default Editproduct
