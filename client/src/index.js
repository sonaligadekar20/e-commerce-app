import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home.js';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AddProduct from './views/AddProduct/AddProduct';
import ProductDetail from './views/ProductDetail/ProductDetail.js';


const router = createBrowserRouter ([{
  path : '/',
  element:<Home/>
},
{
  path: '/addproduct',
  element:<AddProduct/>
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


