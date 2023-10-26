import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home.js';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AddProduct from './views/AddProduct/AddProduct';
import ProductDetail from './views/ProductDetail/ProductDetail.js';
import UpdateProduct from './views/UpdateProduct/UpdateProduct.js';


const router = createBrowserRouter ([{
  path : '/',
  element:<Home/>
},
{
  path: '/add-product',
  element:<AddProduct/>
},
{
  path: '/update-product/:_id',
  element:<UpdateProduct/>
},
{
  path: '/product-detail/:_id',
  element: <ProductDetail/>
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);


