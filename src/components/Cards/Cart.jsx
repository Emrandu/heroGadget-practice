import React, { useContext } from 'react';
import { CartContext } from '../../App';
import CartItem from './CartItem';

const Cart = () => {
    const  [cart, setCart] =useContext(CartContext);
    console.log(cart)
    return (
        <>
           <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
           <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
            <h2 className='text-xl font-semibold'>{cart.length ? 'Review Cart' : 'Cart is Empty'}</h2>

            <ul className='flex flex-col divide-y divide-gray-700'>
                {
                    cart.map(product=><CartItem
                    key={product.id}
                    product={product}
                    
                    ></CartItem>)
                }
            </ul>

            </div> 
            </div> 
        </>
    );
};

export default Cart;