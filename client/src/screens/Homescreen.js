import React from 'react'
import axios from 'axios'
import Product from '../components/Product'
import { useEffect, useState } from 'react'
import Loader from "../components/Loader";
import Error from "../components/Error";

import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../actions/productActions'



function Homescreen() {


    const getallproductstate = useSelector(state => state.getAllProductsReducer)


    const { loading, products, error } = getallproductstate
    const dispatch = useDispatch()

    useEffect(() => {
        if (!localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }

        dispatch(getAllProducts())

    }, [])


    return (

        

        <div>
            <div className="row justify-content-center">
            

                {loading ? (
                    <Loader/>
                ) : error ? (
                    <Error error='System is down. Please be patient while it is being fixed'/>
                ) : (
                    products.map(product =>{
                        return <div className="col-md-3 my-3 p-3 rounded"> 
                            <Product product={product}/>
                        </div>
                    })
                )
                }


            </div>
        </div>
    )
}

export default Homescreen
