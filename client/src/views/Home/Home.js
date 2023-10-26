import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./Home.css";

function Home() {
    const [product, setProduct] = useState([]);

    const loadProducts = async () => {
        const response = await axios.get('/products');
        // console.log(response?.data?.data);  
        setProduct(response?.data?.data)
    }

    const deleteProduct = async (_id) =>{
        // alert(_id)
        const response = await axios.delete(`/product/${_id}`)
        if(response?.data?.success){
            loadProducts();
        }
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (  

        <>
            <h1 className="text-center">Add Product</h1>
            <div className="main-container">
                {
                    product.map((product, index) => {
                        const {_id, name, description, price, productImage, brand } = product;
                        return (

                            <div key={index} className="product-card" >
                             {/* onClick={()=>{
                                window.open(`/student-detail/${_id}`,'_blank')
                             }}> */}
                                <div className="product-container">
                                    
                                        <img src={productImage} className="product-img" />                                     
                                        <h2 className="product-name">{name}</h2>
                                        {description}
                                        <h3>{price}</h3>
                                        <h3>{brand}</h3>
                                        <a href={`product-detail/${_id}`} target='_blank'> Views Details</a>
                                        <button className="btn-delete-student" onClick={() => {deleteProduct(_id)}}> 🗑️ </button>
                                        <a href={`update-product/${_id}`} target='_blank' className="btn-edit-product"> 🖋️</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Home