import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./Home.css";

function Home() {
    const [product, setProduct] = useState([]);

    const loadproduct = async () => {
        const response = await axios.get('/products');
        // console.log(response?.data?.data);  
        setProduct(response?.data?.data)
    }

    useEffect(() => {
        loadproduct()
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
                                    <div>
                                        <img src={productImage} className="product-img" />
                                    </div>

                                    <div>
                                                                               
                                        <h1>{name}</h1>
                                        {description}
                                        <h2>{price}</h2>
                                        <h3>{brand}</h3>
                                        <a href={`product-detail/${_id}`} target='_blank'> Views Details</a>
                                    </div>
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