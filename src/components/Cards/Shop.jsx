import React, { useContext } from 'react';
import { CartContext, ProductContext } from '../../App';
import ProductCard from './ProductCard';
import { addToDb } from '../../utilities/fakeDb';


const Shop = () => {
    const products = useContext(ProductContext);
    const [cart, setCart] = useContext(CartContext)

    console.log(cart)

    const handleAddToCart = (product) =>{
        let newCart = [];
        const exist = cart.find(existingProduct => existingProduct.id === product.id)

        if(!exist){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            const rest = cart.filter(existingProduct=> existingProduct.id !== product.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart)
        addToDb(product.id)

        
    }

    return (
        <>
           <div className='product-container'>
               {
                products.map(product=><ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></ProductCard>)
               }
            </div>   
        </>
    );
};

export default Shop;