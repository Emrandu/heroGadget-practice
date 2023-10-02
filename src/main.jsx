import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './components/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Shop from './components/Cards/Shop.jsx';
import Cart from './components/Cards/Cart.jsx';
import About from './components/About.jsx';
import { productsAndCartData } from './Loader/Loader.js';
import { Toaster } from 'react-hot-toast';

  const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        errorElement:<ErrorPage/>,
        loader: productsAndCartData,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/shop',
                element:<Shop />
            },
            {
                path:'/cart',
                element:<Cart />
            },
            {
                path:'/about',
                element:<About/>
            },

        ]
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(

    <>
    <Toaster/>
    <RouterProvider router ={router}/>
    </>

)
