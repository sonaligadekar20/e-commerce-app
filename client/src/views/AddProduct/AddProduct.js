import axios from 'axios'
import { useState } from 'react'
import "./AddProduct.css"

function AddProduct() {
   
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const [brand, setBrand] = useState('');

    const adddetails = async () => {
        const details = {
            name,
            description,
            price,
            productImage,
            brand
        }
        await axios.post('/product', details)

    }
    return (
        <div>
            <form className='form-container'>
                <h1 className='heading'>Add Product Details</h1>

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

                <button type='button' onClick={adddetails}className='btn' >Add Product</button>
            </form>
       
        </div>
    )
}

export default AddProduct


