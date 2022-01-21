import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'


export default function Product({ product }) {
    return (
        <div>
            <div >
                <Link to={`/product/${product._id}`}><img src={product.image} className='image-fluid' alt="pic doesnt load for some reason prolly cause it aint http " /></Link>
                <Link to={`/product/${product._id}`}> <h1>{product.name}</h1></Link>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#39ff14'} />

                <h1>Price :${product.price}</h1>


            </div>

        </div>
    )
}
