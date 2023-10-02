import React, { useContext } from 'react';
import { CartContext } from '../../App';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakeDb';
import toast from 'react-hot-toast';

const Cart = () => {
    const  [cart, setCart] =useContext(CartContext);
    console.log(cart)

    let total = 0;
    if(cart.length > 0){
        for(const product of cart){
            total = total + product.price * product.quantity;
        }
    }

// delete single item from ui and local Storage

    const handleRemoveItem = (id) =>{
        const remaining = cart.filter(product=>product.id !== id)
        setCart(remaining);
        removeFromDb(id);
        toast.error('items removed')
    }

    // delete Shopping Cart

    const handleClearCart = () =>{
        if(cart.length > 0){
            setCart([]);
            deleteShoppingCart()
            return toast.success('All Items Removed')
        }
        
    }

    const handlePlaceOrder = () =>{
        if(cart.length > 0){
            setCart([]);
            deleteShoppingCart()
            return toast.success('Order Placed Successfully')
        }
        return toast.error('Cart is Empty')
    }

    

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
                    handleRemoveItem ={handleRemoveItem}
                    
                    ></CartItem>)
                }
            </ul>

            <div className='space-y=1 text-right'>
                <p>Total Amount: <span className='font-semibold'>
                    {total} $
                    </span> </p>
                    <p className='text-sm text-gray-400'>Not including taxes and shipping Costs</p>
            </div>

        
                <div>
                    {
                        cart.length > 0 ? (<button  onClick={handleClearCart } className='btn-outlined'>Clear Cart</button>) : (
                        <Link to='/shop'>
                        <button className='btn-outlined'>Back to Shop</button>
                        </Link>
                        )
                    }
                    
                    <button onClick={handlePlaceOrder} className='btn-primary'>Place Order</button>
                </div>





            </div> 
            </div> 
        </>
    );
};

export default Cart;