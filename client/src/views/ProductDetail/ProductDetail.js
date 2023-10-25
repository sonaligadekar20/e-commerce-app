import React, { useEffect, useState } from 'react'
import "./ProductDetail.css"
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ProductDetail(){
    const [product, setProduct] = useState({})

    const {_id} = useParams();
    
    const loadProduct = async () =>{
        const response = await axios.get(`/product/${_id}`);
        setProduct(response?.data?.data)
    }

    useEffect(()=>{
        loadProduct();
    },[])

    return(
        <div>
            <h1>ProductDetail</h1>
            <h2>Product ID: {_id} </h2>
            <p>Name: {product.name}</p>
            <p>{product.description}</p>
            <img src = {product.productImage}/>
            <p>Price: {product.price}</p>
            <p>Brand: {product.brand}</p>

        </div>
    )
}
export default ProductDetail