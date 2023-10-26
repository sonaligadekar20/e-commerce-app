import axios from 'axios'
import { useEffect, useState } from 'react'
import "./UpdateProduct.css"
import { useParams } from 'react-router-dom';


function UpdateProduct() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const [brand, setBrand] = useState('');

    const { _id } = useParams();

    const loadProducts = async () => {
        const response = await axios.get(`/product/${_id}`)

        const { name, description, price, productImage, brand} = response?.data?.data
        setName(name)
        setDescription(description)
        setPrice(price)
        setProductImage(productImage)
        setBrand(brand)
        }

        useEffect(() =>{
         loadProducts()
        }, [])

        const UpdateProduct = async () => {

            const updatedDetails = {
                name,
                description,
                price,
                productImage,
                brand
            }
            const response = await axios.put(`/product/${_id}`, updatedDetails);
            alert(response?.data?.message)

        }
        return (
            <div>
                <form className='form-container'>
                    <h1 className='heading'>Update Product Details</h1>

                    <input type='text'
                        placeholder='name'
                        className='form-input'
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />

                    <input type='text'
                        placeholder='description'
                        className='form-input'
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />

                    <input type='number'
                        placeholder='price'
                        className='form-input'
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }} />

                    <input type='text'
                        placeholder='img-url'
                        className='form-input'
                        value={productImage}
                        onChange={(e) => { setProductImage(e.target.value) }} />

                    <input type='text'
                        placeholder='brand  '
                        className='form-input'
                        value={brand}
                        onChange={(e) => { setBrand(e.target.value) }} />

                    <button type='button' onClick={UpdateProduct} className='btn' >Update Product</button>
                </form>

            </div>
        )
    }

    export default UpdateProduct


